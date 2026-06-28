import { Code2, Cpu, Database, Server } from "lucide-react";

export function TechStackSection() {
  const categories = [
    {
      title: "AI & Autonomous Agent Systems",
      icon: Cpu,
      accentColor: "emerald",
      description: "Multi-agent swarms, RAG pipelines, LLM fine-tuning & tool interfaces",
      skills: [
        "OpenClaw Framework", "Multi-Agent Swarms", "Tool-Using Autonomous Agents",
        "Firecrawl Intelligence API", "FastMCP / Model Context Protocol", "RAG & VectorDB Pipelines",
        "Ollama Local LLMs", "Sentence Transformers", "LangChain / LangGraph", "CamemBERT & Detectron2"
      ]
    },
    {
      title: "Full-Stack & Modern Frontend",
      icon: Code2,
      accentColor: "cyan",
      description: "High-performance, responsive web applications & design systems",
      skills: [
        "Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4",
        "Shadcn UI", "Redux Toolkit", "React Query", "Puter.js AI SDK", "HTML5 / CSS3 / ES6+"
      ]
    },
    {
      title: "Backend Services & APIs",
      icon: Server,
      accentColor: "emerald",
      description: "Robust REST/GraphQL microservices, auth systems & async workflows",
      skills: [
        "Node.js", "FastAPI (Python)", "Express.js", "NestJS", "Python 3.11+",
        "JWT / OAuth 2.0 Security", "n8n Workflow Automation", "Encrypted Credentials (AES-256)", "Webhook Orchestration"
      ]
    },
    {
      title: "Databases & DevOps Infrastructure",
      icon: Database,
      accentColor: "cyan",
      description: "Scalable data persistence, multi-tenant caching & containerized CI/CD",
      skills: [
        "PostgreSQL", "MySQL", "Qdrant VectorDB", "MongoDB", "Prisma ORM",
        "Sequelize ORM", "Docker & Compose", "Turborepo Monorepos", "Vercel / NGINX / CI/CD"
      ]
    }
  ];

  return (
    <section id="stack" className="relative flex flex-col gap-8 py-12 border-t border-zinc-800/60">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
          <Code2 className="h-4 w-4 text-emerald-400" />
          <span>TECHNICAL MATRIX &bull; ARCHITECTURAL STACK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
          Core Technical Expertise
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => {
          const IconComponent = cat.icon;
          const isEmerald = cat.accentColor === "emerald";
          return (
            <div key={idx} className="cyber-card rounded-2xl p-6 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-xl border flex items-center justify-center bg-zinc-950 ${
                        isEmerald
                          ? "border-emerald-500/30 text-emerald-400"
                          : "border-cyan-500/30 text-cyan-400"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold font-mono text-white tracking-tight">{cat.title}</h3>
                  </div>
                </div>
                <p className="text-xs font-mono text-zinc-400">{cat.description}</p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-mono px-3 py-1 rounded-lg border bg-zinc-950/80 ${
                      isEmerald
                        ? "border-emerald-500/20 text-emerald-300 hover:border-emerald-500/40"
                        : "border-cyan-500/20 text-cyan-300 hover:border-cyan-500/40"
                    } transition-colors`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
