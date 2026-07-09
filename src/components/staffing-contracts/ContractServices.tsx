import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { staffingServices } from "./contractsData";

export default function ContractServices() {
  return (
    <PageSection>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1B24F2]">
          Services Offered
        </p>

        <h2 className="mt-4 text-3xl font-black text-[#102A43] md:text-5xl">
          Comprehensive IT Staffing Solutions
        </h2>

        <p className="mt-5 text-lg leading-8 text-[#667085]">
          We provide a wide range of IT staffing services, including but not
          limited to:
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {staffingServices.map((item, index) => (
          <Reveal key={item} delay={index * 0.06}>
            <div className="premium-card premium-depth h-full rounded-[28px] border border-[#E4EAF2] bg-white p-7 shadow-[0_18px_50px_rgba(15,47,74,0.08)]">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#EAF2FF] text-[#1B24F2]">
                <CheckCircle2 size={25} />
              </div>

              <p className="mt-6 text-base leading-7 text-[#667085]">
                <strong className="text-[#102A43]">
                  {item.split(":")[0]}:
                </strong>
                {item.split(":").slice(1).join(":")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
}
