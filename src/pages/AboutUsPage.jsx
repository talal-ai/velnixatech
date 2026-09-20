import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ScrollReveal, { RevealItem, DeployCard } from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { 
  ShieldCheck, Cpu, Code2, Layers, CheckCircle2, ArrowRight, 
  MapPin, Globe, Sparkles, Building2, Terminal, Lock, Users, Award
} from 'lucide-react';

export default function AboutUsPage({ onOpenConsultation }) {
  const principles = [
    {
      number: "01",
      title: "Deterministic Contracts Over Probabilistic Fluff",
      desc: "Foundation models are probabilistic. Enterprise operations cannot afford uncertainty. We enforce strict Pydantic and Zod data schemas, referee validation agents, and automated type checks at every boundary.",
      icon: ShieldCheck
    },
    {
      number: "02",
      title: "100% Client Code Ownership",
      desc: "We do not believe in proprietary agency handcuffs or rented software platforms. Upon final milestone settlement, 100% of the repository, prompt topologies, and infrastructure manifests belong to you.",
      icon: Code2
    },
    {
      number: "03",
      title: "Private VPC Isolation & Zero Data Leakage",
      desc: "Your proprietary documents, schemas, and customer data are isolated within dedicated private VPCs. We strictly enforce zero-retention API agreements—your data never trains external models.",
      icon: Lock
    },
    {
      number: "04",
      title: "Compounding Software Assets",
      desc: "Traditional agencies bill hours by adding headcount to manual workflows. We build deterministic, self-healing software machines that reduce marginal operational cost to zero as you scale.",
      icon: Layers
    }
  ];

  const leadership = [
    {
      name: "Marcus Vance",
      role: "Founder & Chief Systems Architect",
      bio: "Former Distributed Systems Lead. Specializes in multi-agent orchestration graphs, high-throughput event routers, and low-latency API pipelines.",
      domain: "Distributed Agentic Systems"
    },
    {
      name: "Dr. Elena Rostova",
      role: "Head of AI Research & Cognitive RAG",
      bio: "Ph.D. in Computational Linguistics. Architect of hybrid dense/sparse vector retrieval engines, BM25 re-ranking models, and anti-hallucination tripwires.",
      domain: "Vector Intelligence & RAG"
    },
    {
      name: "Julian Thorne",
      role: "VP of Cloud DevOps & SRE",
      bio: "Specializes in zero-downtime containerized multi-AZ clusters on AWS/GCP, automated CI/CD blue/green pipelines, and SOC-2 compliance infrastructure.",
      domain: "High-Availability DevOps"
    },
    {
      name: "Aria Chen",
      role: "Principal UI/UX Systems Technologist",
      bio: "Bridges the gap between cognitive psychology, conversion design, and Next.js/Tailwind codebases with sub-50ms Core Web Vitals performance.",
      domain: "Conversion Web Engineering"
    }
  ];

  const milestones = [
    { metric: "99.99%", label: "Production SLA Uptime", sub: "Engineered with failover queues" },
    { metric: "500k+", label: "Monthly Autonomous Events", sub: "Processed with zero data drift" },
    { metric: "18 Days", label: "Average Sprint Velocity", sub: "From audit to live deployment" },
    { metric: "$120M+", label: "Client Revenue Handled", sub: "Across automated pipelines" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <div className="bg-slate-50 border-b border-slate-200 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: 'Company', href: '/' },
              { label: 'About Us' }
            ]} 
          />

          <ScrollReveal stagger={true} staggerDelay={0.08} className="mt-8 max-w-4xl">
            <RevealItem direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Engineering Philosophy & Corporate Identity</span>
              </div>
            </RevealItem>

            <RevealItem direction="up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                We Engineer Autonomous Software Assets. Not Billable Hours.
              </h1>
            </RevealItem>

            <RevealItem direction="up">
              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
                Velnixatech Technologies Inc. was founded on a simple observation: conventional digital agencies scale by billing more human hours to manage manual complexity. We reject that paradigm. We design deterministic multi-agent swarms and high-velocity web platforms that eradicate operational friction permanently.
              </p>
            </RevealItem>

            <RevealItem direction="up">
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Button
                  variant="primary"
                  size="xl"
                  icon={ArrowRight}
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto"
                >
                  Schedule Architecture Briefing
                </Button>
                <Link
                  to="/services/autonomous-agents"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 font-semibold text-sm transition-colors"
                >
                  Explore System Architectures
                </Link>
              </div>
            </RevealItem>
          </ScrollReveal>

          {/* Quick Metrics Bar */}
          <ScrollReveal stagger={true} staggerDelay={0.08} delay={0.2} className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {milestones.map((item, idx) => (
              <DeployCard
                key={idx}
                direction="up"
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs"
              >
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 font-mono tracking-tight">
                  {item.metric}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-2">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {item.sub}
                </div>
              </DeployCard>
            ))}
          </ScrollReveal>
        </div>
      </div>

      {/* The Velnix Thesis Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal stagger={true} staggerDelay={0.08} className="lg:col-span-6 space-y-6">
            <RevealItem direction="up">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                The Architectural Thesis
              </span>
            </RevealItem>
            <RevealItem direction="up">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Why Modern Enterprises Choose Autonomous Infrastructure Over Headcount
              </h2>
            </RevealItem>
            <RevealItem direction="up">
              <p className="text-base text-slate-600 leading-relaxed">
                When high-growth companies encounter operational bottlenecks, the standard response is hiring more coordinators, customer reps, and data-entry personnel. This creates exponential coordination drag, bloated SG&A, and fragile institutional knowledge.
              </p>
            </RevealItem>
            <RevealItem direction="up">
              <p className="text-base text-slate-600 leading-relaxed">
                At Velnixatech, we view business operations through the lens of distributed systems. Repetitive manual workflows are simply software algorithms that haven't been written yet. By wiring multi-agent reasoning models into your databases, CRMs, and web flagships, we convert labor expenses into perpetual software assets.
              </p>
            </RevealItem>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={0.15} className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">The Modern Operating Shift</span>
                <span className="text-xs text-emerald-400 font-mono">EBITDA Multiplier</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <div className="text-xs font-semibold text-rose-400 line-through">Legacy Approach: Adding Billable Humans</div>
                  <p className="text-xs text-slate-400 leading-relaxed">High payroll, linear scale, communication latency, knowledge silos, and high turnover.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/90 border border-emerald-500/40 space-y-1 ring-1 ring-emerald-500/20">
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>The Velnix Standard: Autonomous Engineering</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">Deterministic state machines, 14ms API response times, 100% code ownership, and infinite non-linear scalability.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>SOC-2 & PCI-DSS Level 1 Guardrails</span>
                <span className="text-white font-semibold">99.99% SLA Target</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Core Engineering Principles */}
      <div className="bg-slate-50/70 border-b border-slate-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal stagger={true} staggerDelay={0.08} className="max-w-3xl mx-auto text-center mb-16">
            <RevealItem direction="up">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Engineering Integrity
              </span>
            </RevealItem>
            <RevealItem direction="up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mt-2">
                Our 4 Foundational Tenets.
              </h2>
            </RevealItem>
            <RevealItem direction="up">
              <p className="text-base text-slate-600 mt-3 leading-relaxed">
                How we deliver mission-critical software systems that companies rely on for hundreds of millions in transactions.
              </p>
            </RevealItem>
          </ScrollReveal>

          <ScrollReveal stagger={true} staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <DeployCard
                  key={p.number}
                  direction="up"
                  className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-mono font-bold text-slate-900">{p.number}</span>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{p.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Non-Negotiable Production Standard</span>
                  </div>
                </DeployCard>
              );
            })}
          </ScrollReveal>
        </div>
      </div>

      {/* Leadership & Engineering Pods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <ScrollReveal stagger={true} staggerDelay={0.08} className="max-w-3xl mx-auto text-center mb-16">
          <RevealItem direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Leadership & Architecture Pods
            </span>
          </RevealItem>
          <RevealItem direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mt-2">
              Engineered by Practitioners. Not Generalists.
            </h2>
          </RevealItem>
          <RevealItem direction="up">
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Every client engagement is staffed by senior systems architects with proven backgrounds in distributed databases, machine learning infrastructure, and enterprise full-stack engineering.
            </p>
          </RevealItem>
        </ScrollReveal>

        <ScrollReveal stagger={true} staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((leader, idx) => (
            <DeployCard
              key={idx}
              direction="up"
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-base mb-4">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{leader.name}</h3>
                <div className="text-xs font-semibold text-slate-500 mt-0.5 mb-3">{leader.role}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{leader.bio}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Focus Domain:</span>
                <span className="text-xs font-medium text-slate-800">{leader.domain}</span>
              </div>
            </DeployCard>
          ))}
        </ScrollReveal>
      </div>

      {/* Official Registered Headquarters */}
      <div className="bg-slate-50 border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Corporate Governance & Global Reach
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Registered Principal Office & Operations Hub
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Velnixatech Technologies Inc. operates from its registered corporate headquarters in St. Petersburg, Florida, maintaining full compliance with federal commercial standards, card network security directives, and global client service level agreements.
              </p>

              <div className="pt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900">7901 4TH ST N STE 300 ST. PETERSBURG, FL 33702</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-500 pl-6">
                  <span>Operating Hours: Monday – Friday, 8:00 AM – 6:00 PM EST (24/7 SRE Hypercare for Retainer Pods)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Contact Rails</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Client Solutions:</span>
                    <a href="mailto:solutions@velnixatech.com" className="font-semibold text-slate-900 hover:underline">solutions@velnixatech.com</a>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Billing & Merchant:</span>
                    <a href="mailto:billing@velnixatech.com" className="font-semibold text-slate-900 hover:underline">billing@velnixatech.com</a>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Corporate Legal:</span>
                    <a href="mailto:legal@velnixatech.com" className="font-semibold text-slate-900 hover:underline">legal@velnixatech.com</a>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-black transition-colors"
                >
                  Visit Contact Hub <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <ScrollReveal direction="scale" className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Ready to Build With Senior Systems Architects?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reserve a 30-minute private architecture review. We’ll analyze your workflow bottlenecks and map an empirical deployment strategy within 48 hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="xl"
              icon={ArrowRight}
              onClick={onOpenConsultation}
              className="w-full sm:w-auto"
            >
              Book Architecture Session
            </Button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 font-semibold text-sm transition-colors text-center"
            >
              Contact Engineering Lead
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
