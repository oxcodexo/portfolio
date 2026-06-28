import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ExperienceTimelineSection } from "@/components/projects/ExperienceTimelineSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { AgentSandboxSection } from "@/components/home/AgentSandboxSection";
import { DispatchConsole } from "@/components/dispatch/DispatchConsole";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-4">
      <HeroSection />
      <AboutSection />
      <ExperienceTimelineSection />
      <TechStackSection />
      <AgentSandboxSection />
      <DispatchConsole />
    </div>
  );
}
