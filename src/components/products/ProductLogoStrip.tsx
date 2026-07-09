import Image from "next/image";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { products } from "./productsData";

export default function ProductLogoStrip() {
  return (
    <PageSection className="pt-10">
      <Reveal className="grid gap-5 rounded-[28px] border border-[#E4EAF2] bg-[#f8fbff] p-5 shadow-[0_18px_50px_rgba(15,47,74,0.08)] sm:grid-cols-2 lg:grid-cols-6">
        {products.map((product) => (
          <div
            key={product.partner}
            className="premium-card premium-depth flex min-h-[96px] items-center justify-center rounded-2xl bg-white p-4 shadow-sm"
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
  );
}
