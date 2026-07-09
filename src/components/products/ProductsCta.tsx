import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";

export default function ProductsCta() {
  return (
    <PageSection>
      <Reveal className="premium-card premium-orbit-bg rounded-[28px] bg-gradient-to-br from-[#102A43] via-[#0F2F4A] to-[#071F36] p-8 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)] md:p-10 lg:flex lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-white/55">
            Ready to source technology?
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">
            Send product details and we will help route the quote.
          </h2>
        </div>

        <Link
          href="/request-quote"
          className="premium-sheen premium-depth mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#102A43] lg:mt-0"
        >
          Request For Quote
          <ArrowRight size={18} />
        </Link>
      </Reveal>
    </PageSection>
  );
}
