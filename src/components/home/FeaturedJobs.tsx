"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Search } from "lucide-react";
import {
  fadeUp,
  inViewViewport,
  MagneticCard,
  staggerContainer,
} from "@/components/animation/MotionPrimitives";

const jobs = [
  {
    title: "Senior React Developer",
    company: "TechNova Inc.",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "bg-[#EEF5FF] text-[#2563EB]",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "New York, NY",
    type: "Full-time",
    salary: "$70k - $100k",
    tags: ["Figma", "UX Research"],
    color: "bg-[#FFF0F5] text-[#EC4899]",
  },
  {
    title: "Python Backend Engineer",
    company: "DataSystems",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$100k - $140k",
    tags: ["Python", "Django", "PostgreSQL"],
    color: "bg-[#EAFBFC] text-[#06B6D4]",
  },
  {
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Austin, TX",
    type: "Contract",
    salary: "$80k - $120k",
    tags: ["AWS", "Docker", "Kubernetes"],
    color: "bg-[#EEF5FF] text-[#2563EB]",
  },
  {
    title: "Product Manager",
    company: "InnovateLab",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $150k",
    tags: ["Strategy", "Agile"],
    color: "bg-[#FFF3EA] text-[#F97316]",
  },
  {
    title: "HR Recruiter",
    company: "PeopleFirst",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$55k - $85k",
    tags: ["Hiring", "Screening"],
    color: "bg-[#EAFBF7] text-[#14B8A6]",
  },
  {
    title: "Data Analyst",
    company: "InsightWorks",
    location: "Boston, MA",
    type: "Hybrid",
    salary: "$75k - $105k",
    tags: ["SQL", "Power BI"],
    color: "bg-[#F3EFFF] text-[#8B5CF6]",
  },
  {
    title: "Sales Executive",
    company: "GrowthBridge",
    location: "Dallas, TX",
    type: "Full-time",
    salary: "$60k - $95k",
    tags: ["CRM", "B2B Sales"],
    color: "bg-[#FFF7E8] text-[#D97706]",
  },
];

export default function FeaturedJobs() {
  return (
    <section id="jobs" className="scroll-mt-28 bg-white px-5 py-24">
      <div className="mx-auto max-w-[1510px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-wider text-[#1B24F2]"
          >
            Featured Jobs
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-black text-[#12324F] md:text-4xl"
          >
            Explore Top Opportunities
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 text-[#667085]">
            Discover exciting career opportunities with top companies.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.55 }}
          className="mt-12 grid gap-3 rounded-2xl border border-[#E4EAF2] bg-[#F8FBFF] p-3 md:grid-cols-[1.6fr_1fr_1fr_1fr_170px]"
        >
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]">
              <motion.span
                animate={{ scale: [1, 1.12, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block"
              >
                <Search size={16} />
              </motion.span>
            </div>
            <input
              placeholder="Search job title, keyword..."
              className="h-12 w-full rounded-xl border border-[#E4EAF2] bg-white pl-11 pr-4 text-sm outline-none transition focus:border-[#1B24F2]"
            />
          </div>

          <select className="h-12 rounded-xl border border-[#E4EAF2] bg-white px-4 text-sm text-[#12324F] outline-none">
            <option>All Categories</option>
          </select>

          <select className="h-12 rounded-xl border border-[#E4EAF2] bg-white px-4 text-sm text-[#12324F] outline-none">
            <option>All Locations</option>
          </select>

          <select className="h-12 rounded-xl border border-[#E4EAF2] bg-white px-4 text-sm text-[#12324F] outline-none">
            <option>Job Type</option>
          </select>

          <button className="animated-sheen h-12 rounded-xl bg-[#0F2F4A] px-5 text-sm font-bold text-white transition hover:bg-[#0A2238]">
            Search Jobs
          </button>
        </motion.div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job, index) => (
            <MagneticCard
              key={job.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -10, scale: 1.015 }}
              glow
              className="group rounded-[18px] border border-[#E4EAF2] bg-white p-5 shadow-[0_8px_24px_rgba(15,47,74,0.05)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(15,47,74,0.12)]"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl ${job.color}`}
                >
                  <Briefcase size={21} />
                </div>

                <span className="rounded-full bg-[#EEF5FF] px-3 py-1 text-xs font-bold text-[#1B63FF]">
                  Featured
                </span>
              </div>

              <h3 className="mt-5 text-base font-black text-[#12324F]">
                {job.title}
              </h3>

              <p className="mt-1 text-sm text-[#667085]">{job.company}</p>

              <div className="mt-5 space-y-2 text-sm text-[#475467]">
                <p className="flex items-center gap-2">
                  <MapPin size={15} />
                  {job.location}
                </p>

                <p className="flex items-center gap-2">
                  <Clock size={15} />
                  {job.type}
                </p>
              </div>

              <p className="mt-4 text-base font-black text-[#12324F]">
                  {job.salary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.04 + tagIndex * 0.04 }}
                    className="rounded-full bg-[#F2F6FA] px-3 py-1 text-xs font-medium text-[#475467]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
}
