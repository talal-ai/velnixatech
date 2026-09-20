import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, ChevronRight, Bot, Globe, Cpu, Database, Sparkles, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../../data/services';
import Button from '../ui/Button';
import VelnixLogo from '../ui/VelnixLogo';

const ICON_MAP = {
  Bot, Globe, Cpu, Database, Sparkles, ShieldCheck
};

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={"max-w-7xl mx-auto rounded-lg transition-all duration-300 " + (
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm py-3 px-4 sm:px-6'
            : 'bg-white/80 backdrop-blur-sm border border-slate-200 py-4 px-4 sm:px-6'
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="cursor-pointer">
            <VelnixLogo size={38} />
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            <Link to="/" className="px-3.5 py-2 rounded-md text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out w-[800px]">
                <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden p-6 relative">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {SERVICES.map(service => {
                      const IconComp = ICON_MAP[service.icon] || Bot;
                      return (
                        <Link 
                          key={service.id} 
                          to={`/services/${service.id}`}
                          className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="w-10 h-10 rounded-md bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 mb-1">{service.title}</h4>
                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{service.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Need a custom architecture?</span>
                    <button 
                      onClick={onOpenConsultation}
                      className="text-sm font-bold text-slate-900 hover:text-slate-600 inline-flex items-center gap-1 transition-colors"
                    >
                      Book a free strategy call <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about" className="px-3.5 py-2 rounded-md text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="px-3.5 py-2 rounded-md text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              Contact Us
            </Link>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              icon={ArrowRight}
              onClick={onOpenConsultation}
              className="font-semibold"
            >
              Start Project
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-slate-100 mt-3 space-y-1 animate-in fade-in duration-150">
            <Link
              to="/"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <span>Home</span>
            </Link>
            
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className={"w-4 h-4 text-slate-400 transition-transform " + (mobileServicesOpen ? 'rotate-180' : '')} />
              </button>
              
              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 border-l-2 border-slate-100 ml-4 mb-2">
                  {SERVICES.map(service => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <span>About Us</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <span>Contact Us</span>
            </Link>

            <div className="pt-3">
              <Button
                variant="primary"
                size="md"
                className="w-full text-sm font-semibold"
                icon={ArrowRight}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
              >
                Start Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
