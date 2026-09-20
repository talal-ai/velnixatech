import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, Globe, Cpu, Database, Sparkles, ShieldCheck, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import ScrollReveal, { RevealItem, DeployCard } from '../components/ui/ScrollReveal';

const ICON_MAP = {
  Bot, Globe, Cpu, Database, Sparkles, ShieldCheck
};

export default function ServicesBentoSection({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('All Solutions');

  const filteredServices = activeCategory === 'All Solutions'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal stagger={true} staggerDelay={0.08} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <RevealItem direction="up" className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-slate-500">
              Core Capabilities & Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mt-2">
              Engineered for Speed, Precision & Zero Operational Friction.
            </h2>
          </RevealItem>

          <RevealItem direction="left" className="flex items-center gap-2 p-1.5 bg-white rounded-lg border border-slate-200 self-start md:self-auto">
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === category
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal 
          key={activeCategory}
          stagger={true} 
          staggerDelay={0.09} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredServices.map((service) => {
            const IconComp = ICON_MAP[service.icon] || Bot;
            return (
              <DeployCard
                key={service.id}
                direction="up"
                className={`flex flex-col justify-between rounded-xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 group ${
                  service.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-200">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3 pt-6 border-t border-slate-100">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="text-sm font-bold text-slate-900 hover:text-slate-600 inline-flex items-center gap-1 transition-colors cursor-pointer group/link"
                    >
                      <span>Explore Architecture</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </DeployCard>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
