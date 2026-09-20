export const FAQ_CATEGORIES = ['All', 'AI Automations', 'Web Services', 'Security & Privacy', 'Working Together'];

export const FAQS = [
  {
    category: 'AI Automations',
    question: 'How do you prevent AI hallucinations in automated business workflows?',
    answer: 'We employ a deterministic multi-stage guardrail system. First, all outputs are constrained to rigid JSON schemas with Pydantic/Zod validators. Second, we utilize multi-agent verification where a second referee model reviews claims against source documents. Third, for mission-critical actions exceeding defined confidence thresholds or financial limits, we enforce human-in-the-loop review triggers.'
  },
  {
    category: 'AI Automations',
    question: 'Can you integrate with our legacy on-premise software and custom internal APIs?',
    answer: 'Yes. We frequently integrate modern AI pipelines with legacy databases (Oracle, DB2, on-prem SQL Server), custom REST/SOAP endpoints, and internal tools. We can deploy edge agent runners inside your private VPC or on-premise networks with outbound-only secure websockets.'
  },
  {
    category: 'Web Services',
    question: 'Why choose custom Next.js/Tailwind web engineering over templates or Webflow?',
    answer: 'While templates and site builders work for hobby projects, scaling companies hit severe ceilings in performance, SEO control, dynamic personalisation, and custom app integration. Our custom web engineering delivers sub-50ms Time-to-First-Byte, 100/100 Core Web Vitals, full source code ownership, and interactive product simulation engines that drive 3-4x higher conversion.'
  },
  {
    category: 'Security & Privacy',
    question: 'Is our corporate and customer data safe from training public AI models?',
    answer: 'Absolutely. We use enterprise zero-data-retention APIs from OpenAI, Anthropic, and AWS Bedrock where contractual agreements guarantee that customer data is never used for training or fine-tuning public models. Furthermore, all data in transit is encrypted with TLS 1.3, and data at rest utilizes AES-256.'
  },
  {
    category: 'Working Together',
    question: 'How quickly can our team see the first automated pipeline in production?',
    answer: 'For our Automation Sprint engagement, we deploy the initial functioning end-to-end prototype within 7 to 10 days of the discovery audit. Following rapid internal staging and stress testing, the production deployment typically occurs within 14 to 21 business days.'
  },
  {
    category: 'Working Together',
    question: 'Who owns the intellectual property and code created during the engagement?',
    answer: 'You do. 100% of all custom code, prompt templates, API connectors, database schemas, and design systems belong exclusively to your company under our standard master services agreement.'
  }
];
