export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Languages';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}
