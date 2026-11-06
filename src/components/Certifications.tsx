import React, { useState } from 'react';
import { cvData, CertificationItem } from '../data/cvData';
import { SupportedLang, uiText } from '../data/translations';
import { 
  Award, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Info, 
  X, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface CertificationsProps {
  lang: SupportedLang;
}

export const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const t = uiText[lang] || uiText.en;

  return (
    <section id="certifications" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mb-2">
              <Award className="w-4 h-4" />
              <span>{t.certs.kicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.certs.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {t.certs.desc}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-200/80 dark:border-cyan-800/80">
              {t.certs.countBadge}
            </span>
            <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
              · {t.certs.popupPrompt}
            </span>
          </div>
        </div>

        {/* 7 Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cvData.certifications.map((cert, idx) => {
            const isHovered = hoveredIdx === idx;
            const certDesc = cert.description[lang] || cert.description.en;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setSelectedCert(cert)}
                className={`relative p-5 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-sm border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 group ${
                  isHovered || selectedCert?.title === cert.title
                    ? 'border-cyan-500 dark:border-cyan-400 shadow-lg -translate-y-1'
                    : 'border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    {/* Clean unboxed date */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
                    {cert.issuer}
                  </div>
                </div>

                {/* Hover Popover Window attached to card */}
                {isHovered && (
                  <div className="absolute left-2 right-2 -bottom-2 translate-y-full z-30 p-3.5 rounded-xl bg-slate-950 text-white border border-slate-700 shadow-2xl animate-in fade-in zoom-in-95 duration-150 pointer-events-none hidden lg:block">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1">
                      <Info className="w-3 h-3" />
                      <span>{cert.title}</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-sans">
                      {certDesc}
                    </p>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{cert.category}</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" />
                    <span className="text-[10px]">{t.certs.clickToView}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal/Window on Click / Tap for deep reading */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-lg w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {selectedCert.category} · {selectedCert.date}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {selectedCert.title}
                  </h4>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={t.certs.closePopup}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Issuer Badge */}
            <div className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {selectedCert.issuer}
            </div>

            {/* 2-3 Sentence Technical Description Requested by User */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'tr' ? 'Eğitim & Kurs Kapsamı' : 'Course Syllabus & Technical Relevance'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {selectedCert.description[lang] || selectedCert.description.en}
              </p>
            </div>

            {/* Status Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.certs.completed} ({selectedCert.date})</span>
              </span>

              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                {t.certs.closePopup}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
