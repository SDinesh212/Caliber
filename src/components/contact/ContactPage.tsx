import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import SubpageHero from "@/components/ui/SubpageHero";

const contactMethods = [
  {
    title: "Email",
    value: "hr@calibertechllc.com",
    href: "mailto:hr@calibertechllc.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+1 469 227 0797",
    href: "tel:+14692270797",
    icon: Phone,
  },
  {
    title: "Location",
    value: "6595 Roswell Road Suite G2201 Atlanta, GA 30328",
    href: "#location",
    icon: MapPin,
  },
];

const faqs = [
  {
    question: "Do benefits vary by role?",
    answer:
      "All benefits are provided based on each employee's employment opportunity with our firm and may vary by individual.",
  },
  {
    question: "Is Caliber Tech LLC an equal opportunity employer?",
    answer:
      "Yes. We are an equal opportunity employer and support qualified candidates through the hiring process.",
  },
  {
    question: "Can you support sponsorship needs?",
    answer:
      "Sponsorship may be available when needed and when the role, candidate, and client requirements align.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      <SubpageHero
        label="Contact Caliber Tech"
        title="A faster way to reach the right staffing team"
        description="Connect with Caliber Tech LLC for hiring support, candidate questions, product quote help, or general business inquiries."
        icon={MessageCircle}
        actions={[
          { label: "Request a quote", href: "/request-quote" },
          { label: "View services", href: "/services", variant: "secondary" },
        ]}
        metrics={[
          { value: "9-5", label: "Weekday support" },
          { value: "GA", label: "Atlanta office" },
          { value: "Fast", label: "Response routing" },
        ]}
      />

      <PageSection className="pt-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <Reveal key={method.title} delay={index * 0.08}>
                <Link
                  href={method.href}
                  className="group flex h-full flex-col rounded-[26px] border border-[#E4EAF2] bg-[#F8FBFF] p-7 shadow-[0_18px_50px_rgba(15,47,74,0.08)] transition hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,47,74,0.14)]"
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
    </main>
  );
}
