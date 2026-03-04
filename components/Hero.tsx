"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

/* ─── Animated canvas grid ─────────────────────────────────── */
function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const CELL = 36

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      const cols = Math.ceil(W / CELL) + 1
      const rows = Math.ceil(H / CELL) + 1

      /* Grid lines */
      ctx.lineWidth = 1
      for (let c = 0; c < cols; c++) {
        const x = c * CELL
        ctx.beginPath()
        ctx.strokeStyle = "rgba(124,58,237,0.055)"
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H)
        ctx.stroke()
      }
      for (let r = 0; r < rows; r++) {
        const y = r * CELL
        ctx.beginPath()
        ctx.strokeStyle = "rgba(124,58,237,0.055)"
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        ctx.stroke()
      }

      /* Animated intersection pings */
      time += 0.012
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const wave = Math.sin(time + c * 0.28 + r * 0.34)
          if (wave > 0.78) {
            const x = c * CELL
            const y = r * CELL
            const intensity = (wave - 0.78) / 0.22
            const alpha = intensity * 0.55
            const radius = 1 + intensity * 1.8

            /* Glow */
            const grd = ctx.createRadialGradient(x, y, 0, x, y, radius * 6)
            grd.addColorStop(0, `rgba(124,58,237,${alpha * 0.5})`)
            grd.addColorStop(1, "rgba(124,58,237,0)")
            ctx.fillStyle = grd
            ctx.beginPath()
            ctx.arc(x, y, radius * 6, 0, Math.PI * 2)
            ctx.fill()

            /* Core dot */
            ctx.fillStyle = `rgba(196,181,253,${alpha})`
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

/* ─── Floating badge ────────────────────────────────────────── */
function Badge() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 200) }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={visible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-[#1E2530] bg-[#0A0D11]/80 backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#7c3aed] opacity-50 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7c3aed]" />
      </span>
      <span className="text-[11px] text-[#6B7280] tracking-[0.18em] uppercase font-medium">
        Software Engineering &amp; AI Integration
      </span>
    </motion.div>
  )
}

/* ─── Hero ──────────────────────────────────────────────────── */
export default function Hero() {
  const easing = [0.16, 1, 0.3, 1] as const

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0F1115]"
      aria-label="Hero"
    >
      {/* Grid canvas */}
      <GridCanvas />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Edge fade to black */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 50%, #0F1115 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0F1115)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-24 md:pt-0 text-center flex flex-col items-center">
        <Badge />

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: easing }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-semibold text-[#E8E8E6] leading-[1.07] tracking-[-0.02em] mb-7 max-w-[820px] text-balance"
        >
          Engineering Intelligent Systems{" "}
          <span
            className="relative"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #c4b5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            for Scalable Growth.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: easing }}
          className="text-[clamp(1rem,2vw,1.2rem)] text-[#6B7280] leading-[1.75] mb-12 max-w-[600px] font-light"
        >
          We design structured digital infrastructure, AI-enabled platforms, and
          internal systems that help organizations operate with clarity and scale
          with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: easing }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-medium px-8 py-3.5 rounded-xl transition-colors duration-200 tracking-wide"
          >
            Work With Us
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
            href="#capabilities"
            className="inline-flex items-center gap-2 border border-[#1E2530] hover:border-[#2A3650] text-[#9CA3AF] hover:text-[#E8E8E6] text-sm font-medium px-8 py-3.5 rounded-xl transition-all duration-200 tracking-wide"
          >
            View Capabilities
          </Link>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: easing }}
          className="mt-20 flex items-center gap-8 md:gap-14 flex-wrap justify-center"
        >
          {[
            { value: "40+", label: "Systems Delivered" },
            { value: "5+", label: "Years of Engineering" },
            { value: "98%", label: "Client Retention" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-2xl font-semibold text-[#E8E8E6] mb-0.5 tracking-tight">
                {m.value}
              </div>
              <div className="text-xs text-[#4B5563] tracking-[0.1em] uppercase">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] text-[#374151] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(124,58,237,0.7), transparent)",
          }}
        />
      </motion.div>
    </section>
  )
}
