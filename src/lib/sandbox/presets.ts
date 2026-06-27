import { IntentPreset } from './types';

export const INTENT_PRESETS: IntentPreset[] = [
  {
    id: 'openclaw-swarm',
    title: 'Multi-Agent Code Swarm',
    description: 'Autonomous architectural refactoring and validation pipeline',
    intent: 'Refactor monolith service into decoupled MCP microservices',
    targetAgent: 'OpenClaw Orchestrator v2.4',
    steps: [
      {
        id: 'step-1',
        agent: 'Router-Agent',
        action: 'INTENT_PARSING',
        detail: 'Parsing high-level architectural constraints and sub-task decomposition',
        latencyMs: 14,
      },
      {
        id: 'step-2',
        agent: 'Static-Analyzer',
        action: 'AST_GRAPH_ANALYSIS',
        detail: 'Constructing dependency graph across 42 module interfaces',
        latencyMs: 32,
      },
      {
        id: 'step-3',
        agent: 'CodeGen-Agent',
        action: 'MCP_INTERFACE_GEN',
        detail: 'Synthesizing JSON-RPC tool definitions for database microservice',
        latencyMs: 88,
      },
      {
        id: 'step-4',
        agent: 'Verifier-Agent',
        action: 'REGRESSION_VERIFY',
        detail: 'Running automated contract test suite with zero breaking changes',
        latencyMs: 45,
      },
    ],
  },
  {
    id: 'rag-synthesis',
    title: 'Autonomous Knowledge RAG',
    description: 'Vector-enhanced multi-model context synthesis',
    intent: 'Query knowledge base for edge-case resolution patterns',
    targetAgent: 'Qrox Knowledge Dispatch',
    steps: [
      {
        id: 'step-1',
        agent: 'Vector-Router',
        action: 'HYBRID_SEARCH',
        detail: 'Executing dense vector retrieval across Pinecone index',
        latencyMs: 18,
      },
      {
        id: 'step-2',
        agent: 'Context-Filter',
        action: 'RERANK_CHUNKS',
        detail: 'Reranking top 20 retrieved documentation chunks via Cohere',
        latencyMs: 27,
      },
      {
        id: 'step-3',
        agent: 'LLM-Synthesizer',
        action: 'STREAM_SYNTHESIS',
        detail: 'Generating structured technical recommendation with citations',
        latencyMs: 95,
      },
    ],
  },
  {
    id: 'mcp-dispatch',
    title: 'Real-Time MCP Dispatch',
    description: 'Direct microservice tool invocation & telemetry sync',
    intent: 'Dispatch live system diagnostic command to distributed nodes',
    targetAgent: 'OmniPilot Telemetry Node',
    steps: [
      {
        id: 'step-1',
        agent: 'Dispatch-Gate',
        action: 'AUTH_VALIDATION',
        detail: 'Verifying mTLS certificate and bearer token claims',
        latencyMs: 9,
      },
      {
        id: 'step-2',
        agent: 'MCP-Client',
        action: 'TOOL_INVOCATION',
        detail: 'Invoking system.health_check() on server cluster alpha',
        latencyMs: 22,
      },
      {
        id: 'step-3',
        agent: 'Metrics-Collector',
        action: 'TELEMETRY_EMIT',
        detail: 'Streaming sub-100ms telemetry heartbeat to dashboard console',
        latencyMs: 12,
      },
    ],
  },
];
