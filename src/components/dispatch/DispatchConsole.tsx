"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Mail, ShieldCheck, CornerDownLeft } from "lucide-react";
import { DispatchConsoleController } from "@/lib/dispatch/dispatchConsoleController";
import { ConsoleLogEntry, InquiryStep } from "@/lib/dispatch/types";
import { Button } from "@/components/ui/button";

export function DispatchConsole() {
  const [controller] = useState(() => new DispatchConsoleController());
  const [consoleState, setConsoleState] = useState(() => controller.getState());
  const [inputValue, setInputValue] = useState("");
  const logsEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateState = () => {
    setConsoleState(controller.getState());
  };

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [consoleState.logs]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!inputValue.trim()) return;
      controller.executeInput(inputValue);
      setInputValue("");
      updateState();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevCmd = controller.navigateHistory("up");
      setInputValue(prevCmd);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextCmd = controller.navigateHistory("down");
      setInputValue(nextCmd);
    }
  };

  const handleQuickCommand = (cmd: string) => {
    controller.executeInput(cmd);
    updateState();
    inputRef.current?.focus();
  };

  const getPromptLabel = (step: InquiryStep) => {
    switch (step) {
      case "name":
        return "inquiry(name):~$ ";
      case "email":
        return "inquiry(email):~$ ";
      case "message":
        return "inquiry(message):~$ ";
      default:
        return "dispatch@portfolio:~$ ";
    }
  };

  return (
    <section id="contact-console" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold tracking-widest uppercase mb-2">
              <Terminal className="h-4 w-4" />
              <span>INTERACTIVE DISPATCH CONSOLE</span>
            </div>
            <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight sm:text-4xl font-mono">
              INITIATE TRANSMISSION
            </h2>
            <p className="mt-2 text-zinc-400 text-sm max-w-2xl font-mono">
              Execute interactive terminal commands or leverage direct fallback channels to connect with Systems Architect Hicham Kraou.
            </p>
          </div>

          {/* Quick Action Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickCommand("/contact")}
              className="font-mono text-xs border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 bg-zinc-900/80"
            >
              /contact
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickCommand("/projects")}
              className="font-mono text-xs border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-zinc-900/80"
            >
              /projects
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickCommand("/help")}
              className="font-mono text-xs border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-zinc-900/80"
            >
              /help
            </Button>
          </div>
        </div>

        {/* Terminal Window Container */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
          {/* Terminal Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-950/80">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-zinc-400 font-semibold tracking-wide">
                dispatch@hichamkraou:~ (tty1)
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                SSL_ENCRYPTED
              </span>
            </div>
          </div>

          {/* Terminal Output Logs */}
          <div
            className="p-4 sm:p-6 font-mono text-xs md:text-sm h-[380px] overflow-y-auto space-y-3 bg-zinc-950/60 leading-relaxed text-zinc-300"
            onClick={() => inputRef.current?.focus()}
          >
            {consoleState.logs.map((log: ConsoleLogEntry) => {
              if (log.type === "system") {
                return (
                  <div key={log.id} className="text-emerald-400 whitespace-pre-wrap bg-emerald-950/20 p-3 rounded border border-emerald-900/30">
                    {log.content}
                  </div>
                );
              }
              if (log.type === "input") {
                return (
                  <div key={log.id} className="text-zinc-200 font-bold flex items-start gap-2">
                    <span className="text-emerald-400 select-none">&gt;</span>
                    <span>{log.content}</span>
                  </div>
                );
              }
              if (log.type === "error") {
                return (
                  <div key={log.id} className="text-rose-400 whitespace-pre-wrap bg-rose-950/20 p-2.5 rounded border border-rose-900/30">
                    {log.content}
                  </div>
                );
              }
              if (log.type === "success") {
                return (
                  <div key={log.id} className="text-emerald-300 font-semibold whitespace-pre-wrap bg-emerald-900/30 p-3 rounded border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                    {log.content}
                  </div>
                );
              }
              return (
                <div key={log.id} className="text-zinc-300 whitespace-pre-wrap pl-3 border-l-2 border-zinc-800">
                  {log.content}
                </div>
              );
            })}
            <div ref={logsEndRef} />
          </div>

          {/* Command Prompt Input Field */}
          <div className="p-3 sm:p-4 border-t border-zinc-800/80 bg-zinc-950/90 flex items-center gap-2 font-mono text-xs md:text-sm">
            <span className="text-emerald-400 font-bold select-none whitespace-nowrap">
              {getPromptLabel(consoleState.inquiryStep)}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                consoleState.inquiryStep !== "idle"
                  ? "Type your response..."
                  : "Type a command e.g. /contact..."
              }
              className="flex-1 bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-600 font-mono caret-emerald-400 focus:ring-0"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              onClick={() => {
                if (!inputValue.trim()) return;
                controller.executeInput(inputValue);
                setInputValue("");
                updateState();
              }}
              className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 transition-colors"
              aria-label="Submit command"
            >
              <CornerDownLeft className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Fallback Direct Action Links */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <span className="text-zinc-500">DIRECT FALLBACK CHANNELS:</span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@hichamkraou.com"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 text-emerald-400" />
              <span>contact@hichamkraou.com</span>
            </a>
            <a
              href="https://github.com/oxcodexo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="h-4 w-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>github.com/oxcodexo</span>
            </a>
            <a
              href="https://linkedin.com/in/hichamkraou"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-4 w-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>linkedin.com/in/hichamkraou</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

