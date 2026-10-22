import { FlagshipProject, EnterpriseSolution } from './types';

/**
 * Single source of truth for published project copy.
 *
 * Sourcing rule: every statement below traces to resume.yaml (highlights,
 * owner_confirmed_contributions, documented_capabilities, technologies) or
 * USER.md. Confidential-organization work uses generic project names only and
 * never names the employer. Unverified quantitative claims are deliberately
 * omitted rather than published.
 */
export const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: 'hrai',
    slug: 'hrai',
    title: 'HRAI',
    tagline: 'Natural-Language SQL Assistant — Schema-Aware, French-Language',
    overview:
      'A French-language assistant that turns natural-language requests into schema-aware SQL Server queries. Delivered as an isolated MCP skill with database-schema access, so the agent plans and assembles queries from verified joins and generated filters instead of free-form SQL. Query validation and correction guidance run on every request, and result handling is size-aware: small result sets are shown in chat, larger ones are exported to Excel. Built inside an ongoing organization role.',
    metrics: [
      { label: 'Interface Language', value: 'French', description: 'Natural-language queries over a personnel database' },
      { label: 'Query Target', value: 'SQL Server', description: 'Schema access through an MCP skill' },
      { label: 'Result Path', value: 'Chat / Excel', description: 'Under 20 rows in chat, larger sets exported' }
    ],
    techTags: ['TypeScript', 'Python', 'FastMCP', 'FastAPI', 'React', 'Ollama', 'Microsoft SQL Server', 'Docker'],
    systemFlows: [
      { step: 1, title: 'Natural-Language Request', description: 'A non-technical user asks a question in French.' },
      { step: 2, title: 'Schema Retrieval', description: 'The mssql skill reads the database schema so the model works from real table and column definitions.' },
      { step: 3, title: 'Query Assembly', description: 'The query is built from verified joins and generated filters rather than free-form SQL.' },
      { step: 4, title: 'Validation & Correction', description: 'The generated statement is validated, with correction guidance returned when it fails.' },
      { step: 5, title: 'Result Handling', description: 'Fewer than 20 rows render in chat; larger result sets are exported to Excel.' }
    ],
    challenges: [
      'Keeping generated SQL grounded in the real schema so joins are planned from verified relationships.',
      'Separating result presentation by size so small answers stay in conversation and large ones leave the chat.',
      'Letting non-technical staff query a personnel database without exposing schema knowledge to them.'
    ],
    featured: true
  },
  {
    id: 'fleetora',
    slug: 'fleetora',
    title: 'Fleetora',
    tagline: 'Multilingual Car-Rental Marketplace — Agency and Renter Workflows',
    overview:
      'A hosted car-rental platform for the Moroccan market covering both sides of the transaction: agency workflows for fleet, pricing, availability, reservations, and contracts, and a renter-facing search and booking flow with French, Arabic, and English support.',
    metrics: [
      { label: 'Status', value: 'Live', description: 'Hosted and publicly reachable' },
      { label: 'Locales', value: 'FR / AR / EN', description: 'Trilingual renter-facing flows' },
      { label: 'Domain', value: 'Rental ops', description: 'Fleet, pricing, availability, reservations, contracts' }
    ],
    techTags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Vercel'],
    systemFlows: [
      { step: 1, title: 'Agency Fleet Setup', description: 'Agencies manage their vehicle fleet and pricing rules.' },
      { step: 2, title: 'Availability Lookup', description: 'Availability is resolved against reservations already held for each vehicle.' },
      { step: 3, title: 'Renter Search & Booking', description: 'Renters search and book across French, Arabic, and English interfaces.' },
      { step: 4, title: 'Contract Generation', description: 'A confirmed reservation produces the rental contract for the agency side.' }
    ],
    challenges: [
      'Supporting two distinct audiences — agency operators and renters — in one data model.',
      'Handling three languages consistently across search, booking, and contract surfaces.',
      'Modelling availability so concurrent reservations cannot double-book a vehicle.'
    ],
    featured: true
  },
  {
    id: 'qrox',
    slug: 'qrox',
    title: 'Qrox',
    tagline: 'Multi-Model AI Chat with Streaming, Persistence, and Image Handling',
    overview:
      'A hosted multi-model AI chat application. Streaming conversations, model discovery, conversation persistence, image uploads, and AI image generation are all handled in one Next.js application backed by PostgreSQL.',
    metrics: [
      { label: 'Status', value: 'Hosted', description: 'Live and publicly reachable' },
      { label: 'Chat', value: 'Streaming', description: 'Markdown rendering with vision support' },
      { label: 'Persistence', value: 'PostgreSQL', description: 'Conversations stored through Prisma' }
    ],
    techTags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Puter.js', 'Tailwind CSS', 'shadcn/ui'],
    systemFlows: [
      { step: 1, title: 'Model Discovery', description: 'The available model catalog is surfaced in the interface for selection.' },
      { step: 2, title: 'Streaming Response', description: 'Responses stream into the conversation with markdown rendering and vision support.' },
      { step: 3, title: 'Conversation Persistence', description: 'Messages are stored in PostgreSQL through Prisma so threads survive reloads.' },
      { step: 4, title: 'Image Path', description: 'Images can be uploaded into a conversation, and image generation is invoked through function calling.' }
    ],
    challenges: [
      'Streaming multi-model output into a single consistent chat surface.',
      'Persisting conversations without blocking the streaming path.',
      'Handling both image input and image generation inside the same message flow.'
    ],
    featured: true
  },
  {
    id: 'omnipilot-cx',
    slug: 'omnipilot-cx',
    title: 'OmniPilot-CX',
    tagline: 'E-Commerce Sales Assistant for Messenger',
    overview:
      'Multilingual product-management and Messenger sales-assistant workflows for e-commerce merchants, built on a PostgreSQL-backed product catalog with n8n automation and API integrations. Conversation handling and order capture run through Google Gemini and the Facebook Graph API.',
    metrics: [
      { label: 'Channel', value: 'Messenger', description: 'Facebook Graph API integration' },
      { label: 'Languages', value: 'Multilingual', description: 'Darija, French, and English handling' },
      { label: 'Automation', value: 'n8n', description: 'Workflow orchestration around the catalog' }
    ],
    techTags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'n8n', 'Google Gemini', 'Facebook Graph API', 'Docker'],
    systemFlows: [
      { step: 1, title: 'Product Catalog', description: 'Merchants manage products and catalog data in a PostgreSQL-backed admin surface.' },
      { step: 2, title: 'Conversation Ingress', description: 'Incoming Messenger conversations are handled through the Facebook Graph API.' },
      { step: 3, title: 'Language Handling', description: 'Replies are produced in the customer language — Darija, French, or English.' },
      { step: 4, title: 'Order Capture', description: 'n8n workflows carry the captured order into the merchant workflow.' }
    ],
    challenges: [
      'Handling dialect mixing — Darija alongside French and English — in customer conversations.',
      'Keeping catalog data and conversation state in sync across automation steps.',
      'Scoping a sales assistant so it captures orders rather than improvising commitments.'
    ],
    featured: true
  },
  {
    id: 'openclaw',
    slug: 'openclaw',
    title: 'OpenClaw Real-Estate Research Agent',
    tagline: 'Configured Agent Harness with Firecrawl Extraction into MySQL',
    overview:
      'An OpenClaw agent configured to research real-estate listings: Firecrawl is attached as a tool for structured collection from property websites, and the extracted records are written into MySQL. This is a configured agent deployment on top of the open-source OpenClaw harness — not the framework itself.',
    metrics: [
      { label: 'Role', value: 'Configured agent', description: 'Built on the OpenClaw harness' },
      { label: 'Extraction', value: 'Firecrawl', description: 'Tool attached to the agent' },
      { label: 'Storage', value: 'MySQL', description: 'Structured property records' }
    ],
    techTags: ['OpenClaw', 'Firecrawl', 'MySQL', 'Docker', 'OpenRouter', 'Python', 'OpenTelemetry'],
    systemFlows: [
      { step: 1, title: 'Agent Configuration', description: 'The agent harness is configured with a research objective and session memory.' },
      { step: 2, title: 'Tool Attachment', description: 'Firecrawl is attached as the agent tool responsible for collecting page content.' },
      { step: 3, title: 'Structured Extraction', description: 'Collected listing pages are turned into structured property records.' },
      { step: 4, title: 'Persistence', description: 'Records are written into MySQL for later querying.' }
    ],
    challenges: [
      'Getting reliable structured output out of unstructured listing pages.',
      'Keeping model routing and session memory configured across runs.',
      'Capturing diagnostics with OpenTelemetry while the agent iterates.'
    ],
    featured: true
  },
  {
    id: 'mcp-launch',
    slug: 'mcp-launch',
    title: 'MCP Launch',
    tagline: 'Self-Hosted Gateway Exposing Isolated MCP Servers',
    overview:
      'A Docker-based gateway that exposes isolated MCP servers to AI agents through a Caddy reverse proxy and an HTTPS tunnel, with path-based routing and bearer-token validation on every request.',
    metrics: [
      { label: 'Routing', value: 'Caddy', description: 'Path-based routing to each server' },
      { label: 'Transport', value: 'HTTPS tunnel', description: 'ngrok tunnel for external reach' },
      { label: 'Auth', value: 'Bearer token', description: 'Validated per request at the gateway' }
    ],
    techTags: ['Docker', 'Caddy', 'ngrok', 'MCP'],
    systemFlows: [
      { step: 1, title: 'Request Ingress', description: 'An agent calls the gateway over the HTTPS tunnel.' },
      { step: 2, title: 'Path Routing', description: 'Caddy routes the request to the matching MCP server by path.' },
      { step: 3, title: 'Token Validation', description: 'The bearer token is validated before the request reaches a server.' },
      { step: 4, title: 'Isolated Execution', description: 'Each MCP server runs in its own container, isolated from the others.' }
    ],
    challenges: [
      'Keeping each MCP server isolated while exposing them behind a single endpoint.',
      'Routing by path without leaking one server into another.',
      'Putting authentication in front of tool servers that were not built with it.'
    ],
    featured: true
  },
  {
    id: 'gpu-inference',
    slug: 'gpu-inference',
    title: 'GPU Inference Deployment',
    tagline: 'Air-Gapped Inference and Fine-Tuning Server',
    overview:
      'Preparation of a fresh Ubuntu server with two H200 GPUs for air-gapped inference: required packages and container images are staged while the machine is online, then the stack is operated offline. Docker services cover inference, workflow automation, storage, monitoring, and fine-tuning.',
    metrics: [
      { label: 'Accelerators', value: '2× H200', description: 'Two NVIDIA H200 GPUs' },
      { label: 'Mode', value: 'Air-gapped', description: 'Staged online, operated offline' },
      { label: 'Serving', value: 'vLLM', description: 'Local inference with a full service stack' }
    ],
    techTags: ['Ubuntu', 'Docker', 'vLLM', 'n8n', 'PostgreSQL', 'Qdrant', 'Grafana', 'Prometheus', 'Speaches', 'Jupyter'],
    systemFlows: [
      { step: 1, title: 'Offline Staging', description: 'Packages and container images are pulled while the server still has network access.' },
      { step: 2, title: 'Stack Bring-Up', description: 'Docker services are started for inference, automation, storage, and monitoring.' },
      { step: 3, title: 'Inference Serving', description: 'vLLM serves local models; Speaches handles speech workloads.' },
      { step: 4, title: 'Fine-Tuning & Monitoring', description: 'Jupyter and Unsloth Studio support domain fine-tuning; Grafana and Prometheus cover observability.' }
    ],
    challenges: [
      'Making a GPU inference stack work with no network access at runtime.',
      'Staging every image and package dependency before disconnecting.',
      'Running inference, automation, and fine-tuning tooling side by side on one host.'
    ],
    featured: true
  }
];

