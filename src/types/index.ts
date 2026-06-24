export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: 'primary' | 'tertiary';
}

export interface ConceptProject {
  title: string;
  category: string;
  stack: string[];
  description: string;
  gradient: string;
  filter: string;
}

export interface LearningPath {
  icon: string;
  title: string;
  technologies: string[];
  color: 'primary' | 'tertiary';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessLeadForm {
  name: string;
  email: string;
  company: string;
  budget_range: string;
  service_interest: string[];
  project_description: string;
}

export interface LearnerApplicationForm {
  name: string;
  email: string;
  background: string;
  desired_path: string;
  portfolio_url: string;
  motivation: string;
}

export interface NavLink {
  label: string;
  href: string;
}
