"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "scale";

type RevealProps = HTMLMotionProps<"div"> & {
  as?: "div" | "section";
  children: ReactNode;
  delay?: number;
  direction?: RevealDirection;
  once?: boolean;
};

const revealOffsets: Record<RevealDirection, Record<string, number>> = {
  up: { y: 28 },
  left: { x: -28 },
  right: { x: 28 },
  scale: { y: 16, scale: 0.97 },
};

const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Reveal({
  as = "div",
  children,
  delay = 0,
  direction = "up",
  once = true,
  transition,
  viewport,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, ...revealOffsets[direction] }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, x: 0, y: 0, scale: 1 }
      }
      viewport={viewport ?? { once, amount: 0.22 }}
      transition={
        transition ?? {
          delay,
          duration: 0.62,
          ease: revealEase,
        }
      }
      {...props}
    >
      {children}
    </MotionTag>
  );
}
