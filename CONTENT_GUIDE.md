# Content Customization & Management Guide
### Personal Portfolio & Executive Profile Web Application

This document provides a comprehensive, step-by-step guide to updating, adding, or removing content across all sections and pages of your application.

---

## Quick Architecture Summary

The website is designed with a **clean separation between data and presentation**:
- **Core Content (`/src/data/`)**: 90% of your editable content (Bio, Capabilities, Work History, Education, Articles, Metrics) resides in two clean TypeScript data files:
  - `/src/data/resumeData.ts` — Personal information, capabilities, work history, education, and metrics.
  - `/src/data/blogData.ts` — Blog articles, mathematical formulas, and insights.
- **Visual Components (`/src/components/`)**: Houses layout structures, interactive widgets (like the RGM Simulator), headers, footers, and modals.

---

## 1. Hero & Profile Section

### Location
- **Primary Data**: `/src/data/resumeData.ts` (`PERSONAL_INFO` object)
- **Component File**: `/src/components/Hero.tsx`

### Section-by-Section Customization:

#### A. Name, Title, and Executive Summary
Open `/src/data/resumeData.ts` and modify the `PERSONAL_INFO` object:
```typescript
export const PERSONAL_INFO = {
  name: "Ketan Yadav",
  title: "RGM | Commercial Analytics & Program Delivery Lead",
  email: "ketanyadav@gmail.com",
  phone: "+91-9924470299",
  linkedIn: "https://www.linkedin.com/in/ketanyadav84/",
  summary: "Analytics professional with 10+ years of experience in Revenue Growth Management (RGM)...",
  // ...
};
```

#### B. Highlight Metric Badges (Top of Hero)
In `/src/components/Hero.tsx` (around lines 60–85), you can edit or add credentials and credential tags:
- **ISB Credential**: `AMPBA – Indian School of Business`
- **CFA Credential**: `CFA (ICFAI) Certified (2010)`
- **MFA Credential**: `Master of Financial Analysis (2010)`
- **Impact Badge**: `Driven $12M+ Profit Impact`

#### C. Metric Counter Cards
In `/src/data/resumeData.ts` under `PERSONAL_INFO.metrics`:
```typescript
metrics: [
  { label: "Years Experience", value: "10+" },
  { label: "MAZ Profit Impact", value: "$12M" },
  { label: "Client NPS Score", value: "90+" },
  { label: "Productivity Gain", value: "26%" }
]
```
*To change the numbers or labels, simply edit the `value` and `label` strings.*

---

## 2. Key Capabilities Section

### Location
- **Data File**: `/src/data/resumeData.ts` (`KEY_CAPABILITIES` array)
- **Component File**: `/src/components/KeyCapabilities.tsx`

### How to Edit or Add a Capability:
In `/src/data/resumeData.ts`, each card follows this structure:
```typescript
{
  id: "rgm-srm",
  title: "Revenue Growth Management",
  description: "End-to-end SRM/RGM/NRM strategies covering price pack architecture...",
  iconName: "TrendingUp", // Options: TrendingUp, Calculator, PackageCheck, Cpu, Target, Briefcase
  skills: [
    "SRM / RGM / NRM",
    "Rate & Mix Analysis",
    "Trade Spend Optimization",
    "Promotional ROI"
  ]
}
```
- **Add a new capability card**: Add a new object to the `KEY_CAPABILITIES` array.
- **Add or edit skill tags**: Update the strings inside the `skills: [...]` array.

---

## 3. Experience & Education Section

### Location
- **Data File**: `/src/data/resumeData.ts` (`WORK_HISTORY` and `EDUCATION` arrays)
- **Component File**: `/src/components/ExperienceTimeline.tsx`

### How to Edit Work History:
Each career role is defined in the `WORK_HISTORY` array:
```typescript
{
  id: "tiger-analytics",
  company: "Tiger Analytics",
  role: "Program Lead",
  period: "Sep’24 - Present",
  summary: "Leading analytics programs focused on personalized promotions...",
  keyHighlights: [
    "Lead analytics programs focused on personalized promotions...",
    "Own delivery planning, analytical quality, and stakeholder communication..."
  ],
  skills: ["Program Delivery", "Personalized Promotions", "Analytics Governance"]
}
```
- **Add a new role**: Insert a new object at the top of the `WORK_HISTORY` array.
- **Modify achievements/bullets**: Add, remove, or edit strings in the `keyHighlights` list.
- **Role Tags**: Update the `skills` list to change the badges shown at the bottom of the card.

