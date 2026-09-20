export const SERVICES = [
  {
    id: 'autonomous-agents',
    title: 'Autonomous AI Agent Swarms',
    category: 'AI Automations',
    eyebrow: 'Agentic Workflows',
    description: 'We architect multi-agent systems that research, synthesize, decide, and execute complex multi-step workflows without human bottlenecks.',
    longDescription: 'Our autonomous AI swarms represent the bleeding edge of enterprise automation. We do not just build single-prompt bots; we engineer deterministic, self-healing networks of specialized agents that collaborate to solve complex, multi-step business problems. Using advanced stateful memory architectures and secure tool-calling, these agents autonomously perform deep research, orchestrate outreach, analyze datasets, and execute decisions within your defined safety guardrails.',
    highlights: [
      'Autonomous research, qualification & outreach swarms',
      'Human-in-the-loop escalation guards & security tripwires',
      'Multi-modal LLM reasoning (Claude 3.7 Sonnet, GPT-4o)',
      'Deterministic tool calling with stateful memory architectures'
    ],
    tech: ['LangChain', 'CrewAI', 'LlamaIndex', 'Python', 'FastAPI'],
    metric: '92% reduction in manual coordination overhead',
    featured: true,
    icon: 'Bot',
    architecture: {
      title: 'Agentic Swarm Topology',
      description: 'A robust, multi-agent orchestration layer that isolates tasks, shares context securely, and relies on human-in-the-loop approval for high-risk operations.',
      steps: [
        { name: 'Intake & Orchestration', detail: 'A primary router agent classifies intent and delegates tasks to sub-agents.' },
        { name: 'Research & Context', detail: 'Specialized agents gather data via APIs, RAG, and web scraping.' },
        { name: 'Execution & Tool Use', detail: 'Agents execute deterministic API calls to internal systems.' },
        { name: 'Human-in-the-Loop', detail: 'Critical decisions are paused for human review before final execution.' }
      ]
    },
    useCases: [
      { industry: 'B2B SaaS', scenario: 'Automated Account Research & Personalized Outreach generation.' },
      { industry: 'FinTech', scenario: 'Autonomous compliance auditing and anomaly detection across transaction logs.' },
      { industry: 'E-Commerce', scenario: 'Dynamic supply chain optimization and multi-vendor coordination.' }
    ],
    faqs: [
      { q: 'How do you prevent agents from hallucinating actions?', a: 'We use strict Pydantic JSON schemas and a dedicated Referee agent that verifies all proposed actions against source data before execution.' },
      { q: 'Can humans override agent decisions?', a: 'Yes. We implement human-in-the-loop (HITL) checkpoints for any action deemed high-risk or irreversible (e.g., sending emails, deleting records).' }
    ],
    testimonial: {
      quote: 'The agent swarm completely replaced our manual lead qualification team, increasing throughput by 10x without compromising accuracy.',
      author: 'Sarah J.',
      role: 'VP of RevOps'
    }
  },
  {
    id: 'web-engineering',
    title: 'Bespoke Modern Web Engineering',
    category: 'Web Services',
    eyebrow: 'Full-Stack Performance',
    description: 'We engineer elite, custom web applications and marketing flagships designed for sub-second loading, flawless responsiveness, and maximum conversion.',
    longDescription: 'In todays digital landscape, speed is revenue. We engineer high-velocity, edge-rendered web platforms that load instantly and perform flawlessly under extreme traffic. Moving away from monolithic legacy CMSs, we build composable, headless architectures utilizing Next.js, React, and global edge networks. This ensures 100/100 Core Web Vitals, enterprise-grade SEO, and a completely uncompromised user experience.',
    highlights: [
      'Next.js 15, React 19, Vite, and high-performance Tailwind systems',
      'Headless CMS integrations (Sanity, Strapi, Contentful)',
      'Ultra-clean Poppins & custom design system architectures',
      'Sub-50ms edge rendering and 100/100 Core Web Vitals'
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Cloudflare'],
    metric: '3.4x average increase in visitor-to-demo conversion',
    featured: true,
    icon: 'Globe',
    architecture: {
      title: 'Global Edge Architecture',
      description: 'A decoupled, headless architecture ensuring maximum performance, global CDN distribution, and infinite scalability.',
      steps: [
        { name: 'Headless Data Layer', detail: 'Content is managed in a decoupled CMS like Sanity or Contentful.' },
        { name: 'Static & Serverless Generation', detail: 'Next.js generates pages at build time or on-demand via serverless functions.' },
        { name: 'Global Edge CDN', detail: 'Assets are cached globally on Cloudflare or Vercel Edge networks.' },
        { name: 'Client Hydration', detail: 'React hydrates interactive components seamlessly without blocking the main thread.' }
      ]
    },
    useCases: [
      { industry: 'Enterprise B2B', scenario: 'High-converting marketing flagships with dynamic localization.' },
      { industry: 'HealthTech', scenario: 'HIPAA-compliant patient portals with real-time websocket updates.' },
      { industry: 'Media & Publishing', scenario: 'High-traffic editorial sites capable of handling viral surges.' }
    ],
    faqs: [
      { q: 'Do you use page builders like Elementor or Webflow?', a: 'No. We custom-code all platforms using Next.js and React to guarantee sub-50ms load times and complete architectural freedom.' },
      { q: 'How is content managed?', a: 'We integrate headless CMS platforms (like Sanity or Contentful) allowing your marketing team to edit content visually without touching code.' }
    ],
    testimonial: {
      quote: 'Our bounce rate plummeted by 40% immediately after launching the new Next.js architecture. The speed is unbelievable.',
      author: 'Marcus V.',
      role: 'CMO'
    }
  },
  {
    id: 'enterprise-integrations',
    title: 'Enterprise Pipeline & API Automations',
    category: 'AI Automations',
    eyebrow: 'Zero-Latency Glue',
    description: 'Connect your ERP, CRM, databases, and communication channels into a unified, self-healing event-driven ecosystem.',
    longDescription: 'Data silos are the enemy of scale. We architect robust, bi-directional API pipelines that synchronize your entire software stack in real-time. Whether it is connecting Salesforce to NetSuite or triggering complex n8n webhooks from Stripe events, we build resilient integration layers featuring automatic retry queues, dead-letter monitoring, and SOC-2 compliant encryption.',
    highlights: [
      'Self-hosted n8n & custom serverless webhook routers',
      'Bi-directional sync between Salesforce, HubSpot, Stripe & NetSuite',
      'Automatic retry queues with dead-letter monitoring',
      'SOC-2 and GDPR compliant enterprise encryption'
    ],
    tech: ['n8n', 'Zapier Enterprise', 'PostgreSQL', 'Redis', 'AWS Lambda'],
    metric: 'Zero data sync drift across 500k+ monthly transactions',
    featured: false,
    icon: 'Cpu',
    architecture: {
      title: 'Event-Driven Pipeline',
      description: 'A resilient middleware architecture that routes data asynchronously, ensuring zero data loss during vendor outages.',
      steps: [
        { name: 'Event Ingestion', detail: 'Webhooks are securely ingested via API Gateway.' },
        { name: 'Message Queueing', detail: 'Payloads are queued in Kafka or SQS for asynchronous processing.' },
        { name: 'Transformation & Mapping', detail: 'Serverless workers transform data schemas in transit.' },
        { name: 'Destination Delivery', detail: 'Data is pushed to destination systems with exponential backoff retries.' }
      ]
    },
    useCases: [
      { industry: 'SaaS', scenario: 'Automated billing-to-CRM synchronization and provisioning.' },
      { industry: 'Logistics', scenario: 'Real-time fleet tracking data routed to warehouse ERPs.' },
      { industry: 'E-Commerce', scenario: 'Multi-channel inventory sync across Shopify, Amazon, and 3PLs.' }
    ],
    faqs: [
      { q: 'What happens if a third-party API goes down?', a: 'Our middleware uses dead-letter queues and exponential backoff. Events are stored and automatically retried once the API is restored.' },
      { q: 'Is our data secure in transit?', a: 'Yes. All data is encrypted at rest and in transit, and we can deploy the middleware inside your own private AWS/GCP VPC.' }
    ],
    testimonial: {
      quote: 'We used to have 3 people manually reconciling Stripe and NetSuite daily. Now it happens instantly with zero errors.',
      author: 'David L.',
      role: 'Director of Finance'
    }
  },
  {
    id: 'rag-knowledge-bases',
    title: 'Private Enterprise RAG & Vector Intelligence',
    category: 'AI Automations',
    eyebrow: 'Semantic Intelligence',
    description: 'Empower your company with a unified cognitive brain that indexes internal documents, Slack, Notion, and codebases with military-grade privacy.',
    longDescription: 'Transform your proprietary data into an interactive cognitive engine. We build custom Retrieval-Augmented Generation (RAG) systems that allow you to "chat" securely with your companys entire knowledge base. Utilizing hybrid semantic search (dense vectors + BM25), strict role-based access controls, and citation tracking, we ensure precise answers with zero hallucinations—deployed entirely within your private VPC.',
    highlights: [
      'Hybrid semantic vector search with re-ranking (Cohere / BGE)',
      'Zero hallucination guarantees with strict citation tracking',
      'Role-based access control (RBAC) at the embedding level',
      'On-premise or private VPC deployments (Pinecone, pgvector)'
    ],
    tech: ['Pinecone', 'pgvector', 'Milvus', 'LangSmith', 'OpenAI'],
    metric: 'Instant answers across 50,000+ proprietary internal PDFs',
    featured: false,
    icon: 'Database',
    architecture: {
      title: 'Secure RAG Topology',
      description: 'A secure, multi-stage retrieval architecture guaranteeing hallucination-free generation and strict data privacy.',
      steps: [
        { name: 'Document Ingestion', detail: 'Secure parsing of PDFs, Confluence, and databases into text chunks.' },
        { name: 'Vector Embedding', detail: 'Text is embedded using high-dimensional models and stored in a vector DB.' },
        { name: 'Hybrid Retrieval', detail: 'Queries retrieve context using semantic similarity and keyword matching.' },
        { name: 'Grounded Generation', detail: 'LLM synthesizes the answer purely from retrieved context with citations.' }
      ]
    },
    useCases: [
      { industry: 'Legal', scenario: 'Instant semantic search and clause comparison across thousands of contracts.' },
      { industry: 'Customer Success', scenario: 'Automated resolution of complex L2 support tickets using internal docs.' },
      { industry: 'Engineering', scenario: 'AI-assisted code onboarding and architectural documentation querying.' }
    ],
    faqs: [
      { q: 'Will our proprietary data be used to train public AI models?', a: 'Absolutely not. We use zero-retention API policies and private embeddings so your data never trains foundational models.' },
      { q: 'How do you handle user permissions?', a: 'We apply RBAC (Role-Based Access Control) filters at the vector database level, ensuring users only retrieve documents they are authorized to see.' }
    ],
    testimonial: {
      quote: 'Our support team resolution time dropped by 65%. The RAG system finds the exact engineering document in seconds.',
      author: 'Elena T.',
      role: 'Head of Customer Success'
    }
  },
  {
    id: 'conversion-design',
    title: 'Conversion UI/UX Systems & Prototyping',
    category: 'Web Services',
    eyebrow: 'Human-Centric UX',
    description: 'We merge cognitive science, visual elegance, and accessibility into intuitive digital interfaces that turn cold visitors into lifelong customers.',
    longDescription: 'Design is not just aesthetics; it is the architecture of user behavior. We engineer premium, high-conversion user interfaces rooted in cognitive psychology and industry-standard design systems. From wireframing to high-fidelity Figma prototypes and fully-coded Tailwind libraries, we deliver digital experiences that build immense trust, reduce cognitive load, and drastically improve funnel conversion rates.',
    highlights: [
      'Complete modular Figma & Tailwind UI component libraries',
      'Micro-interactions and fluid motion without frame drops',
      'Strict WCAG 2.1 AA accessibility and contrast standards',
      'A/B testing architecture & heatmapped funnel analytics'
    ],
    tech: ['Figma', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Storybook'],
    metric: '48% drop in bounce rate on redesigned interfaces',
    featured: false,
    icon: 'Sparkles',
    architecture: {
      title: 'Design System Engineering',
      description: 'A rigorous, component-driven design protocol bridging the gap between Figma and production code.',
      steps: [
        { name: 'Design Tokens', detail: 'Establishing scalable typography, color palettes, and spacing primitives.' },
        { name: 'Component Library', detail: 'Building atomic UI components in Figma and mirroring in React/Tailwind.' },
        { name: 'Interaction Design', detail: 'Choreographing purposeful micro-interactions and transitions.' },
        { name: 'Accessibility Audit', detail: 'Ensuring strict WCAG compliance and screen-reader support.' }
      ]
    },
    useCases: [
      { industry: 'SaaS Platforms', scenario: 'Revamping complex administrative dashboards to reduce churn.' },
      { industry: 'B2B Marketing', scenario: 'Designing highly persuasive landing pages optimized for lead capture.' },
      { industry: 'Consumer Apps', scenario: 'Creating fluid, native-feeling progressive web applications (PWAs).' }
    ],
    faqs: [
      { q: 'Do we get ownership of the Figma files?', a: 'Yes, 100%. Upon completion, the entire Figma project and design system is transferred to your organization.' },
      { q: 'Do you follow accessibility standards?', a: 'We strictly adhere to WCAG 2.1 AA standards, ensuring high contrast, screen-reader compatibility, and keyboard navigation.' }
    ],
    testimonial: {
      quote: 'The redesign didnt just look better—it converted better. We saw a 30% uplift in signups within the first week.',
      author: 'Kevin R.',
      role: 'Product Lead'
    }
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud DevOps & High-Availability Scaling',
    category: 'Web Services',
    eyebrow: 'Bulletproof Infrastructure',
    description: 'Production-ready cloud architecture designed to withstand viral traffic surges, distributed DDoS attacks, and mission-critical uptime requirements.',
    longDescription: 'Enterprise platforms require enterprise resilience. We architect and deploy highly available cloud infrastructures using Infrastructure as Code (IaC) principles. Whether deploying serverless container clusters on AWS, configuring edge CDNs, or establishing automated CI/CD deployment pipelines, we guarantee your applications remain online, secure, and blazing fast under any load.',
    highlights: [
      'Infrastructure as Code (Terraform, Pulumi, Docker)',
      'Edge CDN acceleration with geo-distributed routing',
      'Automated CI/CD pipelines with zero-downtime blue/green deploys',
      '24/7 Datadog & Sentry telemetry with automated failover'
    ],
    tech: ['AWS', 'Vercel', 'Docker', 'Terraform', 'Datadog'],
    metric: '99.99% uptime guaranteed under production SLAs',
    featured: false,
    icon: 'ShieldCheck',
    architecture: {
      title: 'High-Availability Cloud Topology',
      description: 'A multi-zone, auto-scaling architecture engineered for fault tolerance and zero-downtime deployments.',
      steps: [
        { name: 'Infrastructure as Code', detail: 'Terraform provisions repeatable, immutable environments.' },
        { name: 'CI/CD Pipeline', detail: 'GitHub Actions automatically test, build, and deploy container images.' },
        { name: 'Load Balancing', detail: 'Traffic is routed across multi-AZ container clusters via ALB.' },
        { name: 'Observability', detail: 'Datadog and Sentry monitor logs, metrics, and traces in real-time.' }
      ]
    },
    useCases: [
      { industry: 'Enterprise', scenario: 'Migrating legacy monoliths to scalable, containerized microservices.' },
      { industry: 'E-Commerce', scenario: 'Auto-scaling infrastructure to handle massive Black Friday traffic spikes.' },
      { industry: 'FinTech', scenario: 'Secure, isolated VPC deployments meeting strict regulatory compliance.' }
    ],
    faqs: [
      { q: 'Can you work with our existing AWS infrastructure?', a: 'Yes. We often audit, refactor, and migrate existing cloud setups using Terraform to ensure compliance and scalability.' },
      { q: 'How do you handle deployment downtime?', a: 'We utilize blue/green or canary deployment strategies via CI/CD pipelines, ensuring absolutely zero downtime for users.' }
    ],
    testimonial: {
      quote: 'We survived our biggest traffic spike of the year without a single dropped request. The autoscaling was flawless.',
      author: 'Amanda P.',
      role: 'CTO'
    }
  }
];

export const SERVICE_CATEGORIES = [
  'All Solutions',
  'AI Automations',
  'Web Services'
];
