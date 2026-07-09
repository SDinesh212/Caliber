import { Send } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import Field from "./Field";
import { interestOptions } from "./requestQuoteData";

export default function RequestQuoteForm() {
  return (
    <Reveal>
      <form
        id="quote-form"
        className="premium-card rounded-[30px] border border-[#E4EAF2] bg-[#f8fbff] p-5 shadow-[0_24px_80px_rgba(15,47,74,0.10)] md:p-8"
      >
        <div className="premium-card relative z-10 rounded-[24px] bg-white p-5 md:p-7">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1B63FF]">
            Contact details
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field label="Name*" placeholder="Your full name" />
            <Field
              label="Email*"
              placeholder="you@company.com"
              type="email"
            />
            <Field label="Phone" placeholder="+1 469 000 0000" />
            <Field label="Company" placeholder="Company name" />
          </div>
        </div>

        <div className="mt-5 rounded-[24px] bg-white p-5 md:p-7">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#238A72]">
            I am interested in
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {interestOptions.map((option) => (
              <label
                key={option}
                className="premium-chip cursor-pointer rounded-full border border-[#D0D5DD] bg-[#F8FBFF] px-4 py-2 text-sm font-bold text-[#475467] hover:border-[#1B63FF] hover:text-[#1B63FF]"
              >
                <input type="checkbox" className="sr-only" />
                {option}
              </label>
            ))}
          </div>

          <div className="mt-6 grid gap-5">
            <label className="block">
              <span className="text-sm font-black text-[#102A43]">
                Tell us about the request*
              </span>
              <textarea
                rows={5}
                aria-label="Request details"
                placeholder="Roles, skills, product brand, quantity, timeline, location, or any other notes..."
                className="premium-focus-field mt-3 w-full resize-none rounded-2xl border border-[#D0D5DD] bg-white p-4 text-[#102A43] outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm font-black text-[#102A43]">
                Other notes
              </span>
              <textarea
                rows={4}
                aria-label="Other notes"
                placeholder="Any procurement, hiring, compliance, or preferred contact details..."
                className="premium-focus-field mt-3 w-full resize-none rounded-2xl border border-[#D0D5DD] bg-white p-4 text-[#102A43] outline-none"
              />
            </label>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-xs leading-6 text-[#667085]">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>

            <button
              type="button"
              className="premium-sheen premium-depth inline-flex items-center justify-center gap-3 rounded-xl bg-[#102A43] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-[#102A43]/20 hover:bg-[#071F36]"
            >
              Send
              <Send size={17} />
            </button>
          </div>
        </div>
      </form>
    </Reveal>
  );
}
