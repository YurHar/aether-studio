import { CustomCursor } from "./components/aether/CustomCursor";
import Footer from "./components/aether/Footer";
import Hero from "./components/aether/Hero";
import Manifesto from "./components/aether/Manifesto";
import Navbar from "./components/aether/Navbar";
import { ParticleBackground } from "./components/aether/ParticleBackground";
import Philosophy from "./components/aether/Philosophy";
import Showcase from "./components/aether/showcase/Showcase";
import HeroVideoSection from "./components/aether/HeroVideoSection";

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen">
      <div className="noise" />
      <CustomCursor />
      <ParticleBackground />
      <Navbar />

      <Hero />
      <HeroVideoSection />
      <Manifesto />
      <Showcase />
      <Philosophy />
      <Footer />
    </main>
  );
}
