import Link from "next/link";
import { Mail, ShieldCheck, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 py-12 px-4 sm:px-6 lg:px-8 font-mono text-xs">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Telemetry & Stack Info */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-200 font-bold tracking-wider">
            <Cpu className="h-4 w-4 text-emerald-400" />
            <span>HICHAM KRAOU // SYSTEMS ARCHITECT</span>
          </div>
          <p className="text-zinc-400 text-[11px] tracking-tight">
            NEXT.JS 16 App Router &bull; REACT 19 &bull; AUTONOMOUS AGENT ORCHESTRATION &bull; TAILWIND v4
          </p>
        </div>

        {/* Center: Security / Verification Badge */}
        <div className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/40 px-3 py-1.5 text-[11px] text-zinc-400">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>PRODUCTION-READY ARCHITECTURE</span>
        </div>

        {/* Right: Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4 text-zinc-400">
            <Link
              href="https://github.com/oxcodexo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/in/hichamkraou"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              href="mailto:contact@hichamkraou.com"
              className="hover:text-emerald-400 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
          <span className="text-[10px] text-zinc-400">
            &copy; {new Date().getFullYear()} Hicham Kraou. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
