"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const easing = [0.16, 1, 0.3, 1] as const

  return (
    <section id="contact" className="py-32 bg-[#0F1115]">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: easing }}
          className="relative border border-[#1E2530] rounded-3xl overflow-hidden"
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden="true"
          />

          {/* Central glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Corner accents */}
          {[
            "top-0 left-0 border-t border-l",
            "top-0 right-0 border-t border-r",
            "bottom-0 left-0 border-b border-l",
            "bottom-0 right-0 border-b border-r",
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute w-8 h-8 border-[#7c3aed]/30 ${cls}`}
              aria-hidden="true"
            />
          ))}

          {/* Content */}
          <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: easing }}
            >
              <div className="text-[11px] text-[#7c3aed] tracking-[0.18em] uppercase font-medium mb-6">
                Let&rsquo;s Build Together
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22, ease: easing }}
              className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-[#E8E8E6] tracking-tight mb-5"
            >
              Build Systems That Scale.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: easing }}
              className="text-[#6B7280] text-lg mb-12 max-w-md leading-relaxed"
            >
              Let&rsquo;s architect your next phase of growth. Tell us about
              your infrastructure challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.38, ease: easing }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="mailto:hello@gracedtechlabs.com"
                className="group inline-flex items-center gap-3 bg-[#7c3aed] hover:bg-[#6d28d9] active:bg-[#5b21b6] text-white text-sm font-medium px-10 py-4 rounded-xl transition-colors duration-200 tracking-wide"
              >
                Start a Conversation
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
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

              <Link
                href="mailto:hello@gracedtechlabs.com"
                className="text-sm text-[#6B7280] hover:text-[#9CA3AF] transition-colors duration-200 tracking-wide"
              >
                hello@gracedtechlabs.com
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
