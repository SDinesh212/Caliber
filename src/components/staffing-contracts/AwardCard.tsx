import type { LucideIcon } from "lucide-react";

type AwardCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export default function AwardCard({ title, text, icon: Icon }: AwardCardProps) {
  return (
    <div className="premium-card premium-depth rounded-[26px] border border-[#E4EAF2] bg-[#F8FBFF] p-6">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EAF2FF] text-[#1B24F2]">
        <Icon size={22} />
      </div>

      <h3 className="mt-5 text-xl font-black text-[#102A43]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#667085]">{text}</p>
    </div>
  );
}
