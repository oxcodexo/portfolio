import { Cpu, Terminal } from "lucide-react";
import { InteractiveAgentSandbox } from "./InteractiveAgentSandbox";

export function AgentSandboxSection() {
  return (
    <section id="lab" className="relative flex flex-col gap-8 py-12 border-t border-zinc-800/60">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
          <Terminal className="h-4 w-4 text-emerald-400" />
          <span>INTERACTIVE SHOWCASE &bull; AI LAB SIMULATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
          Agent Orchestration Sandbox
        </h2>
        <p className="text-sm text-zinc-400 font-mono max-w-2xl">
          Test drive an interactive simulation of multi-agent execution swarms, intent routing algorithms, and tool dispatch pipelines inspired by real-world OpenClaw deployments.
        </p>
      </div>

      {/* Embedded Sandbox Widget */}
      <div className="w-full max-w-5xl mx-auto pt-2">
        <InteractiveAgentSandbox />
      </div>
    </section>
  );
}
