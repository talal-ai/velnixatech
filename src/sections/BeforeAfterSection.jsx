import React from 'react';
import BeforeAfterComparison from '../components/interactive/BeforeAfterComparison';

export default function BeforeAfterSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            Comparative Benchmark
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Why High-Growth Companies Switch to Velnixatech.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Traditional service agencies scale billing hours by adding human heads. We build compounding autonomous software assets that your business owns forever.
          </p>
        </div>

        <BeforeAfterComparison />
      </div>
    </section>
  );
}
