"use client";

import Link from "next/link";
import Image from "next/image";
import { Cpu, ArrowRight, Zap, Server, ChevronRight } from "lucide-react";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center gap-8 py-12 md:py-20">
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none glow-breathe" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      {/* Profile Avatar Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative group"
      >
        <div className="absolute -inset-1.5 rounded-full bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-75 blur-lg group-hover:opacity-100 transition duration-300"></div>
        <div className="relative h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full overflow-hidden border-4 border-zinc-950 shadow-2xl">
          <Image
            src="/avatar.png"
            alt="Hicham Kraou"
            width={256}
            height={256}
            className="object-cover h-full w-full"
            priority
          />
        </div>
      </motion.div>

      {/* Personal Headline & Intro */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6 max-w-4xl mx-auto"
      >
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
          Hi, I&apos;m <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.2)]">Hicham Kraou</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-zinc-200 font-mono font-medium max-w-3xl mx-auto leading-relaxed">
          Full Stack &amp; AI Systems Architect specializing in autonomous agent swarms, multi-model LLM platforms, and enterprise SaaS systems.
        </motion.p>
        <motion.p variants={itemVariants} className="text-sm sm:text-base text-zinc-400 font-sans max-w-2xl mx-auto leading-relaxed">
          Designing scalable multi-agent gateways (OpenClaw), natural-language-to-SQL microservices (MCP standard), and production-grade full-stack applications with deterministic precision.
        </motion.p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs"
      >
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="#about"
            className="group flex items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-zinc-950 font-bold hover:bg-emerald-400 transition-all duration-200 shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)]"
          >
            <span>EXPLORE PROFILE &amp; BIO</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="#experience"
            className="flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-900/90 px-6 py-3.5 text-zinc-200 hover:border-zinc-700 hover:text-white hover:bg-zinc-800/80 transition-all duration-200 backdrop-blur-md"
          >
            <Cpu className="h-4 w-4 text-cyan-400" />
            <span>CAREER HISTORY</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Hero Quick Architecture Highlights */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full pt-12 text-left"
      >
        <motion.div variants={itemVariants} whileHover={{ y: -4 }} className="cyber-card rounded-2xl p-6 flex flex-col justify-between gap-4 group">
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
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -4 }} className="cyber-card rounded-2xl p-6 flex flex-col justify-between gap-4 group">
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
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -4 }} className="cyber-card rounded-2xl p-6 flex flex-col justify-between gap-4 group">
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
        </motion.div>
      </motion.div>
    </section>
  );
}