### How to Edit Education & Qualifications:
In `/src/data/resumeData.ts` under the `EDUCATION` array:
```typescript
{
  id: "isb",
  degree: "AMPBA (Business Analytics)",
  institution: "Indian School of Business (ISB)",
  year: "2018 - 2019",
  details: "Advanced Machine Learning, Econometric Modeling, and Predictive Analytics."
}
```

---

## 4. RGM Scenario Simulator Widget

### Location
- **Component File**: `/src/components/RGMCalculatorWidget.tsx`

### Customizing Simulation Data & Math:

#### A. Base Product Portfolio
Around lines 15–40 in `/src/components/RGMCalculatorWidget.tsx`, you can adjust the default SKUs:
```typescript
const INITIAL_PRODUCTS: ProductItem[] = [
  { id: 'p1', name: 'Premium Craft 330ml Can', basePrice: 4.50, currentPrice: 4.50, baseVolume: 120000, marginRate: 0.58, ownElasticity: -1.35 },
  { id: 'p2', name: 'Core Lager 500ml Can', basePrice: 2.80, currentPrice: 2.80, baseVolume: 450000, marginRate: 0.44, ownElasticity: -0.92 },
  { id: 'p3', name: 'Value Multi-Pack 6x330ml', basePrice: 11.50, currentPrice: 11.50, baseVolume: 85000, marginRate: 0.32, ownElasticity: -1.80 },
];
```
- **`basePrice`**: Baseline selling price per unit.
- **`baseVolume`**: Baseline annual or monthly volume (units).
- **`marginRate`**: Gross margin percentage (e.g. `0.44` = 44%).
- **`ownElasticity`**: Price elasticity coefficient (negative float).

#### B. Preset Scenarios
Around lines 45–65 in `/src/components/RGMCalculatorWidget.tsx`, you can modify preset buttons (e.g., "Inflationary Pass-Through (+6%)", "Premiumization (+10% on Premium)", "Volume Shielding"):
- Each preset defines target percentage changes for each SKU.

---

## 5. Blog Insights Section

### Location
- **Data File**: `/src/data/blogData.ts` (`BLOG_POSTS` array)
- **Component File**: `/src/components/BlogSection.tsx`

### How to Add or Edit an Article:
Each post is an entry in `/src/data/blogData.ts`:
```typescript
{
  id: "price-pack-architecture-guide",
  title: "Mastering Price Pack Architecture (PPA) in FMCG",
  slug: "mastering-price-pack-architecture-fmcg",
  date: "October 2024",
  readTime: "6 min read",
  category: "Price Pack Architecture", // Categories: "Price Pack Architecture", "Commercial Analytics", "Product Strategy", "Leadership & AI"
  excerpt: "A strategic breakdown of how to design brand ladders...",
  content: `
# Heading 1
Your article introduction goes here.

## Heading 2
* Bullet point 1
* Bullet point 2

### Mathematical Formulas
Use the math code block format:
\`\`\`math
V_simulated = V_base × [ 1 + (ε × ΔP) ]
\`\`\`

### Text Diagrams & Architecture Ladders
Use the text code block format:
\`\`\`text
[Premium Pack] ───> High Margin Tier
[Core Pack]    ───> Volume Driver
\`\`\`
  `
}
```

### Supported Markdown Features:
- `# Heading 1`, `## Heading 2`, `### Heading 3`
- `**Bold text**` and `*Italic text*`
- Unordered (`*`) and Ordered (`1.`) lists
- Code blocks tagged with `math` for styled equation cards
- Code blocks tagged with `text` for terminal-style ASCII diagrams
- Tables using standard Markdown syntax (`| Col 1 | Col 2 |`)

---

## 6. Contact Section

