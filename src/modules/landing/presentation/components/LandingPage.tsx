"use client";

import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ServicesSection } from "./ServicesSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { landingPageData } from "../../infrastructure/data/landingData";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection data={landingPageData.hero} />
        <AboutSection data={landingPageData.about} />
        <ServicesSection data={landingPageData.services} />
        <ExperienceSection data={landingPageData.experience} />
        <ProjectsSection data={landingPageData.projects} />
        <ContactSection data={landingPageData.contact} />
      </main>
      <Footer />
    </div>
  );
}
