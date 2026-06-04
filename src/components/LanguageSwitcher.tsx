import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { supportedLanguages } from '@/lib/i18n';

const FlagIT = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0">
    <span className="flex-1 bg-[#009246]" />
    <span className="flex-1 bg-white" />
    <span className="flex-1 bg-[#CE2B37]" />
  </span>
);
const FlagEN = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0 relative bg-[#012169]">
    <span className="absolute inset-0" style={{ background: 'linear-gradient(135deg,transparent calc(50% - 1px),#fff calc(50% - 1px),#fff calc(50% + 1px),transparent calc(50% + 1px)),linear-gradient(45deg,transparent calc(50% - 1px),#fff calc(50% - 1px),#fff calc(50% + 1px),transparent calc(50% + 1px))' }} />
    <span className="absolute inset-0" style={{ background: 'linear-gradient(0deg,transparent calc(50% - 2px),#C8102E calc(50% - 2px),#C8102E calc(50% + 2px),transparent calc(50% + 2px)),linear-gradient(90deg,transparent calc(50% - 2px),#C8102E calc(50% - 2px),#C8102E calc(50% + 2px),transparent calc(50% + 2px))' }} />
  </span>
);
const FlagAR = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0 bg-[#006C35] items-center justify-center">
    <span className="text-white text-[7px] font-bold leading-none">عربية</span>
  </span>
);
const FlagUR = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0 bg-[#01411C]">
    <span className="w-[6px] h-full bg-white" />
    <span className="flex-1 flex items-center justify-center text-white text-[8px]">☪</span>
  </span>
);
const FlagHI = () => (
  <span className="inline-flex flex-col w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0">
    <span className="flex-1 bg-[#FF9933]" />
    <span className="flex-1 bg-white flex items-center justify-center">
      <span className="w-[5px] h-[5px] rounded-full border border-[#000080]" />
    </span>
    <span className="flex-1 bg-[#138808]" />
  </span>
);
const FlagZH = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0 bg-[#EE1C25] items-center justify-start pl-[3px]">
    <span className="text-[#FFD700] text-[10px] leading-none">★</span>
  </span>
);
const FlagES = () => (
  <span className="inline-flex flex-col w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0">
    <span className="bg-[#AA151B]" style={{ height: '25%' }} />
    <span className="bg-[#F1BF00]" style={{ height: '50%' }} />
    <span className="bg-[#AA151B]" style={{ height: '25%' }} />
  </span>
);
const FlagFR = () => (
  <span className="inline-flex w-[22px] h-4 rounded-sm overflow-hidden shadow-sm shrink-0">
    <span className="flex-1 bg-[#0055A4]" />
    <span className="flex-1 bg-white" />
    <span className="flex-1 bg-[#EF4135]" />
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
        <span>{current.name}</span>
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
