export type SandboxStatus = 'idle' | 'routing' | 'executing' | 'complete';

export type StepStatus = 'pending' | 'active' | 'success' | 'warning';

export interface TelemetryStep {
  id: string;
  timestamp: string;
  agent: string;
  action: string;
  detail: string;
  status: StepStatus;
  latencyMs?: number;
}

export interface IntentPreset {
  id: string;
  title: string;
  description: string;
  intent: string;
  targetAgent: string;
  steps: Omit<TelemetryStep, 'status' | 'timestamp'>[];
}

export interface SandboxState {
  status: SandboxStatus;
  selectedPresetId: string;
  currentStepIndex: number;
  telemetryLogs: TelemetryStep[];
  activeAgent: string | null;
}

export type SandboxAction =
  | { type: 'SELECT_PRESET'; presetId: string }
  | { type: 'START_SIMULATION' }
  | { type: 'STEP_TELEMETRY' }
  | { type: 'RESET_SIMULATION' };
