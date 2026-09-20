import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import LiveAutomationCanvas from '../components/interactive/LiveAutomationCanvas';
import { HERO_STATS } from '../data/navigation';
import ScrollReveal, { RevealItem } from '../components/ui/ScrollReveal';

export default function HeroSection({ onOpenConsultation, onOpenDemo }) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal stagger={true} staggerDelay={0.1} className="max-w-4xl mx-auto text-center space-y-6">
          <RevealItem>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span>Velnix Neural Core v3.4 Active</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-bold">Enterprise Engineering</span>
            </div>
          </RevealItem>

          <RevealItem>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              We Engineer Autonomous AI Systems & Web Platforms.
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We replace manual operations with self-driving multi-agent workflows, private vector RAG pipelines, and high-performance web flagships engineered to scale.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                variant="brand"
                size="xl"
                icon={ArrowRight}
                onClick={onOpenConsultation}
                className="w-full sm:w-auto"
              >
                Book Architecture Call
              </Button>

              <Button
                variant="secondary"
                size="xl"
                icon={Play}
                iconPosition="left"
                onClick={onOpenDemo}
                className="w-full sm:w-auto bg-white border-slate-300 hover:bg-slate-50"
              >
                Watch 2-Min System Demo
              </Button>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-900" />
                <span>Systems Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-900" />
                <span>ROI Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-900" />
                <span>Code Ownership</span>
              </div>
            </div>
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-20">
            <div className="text-center mb-6">
              <span className="text-sm font-semibold text-slate-500">
                Interactive Architecture Simulation
              </span>
            </div>
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-slate-50">
              <LiveAutomationCanvas onOpenConsultation={onOpenConsultation} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={true} staggerDelay={0.1} delay={0.2} className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HERO_STATS.map((stat, idx) => (
            <RevealItem key={idx} className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {stat.change}
              </div>
            </RevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
