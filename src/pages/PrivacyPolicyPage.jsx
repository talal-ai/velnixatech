import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ScrollReveal, { RevealItem, DeployCard } from '../components/ui/ScrollReveal';
import { 
  ShieldCheck, Lock, CreditCard, FileText, CheckCircle2, 
  HelpCircle, ArrowRight, ExternalLink, Globe, Server, RefreshCw
} from 'lucide-react';
import Button from '../components/ui/Button';

export default function PrivacyPolicyPage({ onOpenConsultation }) {
  const lastUpdated = "September 20, 2026";

  const securityBadges = [
    {
      title: "PCI-DSS Level 1 Certified",
      desc: "All card transactions processed via Stripe. Zero raw PAN or CVV stored on Velnix servers.",
      icon: ShieldCheck
    },
    {
      title: "Visa & Mastercard 3DS 2.0",
      desc: "Full support for Strong Customer Authentication (SCA) and Visa Secure / Identity Check.",
      icon: CreditCard
    },
    {
      title: "End-to-End 256-Bit TLS",
      desc: "Military-grade encryption in transit and AES-256 encryption at rest for all operational telemetry.",
      icon: Lock
    },
    {
      title: "GDPR & CCPA Aligned",
      desc: "Full rights for data access, portability, rectification, and erasure with strict opt-in models.",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <div className="bg-slate-50 border-b border-slate-200 pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: 'Legal & Compliance', href: '/' },
              { label: 'Privacy Policy' }
            ]} 
          />

          <ScrollReveal stagger={true} staggerDelay={0.08} className="mt-8 max-w-4xl">
            <RevealItem direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Global Privacy Standard v2.6 • Effective: {lastUpdated}</span>
              </div>
            </RevealItem>

            <RevealItem direction="up">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Privacy & Payment Data Protection Policy
              </h1>
            </RevealItem>

            <RevealItem direction="up">
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Velnixatech Technologies Inc. is committed to uncompromising data privacy, strict regulatory compliance, and seamless adherence to the security operating regulations established by major payment card networks including Visa, Mastercard, American Express, and our primary payment processor, Stripe.
              </p>
            </RevealItem>
          </ScrollReveal>

          {/* Compliance & Security Grid */}
          <ScrollReveal stagger={true} staggerDelay={0.08} delay={0.1} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <DeployCard
                  key={idx}
                  direction="up"
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{badge.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{badge.desc}</p>
                  </div>
                </DeployCard>
              );
            })}
          </ScrollReveal>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Quick Navigation Sidebar */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
                Policy Sections
              </span>
              <nav className="space-y-1 text-xs font-medium">
                <a href="#entity" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">1. Entity Identification & Scope</a>
                <a href="#payment-card-rules" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">2. Card Brand & Stripe Processing Rules</a>
                <a href="#data-collection" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">3. Information We Collect</a>
                <a href="#fraud-prevention" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">4. Fraud Detection & 3D Secure 2.0</a>
                <a href="#subprocessors" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">5. Authorized Sub-processors</a>
                <a href="#retention" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">6. Financial Record Retention</a>
                <a href="#rights" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">7. GDPR & CCPA/CPRA Consumer Rights</a>
                <a href="#security" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">8. Technical & Organizational Security</a>
                <a href="#contact" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">9. Contact Data Protection Officer</a>
              </nav>

              <div className="pt-6 border-t border-slate-200 mt-4">
                <div className="text-xs text-slate-500 mb-3">
                  Have compliance questions or need our Data Processing Addendum (DPA)?
                </div>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full text-xs" 
                  onClick={onOpenConsultation}
                >
                  Request Legal DPA
                </Button>
              </div>
            </div>
          </div>

          {/* Legal Text Body */}
          <div className="lg:col-span-8 space-y-12 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section id="entity" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                1. Entity Identification & Regulatory Scope
              </h2>
              <p className="mb-4">
                This Privacy and Payment Data Protection Policy governs the collection, processing, transmission, and protection of personal, corporate, and cardholder data by <strong>Velnixatech Technologies Inc.</strong> ("Velnixatech", "we", "us", or "our"), with registered principal office located at <strong>7901 4TH ST N STE 300 ST. PETERSBURG, FL 33702</strong>.
              </p>
              <p>
                This policy applies universally across all our digital properties, APIs, client staging portals, autonomous agent runtime environments, and payment interfaces. By accessing our services, entering into a Software Services Agreement, or submitting payment credentials, you acknowledge the terms established herein.
              </p>
            </section>

            {/* Section 2 */}
            <section id="payment-card-rules" className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-5 h-5 text-slate-900" />
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  2. Payment Card Brand & Stripe Operating Alignment
                </h2>
              </div>
              <p className="mb-4 text-slate-600">
                In strict compliance with the <strong>Visa Core Rules and Visa Product and Service Rules</strong>, the <strong>Mastercard Rules</strong>, the <strong>American Express Merchant Regulations</strong>, and the <strong>Payment Card Industry Data Security Standard (PCI-DSS)</strong>:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>Zero Primary Account Number (PAN) Storage:</strong> Velnixatech does not store, transmit, or process raw credit/debit card numbers, CVV/CVC codes, or magnetic stripe/chip data on any company servers, databases, or client-side storage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>PCI-DSS Certified Gateway:</strong> All payment intake elements are served through Stripe Elements or Stripe Checkout hosted sessions using client-side cryptographic tokenization. Stripe is certified as a PCI Service Provider Level 1.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>Tokenized Transaction Identifiers:</strong> We only store masked account representations (e.g., card brand, last four digits, expiry date) and encrypted customer tokens provided by Stripe strictly for invoice reconciliation, recurring billing, and chargeback defense.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>Currency & Price Transparency:</strong> All quotes, subscriptions, and milestones are billed in United States Dollars (USD) unless explicitly designated otherwise in a signed Master Services Agreement (MSA).</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="data-collection" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                3. Categories of Information We Collect
              </h2>
              <p className="mb-4">
                Depending on your interaction with Velnixatech, we collect and process the following categories of information:
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">A. Contact & Account Credentials</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Full legal name, corporate email address, telephone number, job title, company entity name, VAT/tax identification numbers, and physical billing address.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">B. Transaction & Billing Metadata</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Invoiced amounts, payment history, payment method brand (Visa, Mastercard, Amex, SEPA/ACH Wire), transaction timestamps, bank issuing country, and cryptographic Stripe charge IDs.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">C. Technical Telemetry & Security Diagnostics</h4>
                  <p className="text-xs sm:text-sm text-slate-600">IP addresses, browser type, operating system version, TLS cipher suite handshake metadata, API gateway response latencies, and threat telemetry utilized for anti-fraud detection.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">D. Client Project Data & AI Vector Embeddings</h4>
                  <p className="text-xs sm:text-sm text-slate-600">API schemas, database structures, documentation ingested into private RAG pipelines. <strong>Client data is strictly isolated within client-specific VPCs and is NEVER used to train public foundation models.</strong></p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="fraud-prevention" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                4. Fraud Detection, Risk Scoring & 3D Secure 2.0 (3DS)
              </h2>
              <p className="mb-4">
                To fulfill our compliance duties with card network security rules, we employ automated anti-fraud screening technologies, including <strong>Stripe Radar</strong>, machine learning risk engines, and <strong>3D Secure 2.0 (Visa Secure, Mastercard Identity Check)</strong>.
              </p>
              <p className="mb-4">
                During payment submission, transaction telemetry (including billing address verification via AVS, CVV verification, IP geolocation, and device fingerprints) is analyzed by the card issuing bank to authenticate cardholder identity and satisfy European Union Strong Customer Authentication (SCA) directives.
              </p>
              <p>
                If a transaction is flagged as suspected unauthorized card use or fraudulent behavior, it will be automatically declined, and the associated transaction attempt logged to satisfy anti-money laundering (AML) and counter-terrorist financing (CTF) statutory obligations.
              </p>
            </section>

            {/* Section 5 */}
            <section id="subprocessors" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                5. Authorized Sub-processors & Third-Party Gateways
              </h2>
              <p className="mb-4">
                We share data with verified third-party infrastructure providers under strict contractual data protection agreements (DPAs) featuring Standard Contractual Clauses (SCCs):
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Sub-processor</th>
                      <th className="p-3">Role & Function</th>
                      <th className="p-3">Data Location</th>
                      <th className="p-3">Security Standards</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Stripe, Inc.</td>
                      <td className="p-3">Payment processing, recurring billing, fraud mitigation</td>
                      <td className="p-3">USA / Global</td>
                      <td className="p-3">PCI-DSS Level 1, SOC-1/2</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Amazon Web Services (AWS)</td>
                      <td className="p-3">Cloud VPC hosting, database storage, serverless compute</td>
                      <td className="p-3">USA / EU Regions</td>
                      <td className="p-3">SOC-2, ISO 27001, HIPAA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Cloudflare, Inc.</td>
                      <td className="p-3">Edge CDN, DDoS mitigation, Web Application Firewall</td>
                      <td className="p-3">Global Edge</td>
                      <td className="p-3">SOC-2 Type II, PCI-DSS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Datadog & Sentry</td>
                      <td className="p-3">Application uptime telemetry, error diagnostics</td>
                      <td className="p-3">USA</td>
                      <td className="p-3">SOC-2 Type II</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section id="retention" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                6. Financial Record Retention & Card Dispute Compliance
              </h2>
              <p className="mb-4">
                Under federal tax codes, commercial accounting standards, and card network operating regulations (including the 120-day to 540-day dispute timeframe under Visa and Mastercard Core Rules), Velnixatech maintains transactional records, signed engagement contracts, invoices, and payment receipts for a statutory period of <strong>seven (7) years</strong> following the conclusion of the fiscal year in which the transaction took place.
              </p>
              <p>
                Non-transactional client operational logs, sandbox builds, and synthetic test payloads are expunged within <strong>90 days</strong> following client acceptance of final milestone deliverables.
              </p>
            </section>

            {/* Section 7 */}
            <section id="rights" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                7. Your Consumer & Data Subject Rights (GDPR / CCPA / CPRA)
              </h2>
              <p className="mb-4">
                Depending on your geographic residency, you are granted substantive legal rights regarding your personal information:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Right to Access & Portability</h4>
                  <p className="text-slate-600">Request a complete copy of the personal information we hold concerning your account in an interoperable, machine-readable format.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Right to Erasure ("To Be Forgotten")</h4>
                  <p className="text-slate-600">Request deletion of personal data, subject to statutory exceptions for tax, accounting, and anti-fraud recordkeeping.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Right to Rectification</h4>
                  <p className="text-slate-600">Demand prompt correction of inaccurate, incomplete, or out-of-date commercial contact and billing records.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Zero Sale of Personal Data</h4>
                  <p className="text-slate-600">Velnixatech never sells, leases, or monetizes client personal data to data brokers or advertising exchanges.</p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="security" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                8. Technical & Organizational Security Safeguards
              </h2>
              <p className="mb-4">
                We implement layered defense-in-depth security measures to protect client data from accidental loss, unauthorized access, alteration, and disclosure:
              </p>
              <ul className="space-y-2 list-disc list-inside text-slate-600">
                <li>Transport Layer Security (TLS 1.3) mandatory on all external and internal API interfaces.</li>
                <li>Strict Role-Based Access Control (RBAC) enforced via multi-factor authentication (MFA) and hardware security keys for engineering personnel.</li>
                <li>Quarterly automated vulnerability scanning and third-party penetration testing.</li>
                <li>Immediate security incident notification protocol to notify affected enterprise clients within 72 hours of any confirmed security compromise.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="contact" className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                9. Data Protection Officer & Regulatory Contact
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                If you have questions regarding this Privacy Policy, wish to exercise your statutory rights, or require an enterprise Data Processing Addendum (DPA) signed with standard contractual clauses, please reach out directly:
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div><strong>Legal Entity:</strong> Velnixatech Technologies Inc.</div>
                <div><strong>Registered Office Address:</strong> 7901 4TH ST N STE 300 ST. PETERSBURG, FL 33702</div>
                <div><strong>Attention:</strong> Privacy Office & Data Protection Officer</div>
                <div><strong>Inquiries Email:</strong> <a href="mailto:privacy@velnixatech.com" className="text-white underline hover:text-slate-200">privacy@velnixatech.com</a></div>
                <div><strong>Billing & Merchant Support:</strong> <a href="mailto:billing@velnixatech.com" className="text-white underline hover:text-slate-200">billing@velnixatech.com</a></div>
                <div><strong>Support Response SLA:</strong> Within 24-48 business hours</div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
