import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();
  const linkClass = "cursor-pointer hover:opacity-100 transition-opacity";
  return (
    <footer className="bg-slate-900 text-white px-6 pt-12 pb-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-6 pb-8 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3.5">
              <img src="/logo.png" alt="PatenteYes" className="w-12 h-12 rounded-[10px] bg-white p-1 object-contain" />
              <div className="text-lg font-extrabold tracking-tight"><span className="text-[#3B6FE8]">Patente</span> <span className="text-[#5DD17B]">Yes</span></div>
            </div>
            <div className="text-[13px] opacity-70 leading-relaxed mb-3.5">{t('footer.bio')}</div>
            <div className="text-xs text-[#FFD66B] font-bold italic">"{t('footer.motto')}"</div>
          </div>
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-wider opacity-55 mb-3">{t('footer.col_app')}</h4>
            <ul className="flex flex-col gap-2 text-[13px] opacity-85">
              <li className={linkClass}>{t('footer.app_quiz')}</li>
              <li className={linkClass}>{t('footer.app_giulia')}</li>
              <li className={linkClass}>{t('footer.app_sim')}</li>
              <li className={linkClass}>{t('footer.app_blog')}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-wider opacity-55 mb-3">{t('footer.col_services')}</h4>
            <ul className="flex flex-col gap-2 text-[13px] opacity-85">
              <li className={linkClass}>{t('footer.svc_schools')}</li>
              <li className={linkClass}>{t('footer.svc_group')}</li>
              <li className={linkClass}>{t('footer.svc_referral')}</li>
              <li className={linkClass}>{t('footer.svc_codes')}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-wider opacity-55 mb-3">{t('footer.col_company')}</h4>
            <ul className="flex flex-col gap-2 text-[13px] opacity-85">
              <li className={linkClass}>{t('footer.co_about')}</li>
              <li className={linkClass}>{t('footer.co_jobs')}</li>
              <li className={linkClass}>{t('footer.co_contact')}</li>
              <li className={linkClass}>{t('footer.co_press')}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-wider opacity-55 mb-3">{t('footer.col_legal')}</h4>
            <ul className="flex flex-col gap-2 text-[13px] opacity-85">
              <li><a href="/privacy/" className={linkClass}>{t('footer.legal_privacy')}</a></li>
              <li><a href="/termini/" className={linkClass}>{t('footer.legal_terms')}</a></li>
              <li><a href="/cookie/" className={linkClass}>{t('footer.legal_cookies')}</a></li>
            </ul>
          </div>
        </div>
        <div className="py-4 border-b border-white/10 text-[11px] opacity-65 leading-relaxed">
          <strong className="text-[#FFD66B]">{t('footer.disclaimer_title')}</strong> {t('footer.disclaimer_text')}
        </div>
        <div className="flex justify-between items-center pt-4 flex-wrap gap-3.5">
          <div className="text-[11px] opacity-55">{t('footer.copyright')}</div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer" style={{ background: 'linear-gradient(135deg,#1877F2,#0C5DC7)' }}><Facebook className="w-4 h-4 text-white fill-white" /></div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer" style={{ background: 'linear-gradient(135deg,#E4405F,#833AB4)' }}><Instagram className="w-3.5 h-3.5 text-white" /></div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer bg-black"><svg width="13" height="13" viewBox="0 0 24 24" fill="#fff"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71z"/></svg></div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer" style={{ background: 'linear-gradient(135deg,#FF0000,#CC0000)' }}><Youtube className="w-4 h-4 text-white fill-white" /></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
