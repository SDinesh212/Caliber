import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import SubpageHero from "@/components/ui/SubpageHero";
const products = [
  {
    partner: "Check Point",
    title: "Authorized Partner",
    image: "/images/products/checkpoint.jpg",
    copy:
      "Welcome to Caliber Tech LLC, your trusted source for Checkpoint Technologies products. As an approved Checkpoint Technologies authorized reseller, we offer a comprehensive range of cutting-edge solutions to meet your security and network needs. Ready to elevate your security infrastructure with Checkpoint Technologies? Fill out the form below to request a quote, and one of our representatives will get back to you shortly.",
    capabilities: ["Security solutions", "Network needs", "Quote support"],
  },
  {
    partner: "Cisco",
    title: "Authorized Partner",
    image: "/images/products/cisco.jpg",
    copy:
      "Welcome to Caliber Tech LLC, your trusted source for Cisco products. As an approved Cisco-authorized reseller, we offer a comprehensive range of cutting-edge solutions to meet your security and network needs. Ready to elevate your security infrastructure with Cisco? Fill out the form below to request a quote, and one of our representatives will get back to you shortly.",
    capabilities: ["Cisco products", "Secure networking", "Infrastructure"],
  },
  {
    partner: "Extreme Networks",
    title: "Authorized Reseller",
    image: "/images/products/extreme.jpg",
    copy:
      "We are excited to announce that Caliber Tech LLC is now an Authorized Reseller of Extreme Networks, a global leader in cloud-driven networking solutions. As an authorized reseller, we can offer innovative and secure networking solutions that meet the growing demands of modern enterprises. From cloud-managed networks to secure and scalable infrastructure, our partnership with Extreme Networks enables us to provide cutting-edge technologies designed to optimize your business operations.",
    capabilities: ["Cloud-managed networks", "Scalable infrastructure", "Business operations"],
  },
  {
    partner: "Hewlett Packard Enterprise",
    title: "Authorized T2 Solutions Provider",
    image: "/images/products/hpe.jpg",
    copy:
      "Welcome to Caliber Tech LLC, your trusted source for HPE products. As an approved HPE-authorized reseller, we offer a comprehensive range of cutting-edge solutions to meet your security and network needs. Ready to elevate your security infrastructure with HPE? Fill out the form below to request a quote, and one of our representatives will get back to you shortly.",
    capabilities: ["HPE products", "Security infrastructure", "Network needs"],
  },
  {
    partner: "Logitech",
    title: "Authorized Reseller",
    image: "/images/products/logitech.jpg",
    copy:
      "Caliber Tech LLC has partnered with Logitech to bring you their innovative and high-quality products. From advanced peripherals to state-of-the-art technology solutions, our collaboration with Logitech ensures you receive the best in performance and reliability. Explore our range of Logitech products and experience unparalleled productivity and connectivity.",
    capabilities: ["Peripherals", "Productivity", "Connectivity"],
  },
  {
    partner: "CrowdStrike",
    title: "Authorized Reseller",
    image: "/images/products/crowdstrike.jpg",
    copy:
      "We are excited to announce that Caliber Tech LLC has been approved as an Authorized Reseller of CrowdStrike, a leader in cloud-delivered endpoint protection. As a trusted CrowdStrike partner, we can now offer advanced cybersecurity solutions that provide world-class protection for your business. Whether you need endpoint security, threat intelligence, or cloud security, we are here to help you leverage CrowdStrike's cutting-edge technologies to protect your organization's data and infrastructure.",
    capabilities: ["Endpoint security", "Threat intelligence", "Cloud security"],
  },
];

