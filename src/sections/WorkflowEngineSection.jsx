import React from 'react';
import { 
  ShieldCheck, Layers, GitBranch, RefreshCw, Cpu, 
  Terminal, Lock, Zap, ArrowRight, CheckCircle2 
} from 'lucide-react';
import Button from '../components/ui/Button';

export default function WorkflowEngineSection({ onOpenConsultation }) {
  const pillars = [
    {
      step: '01',
      title: 'Deterministic JSON Schema Validation',
      subtitle: 'Eliminating hallucinations at the gateway',
      desc: 'LLMs are inherently probabilistic. We make them deterministic by forcing all responses into strictly typed Pydantic and Zod data contracts with automated syntax checks.',
      icon: ShieldCheck,
      tag: 'Zero-Hallucination Guard'
    },
    {
      step: '02',
      title: 'Multi-Agent Consensus & Peer Review',
      subtitle: 'Collaborative reasoning swarms',
      desc: 'Instead of relying on a single prompt, tasks pass through specialized agent pods: a Planner, an Executor, and a Referee model that inspects facts against source documents.',
      icon: GitBranch,
      tag: 'Triangulated Accuracy'
    },
    {
      step: '03',
      title: 'Private Enterprise Vector Memory',
      subtitle: 'Secure retrieval with zero public leakage',
      desc: 'Private vector embeddings stored in VPC-isolated clusters. Data is chunked, indexed, and retrieved with hybrid BM25 and semantic ranking for sub-20ms context injection.',
      icon: Lock,
      tag: 'SOC-2 / HIPAA Compliant'
    },
    {
      step: '04',
      title: 'Self-Healing Failover & Dead Letter Queues',
      subtitle: 'Engineered for 99.99% production uptime',
      desc: 'When third-party APIs or upstream webhooks experience rate limits or network drops, our state machines automatically queue, backoff, and retry without losing a single byte of state.',
      icon: RefreshCw,
      tag: 'Fault-Tolerant Runtime'
    }
  ];

  return (
    <section id="live-engine" className="py-24 sm:py-32 bg-slate-50/70 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            Fault-Tolerant AI Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            The Velnix Autonomous Runtime Architecture.
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            We don’t build fragile automation scripts. We engineer resilient distributed systems that run autonomously in production with enterprise-grade observability and zero downtime.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-soft-sm hover:shadow-soft-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                      PHASE {pillar.step}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-soft-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-medium text-brand-700 mt-0.5">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Production Hardened</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">SLA 99.99%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Architecture Code/Telemetry Snippet */}
        <div className="mt-12 rounded-3xl bg-slate-900 text-slate-200 border border-slate-800 p-6 sm:p-8 shadow-soft-xl overflow-hidden font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-400" />
              <span className="font-bold text-white">velnix_agent_state_machine.py</span>
              <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Python 3.12 / LangGraph</span>
            </div>
            <div className="text-emerald-400 text-[11px]">● Active State: REASONING_VERIFIED (Latency: 14ms)</div>
          </div>

          <pre className="text-[11px] sm:text-xs text-slate-300 leading-relaxed overflow-x-auto scrollbar-none">
{`class AutonomousOrchestrator(StateGraph):
    async def execute_pipeline(self, event: InboundEvent) -> ExecutionResult:
        # Step 1: Strict JSON Schema Ingestion & Anti-Injection Guard
        payload = await self.guardrail.sanitize_and_validate(event.data, schema=EnterpriseSchema)
        
        # Step 2: Multi-Agent Consensus Routing
        task_plan = await self.planner_agent.synthesize_plan(payload, context=self.vector_store)
        execution_step = await self.executor_agent.call_tool(task_plan.action)
        
        # Step 3: Deterministic Verification by Referee Model
        verified = await self.referee_agent.verify(execution_step, ground_truth=payload)
        if not verified.is_safe:
            return await self.escalate_to_human_supervisor(event, verified.reason)
            
        return await self.dispatch_webhook(verified.output, retry_policy=ExponentialBackoff(max=5))`}
          </pre>
        </div>
      </div>
    </section>
  );
}
