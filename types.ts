import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  industry: string;
  description: string;
  technologies: string[];
  features: string[];
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
