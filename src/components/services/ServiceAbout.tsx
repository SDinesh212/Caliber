"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { aboutCards } from "./servicesData";

export default function ServiceAbout() {
  return (
    <PageSection>
      <Reveal>
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#238A72]">
          About Us
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-black text-[#102A43] md:text-5xl">
          People-first staffing with visible follow-through.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {aboutCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.08}>
            <div style={{ perspective: "1400px" }} className="h-full">
              <motion.div
                whileHover={{
                  y: -14,
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 18,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="h-full"
              >
                <div className="premium-card group relative h-full overflow-hidden rounded-[26px] border border-[#E4EAF2] bg-[#F8FBFF] shadow-[0_18px_50px_rgba(15,47,74,0.08)] transition-all duration-500 hover:shadow-[0_40px_100px_rgba(35,138,114,0.18)]">
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#238A72]/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative aspect-[4/3] min-h-[250px] overflow-hidden bg-[#EEF7FF]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/55 via-transparent to-transparent" />

                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-1000 group-hover:translate-x-full" />
                  </div>

                  <div className="relative p-7">
                    <h3 className="text-2xl font-black text-[#102A43]">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-[#4B5563]">
                      {card.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
}
