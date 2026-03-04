import Link from "next/link"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#080B0F] border-t border-[#1E2530]">
      {/* Main footer */}
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-start">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-[#E8E8E6] font-semibold text-lg tracking-tight">
                Graced
              </span>
              <span className="text-[#7c3aed] font-semibold text-lg tracking-tight">
                Tech Labs
              </span>
              <span className="ml-0.5 w-1 h-1 rounded-full bg-[#7c3aed] opacity-80" />
            </div>
            <p className="text-[#4B5563] text-[11px] tracking-[0.18em] uppercase">
              Structured Engineering. Intelligent Systems.
            </p>
            <div className="mt-6">
              <a
                href="mailto:hello@gracedtechlabs.com"
                className="text-[#6B7280] hover:text-[#E8E8E6] text-sm transition-colors duration-200"
              >
                hello@gracedtechlabs.com
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <div className="text-[11px] text-[#374151] tracking-[0.18em] uppercase mb-5">
              Navigation
            </div>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B7280] hover:text-[#E8E8E6] transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + tagline */}
          <div className="md:text-right">
            <div className="text-[11px] text-[#374151] tracking-[0.18em] uppercase mb-5">
              Connect
            </div>
            <a
              href="https://linkedin.com/company/gracedtechlabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Graced Tech Labs on LinkedIn"
              className="inline-flex items-center gap-2.5 text-[#6B7280] hover:text-[#7c3aed] transition-colors duration-200 group"
            >
              <LinkedInIcon className="w-5 h-5" />
              <span className="text-sm tracking-wide group-hover:text-[#7c3aed] transition-colors duration-200">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E2530]/60">
        <div className="container mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#2A3240] text-xs">
            &copy; {year} Graced Tech Labs. All rights reserved.
          </p>
          <p className="text-[#2A3240] text-xs tracking-wide">
            Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
