"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/layout/BrandLogo";
import { moreDropdownLinks, siteNavLinks } from "@/constants/site";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "px-0 pt-0" : "px-4 pt-7"
      }`}
    >
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        className={`mx-auto flex items-center justify-between border bg-white/95 px-6 shadow-[0_20px_60px_rgba(15,47,74,0.08)] backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "h-[82px] max-w-full rounded-none border-white"
            : "h-[78px] max-w-[1510px] rounded-[22px] border-white"
        }`}
      >
        <BrandLogo placement="navbar" priority />

        <div className="hidden flex-1 items-center justify-center xl:flex">
          <div className="flex items-center gap-7 whitespace-nowrap">
            {siteNavLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.dropdown === "more" ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={moreOpen}
                      aria-haspopup="menu"
                      onClick={() => setMoreOpen(!moreOpen)}
                      className="flex items-center gap-1.5 text-[14px] font-semibold text-black transition hover:text-[#1B24F2]"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition ${moreOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {moreOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-full z-50 mt-4 w-56 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl"
                        >
                          {moreDropdownLinks.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              rel={item.external ? "noreferrer" : undefined}
                              onClick={() => setMoreOpen(false)}
                              className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#102A43] transition hover:bg-[#F4F7FF] hover:text-[#1B24F2]"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-[14px] font-semibold text-black transition hover:text-[#1B24F2]"
                  >
                    {link.label}

                    {link.icon === "right" && <ChevronRight size={14} />}
                    {link.icon === "down" && <ChevronDown size={14} />}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#D8C7A8] bg-white px-8 py-4 font-bold text-[#102A43] shadow-sm transition hover:-translate-y-1"
          >
            Apply For Jobs
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#102A43] px-8 py-4 font-bold text-white shadow-xl shadow-[#102A43]/20 transition hover:-translate-y-1 hover:bg-[#071F36]"
          >
            Start Hiring
          </Link>
        </div>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-black xl:hidden"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className={`mx-auto mt-3 rounded-3xl bg-white p-6 shadow-xl xl:hidden ${
              scrolled ? "max-w-full mx-4" : "max-w-[1510px]"
            }`}
          >
            <div className="flex flex-col gap-5">
              {siteNavLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.dropdown === "more" ? (
                    <div>
                      <button
                        type="button"
                        aria-expanded={moreOpen}
                        onClick={() => setMoreOpen(!moreOpen)}
                        className="flex w-full items-center justify-between font-semibold text-black"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition ${moreOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {moreOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 space-y-3 rounded-2xl bg-[#F4F7FF] p-4">
                              {moreDropdownLinks.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  target={item.external ? "_blank" : undefined}
                                  rel={item.external ? "noreferrer" : undefined}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMoreOpen(false);
                                  }}
                                  className="block text-sm font-semibold text-[#102A43]"
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between font-semibold text-black"
                    >
                      {link.label}
                      {link.icon && <ChevronRight size={16} />}
                    </Link>
                  )}
                </motion.div>
              ))}

              <Link
                href="/jobs"
                onClick={() => setMobileOpen(false)}
                className="rounded-full border-2 border-[#1B24F2] px-5 py-3 text-center text-sm font-bold uppercase text-[#1B24F2]"
              >
                Apply For Jobs
              </Link>

              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
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
