'use client';

import { useState } from 'react';
import { SystemFlowStep } from '@/lib/projects/types';
import { Cpu, CheckCircle2, ArrowRight, Terminal } from 'lucide-react';

interface SystemArchitectureFlowProps {
  flows: SystemFlowStep[];
}

export function SystemArchitectureFlow({ flows }: SystemArchitectureFlowProps) {
  const [activeStep, setActiveStep] = useState<number>(flows[0]?.step || 1);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Interactive Step Navigator Header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {flows.map((stepItem) => {
          const isActive = activeStep === stepItem.step;
          return (
            <button
              key={stepItem.step}
              onClick={() => setActiveStep(stepItem.step)}
              className={`flex items-center justify-between p-4 rounded-xl text-left font-mono text-xs transition-all duration-200 border ${
                isActive
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 shadow-[0_0_20px_-3px_rgba(16,185,129,0.25)]'
                  : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-lg font-bold text-[11px] ${
                    isActive
                      ? 'bg-emerald-500 text-zinc-950'
                      : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  0{stepItem.step}
                </span>
                <span className="font-semibold truncate max-w-[130px]">
                  {stepItem.title}
                </span>
              </div>
              {isActive && <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />}
            </button>
          );
        })}
      </div>

      {/* Active Step Deep-Dive Display Card */}
      {(() => {
        const currentFlow = flows.find((f) => f.step === activeStep) || flows[0];
        if (!currentFlow) return null;

        return (
          <div className="cyber-card rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl border border-emerald-500/30 bg-emerald-950/50 flex items-center justify-center text-emerald-400">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    STEP 0{currentFlow.step} EXECUTION FLOW
                  </span>
                  <h3 className="text-xl font-bold font-mono text-white tracking-tight">
                    {currentFlow.title}
                  </h3>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                <span>STATE: ACTIVE</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
              {currentFlow.description}
            </p>

            {/* Step Pipeline Visualization Progress */}
            <div className="pt-4 border-t border-zinc-800/60 flex flex-col gap-3">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                PIPELINE STATE SEQUENCE
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-mono">
                {flows.map((f, i) => (
                  <div key={f.step} className="flex items-center gap-2 shrink-0">
                    <span
                      className={`px-3 py-1 rounded-lg border text-[11px] ${
                        f.step === activeStep
                          ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold'
                          : f.step < activeStep
                          ? 'bg-zinc-800/50 border-zinc-700/50 text-zinc-400'
                          : 'bg-zinc-900/30 border-zinc-800/40 text-zinc-400'
                      }`}
                    >
                      {f.step}. {f.title}
                    </span>
                    {i < flows.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
