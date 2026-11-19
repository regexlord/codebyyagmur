import React, { useState, useRef, useEffect } from 'react';
import { SupportedLang, languagesList, uiText } from '../data/translations';
import { cvData } from '../data/cvData';
import { 
  Sun, 
  Moon, 
  ChevronDown, 
  Menu, 
  X,
  Send,
  Check,
  LayoutGrid,
  Bot,
  Award,
  FileCheck2,
  Building2
} from 'lucide-react';

interface NavbarProps {
  lang: SupportedLang;
  setLang: (l: SupportedLang) => void;
  isDark: boolean;
  setIsDark: (d: boolean) => void;
  onOpenContact: () => void;
  onSelectExperience?: (index: number | null) => void;
  onSelectCertification?: (index: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  isDark,
  setIsDark,
  onOpenContact,
  onSelectExperience,
  onSelectCertification
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileExperienceOpen, setMobileExperienceOpen] = useState(false);
  const [mobileCertsOpen, setMobileCertsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [experienceDropdownOpen, setExperienceDropdownOpen] = useState(false);
  const [certsDropdownOpen, setCertsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const projectsDropdownRef = useRef<HTMLDivElement>(null);
  const experienceDropdownRef = useRef<HTMLDivElement>(null);
  const certsDropdownRef = useRef<HTMLDivElement>(null);

  const t = uiText[lang] || uiText.en;
  const currentLangObj = languagesList.find((l) => l.code === lang) || languagesList[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(e.target as Node)) {
        setProjectsDropdownOpen(false);
      }
      if (experienceDropdownRef.current && !experienceDropdownRef.current.contains(e.target as Node)) {
        setExperienceDropdownOpen(false);
      }
      if (certsDropdownRef.current && !certsDropdownRef.current.contains(e.target as Node)) {
        setCertsDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLangDropdownOpen(false);
        setProjectsDropdownOpen(false);
        setExperienceDropdownOpen(false);
        setCertsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinksEnd = [
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
          <a
            href="#about"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.about}
          </a>

          {/* Projects Dropdown Menu */}
          <div className="relative" ref={projectsDropdownRef}>
            <button
              type="button"
              onClick={() => {
                setProjectsDropdownOpen((prev) => !prev);
                setExperienceDropdownOpen(false);
                setCertsDropdownOpen(false);
                setLangDropdownOpen(false);
              }}
              className={`flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 ${
                projectsDropdownOpen ? 'text-cyan-600 dark:text-cyan-400' : ''
              }`}
              aria-expanded={projectsDropdownOpen}
              aria-haspopup="menu"
            >
              <span>{t.nav.projects}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  projectsDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {projectsDropdownOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2.5 w-60 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
              >
                <a
                  href="#projects"
                  role="menuitem"
                  onClick={() => setProjectsDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                >
                  <LayoutGrid className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{t.nav.viewAllProjects}</span>
                </a>

                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />

                <a
                  href="#dogduino"
                  role="menuitem"
                  onClick={() => setProjectsDropdownOpen(false)}
                  className="flex items-start gap-2.5 px-3.5 py-2.5 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Bot className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {cvData.project.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {cvData.project.type[lang] || cvData.project.type.en}
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Experience Dropdown Menu */}
          <div className="relative" ref={experienceDropdownRef}>
            <button
              type="button"
              onClick={() => {
                setExperienceDropdownOpen((prev) => !prev);
                setProjectsDropdownOpen(false);
                setCertsDropdownOpen(false);
                setLangDropdownOpen(false);
              }}
              className={`flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 ${
                experienceDropdownOpen ? 'text-cyan-600 dark:text-cyan-400' : ''
              }`}
              aria-expanded={experienceDropdownOpen}
              aria-haspopup="menu"
            >
              <span>{t.nav.experience}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  experienceDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {experienceDropdownOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2.5 w-80 max-h-[75vh] overflow-y-auto rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
              >
                <a
                  href="#experience"
                  role="menuitem"
                  onClick={() => {
                    setExperienceDropdownOpen(false);
                    onSelectExperience?.(null);
                  }}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                >
                  <LayoutGrid className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{t.nav.viewAllExperience}</span>
                </a>

                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />

                {cvData.experiences.map((exp, idx) => {
                  const roleTitle = exp.role[lang] || exp.role.en;
                  return (
                    <button
                      key={`${exp.company}-${exp.period}`}
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setExperienceDropdownOpen(false);
                        onSelectExperience?.(idx);
                      }}
                      className="w-full text-left flex items-start gap-2.5 px-3.5 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <div className="font-semibold text-slate-900 dark:text-white leading-snug">
                          {exp.company}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          {roleTitle} · {exp.period}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <a
            href="#education"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.education}
          </a>

          {/* Certifications Dropdown Menu */}
          <div className="relative" ref={certsDropdownRef}>
            <button
              type="button"
              onClick={() => {
                setCertsDropdownOpen((prev) => !prev);
                setProjectsDropdownOpen(false);
                setExperienceDropdownOpen(false);
                setLangDropdownOpen(false);
              }}
              className={`flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 ${
                certsDropdownOpen ? 'text-cyan-600 dark:text-cyan-400' : ''
              }`}
              aria-expanded={certsDropdownOpen}
              aria-haspopup="menu"
            >
              <span>{t.nav.certifications}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  certsDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {certsDropdownOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2.5 w-80 max-h-[75vh] overflow-y-auto rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
              >
                <a
                  href="#certifications"
                  role="menuitem"
                  onClick={() => setCertsDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                >
                  <LayoutGrid className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{t.nav.viewAllCertifications}</span>
                </a>

                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />

                {cvData.certifications.map((cert, idx) => {
                  const hasCertDoc = Boolean(cert.certificates && cert.certificates.length > 0);
                  return (
                    <button
                      key={cert.title}
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setCertsDropdownOpen(false);
                        onSelectCertification?.(idx);
                      }}
                      className="w-full text-left flex items-start gap-2.5 px-3.5 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {hasCertDoc ? (
                        <FileCheck2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      )}
                      <div className="min-w-0">
                        <div className="font-semibold text-slate-900 dark:text-white leading-snug">
                          {cert.title}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          {cert.issuer} · {cert.date}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {navLinksEnd.map((link) => (
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
          
          {/* Multilingual Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setLangDropdownOpen((prev) => !prev);
                setProjectsDropdownOpen(false);
                setExperienceDropdownOpen(false);
                setCertsDropdownOpen(false);
              }}
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
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t.nav.about}
          </a>

          {/* Mobile Projects Expandable Submenu */}
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setMobileProjectsOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-expanded={mobileProjectsOpen}
            >
              <span>{t.nav.projects}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-150 ${
                  mobileProjectsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileProjectsOpen && (
              <div className="pl-4 space-y-1 border-l border-slate-200 dark:border-slate-800 ml-3">
                <a
                  href="#projects"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileProjectsOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>{t.nav.viewAllProjects}</span>
                </a>
                <a
                  href="#dogduino"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileProjectsOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Bot className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>{cvData.project.title}</span>
                </a>
              </div>
            )}
          </div>

          {/* Mobile Experience Expandable Submenu */}
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setMobileExperienceOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-expanded={mobileExperienceOpen}
            >
              <span>{t.nav.experience}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-150 ${
                  mobileExperienceOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileExperienceOpen && (
              <div className="pl-4 space-y-1 border-l border-slate-200 dark:border-slate-800 ml-3 max-h-72 overflow-y-auto">
                <a
                  href="#experience"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileExperienceOpen(false);
                    onSelectExperience?.(null);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <LayoutGrid className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.nav.viewAllExperience}</span>
                </a>
                {cvData.experiences.map((exp, idx) => (
                  <button
                    key={`${exp.company}-${exp.period}`}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileExperienceOpen(false);
                      onSelectExperience?.(idx);
                    }}
                    className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <Building2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="truncate font-semibold text-slate-900 dark:text-white">
                        {exp.company}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        {exp.role[lang] || exp.role.en}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t.nav.education}
          </a>

          {/* Mobile Certifications Expandable Submenu */}
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setMobileCertsOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-expanded={mobileCertsOpen}
            >
              <span>{t.nav.certifications}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-150 ${
                  mobileCertsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileCertsOpen && (
              <div className="pl-4 space-y-1 border-l border-slate-200 dark:border-slate-800 ml-3 max-h-72 overflow-y-auto">
                <a
                  href="#certifications"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileCertsOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <LayoutGrid className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.nav.viewAllCertifications}</span>
                </a>
                {cvData.certifications.map((cert, idx) => {
                  const hasCertDoc = Boolean(cert.certificates && cert.certificates.length > 0);
                  return (
                    <button
                      key={cert.title}
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileCertsOpen(false);
                        onSelectCertification?.(idx);
                      }}
                      className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      {hasCertDoc ? (
                        <FileCheck2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      ) : (
                        <Award className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      )}
                      <span className="truncate">{cert.title}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {navLinksEnd.map((link) => (
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
