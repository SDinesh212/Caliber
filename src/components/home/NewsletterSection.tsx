"use client";

import { motion } from "framer-motion";
import { Mail, ShieldCheck } from "lucide-react";
import {
  fadeUp,
  inViewViewport,
  staggerContainer,
} from "@/components/animation/MotionPrimitives";

export default function NewsletterSection() {
  return (
    <section id="resources" className="scroll-mt-28 bg-white px-5 py-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inViewViewport}
        className="relative mx-auto max-w-[1510px] overflow-hidden rounded-[28px] border border-[#E4EAF2] bg-gradient-to-br from-[#F8FBFF] via-[#F4F8FF] to-[#EEF7FF] px-8 py-16 shadow-[0_20px_70px_rgba(15,47,74,0.10)] md:px-14 lg:px-16"
      >
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full border-[28px] border-[#DCEBFF]/70"
        />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-[38%] skew-x-[-28deg] bg-[#E8F1FF]/80" />

        <div
          className="animated-dot-field absolute bottom-12 left-10 h-24 w-32 opacity-30"
          style={{
            backgroundImage: "radial-gradient(#1B63FF 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_620px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
          >
            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-4xl font-black leading-tight text-[#12324F] md:text-5xl"
            >
              Receive remote hiring insights delivered weekly.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-lg leading-8 text-[#667085]"
            >
              Get staffing trends, hiring tips, candidate insights, and growth
              ideas directly in your inbox.
            </motion.p>
          </motion.div>

          <motion.form
            id="contact"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inViewViewport}
            transition={{ duration: 0.62 }}
            className="relative scroll-mt-28"
          >
            <label className="mb-4 block text-sm font-black text-black">
              Email*
            </label>

            <div className="flex rounded-full border-2 border-[#1B63FF] bg-white p-2 shadow-sm">
              <div className="flex flex-1 items-center gap-3 px-4">
                <motion.span
                  animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#EAF2FF] text-[#1B63FF]"
                >
                  <Mail size={20} />
                </motion.span>

                <input
                  type="email"
                  placeholder="Enter your Email here..."
                  className="w-full bg-transparent text-base text-[#12324F] outline-none placeholder:text-[#98A2B3]"
                />
              </div>

              <button
                type="button"
                className="animated-sheen rounded-full bg-[#1B63FF] px-9 py-4 text-sm font-black uppercase text-white transition hover:bg-[#123FE8] cursor-pointer "
              >
                Submit
              </button>
            </div>

            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              className="mt-6 inline-flex items-center gap-3 bg-[#1A73E8] px-5 py-4 text-white shadow-md"
            >
              <ShieldCheck size={22} />
              <span className="text-sm font-semibold">
                protected by reCAPTCHA
              </span>

              <div className="ml-4 grid h-12 w-12 place-items-center bg-white text-[#1A73E8]">
                ↻
              </div>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
