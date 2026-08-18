import { WorkExperience, EducationItem, CapabilityCategory, PortfolioProject } from '../types';

// Content loaded directly from modular JSON content files in /src/content/
import profileContent from '../content/profile.json';
import experiencesContent from '../content/experiences.json';
import capabilitiesContent from '../content/capabilities.json';
import educationContent from '../content/education.json';
import portfolioContent from '../content/portfolio.json';

export const PERSONAL_INFO = profileContent;
export const KEY_CAPABILITIES: CapabilityCategory[] = capabilitiesContent as CapabilityCategory[];
export const WORK_HISTORY: WorkExperience[] = experiencesContent as WorkExperience[];
export const EDUCATION: EducationItem[] = educationContent as EducationItem[];
export const PORTFOLIO_PROJECTS: PortfolioProject[] = portfolioContent as PortfolioProject[];
