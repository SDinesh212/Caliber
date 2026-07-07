import { Send } from "lucide-react";
import SubpageHero from "@/components/ui/SubpageHero";
import RequestQuotePanel from "./RequestQuotePanel";

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

      <RequestQuotePanel />
    </main>
  );
}
