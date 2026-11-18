"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExpertisesSection from "@/components/ExpertisesSection";
import TechStackSection from "@/components/TechStackSection";
import MethodSection from "@/components/MethodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ScrollProgress from "@/components/ScrollProgress";
import MarqueeStrip from "@/components/MarqueeStrip";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main className="flex flex-col overflow-x-clip">
        <div className="relative">
          <Navbar />
          <HeroSection />
        </div>
        <MarqueeStrip />
        <AboutSection />
        <ProjectsSection />
        <ExpertisesSection />
        <TechStackSection />
        <MethodSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
