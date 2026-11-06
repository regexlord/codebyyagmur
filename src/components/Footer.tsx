import React from 'react';
import { cvData } from '../data/cvData';
import { SupportedLang, uiText } from '../data/translations';
import { ArrowUp, Mail, Linkedin, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: SupportedLang;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenContact }) => {
  const t = uiText[lang] || uiText.en;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
          
          {/* Brand info */}
          <div className="space-y-1">
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              YAĞMUR KAHRAMAN
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {cvData.personal.title[lang] || cvData.personal.title.en}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-5 text-xs">
            <a
              href="#about"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#dogduino"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {t.nav.dogduino}
            </a>
            <a
              href="#experience"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {t.nav.experience}
            </a>
            <a
              href={cvData.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <button
              onClick={onOpenContact}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors font-medium"
            title={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quiet copyright */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Yağmur Kahraman. {t.footer.allRights}
          </div>
          <div className="font-mono">
            {cvData.personal.location} · {cvData.personal.email}
          </div>
        </div>

      </div>
    </footer>
  );
};
