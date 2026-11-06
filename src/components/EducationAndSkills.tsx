import React from 'react';
import { cvData } from '../data/cvData';
import { SupportedLang, uiText } from '../data/translations';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Code2, 
  Brain,
  Globe2
} from 'lucide-react';

interface EducationAndSkillsProps {
  lang: SupportedLang;
}

export const EducationAndSkills: React.FC<EducationAndSkillsProps> = ({ lang }) => {
  const t = uiText[lang] || uiText.en;

  return (
    <section id="education" className="py-16 md:py-24 bg-slate-100/70 dark:bg-[#0c1322]/70 backdrop-blur-sm border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>{t.education.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.education.title}
          </h2>
        </div>

        {/* Top: Education Card */}
        <div className="mb-12">
          {cvData.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                    <GraduationCap className="w-4 h-4" />
                    <span>{edu.school}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {edu.degree[lang] || edu.degree.en}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                    <span aria-hidden="true">·</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Academic Focus Callout */}
                <div className="md:max-w-md p-4 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200/60 dark:border-cyan-900/40">
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-800 dark:text-cyan-400 font-bold mb-1">
                    {t.education.focusLabel}
                  </div>
                  <p className="text-xs sm:text-sm text-cyan-950 dark:text-cyan-200 font-medium leading-relaxed">
                    {edu.focus[lang] || edu.focus.en}
                  </p>
                </div>
              </div>

              {/* Coursework & Labs Pillars */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {t.education.pillar1Title}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    {t.education.pillar1Desc}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {t.education.pillar2Title}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    {t.education.pillar2Desc}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {t.education.pillar3Title}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    {t.education.pillar3Desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills & Competencies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Technical & Software Skills (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>{t.education.techSkillsTitle}</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">CV Section 5.1</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cvData.skills.technical.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Subtle clean progress indicator */}
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cyan-600 dark:bg-cyan-400 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Qualities & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Professional Qualities */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Brain className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <span>{t.education.profQualitiesTitle}</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">CV Section 5.2</span>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                {cvData.skills.professional.map((qual, qIdx) => (
                  <div key={qIdx} className="border-b last:border-b-0 border-slate-100 dark:border-slate-800/80 pb-2.5 last:pb-0">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {(qual.name as Record<string, string>)[lang] || qual.name.en}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {(qual.desc as Record<string, string>)[lang] || qual.desc.en}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <span>{t.education.languagesTitle}</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">CV Section 6</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cvData.languages.map((l, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {(l.name as Record<string, string>)[lang] || l.name.en}
                      </span>
                      <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                        {l.level}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {(l.badge as Record<string, string>)[lang] || l.badge.en}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                      {(l.details as Record<string, string>)[lang] || l.details.en}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
