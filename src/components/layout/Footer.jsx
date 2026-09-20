import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Github, Twitter, Linkedin, ShieldCheck, Lock, CreditCard, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import VelnixLogo from '../ui/VelnixLogo';

export default function Footer({ onOpenConsultation }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  return (
    <footer className="bg-white border-t border-slate-200/90 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-100">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="cursor-pointer inline-block">
              <VelnixLogo size={42} />
            </Link>

            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              We design, build, and deploy autonomous AI systems, enterprise workflow orchestrators, and high-velocity web platforms for market leaders.
            </p>

            {/* Live System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-800">All Systems Operational</span>
              <span className="text-slate-400 font-mono text-[11px]">(99.99%)</span>
            </div>

            <div className="flex items-start gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>7901 4TH ST N STE 300 ST. PETERSBURG, FL 33702</span>
            </div>

            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: AI Automations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              AI Automations
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-500">
              <li><Link to="/services/autonomous-agents" className="hover:text-slate-900 transition-colors">Autonomous Agent Swarms</Link></li>
              <li><Link to="/services/enterprise-integrations" className="hover:text-slate-900 transition-colors">Enterprise Webhook Routers</Link></li>
              <li><Link to="/services/rag-knowledge-bases" className="hover:text-slate-900 transition-colors">Private RAG & Knowledge Bases</Link></li>
              <li><Link to="/services/autonomous-agents" className="hover:text-slate-900 transition-colors">Financial Document Intelligence</Link></li>
              <li><Link to="/services/enterprise-integrations" className="hover:text-slate-900 transition-colors">CRM & ERP Bi-Directional Sync</Link></li>
              <li><Link to="/services/autonomous-agents" className="hover:text-slate-900 transition-colors">Customer Care 24/7 Swarms</Link></li>
            </ul>
          </div>

          {/* Col 3: Web Engineering */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Web Services
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-500">
              <li><Link to="/services/web-engineering" className="hover:text-slate-900 transition-colors">Next.js 15 Flagships</Link></li>
              <li><Link to="/services/web-engineering" className="hover:text-slate-900 transition-colors">Sub-50ms Edge SSR</Link></li>
              <li><Link to="/services/conversion-design" className="hover:text-slate-900 transition-colors">Conversion UI/UX Systems</Link></li>
              <li><Link to="/services/cloud-infrastructure" className="hover:text-slate-900 transition-colors">Cloud Infrastructure & CI/CD</Link></li>
              <li><Link to="/services/web-engineering" className="hover:text-slate-900 transition-colors">Core Web Vitals Audit</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Merchant Assurance */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Architecture Dispatch
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Bi-weekly engineering breakdowns on deploying production autonomous agents and high-converting web apps.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Subscribed! Welcome to the dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    placeholder="architect@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                  />
                  <Button type="submit" variant="primary" size="sm" className="shrink-0 text-xs">
                    Join
                  </Button>
                </div>
                <div className="text-[10px] text-slate-400">Zero spam. Unsubscribe anytime.</div>
              </form>
            )}
          </div>
        </div>

        {/* Payment Methods & Security Compliance Bar */}
        <div className="py-6 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-800">Accepted Payment Rails:</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-semibold text-slate-700">Visa</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-semibold text-slate-700">Mastercard</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-semibold text-slate-700">American Express</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-semibold text-slate-700">Apple Pay</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-semibold text-slate-700">ACH / Wire</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <div className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>256-Bit TLS Encryption</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-900" />
              <span>PCI-DSS Level 1 via Stripe</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-slate-400">
            <span>© {new Date().getFullYear()} Velnixatech Technologies Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-500">7901 4TH ST N STE 300 ST. PETERSBURG, FL 33702</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-900 transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-900 transition-colors font-medium">
              Terms & Conditions
            </Link>
            <Link to="/privacy#security" className="hover:text-slate-900 transition-colors">
              Security & SOC-2
            </Link>
            <Link to="/terms#article-8" className="hover:text-slate-900 transition-colors">
              SLAs & Hypercare
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
