---
name: stitch-ui-builder
description: >
  Build Next.js UIs by combining Stitch-generated designs with shadcn/ui components.
  Use when the user wants to turn a Stitch screen design into a real page, create a UI
  that matches an existing Stitch project, or implement a Stitch design as shadcn/ui code.
---

# stitch-ui-builder

Turn Stitch screen designs into real Next.js pages using shadcn/ui components. Fetch
a screen's HTML from Stitch, analyse the layout, then build the page with shadcn
primitives and blocks.

**Do not invent component APIs, block names, or design details from training data.**
Every component import, block name, and design token must come from an MCP tool
response or the project's DESIGN.md / CONTEXT.md.

## Prerequisites

Before the build phase, read these files if they exist:

- `DESIGN.md` — design tokens (colors, typography, spacing, elevation, radii,
  component specs)
- `CONTEXT.md` — domain vocabulary (what a "Vehicle", "Agency", "Reservation" is)
- `docs/agents/conventions.md` — project conventions (import paths, route patterns,
  API patterns, commit style)

## Available MCP servers

This skill uses two MCP servers simultaneously:

### Stitch MCP (remote)

| Tool | When to use |
|---|---|
| `stitch_list_projects` | Find the target project ID |
| `stitch_list_screens` | Get all screens in the project |
| `stitch_get_screen` | Get a single screen's metadata, including `htmlCode.downloadUrl` |
| `stitch_generate_screen_from_text` | ONLY if no existing screen matches — generate a new one |

Fetch the screen's `htmlCode.downloadUrl` to get the raw HTML/CSS. This is the
source of truth for layout, sections, colors, and spacing in the design.

### shadcn/ui MCP (local)

| Tool | When to use |
|---|---|
| `shadcn_list_items_in_registries` | Browse available components and blocks |
| `shadcn_search_items_in_registries` | Find a component by name or use case |
| `shadcn_view_items_in_registries` | Read actual component source code, imports, and props |
| `shadcn_get_item_examples_from_registries` | See usage examples and demo code |
| `shadcn_get_add_command_for_items` | Get the exact CLI command to install a component |
| `shadcn_get_audit_checklist` | Verify correctness after building |

Always use these tools before importing a component. The tool response is the
source of truth for API shape, not training data.

## Workflow

### 1. Fetch the design from Stitch

```jsonc
// 1a. List all screens
stitch_list_screens({ projectId: "..." })

// 1b. Get a specific screen (includes htmlCode.downloadUrl)
stitch_get_screen({ name: "projects/{id}/screens/{screenId}" })

// 1c. Download the htmlCode to read the raw HTML/CSS
//     The htmlCode field has a downloadUrl — fetch it and read the content
```

Read the downloaded HTML carefully. Identify:
- Layout sections (header, hero, features, footer, etc.)
- Component types (cards, tables, forms, lists, etc.)
- Color usage, spacing patterns, typography
- Responsive behaviour

### 2. Map design tokens from DESIGN.md

Read `DESIGN.md` and map its tokens onto shadcn's CSS variable system:

| DESIGN.md | shadcn CSS var |
|---|---|
| Primary (Deep Blue `#0F172A`) | `--primary` |
| Secondary (Teal `#0D9488`) | `--secondary` |
| Tertiary (Vibrant Orange `#F59E0B`) | `--tertiary` (add if missing) |
| Error (`#ba1a1a`) | `--destructive` |
| Surface backgrounds | `--background`, `--card`, `--muted` |

Set `--tertiary` / `--tertiary-foreground` CSS variables in the theme if
DESIGN.md defines a Tertiary color but no variable exists yet.

### 3. Build with shadcn/ui

Prefer blocks for page-level sections, then individual components for details.

#### Blocks (page-level sections)

Official shadcn blocks — install via:

```
npx shadcn add <block-name>
npx shadcn add dashboard-01    // sidebar + charts + data table
npx shadcn add sidebar-07      // collapsible sidebar
npx shadcn add login-03        // login page
```

Use `shadcn_search_items_in_registries` and `shadcn_get_add_command_for_items`
to discover and install the right block for a given design section.

#### Individual components

Prefer shadcn primitives over raw HTML. Use `shadcn_view_items_in_registries`
to read the actual source before writing any import:

| Instead of raw HTML | Use shadcn component |
|---|---|
| `<input>` | `Input` |
| `<button>` | `Button` |
| `<label>` | `Label` |
| `<div class="rounded-lg border p-6">` | `Card` + `CardContent` |
| `<select>` | `Select` |
| `<table>` | `Table` |
| `<span class="rounded-full px-2">` | `Badge` |
| Manual form state | `Form` (react-hook-form + zod) |

Install components via the shadcn add command before importing them.

#### Composition rules

- Shadcn components already apply DESIGN.md tokens through CSS variables
- Do not duplicate style classes that come from the component (e.g. don't add
  `rounded-lg` to a `Button` — shadcn already handles it)
- Add only layout or spacing overrides via `className`
- Use `cn()` from `@/lib/utils` for className merging
- Follow DESIGN.md specs for elevation levels, radii, and spacing

### 4. Verify

Run these in order before marking done:

1. `npm run lint` — fix all errors
2. `npm run build` — fix all TypeScript errors
3. `npm run test:run` — ensure all tests pass

## Rules

- Every shadcn component API must come from the MCP tool response, not training data
- Every design detail must come from Stitch HTML or DESIGN.md, not training data
- Do NOT inspect `node_modules/` — rely on shadcn MCP tools instead
- Blocks are preferred over building common sections from scratch (login, sidebar,
  dashboard layouts, data tables)
- Follow project conventions in `docs/agents/conventions.md` for imports, routes,
  and commit style
