export interface ArchitecturalMetric {
  label: string;
  value: string;
  description?: string;
}

export interface SystemFlowStep {
  step: number;
  title: string;
  description: string;
}

export interface FlagshipProject {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  metrics: ArchitecturalMetric[];
  techTags: string[];
  systemFlows: SystemFlowStep[];
  challenges: string[];
  featured: boolean;
}

export interface EnterpriseSolution {
  id: string;
  slug: string;
  title: string;
  description: string;
  metrics: ArchitecturalMetric[];
  techTags: string[];
}
