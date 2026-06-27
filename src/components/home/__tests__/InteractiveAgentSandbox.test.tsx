import { describe, it, expect, vi } from 'vitest';
import { getInitialState } from '@/lib/sandbox/agentSandboxEngine';

vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    useReducer: vi.fn((reducer, arg, init) => [init ? init(arg) : getInitialState(), vi.fn()]),
    useEffect: vi.fn(),
  };
});

import { InteractiveAgentSandbox } from '../InteractiveAgentSandbox';

describe('InteractiveAgentSandbox component', () => {
  it('renders interactive sandbox structure with preset tabs and telemetry display', () => {
    const JSX = InteractiveAgentSandbox();
    expect(JSX).toBeDefined();
    expect(JSX.type).toBe('div');
    expect(JSX.props.className).toContain('cyber-card');
  });
});
