import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Framework from "@/components/Framework";
import Philosophy from "@/components/Philosophy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1115]">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Framework />
      <Philosophy />
      <CTA />
      <Footer />
    </main>
  );
}
