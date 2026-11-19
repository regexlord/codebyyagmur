import React, { useEffect, useState } from 'react';
import { cvData, CertificationItem } from '../data/cvData';
import { SupportedLang, uiText } from '../data/translations';
import { ProtectedCertificateCanvas } from './ProtectedCertificateCanvas';
import { 
  Award, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Info, 
  X, 
  Sparkles,
  ZoomIn,
  Lock,
  ChevronLeft,
  ChevronRight,
  FileCheck2
} from 'lucide-react';

interface CertificationsProps {
  lang: SupportedLang;
  navSelection?: { index: number; nonce: number } | null;
}

export const Certifications: React.FC<CertificationsProps> = ({ lang, navSelection }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null);
  const [isPrivacyHidden, setIsPrivacyHidden] = useState(false);

  const t = uiText[lang] || uiText.en;

  useEffect(() => {
    if (!navSelection) return;
    const cert = cvData.certifications[navSelection.index];
    if (cert) {
      setEnlargedIndex(null);
      setSelectedCert(cert);
    }
  }, [navSelection]);

  const closeAllModals = () => {
    setEnlargedIndex(null);
    setSelectedCert(null);
    setIsPrivacyHidden(false);
  };

  // Anti-screenshot, anti-download, anti-print, and anti-context-menu protection while modal is open
  useEffect(() => {
    if (!selectedCert) {
      setIsPrivacyHidden(false);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const triggerTemporaryCurtain = () => {
      setIsPrivacyHidden(true);
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (document.hasFocus() && !document.hidden) {
          setIsPrivacyHidden(false);
        }
      }, 1800);
    };

    const handleBlur = () => {
      setIsPrivacyHidden(true);
    };

    const handleFocus = () => {
      if (!document.hidden) {
        setIsPrivacyHidden(false);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPrivacyHidden(true);
      } else if (document.hasFocus()) {
        setIsPrivacyHidden(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const isCtrlOrMeta = e.ctrlKey || e.metaKey;

      // Escape key handling
      if (e.key === 'Escape') {
        if (enlargedIndex !== null) {
          setEnlargedIndex(null);
        } else {
          setSelectedCert(null);
        }
        return;
      }

      // Arrow navigation when enlarged
      if (enlargedIndex !== null && selectedCert.certificates && selectedCert.certificates.length > 1) {
        if (e.key === 'ArrowRight') {
          setEnlargedIndex((enlargedIndex + 1) % selectedCert.certificates.length);
          return;
        }
        if (e.key === 'ArrowLeft') {
          setEnlargedIndex(
            (enlargedIndex - 1 + selectedCert.certificates.length) % selectedCert.certificates.length
          );
          return;
        }
      }

      // Detect screenshot keys & shortcuts (PrintScreen, Win+Shift+S, Cmd+Shift+3/4/5)
      if (
        e.key === 'PrintScreen' ||
        e.code === 'PrintScreen' ||
        (e.metaKey && e.shiftKey && ['3', '4', '5', 's'].includes(key)) ||
        (e.ctrlKey && e.shiftKey && key === 's')
      ) {
        e.preventDefault();
        triggerTemporaryCurtain();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('').catch(() => {});
        }
        return;
      }

      // Block Save, Print, View Source, Copy, and DevTools shortcuts
      if (
        (isCtrlOrMeta && ['s', 'p', 'u', 'c'].includes(key)) ||
        (isCtrlOrMeta && e.shiftKey && ['i', 'j', 'c'].includes(key)) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        e.stopPropagation();
        if (key === 'p' || key === 's') {
          triggerTemporaryCurtain();
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen' || e.code === 'PrintScreen') {
        triggerTemporaryCurtain();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('').catch(() => {});
        }
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('keyup', handleKeyUp, true);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('keyup', handleKeyUp, true);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [selectedCert, enlargedIndex]);

  const activeAttachments = selectedCert?.certificates || [];

  return (
    <section id="certifications" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mb-2">
            <Award className="w-4 h-4" />
            <span>{t.certs.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.certs.title}
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cvData.certifications.map((cert, idx) => {
            const isHovered = hoveredIdx === idx;
            const certDesc = cert.description[lang] || cert.description.en;
            const hasCertDoc = Boolean(cert.certificates && cert.certificates.length > 0);

            return (
              <div
                key={idx}
                id={`cert-${idx}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => {
                  setEnlargedIndex(null);
                  setSelectedCert(cert);
                }}
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
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      {hasCertDoc && (
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/70 text-[10px]"
                          title={t.certs.certificatePreviewTitle}
                        >
                          <FileCheck2 className="w-3 h-3" />
                        </span>
                      )}
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{cert.date}</span>
                      </div>
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

      {/* Interactive Modal/Window on Click / Tap for Description + Protected Certificate Preview */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 cert-protected-content"
          onClick={closeAllModals}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4"
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
                onClick={closeAllModals}
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

            {/* Description Section */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.certs.syllabusHeading}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {selectedCert.description[lang] || selectedCert.description.en}
              </p>
            </div>

            {/* Protected Certificate Preview(s) right below Description */}
            {activeAttachments.length > 0 && (
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{t.certs.certificatePreviewTitle}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300">
                    <Lock className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                    <span>{t.certs.protectedBadge}</span>
                  </div>
                </div>

                <div
                  className={`grid gap-3 ${
                    activeAttachments.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                  }`}
                >
                  {activeAttachments.map((att, attIdx) => (
                    <button
                      key={att.key}
                      type="button"
                      onClick={() => setEnlargedIndex(attIdx)}
                      onContextMenu={(e) => e.preventDefault()}
                      className="group relative text-left rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-950 shadow-sm hover:border-cyan-500 dark:hover:border-cyan-400 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    >
                      <ProtectedCertificateCanvas
                        certKey={att.key}
                        isPrivacyHidden={isPrivacyHidden}
                        privacyMessage={t.certs.privacyCurtain}
                      />

                      {/* Hover Zoom Callout Overlay */}
                      <div className="absolute inset-x-0 bottom-0 z-25 p-2.5 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent flex items-center justify-between text-white">
                        <span className="text-[11px] font-medium truncate pr-2">
                          {att.label}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-cyan-500/90 text-slate-950 text-[10px] font-bold shrink-0 group-hover:scale-105 transition-transform">
                          <ZoomIn className="w-3 h-3" />
                          <span>{t.certs.clickToEnlarge}</span>
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{t.certs.protectedNotice}</span>
                </p>
              </div>
            )}

            {/* Status Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.certs.completed} ({selectedCert.date})</span>
              </span>

              <button
                onClick={closeAllModals}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                {t.certs.closePopup}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enlarged Protected Lightbox Overlay (Opens on top of description modal) */}
      {selectedCert && enlargedIndex !== null && activeAttachments[enlargedIndex] && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cert-protected-content"
          onClick={() => setEnlargedIndex(null)}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-slate-800 text-white">
              <div className="min-w-0 pr-3">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold truncate">
                    {activeAttachments[enlargedIndex].label}
                  </h4>
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  {selectedCert.title} · {t.certs.protectedBadge}
                  {activeAttachments.length > 1
                    ? ` (${enlargedIndex + 1} / ${activeAttachments.length})`
                    : ''}
                </div>
              </div>

              <button
                onClick={() => setEnlargedIndex(null)}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors shrink-0"
                aria-label={t.certs.closePopup}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Protected Canvas Viewport */}
            <div className="relative p-3 sm:p-5 bg-slate-950 flex items-center justify-center">
              <ProtectedCertificateCanvas
                certKey={activeAttachments[enlargedIndex].key}
                isEnlarged
                isPrivacyHidden={isPrivacyHidden}
                privacyMessage={t.certs.privacyCurtain}
                className="w-full max-w-4xl rounded-lg shadow-2xl"
              />

              {activeAttachments.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setEnlargedIndex(
                        (enlargedIndex - 1 + activeAttachments.length) % activeAttachments.length
                      )
                    }
                    className="absolute left-5 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/85 hover:bg-slate-800 text-white border border-slate-700 transition-all shadow-lg"
                    aria-label="Previous certificate"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setEnlargedIndex((enlargedIndex + 1) % activeAttachments.length)
                    }
                    className="absolute right-5 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/85 hover:bg-slate-800 text-white border border-slate-700 transition-all shadow-lg"
                    aria-label="Next certificate"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Footer Protection Notice */}
            <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{t.certs.protectedNotice}</span>
              </span>
              <button
                onClick={() => setEnlargedIndex(null)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold shrink-0 transition-colors"
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

