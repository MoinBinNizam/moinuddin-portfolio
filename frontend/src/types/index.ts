export interface Project {
  id: string;
  title: string;
  category: 'ERP' | 'POS' | 'WordPress' | 'React';
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
  testimonials?: Testimonial[];
  createdAt: string;
}

export interface Experience {
  id: string;
  companyName: string;
  role: string;
  startDate: string;
  endDate?: string;
  contributions: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientCompany?: string;
  rating: number;
  message: string;
  projectId?: string;
}
