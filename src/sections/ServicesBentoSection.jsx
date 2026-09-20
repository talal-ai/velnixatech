import React, { useState } from 'react';
import { 
  Bot, Globe, Cpu, Database, Sparkles, ShieldCheck, 
  ArrowRight, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import Button from '../components/ui/Button';

const ICON_MAP = {
  Bot, Globe, Cpu, Database, Sparkles, ShieldCheck
};

export default function ServicesBentoSection({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('All Solutions');

  const filteredServices = activeCategory === 'All Solutions'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              Core Capabilities & Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
              Engineered for Speed, Precision & Zero Operational Friction.
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              We specialize in two converging domains: autonomous AI pipelines that eliminate manual labor, and bespoke web platforms engineered to convert traffic.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl self-start md:self-auto border border-slate-200/80">
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === category
                    ? 'bg-white text-slate-900 shadow-soft-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComp = ICON_MAP[service.icon] || Bot;
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-soft-sm hover:shadow-soft-lg hover:border-brand-200 transition-all duration-300 group ${
                  service.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-2xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50/80 px-2.5 py-1 rounded-md">
                        {service.eyebrow}
                      </span>
                    </div>

                    <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Tech Chips + Metric Pill + Inquire Action */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/80">
                      ★ {service.metric}
                    </div>

                    <button
                      onClick={onOpenConsultation}
                      className="text-xs font-bold text-slate-900 hover:text-brand-600 inline-flex items-center gap-1 transition-colors cursor-pointer self-start sm:self-auto"
                    >
                      <span>Inquire Blueprint</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Need a bespoke combination of AI agents and custom web infrastructure?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We frequently build custom full-lifecycle systems that integrate both domains seamlessly.
            </p>
          </div>
          <Button
            variant="brand"
            size="md"
            icon={ArrowRight}
            onClick={onOpenConsultation}
            className="shrink-0"
          >
            Design Custom Architecture
          </Button>
        </div>
      </div>
    </section>
  );
}
