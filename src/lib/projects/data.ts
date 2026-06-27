import { FlagshipProject, EnterpriseSolution } from './types';

export const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: 'openclaw',
    slug: 'openclaw',
    title: 'OpenClaw',
    tagline: 'Autonomous Multi-Agent Orchestration Framework',
    overview: 'An advanced open agent execution framework powering autonomous intent routing, real-time tool calling, and resilient step telemetry across multi-model LLM clusters.',
    metrics: [
      { label: 'Latency Reduction', value: '45%', description: 'Dynamic intent routing cuts token propagation delay' },
      { label: 'Agent Throughput', value: '12k ops/m', description: 'Parallel micro-task decomposition and execution' },
      { label: 'Task Completion Rate', value: '99.4%', description: 'Self-healing agent recovery state loops' }
    ],
    techTags: ['Next.js 16', 'TypeScript', 'MCP Microservices', 'LangChain', 'Redis'],
    systemFlows: [
      { step: 1, title: 'Intent Dispatch', description: 'Parser evaluates user terminal payload and resolves target agent DAG.' },
      { step: 2, title: 'Context Assembly', description: 'Retrieves vector memory and active session state buffers.' },
      { step: 3, title: 'Tool Execution', description: 'Dispatches isolated sandboxed executions across MCP tools.' },
      { step: 4, title: 'Telemetry Stream', description: 'Pipes live step-by-step diagnostic logs back to the interface.' }
    ],
    challenges: [
      'Orchestrating non-deterministic sub-agent loops without cascade deadlocks.',
      'Maintaining sub-50ms telemetry state synchronization across streaming web sockets.',
      'Standardizing tool call contracts for multi-provider models.'
    ],
    featured: true
  },
  {
    id: 'qrox',
    slug: 'qrox',
    title: 'Qrox',
    tagline: 'Ultra-Low Latency Multi-Model LLM Gateway',
    overview: 'High-performance microservice router delivering dynamic token load balancing, fallback cascading, and real-time cost-optimization for high-frequency AI workloads.',
    metrics: [
      { label: 'Routing Latency', value: '< 8ms', description: 'Zero-overhead proxy routing layer' },
      { label: 'Cost Optimization', value: '38%', description: 'Intelligent model tier matching per request' },
      { label: 'Uptime Reliability', value: '99.99%', description: 'Automatic failover across multi-cloud endpoints' }
    ],
    techTags: ['Go', 'Rust', 'gRPC', 'PostgreSQL', 'Docker'],
    systemFlows: [
      { step: 1, title: 'Request Ingress', description: 'Validates API keys and enforces rate-limiting token buckets.' },
      { step: 2, title: 'Semantic Classifier', description: 'Analyzes prompt complexity to select the optimal model tier.' },
      { step: 3, title: 'Fallback Mesh', description: 'Reroutes failed requests seamlessly to back-up regional providers.' }
    ],
    challenges: [
      'Minimizing GC pauses under high concurrent connection spikes.',
      'Implementing real-time token streaming cost accounting.'
    ],
    featured: true
  },
  {
    id: 'hrai',
    slug: 'hrai',
    title: 'HRAI',
    tagline: 'Healthcare AI Diagnostics & Clinical Decision Support',
    overview: 'HIPAA-compliant clinical decision platform synthesizing multimodal EHR records and medical images for accelerated diagnostic workflows.',
    metrics: [
      { label: 'Diagnostic Speedup', value: '3.2x', description: 'Accelerated clinical chart reviews for physicians' },
      { label: 'Precision Accuracy', value: '98.7%', description: 'Validated against peer-reviewed clinical benchmarks' },
      { label: 'HIPAA Audit Score', value: '100%', description: 'Zero-knowledge encrypted record pipelines' }
    ],
    techTags: ['Python', 'PyTorch', 'FastAPI', 'React', 'Tailwind CSS'],
    systemFlows: [
      { step: 1, title: 'EHR Ingestion', description: 'Sanitizes and encrypts HL7/FHIR record streams.' },
      { step: 2, title: 'Multimodal Fusion', description: 'Aligns structured lab tests with unstructured clinical notes.' },
      { step: 3, title: 'Insight Synthesis', description: 'Generates evidence-backed diagnostic summaries with citation markers.' }
    ],
    challenges: [
      'Ensuring strict zero-retention compliance across third-party model inference endpoints.',
      'Resolving ambiguous terminology across legacy hospital records.'
    ],
    featured: true
  },
  {
    id: 'omnipilot-cx',
    slug: 'omnipilot-cx',
    title: 'OmniPilot-CX',
    tagline: 'Autonomous Enterprise Customer Support Orchestrator',
    overview: 'End-to-end autonomous customer support copilot integrating CRM knowledge graphs, automated ticket resolution, and escalation guardrails.',
    metrics: [
      { label: 'Deflection Rate', value: '64%', description: 'First-contact resolution for tier-1 support inquiries' },
      { label: 'CSAT Improvement', value: '+1.4 pts', description: 'Instant, personalized response satisfaction score boost' },
      { label: 'Average Handle Time', value: '-68%', description: 'Automated workflow execution for account modifications' }
    ],
    techTags: ['Next.js', 'Node.js', 'Pinecone', 'OpenAI API', 'GraphQL'],
    systemFlows: [
      { step: 1, title: 'Ticket Triaging', description: 'Classifies customer sentiment and urgency intent.' },
      { step: 2, title: 'Knowledge Graph Query', description: 'Retrieves relevant policy documentation and user history.' },
      { step: 3, title: 'Action Execution', description: 'Executes approved refund or credential reset API calls.' }
    ],
    challenges: [
      'Preventing hallucinated resolution commitments in automated messaging.',
      'Maintaining seamless human-in-the-loop handoff transitions.'
    ],
    featured: true
  }
];

