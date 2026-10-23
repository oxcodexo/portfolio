"use client";

import { useRouter } from "next/navigation";
import { Briefcase, Calendar, ExternalLink, ShieldCheck, Cpu, Database, Server, Zap, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export function ExperienceTimelineSection() {
  const router = useRouter();

  const experiences = [
    {
      title: "Air-Gapped Inference Cluster",
      subtitle: "Air-Gapped Inference & Fine-Tuning Server",
      date: "Sep 2026 – Present",
      type: "AI Infrastructure",
      caseStudyRoute: "/projects/gpu-inference",
      icon: Cpu,
      accentColor: "emerald",
      highlights: [
        "Prepared a fresh Ubuntu server with two H200 GPUs for air-gapped inference, staging packages and container images while online before offline operation.",
        "Run Docker services for vLLM, Speaches/Whisper, n8n, PostgreSQL, Qdrant, Grafana, Prometheus, Unsloth Studio, and Jupyter Notebook.",
        "Configured the stack to support domain-specific fine-tuning alongside inference, with Grafana and Prometheus covering monitoring."
      ],
      tags: ["Ubuntu", "Docker", "vLLM", "PostgreSQL", "Qdrant", "Grafana", "Prometheus", "Jupyter"]
    },
    {
      title: "Fleetora — Car-Rental Platform",
      subtitle: "Agency & Renter Workflows for the Moroccan Market",
      date: "May – Aug 2026",
      type: "Live Platform",
      link: "https://fleetora.vercel.app",
      caseStudyRoute: "/projects/fleetora",
      icon: Zap,
      accentColor: "cyan",
      highlights: [
        "Built and hosted a car-rental platform with agency workflows covering fleet, pricing, availability, reservations, and contracts.",
        "Added a renter-facing search and booking flow with French, Arabic, and English support.",
        "Shipped on Next.js and TypeScript with a PostgreSQL data model managed through Prisma, deployed in Docker."
      ],
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Vercel"]
    },
    {
      title: "HRAI — Natural-Language SQL Assistant",
      subtitle: "French-Language Queries over a Personnel Database",
      date: "May – Jun 2026",
      type: "Internal AI Assistant",
      caseStudyRoute: "/projects/hrai",
      icon: ShieldCheck,
      accentColor: "emerald",
      highlights: [
        "Built a French-language assistant that turns natural-language requests into schema-aware SQL Server queries for non-technical staff.",
        "Delivered it as an isolated MCP skill with schema access, so the agent plans queries from verified joins and generated filters instead of free-form SQL.",
        "Added query validation and correction guidance, with result sets under 20 rows shown in chat and larger ones exported to Excel."
      ],
      tags: ["TypeScript", "Python", "FastMCP", "FastAPI", "Ollama", "Microsoft SQL Server", "Docker"]
    },
    {
      title: "Qrox — Multi-Model AI Chat",
      subtitle: "Streaming Chat, Model Discovery & Image Handling",
      date: "Feb 2026",
      type: "Live Project",
      link: "https://qrox.vercel.app",
      caseStudyRoute: "/projects/qrox",
      icon: Zap,
      accentColor: "cyan",
      highlights: [
        "Built and hosted a multi-model AI chat application with streaming conversations and model discovery.",
        "Added conversation persistence, image uploads, and AI image generation through function calling.",
        "Delivered on Next.js and TypeScript with PostgreSQL and Prisma behind the interface."
      ],
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Puter.js", "Tailwind CSS", "shadcn/ui"]
    },
    {
      title: "OmniPilot-CX — E-Commerce Sales Assistant",
      subtitle: "Multilingual Messenger Workflows for Merchants",
      date: "Nov 2025 – Jan 2026",
      type: "AI Automation",
      caseStudyRoute: "/projects/omnipilot-cx",
      icon: Server,
      accentColor: "emerald",
      highlights: [
        "Built multilingual product-management and Messenger sales-assistant workflows on a PostgreSQL-backed product catalog.",
        "Wired conversation handling and order capture through Google Gemini and the Facebook Graph API, with n8n orchestrating the workflow.",
        "Handled Darija, French, and English in the same conversation flow."
      ],
      tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "n8n", "Google Gemini", "Docker"]
    },
    {
      title: "MCP Launch — Self-Hosted MCP Gateway",
      subtitle: "Isolated Tool Servers Behind One Endpoint",
      date: "Apr 2026",
      type: "Developer Infrastructure",
      caseStudyRoute: "/projects/mcp-launch",
      icon: Server,
      accentColor: "cyan",
      highlights: [
        "Built a Docker-based gateway exposing isolated MCP servers to AI agents through a Caddy reverse proxy and an HTTPS tunnel.",
        "Added path-based routing and bearer-token validation so each request reaches only its intended server."
      ],
      tags: ["Docker", "Caddy", "ngrok", "MCP"]
    },
    {
      title: "OpenClaw Real-Estate Research Agent",
      subtitle: "Configured Agent Harness with Firecrawl Extraction",
      date: "May 2026",
      type: "Agent Configuration",
      caseStudyRoute: "/projects/openclaw",
      icon: Cpu,
      accentColor: "emerald",
      highlights: [
        "Configured an OpenClaw agent with Firecrawl to collect structured real-estate data from property websites.",
        "Set up storage of the scraped property records in MySQL, with model routing and OpenTelemetry diagnostics configured around the run."
      ],
      tags: ["OpenClaw", "Firecrawl", "MySQL", "OpenRouter", "Python", "OpenTelemetry"]
    },
    {
      title: "On-Premises RAG Platform",
      subtitle: "Offline Document, Policy & Legal Workflows",
      date: "2025",
      type: "Enterprise Deployment",
      icon: Database,
      accentColor: "cyan",
      highlights: [
        "Deployed local-model RAG workflows for document summarization, policy review, and legal assistance in an offline environment.",
        "Configured task-specific model settings across Ollama, Open WebUI, n8n, and Qdrant, all running in Docker.",
        "Fine-tuned CamemBERT separately for French narrative employee evaluations, served through FastAPI and React."
      ],
      tags: ["Ollama", "Open WebUI", "n8n", "Qdrant", "CamemBERT", "FastAPI", "Docker"]
    }
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col gap-8 py-12 border-t border-zinc-800/60"
    >
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
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative flex items-start gap-4 sm:gap-8 pl-1.5 sm:pl-3"
            >
              {/* Timeline Marker Icon */}
              <div
                className={`z-10 flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border bg-zinc-950 ${isEmerald
                    ? "border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]"
                    : "border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]"
                  }`}
              >
                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              {/* Card Body */}
              <motion.div
                whileHover={exp.caseStudyRoute ? { y: -4, scale: 1.005 } : {}}
                onClick={() => exp.caseStudyRoute && router.push(exp.caseStudyRoute)}
                className={`cyber-card rounded-2xl p-6 flex flex-col gap-4 flex-1 group transition-all duration-300 ${exp.caseStudyRoute
                    ? `cursor-pointer ${isEmerald
                      ? "hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.25)]"
                      : "hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.25)]"
                    }`
                    : ""
                  }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-zinc-800/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className={`text-xl font-bold font-mono text-white tracking-tight ${exp.caseStudyRoute ? (isEmerald ? "group-hover:text-emerald-300" : "group-hover:text-cyan-300") : ""} transition-colors`}>
                        {exp.title}
                      </h3>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-0.5 rounded-md"
                        >
                          <span>Live Platform</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
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
                    <div
                      className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border transition-all ${isEmerald
                          ? "border-emerald-500/40 text-emerald-300 bg-emerald-500/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/60"
                          : "border-cyan-500/40 text-cyan-300 bg-cyan-500/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/60"
                        }`}
                    >
                      <span>Inspect Architectural Breakdown</span>
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
