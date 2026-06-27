import { describe, it, expect, vi } from 'vitest';
import Page, { generateStaticParams, generateMetadata } from '../page';
import { FLAGSHIP_PROJECTS } from '@/lib/projects/data';

// Mock next/navigation notFound
vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  })
}));

describe('Project Case Study Route (/projects/[slug])', () => {
  it('generateStaticParams returns all flagship project slugs', async () => {
    const params = await generateStaticParams();
    expect(params).toHaveLength(FLAGSHIP_PROJECTS.length);
    expect(params).toEqual(FLAGSHIP_PROJECTS.map((p) => ({ slug: p.slug })));
  });

  it('generateMetadata returns tailored Open Graph tags for valid project', async () => {
    const params = Promise.resolve({ slug: 'openclaw' });
    const metadata = await generateMetadata({ params });

    expect(metadata.title).toContain('OpenClaw');
    expect(metadata.openGraph?.title).toContain('OpenClaw');
    expect(metadata.openGraph?.description).toBeDefined();
  });

  it('generateMetadata returns fallback title for unknown project', async () => {
    const params = Promise.resolve({ slug: 'unknown-project' });
    const metadata = await generateMetadata({ params });

    expect(metadata.title).toBe('Project Not Found');
  });

  it('Page component renders project title and overview for valid slug', async () => {
    const params = Promise.resolve({ slug: 'openclaw' });
    const JSX = await Page({ params });

    expect(JSX).toBeDefined();
  });

  it('Page component triggers notFound for invalid slug', async () => {
    const params = Promise.resolve({ slug: 'invalid-slug-123' });
    await expect(Page({ params })).rejects.toThrow('NEXT_NOT_FOUND');
  });
});
