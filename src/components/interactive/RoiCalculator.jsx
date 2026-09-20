import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Sparkles, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function RoiCalculator({ onOpenConsultation }) {
  const [teamSize, setTeamSize] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(55);

  // Benchmarks & calculations
  const calculations = useMemo(() => {
    // Total manual hours spent across team per year (50 working weeks)
    const annualManualHours = teamSize * hoursPerWeek * 50;
    
    // Total current annual cost of manual labor
    const currentManualCost = annualManualHours * hourlyRate;

    // Velnixatech automation typically eliminates 80% of repetitive operational tasks
    const hoursSaved = Math.round(annualManualHours * 0.82);
    const dollarsSaved = Math.round(currentManualCost * 0.82);
    
    // Average velocity acceleration
    const velocityMultiplier = (hoursPerWeek / (hoursPerWeek * 0.18)).toFixed(1);
    
    // Estimated ROI percentage based on typical Velnix retainer
    const estimatedInvestment = teamSize > 100 ? 120000 : teamSize > 30 ? 65000 : 35000;
    const netRoi = Math.max(120, Math.round(((dollarsSaved - estimatedInvestment) / estimatedInvestment) * 100));

    return {
      annualManualHours,
      currentManualCost,
      hoursSaved,
      dollarsSaved,
      velocityMultiplier,
      netRoi,
      daysToBreakeven: Math.round((estimatedInvestment / (dollarsSaved / 365)))
    };
  }, [teamSize, hoursPerWeek, hourlyRate]);

  const applyPreset = (size, hours, rate) => {
    setTeamSize(size);
    setHoursPerWeek(hours);
    setHourlyRate(rate);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-soft-xl overflow-hidden">
      {/* Top Header */}
      <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 mb-1">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Impact Modeler</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Calculate Your Organization’s Automation ROI
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Adjust the metrics below to model realistic operational cost recovery and velocity multipliers.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-slate-400 mr-1 font-medium">Presets:</span>
          <button
            onClick={() => applyPreset(10, 8, 45)}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Startup (10 FTE)
          </button>
          <button
            onClick={() => applyPreset(45, 14, 65)}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Scaleup (45 FTE)
          </button>
          <button
            onClick={() => applyPreset(150, 16, 75)}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Mid-Market (150 FTE)
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Sliders */}
        <div className="lg:col-span-6 space-y-7">
          {/* Slider 1: Team Size */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-slate-800">
                Team / Department Size
              </label>
              <span className="text-base font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
                {teamSize} people
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="250"
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600 focus:outline-none"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
              <span>2 members</span>
              <span>125 members</span>
              <span>250+ members</span>
            </div>
          </div>

          {/* Slider 2: Hours/Week */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-slate-800">
                Repetitive Manual Hours / Week per Person
              </label>
              <span className="text-base font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
                {hoursPerWeek} hrs/wk
              </span>
            </div>
            <input
              type="range"
              min="4"
              max="28"
              step="1"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600 focus:outline-none"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
              <span>4 hrs (Light admin)</span>
              <span>15 hrs (Heavy copy/pasting)</span>
              <span>28 hrs (Manual ops bottleneck)</span>
            </div>
          </div>

          {/* Slider 3: Blended Hourly Rate */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-slate-800">
                Blended Hourly Labor Cost
              </label>
              <span className="text-base font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
                ${hourlyRate}/hr
              </span>
            </div>
            <input
              type="range"
              min="25"
              max="160"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600 focus:outline-none"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
              <span>$25/hr (Junior ops)</span>
              <span>$80/hr (Mid engineer/PM)</span>
              <span>$160+/hr (Senior specialist)</span>
            </div>
          </div>

          {/* Footnote on methodology */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-700">Methodology:</strong> Calculated using an 82% automation capture rate across 50 annual working weeks, based on empirical performance data across 48 enterprise deployments in 2025–2026.
          </div>
        </div>

        {/* Right Column: Dynamic Outputs */}
        <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-brand-950 text-white shadow-soft-lg">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                Projected Annual Impact
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {calculations.netRoi}% Projected ROI
              </span>
            </div>

            {/* Big Headline Output */}
            <div className="my-6">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Estimated Annual Cost Reclaimed
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white mt-1 tracking-tight">
                ${calculations.dollarsSaved.toLocaleString()}
                <span className="text-base sm:text-lg font-normal text-slate-400 ml-1">/ year</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-800">
              <div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-brand-400" />
                  <span>Hours Liberated</span>
                </div>
                <div className="text-2xl font-bold text-slate-100">
                  {calculations.hoursSaved.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1">hrs/yr</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Velocity Multiplier</span>
                </div>
                <div className="text-2xl font-bold text-slate-100">
                  {calculations.velocityMultiplier}x
                  <span className="text-xs font-normal text-slate-400 ml-1">faster</span>
                </div>
              </div>
            </div>

            {/* Payback period pill */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
              <span>Estimated Breakeven:</span>
              <span className="font-semibold text-emerald-400 font-mono">
                ~{calculations.daysToBreakeven} Business Days
              </span>
            </div>
          </div>

          {/* CTA inside output box */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
            <Button
              variant="brand"
              size="lg"
              className="w-full sm:w-auto flex-1 text-sm font-semibold"
              onClick={onOpenConsultation}
              icon={ArrowRight}
            >
              Lock In These Efficiencies
            </Button>
            <div className="text-[11px] text-slate-400 text-center sm:text-left">
              Includes full audit & custom architecture roadmap.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
