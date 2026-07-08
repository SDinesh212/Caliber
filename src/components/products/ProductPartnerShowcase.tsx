import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { products } from "./productsData";

export default function ProductPartnerShowcase() {
  return (
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

                  <div className="mx-auto max-w-[560px] text-center">
                    <h3 className="text-2xl font-medium tracking-wide text-black md:text-3xl">
                      {product.title}
                    </h3>

                    <p className="mt-7 text-[18px] leading-8 text-[#505A64]">
                      {product.copy}
                    </p>

                    <Link
                      href="/request-quote"
                      className="mt-10 inline-flex bg-[#102A43] text-white rounded-xl px-10 py-5 text-sm font-black uppercase tracking-[0.35em] text-black transition hover"
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
  );
}
