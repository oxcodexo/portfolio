import { describe, it, expect } from 'vitest';
import { getProjectBySlug, getAllProjects, getEnterpriseSolutions } from '../registry';
import { FLAGSHIP_PROJECTS, ENTERPRISE_SOLUTIONS } from '../data';

describe('ProjectDataRegistry', () => {
  describe('getProjectBySlug', () => {
    it('returns flagship project by slug for every registered slug', () => {
      const slugs = FLAGSHIP_PROJECTS.map((p) => p.slug);
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
      expect(projects.length).toBe(FLAGSHIP_PROJECTS.length);
      expect(projects.length).toBeGreaterThan(0);
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

    it('has unique slugs and ids across flagship projects', () => {
      const slugs = FLAGSHIP_PROJECTS.map((p) => p.slug);
      const ids = FLAGSHIP_PROJECTS.map((p) => p.id);
      expect(new Set(slugs).size).toBe(slugs.length);
      expect(new Set(ids).size).toBe(ids.length);
    });
  });

  describe('getEnterpriseSolutions', () => {
    it('returns all enterprise solution cards with structured metrics and tags', () => {
      const solutions = getEnterpriseSolutions();
      expect(solutions.length).toBe(ENTERPRISE_SOLUTIONS.length);
      expect(solutions.length).toBeGreaterThan(0);
      solutions.forEach((s) => {
        expect(s.id).toBeTruthy();
        expect(s.title).toBeTruthy();
        expect(s.description).toBeTruthy();
        expect(s.metrics.length).toBeGreaterThan(0);
        expect(s.techTags.length).toBeGreaterThan(0);
      });
    });

    it('has unique slugs across enterprise solutions', () => {
      const slugs = ENTERPRISE_SOLUTIONS.map((s) => s.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });
  });

  describe('Immutability', () => {
    it('returns frozen immutable objects', () => {
      const project = getProjectBySlug(FLAGSHIP_PROJECTS[0].slug);
      expect(Object.isFrozen(project)).toBe(true);
    });
  });
});
