import {
  CheckCircle2,
  ClipboardList,
  Clock3,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import SubpageHero from "@/components/ui/SubpageHero";

const interestOptions = [
  "IT staffing",
  "Contract roles",
  "Direct hire",
  "Product quote",
  "Security products",
  "Cloud talent",
];

const nextSteps = [
  {
    title: "Review",
    text: "We check your hiring or product request details.",
    icon: ClipboardList,
  },
  {
    title: "Route",
    text: "The right specialist follows up with next questions.",
    icon: Sparkles,
  },
  {
    title: "Respond",
    text: "You receive a clear next step for talent, quote, or support.",
    icon: Clock3,
  },
];

export default function RequestQuotePage() {
  return (
    <main className="bg-white">
      <SubpageHero
        label="Request for quote"
        title="Tell us what you need and we will route the request clearly"
        description="Use this intake page for product quotes, staffing needs, contract hiring, or general technology support requests."
        icon={Send}
        actions={[
          { label: "Start form", href: "#quote-form" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ]}
      />

      <PageSection className="pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <form
              id="quote-form"
              className="rounded-[30px] border border-[#E4EAF2] bg-[#F8FBFF] p-5 shadow-[0_24px_80px_rgba(15,47,74,0.10)] md:p-8"
            >
              <div className="rounded-[24px] bg-white p-5 md:p-7">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1B63FF]">
                  Contact details
                </p>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <Field label="Name*" placeholder="Your full name" />
                  <Field
                    label="Email*"
                    placeholder="you@company.com"
                    type="email"
                  />
                  <Field label="Phone" placeholder="+1 469 000 0000" />
                  <Field label="Company" placeholder="Company name" />
                </div>
              </div>

              <div className="mt-5 rounded-[24px] bg-white p-5 md:p-7">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#238A72]">
                  I am interested in
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {interestOptions.map((option) => (
                    <label
                      key={option}
                      className="cursor-pointer rounded-full border border-[#D0D5DD] bg-[#F8FBFF] px-4 py-2 text-sm font-bold text-[#475467] transition hover:border-[#1B63FF] hover:text-[#1B63FF]"
                    >
                      <input type="checkbox" className="sr-only" />
                      {option}
                    </label>
                  ))}
                </div>

                <div className="mt-6 grid gap-5">
                  <label className="block">
                    <span className="text-sm font-black text-[#102A43]">
                      Tell us about the request*
                    </span>
                    <textarea
                      rows={5}
                      aria-label="Request details"
                      placeholder="Roles, skills, product brand, quantity, timeline, location, or any other notes..."
                      className="mt-3 w-full resize-none rounded-2xl border border-[#D0D5DD] bg-white p-4 text-[#102A43] outline-none transition focus:border-[#1B63FF]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-black text-[#102A43]">
                      Other notes
                    </span>
                    <textarea
                      rows={4}
                      aria-label="Other notes"
                      placeholder="Any procurement, hiring, compliance, or preferred contact details..."
                      className="mt-3 w-full resize-none rounded-2xl border border-[#D0D5DD] bg-white p-4 text-[#102A43] outline-none transition focus:border-[#1B63FF]"
                    />
                  </label>
                </div>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-xs leading-6 text-[#667085]">
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </p>

                  <button
                    type="button"
                    className="animated-sheen inline-flex items-center justify-center gap-3 rounded-xl bg-[#102A43] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-[#102A43]/20 transition hover:-translate-y-1 hover:bg-[#071F36]"
                  >
                    Send
                    <Send size={17} />
                  </button>
                </div>
              </div>
            </form>
          </Reveal>

          <Reveal direction="right" className="lg:sticky lg:top-28">
            <div className="rounded-[30px] bg-[#102A43] p-6 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)] md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black">
                <ShieldCheck size={17} className="text-[#6EE7D8]" />
                What happens next
              </div>

              <div className="mt-7 space-y-4">
                {nextSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.08] p-5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#1B63FF]">
                          <Icon size={21} />
                        </div>
                        <span className="text-3xl font-black text-white/20">
                          0{index + 1}
                        </span>
                      </div>
                      <h2 className="mt-5 text-xl font-black">{step.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-white/70">
                        {step.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-[#6EE7D8]/20 bg-[#6EE7D8]/10 p-5">
                <p className="flex items-center gap-3 text-sm font-bold">
                  <CheckCircle2 size={20} className="text-[#6EE7D8]" />
                  Clear request details help us respond with the right path
                  faster.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[26px] border border-[#E4EAF2] bg-white p-6 shadow-[0_18px_50px_rgba(15,47,74,0.08)]">
              <h2 className="text-2xl font-black text-[#102A43]">
                Caliber Tech LLC
              </h2>
              <div className="mt-5 space-y-3">
                <a
                  href="mailto:hr@calibertechllc.com"
                  className="flex items-center gap-3 font-bold text-[#238A72]"
                >
                  <Mail size={18} />
                  hr@calibertechllc.com
                </a>
                <a
                  href="tel:+14692270797"
                  className="flex items-center gap-3 font-bold text-[#238A72]"
                >
                  <Phone size={18} />
                  +1 469 227 0797
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </PageSection>
    </main>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-black text-[#102A43]">{label}</span>
      <input
        type={type}
        aria-label={label.replace("*", "")}
        placeholder={placeholder}
        className="mt-3 h-14 w-full rounded-2xl border border-[#D0D5DD] bg-white px-4 text-[#102A43] outline-none transition focus:border-[#1B63FF]"
      />
    </label>
  );
}
