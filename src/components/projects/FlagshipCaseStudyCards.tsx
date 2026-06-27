import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getAllProjects } from '@/lib/projects/registry';

export function FlagshipCaseStudyCards() {
  const flagshipProjects = getAllProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {flagshipProjects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.slug}`}
          className="cyber-card rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 group hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded border border-emerald-500/30 bg-emerald-950/40">
                FLAGSHIP SYSTEM
              </span>
              <div className="flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors">
                <span>View Architecture</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold font-mono text-white group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-emerald-400/90 font-medium">
                {project.tagline}
              </p>
            </div>

            <p className="text-sm text-zinc-300 font-sans leading-relaxed line-clamp-3">
              {project.overview}
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-zinc-800/60">
            {/* Key Metric Highlights */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-0.5 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                    <span className="text-[10px] font-mono text-zinc-400 truncate">{m.label}</span>
                    <span className="text-xs font-mono font-bold text-emerald-300">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Tags */}
            <div className="flex flex-wrap items-center gap-1.5">
              {project.techTags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                >
                  {tag}
                </span>
              ))}
              {project.techTags.length > 4 && (
                <span className="text-[11px] font-mono text-zinc-400">
                  +{project.techTags.length - 4} more
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
