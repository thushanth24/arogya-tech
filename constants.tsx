import { 
  Code, 
  Globe, 
  Smartphone, 
  Cloud, 
  Cpu, 
  Palette, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Server 
} from 'lucide-react';
import { Service, Project, TeamMember } from './types';

export const COMPANY_NAME = "Arogya Technologies";
export const TAGLINE = "Innovating Digital Wellness & Smart IT Solutions";
export const CONTACT_EMAIL = "chajeyraj@arogya.xyz";
export const CONTACT_PHONE = "+94 11 2 456 789";
export const CONTACT_ADDRESS = "Trace Expert City, Bay 4, Maradana, Colombo 10, Sri Lanka";

export const SERVICES: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'We design and build secure, scalable software tailored to your business needs.',
    features: ['Enterprise applications', 'ERP/CRM systems', 'Healthcare platforms', 'Custom dashboards'],
    icon: Code
  },
  {
    id: 'web-development',
    title: 'Web Application Development',
    description: 'Modern, responsive, and highly optimized websites and web apps.',
    features: ['React / Angular / Vue', 'E-commerce platforms', 'Admin portals', 'API development'],
    icon: Globe
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'We build intuitive mobile apps with seamless performance.',
    features: ['iOS & Android apps', 'Cross-platform (Flutter)', 'Wearable interfaces', 'IoT apps'],
    icon: Smartphone
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps (AWS)',
    description: 'Specialized cloud architecture and optimization strategies.',
    features: ['AWS setup & migration', 'CI/CD pipelines', 'Kubernetes', 'Infrastructure as Code'],
    icon: Cloud
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation Solutions',
    description: 'Leverage the power of AI to automate processes and improve decision-making.',
    features: ['Chatbots', 'Predictive analytics', 'NLP-based tools', 'Computer vision'],
    icon: Cpu
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Meaningful interfaces that boost customer engagement.',
    features: ['User research', 'Wireframes & prototypes', 'Visual identity design', 'Usability testing'],
    icon: Palette
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'arogya-health',
    title: 'Arogya Health Monitoring',
    industry: 'Health Tech',
    description: 'A cloud-based platform enabling hospitals in Colombo and Kandy to track patient vitals, appointments, and lab reports securely.',
    technologies: ['React', 'Node.js', 'AWS Lambda', 'DynamoDB'],
    features: ['Patient dashboards', 'Secure data storage', 'Role-based access'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=600'
  },
  {
    id: 'retailedge',
    title: 'RetailEdge Inventory',
    industry: 'Retail / Logistics',
    description: 'An end-to-end POS and inventory system helping Sri Lankan retail chains manage stock, vendors, and sales forecasting.',
    technologies: ['Angular', 'Spring Boot', 'AWS EC2'],
    features: ['Barcode scanning', 'Real-time stock alerts', 'Automated reordering'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&h=600'
  },
  {
    id: 'finflow',
    title: 'FinFlow Mobile Banking',
    industry: 'Fintech',
    description: 'A secure mobile banking app compliant with Central Bank standards, offering instant transfers and budgeting tools.',
    technologies: ['Flutter', 'Firebase', 'AWS RDS'],
    features: ['Multi-factor authentication', 'Expense tracking', 'LankaQR Support'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&h=600'
  },
  {
    id: 'edunext',
    title: 'EduNext E-learning',
    industry: 'Education',
    description: 'A scalable LMS used by tuition academies and schools for hybrid learning and exam preparation.',
    technologies: ['Next.js', 'Node.js', 'AWS S3'],
    features: ['Online courses', 'Live classes', 'Sinhala/Tamil Support'],
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&h=600'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Kasun Perera',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years in the Sri Lankan IT sector, formerly with WSO2 and leading enterprise projects.',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: 'cto',
    name: 'Dilani Jayasooriya',
    role: 'Chief Technology Officer',
    bio: 'Expert in Cloud Native computing and AI, ensuring our stack is future-proof and globally competitive.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300'
  },
  {
    id: 'design',
    name: 'Shehan Gunawardena',
    role: 'Head of Product Design',
    bio: 'Award-winning UX specialist passionate about creating culturally relevant and accessible digital experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300'
  }
];

export const WHY_CHOOSE_US = [
  { title: 'Global Standards, Local Expertise', description: 'World-class engineering talent based in Colombo.', icon: TrendingUp },
  { title: 'Fast & Agile Development', description: 'Quick turnaround times without compromising quality.', icon: Zap },
  { title: 'Enterprise Security', description: 'Compliance-ready secure coding practices.', icon: ShieldCheck },
  { title: 'AWS-Optimized', description: 'Cloud-native solutions designed for efficiency.', icon: Server },
];