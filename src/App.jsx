import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ScrollToTop from './components/common/ScrollToTop';
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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white flex flex-col">
        <Navbar onOpenConsultation={openConsultation} />

        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenConsultation={openConsultation}
                  onOpenDemo={openDemo}
                />
              } 
            />
            <Route 
              path="/services/:serviceId" 
              element={
                <ServiceDetailPage 
                  onOpenConsultation={openConsultation}
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <AboutUsPage 
                  onOpenConsultation={openConsultation}
                />
              } 
            />
            <Route 
              path="/about-us" 
              element={
                <AboutUsPage 
                  onOpenConsultation={openConsultation}
                />
              } 
            />
            <Route 
              path="/contact" 
              element={
                <ContactUsPage />
              } 
            />
            <Route 
              path="/contact-us" 
              element={
                <ContactUsPage />
              } 
            />
            <Route 
              path="/privacy" 
              element={
                <PrivacyPolicyPage 
                  onOpenConsultation={openConsultation}
                />
              } 
            />
            <Route 
              path="/privacy-policy" 
              element={
                <PrivacyPolicyPage 
                  onOpenConsultation={openConsultation}
                />
              } 
            />
            <Route 
              path="/terms" 
              element={
                <TermsOfServicePage 
                  onOpenConsultation={openConsultation}
                />
              } 
            />
            <Route 
              path="/terms-of-service" 
              element={
                <TermsOfServicePage 
                  onOpenConsultation={openConsultation}
                />
              } 
            />
          </Routes>
        </main>

        <Footer onOpenConsultation={openConsultation} />

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
    </BrowserRouter>
  );
}
