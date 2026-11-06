import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { SupportedLang, uiText } from '../data/translations';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

interface ContactSectionProps {
  lang: SupportedLang;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = uiText[lang] || uiText.en;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const fullSubject = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject || 'Engineering Role'} - ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Sender Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company/Institution: ${formData.company || 'N/A'}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\nSent via Yağmur Kahraman Portfolio Contact Form`
    );

    window.location.href = `mailto:${cvData.personal.email}?subject=${fullSubject}&body=${bodyContent}`;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Engineering ambient glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200/80 dark:border-cyan-800/80 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {t.contact.desc}
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Info Cards (NO PHONE as requested) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with direct click and copy */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-cyan-500/60 dark:hover:border-cyan-400/60 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {t.contact.emailLabel}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {t.contact.emailAction}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(cvData.personal.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Copy Email"
                >
                  {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <a
                href={`mailto:${cvData.personal.email}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-400 hover:underline break-all"
              >
                <span>{cvData.personal.email}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-cyan-500/60 dark:hover:border-cyan-400/60 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {t.contact.linkedinLabel}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      LinkedIn
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(cvData.personal.linkedinUrl, 'linkedin')}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Copy LinkedIn URL"
                >
                  {copiedItem === 'linkedin' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <a
                href={cvData.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 hover:underline break-all"
              >
                <span>{cvData.personal.linkedin}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>

            {/* Location & Prompt Response Note */}
            <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-600 dark:text-slate-400 space-y-2">
              <div className="flex items-center gap-2 font-medium text-slate-800 dark:text-slate-200">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{cvData.personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{t.contact.responseSpeed}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/90 dark:border-slate-800 shadow-xl relative">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {t.contact.formSubtitle}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    {t.contact.successTitle}
                  </h4>
                  <p className="text-xs text-emerald-800/90 dark:text-emerald-300/90 max-w-md mx-auto leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
                    }}
                    className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl transition-colors"
                  >
                    <span>{t.contact.sendAnother}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.nameField}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-white transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.emailField}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.companyField}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t.contact.companyPlaceholder}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-white transition-all"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.subjectField}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={t.contact.subjectPlaceholder}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.messageField}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-white resize-none transition-all"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-slate-400 font-mono">
                      {t.contact.requiredNote}
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 rounded-xl transition-all shadow-md hover:shadow-cyan-500/20 hover:-translate-y-0.5"
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

      </div>
    </section>
  );
};
