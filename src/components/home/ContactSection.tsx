"use client";

import Link from "next/link";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col gap-8 py-12 border-t border-zinc-800/60"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
          <MessageSquare className="h-4 w-4 text-emerald-400" />
          <span>GET IN TOUCH &bull; DIRECT CONTACT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
          Let&apos;s Connect &amp; Build Together
        </h2>
        <p className="text-sm text-zinc-400 font-mono max-w-2xl">
          Whether you are looking to deploy autonomous AI agent systems, scale production microservices, or discuss a new project opportunity, I&apos;m always open to connecting.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* Email Card */}
        <motion.a
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          href="mailto:hichamkraou1@gmail.com"
          className="cyber-card rounded-2xl p-6 flex flex-col justify-between gap-6 group hover:border-emerald-500/50 transition-all"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Mail className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Direct Email</div>
              <div className="text-base font-bold font-mono text-white pt-1 group-hover:text-emerald-300 transition-colors">
                hichamkraou1@gmail.com
              </div>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
            <span>Send email message</span>
          </span>
        </motion.a>

        {/* LinkedIn Card */}
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link
            href="https://linkedin.com/in/oxcodexo"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-card rounded-2xl p-6 flex flex-col justify-between gap-6 group hover:border-cyan-500/50 transition-all h-full"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">LinkedIn Profile</div>
                <div className="text-base font-bold font-mono text-white pt-1 group-hover:text-cyan-300 transition-colors">
                  linkedin.com/in/oxcodexo
                </div>
              </div>
            </div>
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
              <span>Connect on LinkedIn</span>
            </span>
          </Link>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link
            href="https://github.com/oxcodexo"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-card rounded-2xl p-6 flex flex-col justify-between gap-6 group hover:border-emerald-500/50 transition-all h-full"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">GitHub Repositories</div>
                <div className="text-base font-bold font-mono text-white pt-1 group-hover:text-emerald-300 transition-colors">
                  github.com/oxcodexo
                </div>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <span>Explore source repositories</span>
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
