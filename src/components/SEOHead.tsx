import React, { useEffect } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';

export const SEOHead: React.FC = () => {
  useEffect(() => {
    // Dynamic Page Title
    document.title = `${PERSONAL_INFO.name} — RGM & Commercial Analytics Leader`;

    // Standard Meta Tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Personal portfolio, work experience, RGM simulator tool, blog articles, and downloadable resume for Ketan Yadav, Commercial Analytics & Program Delivery Lead.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Personal portfolio, work experience, RGM simulator tool, blog articles, and downloadable resume for Ketan Yadav, Commercial Analytics & Program Delivery Lead.';
      document.head.appendChild(meta);
    }

    // JSON-LD Structured Data Schema for Person
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': PERSONAL_INFO.name,
      'jobTitle': PERSONAL_INFO.title,
      'email': `mailto:${PERSONAL_INFO.email}`,
      'telephone': PERSONAL_INFO.phone,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Bengaluru',
        'addressCountry': 'India'
      },
      'alumniOf': [
        {
          '@type': 'EducationalOrganization',
          'name': 'Indian School of Business (ISB) - Hyderabad'
        },
        {
          '@type': 'EducationalOrganization',
          'name': 'ICFAI University'
        }
      ],
      'sameAs': [
        PERSONAL_INFO.linkedIn
      ],
      'knowsAbout': [
        'Revenue Growth Management',
        'Price Elasticity Modeling',
        'Price Pack Architecture',
        'Trade Spend Optimization',
        'FMCG Commercial Strategy',
        'Program Governance'
      ]
    };

    let script = document.getElementById('json-ld-person-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld-person-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(personSchema);

  }, []);

  return null;
};
