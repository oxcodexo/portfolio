# Portfolio of Hicham Kraou — Systems Architect (AI-First Focus)

A high-performance, production-grade personal portfolio engineered to showcase deep full-stack SaaS capabilities, autonomous AI agent orchestration systems, MCP microservices, and multi-model LLM architectures.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Shadcn UI**, adhering to a **Cyber-Architect Aesthetic** with dark zinc tones, glassmorphic card surfaces, and neon emerald/cyan accents.

---

## 🌟 Core Highlights & Architectural Features

- 🤖 **Interactive Agent Sandbox**: Embedded interactive hero widget simulating real-time multi-agent execution pipelines, task delegation, and intent routing engines (e.g., OpenClaw framework).
- 🚀 **Flagship Case Studies**: Dedicated routes (`/projects/[slug]`) providing deep architectural breakdowns, interactive counters, quantitative telemetry, and system interaction diagrams for flagship platforms (e.g., OpenClaw, Qrox, HRAI, OmniPilot-CX).
- 🏢 **Enterprise Solution Cards**: Architectural summary grid for specialized enterprise deployments across AI Evaluation, Healthcare SaaS, and Computer Vision workflows.
- 💻 **Dispatch Console**: Terminal-inspired interactive contact module accepting CLI-style commands (e.g., `/contact`) with direct fallback channels (Email, GitHub, LinkedIn).
- 🎨 **Cyber-Architect Design System**: Modern design language incorporating dark zinc surfaces, high-contrast typography (JetBrains Mono & Geist), and responsive layout components.
- 📐 **Hybrid Multi-Page Routing**: Independent Next.js routes ensuring canonical URLs and custom OpenGraph metadata for platform sharing, paired with smooth client transitions.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Core** | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Lucide React Icons](https://lucide.dev/) |
| **Testing** | [Vitest](https://vitest.dev/), React Testing Library |
| **Tooling & Package Manager** | [pnpm](https://pnpm.io/), ESLint 9, PostCSS |

---

## 📁 Project Structure

```bash
portfolio/
├── docs/                      # Domain documentation & ADRs
│   ├── adr/                   # Architectural Decision Records (e.g., ADR-0001)
│   └── agents/                # Workflows & agent configurations
├── src/
│   ├── app/                   # Next.js App Router (pages & layout)
│   │   ├── projects/[slug]/   # Dedicated project case study routes
│   │   ├── globals.css        # Tailwind v4 styles & theme variables
│   │   ├── layout.tsx         # Root layout with headers & footers
│   │   └── page.tsx           # Main homepage route
│   ├── components/            # Reusable React components
│   │   ├── dispatch/          # Interactive terminal contact console
│   │   ├── home/              # Hero section & Interactive Agent Sandbox
│   │   ├── layout/            # Navigation bar, Footer, container wrappers
│   │   ├── projects/          # Case study cards & enterprise grid modules
│   │   └── ui/                # Base Shadcn UI components
│   └── lib/                   # Controllers, mock engines & domain registry
│       ├── dispatch/          # Dispatch console command logic & state
│       ├── projects/          # Project data registry & case study specifications
│       └── sandbox/           # Agent sandbox execution simulation engines
├── CONTEXT.md                 # Project domain model & ubiquitous language
├── AGENTS.md                  # Project agent rules & conventions
└── package.json               # Dependencies & build scripts
```

---

## 🚦 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **pnpm**: `v9.x` or higher (recommended)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/oxcodexo/portfolio.git
cd portfolio
pnpm install
```

### Development Server

Run the development server locally:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🧪 Testing & Verification

The suite uses **Vitest** for unit and integration testing across components, engine controllers, and routing specs.

Run tests once:
```bash
pnpm test:run
```

Run tests in watch mode during development:
```bash
pnpm test
```

---

## 🏗️ Production Build

To verify and build the production bundle:

```bash
pnpm build
pnpm start
```

---

## 📄 Domain & Architecture Guidelines

For deep architectural decisions and project guidelines, refer to:
- [`CONTEXT.md`](file:///home/oxcodexo/projects/portfolio/CONTEXT.md): Domain model, ubiquitous language, and system positioning.
- [`docs/adr/0001-hybrid-multi-page-routing.md`](file:///home/oxcodexo/projects/portfolio/docs/adr/0001-hybrid-multi-page-routing.md): Multi-page routing architectural decision record.

---

## 📬 Contact & Connect

- **GitHub**: [@oxcodexo](https://github.com/oxcodexo)
