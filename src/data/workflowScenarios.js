export const WORKFLOW_SCENARIOS = [
  {
    id: 'inbound-lead',
    title: 'Inbound Revenue Engine',
    subtitle: 'Turns anonymous web traffic into qualified, enriched sales pipeline in 8.4 seconds',
    badge: 'Revenue Ops',
    speed: '8.4s end-to-end',
    efficiency: '96% qualification accuracy',
    nodes: [
      {
        id: 'trigger',
        step: '01',
        title: 'Lead Ingestion',
        system: 'Webhook / Form Stream',
        description: 'New enterprise prospect submits demo request or pricing inquiry on website.',
        status: 'Triggered',
        latency: '40ms',
        iconName: 'Zap',
        tag: 'Instant Listener'
      },
      {
        id: 'enrichment',
        step: '02',
        title: 'Multi-Source Enrichment',
        system: 'Velnix Agent + Data APIs',
        description: 'Queries Apollo, Crunchbase, and GitHub to extract firmographics, headcount & tech stack.',
        status: 'Processed',
        latency: '1.2s',
        iconName: 'Database',
        tag: 'Firmographics'
      },
      {
        id: 'reasoning',
        step: '03',
        title: 'Claude 3.7 ICP Scoring',
        system: 'Autonomous LLM Evaluator',
        description: 'Evaluates fit score (94/100). Synthesizes customized pain points & bespoke executive dossier.',
        status: 'Synthesized',
        latency: '2.8s',
        iconName: 'Cpu',
        tag: 'AI Reasoning'
      },
      {
        id: 'execution',
        step: '04',
        title: 'CRM Sync & Personalization',
        system: 'Salesforce + Slack + Resend',
        description: 'Syncs lead to CRM, routes to AE with meeting briefing, and sends bespoke personal reply.',
        status: 'Dispatched',
        latency: '420ms',
        iconName: 'Send',
        tag: 'Action Executed'
      }
    ],
    telemetry: {
      leadName: 'Sarah Jenkins, VP of Engineering',
      company: 'OmniGrid Cloud (Series B, 180 FTE)',
      icpScore: '96/100 (Tier 1 Strategic Enterprise)',
      actionTaken: 'Auto-scheduled with Senior Solutions Architect + Custom ROI Dossier Dispatched'
    }
  },
  {
    id: 'support-swarm',
    title: 'Autonomous Support Swarm',
    subtitle: 'Resolves 74% of tier-1 and tier-2 technical tickets with zero human intervention',
    badge: 'Customer Care',
    speed: '11.2s avg resolution',
    efficiency: '4.92 / 5.0 CSAT',
    nodes: [
      {
        id: 'ticket-in',
        step: '01',
        title: 'Omnichannel Ticket Ingest',
        system: 'Zendesk / Intercom / Email',
        description: 'User reports API rate limit errors and webhook timeout spikes on billing service.',
        status: 'Triggered',
        latency: '12ms',
        iconName: 'MessageSquare',
        tag: 'Inbound Event'
      },
      {
        id: 'triage',
        step: '02',
        title: 'Intent & Sentiment Triage',
        system: 'Velnix Triage Engine',
        description: 'Classifies issue category as Critical Infrastructure Bug. Extracts user account ID & session logs.',
        status: 'Classified',
        latency: '310ms',
        iconName: 'Filter',
        tag: 'Semantic Parse'
      },
      {
        id: 'rag-query',
        step: '03',
        title: 'Pinecone Vector RAG Query',
        system: 'Enterprise Knowledge Base',
        description: 'Retrieves internal patch guides, API docs, and prior solved engineering tickets.',
        status: 'Indexed',
        latency: '450ms',
        iconName: 'Layers',
        tag: 'Vector Context'
      },
      {
        id: 'remediation',
        step: '04',
        title: 'Self-Healing Solution & Reply',
        system: 'API Tool Dispatcher',
        description: 'Refreshes client webhook secret, increases rate bucket, and sends step-by-step resolution.',
        status: 'Resolved',
        latency: '890ms',
        iconName: 'CheckCircle2',
        tag: 'Zero-Human Loop'
      }
    ],
    telemetry: {
      ticketSubject: 'Webhook payload delivery failures on v2/checkout endpoint',
      rootCause: 'Expired secret key rotation combined with transient TLS handshake timeout',
      remedy: 'Key re-provisioned + webhook queue re-driven successfully',
      outcome: 'Customer marked issue solved in under 12 seconds'
    }
  },
  {
    id: 'financial-audit',
    title: 'Financial Document Reconciler',
    subtitle: 'Extracts, audits, and syncs complex vendor invoices & contracts directly into NetSuite',
    badge: 'FinOps AI',
    speed: '3.1s per multi-page invoice',
    efficiency: '99.98% audit accuracy',
    nodes: [
      {
        id: 'doc-ingest',
        step: '01',
        title: 'Multi-Modal Document Drop',
        system: 'S3 / Box / Inbound Email',
        description: 'Inbound PDF invoice (48 line items, multiple tax rates, multi-currency) uploaded.',
        status: 'Received',
        latency: '85ms',
        iconName: 'FileText',
        tag: 'Unstructured File'
      },
      {
        id: 'vision-parse',
        step: '02',
        title: 'Vision LLM Table Parser',
        system: 'Velnix Structured Extractor',
        description: 'Parses tabular line items, PO numbers, VAT IDs, and payment terms into strictly validated JSON.',
        status: 'Extracted',
        latency: '1.4s',
        iconName: 'ScanLine',
        tag: 'Vision OCR'
      },
      {
        id: 'po-match',
        step: '03',
        title: 'ERP Cross-Matching',
        system: 'NetSuite / QuickBooks API',
        description: 'Checks for duplicate invoice IDs, confirms receipt of goods, and flags 0 variances.',
        status: 'Validated',
        latency: '620ms',
        iconName: 'ShieldCheck',
        tag: '3-Way Match'
      },
      {
        id: 'approval',
        step: '04',
        title: 'Ledger Post & Batch Pay',
        system: 'Automated Treasury Ledger',
        description: 'Posts journal entry, tags cost center, and schedules optimal payment run to capture 2% discount.',
        status: 'Booked',
        latency: '340ms',
        iconName: 'Coins',
        tag: 'Treasury Booked'
      }
    ],
    telemetry: {
      vendor: 'Datadog Enterprise Cloud Infrastructure',
      invoiceTotal: '$42,850.00 USD (Net 30)',
      discrepancyCheck: 'Passed (0.00 variance with PO-88291)',
      savingsCaptured: '$857.00 early-pay discount automatically secured'
    }
  },
  {
    id: 'web-platform',
    title: 'High-Velocity Web Platform',
    subtitle: 'Sub-50ms edge-rendered web applications with built-in conversion psychology',
    badge: 'Web Engineering',
    speed: '38ms Edge TTFB',
    efficiency: '4.2x mobile conversion uplift',
    nodes: [
      {
        id: 'edge-hit',
        step: '01',
        title: 'Global Edge Ingestion',
        system: 'Cloudflare / Vercel Edge',
        description: 'Visitor connects from Tokyo, London, or San Francisco with zero geographical lag.',
        status: 'Routed',
        latency: '14ms',
        iconName: 'Globe',
        tag: 'Anycast DNS'
      },
      {
        id: 'intent-tailoring',
        step: '02',
        title: 'Dynamic Personalization',
        system: 'Edge Middleware',
        description: 'Adapts headline, currency, case studies, and social proof based on visitor industry context.',
        status: 'Personalized',
        latency: '18ms',
        iconName: 'Sliders',
        tag: 'Edge Compute'
      },
      {
        id: 'hydration',
        step: '03',
        title: 'Ultra-Light React Hydration',
        system: 'Vite / Tailwind CSS Core',
        description: 'Zero unused JavaScript bundles. 100/100 Lighthouse score across performance, SEO & a11y.',
        status: 'Rendered',
        latency: '22ms',
        iconName: 'Gauge',
        tag: 'Core Web Vitals'
      },
      {
        id: 'conversion',
        step: '04',
        title: 'Frictionless Conversion Hook',
        system: 'Live Interactive Widget Suite',
        description: 'Interactive ROI estimator & smart discovery booking flows convert 320% more high-intent visitors.',
        status: 'Converted',
        latency: 'Real-Time',
        iconName: 'TrendingUp',
        tag: 'Conversion Lift'
      }
    ],
    telemetry: {
      performanceScore: 'Lighthouse 100/100 Mobile & Desktop',
      firstContentfulPaint: '0.28 seconds',
      conversionRate: '8.4% (Industry baseline: 1.8%)',
      bounceRate: 'Dropped from 52% to 18%'
    }
  }
];
