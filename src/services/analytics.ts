import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { SupportedLang } from '../data/translations';

export interface VisitEventDoc {
  dayKey: string;
  country: string;
  deviceType: 'desktop' | 'mobile' | 'tablet';
  lang: SupportedLang;
  referrerHost: string;
  createdAt?: Timestamp;
}

export interface SectionClickDoc {
  section: string;
  detail: string;
  dayKey: string;
  country: string;
  lang: SupportedLang;
  createdAt?: Timestamp;
}

export interface DailySeriesItem {
  dayKey: string;
  label: string;
  visits: number;
  clicks: number;
}

export interface BreakdownItem {
  key: string;
  label: string;
  count: number;
  percent: number;
}

export interface AnalyticsSummary {
  todayVisits: number;
  weeklyVisits: number;
  monthlyVisits: number;
  totalVisits: number;
  totalClicks: number;
  dailySeries: DailySeriesItem[];
  countries: BreakdownItem[];
  topSections: BreakdownItem[];
  topDetails: BreakdownItem[];
  devices: BreakdownItem[];
  languages: BreakdownItem[];
}

const VALID_LANGS = new Set<SupportedLang>([
  'bg',
  'cs',
  'de',
  'en',
  'fr',
  'it',
  'pl',
  'ru',
  'sv',
  'tr',
  'zh',
]);

const TIMEZONE_TO_COUNTRY: Record<string, string> = {
  'Europe/Istanbul': 'TR',
  'Asia/Istanbul': 'TR',
  'America/New_York': 'US',
  'America/Chicago': 'US',
  'America/Denver': 'US',
  'America/Los_Angeles': 'US',
  'Europe/London': 'GB',
  'Europe/Berlin': 'DE',
  'Europe/Paris': 'FR',
  'Europe/Rome': 'IT',
  'Europe/Warsaw': 'PL',
  'Europe/Prague': 'CZ',
  'Europe/Sofia': 'BG',
  'Europe/Stockholm': 'SE',
  'Europe/Moscow': 'RU',
  'Asia/Shanghai': 'CN',
  'Europe/Amsterdam': 'NL',
  'Europe/Madrid': 'ES',
  'Europe/Zurich': 'CH',
  'Europe/Vienna': 'AT',
  'Asia/Tokyo': 'JP',
  'Asia/Seoul': 'KR',
  'America/Toronto': 'CA',
};

const COUNTRY_NAMES: Record<string, string> = {
  TR: 'Türkiye',
  US: 'United States',
  GB: 'United Kingdom',
  DE: 'Germany',
  FR: 'France',
  IT: 'Italy',
  PL: 'Poland',
  CZ: 'Czechia',
  BG: 'Bulgaria',
  SE: 'Sweden',
  RU: 'Russia',
  CN: 'China',
  NL: 'Netherlands',
  ES: 'Spain',
  CH: 'Switzerland',
  AT: 'Austria',
  CA: 'Canada',
  JP: 'Japan',
  KR: 'South Korea',
  IN: 'India',
  BR: 'Brazil',
  AU: 'Australia',
  AZ: 'Azerbaijan',
  UNKNOWN: 'Unknown / Blocked',
};

const SECTION_LABELS: Record<string, string> = {
  about: 'About / Profile',
  projects: 'Projects (Overview)',
  dogduino: 'Project: Dogduino',
  aquatrace: 'Project: AquaTrace',
  aquatrace_github: 'AquaTrace GitHub Code',
  experience: 'Work Experience',
  education: 'Education & Skills',
  certifications: 'Courses & Certifications',
  certification_detail: 'Certificate Opened',
  references: 'References',
  contact: 'Contact Section',
  linkedin: 'LinkedIn Profile',
  language_change: 'Language Switch',
};

