import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { SupportedLang, uiText } from '../data/translations';
import { 
  MapPin, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Cpu, 
  ArrowRight, 
  Copy, 
  Check, 
  Send 
} from 'lucide-react';

interface HeroProps {
  lang: SupportedLang;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenContact }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const t = uiText[lang] || uiText.en;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="about" className="relative py-12 md:py-18 overflow-hidden">
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-8">
          
          {/* Top Header Lockup: Name & Title on the Left, Photo positioned elegantly on the Right */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6 pb-2">
            
            {/* Left: Kicker, Name & Title */}
            <div className="space-y-3 flex-1">
              
              {/* Engineering Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-cyan-700 dark:text-cyan-400">
                <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>{t.hero.kicker}</span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">/</span>
                <span>{t.hero.subKicker}</span>
              </div>

              {/* Candidate Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {cvData.personal.name}
              </h1>

              {/* Title / Role Subheading */}
              <p className="text-base sm:text-lg md:text-xl font-semibold text-cyan-800 dark:text-cyan-300 leading-snug max-w-3xl">
                {cvData.personal.title[lang] || cvData.personal.title.en}
              </p>
            </div>

            {/* Right: Tasteful, Elegant Portrait positioned right next to the title lockup */}
            <div className="shrink-0 self-start sm:self-center">
              <div className="relative group">
                {/* Subtle soft rim glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                {/* Clean portrait frame */}
                <div className="relative w-28 h-36 sm:w-36 sm:h-44 md:w-40 md:h-48 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-slate-200/90 dark:border-slate-700/80 shadow-md">
                  <img
                    src={cvData.personal.photo}
                    alt="Yağmur Kahraman"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Profile Summary Card from CV */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-semibold">
              {t.hero.summaryLabel}
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-5xl">
              {cvData.personal.profile[lang] || cvData.personal.profile.en}
            </p>
          </div>

          {/* Direct Personal Contact Metadata Strip (Email, LinkedIn, Location) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Location */}
            <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60">
              <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span className="font-medium text-slate-800 dark:text-slate-200">{cvData.personal.location}</span>
            </div>

            {/* Email with direct mailto & copy */}
            <div className="group flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60">
              <a 
                href={`mailto:${cvData.personal.email}`}
                className="flex items-center gap-2 truncate hover:text-cyan-600 dark:hover:text-cyan-400"
                title={cvData.personal.email}
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span className="truncate font-mono text-[11px] font-medium text-slate-800 dark:text-slate-200">
                  {cvData.personal.email}
                </span>
              </a>
              <button
                onClick={() => copyToClipboard(cvData.personal.email, 'email')}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors shrink-0 ml-1"
                title="Copy email"
              >
                {copiedItem === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* LinkedIn with direct link & copy */}
            <div className="group flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors">
              <a
                href={cvData.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 truncate text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="truncate font-mono text-[11px] font-medium">LinkedIn Profile</span>
              </a>
              <button
                onClick={() => copyToClipboard(cvData.personal.linkedinUrl, 'linkedin')}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors shrink-0 ml-1"
                title="Copy LinkedIn URL"
              >
                {copiedItem === 'linkedin' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#dogduino"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 rounded-xl transition-all shadow-sm hover:translate-y-[-1px]"
            >
              <span>{t.hero.viewDogduino}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-all shadow-sm"
            >
              <Send className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{t.hero.contactMe}</span>
            </button>
          </div>

        </div>

        {/* 4-KPI Metric Strip Below */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tabular-nums">
              5
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              {t.hero.kpis.internships}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.hero.kpis.internshipsSub}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-600 dark:text-cyan-400 tabular-nums">
              8-DOF
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              {t.hero.kpis.quadruped}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.hero.kpis.quadrupedSub}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tabular-nums">
              7
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              {t.hero.kpis.certs}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.hero.kpis.certsSub}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tabular-nums">
              B2 / A1
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              {t.hero.kpis.languages}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {t.hero.kpis.languagesSub}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
