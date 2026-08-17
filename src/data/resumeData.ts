import { WorkExperience, EducationItem, CapabilityCategory, PortfolioProject } from '../types';

export const PERSONAL_INFO = {
  name: "Ketan Yadav",
  title: "RGM | Commercial Analytics & Program Delivery Lead",
  pronouns: "He/Him/His",
  email: "ketanyadav@gmail.com",
  phone: "+91-9924470299",
  linkedIn: "https://www.linkedin.com/in/ketanyadav84/",
  dateOfBirth: "18th September 1984",
  languages: ["English", "Hindi", "Gujarati"],
  hobbies: ["Gardening", "Photography"],
  summary: "Analytics professional with 10+ years of experience in Revenue Growth Management (RGM), pricing, promotions, and commercial analytics across global FMCG and QSR organizations. Strong background in building analytical frameworks, generating actionable insights, and supporting commercial teams in pricing, pack architecture, promotion effectiveness, and mix decisions. Experienced in working closely with regional and market teams, translating complex analyses into practical recommendations, and supporting execution through structured tools, simulators, and performance tracking. Known for a hands-on approach, strong problem structuring, comfort with imperfect data, and the ability to balance analytical rigor with business practicality.",
  metrics: [
    { label: "Years Experience", value: "10+" },
    { label: "Profit Impact", value: "$12M" },
    { label: "Client NPS Score", value: "90+" },
    { label: "Productivity Gain", value: "26%" }
  ]
};

export const KEY_CAPABILITIES: CapabilityCategory[] = [
  {
    id: "rgm-srm",
    title: "Revenue Growth Management",
    description: "End-to-end SRM/RGM/NRM strategies covering price pack architecture, promotion ROI, and category economics.",
    iconName: "TrendingUp",
    skills: ["SRM / RGM / NRM", "Rate & Mix Analysis", "Trade Spend Optimization", "Promotional ROI"]
  },
  {
    id: "pricing-elasticity",
    title: "Pricing Strategy & Elasticities",
    description: "Own-price and cross-price elasticity modeling, competitive benchmarking, attack-and-defend pricing strategies.",
    iconName: "Calculator",
    skills: ["Price Elasticity Matrix", "Competitive Strategy", "Sourcing Matrices", "Price Elasticity Modeling"]
  },
  {
    id: "pack-architecture",
    title: "Price Pack Architecture (PPA)",
    description: "Developing robust brand ladders, channel-pack mix optimization, and margin enhancement models.",
    iconName: "PackageCheck",
    skills: ["Brand Laddering", "Channel Pack Architecture", "Mix Analytics", "Product Architecture"]
  },
  {
    id: "simulators-tools",
    title: "Scenario Simulators & Cloud Products",
    description: "Architecting interactive what-if simulation tools and converting Excel models into enterprise cloud platforms.",
    iconName: "Cpu",
    skills: ["What-If Scenario Simulators", "Cloud Product Scaling", "Analytical Dashboard Dev", "Power BI / Excel Modeling"]
  },
  {
    id: "program-delivery",
    title: "Program Delivery & Governance",
    description: "Bridging business leaders with cross-functional Data Science, Engineering, and App Dev teams.",
    iconName: "Target",
    skills: ["Stakeholder Management", "Agile Analytics Delivery", "Governance Structures", "Cross-Functional Leadership"]
  },
  {
    id: "commercial-planning",
    title: "Commercial & Long-Range Planning",
    description: "Grounded 1-Year and 3-Year commercial planning in data, scenario analysis, and regional execution.",
    iconName: "Briefcase",
    skills: ["Annual & 3YP Commercial Planning", "FMCG Economics", "Margin Optimization", "Executive Decision Support"]
  }
];