const quoteSteps = [
  "Select product partner",
  "Share quantity and environment",
  "Confirm availability",
  "Receive guided quote",
];

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <SubpageHero
        label="Technology partner stack"
        title="Authorized products and security solutions for modern teams"
        description="Caliber Tech LLC helps organizations source trusted technology products through approved partner and reseller relationships."
        icon={PackageCheck}
        actions={[
          { label: "Request a quote", href: "/request-quote" },
          { label: "Contact team", href: "/contact", variant: "secondary" },
        ]}
      />

      <PageSection className="pt-10">
        <Reveal className="grid gap-5 rounded-[28px] border border-[#E4EAF2] bg-[#F8FBFF] p-5 shadow-[0_18px_50px_rgba(15,47,74,0.08)] sm:grid-cols-2 lg:grid-cols-6">
          {products.map((product) => (
            <div
              key={product.partner}
              className="flex min-h-[96px] items-center justify-center rounded-2xl bg-white p-4 shadow-sm"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={product.image}
                  alt={`${product.partner} logo`}
                  fill
                  sizes="(max-width: 1023px) 50vw, 180px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Reveal>
      </PageSection>

      <PageSection>
  <div className="mx-auto max-w-[1280px]">
    <p className="mb-16 text-center text-sm font-medium uppercase tracking-[0.28em] text-[#2f7d1f]">
      Caliber Tech LLC Technology Stack as an Authorized Partner
    </p>

    <div className="space-y-24">
      {products.map((product, index) => {
        const reverse = index % 2 !== 0;

        return (
          <Reveal key={product.partner} delay={index * 0.05}>
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Logo Side */}
              <div className="flex min-h-[260px] items-center justify-center">
                <div className="relative h-[220px] w-full max-w-[560px]">
                  <Image
                    src={product.image}
                    alt={`${product.partner} logo`}
                    fill
                    sizes="(max-width: 1023px) 100vw, 560px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="mx-auto max-w-[560px] text-center">
                <h3 className="text-2xl font-medium tracking-wide text-black md:text-3xl">
                  {product.title}
                </h3>

                <p className="mt-7 text-[18px] leading-8 text-[#505A64]">
                  {product.copy}
                </p>

                <Link
                  href="/request-quote"
                  className="mt-10 inline-flex bg-[#102A43] text-white rounded-xl px-10 py-5 text-sm font-black uppercase tracking-[0.35em] text-black transition hover:bg-[#358b25]"
                >
                  Request For Quote
                </Link>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  </div>
</PageSection>

      <PageSection className="bg-[#F8FBFF]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#238A72]">
              Quote Flow
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#102A43] md:text-5xl">
              A procurement experience that feels guided, not generic.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#667085]">
              Users can understand the product ecosystem, choose a partner, and
              move straight into a request path without hunting through a flat
              page.
            </p>
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-[28px] bg-[#102A43] p-6 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)] md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {quoteSteps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-white/10 bg-white/[0.08] p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-white/25">
                        0{index + 1}
                      </span>
                      {index % 2 === 0 ? (
                        <Layers3 className="text-[#6EE7D8]" size={22} />
                      ) : (
                        <Sparkles className="text-[#FFB199]" size={22} />
                      )}
                    </div>
                    <p className="mt-5 text-sm font-bold leading-6">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#6EE7D8]/20 bg-[#6EE7D8]/10 p-5">
                <p className="flex items-center gap-3 text-sm font-bold">
                  <ShieldCheck size={20} className="text-[#6EE7D8]" />
                  Partner-backed product sourcing with Caliber Tech guidance.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </PageSection>

      <PageSection>
        <Reveal className="rounded-[28px] bg-gradient-to-br from-[#102A43] via-[#0F2F4A] to-[#071F36] p-8 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)] md:p-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white/55">
              Ready to source technology?
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">
              Send product details and we will help route the quote.
            </h2>
          </div>

          <Link
            href="/request-quote"
            className="animated-sheen mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#102A43] transition hover:-translate-y-1 lg:mt-0"
          >
            Request For Quote
            <ArrowRight size={18} />
          </Link>
        </Reveal>
      </PageSection>
    </main>
  );
}
