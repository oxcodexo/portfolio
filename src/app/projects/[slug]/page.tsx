import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getAllProjects } from '@/lib/projects/registry';
import { MetricCounters } from '@/components/projects/MetricCounters';
import { SystemArchitectureFlow } from '@/components/projects/SystemArchitectureFlow';
import { ArrowLeft, Cpu, ShieldAlert, Layers, Activity } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Flagship Case Study`,
    description: project.overview,
    openGraph: {
      title: `${project.title} - Architecture-First Case Study`,
      description: project.overview,
      type: 'article',
      siteName: 'Hicham Kraou | Systems Architect',
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-12 py-6 max-w-5xl mx-auto">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>RETURN TO TELEMETRY MATRIX</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-[11px] font-mono text-emerald-400">
          <Activity className="h-3 w-3 animate-pulse text-emerald-400" />
          <span>FLAGSHIP CASE STUDY</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="flex flex-col gap-6 relative">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-emerald-400 font-mono font-medium">
            {project.tagline}
          </p>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-3xl">
          {project.overview}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quantitative Metrics Section */}
      <section className="flex flex-col gap-4 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
          <Layers className="h-4 w-4 text-emerald-400" />
          <span>QUANTITATIVE ARCHITECTURAL METRICS</span>
        </div>
        <MetricCounters metrics={project.metrics} />
      </section>

      {/* Interactive System Architecture Flow */}
      {project.systemFlows && project.systemFlows.length > 0 && (
        <section className="flex flex-col gap-4 pt-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            <Cpu className="h-4 w-4 text-cyan-400" />
            <span>SYSTEM ARCHITECTURE FLOW & EXECUTION PIPELINE</span>
          </div>
          <SystemArchitectureFlow flows={project.systemFlows} />
        </section>
      )}

      {/* Engineering Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="flex flex-col gap-4 pt-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            <ShieldAlert className="h-4 w-4 text-amber-400" />
            <span>CORE ENGINEERING CHALLENGES RESOLVED</span>
          </div>

          <div className="cyber-card rounded-2xl p-6 md:p-8 flex flex-col gap-4">
            <ul className="flex flex-col gap-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-zinc-300 font-sans leading-relaxed">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-amber-500/10 text-amber-400 font-mono text-xs font-bold mt-0.5">
                    0{index + 1}
                  </span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
