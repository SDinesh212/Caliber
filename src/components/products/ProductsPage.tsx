import { PackageCheck } from "lucide-react";
import SubpageHero from "@/components/ui/SubpageHero";
import ProductLogoStrip from "./ProductLogoStrip";
import ProductPartnerShowcase from "./ProductPartnerShowcase";
import ProductQuoteFlow from "./ProductQuoteFlow";
import ProductsCta from "./ProductsCta";

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

      <ProductLogoStrip />
      <ProductPartnerShowcase />
      <ProductQuoteFlow />
      <ProductsCta />
    </main>
  );
}
