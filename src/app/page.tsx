import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ExperienceTimelineSection } from "@/components/projects/ExperienceTimelineSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-4">
      <HeroSection />
      <AboutSection />
      <ExperienceTimelineSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
}
