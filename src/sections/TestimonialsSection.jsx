import React from 'react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../data/testimonials';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import ScrollReveal, { RevealItem, DeployCard } from '../components/ui/ScrollReveal';

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal stagger={true} staggerDelay={0.08} className="max-w-3xl mx-auto text-center mb-16">
          <RevealItem direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Client Conviction
            </span>
          </RevealItem>
          <RevealItem direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
              Trusted by Operators, Founders & CTOs.
            </h2>
          </RevealItem>
          <RevealItem direction="up">
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              See how forward-thinking leaders leverage Velnixatech to outpace their competitors and scale operations seamlessly.
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* Testimonials 3-Column Grid */}
        <ScrollReveal stagger={true} staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <DeployCard
              key={idx}
              direction="up"
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-slate-400 mb-3" />

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md mb-3 inline-block border border-emerald-200/60">
                  ★ {t.stats}
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                      <span>{t.name}</span>
                      {t.verified && <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />}
                    </div>
                    <div className="text-xs text-slate-600">
                      {t.role}, <strong className="text-slate-800 font-semibold">{t.company}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </DeployCard>
          ))}
        </ScrollReveal>

        {/* Client Industry Cloud */}
        <ScrollReveal stagger={true} staggerDelay={0.06} delay={0.2} className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Trusted Across High-Growth Sectors
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENT_LOGOS.map((client, i) => (
              <RevealItem
                key={i}
                direction="scale"
                className="p-3.5 rounded-xl bg-white border border-slate-200/70 text-center shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="text-xs font-bold text-slate-800">{client.name}</div>
                <div className="text-[10px] text-slate-600">{client.label}</div>
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
