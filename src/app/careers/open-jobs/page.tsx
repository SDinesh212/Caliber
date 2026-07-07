import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import SubpageHero from "@/components/ui/SubpageHero";

const roleFacts = [
  { label: "Position", value: "Information Security Analyst", icon: BriefcaseBusiness },
  { label: "Posting Date", value: "06/02/2026", icon: CalendarDays },
  { label: "Schedule", value: "Full-time, 40 hours per week", icon: Clock3 },
  { label: "Salary", value: "$149,968.00 year", icon: Banknote },
  { label: "Openings", value: "1 opening", icon: CheckCircle2 },
  { label: "Education", value: "Master's degree required", icon: GraduationCap },
];

const duties = [
  "Conduct in-depth security investigations using Splunk Enterprise Security.",
  "Identify, analyze, and validate threats and anomalies from diverse log sources.",
  "Design, develop, and fine-tune correlation searches, dashboards, and notable event alerts.",
  "Implement and maintain custom alerts and detection rules based on threat intelligence.",
  "Use advanced SPL queries for forensic analysis and root-cause identification.",
  "Onboard and integrate new data sources and log types into Splunk.",
  "Travel and/or relocation to various unanticipated client sites throughout USA is required.",
];

export default function OpenJobsPage() {
  return (
    <main className="bg-white">
      <SubpageHero
        label="Open job notice"
        title="Information Security Analyst"
        description="A focused, mobile-friendly job posting notice with the key role details, duties, location, education requirement, and application path clearly organized."
        icon={ShieldCheck}
        actions={[
          { label: "Apply by email", href: "mailto:HR@calibertechllc.com" },
          { label: "Browse jobs", href: "/jobs", variant: "secondary" },
        ]}
      />

      <PageSection className="pt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <Reveal className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {roleFacts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.label}
                    className="rounded-[24px] border border-[#E4EAF2] bg-[#F8FBFF] p-5 shadow-[0_14px_40px_rgba(15,47,74,0.06)]"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EAF2FF] text-[#1B63FF]">
                      <Icon size={22} />
                    </div>
                    <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#667085]">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-lg font-black leading-7 text-[#102A43]">
                      {fact.value}
                    </p>
                  </div>
                );
              })}
            </Reveal>

            <Reveal className="mt-8 rounded-[30px] border border-[#E4EAF2] bg-white p-7 shadow-[0_24px_80px_rgba(15,47,74,0.10)] md:p-9">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#238A72]">
                Job Duties
              </p>
              <h2 className="mt-4 text-3xl font-black text-[#102A43]">
                Security monitoring, detection, and Splunk engineering support
              </h2>

              <ul className="mt-7 space-y-4 text-base leading-8 text-[#667085]">
                {duties.map((duty) => (
                  <li key={duty} className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-[#238A72]"
                    />
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-8 rounded-[30px] border border-[#E4EAF2] bg-[#F8FBFF] p-7 shadow-[0_18px_50px_rgba(15,47,74,0.08)] md:p-9">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1B63FF]">
                Location
              </p>
              <div className="mt-5 flex gap-4 text-lg leading-8 text-[#667085]">
                <MapPin className="mt-1 shrink-0 text-[#238A72]" size={24} />
                <p>
                  CALIBER TECH LLC
                  <br />
                  5591 Chamblee Dunwoody Rd, Building 1300, Suite 314
                  <br />
                  Dunwoody, GA 3033
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" className="lg:sticky lg:top-28">
            <aside className="rounded-[30px] bg-[#102A43] p-6 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)]">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black">
                <Mail size={17} className="text-[#6EE7D8]" />
                Submit Application
              </div>

              <h2 className="mt-6 text-3xl font-black">
                Email your application to HR.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Include your resume, contact details, and relevant experience
                for the Information Security Analyst role.
              </p>

              <Link
                href="mailto:HR@calibertechllc.com"
                className="animated-sheen mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-black text-[#102A43] transition hover:-translate-y-1"
              >
                HR@calibertechllc.com
                <ArrowRight size={18} />
              </Link>
            </aside>
          </Reveal>
        </div>
      </PageSection>
    </main>
  );
}
