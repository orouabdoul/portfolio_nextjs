"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import ExpertisesSection from "@/components/ExpertisesSection";
import DesignToAppSection from "@/components/DesignToAppSection";
import ProjectsSection from "@/components/ProjectsSection";
import MethodSection from "@/components/MethodSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-clip">
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
      <ProcessSection />
      <AboutSection />
      <ExpertisesSection />
      <DesignToAppSection />
      <ProjectsSection />
      <MethodSection />
      <TechStackSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
