import React from 'react';
import { TECH_PARTNERS } from '../data/techStack';
import { Cpu } from 'lucide-react';

export default function TechMarqueeSection() {
  // Duplicate for seamless infinite loop
  const duplicatedPartners = [...TECH_PARTNERS, ...TECH_PARTNERS];

  return (
    <section className="py-12 bg-slate-50/60 border-y border-slate-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          Seamless Integration Across Modern AI Models, Cloud Infrastructure & Data Layers
        </p>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left & Right gradient masks for clean fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-slate-50/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-slate-50/90 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee whitespace-nowrap py-1">
          {duplicatedPartners.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-soft-xs hover:border-slate-300 transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-xs">
                {item.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-800">{item.name}</span>
                <span className="text-[10px] text-slate-600 font-medium">{item.role}</span>
              </div>
              <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 ml-1">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
