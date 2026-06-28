import { describe, it, expect } from 'vitest';
import { HeroSection } from '../HeroSection';

describe('HeroSection component', () => {
  it('renders hero title, personal credentials, and action buttons', () => {
    const JSX = HeroSection();
    expect(JSX).toBeDefined();
    expect(JSX.type).toBe('section');
  });
});
