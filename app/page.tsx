import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Approaches } from "@/components/Approaches";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Approaches />
      <Testimonials />
      <Contact />
    </main>
  );
}
