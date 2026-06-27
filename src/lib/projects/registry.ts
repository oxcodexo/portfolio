import { FLAGSHIP_PROJECTS, ENTERPRISE_SOLUTIONS } from './data';
import { FlagshipProject, EnterpriseSolution } from './types';

/**
 * ProjectDataRegistry
 * A typed data abstraction layer storing and querying project metadata,
 * architectural diagrams, quantitative metrics, and technology tags.
 */

export function getProjectBySlug(slug: string): FlagshipProject | null {
  const project = FLAGSHIP_PROJECTS.find((p) => p.slug === slug);
  return project ? Object.freeze({ ...project }) : null;
}

export function getAllProjects(): FlagshipProject[] {
  return FLAGSHIP_PROJECTS.map((p) => Object.freeze({ ...p }));
}

export function getEnterpriseSolutions(): EnterpriseSolution[] {
  return ENTERPRISE_SOLUTIONS.map((s) => Object.freeze({ ...s }));
}
