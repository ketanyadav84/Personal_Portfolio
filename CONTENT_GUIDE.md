# Easy Content Management & Editing Guide
### Personal Portfolio & Executive Profile Web Application

All content across your portfolio is now organized into **dedicated, standalone JSON content files** in the `/src/content/` folder. You can easily edit names, job titles, summaries, dates, bullet points, skills, education, and articles **without touching any code or TypeScript files**.

---

## 📁 Content Directory Map (`/src/content/`)

| File Path | Description & What It Controls |
| :--- | :--- |
| **`/src/content/profile.json`** | Your name, headline title, contact information (email, phone, LinkedIn), executive bio summary, key metrics, languages, and personal details. |
| **`/src/content/experiences.json`** | All career history entries (Tiger Analytics, AB-InBev, PepsiCo, Nielsen IQ, TCS, etc.), role titles, dates, locations, bullet points, skill badges, and impact metrics. |
| **`/src/content/capabilities.json`** | Core capability pillars (Revenue Growth Management, Pricing Elasticities, PPA, Scenario Simulators, Program Delivery, Commercial Planning). |
| **`/src/content/education.json`** | Academic degrees and executive qualifications (ISB AMPBA, CFA, Master of Financial Analysis, Bachelor's degree). |
| **`/src/content/portfolio.json`** | Featured case studies, business impact summaries, key metrics, and categorization tags. |
| **`/src/content/blogs.json`** | Complete thought-leadership articles, markdown content, formulas, tags, and reading times. |

---

## 1. Updating Your Profile & Bio (`/src/content/profile.json`)

Open `/src/content/profile.json` to change personal information or the executive summary:

```json
{
  "name": "Ketan Yadav",
  "title": "RGM | Commercial Analytics & Program Delivery Lead",
  "email": "ketanyadav@gmail.com",
  "phone": "+91-9924470299",
  "linkedIn": "https://www.linkedin.com/in/ketanyadav84/",
  "summary": "Your executive bio and summary paragraph goes here...",
  "metrics": [
    { "label": "Years Experience", "value": "10+" },
    { "label": "Profit Impact", "value": "$12M" },
    { "label": "Client NPS Score", "value": "90+" },
    { "label": "Productivity Gain", "value": "26%" }
  ]
}
```

---

## 2. Updating Experiences & Work History (`/src/content/experiences.json`)

Each job is an object inside the array. You can:
- **Add a new bullet point**: Add a new string to the `"keyHighlights"` array.
- **Add a skill badge**: Add a string to the `"skills"` array.
- **Update dates or role titles**: Change `"role"`, `"period"`, or `"summary"`.

### Example Entry:
```json
{
  "id": "tiger-analytics",
  "company": "Tiger Analytics",
  "role": "Program Lead",
  "period": "Sep’24 - Present",
  "location": "Bengaluru, India",
  "summary": "Leading analytics programs focused on personalized promotions...",
  "keyHighlights": [
    "Lead analytics programs focused on personalized promotions and commercial decision support...",
    "Own delivery planning, analytical quality, and stakeholder communication...",
    "Guide cross-functional teams (Data Science, Engineering, App Dev)..."
  ],
  "skills": [
    "Program Delivery",
    "Manage Cross Functional Team",
    "Personalized Promotions",
    "Analytics Governance",
    "Commercial Decision Support"
  ],
  "impactMetric": "Multi-Discipline Analytics Deployment"
}
```

---

## 3. Updating Capabilities (`/src/content/capabilities.json`)

To add or modify functional pillars and sub-skills:
```json
{
  "id": "pricing-elasticity",
  "title": "Pricing Strategy & Elasticities",
  "description": "Own-price and cross-price elasticity modeling, competitive benchmarking...",
  "iconName": "Calculator",
  "skills": [
    "Price Elasticity Matrix",
    "Competitive Strategy",
    "Sourcing Matrices",
    "Price Elasticity Modeling"
  ]
}
```

---

## 4. Updating Education & Certifications (`/src/content/education.json`)

```json
{
  "id": "isb",
  "degree": "Advanced Management Program in Business Analytics (AMPBA)",
  "institution": "Indian School of Business (ISB) - Hyderabad",
  "year": "May 2024",
  "details": "Specialized executive program in business analytics, machine learning, and commercial decision science."
}
```

---

## 5. Adding or Editing Blog Articles (`/src/content/blogs.json`)

Each article supports standard **Markdown formatting** (headings `#`, bold `**text**`, bullet points `-`, tables, and code blocks).

```json
{
  "id": "post-1",
  "slug": "mastering-price-pack-architecture-fmcg",
  "title": "Article Title Here",
  "summary": "Short 1-2 sentence description shown on the blog cards.",
  "category": "RGM & Pricing",
  "tags": ["Price Pack Architecture", "FMCG"],
  "date": "July 18, 2026",
  "readTime": "6 min read",
  "featured": true,
  "content": "# Full Article Title\n\nArticle body in markdown goes here..."
}
```

---

## 💡 Quick Tips for JSON Editing
1. **Quotes**: Always wrap keys and text values in double quotes (`"key": "value"`).
2. **Commas**: Ensure commas separate items in arrays `["a", "b", "c"]` and object properties, but do not leave a trailing comma after the last item.
3. **Instant Live Preview**: Whenever you save any JSON file in `/src/content/`, the app automatically reloads and renders the new content instantly.
