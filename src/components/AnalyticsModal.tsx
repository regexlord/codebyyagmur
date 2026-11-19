import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
import { auth, FIREBASE_CONSOLE_DATA_URL, googleProvider, OWNER_EMAIL } from '../firebase';
import {
  AnalyticsSummary,
  fetchOwnerAnalytics,
  getCountryFlagEmoji,
} from '../services/analytics';
import {
  BarChart3,
  Calendar,
  ExternalLink,
  Globe,
  Lock,
  LogOut,
  MousePointerClick,
  RefreshCw,
  ShieldAlert,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalyticsModal: React.FC<AnalyticsModalProps> = ({ isOpen, onClose }) => {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [authReady, setAuthReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);

  const isVerifiedOwner =
    Boolean(user) &&
    user?.email === OWNER_EMAIL &&
    user?.emailVerified === true;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
    });
    return () => unsub();
  }, []);

  const loadAnalytics = async () => {
    if (!isVerifiedOwner) return;
    setLoading(true);
    setErrorMsg(null);
    try {
      const data = await fetchOwnerAnalytics();
      setSummary(data);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'Veriler alınırken bir hata oluştu.'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && authReady && isVerifiedOwner) {
      void loadAnalytics();
    }
  }, [isOpen, authReady, isVerifiedOwner]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setErrorMsg(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Google girişi başarısız oldu.');
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setSummary(null);
    setErrorMsg(null);
  };

  const maxDailyVisits = summary
    ? Math.max(1, ...summary.dailySeries.map((d) => d.visits))
    : 1;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
                <Lock className="w-3 h-3" />
                <span>Private Owner Analytics</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Ziyaretçi & Etkileşim İstatistikleri
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Gate */}
        {!user ? (
          <div className="py-10 px-4 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 max-w-md mx-auto">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Yönetici Doğrulaması Gerekli
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Bu gizli panel yalnızca portfolyo sahibi (
                <span className="font-mono">{OWNER_EMAIL}</span>) Google hesabıyla giriş
                yaptığında verileri görüntüler.
              </p>
            </div>
            {errorMsg && (
              <p className="text-xs text-red-600 dark:text-red-400 font-mono">{errorMsg}</p>
            )}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 text-xs sm:text-sm font-semibold shadow-sm transition-colors"
            >
              <span>Google ile Giriş Yap</span>
            </button>
          </div>
        ) : !isVerifiedOwner ? (
          <div className="py-10 px-4 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-red-50 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 max-w-md mx-auto">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Yetkisiz Hesap
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Şu an <span className="font-mono font-semibold">{user.email}</span> ile
                giriş yapılmış durumda. İstatistik verilerine yalnızca doğrulanmış yönetici
                hesabı erişebilir.
              </p>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Çıkış Yap ve Doğru Hesapla Gir</span>
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 text-xs">
              <div className="text-slate-600 dark:text-slate-300 font-mono truncate">
                Oturum: <span className="font-semibold text-slate-900 dark:text-white">{user.email}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={FIREBASE_CONSOLE_DATA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200/70 dark:border-cyan-800/70 font-semibold hover:bg-cyan-100 dark:hover:bg-cyan-900/60 transition-colors"
                >
                  <span>Firebase Konsolunda Aç</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  type="button"
                  onClick={loadAnalytics}
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                  <span>Yenile</span>
                </button>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Çıkış</span>
                </button>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-700 dark:text-red-300 font-mono break-all">
                {errorMsg}
              </div>
            )}

            {summary && (
              <>
                {/* Period KPIs: Daily / Weekly / Monthly / Total */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-1">
                    <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      <span>BUGÜN (GÜNLÜK)</span>
                    </div>
                    <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white tabular-nums">
                      {summary.todayVisits}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-1">
                    <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      <span>SON 7 GÜN (HAFTALIK)</span>
                    </div>
                    <div className="text-2xl font-extrabold font-mono text-cyan-600 dark:text-cyan-400 tabular-nums">
                      {summary.weeklyVisits}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-1">
                    <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      <span>SON 30 GÜN (AYLIK)</span>
                    </div>
                    <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white tabular-nums">
                      {summary.monthlyVisits}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-1">
                    <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <MousePointerClick className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      <span>TOPLAM / TIKLAMA</span>
                    </div>
                    <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white tabular-nums">
                      {summary.totalVisits}{' '}
                      <span className="text-xs font-normal text-slate-400">
                        / {summary.totalClicks}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 14-Day Daily Bar Chart */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <span>Son 14 Günlük Ziyaret Grafiği (UTC)</span>
                    <span className="font-mono text-[11px] text-slate-400">
                      Ziyaret / Etkileşim
                    </span>
                  </div>
                  <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1.5 items-end h-28 pt-2">
                    {summary.dailySeries.map((day) => {
                      const heightPct = Math.max(8, Math.round((day.visits / maxDailyVisits) * 100));
                      return (
                        <div
                          key={day.dayKey}
                          className="flex flex-col items-center gap-1 h-full justify-end group"
                          title={`${day.dayKey}: ${day.visits} ziyaret, ${day.clicks} tıklama`}
                        >
                          <span className="text-[9px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            {day.visits}
                          </span>
                          <div
                            className={`w-full rounded-t-md transition-all ${
                              day.visits > 0
                                ? 'bg-cyan-500 dark:bg-cyan-400 group-hover:bg-cyan-600'
                                : 'bg-slate-200 dark:bg-slate-800'
                            }`}
                            style={{ height: `${day.visits > 0 ? heightPct : 6}%` }}
                          />
                          <span className="text-[9px] font-mono text-slate-400 truncate max-w-full">
                            {day.label.slice(0, 2)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Countries & Most Clicked Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Countries Breakdown */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>Ziyaretçi Ülkeleri</span>
                    </div>
                    {summary.countries.length === 0 ? (
                      <p className="text-xs text-slate-400">Henüz ziyaret kaydı yok.</p>
                    ) : (
                      <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                        {summary.countries.map((item) => (
                          <div key={item.key} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
                                <span>{getCountryFlagEmoji(item.key)}</span>
                                <span>{item.label}</span>
                              </span>
                              <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                                {item.count} ({item.percent}%)
                              </span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                              <div
                                className="h-full bg-cyan-500 rounded-full"
                                style={{ width: `${Math.max(4, item.percent)}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Most Clicked Sections */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <MousePointerClick className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>En Çok Tıklanan Bölümler</span>
                    </div>
                    {summary.topSections.length === 0 ? (
                      <p className="text-xs text-slate-400">Henüz bölüm tıklama kaydı yok.</p>
                    ) : (
                      <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                        {summary.topSections.map((item) => (
                          <div key={item.key} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-medium text-slate-700 dark:text-slate-200 truncate pr-2">
                                {item.label}
                              </span>
                              <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 shrink-0">
                                {item.count} ({item.percent}%)
                              </span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                              <div
                                className="h-full bg-indigo-500 dark:bg-cyan-400 rounded-full"
                                style={{ width: `${Math.max(4, item.percent)}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Specific Clicked Items & Devices/Languages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <div className="font-bold text-slate-800 dark:text-slate-200">
                      En Çok İncelenen Öğeler
                    </div>
                    {summary.topDetails.length === 0 ? (
                      <p className="text-slate-400">Henüz detay etkileşimi yok.</p>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {summary.topDetails.map((item) => (
                          <span
                            key={item.key}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            <span className="truncate max-w-[180px]">{item.label}</span>
                            <span className="font-mono text-[10px] font-bold text-cyan-600 dark:text-cyan-400">
                              {item.count}
                            </span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <div className="font-bold text-slate-800 dark:text-slate-200">
                      Cihaz & Tercih Edilen Dil
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {summary.devices.map((d) => (
                        <span
                          key={d.key}
                          className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-[11px]"
                        >
                          {d.label}: {d.count}
                        </span>
                      ))}
                      {summary.languages.map((l) => (
                        <span
                          key={l.key}
                          className="px-2.5 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200/70 dark:border-cyan-800/70 font-mono text-[11px] text-cyan-700 dark:text-cyan-300"
                        >
                          {l.label}: {l.count}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
