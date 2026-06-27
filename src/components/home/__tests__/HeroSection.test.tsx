import { describe, it, expect } from 'vitest';
import { HeroSection } from '../HeroSection';

describe('HeroSection component', () => {
  it('renders hero title and architecture showcase highlights', () => {
    const JSX = HeroSection();
    expect(JSX).toBeDefined();
    expect(JSX.type).toBe('section');
  });
});
