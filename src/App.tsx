/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { cvData } from './data/cvData';
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
import { AnalyticsModal } from './components/AnalyticsModal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { recordPageVisit, recordSectionClick } from './services/analytics';

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
  const [analyticsModalOpen, setAnalyticsModalOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return params.get('stats') === '1' || params.get('admin') === 'stats';
  });
  const [certSelection, setCertSelection] = useState<{ index: number; nonce: number } | null>(null);
  const [expSelection, setExpSelection] = useState<{ index: number | null; nonce: number } | null>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Log unique daily session visit once on load
  useEffect(() => {
    void recordPageVisit(lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hidden owner keyboard shortcut (Ctrl+Shift+Y / Cmd+Shift+Y)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        setAnalyticsModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track major section anchors and external project/profile links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';

      if (href === '#about') {
        void recordSectionClick('about', 'About Section', lang);
      } else if (href === '#projects') {
        void recordSectionClick('projects', 'Projects Overview', lang);
      } else if (href === '#dogduino') {
        void recordSectionClick('dogduino', 'Dogduino Project', lang);
      } else if (href === '#aquatrace') {
        void recordSectionClick('aquatrace', 'AquaTrace Project', lang);
      } else if (href === '#experience') {
        void recordSectionClick('experience', 'Work Experience', lang);
      } else if (href === '#education') {
        void recordSectionClick('education', 'Education & Skills', lang);
      } else if (href === '#certifications') {
        void recordSectionClick('certifications', 'Certifications Overview', lang);
      } else if (href === '#references') {
        void recordSectionClick('references', 'References', lang);
      } else if (href === '#contact') {
        void recordSectionClick('contact', 'Contact Section', lang);
      } else if (href.includes('github.com/regexlord/AquaTrace')) {
        void recordSectionClick('aquatrace_github', 'AquaTrace Source Code', lang);
      } else if (href.includes('linkedin.com')) {
        void recordSectionClick('linkedin', 'LinkedIn Profile', lang);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [lang]);

  const handleLanguageChange = (nextLang: SupportedLang) => {
    if (nextLang !== lang) {
      void recordSectionClick('language_change', nextLang.toUpperCase(), nextLang);
    }
    setLang(nextLang);
  };

  const handleOpenContact = () => {
    void recordSectionClick('contact', 'Open Contact', lang);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setContactModalOpen(true);
    }
  };

  const handleSelectCertification = (index: number) => {
    const cert = cvData.certifications[index];
    void recordSectionClick(
      'certification_detail',
      cert ? cert.title : `Certificate #${index}`,
      lang
    );
    setCertSelection({ index, nonce: Date.now() });
    const el = document.getElementById(`cert-${index}`) || document.getElementById('certifications');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSelectExperience = (index: number | null) => {
    if (index === null) {
      void recordSectionClick('experience', 'View All', lang);
    } else {
      const exp = cvData.experiences[index];
      void recordSectionClick(
        'experience',
        exp ? `${exp.role.en} (${exp.company})` : `Experience #${index}`,
        lang
      );
    }
    setExpSelection({ index, nonce: Date.now() });
    if (index === null) {
      const el = document.getElementById('experience');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <ErrorBoundary>
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

        {/* Top Bar Navigation with 11-language Selector */}
        <Navbar
          lang={lang}
          setLang={handleLanguageChange}
          isDark={isDark}
          setIsDark={setIsDark}
          onOpenContact={handleOpenContact}
          onSelectExperience={handleSelectExperience}
          onSelectCertification={handleSelectCertification}
        />

        {/* Main Content Flow */}
        <main className="flex-1">
          {/* Hero Section with Personal Info and Yağmur's Photo */}
          <Hero
            lang={lang}
            onOpenContact={handleOpenContact}
          />

          {/* Education, Technical Skills, Professional Qualities & Languages */}
          <EducationAndSkills lang={lang} />

          {/* Projects Section: Overview + Dogduino + AquaTrace */}
          <DogduinoProject lang={lang} />

          {/* Full Work Experience (All roles from CV) */}
          <Experience lang={lang} navSelection={expSelection} />

          {/* Courses & Certifications with Interactive Hover/Click Descriptions */}
          <Certifications lang={lang} navSelection={certSelection} />

          {/* Verified References (Strictly email correspondence only, no phone numbers) */}
          <References lang={lang} />

          {/* Dedicated Interactive Contact Section with Form, Email, and LinkedIn */}
          <ContactSection lang={lang} />
        </main>

        {/* Footer */}
        <Footer
          lang={lang}
          onOpenContact={handleOpenContact}
          onOpenAnalytics={() => setAnalyticsModalOpen(true)}
        />

        {/* Quick Contact & Message Modal */}
        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
          lang={lang}
        />

        {/* Private Owner-Only Analytics Dashboard Modal */}
        <AnalyticsModal
          isOpen={analyticsModalOpen}
          onClose={() => setAnalyticsModalOpen(false)}
        />
      </div>
    </ErrorBoundary>
  );
}