export const WORK_HISTORY: WorkExperience[] = [
  {
    id: "tiger-analytics",
    company: "Tiger Analytics",
    role: "Program Lead",
    period: "Sep’24 - Present",
    location: "Bengaluru, India",
    summary: "Leading analytics programs focused on personalized promotions and commercial decision support, from problem framing through deployment.",
    keyHighlights: [
      "Lead analytics programs focused on personalized promotions and commercial decision support, from problem framing through deployment.",
      "Own delivery planning, analytical quality, and stakeholder communication across multi-disciplinary teams.",
      "Guide cross-functional teams (Data Science, Engineering, App Dev) to transform business needs into scalable analytics solutions.",
      "Work closely with business stakeholders to translate commercial questions into structured analytical approaches for segmentation, price sensitivity, and promotion optimization.",
      "Act as a bridge between analytics and business teams, ensuring outputs are usable, interpretable, and aligned to execution needs.",
      "Established governance structures and reporting processes, ensuring transparency and effective stakeholder decision-making."
    ],
    skills: ["Program Delivery", "Personalized Promotions", "Analytics Governance", "Commercial Decision Support"],
    impactMetric: "Multi-Discipline Analytics Deployment"
  },
  {
    id: "ab-inbev",
    company: "AB-InBev",
    role: "Analytics Manager RGM Analytics",
    period: "Sep’22 – Aug’24",
    location: "Bengaluru, India",
    summary: "Drove strategic pricing, pack, and mix analytics across global markets, generating massive bottom-line profit improvements.",
    keyHighlights: [
      "Recommended optimal pricing strategies in 2023, resulting in a $12 million profit impact from price adjustments across international markets.",
      "Played a key role in monthly, quarterly, and long-range commercial planning, ensuring decisions were grounded in data and scenario analysis.",
      "Collaborated with Data Scientists to oversee and execute RGM Analytics projects, successfully producing Price Elasticities and Sourcing Matrices.",
      "Led the development and deployment of an advanced RGM simulator tool, enabling businesses to optimize short-term and long-term pricing strategies, significantly boosting revenue and profit.",
      "Helped revenue managers simulate scenarios to evaluate Pack Price architecture, rate and mix changes to optimize pricing strategy.",
      "Achieved successful Price simulation/optimization tool implementation across key regional markets, later scaled as a cloud-based revenue management product."
    ],
    skills: ["$12M Profit Impact", "RGM Simulator Cloud Product", "Price Elasticity Matrices", "International Pricing Strategy"],
    impactMetric: "$12M Profit Impact in Global Markets"
  },
  {
    id: "pepsico",
    company: "PepsiCo",
    role: "Senior Manager - Revenue Management and Sales Transformation",
    period: "Apr’22 – Aug’22",
    location: "India",
    summary: "Led strategic revenue optimization initiatives, promotional optimization, and competitor benchmarking.",
    keyHighlights: [
      "Led strategic revenue optimization initiatives, including promotional optimization and competitor benchmarking, driving revenue growth and profitability.",
      "Conducted market research and analytics to refine brand positioning, pricing, and product architecture, enhancing brand equity.",
      "Developed robust brand ladder and Price Pack Architecture (PPA) models to streamline decision-making and improve operational efficiency.",
      "Collaborated cross-functionally to align brand and pricing strategies with business objectives and market regulations.",
      "Performed statistical and trend analyses, identifying growth opportunities and recommending actionable strategies."
    ],
    skills: ["Brand Laddering", "PPA Models", "Promotional Optimization", "Competitor Benchmarking"],
    impactMetric: "Price Pack Architecture Restructuring"
  },
  {
    id: "nielseniq",
    company: "Nielsen IQ",
    role: "Analytics Manager - RGM Analytics",
    period: "Nov’19 – Apr’22",
    location: "India",
    summary: "Leveraged machine learning and statistical modeling for leading CPG global giants (P&G, Coca-Cola, Unilever, J&J, Heineken).",
    keyHighlights: [
      "Leveraged advanced machine learning and statistical modeling techniques to deliver comprehensive Price and Promotion analytics solutions for leading CPG clients (P&G, Coca-Cola, Unilever, J&J, Heineken).",
      "Consistently delivered revenue and profit efficiencies of 5%-10% across engagements through analytical-driven pricing decisions.",
      "Guided strategic client dialogues on 1yp/3yp strategies, cementing long-term partnerships and securing an NPS score of 90+ consistently.",
      "Advised clients on attack and defend pricing strategies based on price sensitivity matrices and conducted simulation workshops to drive capability adoption.",
      "Managed team resources for optimal project delivery, talent assessments, and fostering a culture of performance excellence."
    ],
    skills: ["5-10% Profit Efficiencies", "NPS 90+", "CPG Giants (P&G, Unilever)", "Attacking Pricing Workshops"],
    impactMetric: "90+ NPS & 5-10% Revenue Gains"
  },
  {
    id: "tcs",
    company: "Tata Consultancy Services (TCS)",
    role: "Senior Business Analyst - Analytics & Insight",
    period: "Feb’13 – Oct’19",
    location: "India",
    summary: "Managed analytics team focused on RGM modeling, delivering 26% productivity gain and multiple award-winning models.",
    keyHighlights: [
      "Managed and led an analytics team focused on Revenue Growth Management (RGM) modeling, achieving a 26% increase in productivity and 5% improvement in quality.",
      "Spearheaded strategic client engagements supporting 1-year and 3-year revenue management initiatives.",
      "Developed interactive dashboards and strategic models, significantly optimizing promotional effectiveness and promo ROI.",
      "Facilitated effective stakeholder collaboration, ensuring timely delivery and recognized multiple times for process innovation."
    ],
    skills: ["26% Productivity Gain", "Interactive Dashboards", "Promo ROI Modeling", "Team Leadership"],
    impactMetric: "26% Productivity Increase"
  },
  {
    id: "other-exp",
    company: "KIFS / Jhaveri / Sharekhan",
    role: "Research Executive / Equity Research / Client Relations",
    period: "Dec’07 – Jan’13",
    location: "India",
    summary: "Prior foundation in equity research, financial analysis, and financial market modeling.",
    keyHighlights: [
      "Research Executive at KIFS Securities (Nov'10 to Jan'13 - 2yr 2m).",
      "Equity Research Intern at Jhaveri Securities Ltd. (Aug'10 to Nov'10 - 4m).",
      "Client Relationship Executive at Sharekhan Ltd. (Dec'07 to Mar'09 - 1yr 4m)."
    ],
    skills: ["Equity Research", "Financial Modeling", "Market Analysis"],
    impactMetric: "Financial Foundation"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "isb",
    degree: "Advanced Management Program in Business Analytics (AMPBA)",
    institution: "Indian School of Business (ISB) - Hyderabad",
    year: "May 2024",
    details: "Specialized executive program in business analytics, machine learning, and commercial decision science."
  },
  {
    id: "cfa",
    degree: "CFA (ICFAI) Certified",
    institution: "ICFAI University",
    year: "2010",
    details: "Financial valuation, portfolio analysis, and corporate finance consultancy."
  },
  {
    id: "mfa",
    degree: "Master of Financial Analysis",
    institution: "ICFAI University",
    year: "2010",
    details: "Advanced quantitative financial analysis, valuation models, and investment decision analysis."
  },
  {
    id: "graduate",
    degree: "Graduate (Account / Finance)",
    institution: "Maharaja Sayajirao University, Vadodara",
    year: "2006",
    details: "Core specialization in financial accounting, commercial economics, and statistics."
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "rgm-simulator-cloud",
    title: "Enterprise Cloud RGM Scenario Simulator",
    subtitle: "AB-InBev Multi-Market Deployment",
    description: "Designed and led the deployment of an advanced what-if simulation tool that allows commercial leaders to model price changes, rate & mix, pack architecture, and elasticities across international beverage markets.",
    impact: "Delivered $12M profit impact and scaled into a global cloud revenue management product.",
    tags: ["RGM Tool", "Price Elasticity", "Simulation", "Cloud SaaS", "Power BI"],
    metrics: [
      { label: "Profit Impact", value: "$12M" },
      { label: "Scope", value: "Global" },
      { label: "Adoption", value: "Enterprise SaaS" }
    ],
    category: "RGM"
  },
  {
    id: "nielsen-pricing-engine",
    title: "Predictive Pricing & Promotion Optimization Engine",
    subtitle: "NielsenIQ Global CPG Engagements",
    description: "Built ML-driven pricing models for Fortune 500 CPG giants (P&G, Coca-Cola, Unilever, J&J, Heineken) to evaluate trade spend ROI, cross-price elasticities, and attack/defend strategy.",
    impact: "Sustained 5-10% profit efficiencies and 90+ NPS across client engagements.",
    tags: ["CPG Analytics", "Trade Spend ROI", "Machine Learning", "Elasticity"],
    metrics: [
      { label: "Efficiency", value: "5-10%" },
      { label: "Client NPS", value: "90+" },
      { label: "Clients", value: "P&G, Unilever+" }
    ],
    category: "Analytics"
  },
  {
    id: "personalized-promotions-tiger",
    title: "Personalized Promotion Delivery Framework",
    subtitle: "Tiger Analytics Commercial Decision Support",
    description: "Bridged Data Science, Engineering, and App Dev teams to implement customer segmentation, price sensitivity algorithms, and personalized promotional offers in QSR and Retail.",
    impact: "Established unified governance and transformed commercial questions into deployable models.",
    tags: ["Personalization", "Program Delivery", "QSR & FMCG", "Governance"],
    metrics: [
      { label: "Deployment", value: "End-to-End" },
      { label: "Quality", value: "High Governance" }
    ],
    category: "Product"
  },
  {
    id: "ppa-brand-laddering",
    title: "Price Pack Architecture & Brand Laddering Strategy",
    subtitle: "PepsiCo Revenue Management",
    description: "Developed comprehensive brand laddering frameworks and channel-specific price pack architectures to prevent cannibalization and capture unserved price points.",
    impact: "Enhanced brand equity, streamlined promotional guardrails, and boosted gross margin.",
    tags: ["PPA", "Brand Ladder", "Channel Mix", "FMCG"],
    metrics: [
      { label: "Category Growth", value: "Multi-Pack" },
      { label: "Efficiency", value: "Optimized" }
    ],
    category: "Strategy"
  }
];
