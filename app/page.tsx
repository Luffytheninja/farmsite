import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Projects } from "@/components/home/Projects";
import { Process } from "@/components/home/Process";
import { Team } from "@/components/home/Team";
import { Testimonials } from "@/components/home/Testimonials";
import { Contact } from "@/components/home/Contact";
import { Blog } from "@/components/home/Blog";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-custom-beige relative">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Projects />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
      <Blog />
      <Footer />
    </main>
  );
}
