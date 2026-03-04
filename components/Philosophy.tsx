"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const PRINCIPLES = [
  {
    id: "01",
    title: "Architecture over velocity.",
    body: "We prioritize long-term, maintainable architecture over rushed releases. A system built right the first time is infinitely less costly than one rebuilt from entropy.",
  },
  {
    id: "02",
    title: "Every decision is documented.",
    body: "Every system we build ships with complete technical documentation. Every architectural decision is traceable, justified, and legible to future engineers.",
  },
  {
    id: "03",
    title: "AI with governance.",
    body: "AI is integrated with rigorous governance frameworks, not as an experimental afterthought. Intelligence in systems must be observable, auditable, and controllable.",
  },
  {
    id: "04",
    title: "Infrastructure, not interfaces.",
    body: "We build the systems that power your organization — not just the surfaces your users see. The foundation must be engineered before the facade is designed.",
  },
]

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const easing = [0.16, 1, 0.3, 1] as const

  return (
    <section className="py-32 relative overflow-hidden bg-[#080B0F]">
      {/* Fine grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 60%, #080B0F 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* Left — title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easing }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="text-[11px] text-[#7c3aed] tracking-[0.18em] uppercase font-medium mb-5">
              Philosophy
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold text-[#E8E8E6] tracking-tight leading-[1.1] mb-6">
              Excellence
              <br />
              Over Speed.
            </h2>
            <p className="text-[#6B7280] text-base leading-[1.8]">
              We hold ourselves to an engineering standard that prioritizes
              correctness, durability, and clarity. The systems we build are
              meant to serve organizations for years — not just quarters.
            </p>

            {/* Decorative element */}
            <div className="mt-10 flex flex-col gap-2">
              <div className="w-10 h-px bg-[#7c3aed]/40" />
              <div className="w-6 h-px bg-[#7c3aed]/20" />
              <div className="w-3 h-px bg-[#7c3aed]/10" />
            </div>
          </motion.div>

          {/* Right — principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: easing }}
            className="flex flex-col"
          >
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1, ease: easing }}
                className="group flex gap-8 py-8 border-b border-[#1E2530] last:border-b-0 hover:bg-[#0A0D11]/40 -mx-4 px-4 transition-colors duration-300"
              >
                {/* Number */}
                <div className="flex-shrink-0 pt-0.5">
                  <span className="font-mono text-[11px] text-[#2A3240] group-hover:text-[#7c3aed]/60 transition-colors duration-300 tracking-widest">
                    {p.id}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[#E8E8E6] font-medium text-base mb-3 tracking-tight group-hover:text-white transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-[1.9] group-hover:text-[#9CA3AF] transition-colors duration-300">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
