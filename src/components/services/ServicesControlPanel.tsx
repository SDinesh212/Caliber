import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { serviceControlItems } from "./servicesData";

export default function ServicesControlPanel() {
  return (
    <PageSection className="pt-10">
      <Reveal className="premium-card premium-orbit-bg rounded-[28px] bg-[#102A43] p-6 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)] md:p-8 lg:grid lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-white/60">
            Built like a hiring control center
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
            Clear roles, sharper screening, faster placement decisions.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-0">
          {serviceControlItems.map((item) => (
            <div
              key={item}
              className="premium-card premium-depth rounded-2xl border border-white/10 bg-white/[0.08] p-4"
            >
              <CheckCircle2 className="text-[#6EE7D8]" size={20} />
              <p className="mt-4 text-sm font-bold leading-6">{item}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </PageSection>
  );
}
