export interface IHeroSection {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

export interface IAboutSection {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface IService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface IExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    live?: string;
  };
  featured: boolean;
}

export interface ITestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface IContactInfo {
  email: string;
  phone?: string;
  location?: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ILandingPageData {
  hero: IHeroSection;
  about: IAboutSection;
  services: IService[];
  experience: IExperienceItem[];
  projects: IProject[];
  testimonials: ITestimonial[];
  contact: IContactInfo;
}
