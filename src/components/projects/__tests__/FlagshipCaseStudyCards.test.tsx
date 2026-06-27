import { describe, it, expect } from 'vitest';
import { FlagshipCaseStudyCards } from '../FlagshipCaseStudyCards';
import { getAllProjects } from '@/lib/projects/registry';

describe('FlagshipCaseStudyCards component', () => {
  it('renders flagship project cards matching ProjectDataRegistry', () => {
    const projects = getAllProjects();
    expect(projects.length).toBeGreaterThan(0);

    const JSX = FlagshipCaseStudyCards();
    expect(JSX).toBeDefined();
    expect(JSX.type).toBe('div');

    const cards = JSX.props.children;
    expect(cards).toHaveLength(projects.length);
  });
});
