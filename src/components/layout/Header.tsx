"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Terminal, Cpu } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Architecture", href: "#architecture" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Stack", href: "#stack" },
    { name: "Dispatch", href: "#dispatch" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-emerald-400 group-hover:border-emerald-500/50 group-hover:text-emerald-300 group-hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] transition-all">
            <Cpu className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-widest text-white font-mono flex items-center gap-1.5 uppercase">
              Hicham Kraou
              <span className="text-[10px] text-emerald-400 font-semibold">[HK]</span>
            </span>
            <span className="text-[10px] tracking-widest text-zinc-400 font-mono uppercase">
              Systems Architect
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-mono tracking-wider text-zinc-400 hover:text-emerald-400 transition-colors uppercase py-1 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* System status & Telemetry CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-zinc-300 font-semibold">SYS_OK</span>
            <span className="text-zinc-600">|</span>
            <span className="text-emerald-400 font-semibold">200 OK</span>
          </div>

          <Link
            href="#dispatch"
            className="flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono font-semibold text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/60 hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] transition-all"
          >
            <Terminal className="h-3.5 w-3.5 text-emerald-400" />
            <span>/contact</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-4 pt-2 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono tracking-wider text-zinc-300 hover:text-emerald-400 py-1.5 uppercase"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 flex items-center justify-between border-t border-zinc-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>SYS_OK</span>
            </div>
            <Link
              href="#dispatch"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-mono text-emerald-300"
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>/contact</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
