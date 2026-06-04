import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) setVisible(true);
  }, []);

  const handleAccept = (level: 'necessary' | 'all') => {
    localStorage.setItem('cookie_consent', level);
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setVisible(false);
    // Developer note: load Meta Pixel, TikTok Pixel, GA only if level === 'all'
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-[3px] border-blue-600 z-[9999] p-5 flex items-center justify-between gap-5 flex-wrap">
      <div className="flex-1 min-w-[260px]">
        <h4 className="text-sm font-bold mb-1 flex items-center gap-2 text-slate-900">🍪 {t('cookies.title')}</h4>
        <p className="text-xs text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('cookies.text') }} />
      </div>
      <div className="flex gap-2 flex-wrap">
        <button onClick={() => handleAccept('necessary')} className="px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200 transition-colors">
          {t('cookies.btn_necessary')}
        </button>
        <button onClick={() => handleAccept('all')} className="px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg,#3B6FE8,#1E40AF)' }}>
          {t('cookies.btn_accept')}
        </button>
      </div>
    </div>
  );
}
