/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SupportedLang } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DogduinoProject } from './components/DogduinoProject';
import { Experience } from './components/Experience';
import { EducationAndSkills } from './components/EducationAndSkills';
import { Certifications } from './components/Certifications';
import { References } from './components/References';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  // Default to English as requested ("ilk yüklendiğinde sitenin ingilizce olması")
  const [lang, setLang] = useState<SupportedLang>('en');
  
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setContactModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-200 relative bg-tech-grid">
      
      {/* Ambient Engineering Light Orbs */}
      <div 
        aria-hidden="true" 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-cyan-500/15 dark:from-cyan-500/20 via-blue-600/5 to-transparent blur-[140px] pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="fixed bottom-0 right-1/4 w-[700px] h-[450px] bg-gradient-to-t from-cyan-600/10 dark:from-indigo-600/15 via-blue-500/5 to-transparent blur-[160px] pointer-events-none -z-10" 
      />

      {/* Top Bar Navigation with 8-language Selector */}
      <Navbar
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Personal Info and Yağmur's Photo */}
        <Hero
          lang={lang}
          onOpenContact={handleOpenContact}
        />

        {/* Featured Project: Dogduino with Photos and Video */}
        <DogduinoProject lang={lang} />

        {/* Full Work Experience (All 5 roles from CV) */}
        <Experience lang={lang} />

        {/* Education, Technical Skills, Professional Qualities & Languages */}
        <EducationAndSkills lang={lang} />

        {/* Courses & Certifications with Interactive Hover/Click Descriptions */}
        <Certifications lang={lang} />

        {/* Verified References (Strictly email correspondence only, no phone numbers) */}
        <References lang={lang} />

        {/* Dedicated Interactive Contact Section with Form, Email, and LinkedIn */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenContact={handleOpenContact}
      />

      {/* Quick Contact & Message Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
