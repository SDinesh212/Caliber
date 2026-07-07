import Image from "next/image";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { aboutCards } from "./servicesData";

export default function ServiceAbout() {
  return (
    <PageSection>
      <Reveal>
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#238A72]">
          About Us
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-black text-[#102A43] md:text-5xl">
          People-first staffing with visible follow-through.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {aboutCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.08}>
            <div className="group h-full overflow-hidden rounded-[26px] border border-[#E4EAF2] bg-[#F8FBFF] shadow-[0_18px_50px_rgba(15,47,74,0.08)] transition hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,47,74,0.14)]">
              <div className="relative aspect-[4/3] min-h-[250px] overflow-hidden bg-[#EEF7FF]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black text-[#102A43]">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#4B5563]">
                  {card.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
}