export const ENTERPRISE_SOLUTIONS: EnterpriseSolution[] = [
  {
    id: 'enterprise-llm',
    slug: 'enterprise-llm',
    title: 'Enterprise LLM Fine-Tuning & RAG Infrastructure',
    description: 'Private on-premise foundation model deployment with hybrid vector-graph RAG for proprietary IP security.',
    metrics: [
      { label: 'Query Latency', value: '< 120ms' },
      { label: 'IP Security', value: '100% On-Prem' }
    ],
    techTags: ['vLLM', 'Qdrant', 'Kubernetes', 'Ray']
  },
  {
    id: 'healthcare-saas',
    slug: 'healthcare-saas',
    title: 'Healthcare SaaS Platform Architecture',
    description: 'Multi-tenant FHIR-compliant SaaS backend supporting continuous telemetry and encrypted patient portals.',
    metrics: [
      { label: 'Availability', value: '99.999%' },
      { label: 'Compliance', value: 'SOC2 / HIPAA' }
    ],
    techTags: ['Next.js', 'PostgreSQL', 'AWS KMS', 'Terraform']
  },
  {
    id: 'ai-evaluation',
    slug: 'ai-evaluation',
    title: 'Automated AI Benchmarking & Safety Guardrails',
    description: 'Continuous regression testing pipeline evaluating model output accuracy, toxicity, and hallucination bounds.',
    metrics: [
      { label: 'Test Coverage', value: '10k scenarios/hr' },
      { label: 'Safety Drift Detection', value: 'Real-time' }
    ],
    techTags: ['Python', 'Promptfoo', 'ClickHouse', 'Grafana']
  },
  {
    id: 'computer-vision',
    slug: 'computer-vision',
    title: 'Edge Vision Diagnostics & Quality Inspection',
    description: 'Real-time embedded vision system deployed on edge hardware for industrial defect identification.',
    metrics: [
      { label: 'Inspection FPS', value: '120 FPS' },
      { label: 'Defect Recall', value: '99.8%' }
    ],
    techTags: ['TensorRT', 'C++', 'OpenCV', 'NVIDIA Jetson']
  }
];
