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
      />

      <ServicesControlPanel />
      <ServiceCapabilities />
      <ServiceProcess />
      <ServiceAbout />
    </main>
  );
}
