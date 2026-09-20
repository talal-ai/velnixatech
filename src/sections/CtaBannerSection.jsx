import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

export default function CtaBannerSection({ onOpenConsultation }) {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-950 text-white shadow-soft-xl overflow-hidden">
          {/* Background subtle light effects */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Live slot pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs text-brand-300 font-semibold">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Q4 Engineering Capacity: 2 Retainer Pods Remaining</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Replace Hundreds of Hours of Manual Ops with Autonomous Code?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Book a direct 30-minute discovery session with our Lead Solutions Architect. We’ll audit your bottlenecks and map a tailored AI + Web blueprint.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="brand"
                size="xl"
                icon={ArrowRight}
                onClick={onOpenConsultation}
                className="w-full sm:w-auto shadow-glow-brand"
              >
                Schedule Architecture Session
              </Button>

              <a
                href="#roi-calculator"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-700 transition-all text-center"
              >
                Calculate Estimated Savings
              </a>
            </div>

            {/* Trust checkmarks */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero obligation systems diagnosis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>14-day demonstrable ROI guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strict NDA & privacy protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
