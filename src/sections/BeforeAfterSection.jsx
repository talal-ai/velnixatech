import React from 'react';
import BeforeAfterComparison from '../components/interactive/BeforeAfterComparison';
import ScrollReveal, { RevealItem } from '../components/ui/ScrollReveal';

export default function BeforeAfterSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal stagger={true} staggerDelay={0.08} className="max-w-3xl mx-auto text-center mb-12">
          <RevealItem direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Comparative Benchmark
            </span>
          </RevealItem>
          <RevealItem direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
              Why High-Growth Companies Switch to Velnixatech.
            </h2>
          </RevealItem>
          <RevealItem direction="up">
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Traditional service agencies scale billing hours by adding human heads. We build compounding autonomous software assets that your business owns forever.
            </p>
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal direction="scale" delay={0.15}>
          <BeforeAfterComparison />
        </ScrollReveal>
      </div>
    </section>
  );
}
