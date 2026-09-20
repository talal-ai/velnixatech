import React, { useState } from 'react';
import { PRICING_TIERS, ENGAGEMENT_GUARANTEES } from '../data/pricing';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';

export default function PricingSection({ onOpenConsultation }) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            Investment & Engagement Models
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Predictable Investment. Compounding Returns.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            No unpredictable hourly billing. Choose between a rapid fixed-scope sprint or a dedicated full-lifecycle AI + Web engineering pod.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                !isAnnual
                  ? 'bg-white text-slate-900 shadow-soft-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Quarterly / Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-white text-slate-900 shadow-soft-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Partnership</span>
              <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
            return (
              <div
                key={tier.id}
                className={`flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 relative ${
                  tier.isPopular
                    ? 'bg-white border-2 border-brand-500 shadow-soft-xl ring-4 ring-brand-500/10 lg:-translate-y-2'
                    : 'bg-white border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md hover:border-slate-300'
                }`}
              >
                {/* Popular Pill */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-soft-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                      {tier.eyebrow}
                    </span>
                    {!tier.isPopular && (
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {tier.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 min-h-[36px] leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Price Block */}
                  <div className="my-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        / {isAnnual ? 'month billed annually' : 'month'}
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-1">
                      {tier.period}
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA & Recommendation */}
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <Button
                    variant={tier.isPopular ? 'brand' : 'primary'}
                    size="lg"
                    className="w-full text-xs font-semibold"
                    icon={ArrowRight}
                    onClick={onOpenConsultation}
                  >
                    {tier.ctaText}
                  </Button>
                  <p className="text-[11px] text-slate-400 text-center leading-tight">
                    {tier.recommendedFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantees Box */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_GUARANTEES.map((g, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{g.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