### Location
- **Data File**: `/src/data/resumeData.ts` (`PERSONAL_INFO` object)
- **Component File**: `/src/components/ContactSection.tsx`

### Customizing:
- **Email & Phone Links**: Update `PERSONAL_INFO.email` and `PERSONAL_INFO.phone`.
- **LinkedIn Profile**: Update `PERSONAL_INFO.linkedIn`.
- **Inquiry Categories**: You can edit the dropdown options in `ContactSection.tsx` (e.g., "Commercial Analytics Consultation", "Full-Time Leadership Role", "Speaking / Advisory").

---

## 7. Interactive Resume View & Download Modal

### Location
- **Component File**: `/src/components/ResumeModal.tsx`

### How it Works:
- The modal automatically pulls its data directly from `/src/data/resumeData.ts`.
- When you update your `PERSONAL_INFO`, `WORK_HISTORY`, `EDUCATION`, or `KEY_CAPABILITIES`, the printable resume updates automatically.
- **Customizing the Print Layout**: If you need to adjust spacing or font sizes on the printed resume, modify the Tailwind classes in `/src/components/ResumeModal.tsx`.

---

## 8. Header & Navigation

### Location
- **Component File**: `/src/components/Header.tsx`
- **Main App Pager**: `/src/App.tsx`

### Modifying the Navigation Menu:
In `/src/components/Header.tsx` (lines 30–38) and `/src/App.tsx` (lines 46–54):
```typescript
const SECTIONS: { id: PageTab; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'experience', label: 'Experience' },
  { id: 'simulator', label: 'RGM Simulator' },
  { id: 'blog', label: 'Blog Insights' },
  { id: 'contact', label: 'Contact' },
];
```

---

## 9. How to Re-Activate the Portfolio Page

When your revised case studies and project portfolio are ready to be published:

1. **In `/src/App.tsx`**:
   - Add `{ id: 'portfolio', label: 'Portfolio' }` back to `PAGES` array.
   - Add the portfolio render case in the `renderActiveSection` switch statement:
     ```tsx
     case 'portfolio':
       return <PortfolioSection onOpenResumeModal={() => setIsResumeOpen(true)} />;
     ```
2. **In `/src/components/Header.tsx`**:
   - Add `{ name: 'Portfolio', id: 'portfolio' }` to `NAV_ITEMS`.
3. **In `/src/components/Footer.tsx`**:
   - Add `<button onClick={() => handleNav('portfolio')} ...>Portfolio</button>` to the Quick Links.
4. **Update Projects in `/src/data/resumeData.ts`**:
   - Edit the `PORTFOLIO_PROJECTS` array with your latest case studies, impact figures, and technologies.

---

## 10. SEO, Favicon & Page Title

### Location
- **HTML Document**: `/index.html`
- **Dynamic SEO Component**: `/src/components/SEOHead.tsx`
- **Metadata**: `/metadata.json`

### Customizing:
- **Browser Tab Title**: Edit the `<title>` tag in `/index.html`.
- **Search Engine Description**: Edit the `description` meta tag in `/index.html` and `SEOHead.tsx`.
- **Social Sharing (OpenGraph)**: Edit `og:title` and `og:description` in `/src/components/SEOHead.tsx`.

---

## Checklist for Common Updates

| Task to Perform | Files to Modify |
| :--- | :--- |
| **Update Job Role or New Company** | `/src/data/resumeData.ts` (`WORK_HISTORY`) |
| **Add a New Blog Article** | `/src/data/blogData.ts` (`BLOG_POSTS`) |
| **Update Email or Phone Number** | `/src/data/resumeData.ts` (`PERSONAL_INFO`) |
| **Update Top Metrics ($12M, 10+ Yrs)** | `/src/data/resumeData.ts` (`metrics` array) |
| **Modify Capabilities / Skill Badges** | `/src/data/resumeData.ts` (`KEY_CAPABILITIES`) |
| **Add/Modify Simulator Base SKUs** | `/src/components/RGMCalculatorWidget.tsx` (`INITIAL_PRODUCTS`) |
| **Unhide / Restore Portfolio Section** | `/src/App.tsx`, `/src/components/Header.tsx`, `/src/components/Footer.tsx` |
