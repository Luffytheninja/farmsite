import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Features as Highlights } from "@/components/home/Features";
import { ContactStrip } from "@/components/home/ContactStrip";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream relative">
      <Navbar />
      <Hero />
      <Highlights />
      <ContactStrip />
      <Footer />
    </main>
  );
}
