"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Users,
  Briefcase,
  Search,
  WalletCards,
  Globe2,
} from "lucide-react";
import {
  fadeUp,
  inViewViewport,
  MagneticCard,
  staggerContainer,
} from "@/components/animation/MotionPrimitives";

const services = [
  {
    title: "Temporary Staffing",
    description: "Quickly scale your team with skilled temporary professionals.",
    icon: Clock,
    color: "text-[#6C63FF]",
    bg: "bg-[#F0EFFF]",
  },
  {
    title: "Direct Hire",
    description: "Find the perfect full-time employees for your organization.",
    icon: Users,
    color: "text-[#2563EB]",
    bg: "bg-[#EEF5FF]",
  },
  {
    title: "Contract Staffing",
    description: "Flexible staffing solutions for short-term project needs.",
    icon: Briefcase,
    color: "text-[#06B6D4]",
    bg: "bg-[#EAFBFC]",
  },
  {
    title: "Executive Search",
    description: "Discover and recruit top executive talent for leadership roles.",
    icon: Search,
    color: "text-[#F97316]",
    bg: "bg-[#FFF3EA]",
  },
  {
    title: "Payroll Solutions",
    description: "Streamline payroll and workforce compliance management.",
    icon: WalletCards,
    color: "text-[#14B8A6]",
    bg: "bg-[#EAFBF7]",
  },
  {
    title: "Remote Talent",
    description: "Access skilled remote professionals across global locations.",
    icon: Globe2,
    color: "text-[#8B5CF6]",
    bg: "bg-[#F3EFFF]",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-white px-5 py-24">
      <div className="mx-auto max-w-[1510px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-wider text-[#1B24F2]"
          >
            Our Services
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-black tracking-tight text-[#12324F] md:text-5xl"
          >
            Comprehensive Staffing Solutions
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#667085] md:text-lg"
          >
            We offer end-to-end staffing solutions tailored to your business
            needs and career goals.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <MagneticCard
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.018 }}
                glow
                className="group rounded-[22px] border border-[#E4EAF2] bg-white p-6 shadow-[0_8px_24px_rgba(15,47,74,0.05)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(15,47,74,0.12)]"
              >
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${service.bg} ${service.color} transition duration-300 group-hover:scale-110`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-7 text-lg font-black text-[#12324F]">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-[78px] text-sm leading-7 text-[#667085]">
                  {service.description}
                </p>

                <button className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1B63FF]">
                  Learn more
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </MagneticCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
