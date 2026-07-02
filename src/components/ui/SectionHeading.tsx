type SectionHeadingProps = {
  label: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-wider text-[#2CB7A8]">
        {label}
      </span>
      <h2 className="mt-3 text-3xl font-bold text-[#102A43] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  );
}