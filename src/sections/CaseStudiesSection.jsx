import React from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import { TrendingUp, ArrowUpRight, CheckCircle2, Quote } from 'lucide-react';
import Button from '../components/ui/Button';
import ScrollReveal, { RevealItem, DeployCard } from '../components/ui/ScrollReveal';

export default function CaseStudiesSection({ onOpenConsultation }) {
  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal stagger={true} staggerDelay={0.08} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <RevealItem direction="up" className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Verified Production Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
              Empirical Results. Not Theoretical Hype.
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Real companies scaling revenue, eliminating operational friction, and dominating their markets with Velnix autonomous systems.
            </p>
          </RevealItem>

          <RevealItem direction="left">
            <Button
              variant="secondary"
              size="md"
              icon={ArrowUpRight}
              onClick={onOpenConsultation}
              className="self-start md:self-auto"
            >
              Review Full Case Dossiers
            </Button>
          </RevealItem>
        </ScrollReveal>

        {/* Case Studies Grid */}
        <ScrollReveal stagger={true} staggerDelay={0.12} className="space-y-10">
          {CASE_STUDIES.map((study) => (
            <DeployCard
              key={study.id}
              direction="up"
              hover={false}
              className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Col: Overview & Challenge / Solution */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
                      {study.client}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-semibold text-slate-500">
                      {study.industry}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {study.serviceType}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    {study.title}
                  </h3>

                  <div className="space-y-4 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-1">
                        The Operational Bottleneck:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-100/40 border border-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                        The Autonomous Engineering Solution:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="pt-2 border-t border-slate-100 flex items-start gap-3 text-slate-600">
                    <Quote className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-xs sm:text-sm italic leading-relaxed text-slate-700">
                        "{study.quote.text}"
                      </p>
                      <div className="mt-2 text-xs font-semibold text-slate-900">
                        {study.quote.author} — <span className="text-slate-500 font-normal">{study.quote.title}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Col: Metrics Bento Box */}
                <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-md">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 pb-3 mb-6 border-b border-slate-800">
                      Documented Production Metrics
                    </div>

                    <div className="space-y-6">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="space-y-1.5">
                          <div className="text-xs text-slate-400 font-medium">
                            {m.label}
                          </div>
                          <div className="flex items-baseline justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-sm line-through text-slate-500 font-mono">
                                {m.before}
                              </span>
                              <span className="text-xl sm:text-2xl font-bold text-white font-mono">
                                {m.after}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                              {m.highlight}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack used */}
                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                      Production Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {study.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DeployCard>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
