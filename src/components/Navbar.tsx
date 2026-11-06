import React, { useState, useRef, useEffect } from 'react';
import { SupportedLang, languagesList, uiText } from '../data/translations';
import { 
  Sun, 
  Moon, 
  Globe, 
  ChevronDown, 
  Menu, 
  X,
  Send,
  Check,
  Download
} from 'lucide-react';

interface NavbarProps {
  lang: SupportedLang;
  setLang: (l: SupportedLang) => void;
  isDark: boolean;
  setIsDark: (d: boolean) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  isDark,
  setIsDark,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = uiText[lang] || uiText.en;
  const currentLangObj = languagesList.find((l) => l.code === lang) || languagesList[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#dogduino', label: t.nav.dogduino },
    { href: '#experience', label: t.nav.experience },
    { href: '#education', label: t.nav.education },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#references', label: t.nav.references },
    { href: '#contact', label: t.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-950/90 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-mono text-xs font-bold tracking-tighter">
            YK
          </div>
          <span>YAĞMUR KAHRAMAN</span>
        </a>

        {/* Zone 2: Single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Language Selector, Theme Toggle, Contact CTA) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          
          {/* Multilingual Selector Dropdown (8 Languages) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 whitespace-nowrap shrink-0"
              aria-label="Select language"
              aria-expanded={langDropdownOpen}
            >
              <span className="text-sm">{currentLangObj.flag}</span>
              <span className="font-mono font-semibold">{currentLangObj.short}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-44 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3 py-1.5 text-[10px] font-mono text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                  Select Language
                </div>
                {languagesList.map((langItem) => (
                  <button
                    key={langItem.code}
                    onClick={() => {
                      setLang(langItem.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                      lang === langItem.code
                        ? 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{langItem.flag}</span>
                      <span>{langItemItemLabel(langItem)}</span>
                    </div>
                    {lang === langItem.code && <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 shrink-0"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>



          {/* Contact Action */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <Send className="w-3.5 h-3.5 text-cyan-400 dark:text-slate-950" />
            <span>{t.nav.contact}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shrink-0"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-cyan-500 dark:text-slate-950 rounded-lg"
            >
              <Send className="w-4 h-4" />
              <span>{t.nav.contact}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

function langItemItemLabel(langItem: { label: string; code: string }): string {
  return langItem.label;
}
