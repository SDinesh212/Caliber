type FieldProps = {
  label: string;
  placeholder: string;
  type?: string;
};

export default function Field({
  label,
  placeholder,
  type = "text",
}: FieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-black text-[#102A43]">{label}</span>
      <input
        type={type}
        aria-label={label.replace("*", "")}
        placeholder={placeholder}
        className="mt-3 h-14 w-full rounded-2xl border border-[#D0D5DD] bg-white px-4 text-[#102A43] outline-none transition focus:border-[#1B63FF]"
      />
    </label>
  );
}
