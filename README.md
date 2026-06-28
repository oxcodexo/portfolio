# Portfolio of Hicham Kraou — Systems Architect & AI/Full-Stack Developer

A high-performance, production-grade personal developer portfolio engineered to showcase deep full-stack SaaS capabilities, autonomous AI agent orchestration systems, MCP microservices, and multi-model LLM architectures.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Shadcn UI**, adhering to a **Cyber-Architect Aesthetic** with dark zinc tones, glassmorphic card surfaces, and neon emerald/cyan accents.

---

## 🌟 Core Highlights & Architectural Features

- 👤 **Human-Centric Personal Brand**: Clean, professional personal portfolio layout presenting Hicham Kraou (based in Rabat, Morocco) front and center with career bio, education, and credentials.
- 💼 **Featured Career History**: Consolidated timeline displaying real-world production deployments (OpenClaw, Qrox live platform, HRAI, OmniPilot-CX, and Healthcare SaaS) with direct links to dedicated architectural case studies (`/projects/[slug]`).
- 🛠️ **Categorized Tech Stack Matrix**: Structured grid organizing technical capabilities across AI & Autonomous Agents, Full-Stack Frontend, Backend Microservices, and Databases/DevOps.
- 🧪 **Interactive AI Lab & Sandbox**: Dedicated simulation lab section where visitors can test drive real-time multi-agent execution swarms and intent routing algorithms inspired by OpenClaw.
- ✉️ **Direct Contact & Connect**: Clean, personal connection hub providing direct links to Email (`hichamkraou1@gmail.com`), LinkedIn ([`oxcodexo`](https://linkedin.com/in/oxcodexo)), and GitHub ([`oxcodexo`](https://github.com/oxcodexo)).
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
│   │   ├── home/              # HeroSection, AboutSection, TechStackSection, AgentSandboxSection, ContactSection
│   │   ├── layout/            # Header (Navigation bar), Footer
│   │   ├── projects/          # ExperienceTimelineSection & case study components
│   │   └── ui/                # Base Shadcn UI components
│   └── lib/                   # Controllers, mock engines & domain registry
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

- **Email**: [hichamkraou1@gmail.com](mailto:hichamkraou1@gmail.com)
- **LinkedIn**: [@oxcodexo](https://linkedin.com/in/oxcodexo)
- **GitHub**: [@oxcodexo](https://github.com/oxcodexo)
