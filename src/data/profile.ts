import type { ProfileInfo, Achievement, CareerEntry, ExpertiseArea } from '@/types';

export const profileInfo: ProfileInfo = {
  name: 'Surender Singh Rathore',
  title: 'Senior Manager – Cosmetics Division',
  tagline: 'Driving FMCG growth through strategy, execution, and consumer insight.',
  about: `A results-driven FMCG professional with over 20 years of experience in sales management, supply chain operations, and team leadership across the cosmetics and consumer goods industry. Known for building high-performing teams, optimizing inventory planning, and delivering consistent regional growth.

With a deep understanding of consumer markets and distribution networks, I have successfully led cross-functional teams of 100+ members, driving operational excellence and sustainable business expansion.`,
  email: 'surenderrathor541@gmail.com',
  location: 'India',
  experienceYears: '20+',
  teamSize: '100+',
  coreExpertise: 'Management & Supply Chain',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/surender-singh-01601576?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'surenderrathor541@gmail.com',
  },
  portraitImage: '',
};

export const achievements: Achievement[] = [
  {
    id: '1',
    metric: '46%+',
    label: 'Regional Sales Growth',
    icon: 'trending-up',
  },
  {
    id: '2',
    metric: '100+',
    label: 'Team Members Managed',
    icon: 'users',
  },
  {
    id: '3',
    metric: '20+',
    label: 'Years of Experience',
    icon: 'briefcase',
  },
  {
    id: '4',
    metric: '15+',
    label: 'Years at Current Company',
    icon: 'building',
  },
];

export const careerTimeline: CareerEntry[] = [
  {
    id: '1',
    company: 'Patanjali Foods Limited',
    role: 'Senior Manager – Cosmetics Division',
    years: '15+ years',
    description: 'Leading cosmetics division with full P&L responsibility. Increased regional sales by 46%+, managed 100+ member teams, and drove inventory planning and supply chain optimization across multiple territories.',
    current: true,
  },
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: '1',
    title: 'Team Leadership',
    description: 'Building and managing high-performance teams of 100+ members across sales, distribution, and operations.',
    icon: 'users',
  },
  {
    id: '2',
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain optimization, inventory planning, and distribution network management for FMCG products.',
    icon: 'package',
  },
  {
    id: '3',
    title: 'Sales Strategy & Execution',
    description: 'Developing and executing regional sales strategies that deliver measurable growth in competitive markets.',
    icon: 'target',
  },
  {
    id: '4',
    title: 'Inventory Planning',
    description: 'Demand forecasting, stock optimization, and warehouse management to minimize costs and maximize availability.',
    icon: 'clipboard-list',
  },
];
