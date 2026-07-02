"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ShieldCheck,
  Sparkles,
  BarChart3,
} from "lucide-react";
import {
  fadeUp,
  inViewViewport,
  MagneticCard,
  slideLeft,
  slideRight,
} from "@/components/animation/MotionPrimitives";

export default function WhyChooseUs() {
  const features = [
    { label: "Smart Matching", icon: Sparkles },
    { label: "Bias-Free Screening", icon: ShieldCheck },
    { label: "Skills Assessment", icon: ClipboardCheck },
    { label: "Predictive Analytics", icon: BarChart3 },
  ];

  const scoreItems = ["Skills Match", "Experience", "Culture Fit", "Availability"];

  return (
    <section className="bg-white px-5 py-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inViewViewport}
        className="relative mx-auto max-w-[1510px] overflow-hidden rounded-[22px] bg-gradient-to-r from-[#F5FAFF] via-[#EEF7FF] to-[#EAF3FF] px-8 py-10 shadow-[0_14px_45px_rgba(15,47,74,0.08)]"
      >
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ x: [0, 18, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/80 blur-[80px]"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, -14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#DBEDFF] blur-[90px]"
          />
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-[300px_230px_1fr]">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            className="hidden min-h-[190px] items-center justify-center rounded-[26px] bg-white/35 lg:flex"
          >
            <motion.div
              whileHover={{ rotate: 2, scale: 1.03 }}
              className="relative grid h-[170px] w-[170px] place-items-center rounded-[34px] bg-white shadow-[0_20px_50px_rgba(15,47,74,0.12)]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-[30px] border border-[#2F7BFF]/10"
              />
              <div className="grid h-[118px] w-[118px] place-items-center rounded-full bg-[#EAF2FF]">
                <div className="grid h-[92px] w-[92px] place-items-center rounded-full border-[10px] border-[#2F7BFF] bg-white text-center">
                  <div>
                    <p className="text-2xl font-black text-[#12324F]">95%</p>
                    <p className="text-[10px] font-medium text-[#667085]">
                      AI Match Score
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <MagneticCard
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            whileHover={{ y: -6, scale: 1.02 }}
            glow
            className="rounded-[18px] bg-white p-5 shadow-[0_18px_45px_rgba(15,47,74,0.12)]"
          >
            <div className="space-y-4">
              {scoreItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center justify-between gap-5"
                >
                  <span className="text-sm font-medium text-[#12324F]">
                    {item}
                  </span>
                  <CheckCircle2 size={17} className="text-[#12B8A6]" />
                </motion.div>
              ))}
            </div>
          </MagneticCard>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
          >
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1B63FF]">
              AI-Powered Matching
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-[#12324F] md:text-4xl">
              Intelligent Matching for Better Results
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#667085] md:text-base">
              Our AI-powered platform analyzes skills, experience, and cultural
              fit to match the right talent with the right opportunities.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.label}
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="flex items-center gap-2 text-sm font-bold text-[#12324F]"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#EAF2FF] text-[#1B63FF]">
                      <Icon size={16} />
                    </span>
                    {feature.label}
                  </motion.div>
                );
              })}
            </div>

            <button className="animated-sheen mt-7 inline-flex items-center gap-3 rounded-lg bg-[#0F2F4A] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#0F2F4A]/20 transition hover:-translate-y-1 cursor-pointer">
              Learn How It Works
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
