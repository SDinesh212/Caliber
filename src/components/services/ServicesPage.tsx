import SubpageHero from "@/components/ui/SubpageHero";
import ServiceAbout from "./ServiceAbout";
import ServiceCapabilities from "./ServiceCapabilities";
import ServiceProcess from "./ServiceProcess";
import ServicesControlPanel from "./ServicesControlPanel";

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
        heroImage={{
          src: "/images/services/services-hero-visual.svg",
          alt: "Technology staffing service domains connected around a central talent platform",
          width: 1060,
          height: 760,
        }}
      />

      <ServicesControlPanel />
      <ServiceCapabilities />
      <ServiceProcess />
      <ServiceAbout />
    </main>
  );
}
