import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
import TechMarqueeSection from './sections/TechMarqueeSection';
import ServicesBentoSection from './sections/ServicesBentoSection';
import WorkflowEngineSection from './sections/WorkflowEngineSection';
import RoiSection from './sections/RoiSection';
import BeforeAfterSection from './sections/BeforeAfterSection';
import CaseStudiesSection from './sections/CaseStudiesSection';
import ProcessSection from './sections/ProcessSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FaqSection from './sections/FaqSection';
import CtaBannerSection from './sections/CtaBannerSection';
import ProjectInquiryModal from './components/interactive/ProjectInquiryModal';
import VideoDemoModal from './components/interactive/VideoDemoModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-500 selection:text-white flex flex-col">
      {/* Floating Header */}
      <Navbar onOpenConsultation={openConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Enhanced Hero Section with Live Canvas */}
        <HeroSection
          onOpenConsultation={openConsultation}
          onOpenDemo={openDemo}
        />

        {/* Integration Tech Marquee */}
        <TechMarqueeSection />

        {/* Core Services Bento Grid (AI Automations + Web Services) */}
        <ServicesBentoSection onOpenConsultation={openConsultation} />

        {/* Autonomous Engine Architecture Breakdown */}
        <WorkflowEngineSection onOpenConsultation={openConsultation} />

        {/* Interactive ROI & Savings Calculator */}
        <RoiSection onOpenConsultation={openConsultation} />

        {/* Comparative Benchmark: Traditional vs Velnixatech */}
        <BeforeAfterSection />

        {/* Real Quantifiable Case Studies */}
        <CaseStudiesSection onOpenConsultation={openConsultation} />

        {/* 4-Step Engineering Protocol */}
        <ProcessSection onOpenConsultation={openConsultation} />

        {/* Transparent Investment Models & Guarantees */}
        <PricingSection onOpenConsultation={openConsultation} />

        {/* Client Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Filterable & Searchable FAQ */}
        <FaqSection onOpenConsultation={openConsultation} />

        {/* Closing Conversion Banner */}
        <CtaBannerSection onOpenConsultation={openConsultation} />
      </main>

      {/* Multi-Column Footer */}
      <Footer onOpenConsultation={openConsultation} />

      {/* Interactive Modals */}
      <ProjectInquiryModal
        isOpen={isConsultationOpen}
        onClose={closeConsultation}
      />

      <VideoDemoModal
        isOpen={isDemoOpen}
        onClose={closeDemo}
        onOpenConsultation={openConsultation}
      />
    </div>
  );
}
