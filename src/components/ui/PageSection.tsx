import type { ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function PageSection({
  children,
  className = "",
}: PageSectionProps) {
  return (
    <section className={`bg-white px-5 py-20 ${className}`}>
      <div className="mx-auto max-w-[1510px]">{children}</div>
    </section>
  );
}
