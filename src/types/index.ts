export interface Skill {
    icon: string;
    title: string;
    items: string[];
  }
  
  export interface Experience {
    period: string;
    title: string;
    company: string;
    description: string;
    position: 'left' | 'right';
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoLink?: string;
    githubLink?: string;
  }
  
  export interface ContactInfo {
    icon: string;
    title: string;
    content: string;
    link?: string;
  }
  
  export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }