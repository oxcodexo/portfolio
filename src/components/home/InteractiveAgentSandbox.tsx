'use client';

import React, { useReducer, useEffect } from 'react';
import { Play, RotateCcw, Cpu, Terminal, Activity, CheckCircle2, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { agentSandboxReducer, getInitialState } from '@/lib/sandbox/agentSandboxEngine';
import { INTENT_PRESETS } from '@/lib/sandbox/presets';

export function InteractiveAgentSandbox() {
  const [state, dispatch] = useReducer(agentSandboxReducer, undefined, () => getInitialState());

  const currentPreset = INTENT_PRESETS.find((p) => p.id === state.selectedPresetId) || INTENT_PRESETS[0];

  // Simulation step timer hook
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (state.status === 'routing' || state.status === 'executing') {
      const interval = state.status === 'routing' ? 500 : 700;
      timer = setTimeout(() => {
        dispatch({ type: 'STEP_TELEMETRY' });
      }, interval);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [state.status, state.currentStepIndex]);

  const handleSelectPreset = (presetId: string) => {
    dispatch({ type: 'SELECT_PRESET', presetId });
  };

  const handleStart = () => {
    dispatch({ type: 'START_SIMULATION' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_SIMULATION' });
  };

  const getStatusBadge = () => {
    switch (state.status) {
      case 'idle':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            Status: IDLE
          </span>
        );
      case 'routing':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 animate-pulse">
            <Activity className="h-3 w-3 animate-spin text-cyan-400" />
            Status: ROUTING
          </span>
        );
      case 'executing':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
            <Zap className="h-3 w-3 animate-pulse text-emerald-400" />
            Status: EXECUTING
          </span>
        );
      case 'complete':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-900/60 text-emerald-300 border border-emerald-500/60">
            <CheckCircle2 className="h-3 w-3 text-emerald-400" />
            Status: COMPLETE
          </span>
        );
    }
  };

  return (
    <div className="cyber-card w-full rounded-2xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md p-6 shadow-[0_0_30px_-5px_rgba(16,185,129,0.12)] text-left flex flex-col gap-6">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-linear-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold font-mono text-white tracking-tight">
                Interactive Agent Sandbox
              </h3>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-semibold border border-emerald-500/20">
                OPENCLAW V2.4
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Live multi-agent orchestration & intent routing telemetry simulation engine
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          {getStatusBadge()}
          <div className="flex items-center gap-2">
            {state.status === 'idle' || state.status === 'complete' ? (
              <Button
                onClick={handleStart}
                variant="default"
                size="sm"
                className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-xs gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.4)] cursor-pointer"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>START SIMULATION</span>
              </Button>
            ) : (
              <Button
                disabled
                variant="default"
                size="sm"
                className="bg-emerald-600/50 text-zinc-950 font-mono font-bold text-xs gap-1.5 opacity-80 cursor-not-allowed"
              >
                <Activity className="h-3.5 w-3.5 animate-spin" />
                <span>SIMULATING...</span>
              </Button>
            )}

            <Button
              onClick={handleReset}
              variant="outline"
              size="sm"
              className="border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 font-mono text-xs gap-1.5 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5 text-zinc-400" />
              <span>RESET</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Preset Selector */}
      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-wider">
          SELECT INTENT PRESET
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {INTENT_PRESETS.map((preset) => {
            const isSelected = preset.id === state.selectedPresetId;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset.id)}
                disabled={state.status !== 'idle' && state.status !== 'complete'}
                className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col gap-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 ${
                  isSelected
                    ? 'border-emerald-500/50 bg-emerald-950/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                    : 'border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? 'text-emerald-300' : 'text-zinc-200'
                    }`}
                  >
                    {preset.title}
                  </span>
                  {isSelected && <Sparkles className="h-3.5 w-3.5 text-emerald-400" />}
                </div>
                <span className="text-[11px] text-zinc-400 line-clamp-1 font-mono">
                  {preset.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Intent Details Banner */}
      <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <Terminal className="h-4 w-4 text-cyan-400 shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="text-zinc-400 font-semibold">Active Intent:</span>
            <span className="text-zinc-200 font-medium">&quot;{currentPreset.intent}&quot;</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-zinc-400 border-t sm:border-t-0 border-zinc-800/80 pt-2 sm:pt-0">
          <span>Target Orchestrator:</span>
          <span className="text-cyan-300 font-semibold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
            {currentPreset.targetAgent}
          </span>
        </div>
      </div>

      {/* Real-time Telemetry Stream Terminal */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
          <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-emerald-400" />
            LIVE TELEMETRY STREAM
          </span>
          {state.activeAgent && (
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Agent Active: {state.activeAgent}
            </span>
          )}
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs text-zinc-300 min-h-[200px] max-h-[280px] overflow-y-auto space-y-3 shadow-inner">
          {state.telemetryLogs.length === 0 ? (
            <div className="h-36 flex flex-col items-center justify-center text-zinc-500 text-center gap-2">
              <Activity className="h-6 w-6 text-zinc-600 animate-pulse" />
              <p className="text-xs">Engine is ready. Select a preset and click &quot;START SIMULATION&quot; to execute.</p>
            </div>
          ) : (
            state.telemetryLogs.map((log, index) => (
              <div
                key={log.id || index}
                className={`p-3 rounded-lg border text-left transition-all duration-300 flex flex-col gap-1.5 ${
                  log.status === 'active'
                    ? 'border-emerald-500/50 bg-emerald-950/20 text-white shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                    : 'border-zinc-800/60 bg-zinc-900/40 text-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">[{log.timestamp}]</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 font-semibold border border-zinc-700/60">
                      {log.agent}
                    </span>
                    <span className="font-bold text-cyan-400">{log.action}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    {log.latencyMs && (
                      <span className="text-[10px] text-zinc-500">
                        {log.latencyMs}ms
                      </span>
                    )}
                    {log.status === 'active' ? (
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold text-[10px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        RUNNING
                      </span>
                    ) : (
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    )}
                  </div>
                </div>
                <div className="text-xs text-zinc-300 pl-2 border-l-2 border-emerald-500/40 leading-relaxed">
                  {log.detail}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
