"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
  type MotionStyle,
  type Variants,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const inViewViewport = {
  once: true,
  amount: 0.18,
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: smoothEase,
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -36,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
};

export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 36,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
};

export const popIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 18,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
};

type MagneticCardProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  glow?: boolean;
  intensity?: number;
};

export function MagneticCard({
  children,
  className,
  glow = false,
  intensity = 9,
  onMouseLeave,
  onMouseMove,
  style,
  ...props
}: MagneticCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
    mass: 0.45,
  });
  const smoothRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
    mass: 0.45,
  });
  const spotlight = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(27, 99, 255, 0.16), transparent 38%)`;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!shouldReduceMotion) {
      const rect = event.currentTarget.getBoundingClientRect();
      const pointerX = (event.clientX - rect.left) / rect.width;
      const pointerY = (event.clientY - rect.top) / rect.height;

      rotateX.set((0.5 - pointerY) * intensity);
      rotateY.set((pointerX - 0.5) * intensity);
      glowX.set(pointerX * 100);
      glowY.set(pointerY * 100);
    }

    onMouseMove?.(event);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    rotateX.set(0);
    rotateY.set(0);
    onMouseLeave?.(event);
  };

  const motionStyle: MotionStyle = {
    ...style,
    rotateX: smoothRotateX,
    rotateY: smoothRotateY,
    transformPerspective: 900,
    transformStyle: "preserve-3d",
  };

  return (
    <motion.div
      {...props}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={motionStyle}
      className={["relative transform-gpu", className].filter(Boolean).join(" ")}
    >
      {glow && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      )}
      {children}
    </motion.div>
  );
}
