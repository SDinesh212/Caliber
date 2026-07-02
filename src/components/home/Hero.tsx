"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#eef3fb] px-5 pt-[150px]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-office-team1.jpg"
          alt="Professional staffing team"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/35 to-white/5" />
        
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-150px)] max-w-[1510px] items-center gap-16 pb-20 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[720px]">

          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#12324F] shadow-[0_10px_35px_rgba(15,47,74,0.12)]">
            <Sparkles size={16} className="text-[#C78C2D]" />
            Top Rated Staffing Agency
          </div>

          <h1 className="text-[46px] font-black leading-[1.1] tracking-tight text-[#102A43] md:text-[72px]">
            Connecting Great Talent with Great Opportunities
          </h1>

          <p className="mt-8 max-w-[650px] text-lg leading-8 text-black/600">
            We bridge the gap between exceptional talent and forward-thinking
            companies. Find the perfect fit faster with intelligent staffing
            solutions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#102A43] px-8 py-4 font-bold text-white shadow-xl shadow-[#102A43]/20 transition hover:-translate-y-1 hover:bg-[#071F36]"
            >
              Find Jobs <ArrowRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#D8C7A8] bg-white px-8 py-4 font-bold text-[#102A43] shadow-sm transition hover:-translate-y-1"
            >
              Hire Talent <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}