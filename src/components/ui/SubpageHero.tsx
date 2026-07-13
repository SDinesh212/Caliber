import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/animation/Reveal";

type HeroMetric = {
  value: string;
  label: string;
};

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type HeroImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type SubpageHeroProps = {
  label: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  metrics?: HeroMetric[];
  actions?: HeroAction[];
  heroImage?: HeroImage;
};

export default function SubpageHero({
  label,
  title,
  description,
  icon: Icon,
  metrics = [],
  actions = [],
  heroImage,
}: SubpageHeroProps) {
  const hasHeroImage = Boolean(heroImage);

  return (
    <section className="relative overflow-hidden bg-[#f8fbff] px-5 pb-16 pt-[150px] md:pb-20">
      <div
        className={`relative z-10 mx-auto max-w-[1510px] ${
          hasHeroImage
            ? "grid items-center gap-14 lg:grid-cols-[1fr_520px]"
            : ""
        }`}
      >
        <Reveal direction="left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8C7A8] bg-white/[0.85] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#102A43] shadow-sm">
            {Icon && <Icon size={16} className="text-[#1B63FF]" />}
            {label}
          </div>

          <h1
            className={`mt-6 text-4xl font-black leading-tight text-[#102A43] md:text-6xl ${
              hasHeroImage ? "max-w-3xl" : "max-w-4xl"
            }`}
          >
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085] md:text-lg">
            {description}
          </p>

          {actions.length > 0 && (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {actions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={
                    action.variant === "secondary"
                      ? "premium-sheen premium-depth inline-flex items-center justify-center gap-3 rounded-xl border border-[#D8C7A8] bg-white px-7 py-4 font-bold text-[#102A43] shadow-sm"
                      : "premium-sheen premium-depth inline-flex items-center justify-center gap-3 rounded-xl bg-[#102A43] px-7 py-4 font-bold text-white shadow-xl shadow-[#102A43]/20 hover:bg-[#071F36]"
                  }
                >
                  {action.label}
                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>
          )}

          {metrics.length > 0 && (
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="premium-card premium-depth rounded-2xl border border-white bg-white/[0.85] p-4 shadow-[0_14px_35px_rgba(15,47,74,0.08)] backdrop-blur"
                >
                  <p className="text-2xl font-black text-[#102A43]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#667085]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Reveal>

        {heroImage && (
          <Reveal direction="right">
            <div className="hero-visual-stage relative mx-auto w-full max-w-[520px] lg:ml-auto">
              <div className="hero-visual-image premium-card premium-depth relative overflow-hidden rounded-[34px] border border-[#E4EAF2] bg-white p-3 shadow-[0_30px_90px_rgba(15,47,74,0.14)]">
                <div className="relative h-[320px] overflow-hidden rounded-[26px] md:h-[360px]">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, calc(100vw - 40px)"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
