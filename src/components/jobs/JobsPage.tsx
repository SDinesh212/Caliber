import FeaturedJobs from "@/components/home/FeaturedJobs";
import SubpageHero from "@/components/ui/SubpageHero";
import { jobsHero } from "./jobsData";

export default function JobsPage() {
  return (
    <main className="bg-white">
      <SubpageHero {...jobsHero} />
      <FeaturedJobs />
    </main>
  );
}
