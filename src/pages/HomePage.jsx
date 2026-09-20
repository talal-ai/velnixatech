import React from 'react';
import HeroSection from '../sections/HeroSection';
import TechMarqueeSection from '../sections/TechMarqueeSection';
import ServicesBentoSection from '../sections/ServicesBentoSection';
import WorkflowEngineSection from '../sections/WorkflowEngineSection';
import RoiSection from '../sections/RoiSection';
import BeforeAfterSection from '../sections/BeforeAfterSection';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import ProcessSection from '../sections/ProcessSection';
import PricingSection from '../sections/PricingSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FaqSection from '../sections/FaqSection';
import CtaBannerSection from '../sections/CtaBannerSection';

export default function HomePage({ onOpenConsultation, onOpenDemo }) {
  return (
    <>
      <HeroSection onOpenConsultation={onOpenConsultation} onOpenDemo={onOpenDemo} />
      <TechMarqueeSection />
      <ServicesBentoSection onOpenConsultation={onOpenConsultation} />
      <WorkflowEngineSection onOpenConsultation={onOpenConsultation} />
      <RoiSection onOpenConsultation={onOpenConsultation} />
      <BeforeAfterSection />
      <CaseStudiesSection onOpenConsultation={onOpenConsultation} />
      <ProcessSection onOpenConsultation={onOpenConsultation} />
      <PricingSection onOpenConsultation={onOpenConsultation} />
      <TestimonialsSection />
      <FaqSection onOpenConsultation={onOpenConsultation} />
      <CtaBannerSection onOpenConsultation={onOpenConsultation} />
    </>
  );
}
