import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Github, Twitter, Linkedin, ShieldCheck, Activity } from 'lucide-react';
import Button from '../ui/Button';

export default function Footer({ onOpenConsultation }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  return (
    <footer className="bg-white border-t border-slate-200/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-100">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 7L12 18L18 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="11" r="2" fill="#06B6D4" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                VELNIXA<span className="text-brand-600">TECH</span>
              </span>
            </div>

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

            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="#" className="p-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors" aria-label="LinkedIn">
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
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Autonomous Agent Swarms</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Enterprise Webhook Routers</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Private RAG & Knowledge Bases</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Financial Document Intelligence</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">CRM & ERP Bi-Directional Sync</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Customer Care 24/7 Swarms</a></li>
            </ul>
          </div>

          {/* Col 3: Web Engineering */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Web Services
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-500">
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Next.js 15 Flagships</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Sub-50ms Edge SSR</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Headless CMS Platforms</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Conversion UI/UX Systems</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Cloud Infrastructure & CI/CD</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Core Web Vitals Audit</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
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
                    className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Velnixatech Technologies Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Security & SOC-2</a>
            <a href="#" className="hover:text-slate-600 transition-colors">System Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
