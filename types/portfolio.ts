export interface Personal {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface PortfolioData {
  personal: Personal;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
}
