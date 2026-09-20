export const PRICING_TIERS = [
  {
    id: 'sprint',
    name: 'Automation Sprint',
    eyebrow: 'Fast-Track Implementation',
    description: 'Perfect for scaling companies seeking to automate 1-2 mission-critical bottlenecks or launch an elite marketing flagship in 2-3 weeks.',
    monthlyPrice: 4800,
    annualPrice: 3900,
    period: 'one-time sprint or monthly',
    isPopular: false,
    badge: 'Quick Win',
    features: [
      '1 to 2 bespoke AI workflow pipelines',
      'End-to-end integration (CRM, ERP, Slack, Email)',
      'Custom LLM prompts & structured JSON schemas',
      'High-velocity Next.js / Tailwind landing architecture',
      'Full documentation & video handoff walkthroughs',
      '30 days of post-launch hypercare & bug fixes',
      'Basic uptime & webhook queue telemetry'
    ],
    ctaText: 'Start Sprint Discovery',
    recommendedFor: 'Growing businesses ready to eliminate their biggest manual time-sink.'
  },
  {
    id: 'pod',
    name: 'Dedicated AI + Web Pod',
    eyebrow: 'Full Autonomous Partnership',
    description: 'A complete dedicated engineering pod that continually automates your operations, builds internal AI tools, and scales your web platforms.',
    monthlyPrice: 8500,
    annualPrice: 6900,
    period: 'per month (cancel anytime)',
    isPopular: true,
    badge: 'Most Popular',
    features: [
      'Unlimited continuous AI automation builds',
      'Dedicated Full-Stack & AI Systems Engineers',
      'Multi-agent autonomous swarms & custom tool calling',
      'Private enterprise RAG vector database setup',
      'Full-stack web application development & feature rollouts',
      'Continuous conversion rate optimization (CRO) testing',
      'Private Slack/Teams channel with sub-2hr response time',
      'Bi-weekly architecture syncs & live KPI dashboards',
      '99.9% uptime SLA guarantee'
    ],
    ctaText: 'Claim Dedicated Pod Slot',
    recommendedFor: 'Series A to C companies scaling fast without bloating headcount.'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Transformation',
    eyebrow: 'Institutional Security & Scale',
    description: 'Custom architectures for large enterprises requiring on-premise LLM hosting, private VPC deployment, strict SOC-2 compliance, and dedicated SLAs.',
    monthlyPrice: 16500,
    annualPrice: 13500,
    period: 'custom retainer',
    isPopular: false,
    badge: 'Enterprise SLA',
    features: [
      'Air-gapped / Private VPC deployment (AWS / Azure / GCP)',
      'Fine-tuned open-source models (Llama 3, DeepSeek R1)',
      'Enterprise SSO, RBAC & SOC-2 compliance auditing',
      'Legacy ERP deep integration (SAP, Oracle, NetSuite)',
      'Dedicated Technical Solutions Architect & On-Call Eng',
      'Guaranteed 15-minute critical issue response time',
      'Executive quarterly strategy & AI governance reviews',
      'Full source code ownership & custom IP rights'
    ],
    ctaText: 'Request Enterprise Briefing',
    recommendedFor: 'Regulated industries, fintech, healthcare & mature enterprises.'
  }
];

export const ENGAGEMENT_GUARANTEES = [
  {
    title: '14-Day Performance Guarantee',
    desc: 'If our initial sprint prototype does not demonstrably improve your pipeline speed or reduce manual hours, you owe nothing.'
  },
  {
    title: 'Zero Vendor Lock-In',
    desc: 'You retain 100% intellectual property ownership of all custom code, prompt pipelines, and infrastructure scripts.'
  },
  {
    title: 'Battle-Tested Architecture',
    desc: 'Every system is engineered with automatic failover, retry queues, and deterministic schema validation.'
  }
];
