"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/layout/BrandLogo";

const navLinks = [
  { label: "Find a Hire", href: "#hire", icon: "right" },
  { label: "About Us", href: "#about", icon: "down" },
  { label: "Success Stories", href: "#stories" },
  { label: "Pricing", href: "#pricing" },
  { label: "Industries", href: "#industries", icon: "down" },
  { label: "Services", href: "#services", icon: "down" },
  { label: "Resources", href: "#resources", icon: "down" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-7"
    >
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        className="mx-auto flex h-[78px] max-w-[1510px] items-center justify-between rounded-[22px] border border-white bg-white/95 px-6 shadow-[0_20px_60px_rgba(15,47,74,0.08)] backdrop-blur-xl"
      >
        {/* Logo */}
        <BrandLogo placement="navbar" priority />

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-center xl:flex">
          <div className="flex items-center gap-7 whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 text-[14px] font-semibold text-black transition hover:text-[#1B24F2]"
              >
                {link.label}

                {link.icon === "right" && <ChevronRight size={14} />}
                {link.icon === "down" && <ChevronDown size={14} />}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            href="/jobs"
            className="flex h-[48px] items-center justify-center rounded-full border-2 border-[#1B24F2] px-6 text-[13px] font-bold uppercase text-[#1B24F2] transition hover:bg-[#1B24F2] hover:text-white"
          >
            Apply For Jobs
          </Link>

          <Link
            href="#contact"
            className="flex h-[48px] items-center justify-center rounded-full bg-[#1B24F2] px-7 text-[13px] font-bold uppercase text-white transition hover:bg-[#1218C9]"
          >
            Start Hiring
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-black xl:hidden"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-w-[1510px] rounded-3xl bg-white p-6 shadow-xl xl:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between font-semibold text-black"
                  >
                    {link.label}

                    {link.icon && <ChevronRight size={16} />}
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/jobs"
                className="rounded-full border-2 border-[#1B24F2] px-5 py-3 text-center text-sm font-bold uppercase text-[#1B24F2]"
              >
                Apply For Jobs
              </Link>

              <Link
                href="#contact"
                className="rounded-full bg-[#1B24F2] px-5 py-3 text-center text-sm font-bold uppercase text-white"
              >
                Start Hiring
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}