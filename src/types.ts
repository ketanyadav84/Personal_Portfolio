export interface JourneyMilestone {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  isCurrent?: boolean;
  highlightBadge?: string;
}

export interface CareerJourneyContent {
  badge: string;
  title: string;
  subtitle: string;
  viewMoreButtonText: string;
  milestones: JourneyMilestone[];
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  keyHighlights: string[];
  skills: string[];
  impactMetric?: string;
}

export interface CapabilityCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  category: 'RGM' | 'Analytics' | 'Product' | 'Strategy';
  linkText?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  reason: 'Consulting' | 'Hiring' | 'RGM Workshop' | 'General' | 'Other';
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: {
    recipient: string;
    timestamp: string;
    status: string;
  };
}
