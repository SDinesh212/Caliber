import Image from "next/image";
import Reveal from "@/components/animation/Reveal";
import { products } from "./productsData";

export default function ProductLogoStrip() {
  const marqueeProducts = [...products, ...products];

  return (
    <div className="mx-auto -mt-8 max-w-[1410px] px-5">
      <Reveal className="relative overflow-hidden rounded-[28px] p-5 ">
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#F8FBFF] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#F8FBFF] to-transparent" />

        <div className="flex w-max animate-product-marquee gap-5">
          {marqueeProducts.map((product, index) => (
            <div
              key={`${product.partner}-${index}`}
              className="premium-card premium-depth flex h-[96px] w-[230px] shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-sm"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={product.image}
                  alt={`${product.partner} logo`}
                  fill
                  sizes="230px"
                  className="object-contain"
                  priority={index < products.length}
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}