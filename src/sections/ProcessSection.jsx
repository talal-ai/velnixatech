import React from 'react';
import { Search, Compass, Rocket, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';

export default function ProcessSection({ onOpenConsultation }) {
  const steps = [
    {
      number: '01',
      title: 'Systems & Bottleneck Audit',
      timeframe: 'Days 1 to 3',
      description: 'We conduct a deep dive into your operational workflows, data schemas, API access, and repetitive manual friction points to identify highest-ROI automation levers.',
      deliverable: 'Comprehensive Systems Architecture & ROI Blueprint',
      icon: Search
    },
    {
      number: '02',
      title: 'Architecture & Rapid Staging',
      timeframe: 'Days 4 to 10',
      description: 'We engineer deterministic state machines, custom LLM reasoning chains, and frontend interfaces in isolated sandbox environments with synthetic validation data.',
      deliverable: 'Working Interactive Prototype & Sandbox Test Suite',
      icon: Compass
    },
    {
      number: '03',
      title: 'Production Hardening & Rollout',
      timeframe: 'Days 11 to 18',
      description: 'Zero-downtime deployment to your live infrastructure. We wire up production webhooks, CRM/ERP triggers, security guardrails, and error alerting.',
      deliverable: 'Live Production Deployment & Sentry Telemetry',
      icon: Rocket
    },
    {
      number: '04',
      title: 'Autonomous Scaling & Optimization',
      timeframe: 'Continuous Hypercare',
      description: 'Continuous monitoring, prompt regression testing, vector cache re-indexing, and feature expansions. We keep your pipelines running at peak velocity.',
      deliverable: '99.99% Uptime SLA & Bi-Weekly Executive Briefings',
      icon: BarChart3
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            Our Engineering Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            From Bottleneck to Autonomous Scale in 18 Days.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            A battle-tested 4-phase deployment methodology designed for zero operational disruption and rapid demonstrable ROI.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft-sm hover:shadow-soft-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-900 font-mono">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-bold text-brand-700 bg-brand-50 border border-brand-100 px-2.5 py-0.5 rounded-full">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
                    Deliverable:
                  </div>
                  <div className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA banner */}
        <div className="mt-14 text-center">
          <Button
            variant="brand"
            size="lg"
            icon={ArrowRight}
            onClick={onOpenConsultation}
          >
            Start Your Day 1 Systems Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
