import React, { useState } from 'react';
import { FAQS, FAQ_CATEGORIES } from '../data/faq';
import { ChevronDown, Search, MessageSquare, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

export default function FaqSection({ onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesQuery = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            Clarity & Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Frequently Answered Questions.
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our engineering protocols, data security, code ownership, and deployment timelines.
          </p>

          {/* Search bar & Category filters */}
          <div className="mt-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search architecture, security, SLAs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 text-xs rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
              />
            </div>

            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white shadow-soft-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              No matching questions found for "{searchQuery}". Ask our team directly below.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? 'border-brand-300 bg-brand-50/20 shadow-soft-sm'
                      : 'border-slate-200/90 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    type="button"
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-brand-100 text-brand-700' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center sm:flex sm:items-center sm:justify-between gap-4">
          <div className="text-left mb-3 sm:mb-0">
            <h4 className="text-sm font-bold text-slate-900">Have a specific architectural requirement?</h4>
            <p className="text-xs text-slate-500">Our engineering leads are available for direct technical inquiries.</p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            icon={ArrowRight}
            onClick={onOpenConsultation}
          >
            Speak With An Architect
          </Button>
        </div>
      </div>
    </section>
  );
}
