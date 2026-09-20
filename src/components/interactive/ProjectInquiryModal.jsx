import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { Check, ArrowRight, Sparkles, CheckCircle2, Calendar, Shield } from 'lucide-react';

export default function ProjectInquiryModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('AI Automations');
  const [timeline, setTimeline] = useState('Immediate (Next 14 Days)');
  const [budget, setBudget] = useState('$5k - $15k');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setFormData({ fullName: '', email: '', company: '', notes: '' });
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate quick submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={isSubmitted ? "Consultation Confirmed" : "Schedule Architecture Consultation"}
      subtitle={isSubmitted ? "We've reserved your strategy slot" : "Direct access to our Senior AI & Web Systems Architects"}
      maxWidth="max-w-xl"
    >
      {isSubmitted ? (
        <div className="py-8 text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-slate-900">Discovery Sprint Reserved!</h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
            Thank you, <strong className="text-slate-900">{formData.fullName || 'Partner'}</strong>. We have dispatched a tailored architecture preparation brief to <strong className="text-slate-900">{formData.email || 'your email'}</strong>.
          </p>

          <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <Calendar className="w-4 h-4 text-brand-600" />
              <span>Next Steps in Our 48-Hour Protocol:</span>
            </div>
            <p>1. Systems audit team reviews your company domain ({formData.company || 'your organization'}).</p>
            <p>2. We prepare an initial bottleneck diagnosis and tailored workflow blueprint.</p>
            <p>3. 30-minute private architecture Zoom with our lead systems engineer.</p>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full mt-2"
            onClick={handleClose}
          >
            Done & Return to Site
          </Button>
        </div>
      ) : (
        <div>
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center">
                {step}
              </span>
              <span className="text-xs font-semibold text-slate-700">
                {step === 1 ? 'Select System Focus' : step === 2 ? 'Project Scope & Scale' : 'Contact & Confirmation'}
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">Step {step} of 3</span>
          </div>

          {/* STEP 1: Focus Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                What is your primary engineering objective?
              </label>
              
              {[
                { title: 'AI Workflow Automations', desc: 'Eliminate manual repetitive operations with autonomous agent pipelines.' },
                { title: 'Bespoke Modern Web Engineering', desc: 'Custom high-velocity Next.js / Tailwind flagship with 100/100 performance.' },
                { title: 'Multi-Agent Swarm & Private RAG', desc: 'Cognitive company brain and autonomous 24/7 customer/ops intelligence.' },
                { title: 'Dedicated AI + Web Engineering Pod', desc: 'Full monthly retainer pod scaling your operations and product suite.' }
              ].map((service) => (
                <div
                  key={service.title}
                  onClick={() => setSelectedService(service.title)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedService === service.title
                      ? 'border-brand-600 bg-brand-50/50 shadow-soft-xs ring-1 ring-brand-500'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-slate-900">{service.title}</h5>
                    {selectedService === service.title && (
                      <Check className="w-4 h-4 text-brand-600" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{service.desc}</p>
                </div>
              ))}

              <div className="pt-4 flex justify-end">
                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  onClick={() => setStep(2)}
                >
                  Continue to Scope
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: Scope & Timeline */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Target Deployment Timeline
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Immediate (Next 14 Days)', 'Within 30 Days', 'Next Quarter (Q4/Q1)', 'Exploring Feasibility'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTimeline(t)}
                      className={`p-2.5 text-xs font-medium rounded-xl border text-left transition-colors cursor-pointer ${
                        timeline === t
                          ? 'border-brand-600 bg-brand-50 text-brand-700 font-semibold'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Target Investment Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['$5k - $10k (Sprint)', '$10k - $25k (Pod)', '$25k+ (Enterprise)'].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`p-2.5 text-xs font-medium rounded-xl border text-center transition-colors cursor-pointer ${
                        budget === b
                          ? 'border-brand-600 bg-brand-50 text-brand-700 font-semibold'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <Button variant="ghost" size="md" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button variant="primary" size="md" icon={ArrowRight} onClick={() => setStep(3)}>
                  Final Details
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Submit */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Sterling"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Website URL <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="company.com"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief description of bottlenecks or desired system (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. We spend 20 hours/week manually routing vendor invoices and need our website rebuilt with sub-50ms speed..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white resize-none"
                />
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-2 text-[11px] text-slate-500">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NDA & Privacy Guaranteed. Zero spam. We reply with a technical brief within 4 business hours.</span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Button variant="ghost" size="md" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="brand"
                  size="lg"
                  isLoading={isSubmitting}
                  icon={Sparkles}
                >
                  Schedule Strategy Session
                </Button>
              </div>
            </form>
          )}
        </div>
      )}
    </Modal>
  );
}
