import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import Button from '../ui/Button';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-soft-md py-3 px-4 sm:px-6'
            : 'bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-soft-xs py-4 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-soft-xs group-hover:bg-brand-600 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 7L12 18L18 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="11" r="2" fill="#06B6D4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-slate-900 leading-none">
                VELNIXA<span className="text-brand-600">TECH</span>
              </span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-slate-600 mt-1">
                Autonomous AI & Web
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Status Pill + Consultation Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live slot indicator */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>2 Slots Open for Q4</span>
            </div>

            <Button
              variant="primary"
              size="sm"
              icon={ArrowRight}
              onClick={onOpenConsultation}
              className="text-xs font-semibold"
            >
              Book Architecture Call
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-slate-100 mt-3 space-y-1 animate-in fade-in duration-150">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-800 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>2 Engineering Pod Slots Available for Q4</span>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-3">
              <Button
                variant="primary"
                size="md"
                className="w-full text-xs font-semibold"
                icon={ArrowRight}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
              >
                Book Architecture Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
