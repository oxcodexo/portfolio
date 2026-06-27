import { describe, it, expect } from 'vitest';
import { FlagshipCaseStudiesSection } from '../FlagshipCaseStudiesSection';

describe('FlagshipCaseStudiesSection component', () => {
  it('renders section container and header', () => {
    const JSX = FlagshipCaseStudiesSection();
    expect(JSX).toBeDefined();
    expect(JSX.type).toBe('section');
    expect(JSX.props.id).toBe('case-studies');
  });
});
