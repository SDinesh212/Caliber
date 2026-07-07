import {
  FileCheck,
  Search,
  ScanSearch,
  MessagesSquare,
  FileSignature,
  UserCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/animation/Reveal";

const steps = [
  {
    number: "01",
    icon: FileCheck,
    title: "Share Requirements",
    desc: "We understand your goals, role requirements, skills, and team culture.",
    color: "bg-blue-600",
  },
  {
    number: "02",
    icon: Search,
    title: "Find & Shortlist Talent",
    desc: "Our AI-powered search scans our talent pool and shortlists the best matches.",
    color: "bg-blue-600",
  },
  {
    number: "03",
    icon: ScanSearch,
    title: "Screen & Assess",
    desc: "We evaluate skills, experience, background, and cultural fit to ensure quality.",
    color: "bg-blue-600",
  },
  {
    number: "04",
    icon: MessagesSquare,
    title: "Interview & Evaluate",
    desc: "We coordinate interviews and help you assess the right candidates.",
    color: "bg-indigo-600",
  },
  {
    number: "05",
    icon: FileSignature,
    title: "Offer & Negotiate",
    desc: "We help you extend offers and handle negotiations seamlessly.",
    color: "bg-violet-600",
  },
  {
    number: "06",
    icon: UserCheck,
    title: "Onboard & Succeed",
    desc: "We ensure smooth onboarding and provide ongoing support for long-term success.",
    color: "bg-emerald-600",
  },
];

export default function HiringPipeline() {
  return (
    <section className="relative bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
            <UserCheck size={16} />
            Our Hiring Process
          </div>

          <h2 className="mx-auto max-w-5xl text-4xl font-black leading-tight text-[#0b2f4f] md:text-6xl">
            Built for Speed. Designed for Quality.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Our structured hiring process ensures we find the right talent who
            fit your needs and drive real impact.
          </p>
        </Reveal>

        <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-6">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[108px] hidden h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 xl:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.number}
                delay={index * 0.05}
                className="h-full"
              >
                <div className="group relative h-full rounded-[22px] border border-slate-200 bg-white px-6 pb-7 pt-8 shadow-[0_20px_70px_rgba(15,47,79,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(15,47,79,0.14)]">
                  <span className="absolute left-6 top-6 text-4xl font-black text-slate-200">
                    {step.number}
                  </span>

                  <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-blue-100 bg-white shadow-[0_16px_45px_rgba(37,99,235,0.12)]">
                    <div className="absolute -bottom-3 h-6 w-6 rotate-45 border-b border-r border-blue-100 bg-white" />

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon size={30} strokeWidth={2.3} />
                    </div>
                  </div>

                  <h3 className="mb-4 text-center text-xl font-black leading-snug text-[#0b2f4f]">
                    {step.title}
                  </h3>

                  <p className="text-center text-sm leading-7 text-slate-600">
                    {step.desc}
                  </p>

                  <div className="mt-8 h-[4px] overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full w-1/3 rounded-full ${step.color} transition-all duration-300 group-hover:w-full`}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 grid gap-6 rounded-[22px] bg-[#0b2f4f] p-8 shadow-[0_24px_80px_rgba(11,47,79,0.22)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div className="flex items-center gap-6">
            <div className="hidden h-20 w-20 items-center justify-center rounded-2xl bg-white text-blue-600 sm:flex">
              <Rocket size={34} />
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">
                Let&apos;s Get You the Right Talent
              </h3>
              <p className="mt-2 max-w-2xl text-lg leading-8 text-white/75">
                Partner with us and experience faster hiring, better talent, and
                stronger teams.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-extrabold text-[#0b2f4f] transition hover:bg-blue-50">
              Hire Top Talent
              <ArrowRight size={20} />
            </button>

            <button className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 font-extrabold text-white transition hover:bg-white/10">
              Find Jobs
              <ArrowRight size={20} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
