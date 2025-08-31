"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementSection from "@/components/AchievementSection";
import CertificationSection from "@/components/CertificationSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll('nav a[href^="#"]');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= 100 && rect.bottom >= 100;

        if (isVisible) {
          navLinks.forEach((link) => {
            link.classList.remove("text-blue-600", "dark:text-blue-400");
            if (link.getAttribute("href") === `#${section.id}`) {
              link.classList.add("text-blue-600", "dark:text-blue-400");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-500">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <SkillsSection />
        <AchievementSection />
        <CertificationSection />
        <ContactSection />
      </main>
      <ScrollToTop />
    </div>
  );
}
