"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { industries } from "@/constants/home";
import {
  fadeUp,
  inViewViewport,
  MagneticCard,
  staggerContainer,
} from "@/components/animation/MotionPrimitives";

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-28 bg-white px-5 py-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-sm font-bold uppercase tracking-wider text-[#1B24F2]"
            >
              Industries
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 max-w-2xl text-3xl font-black text-[#12324F] md:text-4xl"
            >
              We Hire Across Multiple Industries
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-md text-sm leading-7 text-[#667085]"
          >
            Specialized staffing support for technology, healthcare, finance,
            manufacturing, logistics, and more.
          </motion.p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <MagneticCard
                key={industry.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                glow
                className="group flex items-center justify-between rounded-2xl border border-[#E4EAF2] bg-[#F8FBFF] p-5 transition-all duration-300 hover:border-[#1B24F2]/30 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,47,74,0.10)]"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#EAF2FF] text-[#1B24F2] transition group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-black text-[#12324F]">
                      {industry.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#667085]">
                      Verified hiring support
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={18}
                  className="text-[#98A2B3] transition group-hover:translate-x-1 group-hover:text-[#1B24F2]"
                />
              </MagneticCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
