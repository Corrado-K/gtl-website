"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const STEPS = [
  {
    id: "01",
    title: "Discovery & Technical Audit",
    description:
      "A systematic review of your existing infrastructure, technical debt, integration points, and organizational requirements. We map constraints before we design solutions — because good architecture begins with honest assessment.",
    tags: ["Assessment", "Documentation", "Requirements"],
  },
  {
    id: "02",
    title: "Architecture Design",
    description:
      "System blueprints developed with long-term maintainability, performance, and scalability as primary constraints — not aesthetics or deadlines. Every design decision is justified and traceable.",
    tags: ["System Design", "Diagramming", "Review"],
  },
  {
    id: "03",
    title: "Phased Implementation",
    description:
      "Structured delivery in well-defined milestones. Each phase is independently deployable, reducing risk and enabling continuous organizational adaptation without operational disruption.",
    tags: ["Engineering", "Milestones", "Review Gates"],
  },
  {
    id: "04",
    title: "Testing & Stabilization",
    description:
      "Rigorous verification at the unit, integration, and system level. We don't move forward until each phase is provably stable under real-world conditions. Quality is non-negotiable.",
    tags: ["QA", "Integration Tests", "Performance"],
  },
  {
    id: "05",
    title: "Governance & Documentation",
    description:
      "Every system ships with comprehensive technical documentation, runbooks, operational playbooks, and governance frameworks to ensure continuity well beyond the engagement.",
    tags: ["Docs", "Runbooks", "Handoff"],
  },
]

export default function Framework() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const easing = [0.16, 1, 0.3, 1] as const

  return (
    <section id="approach" className="py-32 bg-[#0F1115]">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easing }}
          className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div>
            <div className="text-[11px] text-[#7c3aed] tracking-[0.18em] uppercase font-medium mb-5">
              Approach
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold text-[#E8E8E6] tracking-tight leading-tight">
              Our Engineering
              <br />
              Framework
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[#6B7280] text-base leading-[1.8]">
              A structured methodology refined over years of delivering complex
              systems. Every engagement follows this framework — no exceptions.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-7 top-8 bottom-8 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #1E2530 10%, #1E2530 90%, transparent)",
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: easing }}
                className="group relative flex flex-col md:flex-row gap-6 md:gap-10"
              >
                {/* Step indicator */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-14 h-14 bg-[#0F1115] border border-[#1E2530] group-hover:border-[#7c3aed]/40 rounded-xl flex items-center justify-center transition-all duration-400">
                    <span className="font-mono text-[11px] text-[#7c3aed] tracking-wider">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-12 border-b border-[#1E2530] last:border-b-0 md:pt-3">
                  <h3 className="text-[1.1rem] font-medium text-[#E8E8E6] mb-3 tracking-tight group-hover:text-white transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-[1.9] max-w-2xl group-hover:text-[#9CA3AF] transition-colors duration-300">
                    {step.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[#374151] border border-[#1E2530] px-3 py-1 rounded-full tracking-wide group-hover:border-[#2A3650] group-hover:text-[#6B7280] transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
