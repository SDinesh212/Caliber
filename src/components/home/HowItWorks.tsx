"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, UserRound } from "lucide-react";
import {
  fadeUp,
  inViewViewport,
  popIn,
  slideLeft,
  slideRight,
} from "@/components/animation/MotionPrimitives";

export default function HowItWorks() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-[1510px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          className="relative overflow-hidden rounded-[28px] border border-[#E5ECF5] bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF7FF] shadow-[0_18px_50px_rgba(15,47,74,0.08)]"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.82, 1, 0.82] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full rounded-full bg-[#EAF3FF] blur-[90px]"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 h-[340px] w-[340px] -translate-x-1/2">
              <motion.div
                animate={{ y: [0, -16, 0], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full rounded-full bg-[#DDEBFF]"
              />
            </div>
          </div>

          <div className="relative grid min-h-[430px] items-center gap-8 px-8 py-10 lg:grid-cols-[1fr_1.15fr_1fr] lg:px-10">
            {/* Left Content */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              className="z-10"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-3 py-1.5 text-sm font-bold text-[#1B63FF]">
                <Users size={16} />
                For Employers
              </div>

              <h2 className="max-w-sm text-3xl font-black leading-tight text-[#0F2F4A] md:text-4xl">
                Build Your Dream Team
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-[#667085]">
                Access pre-screened, highly qualified candidates and streamline
                your hiring process.
              </p>

              <ul className="mt-7 space-y-4">
                {[
                  "Access to top-tier talent pool",
                  "Reduce time-to-hire by 60%",
                  "Flexible hiring solutions",
                  "Dedicated account support",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-center gap-3 text-sm font-medium text-[#344054]"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#2F7BFF]"
                      fill="#EAF2FF"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <button className="animated-sheen mt-8 inline-flex items-center gap-3 rounded-lg bg-[#0F2F4A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0F2F4A]/20 transition hover:-translate-y-1 cursor-pointer">
                Hire Top Talent
                <ArrowRight size={17} />
              </button>
            </motion.div>

            {/* Center Image */}
            <motion.div
              variants={popIn}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              className="relative z-10 hidden min-h-[390px] items-end justify-center lg:flex"
            >
              <div className="slow-pulse-ring absolute bottom-0 h-[360px] w-[360px] rounded-full bg-[#DCEBFF]" />
              <div className="slow-pulse-ring absolute bottom-0 h-[270px] w-[270px] rounded-full border border-[#BFD8FF]" />

              <FloatingAvatar
                className="left-8 top-7"
                name="JD"
                color="border-[#F59E0B] bg-[#FFF7E8] text-[#B45309]"
                delay={0}
              />
              <FloatingAvatar
                className="right-12 top-10"
                name="AR"
                color="border-[#22C55E] bg-[#ECFDF3] text-[#15803D]"
                delay={0.45}
              />
              <FloatingAvatar
                className="left-4 top-[190px]"
                name="PM"
                color="border-[#EF4444] bg-[#FEF2F2] text-[#B91C1C]"
                delay={0.9}
              />
              <FloatingAvatar
                className="right-2 top-[205px]"
                name="MK"
                color="border-[#3B82F6] bg-[#EFF6FF] text-[#1D4ED8]"
                delay={1.2}
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20"
              >
                <Image
                  src="/images/team-staffing1.png"
                  alt="Professional staffing team"
                  width={520}
                  height={430}
                  className="h-[390px] w-auto object-contain"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              className="z-10"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F1EFFF] px-3 py-1.5 text-sm font-bold text-[#7C3AED]">
                <UserRound size={16} />
                For Candidates
              </div>

              <h2 className="max-w-sm text-3xl font-black leading-tight text-[#0F2F4A] md:text-4xl">
                Find Your Career Match
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-[#667085]">
                Explore opportunities that match your skills and career
                aspirations.
              </p>

              <ul className="mt-7 space-y-4">
                {[
                  "Personalized job recommendations",
                  "Career growth opportunities",
                  "Resume optimization",
                  "Interview preparation",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-center gap-3 text-sm font-medium text-[#344054]"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#22B8A7]"
                      fill="#EAFBF7"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Link
                href="/jobs"
                className="animated-sheen mt-8 inline-flex items-center gap-3 rounded-lg bg-[#0F2F4A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0F2F4A]/20 transition hover:-translate-y-1 cursor-pointer"
              >
                Find Your Dream Job
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingAvatar({
  name,
  className,
  color,
  delay,
}: {
  name: string;
  className: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ rotate: [0, 5, 0], scale: [1, 1.04, 1], y: [0, -10, 0] }}
      transition={{ delay, duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute z-30 grid h-16 w-16 place-items-center rounded-full border-4 text-sm font-black shadow-xl ${className} ${color}`}
    >
      {name}
    </motion.div>
  );
}
