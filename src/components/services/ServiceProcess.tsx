import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { process } from "./servicesData";

export default function ServiceProcess() {
  return (
    <PageSection className="bg-[#f8fbff]">
      <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#238A72]">
            How we deliver
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#102A43] md:text-5xl">
            A hiring workflow that feels modern, measurable, and calm.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#667085]">
            The same rhythm appears across every subpage now: strong first
            viewport, useful cards, clear next steps, and mobile-safe imagery.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="premium-card premium-depth h-full rounded-[24px] border border-[#E4EAF2] bg-white p-6 shadow-[0_18px_50px_rgba(15,47,74,0.07)]">
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-black text-[#E4EAF2]">
                      0{index + 1}
                    </span>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#EAF2FF] text-[#1B63FF]">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="mt-7 text-xl font-black text-[#102A43]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}
