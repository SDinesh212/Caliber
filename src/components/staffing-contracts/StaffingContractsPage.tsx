import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  FileText,
  Handshake,
  Landmark,
  Layers,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";

const contractDetails = [
  { label: "Contract Number", value: "4400034683", icon: FileText },
  { label: "Solicitation Number", value: "5400024992", icon: Layers },
  { label: "Contract Period", value: "June 13, 2024 - August 25, 2028", icon: CalendarDays },
  { label: "Scope", value: "IT Staffing Contingent Roles", icon: BriefcaseBusiness },
  { label: "Client", value: "State of South Carolina", icon: Landmark },
];

const services = [
  "Temporary and Contingent Staffing: Flexible staffing solutions for short-term projects and seasonal needs.",
  "Contract-to-Hire: Opportunities to transition from contract roles to permanent positions.",
  "Permanent Placement: Identifying and placing top talent for long-term roles.",
  "Project-Based Staffing: Specialized teams for specific projects, ensuring expertise and efficiency.",
];

const expertise = [
  "Extensive Talent Pool: Access to a diverse and highly skilled network of IT professionals.",
  "Customized Staffing Solutions: Tailored approaches to meet the specific needs of our clients.",
  "Proven Track Record: A history of successful placements and satisfied clients.",
  "Industry Knowledge: Deep understanding of the latest technology trends and market demands.",
];

export default function StaffingContractsPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#F8FBFF] px-5 pb-24 pt-[150px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#EAF2FF] blur-[130px]" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#EAF8F2] blur-[130px]" />
        </div>

        <div className="relative mx-auto grid max-w-[1510px] items-center gap-14 lg:grid-cols-[1fr_520px]">
          <Reveal>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#2F7D32]">
                Caliber Tech LLC&apos;s Current Staffing Contracts
              </p>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-[#102A43] md:text-6xl">
                Government & University IT Staffing Solutions
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#667085]">
                Caliber Tech LLC delivers top-tier IT staffing services through
                awarded public-sector contracts, trusted delivery support, and a
                highly qualified technology talent network.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#1B24F2] px-8 py-4 font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1"
                >
                  Request Talent
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#D8C7A8] bg-white px-8 py-4 font-bold text-[#102A43] transition hover:-translate-y-1"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="relative overflow-hidden rounded-[34px] border border-[#E4EAF2] bg-white p-3 shadow-[0_30px_90px_rgba(15,47,74,0.14)]">
              <div className="relative h-[360px] overflow-hidden rounded-[26px]">
                <Image
                  src="/images/contracts/staffing-contract.jpg"
                  alt="Staffing contract"
                  fill
                  priority
                  className="object-cover"
                />
                
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PageSection className="bg-[#F8FBFF]">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          <Reveal>
            <div className="rounded-[32px] border border-[#E4EAF2] bg-white p-8 shadow-[0_20px_70px_rgba(15,47,74,0.08)]">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#238A72]">
                Introduction
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#102A43]">
                Welcome to Caliber Tech LLC&apos;s Staffing Solutions
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#667085]">
                At Caliber Tech LLC, we pride ourselves on delivering top-tier
                IT staffing services tailored to meet the unique needs of our
                clients. With our recent award from the State of South Carolina,
                and the University of Arizona for IT staffing contingent roles,
                we continue to demonstrate our commitment to excellence and
                client satisfaction.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <AwardCard
                  title="State of South Carolina IT Staffing Contract"
                  text="We are honored to have been awarded the IT staffing contingent roles contract by the State of South Carolina. This contract underscores our capabilities and trust in providing highly qualified IT professionals to support the state's technology initiatives."
                  icon={Landmark}
                />

                <AwardCard
                  title="The University of Arizona IT Staffing Contract"
                  text="We are honored to have been awarded the IT staffing contingent roles contract by the University of Arizona."
                  icon={Award}
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-[32px] bg-[#102A43] p-7 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)] lg:sticky lg:top-28">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6EE7D8]">
                Contract Details
              </p>

              <div className="mt-6 space-y-4">
                {contractDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.08] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className="text-[#6EE7D8]" />
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-white/50">
                          {item.label}
                        </p>
                      </div>

                      <p className="mt-3 text-base font-bold leading-7">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-sm leading-7 text-white/65">
                For more information, visit the{" "}
                <Link href="#" className="font-bold text-[#6EE7D8] underline">
                  State of South Carolina Contract Page
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </PageSection>

      <PageSection>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1B24F2]">
            Services Offered
          </p>

          <h2 className="mt-4 text-3xl font-black text-[#102A43] md:text-5xl">
            Comprehensive IT Staffing Solutions
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#667085]">
            We provide a wide range of IT staffing services, including but not
            limited to:
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <div className="h-full rounded-[28px] border border-[#E4EAF2] bg-white p-7 shadow-[0_18px_50px_rgba(15,47,74,0.08)] transition hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,47,74,0.14)]">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#EAF2FF] text-[#1B24F2]">
                  <CheckCircle2 size={25} />
                </div>

                <p className="mt-6 text-base leading-7 text-[#667085]">
                  <strong className="text-[#102A43]">
                    {item.split(":")[0]}:
                  </strong>
                  {item.split(":").slice(1).join(":")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-[#F8FBFF]">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:items-center">
          <Reveal>
            <div className="rounded-[32px] bg-[#102A43] p-8 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)]">
              <ShieldCheck size={44} className="text-[#6EE7D8]" />

              <h2 className="mt-6 text-3xl font-black">
                Why Choose Caliber Tech LLC?
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/70">
                With years of experience in IT staffing, we help organizations
                access the right talent faster, with flexible staffing models
                and strong industry knowledge.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {expertise.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="rounded-[28px] border border-[#E4EAF2] bg-white p-7 shadow-[0_18px_50px_rgba(15,47,74,0.08)]">
                  <CheckCircle2 className="text-[#238A72]" size={24} />

                  <p className="mt-5 text-base leading-7 text-[#667085]">
                    <strong className="text-[#102A43]">
                      {item.split(":")[0]}:
                    </strong>
                    {item.split(":").slice(1).join(":")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <Reveal>
          <div className="overflow-hidden rounded-[34px] bg-gradient-to-br from-[#102A43] to-[#071F36] p-8 text-white shadow-[0_30px_90px_rgba(15,47,74,0.2)] md:p-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                <Handshake size={16} />
                Partner with Us
              </div>

              <h2 className="text-3xl font-black md:text-5xl">
                Ready to find the right IT talent?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
                Ready to find the right IT talent for your organization?
                Partner with Caliber Tech LLC today and experience the
                difference of working with industry experts.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-[#102A43] transition hover:-translate-y-1 lg:mt-0"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </PageSection>
    </main>
  );
}

function AwardCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-[26px] border border-[#E4EAF2] bg-[#F8FBFF] p-6">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EAF2FF] text-[#1B24F2]">
        <Icon size={22} />
      </div>

      <h3 className="mt-5 text-xl font-black text-[#102A43]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#667085]">{text}</p>
    </div>
  );
}
