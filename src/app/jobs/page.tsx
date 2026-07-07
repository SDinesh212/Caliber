import { BriefcaseBusiness } from "lucide-react";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import SubpageHero from "@/components/ui/SubpageHero";

export default function JobsPage() {
  return (
    <main className="bg-white">
      <SubpageHero
        label="Career opportunities"
        title="Explore technology roles matched with better hiring support"
        description="Browse featured roles, search by category, and connect with opportunities backed by Caliber Tech's people-first staffing process."
        icon={BriefcaseBusiness}
        actions={[
          { label: "Search jobs", href: "#jobs" },
          { label: "Contact team", href: "/contact", variant: "secondary" },
        ]}
        metrics={[
          { value: "8", label: "Featured roles" },
          { value: "Remote", label: "Hybrid options" },
          { value: "Fast", label: "Recruiter support" },
        ]}
      />
      <FeaturedJobs />
    </main>
  );
}
