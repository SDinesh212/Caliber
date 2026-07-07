import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CloudCog,
  Code2,
  DatabaseZap,
  SearchCheck,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import SubpageHero from "@/components/ui/SubpageHero";

const services = [
  {
    id: "devops-cloud",
    title: "DevOps & Cloud Engineering",
    description:
      "Cloud, automation, reliability, and platform professionals ready to strengthen delivery teams.",
    image: "/images/services/devops.jpg",
    href: "/services#devops-cloud",
    icon: CloudCog,
    tags: ["AWS", "Azure", "CI/CD"],
    outcomes: ["Cloud migration support", "Infrastructure automation"],
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Networking",
    description:
      "Security analysts, network engineers, and compliance specialists for modern infrastructure teams.",
    image: "/images/services/cyber-security.jpg",
    href: "/services#cyber-security",
    icon: ShieldCheck,
    tags: ["SOC", "Network", "Risk"],
    outcomes: ["Threat monitoring", "Secure network operations"],
  },
  {
    id: "fullstack-data-science",
    title: "Java / Full Stack & Data Science",
    description:
      "Application, data, and analytics talent for products that need dependable engineering momentum.",
    image: "/images/services/fullstack-data.jpg",
    href: "/services#fullstack-data-science",
    icon: Code2,
    tags: ["Java", "React", "Data"],
    outcomes: ["Product engineering", "Data-driven delivery"],
  },
];

const process = [
  {
    title: "Discover",
    text: "We map role expectations, must-have skills, budget, timeline, and culture.",
    icon: SearchCheck,
  },
  {
    title: "Match",
    text: "Profiles are screened for technical fit, communication, availability, and project readiness.",
    icon: DatabaseZap,
  },
  {
    title: "Deliver",
    text: "Shortlisted candidates move quickly through interviews, offers, onboarding, and support.",
    icon: UsersRound,
  },
];

const aboutCards = [
  {
    image: "/images/services/about-1.jpg",
    title: "Dedicated Support",
    text: "We collaborate, execute and support each consultant individually and assign dedicated leaders for continuous improvement.",
  },
  {
    image: "/images/services/about-2.jpg",
    title: "Candidate Focus",
    text: "We value your talent and focus on landing you on your dream job.",
  },
  {
    image: "/images/services/about-3.jpg",
    title: "Client Network",
    text: "We work with all prime vendors and direct clients in the market.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <SubpageHero
        label="Technology staffing services"
        title="Specialized staffing services for modern technology teams"
        description="Explore focused hiring solutions designed to help companies find skilled, reliable, and job-ready technology professionals."
       
        
        actions={[
          { label: "Request talent", href: "/request-quote" },
          { label: "View jobs", href: "/jobs", variant: "secondary" },
        ]}
      />

      <PageSection className="pt-10">
        <Reveal className="rounded-[28px] bg-[#102A43] p-6 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)] md:p-8 lg:grid lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white/60">
              Built like a hiring control center
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
              Clear roles, sharper screening, faster placement decisions.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-0">
            {["Technical validation", "Interview coordination", "Ongoing support"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.08] p-4"
                >
                  <CheckCircle2 className="text-[#6EE7D8]" size={20} />
                  <p className="mt-4 text-sm font-bold leading-6">{item}</p>
                </div>
              )
            )}
          </div>
        </Reveal>
      </PageSection>

      <PageSection>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1B63FF]">
            Core Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#102A43] md:text-5xl">
            Talent solutions with the same polish as your product teams
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#667085]">
            Each practice area is framed for real hiring workflows: shortlist,
            assess, interview, onboard, and scale.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <Link
                  id={service.id}
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[#E4EAF2] bg-white shadow-[0_18px_50px_rgba(15,47,74,0.08)] transition hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,47,74,0.14)]"
                >
                  <div className="relative aspect-[4/3] min-h-[230px] overflow-hidden bg-[#EEF7FF] sm:aspect-[16/10]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1023px) 100vw, 33vw"
                      className="object-cover object-center transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 via-[#102A43]/10 to-transparent" />
                    <div className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#1B63FF] shadow-xl">
                      <Icon size={27} />
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#102A43]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-black leading-tight text-[#102A43]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#667085]">
                      {service.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {service.outcomes.map((outcome) => (
                        <p
                          key={outcome}
                          className="flex items-center gap-3 text-sm font-bold text-[#344054]"
                        >
                          <CheckCircle2
                            className="shrink-0 text-[#238A72]"
                            size={18}
                          />
                          {outcome}
                        </p>
                      ))}
                    </div>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#1B63FF]">
                      View Service
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="bg-[#F8FBFF]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#238A72]">
              How we deliver
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#102A43] md:text-5xl">
              A hiring workflow that feels modern, measurable, and calm.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#667085]">
              The same rhythm appears across every subpage now: strong first
              viewport, useful cards, clear next steps, and mobile-safe imagery.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.title} delay={index * 0.08}>
                  <div className="h-full rounded-[24px] border border-[#E4EAF2] bg-white p-6 shadow-[0_18px_50px_rgba(15,47,74,0.07)]">
                    <div className="flex items-center justify-between">
                      <span className="text-5xl font-black text-[#E4EAF2]">
                        0{index + 1}
                      </span>
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#EAF2FF] text-[#1B63FF]">
                        <Icon size={24} />
                      </div>
                    </div>
                    <h3 className="mt-7 text-xl font-black text-[#102A43]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </PageSection>

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
    </main>
  );
}