export function getUtcDayKey(date: Date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

function getSafeLang(lang: SupportedLang): SupportedLang {
  return VALID_LANGS.has(lang) ? lang : 'en';
}

function generateSafeId(prefix: string): string {
  const rand =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID().replace(/-/g, '')
      : `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
  return `${prefix}_${rand}`.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 96);
}

function detectDeviceType(): 'desktop' | 'mobile' | 'tablet' {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

function sanitizeReferrerHost(): string {
  if (typeof document === 'undefined' || !document.referrer) return 'direct';
  try {
    const host = new URL(document.referrer).hostname.replace(/[^a-zA-Z0-9._-]/g, '');
    return host ? host.slice(0, 80) : 'direct';
  } catch {
    return 'direct';
  }
}

function sanitizeCountryCode(raw: unknown): string {
  if (typeof raw === 'string') {
    const upper = raw.trim().toUpperCase();
    if (/^[A-Z]{2}$/.test(upper)) return upper;
  }
  return 'UNKNOWN';
}

let pendingCountryPromise: Promise<string> | null = null;

async function resolveVisitorCountry(): Promise<string> {
  if (typeof window === 'undefined') return 'UNKNOWN';
  try {
    const cached = sessionStorage.getItem('yk_visitor_country');
    if (cached && /^([A-Z]{2}|UNKNOWN)$/.test(cached)) {
      return cached;
    }
  } catch {
    // Ignore storage errors
  }

  if (pendingCountryPromise) return pendingCountryPromise;

  pendingCountryPromise = (async () => {
    let resolved = 'UNKNOWN';
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 2200);
      const res = await fetch('https://api.country.is/', { signal: controller.signal });
      clearTimeout(timeout);
      if (res.ok) {
        const json = (await res.json()) as { country?: string };
        resolved = sanitizeCountryCode(json?.country);
      }
    } catch {
      // Fallback to timezone heuristic if geo API blocked
    }

    if (resolved === 'UNKNOWN') {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz && TIMEZONE_TO_COUNTRY[tz]) {
          resolved = TIMEZONE_TO_COUNTRY[tz];
        }
      } catch {
        // Ignore
      }
    }

    try {
      sessionStorage.setItem('yk_visitor_country', resolved);
    } catch {
      // Ignore
    }
    return resolved;
  })();

  return pendingCountryPromise;
}

export async function recordPageVisit(lang: SupportedLang): Promise<void> {
  if (typeof window === 'undefined') return;
  const dayKey = getUtcDayKey();
  const storageKey = `yk_visit_logged_${dayKey}`;

  try {
    if (sessionStorage.getItem(storageKey) === '1') {
      return;
    }
    sessionStorage.setItem(storageKey, '1');
  } catch {
    // Continue even if sessionStorage unavailable
  }

  const country = await resolveVisitorCountry();
  const eventId = generateSafeId(`v_${dayKey.replace(/-/g, '')}`);
  const path = `visitEvents/${eventId}`;

  try {
    await setDoc(doc(db, 'visitEvents', eventId), {
      dayKey,
      country,
      deviceType: detectDeviceType(),
      lang: getSafeLang(lang),
      referrerHost: sanitizeReferrerHost(),
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    try {
      handleFirestoreError(error, OperationType.CREATE, path);
    } catch {
      // Non-blocking telemetry error: logged via handleFirestoreError
    }
  }
}

const recentClicks = new Map<string, number>();

export async function recordSectionClick(
  sectionRaw: string,
  detailRaw: string = '',
  lang: SupportedLang = 'en'
): Promise<void> {
  if (typeof window === 'undefined') return;

  const section = sectionRaw
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, '_')
    .slice(0, 48);
  if (!section) return;

  const detail = detailRaw.trim().slice(0, 80);
  const throttleKey = `${section}::${detail}`;
  const now = Date.now();
  const lastAt = recentClicks.get(throttleKey) || 0;
  if (now - lastAt < 8000) return;
  recentClicks.set(throttleKey, now);

  const dayKey = getUtcDayKey();
  const country = await resolveVisitorCountry();
  const clickId = generateSafeId(`c_${dayKey.replace(/-/g, '')}`);
  const path = `sectionClicks/${clickId}`;

  try {
    await setDoc(doc(db, 'sectionClicks', clickId), {
      section,
      detail,
      dayKey,
      country,
      lang: getSafeLang(lang),
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    try {
      handleFirestoreError(error, OperationType.CREATE, path);
    } catch {
      // Non-blocking telemetry error: logged via handleFirestoreError
    }
  }
}

export function getCountryDisplayName(code: string): string {
  return COUNTRY_NAMES[code] || code;
}

export function getCountryFlagEmoji(code: string): string {
  if (!/^[A-Z]{2}$/.test(code)) return '🌐';
  const base = 127397;
  return String.fromCodePoint(code.charCodeAt(0) + base, code.charCodeAt(1) + base);
}

function buildBreakdown(
  counts: Map<string, number>,
  total: number,
  labelMapper: (k: string) => string
): BreakdownItem[] {
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([key, count]) => ({
      key,
      label: labelMapper(key),
      count,
      percent: total > 0 ? Math.round((count / total) * 100) : 0,
    }));
}

export async function fetchOwnerAnalytics(): Promise<AnalyticsSummary> {
  let visitDocs: VisitEventDoc[] = [];
  let clickDocs: SectionClickDoc[] = [];

  try {
    const visitsSnap = await getDocs(
      query(collection(db, 'visitEvents'), orderBy('createdAt', 'desc'), limit(2000))
    );
    visitDocs = visitsSnap.docs.map((d) => d.data() as VisitEventDoc);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, 'visitEvents');
  }

  try {
    const clicksSnap = await getDocs(
      query(collection(db, 'sectionClicks'), orderBy('createdAt', 'desc'), limit(3000))
    );
    clickDocs = clicksSnap.docs.map((d) => d.data() as SectionClickDoc);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, 'sectionClicks');
  }

  const now = new Date();
  const todayKey = getUtcDayKey(now);

  const weekAgoDate = new Date(now);
  weekAgoDate.setUTCDate(now.getUTCDate() - 6);
  const weekStartKey = getUtcDayKey(weekAgoDate);

  const monthAgoDate = new Date(now);
  monthAgoDate.setUTCDate(now.getUTCDate() - 29);
  const monthStartKey = getUtcDayKey(monthAgoDate);

  let todayVisits = 0;
  let weeklyVisits = 0;
  let monthlyVisits = 0;

  const visitsByDay = new Map<string, number>();
  const clicksByDay = new Map<string, number>();
  const countryCounts = new Map<string, number>();
  const deviceCounts = new Map<string, number>();
  const langCounts = new Map<string, number>();

  for (const v of visitDocs) {
    if (v.dayKey === todayKey) todayVisits += 1;
    if (v.dayKey >= weekStartKey) weeklyVisits += 1;
    if (v.dayKey >= monthStartKey) monthlyVisits += 1;

    visitsByDay.set(v.dayKey, (visitsByDay.get(v.dayKey) || 0) + 1);
    const cCode = v.country || 'UNKNOWN';
    countryCounts.set(cCode, (countryCounts.get(cCode) || 0) + 1);
    deviceCounts.set(v.deviceType || 'desktop', (deviceCounts.get(v.deviceType || 'desktop') || 0) + 1);
    langCounts.set(v.lang || 'en', (langCounts.get(v.lang || 'en') || 0) + 1);
  }

  const sectionCounts = new Map<string, number>();
  const detailCounts = new Map<string, number>();

  for (const c of clickDocs) {
    clicksByDay.set(c.dayKey, (clicksByDay.get(c.dayKey) || 0) + 1);
    sectionCounts.set(c.section, (sectionCounts.get(c.section) || 0) + 1);
    if (c.detail) {
      detailCounts.set(c.detail, (detailCounts.get(c.detail) || 0) + 1);
    }
  }

  const dailySeries: DailySeriesItem[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now);
    d.setUTCDate(now.getUTCDate() - i);
    const key = getUtcDayKey(d);
    dailySeries.push({
      dayKey: key,
      label: `${key.slice(8, 10)}/${key.slice(5, 7)}`,
      visits: visitsByDay.get(key) || 0,
      clicks: clicksByDay.get(key) || 0,
    });
  }

  return {
    todayVisits,
    weeklyVisits,
    monthlyVisits,
    totalVisits: visitDocs.length,
    totalClicks: clickDocs.length,
    dailySeries,
    countries: buildBreakdown(countryCounts, visitDocs.length, getCountryDisplayName),
    topSections: buildBreakdown(
      sectionCounts,
      clickDocs.length,
      (k) => SECTION_LABELS[k] || k
    ),
    topDetails: buildBreakdown(detailCounts, clickDocs.length, (k) => k).slice(0, 8),
    devices: buildBreakdown(deviceCounts, visitDocs.length, (k) =>
      k.charAt(0).toUpperCase() + k.slice(1)
    ),
    languages: buildBreakdown(langCounts, visitDocs.length, (k) => k.toUpperCase()),
  };
}
