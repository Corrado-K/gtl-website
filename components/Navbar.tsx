"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 transition-all duration-500 ${scrolled ? "top-3 left-0 right-0 px-5" : "top-0 left-0 right-0"
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${scrolled
            ? "mx-auto max-w-5xl h-14 px-5 rounded-2xl bg-[#0A0D11]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-transparent"
            : "container mx-auto max-w-6xl px-6 h-16"
            }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 group"
            aria-label="Graced Tech Labs"
          >
            <span className="text-[#E8E8E6] font-semibold text-[17px] tracking-tight group-hover:text-white transition-colors duration-200">
              Graced
            </span>
            <span className="text-[#7c3aed] font-semibold text-[17px] tracking-tight">
              Tech Labs
            </span>
            <span className="ml-0.5 w-1 h-1 rounded-full bg-[#7c3aed] opacity-80 group-hover:opacity-100 transition-opacity" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-[#9CA3AF] hover:text-[#E8E8E6] transition-colors duration-200 tracking-wide rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] active:bg-[#5b21b6] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 tracking-wide"
            >
              Work With Us
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#9CA3AF] hover:text-[#E8E8E6] transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-px bg-current"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="block h-px bg-current"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-px bg-current"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-[#0A0D11]/98 backdrop-blur-xl pt-16 flex flex-col"
          >
            <div className="flex flex-col px-6 pt-8 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-medium text-[#9CA3AF] hover:text-[#E8E8E6] transition-colors border-b border-[#1E2530]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 bg-[#7c3aed] text-white text-base font-medium px-6 py-3.5 rounded-xl w-full justify-center"
                >
                  Work With Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
