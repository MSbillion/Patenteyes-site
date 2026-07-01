import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-3 sticky top-0 z-[100]">
      <div className="flex items-center gap-2 shrink-0">
        <img src="/logo.png" alt="PatenteYes" className="w-9 h-9 sm:w-12 sm:h-12 rounded-[10px] object-contain shrink-0" />
        <div className="text-base sm:text-lg font-extrabold tracking-tight whitespace-nowrap">
          <span className="text-[#1E40AF]">Patente</span><span className="text-[#3FA866]">Yes</span>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 text-sm text-slate-600 font-medium">
        <a href="#how" className="hover:text-blue-700">{t('header.nav_how')}</a>
        <a href="#features" className="hover:text-blue-700">{t('header.nav_features')}</a>
        <a href="#pricing" className="hover:text-blue-700">{t('header.nav_pricing')}</a>
        <a href="#faq" className="hover:text-blue-700">{t('header.nav_faq')}</a>
      </nav>
      <div className="flex gap-2 items-center shrink-0">
        <LanguageSwitcher />
        <button className="bg-white text-[#1E40AF] border-[1.5px] border-[#1E40AF] px-4 py-2 rounded-full text-sm font-bold hidden md:block">
          {t('header.login')}
        </button>
        <button className="btn-jump-shine text-white border-none px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-md leading-tight" style={{ background: 'linear-gradient(135deg,#3B6FE8,#1E40AF)', boxShadow: '0 4px 12px rgba(46,99,240,0.30)' }}>
          {t('header.start_free')}
        </button>
      </div>
    </header>
  );
}
