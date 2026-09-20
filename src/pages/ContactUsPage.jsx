import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ScrollReveal, { RevealItem, DeployCard } from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { 
  MapPin, Mail, Clock, Phone, ShieldCheck, Lock, CreditCard, 
  CheckCircle2, ArrowRight, Sparkles, Calendar, MessageSquare, Send
} from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Autonomous AI Agent Swarms',
    timeline: 'Immediate (Next 14 Days)',
    budget: '$10k - $25k',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <div className="bg-slate-50 border-b border-slate-200 pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: 'Company', href: '/' },
              { label: 'Contact Us' }
            ]} 
          />

          <ScrollReveal stagger={true} staggerDelay={0.08} className="mt-8 max-w-4xl">
            <RevealItem direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Engineering Lead Response SLA: Within 4 Business Hours</span>
              </div>
            </RevealItem>

            <RevealItem direction="up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                Connect Directly with Our Systems Architects.
              </h1>
            </RevealItem>

            <RevealItem direction="up">
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                Skip traditional sales reps. Submit your operational bottlenecks, infrastructure requirements, or platform ambitions to speak directly with our senior technical partners.
              </p>
            </RevealItem>
          </ScrollReveal>
        </div>
      </div>

      {/* Main 2-Column Hub */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Technical Brief Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our Lead Solutions Architect is reviewing your requirements for <strong className="text-slate-900">{formData.company || 'your organization'}</strong> and will follow up at <strong className="text-slate-900">{formData.email}</strong> within 4 business hours.
                  </p>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-3 max-w-md mx-auto">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-900" />
                      <span>Next in Our 48-Hour Protocol:</span>
                    </div>
                    <p>• Initial systems & data schema audit conducted by senior engineering team.</p>
                    <p>• Tailored architectural topology & ROI projection prepared.</p>
                    <p>• Private 30-minute Zoom briefing invitation dispatched.</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '', email: '', phone: '', company: '',
                        service: 'Autonomous AI Agent Swarms',
                        timeline: 'Immediate (Next 14 Days)',
                        budget: '$10k - $25k',
                        details: ''
                      });
                    }}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Initiate Architecture Review</h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">Fill out the parameters below to receive our technical blueprint.</p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Corporate Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="david@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Company Name / URL <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="company.com"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      />
                    </div>
                  </div>

                  {/* Primary Service Focus */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Primary Engineering Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                    >
                      <option value="Autonomous AI Agent Swarms">Autonomous AI Agent Swarms</option>
                      <option value="Bespoke Modern Web Engineering">Bespoke Modern Web Engineering (Next.js / Tailwind)</option>
                      <option value="Enterprise Pipeline & API Automations">Enterprise Pipeline & API Automations (n8n / Kafka)</option>
                      <option value="Private Enterprise RAG & Vector Intelligence">Private Enterprise RAG & Vector Intelligence</option>
                      <option value="Conversion UI/UX Systems">Conversion UI/UX Systems & Prototyping</option>
                      <option value="Cloud DevOps & High-Availability Scaling">Cloud DevOps & High-Availability Scaling</option>
                      <option value="Dedicated Full-Stack Retainer Pod">Dedicated Monthly AI + Web Retainer Pod</option>
                    </select>
                  </div>

                  {/* Timeline & Budget Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Target Deployment Window
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      >
                        <option value="Immediate (Next 14 Days)">Immediate (Next 14 Days)</option>
                        <option value="Within 30 Days">Within 30 Days</option>
                        <option value="Next Quarter (Q4/Q1)">Next Quarter (Q4/Q1)</option>
                        <option value="Exploratory Feasibility">Exploratory Feasibility</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Anticipated Investment Tier
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      >
                        <option value="$5k - $10k">$5k - $10k (Fixed-Scope Sprint)</option>
                        <option value="$10k - $25k">$10k - $25k (Multi-Agent Architecture)</option>
                        <option value="$25k - $50k">$25k - $50k (Enterprise Flagship)</option>
                        <option value="$50k+">$50k+ (Continuous Retainer Pod)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Details */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Describe your core bottlenecks or requirements
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="e.g. We spend 30 hours weekly manually extracting data from vendor PDFs into NetSuite. We need an autonomous parser and webhook pipeline to eliminate human latency..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white resize-none"
                    />
                  </div>

                  {/* Trust & Compliance Pill */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs text-slate-600">
                    <div className="flex items-center gap-2 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Strict Mutual NDA Protected. Zero data shared with third parties.</span>
                    </div>
                    <div className="text-[11px] text-slate-500 pl-6">
                      Registered Principal Office: 7901 4TH ST N STE 300 ST. PETERSBURG, FL 33702
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="xl"
                    isLoading={isSubmitting}
                    icon={Send}
                    className="w-full"
                  >
                    Submit Architecture Inquiry
                  </Button>

                  <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                    By submitting, you agree to our{' '}
                    <Link to="/terms" className="text-slate-700 font-medium underline hover:text-slate-900">
                      Terms of Service
                    </Link>{' '}
                    and acknowledge our{' '}
                    <Link to="/privacy" className="text-slate-700 font-medium underline hover:text-slate-900">
                      Privacy Policy
                    </Link>
                    . All card transactions & retainer contracts processed securely via Stripe with 3D Secure 2.0.
                  </p>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Right Column: Direct Corporate Information */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Headquarters Card */}
            <ScrollReveal direction="left" className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Principal Headquarters</span>
                <span className="text-xs text-emerald-400 font-mono">Verified Merchant</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">Velnixatech Technologies Inc.</div>
                    <div className="text-sm text-slate-300 font-medium mt-0.5">
                      7901 4TH ST N STE 300<br />
                      ST. PETERSBURG, FL 33702<br />
                      United States
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Core Hours:</span> Monday – Friday, 8:00 AM – 6:00 PM EST<br />
                    <span className="text-slate-400 text-[11px]">24/7 SRE Incident Monitoring for Retainer Clients</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Department Directory */}
            <ScrollReveal direction="left" delay={0.1} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Department Routing</h3>
              
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-slate-900 mb-0.5">Client Solutions & Architecture:</div>
                  <a href="mailto:solutions@velnixatech.com" className="text-slate-700 hover:text-slate-900 underline font-medium">
                    solutions@velnixatech.com
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">For new sprint scopes, SOW reviews, and architecture blueprints.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-slate-900 mb-0.5">Billing, Invoices & Stripe Merchant:</div>
                  <a href="mailto:billing@velnixatech.com" className="text-slate-700 hover:text-slate-900 underline font-medium">
                    billing@velnixatech.com
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">For retainer invoicing, payment receipts, and ACH/wire instructions.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-slate-900 mb-0.5">Legal, Security & Compliance:</div>
                  <a href="mailto:legal@velnixatech.com" className="text-slate-700 hover:text-slate-900 underline font-medium">
                    legal@velnixatech.com
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">For enterprise DPAs, SOC-2 requests, and mutual NDA execution.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Merchant Payment Assurance */}
            <ScrollReveal direction="left" delay={0.2} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-3">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-slate-900" />
                <span>Payment Rails & Compliance Verification</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                We accept Visa, Mastercard, American Express, Apple Pay, and ACH wire transfers. Zero raw card numbers are stored on our servers. Transactions are encrypted via 256-bit TLS and processed through Stripe (PCI-DSS Level 1).
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-slate-700 text-[10px]">Visa</span>
                <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-slate-700 text-[10px]">Mastercard</span>
                <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-slate-700 text-[10px]">Amex</span>
                <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-slate-700 text-[10px]">Stripe Verified</span>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </div>
  );
}
