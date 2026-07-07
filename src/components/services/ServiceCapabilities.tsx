import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { services } from "./servicesData";

export default function ServiceCapabilities() {
  return (
    <PageSection>
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1B63FF]">
          Core Capabilities
        </p>
        <h2 className="mt-4 text-3xl font-black text-[#102A43] md:text-5xl">
          Talent solutions with the same polish as your product teams
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#667085]">
          Each practice area is framed for real hiring workflows: shortlist,
          assess, interview, onboard, and scale.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.title} delay={index * 0.08}>
              <Link
                id={service.id}
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[#E4EAF2] bg-white shadow-[0_18px_50px_rgba(15,47,74,0.08)] transition hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,47,74,0.14)]"
              >
                <div className="relative aspect-[4/3] min-h-[230px] overflow-hidden bg-[#EEF7FF] sm:aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 via-[#102A43]/10 to-transparent" />
                  <div className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#1B63FF] shadow-xl">
                    <Icon size={27} />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#102A43]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-black leading-tight text-[#102A43]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#667085]">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {service.outcomes.map((outcome) => (
                      <p
                        key={outcome}
                        className="flex items-center gap-3 text-sm font-bold text-[#344054]"
                      >
                        <CheckCircle2
                          className="shrink-0 text-[#238A72]"
                          size={18}
                        />
                        {outcome}
                      </p>
                    ))}
                  </div>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#1B63FF]">
                    View Service
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </PageSection>
  );
}
