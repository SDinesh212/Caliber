import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  placement: "navbar" | "footer";
  priority?: boolean;
};

const logoStyles = {
  navbar: {
    link: "flex h-[60px] w-[150px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white px-1.5 py-1 shadow-sm ring-1 ring-black/5 sm:w-[172px] md:w-[190px]",
    image: "h-full w-full scale-[1.16] object-contain",
  },
  footer: {
    link: "inline-flex h-[122px] w-[230px] items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-xl ring-1 ring-white/20 sm:w-[260px]",
    image: "h-full w-full scale-[1.08] object-contain",
  },
};

export default function BrandLogo({
  placement,
  priority = false,
}: BrandLogoProps) {
  const styles = logoStyles[placement];

  return (
    <Link href="/" className={styles.link} aria-label="Calliber Tech LLC home">
      <Image
        src="/images/calliber-logo2.png"
        alt="Calliber Tech LLC Logo"
        width={1672}
        height={941}
        priority={priority}
        className={styles.image}
        sizes={placement === "navbar" ? "190px" : "260px"}
      />
    </Link>
  );
}
