import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { contactMethods } from "./contactData";

export default function ContactMethods() {
  return (
    <PageSection className="pt-10">
      <div className="grid gap-6 lg:grid-cols-3">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;

          return (
            <Reveal key={method.title} delay={index * 0.08}>
              <Link
                href={method.href}
                className="premium-card premium-depth group flex h-full flex-col rounded-[26px] border border-[#E4EAF2] bg-[#F8FBFF] p-7 shadow-[0_18px_50px_rgba(15,47,74,0.08)]"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#EAF2FF] text-[#1B63FF]">
                  <Icon size={25} />
                </div>
                <h2 className="mt-6 text-2xl font-black text-[#102A43]">
                  {method.title}
                </h2>
                <p className="mt-3 flex-1 text-base leading-7 text-[#667085]">
                  {method.value}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#1B63FF]">
                  Connect
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </PageSection>
  );
}
