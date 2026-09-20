import React from 'react';
import RoiCalculator from '../components/interactive/RoiCalculator';
import ScrollReveal, { RevealItem } from '../components/ui/ScrollReveal';

export default function RoiSection({ onOpenConsultation }) {
  return (
    <section id="roi-calculator" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal stagger={true} staggerDelay={0.08} className="max-w-3xl mx-auto text-center mb-12">
          <RevealItem direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Quantifiable Business Value
            </span>
          </RevealItem>
          <RevealItem direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
              The Economics of Autonomous Workflows.
            </h2>
          </RevealItem>
          <RevealItem direction="up">
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Every hour your team spends manually copying data between systems, writing repetitive emails, or reconciling spreadsheets is direct EBITDA burned. See what happens when operations run autonomously.
            </p>
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal direction="scale" delay={0.15}>
          <RoiCalculator onOpenConsultation={onOpenConsultation} />
        </ScrollReveal>
      </div>
    </section>
  );
}
