import React, { useState, useEffect } from 'react';
import { cvData } from '../data/cvData';
import { SupportedLang, uiText } from '../data/translations';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle 
} from 'lucide-react';

interface ExperienceProps {
  lang: SupportedLang;
  navSelection?: { index: number | null; nonce: number } | null;
}

export const Experience: React.FC<ExperienceProps> = ({ lang, navSelection }) => {
  const [filter, setFilter] = useState<string>('all');
  const [highlightedIdx, setHighlightedIdx] = useState<number | null>(null);

  const t = uiText[lang] || uiText.en;

  useEffect(() => {
    if (!navSelection) return;
    setFilter('all');

    if (navSelection.index === null) {
      setHighlightedIdx(null);
      return;
    }

    const targetIndex = navSelection.index;
    setHighlightedIdx(targetIndex);

    const scrollTimer = setTimeout(() => {
      const el = document.getElementById(`exp-${targetIndex}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 60);

    const clearTimer = setTimeout(() => {
      setHighlightedIdx((prev) => (prev === targetIndex ? null : prev));
    }, 2400);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(clearTimer);
    };
  }, [navSelection]);

  const filterCategories = [
    { id: 'all', label: t.experience.filterAll },
    { id: 'rd', label: t.experience.filterRd },
    { id: 'embedded', label: t.experience.filterEmbedded },
    { id: 'it', label: t.experience.filterIt },
    { id: 'electrical', label: t.experience.filterGrid }
  ];

  const filteredExperiences = cvData.experiences
    .map((item, originalIndex) => ({ item, originalIndex }))
    .filter(({ item }) => {
      if (filter === 'all') return true;
      return item.category === filter;
    });

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-100/70 dark:bg-[#0c1322]/70 backdrop-blur-sm border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mb-2">
              <Briefcase className="w-4 h-4" />
              <span>{t.experience.kicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.experience.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              {t.experience.desc}
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-x-auto max-w-full shadow-sm">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  filter === cat.id
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List of Experiences */}
        <div className="space-y-6">
          {filteredExperiences.map(({ item, originalIndex }) => {
            const roleTitle = item.role[lang] || item.role.en;
            const points = item.points[lang] || item.points.en;
            const isHighlighted = highlightedIdx === originalIndex;

            return (
              <div
                key={originalIndex}
                id={`exp-${originalIndex}`}
                className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-sm border transition-all duration-300 relative overflow-hidden ${
                  isHighlighted
                    ? 'border-cyan-500 dark:border-cyan-400 shadow-lg ring-2 ring-cyan-500/25 dark:ring-cyan-400/25'
                    : 'border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-cyan-600 dark:text-cyan-400 font-mono font-medium">
                      <Building2 className="w-4 h-4 shrink-0" />
                      <span>{item.company}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                      {roleTitle}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono self-start sm:self-auto bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800/60">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                    <span aria-hidden="true">·</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-4">
                  {points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
