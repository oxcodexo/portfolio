import Link from "next/link";
import { Briefcase, Calendar, ExternalLink, ShieldCheck, Cpu, Database, Server, Zap, ChevronRight } from "lucide-react";

export function ExperienceTimelineSection() {
  const experiences = [
    {
      title: "OpenClaw AI Agent Platform",
      subtitle: "Self-Hosted AI Gateway & Real-Estate Intelligence Swarm",
      date: "May 2026",
      type: "Architectural Showcase",
      caseStudyRoute: "/projects/openclaw",
      icon: Cpu,
      accentColor: "emerald",
      highlights: [
        "Architected a two-tier agent system on OpenClaw (MIT, 250K+ stars) with an Orchestrator routing requests to dedicated subagents.",
        "Built an autonomous RE-Scraper subagent extracting structured rental unit data using Firecrawl AI reasoning into a 33-column MySQL schema.",
        "Discovered hidden JSON APIs and extracted 262 rental units across 20 floors with 100% database integrity and checkpoint/resume capabilities.",
        "Configured OpenRouter LLM routing, Tailscale-aware gateway networking, session memory, and OpenTelemetry diagnostics."
      ],
      tags: ["OpenClaw", "Docker", "Firecrawl API", "MySQL", "OpenRouter", "Python", "Linux"]
    },
    {
      title: "Qrox — Multi-Model AI Chat Platform",
      subtitle: "Frontier AI Chat UI & User-Pays Architecture",
      date: "Feb 2026",
      type: "Live Production Platform",
      link: "https://qrox.vercel.app",
      caseStudyRoute: "/projects/qrox",
      icon: Zap,
      accentColor: "cyan",
      highlights: [
        "Engineered a Perplexity-inspired chat UI enabling seamless interaction with 500+ frontier AI models (OpenAI, Claude, Gemini, Mistral) with zero API key friction.",
        "Architected dual-authentication system (JWT + Puter SDK guest mode) achieving <10s session initialization for 99% of users.",
        "Implemented real-time streaming chat with markdown rendering, vision support, and native AI image generation via function calling.",
        "Deployed on Vercel with PostgreSQL backend achieving <200ms database latency and 99.9% data integrity across 1,000+ test sessions."
      ],
      tags: ["Next.js 16", "Puter.js AI API", "PostgreSQL", "Prisma", "TailwindCSS", "shadcn/ui"]
    },
    {
      title: "HRAI — Autonomous AI HR Assistant",
      subtitle: "Confidential Enterprise Client, Rabat",
      date: "Jan – Feb 2026",
      type: "Enterprise AI Microservices",
      caseStudyRoute: "/projects/hrai",
      icon: ShieldCheck,
      accentColor: "emerald",
      highlights: [
        "Architected & led a v3.0 → v4.0 transformation enabling non-technical staff to query confidential personnel databases via natural language (French).",
        "Designed the Semantic Tool Contract pattern where MCP tools return explicit states and conversation guidance, turning tools into dialogue partners.",
        "Built a LEGO Assembly pattern for Text-to-SQL paired with a Rust-inspired self-healing SQL validator and sentence transformer entity matching.",
        "Refactored monolithic deployment to 8 isolated MCP microservice containers with automated CI/CD schema validation."
      ],
      tags: ["Python", "TypeScript", "FastMCP", "FastAPI", "Ollama", "Sentence Transformers", "Docker"]
    },
    {
      title: "OmniPilot-CX — AI Sales Agent for E-Commerce",
      subtitle: "Multi-Tenant Vertical SaaS Platform",
      date: "Jan 2026",
      type: "Production-Ready SaaS",
      caseStudyRoute: "/projects/omnipilot-cx",
      icon: Server,
      accentColor: "cyan",
      highlights: [
        "Built multi-tenant architecture supporting 1,000+ concurrent stores with sub-50ms product query responses from PostgreSQL cache.",
        "Integrated Google Gemini + n8n workflows for multi-language conversation handling (Darija/French/English auto-detection) and order capture.",
        "Implemented platform-owned Facebook App with one-click OAuth onboarding and encrypted credential storage (AES-256-GCM)."
      ],
      tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "n8n", "Google Gemini API", "Docker"]
    },
    {
      title: "Full-Stack Healthcare & Enterprise LLM Platforms",
      subtitle: "Medical Scheduling SaaS & Offline Intranet AI Systems",
      date: "2024 – 2025",
      type: "Enterprise Deployments",
      icon: Database,
      accentColor: "emerald",
      highlights: [
        "Architected Turborepo monorepo medical platform connecting patients with healthcare providers, reducing unauthorized access attempts to zero.",
        "Deployed secure offline enterprise LLMs (Qwen, DeVstral) via Ollama & Open WebUI for confidential document analysis and policy compliance.",
        "Fine-tuned CamemBERT ML models for French narrative employee evaluations achieving 92% correlation with human assessments."
      ],
      tags: ["React", "Express.js", "Ollama", "Qdrant VectorDB", "CamemBERT", "Turborepo", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="relative flex flex-col gap-8 py-12 border-t border-zinc-800/60">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          <Briefcase className="h-4 w-4 text-cyan-400" />
          <span>PRODUCTION EXPERIENCE &bull; ARCHITECTURAL DEPLOYMENTS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
          Featured Career History &amp; Case Studies
        </h2>
      </div>

      {/* Timeline List */}
      <div className="flex flex-col gap-6 relative before:absolute before:left-4 sm:before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-zinc-800/80">
        {experiences.map((exp, idx) => {
          const IconComponent = exp.icon;
          const isEmerald = exp.accentColor === "emerald";
          return (
            <div key={idx} className="relative flex items-start gap-4 sm:gap-8 pl-1.5 sm:pl-3">
              {/* Timeline Marker Icon */}
              <div
                className={`z-10 flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border bg-zinc-950 ${
                  isEmerald
                    ? "border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]"
                    : "border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]"
                }`}
              >
                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              {/* Card Body */}
              <div className="cyber-card rounded-2xl p-6 flex flex-col gap-4 flex-1 group">
                <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-zinc-800/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold font-mono text-white tracking-tight">{exp.title}</h3>
                      {exp.link && (
                        <Link
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-0.5 rounded-md"
                        >
                          <span>Live Platform</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                    <p className="text-xs font-mono text-zinc-400 pt-1">{exp.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                      <Calendar className="h-3 w-3 text-emerald-400" />
                      {exp.date}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-sans">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full mt-2 shrink-0 ${isEmerald ? "bg-emerald-400" : "bg-cyan-400"}`} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags & Case Study Link */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800 px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {exp.caseStudyRoute && (
                    <Link
                      href={exp.caseStudyRoute}
                      className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                        isEmerald
                          ? "border-emerald-500/40 text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-500/60"
                          : "border-cyan-500/40 text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-500/60"
                      }`}
                    >
                      <span>Inspect Architectural Breakdown</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
