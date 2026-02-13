import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { Stats } from "@/components/home/Stats";
import { Team } from "@/components/home/Team";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <Stats />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
