import { Layers } from 'lucide-react';
import { FlagshipCaseStudyCards } from './FlagshipCaseStudyCards';

export function FlagshipCaseStudiesSection() {
  return (
    <section id="case-studies" className="flex flex-col gap-8 scroll-mt-20">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
          <Layers className="h-4 w-4" />
          <span>ARCHITECTURE-FIRST SHOWCASE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
          Flagship Case Studies
        </h2>
        <p className="text-base text-zinc-400 max-w-2xl">
          Deep-dive technical breakdowns featuring interactive architecture diagrams, quantitative metric counters, and proprietary design patterns.
        </p>
      </div>

      <FlagshipCaseStudyCards />
    </section>
  );
}
