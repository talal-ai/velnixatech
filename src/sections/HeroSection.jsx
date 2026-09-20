import React from 'react';
import { ArrowRight, Play, CheckCircle2, Sparkles, Shield, Cpu, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import LiveAutomationCanvas from '../components/interactive/LiveAutomationCanvas';
import { HERO_STATS } from '../data/navigation';

export default function HeroSection({ onOpenConsultation, onOpenDemo }) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-white hero-radial-glow">
      {/* Background Decorative subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-soft-xs text-xs font-semibold text-slate-800 animate-in fade-in slide-in-from-top-3 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Velnix Neural Core v3.4 Active</span>
            <span className="text-slate-300">•</span>
            <span className="text-brand-600 font-bold">Autonomous Enterprise Engineering</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
            We Engineer <span className="text-gradient">Autonomous AI Systems</span> & High-Velocity Web Platforms.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            We replace hundreds of hours of manual operations with self-driving multi-agent workflows, private vector RAG pipelines, and sub-50ms web flagships engineered to scale revenue.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Button
              variant="brand"
              size="xl"
              icon={ArrowRight}
              onClick={onOpenConsultation}
              className="w-full sm:w-auto shadow-glow-brand"
            >
              Book Architecture Call
            </Button>

            <Button
              variant="secondary"
              size="xl"
              icon={Play}
              iconPosition="left"
              onClick={onOpenDemo}
              className="w-full sm:w-auto"
            >
              Watch 2-Min System Demo
            </Button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Free Bottleneck & Systems Audit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>14-Day Demonstrable ROI Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% Client Code & IP Ownership</span>
            </div>
          </div>
        </div>

        {/* Enhanced Interactive Showcase: Live Automation Pipeline Canvas */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
              Interactive Architecture Simulation
            </span>
          </div>
          <LiveAutomationCanvas onOpenConsultation={onOpenConsultation} />
        </div>

        {/* Hero Verified Stats Grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-600 mt-1 font-medium">
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
