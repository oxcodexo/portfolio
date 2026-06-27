import { describe, it, expect } from 'vitest';
import { getProjectBySlug, getAllProjects, getEnterpriseSolutions } from '../registry';

describe('ProjectDataRegistry', () => {
  describe('getProjectBySlug', () => {
    it('returns flagship project by slug for all valid flagship slugs', () => {
      const slugs = ['openclaw', 'qrox', 'hrai', 'omnipilot-cx'];
      slugs.forEach((slug) => {
        const project = getProjectBySlug(slug);
        expect(project).not.toBeNull();
        expect(project?.slug).toBe(slug);
        expect(project?.metrics).toBeDefined();
        expect(project?.metrics.length).toBeGreaterThan(0);
        expect(project?.techTags.length).toBeGreaterThan(0);
        expect(project?.systemFlows.length).toBeGreaterThan(0);
      });
    });

    it('returns null for unknown project slug fallback', () => {
      const project = getProjectBySlug('unknown-slug');
      expect(project).toBeNull();
    });
  });

  describe('getAllProjects', () => {
    it('returns all flagship projects with valid structures', () => {
      const projects = getAllProjects();
      expect(projects.length).toBe(4);
      projects.forEach((p) => {
        expect(p.id).toBeTruthy();
        expect(p.title).toBeTruthy();
        expect(p.overview).toBeTruthy();
        expect(Array.isArray(p.metrics)).toBe(true);
        p.metrics.forEach((m) => {
          expect(m.label).toBeTruthy();
          expect(m.value).toBeTruthy();
        });
      });
    });
  });

  describe('getEnterpriseSolutions', () => {
    it('returns all enterprise solution cards with structured metrics and tags', () => {
      const solutions = getEnterpriseSolutions();
      expect(solutions.length).toBe(4);
      solutions.forEach((s) => {
        expect(s.id).toBeTruthy();
        expect(s.title).toBeTruthy();
        expect(s.description).toBeTruthy();
        expect(s.metrics.length).toBeGreaterThan(0);
        expect(s.techTags.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Immutability', () => {
    it('returns frozen immutable objects', () => {
      const project = getProjectBySlug('openclaw');
      expect(Object.isFrozen(project)).toBe(true);
    });
  });
});
