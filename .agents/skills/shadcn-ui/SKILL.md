---
name: shadcn-ui
description: Build UI components and pages using shadcn/ui, Tailwind CSS v4, and the project's DESIGN.md design system. Uses the shadcn MCP to browse/install/query component source code rather than hallucinating APIs.
---

## Before you start

Read these files from the project root if they exist:

- `DESIGN.md` — design tokens (colors, typography, spacing, elevation, radii, component specs)
- `CONTEXT.md` — domain glossary and project vocabulary

## Don't trust your training data — read the actual source

Before importing or using any framework component, API, or library function:

1. **Read the source** — open the file you're importing from. `node_modules/` is fair game for reading, not just documentation.
2. **Check project package.json** — what version is installed? APIs change between major versions.
3. **Check bundled docs** — some packages ship documentation in `node_modules/<pkg>/dist/docs/`.
4. **Web search** for the specific version's API when uncertain.
5. **Look at existing usage** in the codebase to match patterns and conventions.

This applies to everything: Next.js, React, shadcn/ui, Base UI, Tailwind, lucide-react, react-hook-form, zod, uploadthing — anything with an import path. Training data is stale; the code on disk is truth.

## Workflow

### 1. Map design tokens

Read `DESIGN.md` and map its tokens onto shadcn's CSS variable system before writing any UI. Common mappings include:

- Brand colors → `--primary`, `--secondary`, `--tertiary`, `--ring`, `--accent`, `--warning`
  - DESIGN.md often defines a **Tertiary** color (e.g., Vibrant Orange) that has no default shadcn slot — add `--tertiary` / `--tertiary-foreground` CSS vars if missing
- Font families → Tailwind `--font-*` theme variables
- Border radii → Tailwind `rounded-*` scale
- Shadow levels → custom shadow utilities
- Spacing baseline → Tailwind spacing scale

Check every color family in DESIGN.md (especially *Tertiary*, *Success*, *Warning*) against the CSS variables — if a DESIGN.md color has no corresponding `--color-*` variable, add one. Do not skip this: you will get wrong button colors and invisible badges otherwise.

The installed shadcn components (`@/components/ui/*`) already embed these tokens through CSS variables. Inspect the component source before re-declaring or hardcoding the same values.

If DESIGN.md's *Primary Button* spec says "Solid Secondary Teal background" (Teal = `--secondary`), the correct shadcn variant is `variant="secondary"` even though the design calls it "Primary" — map by **color value** not by label.

### 2. Use the shadcn MCP

Before writing any component code, query the shadcn MCP server:

- `list_components` — see available components
- `get_component` — fetch the actual source code, imports, and props
- `search_components` — find components by name or use case
- `install_component` — add components to the project when needed

Never guess shadcn component APIs — always use the MCP to get the real source.

Before installing new components, check what's already available by listing `components/ui/`. Many primitives (Input, Button, Label, Card, Badge, Select, Dialog, Sheet, etc.) ship with the project init.

### 3. Build the page/component

**Prefer shadcn components over raw HTML** — always use the existing primitives:

| Instead of raw HTML | Use |
|---|---|
| `<input className="...">` | `<Input />` |
| `<button className="rounded-lg bg-...">` | `<Button variant="...">` |
| `<label className="text-label-sm ...">` | `<Label />` |
| `<div className="rounded-lg border border-border p-6">` | `<Card>` + `<CardContent>` |
| `<select className="...">` | `<Select />` |
| `<table className="...">` | `<Table />` |
| `<span className="rounded-full px-2 ...">` | `<Badge variant="...">` |
| Manual form state + validation | `<Form>` (react-hook-form + zod) |

The shadcn components already apply DESIGN.md tokens (`rounded-lg`, `border-input`, `bg-secondary`, focus rings, etc.) through CSS variables. **Do not duplicate these classes** — add only layout or spacing overrides via `className`.

For page sections larger than a single component (hero, features, pricing, dashboard sidebar, data tables, contact forms), check the blocks ecosystem first before building from scratch:
- **shadcnblocks.com** — 1600+ blocks installable via CLI (`npx shadcn add @shadcnblocks/<block>`)
- **shadcn/studio** — dashboard, marketing, bento, datatable blocks
- **Renblox** — 350+ Next.js-specific blocks

Only build from scratch when a block doesn't exist or the section is truly custom.

Follow DESIGN.md's component specs for buttons, inputs, cards, tables, chips, etc.
Match DESIGN.md elevation levels for backgrounds, cards, interactive elements, and modals.
Import `cn()` from `@/lib/utils` for className merging.

### 4. Write behavior tests

Use Testing Library (already configured with Vitest) to test user interactions:

- Form submission, validation errors, success states
- Navigation and redirects
- Role-based access restrictions
- Error and loading states

Test behavior, not visual layout.

### 5. Verify

Run these in order before marking done:

1. `pnpm lint` — fix all errors
2. `pnpm build` — fix all TypeScript errors
3. `pnpm test:run` — ensure all tests pass
