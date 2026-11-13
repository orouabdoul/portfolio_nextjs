"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExpertisesSection from "@/components/ExpertisesSection";
import MethodSection from "@/components/MethodSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="flex flex-col overflow-x-clip">
        <div className="relative">
          <Navbar />
          <HeroSection />
        </div>
        <AboutSection />
        <ProjectsSection />
        <ExpertisesSection />
        <MethodSection />
        <TechStackSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
