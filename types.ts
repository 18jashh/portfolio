export interface Project {
  title: string;
  category: 'Tech' | 'Design';
  description: string;
  details: string[];
  takeaways: string[];
  role: string;
  tools: string;
  focus: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ExperienceItem {
    title: string;
    institution: string;
    period: string;
    description: string[];
}