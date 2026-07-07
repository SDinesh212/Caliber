import Reveal from "@/components/animation/Reveal";
import { roleFacts } from "./openJobsData";

export default function OpenJobFacts() {
  return (
    <Reveal className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {roleFacts.map((fact) => {
        const Icon = fact.icon;

        return (
          <div
            key={fact.label}
            className="rounded-[24px] border border-[#E4EAF2] bg-[#F8FBFF] p-5 shadow-[0_14px_40px_rgba(15,47,74,0.06)]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EAF2FF] text-[#1B63FF]">
              <Icon size={22} />
            </div>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#667085]">
              {fact.label}
            </p>
            <p className="mt-2 text-lg font-black leading-7 text-[#102A43]">
              {fact.value}
            </p>
          </div>
        );
      })}
    </Reveal>
  );
}
