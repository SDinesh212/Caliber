import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import { duties } from "./openJobsData";

export default function OpenJobDuties() {
  return (
    <Reveal className="premium-card mt-8 rounded-[30px] border border-[#E4EAF2] bg-white p-7 shadow-[0_24px_80px_rgba(15,47,74,0.10)] md:p-9">
      <p className="text-sm font-black uppercase tracking-[0.24em] text-[#238A72]">
        Job Duties
      </p>
      <h2 className="mt-4 text-3xl font-black text-[#102A43]">
        Security monitoring, detection, and Splunk engineering support
      </h2>

      <ul className="mt-7 space-y-4 text-base leading-8 text-[#667085]">
        {duties.map((duty) => (
          <li key={duty} className="premium-chip flex gap-3 rounded-2xl px-2 py-1">
            <CheckCircle2
              size={20}
              className="mt-1 shrink-0 text-[#238A72]"
            />
            <span>{duty}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
