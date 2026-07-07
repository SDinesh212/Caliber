"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Active Jobs",
    text: "Live openings across multiple industries.",
    icon: Briefcase,
  },
  {
    value: 25000,
    suffix: "+",
    label: "Placed Talents",
    text: "Professionals matched with the right roles.",
    icon: Users,
  },
  {
    value: 500,
    suffix: "+",
    label: "Trusted Companies",
    text: "Growing businesses hiring through our network.",
    icon: Building2,
  },
  {
    value: 98,
    suffix: "%",
    label: "Success Rate",
    text: "Reliable hiring outcomes for clients and candidates.",
    icon: TrendingUp,
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff]  px-5 py-24">
      
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#dfcfb5] bg-white/80 px-4 py-2 text-sm font-bold text-[#12324f] shadow-sm">
            Our Impact
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#12324f] md:text-5xl">
            Trusted staffing results backed by real numbers
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#667085]">
            We help companies hire faster and candidates find better career
            opportunities through a reliable, people-first recruitment process.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-[28px] border border-white/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,47,74,0.08)] backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,47,74,0.14)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e8f0ff] text-[#1b24f2] transition group-hover:scale-110">
                    <Icon size={24} />
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-[#eef7f2] px-3 py-1 text-xs font-bold text-[#238a72]">
                    <CheckCircle2 size={14} />
                    Verified
                  </div>
                </div>

                <h3 className="mt-7 text-4xl font-black tracking-tight text-[#12324f]">
                  <Counter target={stat.value} />
                  {stat.suffix}
                </h3>

                <p className="mt-2 text-base font-bold text-[#12324f]">
                  {stat.label}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  {stat.text}
                </p>

                <div className="mt-6 h-2 rounded-full bg-[#eef2f6]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "86%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: index * 0.12 }}
                    className="h-2 rounded-full bg-gradient-to-r from-[#12324f] to-[#238a72]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = 0;
        const duration = 1400;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
          start += increment;

          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [target]);

  return <span ref={counterRef}>{count.toLocaleString()}</span>;
}