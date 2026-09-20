import React from 'react';
import RoiCalculator from '../components/interactive/RoiCalculator';

export default function RoiSection({ onOpenConsultation }) {
  return (
    <section id="roi-calculator" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            Quantifiable Business Value
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            The Economics of Autonomous Workflows.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Every hour your team spends manually copying data between systems, writing repetitive emails, or reconciling spreadsheets is direct EBITDA burned. See what happens when operations run autonomously.
          </p>
        </div>

        <RoiCalculator onOpenConsultation={onOpenConsultation} />
      </div>
    </section>
  );
}
