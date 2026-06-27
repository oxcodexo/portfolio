import { getEnterpriseSolutions } from '@/lib/projects/registry';
import { Cpu, ShieldCheck, Activity, Eye, Layers } from 'lucide-react';

export function EnterpriseSolutionCards() {
  const solutions = getEnterpriseSolutions();

  const getSolutionIcon = (id: string) => {
    switch (id) {
      case 'enterprise-llm':
        return <Cpu className="h-4 w-4 text-emerald-400" />;
      case 'healthcare-saas':
        return <ShieldCheck className="h-4 w-4 text-cyan-400" />;
      case 'ai-evaluation':
        return <Activity className="h-4 w-4 text-teal-400" />;
      case 'computer-vision':
        return <Eye className="h-4 w-4 text-emerald-400" />;
      default:
        return <Layers className="h-4 w-4 text-emerald-400" />;
    }
  };

  const getAccentColorClass = (index: number) => {
    const accentColors = [
      {
        badgeText: 'text-emerald-400',
        badgeBorder: 'border-emerald-500/30',
        badgeBg: 'bg-emerald-950/40',
        metricVal: 'text-emerald-300',
        hoverGlow: 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]',
      },
      {
        badgeText: 'text-cyan-400',
        badgeBorder: 'border-cyan-500/30',
        badgeBg: 'bg-cyan-950/40',
        metricVal: 'text-cyan-300',
        hoverGlow: 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)]',
      },
      {
        badgeText: 'text-teal-400',
        badgeBorder: 'border-teal-500/30',
        badgeBg: 'bg-teal-950/40',
        metricVal: 'text-teal-300',
        hoverGlow: 'hover:border-teal-500/50 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)]',
      },
      {
        badgeText: 'text-emerald-400',
        badgeBorder: 'border-emerald-500/30',
        badgeBg: 'bg-emerald-950/40',
        metricVal: 'text-emerald-300',
        hoverGlow: 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]',
      },
    ];
    return accentColors[index % accentColors.length];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {solutions.map((solution, index) => {
        const style = getAccentColorClass(index);

        return (
          <div
            key={solution.id}
            className={`cyber-card rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-300 ${style.hoverGlow}`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded border ${style.badgeBorder} ${style.badgeBg} ${style.badgeText}`}
                >
                  {getSolutionIcon(solution.id)}
                  <span>ENTERPRISE ARCHITECTURE</span>
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl md:text-2xl font-bold font-mono text-white tracking-tight">
                  {solution.title}
                </h3>
              </div>

              <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                {solution.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 border-t border-zinc-800/60">
              {/* Quantitative Metrics */}
              {solution.metrics && solution.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {solution.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col gap-1 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80"
                    >
                      <span className="text-[11px] font-mono text-zinc-400 truncate">
                        {m.label}
                      </span>
                      <span className={`text-sm md:text-base font-mono font-bold ${style.metricVal}`}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technology Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {solution.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
