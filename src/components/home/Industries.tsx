"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { industries } from "@/constants/home";

const colorStyles = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "hover:border-b-blue-600",
  },
  green: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "hover:border-b-emerald-600",
  },
  purple: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "hover:border-b-violet-600",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "hover:border-b-orange-600",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "hover:border-b-rose-600",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "hover:border-b-amber-600",
  },
  teal: {
    bg: "bg-teal-50",
    text: "text-teal-600",
    border: "hover:border-b-teal-600",
  },
};

export default function Industries() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="industries"
      className="relative scroll-mt-28 overflow-hidden bg-white px-5 py-20"
    >
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-5 text-sm font-black uppercase tracking-[0.34em] text-[#1B24F2]">
            <span className="h-px w-14 bg-blue-100" />
            <BriefcaseBusiness size={16} />
            Industries We Serve
            <span className="h-px w-14 bg-blue-100" />
          </div>

          <h2 className="text-4xl font-black leading-tight text-[#12324F] md:text-6xl">
            We Hire Across Multiple Industries
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#667085]">
            From startups to enterprises, we provide industry-specific staffing
            solutions that help businesses grow and achieve their goals.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="h-2 w-2 rounded-full bg-blue-600" />
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const color =
              colorStyles[industry.color as keyof typeof colorStyles];

            const isActive = activeCard === index;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                onClick={() => setActiveCard(isActive ? null : index)}
                className={`group relative min-h-[294px] cursor-pointer overflow-hidden rounded-[20px] border border-[#E4EAF2] border-b-2 bg-white px-6 py-7 shadow-[0_18px_50px_rgba(15,47,79,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,47,79,0.12)] ${color.border}`}
              >
                <div
                  className={`absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-500 md:group-hover:opacity-100 ${
                    isActive ? "opacity-100 md:opacity-0" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${industry.image})`,
                  }}
                />

                <div
                  className={`absolute inset-0 bg-black/60 opacity-0 transition-all duration-500 md:group-hover:opacity-100 ${
                    isActive ? "opacity-100 md:opacity-0" : ""
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex gap-5">
                    <div
                      className={`grid h-[74px] w-[74px] shrink-0 place-items-center rounded-full ${color.bg} transition duration-300 md:group-hover:bg-white/95 ${
                        isActive ? "bg-white/95 md:bg-blue-50" : ""
                      }`}
                    >
                      <Icon
                        size={34}
                        strokeWidth={2.3}
                        className={color.text}
                      />
                    </div>

                    <div>
                      <h3
                        className={`text-2xl font-black text-[#12324F] transition duration-300 md:group-hover:text-white ${
                          isActive ? "text-white md:text-[#12324F]" : ""
                        }`}
                      >
                        {industry.title}
                      </h3>

                      <p
                        className={`mt-3 min-h-[88px] text-[15px] leading-7 text-[#667085] transition duration-300 md:group-hover:text-white/90 ${
                          isActive ? "text-white/90 md:text-[#667085]" : ""
                        }`}
                      >
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span
                      className={`font-black ${color.text} transition duration-300 md:group-hover:text-white ${
                        isActive ? "text-white md:text-blue-600" : ""
                      }`}
                    >
                      Learn more
                    </span>

                    <ArrowRight
                      size={22}
                      className={`${color.text} transition duration-300 md:group-hover:translate-x-1 md:group-hover:text-white ${
                        isActive ? "text-white md:text-blue-600" : ""
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}