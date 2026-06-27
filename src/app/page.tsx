import { HeroSection } from "@/components/home/HeroSection";
import { FlagshipCaseStudiesSection } from "@/components/projects/FlagshipCaseStudiesSection";
import { EnterpriseSolutionsSection } from "@/components/projects/EnterpriseSolutionsSection";
import { DispatchConsole } from "@/components/dispatch/DispatchConsole";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-4">
      <HeroSection />
      <FlagshipCaseStudiesSection />
      <EnterpriseSolutionsSection />
      <DispatchConsole />
    </div>
  );
}

