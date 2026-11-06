import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { SupportedLang, uiText } from '../data/translations';
import { Users, Mail, Building2, Copy, Check, ExternalLink } from 'lucide-react';

interface ReferencesProps {
  lang: SupportedLang;
}

export const References: React.FC<ReferencesProps> = ({ lang }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const t = uiText[lang] || uiText.en;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="references" className="py-16 md:py-24 bg-slate-100/70 dark:bg-[#0c1322]/70 backdrop-blur-sm border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mb-2">
            <Users className="w-4 h-4" />
            <span>{t.references.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.references.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            {t.references.desc}
          </p>
        </div>

        {/* 3-in-a-row reference cards - ONLY EMAIL (NO PHONE NUMBERS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cvData.references.map((ref, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-5"
            >
              <div className="space-y-2">
                <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                  0{idx + 1}. {t.references.refIndex}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {ref.name}
                </h3>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {ref.title[lang] || ref.title.en}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{ref.organization}</span>
                </div>
              </div>

              {/* Contact Actions: Strictly Email Correspondence */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                <div className="text-[11px] font-mono text-slate-400">
                  {t.references.directEmail}
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800/60">
                  <a
                    href={`mailto:${ref.email}`}
                    className="flex items-center gap-2 truncate text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400"
                    title={ref.email}
                  >
                    <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="truncate font-mono text-[11px] font-medium">{ref.email}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(ref.email, `email-${idx}`)}
                    className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors shrink-0 ml-1"
                    title={t.references.copyEmail}
                  >
                    {copiedText === `email-${idx}` ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
