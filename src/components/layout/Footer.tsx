import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import BrandLogo from "@/components/layout/BrandLogo";

const footerLinks = [
  {
    title: "For Employers",
    links: [
      "Find Talent",
      "Executive Search",
      "Contract Staffing",
      "Permanent Hiring",
    ],
  },
  {
    title: "For Candidates",
    links: [
      "Browse Jobs",
      "Career Advice",
      "Resume Builder",
      "Interview Tips",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Industries",
      "Success Stories",
      "Careers",
    ],
  },
  {
    title: "Support",
    links: [
      "Help Center",
      "Privacy Policy",
      "Terms & Conditions",
      "Contact",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#082846] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="soft-float absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="soft-float absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div
          className="animated-dot-field absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-20">

        {/* Top */}

        <div className="grid gap-12 lg:grid-cols-[1.3fr_2.3fr_1.2fr]">

          {/* Left */}

          <div>

            <BrandLogo placement="footer" />

            <p className="mt-7 max-w-sm leading-8 text-white/65">
              Connecting exceptional talent with world-class
              companies through innovative recruitment solutions,
              helping businesses grow and professionals succeed.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/70">

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Dallas, Texas, USA
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +1 (555) 123-4567
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                contact@callibertech.com
              </div>

            </div>

            <div className="mt-8 flex gap-3">

              {[
                FaLinkedinIn,
                FaFacebookF,
                FaInstagram,
                FaXTwitter,
              ].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500"
                >
                  <Icon size={17} />
                </Link>
              ))}

            </div>

          </div>

          {/* Center */}

          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">

            {footerLinks.map((group) => (
              <div key={group.title}>

                <h3 className="font-bold text-white">
                  {group.title}
                </h3>

                <ul className="mt-6 space-y-4">

                  {group.links.map((item) => (
                    <li key={item}>

                      <Link
                        href="#"
                        className="text-sm text-white/60 transition hover:translate-x-1 hover:text-white"
                      >
                        {item}
                      </Link>

                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

          {/* Right */}

          <div>

            <h3 className="text-xl font-bold">
              Newsletter
            </h3>

            <p className="mt-5 leading-7 text-white/65">
              Subscribe to receive hiring trends,
              recruitment insights and weekly job updates.
            </p>

            <div className="mt-7 flex rounded-2xl border border-white/10 bg-white/5 p-2">

              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/35"
              />

              <button className="grid h-11 w-11 place-items-center cursor-pointer rounded-xl bg-blue-600 transition hover:bg-blue-700">
                <ArrowRight size={18} />
              </button>

            </div>

            <div className="mt-7 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">

              <h4 className="font-bold">
                Need Hiring Help?
              </h4>

              <p className="mt-2 text-sm leading-7 text-white/70">
                Talk to our recruitment specialists and hire
                faster with pre-screened candidates.
              </p>

              <button className="mt-5 rounded-xl bg-white px-5 py-3 font-semibold text-[#082846] transition hover:scale-105 cursor-pointer ">
                Schedule a Call
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">

          <p>
            © {new Date().getFullYear()} Calliber Tech LLC.
            All Rights Reserved.
          </p>

          <div className="flex gap-8">

            <Link href="#" className="hover:text-white">
              Privacy
            </Link>

            <Link href="#" className="hover:text-white">
              Terms
            </Link>

            <Link href="#" className="hover:text-white">
              Cookies
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}
