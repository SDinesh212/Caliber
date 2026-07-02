"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import {
  fadeUp,
  inViewViewport,
  MagneticCard,
  staggerContainer,
} from "@/components/animation/MotionPrimitives";

const testimonials = [
  {
    title: "Remarkably smooth process",
    message:
      "The experience was nothing short of exceptional. From start to finish, the entire process was remarkably smooth.",
    name: "Carmen Lopez",
    role: "Recruiter, Tribu",
    avatar: "C",
  },
  {
    title: "Like your own recruiter",
    message:
      "It felt like we’d hired an in-house recruiter. This made my job really easy.",
    name: "Adrian Alfieri",
    role: "Founder & CEO, Verbatim",
    avatar: "A",
  },
  {
    title: "Your time back",
    message:
      "Hire With Calliber Tech saved me a lot of time handling posting, sourcing, screening, and initial interviews.",
    name: "Joshua Thompson",
    role: "Partner and COO, Kordis",
    avatar: "J",
  },
  {
    title: "Excellent candidate quality",
    message:
      "The candidates were highly qualified and matched exactly what our team needed.",
    name: "Rahul Sharma",
    role: "Founder, CloudWorks",
    avatar: "R",
  },
  {
    title: "Fast hiring support",
    message:
      "We reduced our hiring timeline and filled key roles much faster than expected.",
    name: "Jennifer Martinez",
    role: "HR Director, TechNova Inc.",
    avatar: "J",
  },
  {
    title: "Perfect career match",
    message:
      "They helped me find a role that perfectly matched my skills and career goals.",
    name: "Sarah Johnson",
    role: "Product Designer",
    avatar: "S",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1 > testimonials.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  return (
    <section id="stories" className="scroll-mt-28 bg-white px-5 py-24">
      <div className="mx-auto max-w-[1510px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          className="grid gap-8 border-b border-[#E4E7EC] pb-12 lg:grid-cols-2"
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl text-4xl font-medium leading-tight text-black md:text-5xl"
          >
            What Clients Say About Hire With Calliber Tech
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg leading-8 text-[#667085]"
          >
            Client feedback consistently highlights what sets Calliber Tech LLC
            apart as a leading recruitment company across these key areas.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          <MagneticCard
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            whileHover={{ y: -8, scale: 1.012 }}
            glow
            className="group flex min-h-[430px] flex-col justify-between rounded-xl border border-[#E4E7EC] bg-white p-7 shadow-[0_12px_35px_rgba(15,47,74,0.06)]"
          >
            <div className="flex items-start gap-5">
              <div className="text-5xl font-black text-[#FF4E1F]">G2</div>

              <div className="flex gap-3">
                <Badge title="Clients Love Us" />
                <Badge title="Leader" />
              </div>
            </div>

            <div>
              <div className="flex items-end gap-3">
                <p className="text-8xl font-medium leading-none text-black">
                  4.9
                </p>
                <p className="mb-3 text-sm font-bold text-black">out of 5</p>
              </div>

              <div className="mt-4 flex gap-1 text-[#FF4E1F]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{
                      delay: i * 0.12,
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Star size={25} fill="currentColor" />
                  </motion.span>
                ))}
              </div>
            </div>
          </MagneticCard>

          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((item, index) => (
              <MagneticCard
                key={item.name}
                layout
                initial={{ opacity: 0, x: 36, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -36, scale: 0.96 }}
                transition={{ delay: index * 0.06, duration: 0.42 }}
                whileHover={{ y: -10, scale: 1.012 }}
                glow
                className="group flex min-h-[430px] flex-col justify-between rounded-xl border border-[#E4E7EC] bg-white p-7 shadow-[0_12px_35px_rgba(15,47,74,0.06)] transition hover:shadow-[0_24px_60px_rgba(15,47,74,0.12)]"
              >
              <div>
                <h3 className="text-2xl font-medium text-black">
                  {item.title}
                </h3>

                <p className="mt-24 text-xl leading-8 text-black">
                  “{item.message}”
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#F2D9BC] font-bold text-black">
                  {item.avatar}
                </div>

                <div>
                  <h4 className="font-bold text-black">{item.name}</h4>
                  <p className="text-sm text-[#667085]">{item.role}</p>
                </div>
              </div>
              </MagneticCard>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="grid h-12 w-12 place-items-center cursor-pointer rounded-full border border-[#E4E7EC] bg-white text-black transition hover:bg-black hover:text-white"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="grid h-12 w-12 place-items-center cursor-pointer rounded-full border border-[#E4E7EC] bg-white text-black transition hover:bg-black hover:text-white"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function Badge({ title }: { title: string }) {
  return (
    <div className="grid h-20 w-16 place-items-center border border-black/20 bg-[#F7F7F7] px-2 text-center text-[10px] font-bold leading-tight text-black">
      {title}
    </div>
  );
}
