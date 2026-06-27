import { Server } from 'lucide-react';
import { EnterpriseSolutionCards } from './EnterpriseSolutionCards';

export function EnterpriseSolutionsSection() {
  return (
    <section id="enterprise-solutions" className="flex flex-col gap-8 scroll-mt-20">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
          <Server className="h-4 w-4" />
          <span>ENTERPRISE ARCHITECTURE SHOWCASE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
          Enterprise Solutions & SaaS Platforms
        </h2>
        <p className="text-base text-zinc-400 max-w-2xl">
          Specialized infrastructure deployments engineered for high availability, zero-trust security, continuous benchmarking, and embedded AI workloads.
        </p>
      </div>

      <EnterpriseSolutionCards />
    </section>
  );
}
