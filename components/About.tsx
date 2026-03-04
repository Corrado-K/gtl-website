"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: "40+", label: "Systems Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Documented Output" },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const easing = [0.16, 1, 0.3, 1] as const

  return (
    <section id="about" className="py-32 bg-[#0F1115]">
      <div className="container mx-auto max-w-6xl px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left column — headline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: easing }}
          >
            <div className="text-[11px] text-[#7c3aed] tracking-[0.18em] uppercase font-medium mb-5">
              About
            </div>

            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold text-[#E8E8E6] leading-[1.1] tracking-tight mb-8">
              Built with Discipline.
              <br />
              <span className="text-[#9CA3AF]">Designed for Scale.</span>
            </h2>

            {/* Decorative rule */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-[#7c3aed]/60" />
              <div className="w-2 h-2 rounded-full border border-[#7c3aed]/40" />
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="group">
                  <div className="text-2xl font-semibold text-[#E8E8E6] mb-1 tracking-tight group-hover:text-[#7c3aed] transition-colors duration-300">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-[#4B5563] tracking-[0.1em] uppercase leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — body */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: easing }}
            className="lg:pt-16"
          >
            <p className="text-[#9CA3AF] text-lg leading-[1.8] mb-6 font-light">
              Graced Tech Labs is a precision-driven innovation lab focused on
              architecting durable, intelligent systems. We combine deep
              engineering expertise with AI integration to deliver structured
              digital solutions that outlast trends.
            </p>

            <p className="text-[#6B7280] text-base leading-[1.8] mb-6">
              Our work centers on creating lasting infrastructure — not just
              products. We think in systems, design for governance, and build
              with the conviction that every technical decision is a long-term
              commitment.
            </p>

            <p className="text-[#6B7280] text-base leading-[1.8]">
              Growth-focused organizations rely on us to bring clarity where
              there is complexity, and structure where there is ambiguity. We
              don&apos;t rush engineering. We architect it.
            </p>

            {/* Feature callouts */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Deep engineering expertise",
                "AI-first system design",
                "Governance-led delivery",
                "Long-term architecture",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 flex-shrink-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
                  </div>
                  <span className="text-sm text-[#6B7280]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
