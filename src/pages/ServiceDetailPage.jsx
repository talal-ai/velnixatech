import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import { 
  ArrowRight, CheckCircle2, ArrowLeft, Bot, Globe, Cpu, Sparkles, ShieldCheck, Database, Quote, ChevronDown
} from 'lucide-react';

const ICON_MAP = {
  Bot, Globe, Cpu, Database, Sparkles, ShieldCheck
};

export default function ServiceDetailPage({ onOpenConsultation }) {
  const { serviceId } = useParams();
  const service = SERVICES.find(s => s.id === serviceId);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const IconComp = ICON_MAP[service.icon] || Bot;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header & Breadcrumbs */}
      <ScrollReveal direction="none">
        <div className="bg-slate-50 border-b border-slate-200 pt-24 pb-8 sm:pt-32 sm:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs 
              items={[
                { label: 'Services', href: '/#services' },
                { label: service.title }
              ]} 
            />
            
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shadow-sm">
                <IconComp className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {service.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mt-1">
                  {service.title}
                </h1>
              </div>
            </div>
            
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              {service.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="brand"
                size="lg"
                icon={ArrowRight}
                onClick={onOpenConsultation}
                className="w-full sm:w-auto"
              >
                Consult an Architect
              </Button>
              <Link 
                to="/#services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-colors font-medium text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Column (Main Details) */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Overview */}
            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Service Overview</h2>
                <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed">
                  <p>{service.longDescription}</p>
                </div>
              </section>
            </ScrollReveal>

            {/* Architecture / Pipeline */}
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{service.architecture.title}</h2>
                <p className="text-slate-600 mb-8">{service.architecture.description}</p>
                
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                  {service.architecture.steps.map((step, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-base font-bold text-slate-900 mb-1">{step.name}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
            
            {/* Industry Use Cases */}
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Industry Applications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.useCases.map((uc, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                        {uc.industry}
                      </div>
                      <p className="text-sm font-medium text-slate-900 leading-relaxed">
                        "{uc.scenario}"
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
            
            {/* FAQ Section */}
            {service.faqs && service.faqs.length > 0 && (
              <ScrollReveal delay={0.1}>
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div
                          key={idx}
                          className={"rounded-xl border transition-all " + (
                            isOpen
                              ? 'border-slate-300 bg-slate-50 shadow-sm'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          )}
                        >
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                            type="button"
                            className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                          >
                            <span className="text-sm sm:text-base font-bold text-slate-900">
                              {faq.q}
                            </span>
                            <div
                              className={"w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 " + (
                                isOpen ? 'rotate-180 bg-slate-200 text-slate-600' : 'bg-slate-100 text-slate-500'
                              )}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              </ScrollReveal>
            )}

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8">
            
            {/* Metric / Stat */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="p-6 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-md">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Proven Impact
                </div>
                <div className="text-xl font-bold leading-tight">
                  {service.metric}
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial Spotlight */}
            {service.testimonial && (
              <ScrollReveal direction="left" delay={0.3}>
                <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <Quote className="w-6 h-6 text-slate-300 mb-4" />
                  <p className="text-sm font-medium text-slate-900 leading-relaxed mb-4 italic">
                    "{service.testimonial.quote}"
                  </p>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{service.testimonial.author}</div>
                    <div className="text-xs text-slate-500">{service.testimonial.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            )}
            
            {/* Highlights Box */}
            <ScrollReveal direction="left" delay={0.4}>
              <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Key Capabilities</h3>
                <ul className="space-y-4">
                  {service.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Tech Stack */}
            <ScrollReveal direction="left" delay={0.5}>
              <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <ScrollReveal direction="up" delay={0.1}>
        <div className="bg-slate-50 border-t border-slate-200 py-16 sm:py-24 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to implement {service.title}?</h2>
            <p className="text-slate-600 mb-8">
              Book a free architecture session to discover how this technology maps to your specific business bottlenecks.
            </p>
            <Button
              variant="brand"
              size="xl"
              icon={ArrowRight}
              onClick={onOpenConsultation}
            >
              Design Custom Architecture
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
