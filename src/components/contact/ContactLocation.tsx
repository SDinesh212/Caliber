import {
  Building2,
  Clock,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";

export default function ContactLocation() {
  return (
    <PageSection>
      <div
        id="location"
        className="grid gap-8 overflow-hidden rounded-[30px] border border-[#E4EAF2] bg-white shadow-[0_24px_80px_rgba(15,47,74,0.12)] lg:grid-cols-[1fr_1.1fr]"
      >
        <Reveal className="p-8 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-4 py-2 text-sm font-black text-[#1B63FF]">
            <Building2 size={17} />
            Office Details
          </div>

          <h2 className="mt-6 text-3xl font-black text-[#102A43] md:text-4xl">
            Caliber Tech LLC
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-[#667085]">
            <p className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-[#238A72]" size={21} />
              <span>
                6595 Roswell Road Suite G2201 Atlanta, GA 30328 United States
              </span>
            </p>
            <p className="flex gap-3">
              <Clock className="mt-1 shrink-0 text-[#238A72]" size={21} />
              <span>Monday - Friday: 9am - 5pm. Saturday - Sunday: Closed.</span>
            </p>
            <p className="flex gap-3">
              <ShieldCheck
                className="mt-1 shrink-0 text-[#238A72]"
                size={21}
              />
              <span>
                Open today <strong>09:00 am - 05:00 pm</strong>.
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal direction="right" className="min-h-[360px]">
          <div className="relative flex h-full min-h-[360px] items-center justify-center overflow-hidden bg-[#102A43] p-8 text-white">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />
            <div className="absolute left-[12%] top-[30%] h-px w-[76%] rotate-12 bg-[#6EE7D8]/35" />
            <div className="absolute left-[18%] top-[62%] h-px w-[64%] -rotate-12 bg-white/20" />
            <div className="absolute left-1/2 top-[18%] h-[62%] w-px -translate-x-1/2 bg-white/[0.18]" />

            <div className="relative max-w-sm rounded-[24px] border border-white/15 bg-white/10 p-6 text-center backdrop-blur">
              <MapPin className="mx-auto text-[#6EE7D8]" size={34} />
              <h3 className="mt-5 text-2xl font-black">Atlanta, GA</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                A clear contact destination for staffing support, consultant
                questions, and product quote coordination.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </PageSection>
  );
}