/**
 * Secondary deployments. Generic names only for confidential-organization work;
 * the employer is never identified.
 */
export const ENTERPRISE_SOLUTIONS: EnterpriseSolution[] = [
  {
    id: 'onprem-rag',
    slug: 'onprem-rag',
    title: 'Private On-Premises LLM and RAG Platform',
    description:
      'Local-model RAG workflows for document summarization, policy review, and legal assistance, running offline with task-specific model configuration.',
    metrics: [
      { label: 'Deployment', value: 'On-premises' },
      { label: 'Retrieval', value: 'Qdrant' }
    ],
    techTags: ['Ollama', 'Open WebUI', 'n8n', 'Qdrant', 'Docker', 'RAG']
  },
  {
    id: 'hr-evaluation',
    slug: 'hr-evaluation',
    title: 'French Employee Evaluation Scoring',
    description:
      'CamemBERT fine-tuned on French narrative employee evaluations, serving an internal scoring workflow through FastAPI and a React interface.',
    metrics: [
      { label: 'Model', value: 'CamemBERT' },
      { label: 'Serving', value: 'FastAPI' }
    ],
    techTags: ['Python', 'CamemBERT', 'FastAPI', 'React', 'Docker']
  },
  {
    id: 'fuel-station',
    slug: 'fuel-station',
    title: 'Fuel Station Management and Plate Recognition',
    description:
      'Fuel-station operations software with a Node.js and React backend, a Flutter employee application, and Detectron2-based Moroccan license-plate recognition served through FastAPI.',
    metrics: [
      { label: 'Frontend', value: 'Flutter' },
      { label: 'Vision', value: 'Detectron2' }
    ],
    techTags: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Flutter', 'FastAPI', 'Detectron2', 'Docker']
  },
  {
    id: 'internal-hr',
    slug: 'internal-hr',
    title: 'Internal HR Applications',
    description:
      'Employee records, promotion, and transfer workflows built with ASP.NET MVC and Express.js services over SQL Server.',
    metrics: [
      { label: 'Backend', value: 'ASP.NET MVC' },
      { label: 'Database', value: 'SQL Server' }
    ],
    techTags: ['ASP.NET MVC', 'C#', 'Microsoft SQL Server', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs']
  }
];
