import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { InteractiveSection } from "@/components/sections/InteractiveSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/health/AIChatbot";

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InteractiveSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <AIChatbot />
    </main>
  );
}
