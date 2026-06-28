import Link from "next/link";
import { Cpu, ArrowRight, Activity, Zap, Server, ChevronRight, UserCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center gap-8 py-12 md:py-20">
      {/* Ambient Radial Glows (Centered Blurs) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      {/* Persona Badge */}
      <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-1.5 text-xs font-mono text-emerald-300 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]">
        <UserCheck className="h-3.5 w-3.5 text-emerald-400" />
        <span className="font-semibold tracking-wide">SYSTEMS ARCHITECT &bull; RABAT, MOROCCO</span>
      </div>

      {/* Personal Headline & Intro */}
      <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
          Hi, I&apos;m <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.2)]">Hicham Kraou</span>
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-200 font-mono font-medium max-w-3xl mx-auto leading-relaxed">
          Full Stack &amp; AI Systems Architect specializing in autonomous agent swarms, multi-model LLM platforms, and enterprise SaaS systems.
        </p>
        <p className="text-sm sm:text-base text-zinc-400 font-sans max-w-2xl mx-auto leading-relaxed">
          Designing scalable multi-agent gateways (OpenClaw), natural-language-to-SQL microservices (MCP standard), and production-grade full-stack applications with deterministic precision.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs">
        <Link
          href="#about"
          className="group flex items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-zinc-950 font-bold hover:bg-emerald-400 transition-all duration-200 shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)]"
        >
          <span>EXPLORE PROFILE &amp; BIO</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="#experience"
          className="flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-900/90 px-6 py-3.5 text-zinc-200 hover:border-zinc-700 hover:text-white hover:bg-zinc-800/80 transition-all duration-200 backdrop-blur-md"
        >
          <Cpu className="h-4 w-4 text-cyan-400" />
          <span>CAREER HISTORY</span>
        </Link>
      </div>

      {/* Hero Quick Architecture Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full pt-12 text-left">
        <div className="cyber-card rounded-2xl p-6 flex flex-col justify-between gap-4 group">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                AGENT FRAMEWORK
              </span>
              <div className="h-8 w-8 rounded-lg border border-zinc-800 bg-zinc-900/80 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                <Cpu className="h-4 w-4" />
              </div>
            </div>
            <div className="text-xl font-bold font-mono text-white tracking-tight">OpenClaw Engine</div>
            <p className="text-xs text-zinc-400 font-mono leading-relaxed">
              Intent routing, state machines, and autonomous multi-agent swarms.
            </p>
          </div>
          <Link
            href="/projects/openclaw"
            className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors pt-2 border-t border-zinc-800/60"
          >
            <span>Inspect OpenClaw Case Study</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="cyber-card rounded-2xl p-6 flex flex-col justify-between gap-4 group">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                MICROSERVICES
              </span>
              <div className="h-8 w-8 rounded-lg border border-zinc-800 bg-zinc-900/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                <Server className="h-4 w-4" />
              </div>
            </div>
            <div className="text-xl font-bold font-mono text-white tracking-tight">MCP Standard</div>
            <p className="text-xs text-zinc-400 font-mono leading-relaxed">
              Model Context Protocol servers providing modular tools &amp; live context.
            </p>
          </div>
          <Link
            href="/projects/qrox"
            className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 group-hover:text-cyan-400 transition-colors pt-2 border-t border-zinc-800/60"
          >
            <span>Inspect Qrox Gateway</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="cyber-card rounded-2xl p-6 flex flex-col justify-between gap-4 group">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                PERFORMANCE
              </span>
              <div className="h-8 w-8 rounded-lg border border-zinc-800 bg-zinc-900/80 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                <Zap className="h-4 w-4" />
              </div>
            </div>
            <div className="text-xl font-bold font-mono text-white tracking-tight">Sub-100ms</div>
            <p className="text-xs text-zinc-400 font-mono leading-relaxed">
              Optimized LLM stream latency &amp; high-throughput parallel execution.
            </p>
          </div>
          <Link
            href="/projects/omnipilot-cx"
            className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors pt-2 border-t border-zinc-800/60"
          >
            <span>Inspect OmniPilot-CX</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
