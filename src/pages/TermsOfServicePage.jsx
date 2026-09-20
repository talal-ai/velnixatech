import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ScrollReveal, { RevealItem, DeployCard } from '../components/ui/ScrollReveal';
import { 
  FileText, ShieldCheck, CreditCard, RefreshCw, AlertCircle, 
  CheckCircle2, Scale, ArrowRight, Lock, DollarSign, Clock
} from 'lucide-react';
import Button from '../components/ui/Button';

export default function TermsOfServicePage({ onOpenConsultation }) {
  const lastUpdated = "September 20, 2026";

  const keyClauses = [
    {
      title: "100% Code Ownership",
      desc: "Full intellectual property and repository rights transfer to you upon final invoice settlement.",
      icon: ShieldCheck
    },
    {
      title: "PCI-DSS Level 1 Security",
      desc: "Processed via Stripe. Zero raw cardholder data stored on Velnixatech systems.",
      icon: Lock
    },
    {
      title: "Transparent Recurring Billing",
      desc: "Advance notices prior to retainer renewals with instant cancellation mechanisms.",
      icon: RefreshCw
    },
    {
      title: "Visa & Mastercard Aligned",
      desc: "Structured milestone acceptance, dispute protocols, and verified refund frameworks.",
      icon: CreditCard
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
              { label: 'Terms & Conditions' }
            ]} 
          />

          <ScrollReveal stagger={true} staggerDelay={0.08} className="mt-8 max-w-4xl">
            <RevealItem direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                <span>Commercial Master Terms v3.1 • Last Revised: {lastUpdated}</span>
              </div>
            </RevealItem>

            <RevealItem direction="up">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Master Terms of Service & Merchant Agreement
              </h1>
            </RevealItem>

            <RevealItem direction="up">
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                These Master Terms of Service govern all enterprise software engineering engagements, autonomous AI system deployments, web platform developments, and payment transactions conducted with Velnixatech Technologies Inc. Structured in strict alignment with card network merchant requirements (Visa, Mastercard, American Express) and Stripe Merchant Regulations.
              </p>
            </RevealItem>
          </ScrollReveal>

          {/* Key Clauses Badges */}
          <ScrollReveal stagger={true} staggerDelay={0.08} delay={0.1} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyClauses.map((clause, idx) => {
              const Icon = clause.icon;
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
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{clause.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{clause.desc}</p>
                  </div>
                </DeployCard>
              );
            })}
          </ScrollReveal>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sticky Table of Contents */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
                Contract Articles
              </span>
              <nav className="space-y-1 text-xs font-medium">
                <a href="#article-1" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">1. Scope of Engineering Services</a>
                <a href="#article-2" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">2. Payment Methods & Processing Terms</a>
                <a href="#article-3" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">3. Recurring Retainer Disclosures</a>
                <a href="#article-4" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">4. Cancellation, Refunds & Milestones</a>
                <a href="#article-5" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">5. Cardholder Security & PCI Compliance</a>
                <a href="#article-6" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">6. Chargeback & Dispute Procedures</a>
                <a href="#article-7" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">7. Intellectual Property & Code Ownership</a>
                <a href="#article-8" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">8. Warranty, SLAs & Hypercare</a>
                <a href="#article-9" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">9. Limitation of Liability</a>
                <a href="#article-10" className="block py-1.5 text-slate-600 hover:text-slate-900 transition-colors">10. Governing Law & Dispute Resolution</a>
              </nav>

              <div className="pt-6 border-t border-slate-200 mt-4">
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="w-full text-xs" 
                  onClick={onOpenConsultation}
                >
                  Schedule Commercial Review
                </Button>
              </div>
            </div>
          </div>

          {/* Legal Clauses Body */}
          <div className="lg:col-span-8 space-y-12 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            {/* Article 1 */}
            <section id="article-1" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Article 1: Scope of Engineering Services & SOW Execution
              </h2>
              <p className="mb-4">
                Velnixatech Technologies Inc. ("Company", "we", "our"), having its registered principal office at <strong>7901 4TH ST N STE 300 ST. PETERSBURG, FL 33702</strong>, provides bespoke software development, autonomous AI agent swarm orchestration, private RAG pipelines, API middleware integration, and high-velocity web platform engineering ("Services").
              </p>
              <p className="mb-4">
                Specific project scopes, deliverables, timelines, technical architectures, and financial consideration are executed via discrete Statements of Work ("SOW") or online subscription tiers that incorporate these Master Terms by reference.
              </p>
              <p>
                No verbal agreements or informal chat communications shall modify the specifications of an active SOW unless formalized through a written Change Order signed by authorized representatives of both parties.
              </p>
            </section>

            {/* Article 2 */}
            <section id="article-2" className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-5 h-5 text-slate-900" />
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Article 2: Payment Methods, Currencies & Processing Guidelines
                </h2>
              </div>
              <p className="mb-4 text-slate-600">
                In adherence to international card network merchant operating rules (Visa Core Rules, Mastercard Rules, Amex Merchant Regulations):
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">A. Accepted Payment Instruments:</strong>
                  We accept major credit and debit cards (Visa, Mastercard, American Express, Discover), corporate purchasing cards (p-cards), Apple Pay, and verified ACH/Wire bank transfers through our primary payment infrastructure provider, <strong>Stripe, Inc.</strong>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">B. Settlement Currency:</strong>
                  All quotes, fees, retainer invoices, and payment authorizations are denominated and transacted in <strong>United States Dollars (USD)</strong> unless an alternate currency is expressly stipulated in an approved enterprise SOW. Foreign transaction fees levied by client issuing banks are the sole responsibility of the cardholder.
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">C. Surcharge Policy:</strong>
                  In accordance with Visa and Mastercard cardholder rules, Velnixatech does not impose surcharge penalties on credit card payments in jurisdictions where prohibited by law.
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">D. Payment Terms for Milestone Sprints:</strong>
                  For fixed-scope deployments, payment is staged: 50% mobilization deposit due upon kickoff; 50% balance due upon demonstration and sign-off in the sandbox environment prior to live production cutover.
                </div>
              </div>
            </section>

            {/* Article 3 */}
            <section id="article-3" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Article 3: Recurring Retainer Disclosures & Auto-Renewal Policy
              </h2>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm mb-4">
                <strong>Mandatory Card Brand Disclosure:</strong> For recurring engineering retainer subscriptions (e.g., Growth Pod, Enterprise Autonomous Pod):
              </div>
              <ul className="space-y-3 list-disc list-inside text-slate-600 text-xs sm:text-sm">
                <li><strong>Billing Cadence:</strong> Retainers are billed in advance on either a monthly or annual recurring cycle as chosen during service enrollment.</li>
                <li><strong>Authorization for Continuous Charges:</strong> By entering payment details, the client explicitly authorizes Velnixatech to automatically debit the nominated payment method on the recurring billing anniversary date until cancellation is executed.</li>
                <li><strong>Advance Notice of Renewal:</strong> For annual retainer agreements, Velnixatech sends an explicit email reminder disclosing the upcoming renewal charge, amount, and cancellation procedure at least <strong>14 days prior</strong> to the scheduled billing date.</li>
                <li><strong>Receipts & Billing Records:</strong> An itemized electronic receipt and tax invoice are automatically generated and dispatched via email upon each successful billing transaction.</li>
              </ul>
            </section>

            {/* Article 4 */}
            <section id="article-4" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Article 4: Cancellation, Refund & Milestone Acceptance Policy
              </h2>
              <p className="mb-4">
                We structure our cancellation and refund protocols to provide commercial fairness while safeguarding bespoke engineering resource allocation:
              </p>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">A. Retainer Cancellation Procedure</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Clients may cancel or downgrade monthly recurring retainers at any time with <strong>14 days written notice</strong> prior to the next billing cycle. Access to the dedicated engineering pod continues through the conclusion of the paid billing interval. No partial prorated refunds are issued for unused hours within an active billing period.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">B. Fixed-Scope Sprint Refund Framework</h4>
                  <p className="text-slate-600 leading-relaxed">
                    The initial 50% mobilization deposit covers immediate architectural planning, VPC sandbox staging, and dedicated engineer allocation. Deposits are non-refundable once sprint kickoff occurs. If Velnixatech fails to deliver the agreed functional specifications in the sandbox environment following a 14-day remediation period, the client is relieved of the final 50% completion payment and granted a pro-rata refund of any unexpended engineering fees.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">C. 14-Day ROI Guarantee Conditions</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Where an SOW includes an explicit "14-Day Demonstrable ROI Guarantee", client must grant required API credentials, participate in scheduled discovery sessions, and review sandbox test runs within agreed SLAs. If demonstrable workflow automation is not achieved within agreed parameters, Velnixatech will continue engineering at zero labor charge until benchmarks are achieved.
                  </p>
                </div>
              </div>
            </section>

            {/* Article 5 */}
            <section id="article-5" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Article 5: Cardholder Data Security & PCI Compliance
              </h2>
              <p className="mb-4">
                To guarantee zero exposure of sensitive cardholder information:
              </p>
              <ul className="space-y-2 list-disc list-inside text-slate-600 text-xs sm:text-sm">
                <li>All checkout workflows utilize HTTPS with Transport Layer Security (TLS 1.3) and 256-bit AES encryption.</li>
                <li>Velnixatech relies on Stripe's PCI-DSS Level 1 certified hosted fields. Card data bypasses our web servers entirely and is tokenized at the browser level directly to Stripe's secure vault.</li>
                <li>We enforce 3D Secure 2.0 (3DS) authentication for European Economic Area (EEA) and UK cardholders under the Revised Payment Services Directive (PSD2).</li>
              </ul>
            </section>

            {/* Article 6 */}
            <section id="article-6" className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Article 6: Chargeback Prevention & Direct Dispute Resolution
                </h2>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                In conformity with the dispute resolution protocols enforced by Visa, Mastercard, and American Express:
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                <strong>Mandatory Direct Inquiry:</strong> Before initiating a chargeback, payment dispute, or reversal request with an issuing bank, the client agrees to contact Velnixatech Billing at <a href="mailto:billing@velnixatech.com" className="text-emerald-400 underline">billing@velnixatech.com</a> detailing the perceived grievance. We commit to a formal investigation and response within <strong>2 business days</strong>.
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Frivolous or fraudulent chargebacks initiated in violation of signed milestone acceptances will be defended with complete server telemetry, signed SOWs, IP access logs, and code repository commits, and may incur legal collection fees.
              </p>
            </section>

            {/* Article 7 */}
            <section id="article-7" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Article 7: Intellectual Property & 100% Code Ownership
              </h2>
              <p className="mb-4">
                Unlike traditional agency models that lease proprietary code, Velnixatech guarantees full technological autonomy:
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900">Custom Work Product Transfer:</strong> Upon full and final settlement of all milestone or retainer invoices, Velnixatech assigns all right, title, and intellectual property interest in the bespoke software, prompt graphs, integration pipelines, and custom designs created for the client.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900">Pre-Existing Frameworks:</strong> Velnixatech retains ownership of its background engineering libraries, generic workflow patterns, and open-source primitives, granting the client a perpetual, royalty-free, worldwide license to utilize, modify, and distribute such components as embedded within the delivered work product.
                </div>
              </div>
            </section>

            {/* Article 8 */}
            <section id="article-8" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Article 8: Production Warranty, SLAs & Hypercare
              </h2>
              <p className="mb-4 text-xs sm:text-sm text-slate-600">
                Every bespoke production deployment includes a standard <strong>30-Day Hypercare Warranty</strong> commencing upon live deployment. During this window, Velnixatech resolves critical severity software defects, API schema breaking changes, and regression bugs attributable to the delivered codebase at zero additional charge.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Ongoing uptime SLAs (99.99% infrastructure availability and 1-hour critical response guarantees) are maintained under active monthly engineering retainer pods.
              </p>
            </section>

            {/* Article 9 */}
            <section id="article-9" className="scroll-mt-32">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Article 9: Limitation of Liability
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT SHALL VELNIXATECH TECHNOLOGIES INC., ITS OFFICERS, DIRECTORS, OR ENGINEERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR THIRD-PARTY API DOWNTIME).
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                THE TOTAL AGGREGATE LIABILITY OF VELNIXATECH ARISING FROM OR RELATING TO ANY ENGAGEMENT SHALL NOT EXCEED THE TOTAL AGGREGATE FEES ACTUALLY PAID BY THE CLIENT TO VELNIXATECH UNDER THE SPECIFIC SOW AT ISSUE DURING THE TWELVE (12) MONTH PERIOD PRECEDING THE EVENT GIVING RISE TO LIABILITY.
              </p>
            </section>

            {/* Article 10 */}
            <section id="article-10" className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Article 10: Governing Law & Neutral Arbitration
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                These Terms of Service and all related SOWs shall be governed by, and construed in accordance with, the laws of the <strong>State of Delaware, United States</strong>, without regard to conflicts of law principles.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Any controversy or dispute that cannot be resolved through good-faith executive escalation within 30 days shall be resolved exclusively through confidential, binding commercial arbitration administered by the American Arbitration Association (AAA) or JAMS in Wilmington, Delaware.
              </p>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-1">
                <div><strong>Merchant Legal Entity:</strong> Velnixatech Technologies Inc.</div>
                <div><strong>Principal Registered Office:</strong> 7901 4TH ST N STE 300 ST. PETERSBURG, FL 33702</div>
                <div><strong>Billing & Inquiries:</strong> <a href="mailto:billing@velnixatech.com" className="text-slate-900 font-semibold underline">billing@velnixatech.com</a></div>
                <div><strong>General Counsel:</strong> <a href="mailto:legal@velnixatech.com" className="text-slate-900 font-semibold underline">legal@velnixatech.com</a></div>
                <div><strong>Formal Notice Address:</strong> 7901 4TH ST N STE 300 ST. PETERSBURG, FL 33702, Attn: Legal Department</div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
