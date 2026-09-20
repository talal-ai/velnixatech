import React from 'react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../data/testimonials';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            Client Conviction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Trusted by Operators, Founders & CTOs.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            See how forward-thinking leaders leverage Velnixatech to outpace their competitors and scale operations seamlessly.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-brand-300 mb-3" />

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
                      {t.verified && <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />}
                    </div>
                    <div className="text-xs text-slate-600">
                      {t.role}, <strong className="text-slate-800 font-semibold">{t.company}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Industry Cloud */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Trusted Across High-Growth Sectors
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENT_LOGOS.map((client, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-white border border-slate-200/70 text-center shadow-soft-xs"
              >
                <div className="text-xs font-bold text-slate-800">{client.name}</div>
                <div className="text-[10px] text-slate-600">{client.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
