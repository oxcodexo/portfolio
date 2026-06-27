import { SandboxState, SandboxAction, TelemetryStep } from './types';
import { INTENT_PRESETS } from './presets';

export function getInitialState(presetId?: string): SandboxState {
  const selectedPresetId = presetId || INTENT_PRESETS[0].id;
  return {
    status: 'idle',
    selectedPresetId,
    currentStepIndex: -1,
    telemetryLogs: [],
    activeAgent: null,
  };
}

export function agentSandboxReducer(
  state: SandboxState,
  action: SandboxAction
): SandboxState {
  switch (action.type) {
    case 'SELECT_PRESET': {
      const presetExists = INTENT_PRESETS.some((p) => p.id === action.presetId);
      if (!presetExists) return state;
      return {
        ...getInitialState(action.presetId),
      };
    }

    case 'START_SIMULATION': {
      if (state.status !== 'idle' && state.status !== 'complete') return state;
      const preset = INTENT_PRESETS.find((p) => p.id === state.selectedPresetId) || INTENT_PRESETS[0];
      return {
        ...state,
        status: 'routing',
        currentStepIndex: -1,
        telemetryLogs: [],
        activeAgent: preset.targetAgent,
      };
    }

    case 'STEP_TELEMETRY': {
      if (state.status !== 'routing' && state.status !== 'executing') return state;
      const preset = INTENT_PRESETS.find((p) => p.id === state.selectedPresetId) || INTENT_PRESETS[0];
      const nextIndex = state.currentStepIndex + 1;

      if (nextIndex < preset.steps.length) {
        const stepDef = preset.steps[nextIndex];
        const newStep: TelemetryStep = {
          ...stepDef,
          status: 'active',
          timestamp: new Date().toISOString().substring(11, 19),
        };

        const updatedLogs = state.telemetryLogs.map((log) =>
          log.status === 'active' ? { ...log, status: 'success' as const } : log
        );
        updatedLogs.push(newStep);

        return {
          ...state,
          status: 'executing',
          currentStepIndex: nextIndex,
          telemetryLogs: updatedLogs,
          activeAgent: stepDef.agent,
        };
      } else {
        // Complete simulation
        const finalizedLogs = state.telemetryLogs.map((log) => ({
          ...log,
          status: 'success' as const,
        }));
        return {
          ...state,
          status: 'complete',
          telemetryLogs: finalizedLogs,
        };
      }
    }

    case 'RESET_SIMULATION': {
      return getInitialState(state.selectedPresetId);
    }

    default:
      return state;
  }
}
