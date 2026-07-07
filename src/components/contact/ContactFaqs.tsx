import { HelpCircle } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { faqs } from "./contactData";

export default function ContactFaqs() {
  return (
    <PageSection className="bg-[#F8FBFF]">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#238A72]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#102A43] md:text-5xl">
            Answers that keep the contact page useful, not empty.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#667085]">
            The page now gives visitors a clear support path, direct contact
            options, and quick answers before they send a message.
          </p>
        </Reveal>

        <Reveal direction="right">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[22px] border border-[#E4EAF2] bg-white p-5 shadow-[0_14px_40px_rgba(15,47,74,0.06)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-[#102A43]">
                  <span className="flex items-center gap-3">
                    <HelpCircle size={21} className="text-[#1B63FF]" />
                    {faq.question}
                  </span>
                  <span className="text-[#1B63FF] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 pl-9 text-base leading-8 text-[#667085]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </PageSection>
  );
}
