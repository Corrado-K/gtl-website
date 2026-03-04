"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const CAPABILITIES = [
  {
    id: "01",
    title: "Custom Software Engineering",
    description:
      "End-to-end development of scalable, maintainable software systems designed for long-term operational integrity, performance, and organizational fit.",
  },
  {
    id: "02",
    title: "Internal Business Systems",
    description:
      "Structured internal platforms — ERPs, workflow engines, and operational dashboards — engineered to eliminate inefficiency and drive operational clarity at scale.",
  },
  {
    id: "03",
    title: "AI Integration & Automation",
    description:
      "Purposeful AI deployment with governance frameworks. We integrate intelligence into systems where it creates compounding, measurable value — never for the sake of it.",
  },
  {
    id: "04",
    title: "Data Architecture & Optimization",
    description:
      "Robust data infrastructure designed for query performance, reliability, and analytical clarity. From schema design to pipeline orchestration.",
  },
  {
    id: "05",
    title: "DevOps & Infrastructure",
    description:
      "Reliable CI/CD pipelines, infrastructure-as-code, and cloud architecture that deliver predictability, resilience, and repeatability at every stage.",
  },
]

function CapabilityCard({
  cap,
  index,
  isInView,
}: {
  cap: (typeof CAPABILITIES)[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative bg-[#0A0D11] border border-[#1E2530] hover:border-[#2A3650] p-8 rounded-2xl transition-all duration-300 hover:bg-[#0F1320] flex flex-col"
      style={{
        boxShadow: "inset 0 0 0 0 rgba(124,58,237,0)",
      }}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#7c3aed] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      {/* ID */}
      <div className="font-mono text-[11px] text-[#2A3240] group-hover:text-[#7c3aed]/60 transition-colors duration-300 mb-6 tracking-widest">
        {cap.id}
      </div>

      {/* Title */}
      <h3 className="text-[#E8E8E6] font-medium text-[1.05rem] mb-4 tracking-tight leading-snug">
        {cap.title}
      </h3>

      {/* Description */}
      <p className="text-[#6B7280] text-sm leading-[1.8] flex-1 group-hover:text-[#9CA3AF] transition-colors duration-300">
        {cap.description}
      </p>

      {/* Bottom marker */}
      <div className="mt-6 flex items-center gap-2">
        <div className="w-3 h-px bg-[#1E2530] group-hover:bg-[#7c3aed] transition-colors duration-300" />
        <div className="w-1.5 h-1.5 border border-[#1E2530] group-hover:border-[#7c3aed] transition-colors duration-300 rotate-45" />
      </div>
    </motion.article>
  )
}

export default function Capabilities() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="capabilities" className="py-32 bg-[#0A0D11]">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="text-[11px] text-[#7c3aed] tracking-[0.18em] uppercase font-medium mb-5">
              Core Capabilities
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold text-[#E8E8E6] tracking-tight leading-tight">
              What We Build
            </h2>
          </div>
          <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
            Each engagement is scoped, documented, and governed. No scope creep.
            No ambiguity.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard
              key={cap.id}
              cap={cap}
              index={i}
              isInView={isInView}
            />
          ))}

          {/* Empty 6th cell to complete grid */}
          <div className="hidden lg:block bg-[#0A0D11] border border-[#1E2530] p-8 rounded-2xl relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10 h-full flex flex-col items-start justify-end">
              <p className="text-[#2A3240] text-xs leading-relaxed">
                Additional capabilities available on consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
