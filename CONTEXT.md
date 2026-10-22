# Portfolio System Context

Domain model and ubiquitous language for the personal portfolio of Hicham Kraou.

## Language

**Full-Stack & AI Developer**:
The core professional positioning combining full-stack SaaS engineering with applied AI work — RAG systems, LLM agent workflows, private model deployments, and MCP tooling. This is the canonical public title and must match the master resume headline.
_Avoid_: Systems Architect, AI Prompt Engineer, ML Researcher

**Production Stack**:
The technical foundation of the portfolio application, built with Next.js 16 (App Router, React 19, TypeScript), Tailwind CSS v4, and Shadcn UI to mirror real-world client deliverables.
_Avoid_: Static HTML template, Vite SPA, vanilla CSS

**Architecture-First Case Study**:
A comprehensive project breakdown detailing real-world engineering challenges, quantitative metrics, system architecture flows, and novel technical patterns.
_Avoid_: Project card, portfolio item, summary list

**Interactive Agent Sandbox**:
An embedded hero widget simulating live multi-agent orchestration and intent routing (e.g. OpenClaw framework) to demonstrate AI autonomous execution interactively.
_Avoid_: Static hero banner, simple animated text

**Dedicated Case Study Route**:
An independent Next.js route (`/projects/[slug]`) for each flagship project providing canonical URLs, open-graph cards, and dedicated deep-dive technical breakdowns.
_Avoid_: Slide-over drawer, popup modal, accordion list

**Cyber-Architect Aesthetic**:
The visual design system featuring deep zinc backgrounds, glassmorphic card surfaces, electric emerald/cyan neon accents, and JetBrains Mono typography for system telemetry and code.
_Avoid_: Generic light theme, plain white backgrounds, corporate blue palettes

**Flagship Case Study**:
Deep-dive architectural showcase for the projects listed in `src/lib/projects/data.ts` (HRAI, Fleetora, Qrox, OmniPilot-CX, OpenClaw agent, MCP Launch, GPU Inference), featuring interactive diagrams, metric counters, and design notes.
_Avoid_: Simple portfolio item, basic project link

**Enterprise Solution Card**:
Compact architectural card summarizing specialized SaaS and enterprise deployments (Enterprise LLM, Healthcare SaaS, AI Evaluation, Computer Vision) with key metrics and tech tags.
_Avoid_: Text bullet list, unformatted gallery item

**Dispatch Console**:
An interactive terminal-inspired contact module allowing recruiters and clients to transmit inquiries via command inputs (`/contact`) alongside direct links to email, GitHub, and LinkedIn.
_Avoid_: Generic contact form, static mailto link
