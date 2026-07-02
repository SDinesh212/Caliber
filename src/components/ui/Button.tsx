import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition";

  const variants = {
    primary: "bg-[#123A5D] text-white shadow-lg hover:bg-[#0d2d49]",
    secondary:
      "border border-slate-300 bg-white text-[#123A5D] hover:border-[#2CB7A8]",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
}