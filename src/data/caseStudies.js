export const CASE_STUDIES = [
  {
    id: 'fintech-audit',
    client: 'VeriPay Global',
    industry: 'FinTech & Payments',
    serviceType: 'AI Automation & Compliance',
    title: 'Automating 45,000 Monthly Identity Verification Audits with 99.9% Precision',
    challenge: 'A 24-person manual compliance team was backlogged by 36+ hours verifying foreign business incorporation documents and PEP lists.',
    solution: 'Engineered an autonomous multi-modal audit agent combining OCR, Claude 3.7 vision, and direct API verification against 14 global corporate registries.',
    metrics: [
      { label: 'Review Latency', before: '36 Hours', after: '4.2 Minutes', highlight: '99.8% Faster' },
      { label: 'Annual Cost Saved', before: '$680,000/yr', after: '$95,000/yr', highlight: '$585k Saved' },
      { label: 'False Positives', before: '9.4%', after: '0.12%', highlight: '98.7% Drop' }
    ],
    tech: ['Claude 3.7 Sonnet', 'FastAPI', 'AWS Textract', 'PostgreSQL', 'Slack Webhooks'],
    quote: {
      text: 'Velnixatech didn’t just automate a task—they completely eliminated our operational scaling bottleneck overnight. Our compliance audit speed is now our number one sales weapon.',
      author: 'Marcus Lindqvist',
      title: 'VP of Compliance & Operations, VeriPay'
    }
  },
  {
    id: 'ecommerce-headless',
    client: 'Lumina Home & Living',
    industry: 'High-Volume D2C E-Commerce',
    serviceType: 'Bespoke Web Engineering',
    title: 'Architecting a Sub-Second Headless Web Platform Driving 4.2x Conversion Lift',
    challenge: 'A bloated legacy Shopify theme had an 8.2s mobile loading time, 64% cart abandonment, and poor organic search rankings.',
    solution: 'Rebuilt the frontend from scratch into a custom Next.js 15 + Tailwind CSS headless architecture with edge-cached product catalogs and instant 1-click checkout.',
    metrics: [
      { label: 'Mobile Load Time', before: '8.2s TTFB', after: '0.34s TTFB', highlight: '24x Faster' },
      { label: 'Checkout Conversion', before: '1.8%', after: '4.9%', highlight: '+172% Lift' },
      { label: 'Lighthouse Score', before: '34 / 100', after: '99 / 100', highlight: 'Flawless Grade' }
    ],
    tech: ['Next.js 15', 'Tailwind CSS', 'Shopify Storefront API', 'Cloudflare Edge', 'Vercel'],
    quote: {
      text: 'Our revenue per visitor jumped 68% in the first 30 days after Velnixatech shipped our new headless platform. It feels like moving from dial-up to fiber optic.',
      author: 'Elena Rostova',
      title: 'Chief Marketing Officer, Lumina Home'
    }
  },
  {
    id: 'saas-support-swarm',
    client: 'CloudKube Networks',
    industry: 'Developer Tools & Cloud Infrastructure',
    serviceType: 'Autonomous AI Agents',
    title: 'Autonomous Support Swarm Resolving 74% of Technical Tickets in 12 Seconds',
    challenge: 'Tier-1 developer questions on API endpoints and Kubernetes manifests overwhelmed engineering staff and burned out customer success teams.',
    solution: 'Built a private RAG agent swarm connected directly to GitHub repositories, documentation markdown, and live staging sandboxes to triage and generate verified code fixes.',
    metrics: [
      { label: 'First Response Time', before: '4.5 Hours', after: '12 Seconds', highlight: 'Instant Triage' },
      { label: 'Zero-Human Resolutions', before: '0%', after: '74.2%', highlight: 'Autonomous' },
      { label: 'Customer CSAT', before: '3.8 / 5.0', after: '4.91 / 5.0', highlight: 'Industry Best' }
    ],
    tech: ['Pinecone', 'LangGraph', 'GPT-4o', 'GitHub API', 'Zendesk'],
    quote: {
      text: 'Our senior engineers finally have time to build core product instead of answering repeat documentation questions. The Velnixatech swarm is shockingly accurate.',
      author: 'David Chen',
      title: 'Co-Founder & CTO, CloudKube'
    }
  }
];
