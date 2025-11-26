import React from 'react';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  platform: 'Quora' | 'Medium';
  link: string;
  date: string;
  readTime?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: 'research' | 'teaching' | 'creative';
}

export interface MentorshipService {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}