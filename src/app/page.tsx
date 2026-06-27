import { HeroSection } from "@/components/home/HeroSection";
import { FlagshipCaseStudiesSection } from "@/components/projects/FlagshipCaseStudiesSection";
import { EnterpriseSolutionsSection } from "@/components/projects/EnterpriseSolutionsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-4">
      <HeroSection />
      <FlagshipCaseStudiesSection />
      <EnterpriseSolutionsSection />
    </div>
  );
}
