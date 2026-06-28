import Link from "next/link";
import Image from "next/image";
import { User, MapPin, Mail, Award, Code2, Cpu, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative flex flex-col gap-8 py-12 border-t border-zinc-800/60">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
          <User className="h-4 w-4 text-emerald-400" />
          <span>SYSTEMS ARCHITECT &bull; PERSONAL PROFILE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
          Engineering Philosophy &amp; Bio
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Profile / Bio Card */}
        <div className="lg:col-span-7 cyber-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-emerald-500/40 shrink-0 shadow-lg">
                  <Image
                    src="/avatar.png"
                    alt="Hicham Kraou"
                    width={96}
                    height={96}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono">Hicham Kraou</h3>
                  <p className="text-sm font-mono text-emerald-400 flex flex-wrap items-center gap-1.5 pt-1">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Rabat, Morocco</span>
                    <span className="text-zinc-600 font-normal hidden sm:inline">&bull;</span>
                    <span className="text-zinc-300 text-xs font-normal block sm:inline">Available for Remote Projects</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="https://github.com/oxcodexo"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-emerald-500/50 transition-colors"
                  title="GitHub Profile"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com/in/oxcodexo"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-cyan-500/50 transition-colors"
                  title="LinkedIn Profile"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <a
                  href="mailto:hichamkraou1@gmail.com"
                  className="p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-emerald-500/50 transition-colors"
                  title="Direct Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="space-y-4 text-sm text-zinc-300 font-sans leading-relaxed">
              <p>
                Full Stack &amp; AI Systems Architect with a proven track record delivering production-grade SaaS platforms, autonomous multi-agent orchestration engines, and high-throughput microservices.
              </p>
              <p>
                Specialized in architecting self-hosted agent gateways (<strong className="text-emerald-300 font-mono">OpenClaw</strong>), fine-tuned domain LLMs, natural-language-to-SQL assistants with semantic tool contracts, and production database integrations with Firecrawl and PostgreSQL.
              </p>
              <p>
                Passionate about bridging the gap between cutting-edge multi-model AI research (OpenAI, Claude, Gemini, DeepSeek) and deterministic, enterprise-grade software architectures.
              </p>
            </div>
          </div>

          {/* Quick Contact & Education Footer */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-cyan-400" />
              <span>Diploma in Specialized IT Development (2020)</span>
            </div>
            <a
              href="mailto:hichamkraou1@gmail.com"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline font-semibold"
            >
              <span>hichamkraou1@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Key Architectural Metrics Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="cyber-card rounded-2xl p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">OpenClaw Swarms</div>
              <p className="text-xs font-mono text-zinc-400">Autonomous multi-agent orchestration &amp; AI web intelligence</p>
            </div>
          </div>

          <div className="cyber-card rounded-2xl p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">500+ AI Models</div>
              <p className="text-xs font-mono text-zinc-400">Frontier multi-model chat platform (<strong className="text-cyan-300">Qrox</strong>)</p>
            </div>
          </div>

          <div className="cyber-card rounded-2xl p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">Sub-50ms Cache</div>
              <p className="text-xs font-mono text-zinc-400">High-concurrency multi-tenant SaaS (<strong className="text-emerald-300">OmniPilot-CX</strong>)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
