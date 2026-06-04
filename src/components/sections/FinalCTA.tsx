import { useTranslation } from 'react-i18next';

export function FinalCTA() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden text-center text-white px-6 py-12" style={{ background: 'linear-gradient(135deg,#3B6FE8,#1E40AF 70%,#1E3A8A)' }}>
      <div className="absolute -right-12 -top-12 w-[200px] h-[200px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(63,168,102,0.20),transparent 70%)' }} />
      <div className="max-w-[600px] mx-auto relative">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2.5">{t('cta.title')}</h2>
        <p className="text-[15px] opacity-90 mb-5">{t('cta.subtitle')}</p>
        <div className="flex gap-2.5 justify-center items-center flex-wrap">
          <button className="btn-jump-shine text-white border-none px-7 py-3.5 rounded-xl text-sm font-extrabold" style={{ background: 'linear-gradient(135deg,#5DD17B,#2E8B57)', boxShadow: '0 8px 22px rgba(46,139,87,0.40)' }}>
            {t('cta.btn_primary')} →
          </button>
          <div className="flex gap-2">
            <div className="bg-slate-900 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer border border-white/10">
              <svg width="24" height="24" viewBox="0 0 384 512" fill="#fff"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              <div className="text-left leading-none"><div className="text-[9px] opacity-85 mb-0.5">{t('cta.store_download')}</div><div className="text-sm font-bold">{t('cta.store_apple')}</div></div>
            </div>
            <div className="bg-slate-900 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer border border-white/10">
              <svg width="24" height="24" viewBox="0 0 512 512">
                <path fill="#00D7FE" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"/>
                <path fill="#00F076" d="M104.6 13C99.1 16.1 95.3 21.6 95.3 28.7v454.5c0 7.1 3.8 12.6 9.4 15.7l220.7-220.6L104.6 13z"/>
                <path fill="#FFCE00" d="M385.4 174.2l-60.1 60.1 60.1 60.1 70.7-40.5c20.2-11.6 20.2-44.6 0-56.2l-70.7-40.5z"/>
                <path fill="#FE3D44" d="M104.6 498.9c5.5 3.1 12.5 2.7 20.5-1.8l260.4-149-60.1-60.1L104.6 498.9z"/>
              </svg>
              <div className="text-left leading-none"><div className="text-[9px] opacity-85 mb-0.5">{t('cta.store_download')}</div><div className="text-sm font-bold">{t('cta.store_google')}</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
