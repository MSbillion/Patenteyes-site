import { useTranslation } from 'react-i18next';
import { Check, Star } from 'lucide-react';

export function Pricing() {
  const { t } = useTranslation();
  return (
    <section id="pricing" className="bg-white px-6 py-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-2.5" style={{ background: 'linear-gradient(135deg,#FFE9B0,#FFD773)', color: '#854F0B' }}>
            {t('pricing.tag')}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">{t('pricing.title')}</h2>
          <p className="text-sm text-slate-500">{t('pricing.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-[900px] mx-auto pt-3">
          {/* FREE */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 relative">
            <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">{t('pricing.free_name')}</div>
            <div className="flex items-baseline gap-1 mb-2.5"><span className="text-3xl font-extrabold">{t('pricing.free_price')}</span><span className="text-[13px] text-slate-500">{t('pricing.free_period')}</span></div>
            <div className="text-xs text-slate-600 mb-3.5">{t('pricing.free_tagline')}</div>
            <div className="flex flex-col gap-1.5 mb-4">
              {[t('pricing.free_f1'), t('pricing.free_f2'), t('pricing.free_f3')].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                  <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-green-700" strokeWidth={3.5} /></div>{f}
                </div>
              ))}
            </div>
            <button className="btn-jump-shine w-full py-3 rounded-xl text-[13px] font-extrabold bg-slate-50 text-slate-900 border-none">{t('pricing.free_cta')} →</button>
          </div>
          {/* STANDARD */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#1E40AF] relative" style={{ boxShadow: '0 12px 30px rgba(46,99,240,0.18)' }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-2xl text-[10px] font-extrabold text-white whitespace-nowrap" style={{ background: 'linear-gradient(135deg,#3B6FE8,#1E40AF)' }}>{t('pricing.standard_badge')}</div>
            <div className="text-xs font-extrabold uppercase tracking-wider mb-1.5" style={{ background: 'linear-gradient(135deg,#3B6FE8,#1E40AF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('pricing.standard_name')}</div>
            <div className="flex items-baseline gap-1 mb-2.5"><span className="text-3xl font-extrabold">{t('pricing.standard_price')}</span><span className="text-[13px] text-slate-500">{t('pricing.standard_period')}</span></div>
            <div className="text-xs text-slate-600 mb-3.5">{t('pricing.standard_tagline')}</div>
            <div className="flex flex-col gap-1.5 mb-4">
              {[t('pricing.standard_f1'), t('pricing.standard_f2'), t('pricing.standard_f3'), t('pricing.standard_f4')].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#3B6FE8,#1E40AF)' }}><Check className="w-2.5 h-2.5 text-white" strokeWidth={3.5} /></div>{f}
                </div>
              ))}
            </div>
            <button className="btn-jump-shine w-full py-3 rounded-xl text-[13px] font-extrabold text-white border-none" style={{ background: 'linear-gradient(135deg,#3B6FE8,#1E40AF)', boxShadow: '0 6px 14px rgba(46,99,240,0.30)' }}>{t('pricing.standard_cta')} →</button>
          </div>
          {/* PRO */}
          <div className="rounded-2xl p-6 text-white relative overflow-visible" style={{ background: 'linear-gradient(135deg,#1E40AF,#5C36AE)', boxShadow: '0 12px 30px rgba(46,99,240,0.30)' }}>
            <div className="absolute -right-5 -top-5 w-[100px] h-[100px] rounded-full" style={{ background: 'rgba(255,217,107,0.20)' }} />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-2xl text-[10px] font-extrabold flex items-center gap-1 whitespace-nowrap z-10" style={{ background: 'linear-gradient(135deg,#FFD66B,#FBD370)', color: '#5C3A0A', boxShadow: '0 4px 12px rgba(244,194,74,0.55)' }}>
              <Star className="w-2.5 h-2.5 fill-[#5C3A0A] stroke-none" />{t('pricing.pro_badge')}
            </div>
            <div className="text-xs font-extrabold uppercase tracking-wider mb-1.5 text-[#FFD66B] relative">{t('pricing.pro_name')}</div>
            <div className="flex items-baseline gap-1 mb-2.5 relative"><span className="text-3xl font-extrabold">{t('pricing.pro_price')}</span><span className="text-[13px] opacity-85">{t('pricing.pro_period')}</span></div>
            <div className="text-xs opacity-90 mb-3.5 relative">{t('pricing.pro_tagline')}</div>
            <div className="flex flex-col gap-1.5 mb-4 relative">
              {[t('pricing.pro_f1'), t('pricing.pro_f2'), t('pricing.pro_f3'), t('pricing.pro_f4')].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#FFD66B,#FBD370)' }}><Check className="w-2.5 h-2.5" strokeWidth={3.5} style={{ color: '#5C3A0A' }} /></div>
                  {i === 1 ? <strong style={{ color: '#FFD66B' }}>{f}</strong> : f}
                </div>
              ))}
            </div>
            <button className="btn-jump-shine w-full py-3 rounded-xl text-[13px] font-extrabold border-none relative" style={{ background: 'linear-gradient(135deg,#FFD66B,#FBD370)', color: '#0F1A36', boxShadow: '0 6px 14px rgba(244,194,74,0.40)' }}>{t('pricing.pro_cta')} →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
