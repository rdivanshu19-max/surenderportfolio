/**
 * Core TypeScript interfaces for Professional Portfolio
 */

export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  location: string;
  experienceYears: string;
  teamSize: string;
  coreExpertise: string;
  socialLinks: {
    linkedin?: string;
    email?: string;
  };
  portraitImage: string;
}

export interface Achievement {
  id: string;
  metric: string;
  label: string;
  icon: string;
}

export interface CareerEntry {
  id: string;
  company: string;
  role: string;
  years: string;
  description: string;
  current: boolean;
}

export interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}
