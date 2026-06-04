import { useTranslation } from 'react-i18next';
import { FileText, Clock, Globe, Star } from 'lucide-react';

export function Stats() {
  const { t } = useTranslation();
  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-2.5" style={{ background: 'linear-gradient(135deg,#E5F5EC,#CDEBD9)', color: '#1F6D40' }}>
            {t('stats.tag')}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">{t('stats.title')}</h2>
          <p className="text-sm text-slate-500">{t('stats.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-3.5 max-w-[900px] mx-auto">
          <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#E5F5EC,#CDEBD9)', boxShadow: '0 12px 32px rgba(46,139,87,0.18)' }}>
            <div className="absolute -right-7 -top-7 w-[120px] h-[120px] rounded-full bg-white/40" />
            <div className="flex items-center gap-3.5 mb-3.5 relative">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#5DD17B,#2E8B57)', boxShadow: '0 8px 18px rgba(46,139,87,0.35)' }}>
                <FileText className="w-7 h-7 text-white" strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-4xl font-extrabold tracking-tighter leading-none text-slate-900">{t('stats.big_number')}</div>
                <div className="text-[13px] text-slate-600 font-semibold mt-0.5">{t('stats.big_label')}</div>
              </div>
            </div>
            <div className="text-[13px] text-slate-600 leading-relaxed mt-1.5 relative">{t('stats.big_description')}</div>
          </div>
          {[
            { color: 'purple', bg: 'linear-gradient(135deg,#EFE6FB,#DDC9F5)', icon: <Clock className="w-5 h-5 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#9572E8,#5C36AE)', num: t('stats.mini1_num'), label: t('stats.mini1_label') },
            { color: 'teal', bg: 'linear-gradient(135deg,#D1F4F0,#A8E8E0)', icon: <Globe className="w-5 h-5 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#22D3BD,#0F9E8F)', num: t('stats.mini2_num'), label: t('stats.mini2_label') },
            { color: 'gold', bg: 'linear-gradient(135deg,#FFE9B0,#FFD773)', icon: <Star className="w-5 h-5 text-white fill-white" strokeWidth={0} />, iconBg: 'linear-gradient(135deg,#FBD370,#D9A327)', num: t('stats.mini3_num'), label: t('stats.mini3_label') },
          ].map((m, i) => (
            <div key={i} className="rounded-2xl p-6 text-center relative overflow-hidden" style={{ background: m.bg, boxShadow: '0 8px 22px rgba(0,0,0,0.05)' }}>
              <div className="absolute -right-4 -top-4 w-[60px] h-[60px] rounded-full bg-white/40" />
              <div className="w-11 h-11 mx-auto mb-2.5 rounded-xl flex items-center justify-center relative" style={{ background: m.iconBg }}>{m.icon}</div>
              <div className="text-2xl font-extrabold tracking-tight text-slate-900">{m.num}</div>
              <div className="text-[11px] text-slate-600 font-semibold mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
