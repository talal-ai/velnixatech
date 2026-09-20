import React, { useState } from 'react';
import { Check, X, Shield, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import Card from '../ui/Card';

export default function BeforeAfterComparison() {
  const [activeTab, setActiveTab] = useState('all');

  const rows = [
    {
      category: 'operations',
      dimension: 'Task Latency & Processing Speed',
      traditional: '24 to 72 hours per workflow. Delayed by inbox queues, meetings, and manual handoffs.',
      velnix: '8 to 15 seconds end-to-end. Autonomous agents trigger, parse, and execute instantly 24/7/365.',
      win: '99.7% Latency Reduction'
    },
    {
      category: 'quality',
      dimension: 'Error Rate & Data Integrity',
      traditional: '7.8% human error rate in data entry, copy-pasting between CRM/ERP, and missed customer edge cases.',
      velnix: '0.04% error rate with strict deterministic Pydantic schema validation and dual-referee verification.',
      win: '195x Higher Precision'
    },
    {
      category: 'scale',
      dimension: 'Scaling Cost Trajectory',
      traditional: 'Linear cost increase: doubling volume requires hiring, training, and managing 2x more human operators.',
      velnix: 'Sub-linear cost: handles 10x or 100x traffic volume spikes with near-zero marginal server cost.',
      win: 'Flat Infrastructure Cost'
    },
    {
      category: 'web',
      dimension: 'Web Performance & Core Web Vitals',
      traditional: 'Heavy legacy WordPress / Shopify themes with 4.5s+ loading times and 60% mobile bounce rates.',
      velnix: 'Custom Next.js 15 & Vite edge architectures with sub-50ms TTFB and 100/100 Lighthouse scores.',
      win: '3.4x Higher Conversion'
    },
    {
      category: 'governance',
      dimension: 'IP Ownership & Vendor Freedom',
      traditional: 'Locked into proprietary agency platforms, closed SaaS black-boxes, or fragile brittle Zapier chains.',
      velnix: '100% client-owned source code, open-standard n8n/Python pipelines, and full GitHub repo transfers.',
      win: 'Zero Vendor Lock-in'
    },
    {
      category: 'operations',
      dimension: 'Availability & Downtime Coverage',
      traditional: 'Restricted to 9am–5pm local business hours with complete weekend and holiday blind spots.',
      velnix: '24/7/365 continuous autonomous uptime with automated self-healing failover and Sentry telemetry.',
      win: 'Always-On Execution'
    }
  ];

  const filteredRows = activeTab === 'all' 
    ? rows 
    : rows.filter(r => r.category === activeTab);

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-soft-xl overflow-hidden">
      {/* Header bar */}
      <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Architectural Paradigm Shift
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Manual Agency Ops vs. Velnixatech Autonomous Systems
          </h3>
        </div>

        {/* Category filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: 'all', label: 'All Dimensions' },
            { id: 'operations', label: 'Operations' },
            { id: 'quality', label: 'Accuracy' },
            { id: 'web', label: 'Web Platform' },
            { id: 'governance', label: 'Ownership' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-soft-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="divide-y divide-slate-100">
        {/* Table column titles */}
        <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50/80 px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <div className="md:col-span-4">Evaluation Dimension</div>
          <div className="md:col-span-4 text-slate-500 hidden md:block">Traditional Agency / Manual Ops</div>
          <div className="md:col-span-4 text-brand-600 hidden md:block">Velnixatech Autonomous Ecosystem</div>
        </div>

        {filteredRows.map((row, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-6 gap-4 hover:bg-slate-50/50 transition-colors">
            {/* Dimension Title & Win Badge */}
            <div className="md:col-span-4 pr-4">
              <h5 className="font-bold text-slate-900 text-sm">{row.dimension}</h5>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200/80">
                <Zap className="w-3 h-3" />
                <span>{row.win}</span>
              </div>
            </div>

            {/* Traditional Column */}
            <div className="md:col-span-4 p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-600 mb-1.5 md:hidden">
                <X className="w-3.5 h-3.5" />
                <span>Legacy / Traditional:</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {row.traditional}
              </p>
            </div>

            {/* Velnixatech Column */}
            <div className="md:col-span-4 p-4 rounded-xl bg-brand-50/40 border border-brand-200/70">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-700 mb-1.5 md:hidden">
                <Check className="w-3.5 h-3.5" />
                <span>Velnixatech Autonomous:</span>
              </div>
              <p className="text-xs text-slate-900 font-medium leading-relaxed">
                {row.velnix}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
