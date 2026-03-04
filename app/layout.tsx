import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Graced Tech Labs — Structured Engineering. Intelligent Systems.",
  description:
    "We design structured digital infrastructure, AI-enabled platforms, and internal systems that help organizations operate with clarity and scale with confidence.",
  keywords: [
    "software engineering",
    "AI integration",
    "digital infrastructure",
    "internal systems",
    "DevOps",
    "data architecture",
  ],
  openGraph: {
    title: "Graced Tech Labs",
    description:
      "Precision-driven software engineering and AI integration for growth-focused organizations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className="bg-[#0F1115] text-[#E8E8E6] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
