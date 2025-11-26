import React from 'react';
import { Article, ExperienceItem, MentorshipService } from './types';
import { BookOpen, PenTool, Youtube, Microscope, GraduationCap, Stethoscope } from 'lucide-react';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/khalid-bin-amir",
  quora: "https://www.quora.com/profile/Khalid-Bin-Amir",
  medium: "https://medium.com/@khalidbinamir31415",
  instagram: "https://www.instagram.com/khalidbinamir/",
  email: "khalidbinamir31415@gmail.com",
  phone: "+918910435478"
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: 'Research Associate / Contributor',
    organization: 'International Journal of Medical Students (IJMS)',
    period: '2021 - Present',
    description: 'Contributing to the advancement of medical science through rigorous research, peer review, and academic writing. Focused on fostering a culture of scientific inquiry among medical students.',
    type: 'research'
  },
  {
    id: '2',
    role: 'Founder & Content Creator',
    organization: 'The Fun MEDIC',
    period: '2020 - Present',
    description: 'Creating engaging and educational content to simplify complex medical concepts for students and the general public. Bridging the gap between humor and medicine.',
    type: 'creative'
  },
  {
    id: '3',
    role: 'Senior Biology Mentor',
    organization: 'Freelance / Educational Institutes',
    period: '2019 - Present',
    description: 'Guided 500+ NEET aspirants with personalized study plans, concept clarification, and mental toughness training. Special focus on NCERT mastery.',
    type: 'teaching'
  }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'q1',
    title: 'What is the most effective strategy to score 340+ in Biology for NEET?',
    excerpt: 'Understanding the NCERT line-by-line is not just a suggestion, it is a rule. Here is how I decoded the pattern...',
    platform: 'Quora',
    link: SOCIAL_LINKS.quora,
    date: 'Oct 2023'
  },
  {
    id: 'm1',
    title: 'The Reality of Medical School: Beyond the Stethoscope',
    excerpt: 'We often romanticize the white coat, but the sleepless nights and the sheer volume of information is the real challenge...',
    platform: 'Medium',
    link: SOCIAL_LINKS.medium,
    date: 'Jan 2024',
    readTime: '5 min read'
  },
  {
    id: 'q2',
    title: 'How do I manage research along with MBBS studies?',
    excerpt: 'Time management is key. My experience with IJMS taught me that research is not about finding extra time, but optimizing...',
    platform: 'Quora',
    link: SOCIAL_LINKS.quora,
    date: 'Dec 2023'
  },
  {
    id: 'm2',
    title: 'From Aspirant to Mentor: My Journey',
    excerpt: 'Reflecting on the transition from seeking guidance to providing it. The lessons I learned are invaluable for every future doctor.',
    platform: 'Medium',
    link: SOCIAL_LINKS.medium,
    date: 'Feb 2024',
    readTime: '4 min read'
  }
];

export const MENTORSHIP_SERVICES: MentorshipService[] = [
  {
    id: 'basic',
    title: 'NEET Strategy Session',
    description: 'A one-time intense session to restructure your preparation strategy.',
    price: 'Free / Introductory',
    features: ['30 Min Video Call', 'Schedule Review', 'Resource List', 'Motivation Boost']
  },
  {
    id: 'pro',
    title: 'Complete Mentorship',
    description: 'Continuous guidance till your exam day. I become your accountability partner.',
    price: 'Premium',
    recommended: true,
    features: ['Weekly Progress Check', 'Personalized Time-Table', 'Doubt Clearing (Bio)', 'Exam Stress Management', 'Research Basics']
  },
  {
    id: 'research',
    title: 'Research Guidance',
    description: 'For medical students wanting to publish their first paper.',
    price: 'Standard',
    features: ['Topic Selection', 'Methodology Help', 'IJMS Submission Guide', 'Scientific Writing Tips']
  }
];