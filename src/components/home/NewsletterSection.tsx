"use client";

import { motion } from "framer-motion";
import { FileUp, Mail, RefreshCw, Send, ShieldCheck, User } from "lucide-react";
import {
  fadeUp,
  inViewViewport,
  staggerContainer,
} from "@/components/animation/MotionPrimitives";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="scroll-mt-28 bg-white px-5 py-10">
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
            onSubmit={(event) => event.preventDefault()}
            encType="multipart/form-data"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inViewViewport}
            transition={{ duration: 0.62 }}
            className="relative scroll-mt-28 rounded-[24px] border border-[#D7E4F3] bg-white/90 p-5 shadow-[0_18px_45px_rgba(15,47,74,0.08)] backdrop-blur md:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-3 block text-sm font-black text-black">
                  Name*
                </span>
                <div className="premium-focus-field flex h-14 items-center gap-3 rounded-2xl border border-[#D0D5DD] bg-white px-4">
                  <User size={19} className="text-[#1B63FF]" />
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full bg-transparent text-base text-[#12324F] outline-none placeholder:text-[#98A2B3]"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-3 block text-sm font-black text-black">
                  Email*
                </span>
                <div className="premium-focus-field flex h-14 items-center gap-3 rounded-2xl border border-[#D0D5DD] bg-white px-4">
                  <motion.span
                    animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-[#1B63FF]"
                  >
                    <Mail size={19} />
                  </motion.span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full bg-transparent text-base text-[#12324F] outline-none placeholder:text-[#98A2B3]"
                  />
                </div>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-3 block text-sm font-black text-black">
                Resume*
              </span>
              <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-[#A9C7FF] bg-[#F8FBFF] px-4 py-4 sm:flex-row sm:items-center">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#EAF2FF] text-[#1B63FF]">
                  <FileUp size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-[#12324F]">
                    Upload resume
                  </p>
                  <input
                    name="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="mt-2 w-full text-sm text-[#475467] file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-[#EAF2FF] file:px-4 file:py-2 file:text-sm file:font-bold file:text-[#1B63FF] hover:file:bg-[#DCEBFF]"
                  />
                </div>
              </div>
            </label>

            <motion.div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-[#1A73E8] px-4 py-3 text-white shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                <ShieldCheck size={21} />
                <span className="text-sm font-semibold">
                  protected by reCAPTCHA
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[#1A73E8]">
                  <RefreshCw size={18} />
                </span>
              </div>

              <button
                type="submit"
                className="animated-sheen inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1B63FF] px-8 py-3 text-sm font-black uppercase text-white transition duration-200 hover:-translate-y-1 hover:bg-[#123FE8] hover:shadow-lg hover:shadow-[#1B63FF]/20"
              >
                Send
                <Send size={17} />
              </button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
