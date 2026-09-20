export const SERVICES = [
  {
    id: 'autonomous-agents',
    title: 'Autonomous AI Agent Swarms',
    category: 'AI Automations',
    eyebrow: 'Agentic Workflows',
    description: 'We architect multi-agent systems that research, synthesize, decide, and execute complex multi-step workflows without human bottlenecks.',
    highlights: [
      'Autonomous research, qualification & outreach swarms',
      'Human-in-the-loop escalation guards & security tripwires',
      'Multi-modal LLM reasoning (Claude 3.7 Sonnet, GPT-4o, DeepSeek R1)',
      'Deterministic tool calling with stateful memory architectures'
    ],
    tech: ['LangChain', 'CrewAI', 'LlamaIndex', 'Python', 'FastAPI'],
    metric: '92% reduction in manual coordination overhead',
    featured: true,
    accentColor: 'from-indigo-500 to-violet-600',
    icon: 'Bot'
  },
  {
    id: 'web-engineering',
    title: 'Bespoke Modern Web Engineering',
    category: 'Web Services',
    eyebrow: 'Full-Stack Performance',
    description: 'We engineer elite, custom web applications and marketing flagships designed for sub-second loading, flawless responsiveness, and maximum conversion psychology.',
    highlights: [
      'Next.js 15, React 19, Vite, and high-performance Tailwind systems',
      'Headless CMS integrations (Sanity, Strapi, Contentful)',
      'Ultra-clean Poppins & custom design system architectures',
      'Sub-50ms edge rendering and 100/100 Core Web Vitals'
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Cloudflare'],
    metric: '3.4x average increase in visitor-to-demo conversion',
    featured: true,
    accentColor: 'from-blue-600 to-cyan-500',
    icon: 'Globe'
  },
  {
    id: 'enterprise-integrations',
    title: 'Enterprise Pipeline & API Automations',
    category: 'AI Automations',
    eyebrow: 'Zero-Latency Glue',
    description: 'Connect your ERP, CRM, databases, and communication channels into a unified, self-healing event-driven ecosystem.',
    highlights: [
      'Self-hosted n8n & custom serverless webhook routers',
      'Bi-directional sync between Salesforce, HubSpot, Stripe & NetSuite',
      'Automatic retry queues with dead-letter monitoring',
      'SOC-2 and GDPR compliant enterprise encryption'
    ],
    tech: ['n8n', 'Zapier Enterprise', 'PostgreSQL', 'Redis', 'AWS Lambda'],
    metric: 'Zero data sync drift across 500k+ monthly transactions',
    featured: false,
    accentColor: 'from-emerald-500 to-teal-600',
    icon: 'Cpu'
  },
  {
    id: 'rag-knowledge-bases',
    title: 'Private Enterprise RAG & Vector Intelligence',
    category: 'AI Automations',
    eyebrow: 'Semantic Intelligence',
    description: 'Empower your company with a unified cognitive brain that indexes internal documents, Slack, Notion, and codebases with military-grade privacy.',
    highlights: [
      'Hybrid semantic vector search with re-ranking (Cohere / BGE)',
      'Zero hallucination guarantees with strict citation tracking',
      'Role-based access control (RBAC) at the embedding level',
      'On-premise or private VPC deployments (Pinecone, pgvector, Qdrant)'
    ],
    tech: ['Pinecone', 'pgvector', 'Milvus', 'LangSmith', 'OpenAI'],
    metric: 'Instant answers across 50,000+ proprietary internal PDFs',
    featured: false,
    accentColor: 'from-purple-500 to-indigo-600',
    icon: 'Database'
  },
  {
    id: 'conversion-design',
    title: 'Conversion UI/UX Systems & Prototyping',
    category: 'Web Services',
    eyebrow: 'Human-Centric UX',
    description: 'We merge cognitive science, visual elegance, and accessibility into intuitive digital interfaces that turn cold visitors into lifelong customers.',
    highlights: [
      'Complete modular Figma & Tailwind UI component libraries',
      'Micro-interactions and fluid motion without frame drops',
      'Strict WCAG 2.1 AA accessibility and contrast standards',
      'A/B testing architecture & heatmapped funnel analytics'
    ],
    tech: ['Figma', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Storybook'],
    metric: '48% drop in bounce rate on redesigned interfaces',
    featured: false,
    accentColor: 'from-pink-500 to-rose-600',
    icon: 'Sparkles'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud DevOps & High-Availability Scaling',
    category: 'Web Services',
    eyebrow: 'Bulletproof Infrastructure',
    description: 'Production-ready cloud architecture designed to withstand viral traffic surges, distributed DDoS attacks, and mission-critical uptime requirements.',
    highlights: [
      'Infrastructure as Code (Terraform, Pulumi, Docker)',
      'Edge CDN acceleration with geo-distributed routing',
      'Automated CI/CD pipelines with zero-downtime blue/green deploys',
      '24/7 Datadog & Sentry telemetry with automated failover'
    ],
    tech: ['AWS', 'Vercel', 'Docker', 'Terraform', 'Datadog'],
    metric: '99.99% uptime guaranteed under production SLAs',
    featured: false,
    accentColor: 'from-amber-500 to-orange-600',
    icon: 'ShieldCheck'
  }
];

export const SERVICE_CATEGORIES = [
  'All Solutions',
  'AI Automations',
  'Web Services'
];
