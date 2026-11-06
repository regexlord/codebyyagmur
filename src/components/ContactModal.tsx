import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { SupportedLang, uiText } from '../data/translations';
import { X, Mail, Linkedin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: SupportedLang;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const t = uiText[lang] || uiText.en;

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${cvData.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {t.contact.title} — YAĞMUR KAHRAMAN
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {cvData.personal.location} · {cvData.personal.shortTitle[lang] || cvData.personal.shortTitle.en}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6">
          
          {/* Quick Direct Contacts (Email and LinkedIn ONLY, no phone) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Email Box */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
              <a 
                href={`mailto:${cvData.personal.email}`}
                className="flex items-center gap-2.5 truncate text-xs text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="truncate font-mono">{cvData.personal.email}</span>
              </a>
              <button
                onClick={() => handleCopy(cvData.personal.email, 'email')}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 ml-1 shrink-0"
              >
                {copied === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* LinkedIn Box */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
              <a 
                href={cvData.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 truncate text-xs text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <Linkedin className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="truncate font-mono">LinkedIn Profile</span>
              </a>
              <a
                href={cvData.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 ml-1 shrink-0"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <div className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                {t.contact.successTitle}
              </div>
              <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80">
                {t.contact.successDesc}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 underline"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.contact.nameField}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.contact.emailField}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.subjectField}
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.contact.subjectPlaceholder}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.messageField}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-slate-900 dark:text-white resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 rounded-xl transition-all shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.contact.submitButton}</span>
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
