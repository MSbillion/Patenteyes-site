import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { supportedLanguages } from '@/lib/i18n';

const FlagIT = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0">
    <svg viewBox="0 0 22 16" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
      <rect width="7.34" height="16" fill="#009246" />
      <rect x="7.34" width="7.33" height="16" fill="#fff" />
      <rect x="14.67" width="7.33" height="16" fill="#CE2B37" />
    </svg>
  </span>
);

const FlagEN = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0">
    <svg viewBox="0 0 22 16" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
      <rect width="22" height="16" fill="#012169" />
      <line x1="0" y1="0" x2="22" y2="16" stroke="#fff" strokeWidth="3.2" />
      <line x1="22" y1="0" x2="0" y2="16" stroke="#fff" strokeWidth="3.2" />
      <line x1="0" y1="0" x2="22" y2="16" stroke="#C8102E" strokeWidth="1.3" />
      <line x1="22" y1="0" x2="0" y2="16" stroke="#C8102E" strokeWidth="1.3" />
      <rect x="8.6" width="4.8" height="16" fill="#fff" />
      <rect y="5.6" width="22" height="4.8" fill="#fff" />
      <rect x="9.7" width="2.6" height="16" fill="#C8102E" />
      <rect y="6.7" width="22" height="2.6" fill="#C8102E" />
    </svg>
  </span>
);

const FlagAR = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0 bg-[#006C35] items-center justify-center">
    <span className="text-white text-[7px] font-bold leading-none">عربية</span>
  </span>
);

const FlagUR = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0">
    <svg viewBox="0 0 22 16" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
      <rect width="22" height="16" fill="#01411C" />
      <rect width="5.5" height="16" fill="#fff" />
      <circle cx="13.4" cy="8.2" r="5" fill="#fff" />
      <circle cx="15.1" cy="6.9" r="4.1" fill="#01411C" />
      <polygon points="16.96,3.92 17.04,5.48 18.55,5.89 17.09,6.45 17.17,8.01 16.19,6.79 14.73,7.35 15.58,6.04 14.60,4.83 16.11,5.23" fill="#fff" />
    </svg>
  </span>
);

const FlagHI = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0">
    <svg viewBox="0 0 22 16" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
      <rect width="22" height="5.34" fill="#FF9933" />
      <rect y="5.34" width="22" height="5.33" fill="#fff" />
      <rect y="10.67" width="22" height="5.33" fill="#138808" />
      <circle cx="11" cy="8" r="2.35" fill="none" stroke="#000080" strokeWidth="0.4" />
      <line x1="11" y1="8" x2="13.35" y2="8.00" stroke="#000080" strokeWidth="0.18" />
      <line x1="11" y1="8" x2="13.04" y2="9.18" stroke="#000080" strokeWidth="0.18" />
      <line x1="11" y1="8" x2="12.18" y2="10.04" stroke="#000080" strokeWidth="0.18" />
      <line x1="11" y1="8" x2="11.00" y2="10.35" stroke="#000080" strokeWidth="0.18" />
      <line x1="11" y1="8" x2="9.83" y2="10.04" stroke="#000080" strokeWidth="0.18" />
      <line x1="11" y1="8" x2="8.96" y2="9.18" stroke="#000080" strokeWidth="0.18" />
      <line x1="11" y1="8" x2="8.65" y2="8.00" stroke="#000080" strokeWidth="0.18" />
      <line x1="11" y1="8" x2="8.96" y2="6.82" stroke="#000080" strokeWidth="0.18" />
      <line x1="11" y1="8" x2="9.82" y2="5.96" stroke="#000080" strokeWidth="0.18" />
      <line x1="11" y1="8" x2="11.00" y2="5.65" stroke="#000080" strokeWidth="0.18" />
      <line x1="11" y1="8" x2="12.18" y2="5.96" stroke="#000080" strokeWidth="0.18" />
      <line x1="11" y1="8" x2="13.04" y2="6.82" stroke="#000080" strokeWidth="0.18" />
      <circle cx="11" cy="8" r="0.55" fill="#000080" />
    </svg>
  </span>
);

const FlagZH = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0">
    <svg viewBox="0 0 22 16" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
      <rect width="22" height="16" fill="#EE1C25" />
      <polygon points="3.90,1.60 4.44,3.26 6.18,3.26 4.77,4.28 5.31,5.94 3.90,4.92 2.49,5.94 3.03,4.28 1.62,3.26 3.36,3.26" fill="#FFDE00" />
      <polygon points="6.59,2.12 6.99,1.59 6.61,1.06 7.23,1.27 7.62,0.75 7.61,1.40 8.23,1.62 7.60,1.81 7.59,2.46 7.22,1.93" fill="#FFDE00" />
      <polygon points="7.91,3.35 8.49,3.05 8.39,2.40 8.85,2.86 9.43,2.56 9.14,3.14 9.60,3.60 8.96,3.51 8.66,4.09 8.56,3.44" fill="#FFDE00" />
      <polygon points="7.94,5.32 8.60,5.32 8.80,4.70 9.00,5.32 9.66,5.32 9.13,5.71 9.33,6.33 8.80,5.94 8.27,6.33 8.47,5.71" fill="#FFDE00" />
      <polygon points="6.67,6.59 7.26,6.86 7.71,6.38 7.63,7.03 8.22,7.31 7.58,7.43 7.50,8.08 7.18,7.51 6.54,7.64 6.99,7.16" fill="#FFDE00" />
    </svg>
  </span>
);

const FlagES = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0">
    <svg viewBox="0 0 22 16" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
      <rect width="22" height="16" fill="#F1BF00" />
      <rect width="22" height="4" fill="#AA151B" />
      <rect y="12" width="22" height="4" fill="#AA151B" />
    </svg>
  </span>
);

const FlagFR = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0">
    <svg viewBox="0 0 22 16" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
      <rect width="7.34" height="16" fill="#0055A4" />
      <rect x="7.34" width="7.33" height="16" fill="#fff" />
      <rect x="14.67" width="7.33" height="16" fill="#EF4135" />
    </svg>
  </span>
);

const flags: Record<string, () => JSX.Element> = { it: FlagIT, en: FlagEN, ar: FlagAR, ur: FlagUR, hi: FlagHI, zh: FlagZH, es: FlagES, fr: FlagFR };

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const current = supportedLanguages.find((l) => l.code === i18n.language) || supportedLanguages[0];
  const CurrentFlag = flags[current.code];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold bg-slate-100 hover:bg-white hover:border-slate-200 border border-transparent transition-all"
      >
        <CurrentFlag />
        <span className="hidden sm:inline">{current.name}</span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl p-2 z-50 min-w-[200px] border border-slate-100">
            {supportedLanguages.map((lang) => {
              const Flag = flags[lang.code];
              const isActive = lang.code === current.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-left text-sm font-semibold transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-900 hover:bg-slate-50'}`}
                >
                  <Flag />
                  <span>{lang.name}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
