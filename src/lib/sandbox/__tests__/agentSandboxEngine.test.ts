import { describe, it, expect } from 'vitest';
import { agentSandboxReducer, getInitialState } from '../agentSandboxEngine';
import { INTENT_PRESETS } from '../presets';

describe('AgentSandboxEngine state machine reducer', () => {
  it('provides correct initial state', () => {
    const state = getInitialState();
    expect(state.status).toBe('idle');
    expect(state.selectedPresetId).toBe(INTENT_PRESETS[0].id);
    expect(state.currentStepIndex).toBe(-1);
    expect(state.telemetryLogs).toEqual([]);
    expect(state.activeAgent).toBeNull();
  });

  it('handles SELECT_PRESET action', () => {
    const initialState = getInitialState();
    const targetPreset = INTENT_PRESETS[1].id;
    const nextState = agentSandboxReducer(initialState, {
      type: 'SELECT_PRESET',
      presetId: targetPreset,
    });

    expect(nextState.selectedPresetId).toBe(targetPreset);
    expect(nextState.status).toBe('idle');
    expect(nextState.currentStepIndex).toBe(-1);
    expect(nextState.telemetryLogs).toEqual([]);
  });

  it('handles START_SIMULATION action', () => {
    const initialState = getInitialState();
    const nextState = agentSandboxReducer(initialState, {
      type: 'START_SIMULATION',
    });

    expect(nextState.status).toBe('routing');
    expect(nextState.activeAgent).toBe(INTENT_PRESETS[0].targetAgent);
  });

  it('progresses through simulation steps and completes', () => {
    let state = getInitialState();
    const preset = INTENT_PRESETS[0];

    // Start
    state = agentSandboxReducer(state, { type: 'START_SIMULATION' });
    expect(state.status).toBe('routing');

    // Step 1
    state = agentSandboxReducer(state, { type: 'STEP_TELEMETRY' });
    expect(state.status).toBe('executing');
    expect(state.currentStepIndex).toBe(0);
    expect(state.telemetryLogs.length).toBe(1);
    expect(state.telemetryLogs[0].id).toBe(preset.steps[0].id);

    // Step through remaining
    for (let i = 1; i < preset.steps.length; i++) {
      state = agentSandboxReducer(state, { type: 'STEP_TELEMETRY' });
      expect(state.currentStepIndex).toBe(i);
    }

    expect(state.telemetryLogs.length).toBe(preset.steps.length);

    // Final step completes simulation
    state = agentSandboxReducer(state, { type: 'STEP_TELEMETRY' });
    expect(state.status).toBe('complete');
  });

  it('handles RESET_SIMULATION action', () => {
    let state = getInitialState();
    state = agentSandboxReducer(state, { type: 'START_SIMULATION' });
    state = agentSandboxReducer(state, { type: 'STEP_TELEMETRY' });

    const resetState = agentSandboxReducer(state, { type: 'RESET_SIMULATION' });
    expect(resetState.status).toBe('idle');
    expect(resetState.currentStepIndex).toBe(-1);
    expect(resetState.telemetryLogs).toEqual([]);
    expect(resetState.activeAgent).toBeNull();
  });
});
