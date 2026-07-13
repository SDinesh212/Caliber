import ProductsHero from "./ProductsHero";
import ProductPartnerShowcase from "./ProductPartnerShowcase";
import ProductQuoteFlow from "./ProductQuoteFlow";
import ProductsCta from "./ProductsCta";

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <ProductsHero />

      <div id="partners">
        <ProductPartnerShowcase />
      </div>

      <ProductQuoteFlow />

      <ProductsCta />
    </main>
  );
}