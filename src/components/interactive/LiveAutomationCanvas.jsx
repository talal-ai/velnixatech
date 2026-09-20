import React, { useState, useEffect } from 'react';
import { 
  Zap, Database, Cpu, Send, CheckCircle2, MessageSquare, 
  Filter, Layers, FileText, ScanLine, ShieldCheck, Coins, 
  Globe, Sliders, Gauge, TrendingUp, Play, Check, ArrowRight,
  Activity, RefreshCw
} from 'lucide-react';
import { WORKFLOW_SCENARIOS } from '../../data/workflowScenarios';

const ICON_MAP = {
  Zap, Database, Cpu, Send, CheckCircle2, MessageSquare,
  Filter, Layers, FileText, ScanLine, ShieldCheck, Coins,
  Globe, Sliders, Gauge, TrendingUp
};

export default function LiveAutomationCanvas({ onOpenConsultation }) {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLog, setSimulationLog] = useState([]);

  const currentScenario = WORKFLOW_SCENARIOS[activeScenarioIndex];

  // Automatic gentle pulse through nodes
  useEffect(() => {
    if (isSimulating) return;

    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % currentScenario.nodes.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [activeScenarioIndex, isSimulating, currentScenario.nodes.length]);

  // Handle manual "Run Live Simulation" click
  const runSimulation = () => {
    setIsSimulating(true);
    setActiveNodeIndex(0);
    setSimulationLog(['[0.00s] Ingestion signal received...']);

    currentScenario.nodes.forEach((node, idx) => {
      setTimeout(() => {
        setActiveNodeIndex(idx);
        setSimulationLog((prev) => [
          ...prev,
          `[+${node.latency}] ${node.title} — ${node.status} (${node.system})`
        ]);

        if (idx === currentScenario.nodes.length - 1) {
          setTimeout(() => {
            setIsSimulating(false);
            setSimulationLog((prev) => [
              ...prev,
              `✓ Complete: Successfully executed end-to-end in ${currentScenario.speed}`
            ]);
          }, 800);
        }
      }, (idx + 1) * 750);
    });
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-soft-xl overflow-hidden">
      {/* Top Bar: Live Engine Status & Scenario Switcher */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/70 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Engine Status indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-emerald-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Velnix Neural Runtime v3.4</span>
          </div>
          <span className="hidden sm:inline-block text-xs text-slate-400">|</span>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
            {currentScenario.speed} • {currentScenario.efficiency}
          </span>
        </div>

        {/* Right: Scenario Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {WORKFLOW_SCENARIOS.map((scenario, idx) => (
            <button
              key={scenario.id}
              onClick={() => {
                setActiveScenarioIndex(idx);
                setActiveNodeIndex(0);
                setSimulationLog([]);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeScenarioIndex === idx
                  ? 'bg-slate-900 text-white shadow-soft-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100/80 border border-slate-200/70'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Canvas Body */}
      <div className="p-6 sm:p-8 bg-slate-50">
        {/* Scenario Header Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                {currentScenario.badge}
              </span>
              <span className="text-slate-300">•</span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                {currentScenario.title}
              </h4>
            </div>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              {currentScenario.subtitle}
            </p>
          </div>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-all cursor-pointer disabled:opacity-60"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Simulating Live Event...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Test Live Event Flow</span>
              </>
            )}
          </button>
        </div>

        {/* Visual Node Graph: 4 Stages */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {currentScenario.nodes.map((node, idx) => {
            const IconComponent = ICON_MAP[node.iconName] || Cpu;
            const isActive = activeNodeIndex === idx;
            const isCompleted = activeNodeIndex > idx;

            return (
              <div
                key={node.id}
                onClick={() => setActiveNodeIndex(idx)}
                className={`relative rounded-2xl p-5 transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-white border-slate-500 shadow-soft-lg ring-2 ring-slate-500/10 translate-y-[-2px]'
                    : isCompleted
                    ? 'bg-slate-50/90 border-slate-200/80 shadow-soft-xs hover:border-slate-300'
                    : 'bg-white/90 border-slate-200/70 shadow-soft-xs hover:border-slate-300'
                }`}
              >
                {/* Connecting arrow indicator for desktop */}
                {idx < currentScenario.nodes.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 shadow-soft-xs">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}

                {/* Node Top Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-400 font-mono">
                      {node.step}
                    </span>
                    <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {node.tag}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-slate-50 text-slate-700 border border-slate-200'
                        : isCompleted
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isCompleted ? '✓ Done' : node.latency}
                  </span>
                </div>

                {/* Node Icon & Title */}
                <div className="flex items-start gap-3 mb-2.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-slate-600 text-white shadow-soft-sm'
                        : isCompleted
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 leading-tight">
                      {node.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {node.system}
                    </p>
                  </div>
                </div>

                {/* Node Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {node.description}
                </p>

                {/* Active Indicator Pulse Bar */}
                {isActive && (
                  <div className="mt-3.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Telemetry / Result Drawer */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-inner">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/80 text-xs">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-slate-100">Live Payload Telemetry</span>
              <span className="text-slate-500 font-mono text-[11px]">json://event-stream</span>
            </div>
            <div className="text-[11px] font-mono text-emerald-400">
              Active Stage: [{currentScenario.nodes[activeNodeIndex].step}] {currentScenario.nodes[activeNodeIndex].title}
            </div>
          </div>

          {/* Key Value Data Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
            {Object.entries(currentScenario.telemetry).map(([key, val]) => (
              <div key={key} className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60">
                <div className="text-[10px] uppercase text-slate-400 tracking-wider">
                  {key.replace(/([A-Z])/g, ' $1')}
                </div>
                <div className="text-slate-200 font-medium text-xs mt-1 truncate" title={val}>
                  {val}
                </div>
              </div>
            ))}
          </div>

          {/* Optional Simulation Log Output */}
          {simulationLog.length > 0 && (
            <div className="mt-3 pt-3 border-t border-slate-800/60 font-mono text-[11px] text-slate-300 flex flex-col gap-1 max-h-24 overflow-y-auto">
              {simulationLog.map((log, i) => (
                <div key={i}>{log}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Strip */}
      <div className="px-6 py-4 bg-slate-50/90 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="text-slate-500">
          Want this autonomous architecture deployed inside your company?
        </div>
        <button
          onClick={onOpenConsultation}
          className="font-semibold text-slate-600 hover:text-slate-700 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Schedule Architecture Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
