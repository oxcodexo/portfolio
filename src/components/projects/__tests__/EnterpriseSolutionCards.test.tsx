import { describe, it, expect } from 'vitest';
import { EnterpriseSolutionCards } from '../EnterpriseSolutionCards';
import { getEnterpriseSolutions } from '@/lib/projects/registry';

describe('EnterpriseSolutionCards component', () => {
  it('renders enterprise solution cards matching ProjectDataRegistry data', () => {
    const solutions = getEnterpriseSolutions();
    expect(solutions).toHaveLength(4);

    const JSX = EnterpriseSolutionCards();
    expect(JSX).toBeDefined();
    expect(JSX.type).toBe('div');
    expect(JSX.props.className).toContain('grid');

    // Inspect children
    const cards = JSX.props.children;
    expect(cards).toHaveLength(solutions.length);

    // Verify first card details match registry
    const firstSolution = solutions[0];
    const firstCard = cards[0];
    expect(firstCard.key).toBe(firstSolution.id);
  });
});
