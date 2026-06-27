import { ArchitecturalMetric } from '@/lib/projects/types';
import { Activity, TrendingUp, Zap } from 'lucide-react';

interface MetricCountersProps {
  metrics: ArchitecturalMetric[];
}

export function MetricCounters({ metrics }: MetricCountersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
      {metrics.map((metric, index) => {
        const isCyan = index % 2 === 1;
        const iconColorClass = isCyan ? 'text-cyan-400' : 'text-emerald-400';
        const borderGlowClass = isCyan
          ? 'hover:border-cyan-500/50 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.2)]'
          : 'hover:border-emerald-500/50 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.2)]';

        return (
          <div
            key={metric.label}
            className={`cyber-card rounded-2xl p-6 flex flex-col justify-between gap-4 transition-all duration-300 ${borderGlowClass}`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Activity className={`h-3.5 w-3.5 ${iconColorClass}`} />
                  {metric.label}
                </span>
                {index === 0 ? (
                  <TrendingUp className={`h-4 w-4 ${iconColorClass}`} />
                ) : (
                  <Zap className={`h-4 w-4 ${iconColorClass}`} />
                )}
              </div>

              <div className="pt-2">
                <div className="text-3xl lg:text-4xl font-extrabold font-mono tracking-tight text-white animate-in fade-in duration-500">
                  <span className={isCyan ? 'text-cyan-300' : 'text-emerald-300'}>
                    {metric.value}
                  </span>
                </div>
              </div>
            </div>

            {metric.description && (
              <p className="text-xs text-zinc-400 font-mono leading-relaxed pt-3 border-t border-zinc-800/60">
                {metric.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
