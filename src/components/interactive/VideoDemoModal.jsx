import React, { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { 
  Play, Pause, RefreshCw, Terminal, Activity, Cpu, 
  ShieldCheck, CheckCircle2, ArrowRight, Zap 
} from 'lucide-react';

export default function VideoDemoModal({ isOpen, onClose, onOpenConsultation }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTick, setCurrentTick] = useState(0);

  const demoEvents = [
    { time: '00:01', type: 'Ingress', msg: 'Inbound enterprise lead captured via Webhook (ApexLogix)', status: 'OK' },
    { time: '00:03', type: 'Enrich', msg: 'Clearbit + Apollo firmographics indexed: $42M ARR, 140 FTE', status: 'OK' },
    { time: '00:06', type: 'Reasoning', msg: 'Claude 3.7 Sonnet assigned ICP Score 98/100 (Tier 1)', status: 'OK' },
    { time: '00:08', type: 'Vector', msg: 'Semantic search matched similar fintech closed-won case study', status: 'OK' },
    { time: '00:11', type: 'Dispatch', msg: 'Custom executive deck compiled + AE briefed on Slack', status: 'SUCCESS' },
    { time: '00:14', type: 'CRM', msg: 'HubSpot pipeline stage auto-advanced to Qualified Discovery', status: 'SUCCESS' },
  ];

  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTick((prev) => (prev + 1) % demoEvents.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying, demoEvents.length]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Velnix Neural Orchestrator Demo"
      subtitle="Interactive simulation of our production autonomous runtime"
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        {/* Mock Player / Runtime Terminal */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
          {/* Top Bar of Console */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-xs font-mono text-slate-400 ml-2">velnix-runtime://cluster-us-east-1.internal</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer bg-slate-800 px-2 py-1 rounded"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isPlaying ? 'Pause' : 'Resume'}</span>
              </button>
            </div>
          </div>

          {/* Real-time KPI Stats Bar */}
          <div className="grid grid-cols-3 border-b border-slate-800/80 bg-slate-900/50 p-3 text-xs font-mono">
            <div className="border-r border-slate-800 px-2">
              <div className="text-slate-500 text-[10px] uppercase">Active Agents</div>
              <div className="text-emerald-400 font-bold text-sm flex items-center gap-1 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>12 Pods Online</span>
              </div>
            </div>
            <div className="border-r border-slate-800 px-2">
              <div className="text-slate-500 text-[10px] uppercase">P99 Latency</div>
              <div className="text-cyan-400 font-bold text-sm mt-0.5">42.8 ms</div>
            </div>
            <div className="px-2">
              <div className="text-slate-500 text-[10px] uppercase">Zero-Error Rate</div>
              <div className="text-brand-300 font-bold text-sm mt-0.5">99.98%</div>
            </div>
          </div>

          {/* Event Stream Body */}
          <div className="p-4 sm:p-5 font-mono text-xs space-y-2.5 min-h-[220px]">
            {demoEvents.slice(0, currentTick + 1).map((evt, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-2 rounded-lg bg-slate-900/40 border border-slate-800/40 animate-in fade-in slide-in-from-bottom-2 duration-200"
              >
                <span className="text-slate-500 shrink-0 text-[11px]">{evt.time}</span>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-brand-950 text-brand-300 border border-brand-800 shrink-0 uppercase font-semibold">
                  {evt.type}
                </span>
                <span className="text-slate-300 flex-1 text-xs">{evt.msg}</span>
                <span className="text-emerald-400 text-[11px] font-bold shrink-0">{evt.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-xs text-slate-500">
            Engineered with deterministic telemetry and enterprise observability.
          </p>
          <Button
            variant="brand"
            size="md"
            icon={ArrowRight}
            onClick={() => {
              onClose();
              if (onOpenConsultation) onOpenConsultation();
            }}
          >
            Deploy This For Your Business
          </Button>
        </div>
      </div>
    </Modal>
  );
}
