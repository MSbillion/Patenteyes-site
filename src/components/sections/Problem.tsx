import { useTranslation } from 'react-i18next';
import { Globe, Clock, Sun } from 'lucide-react';

export function Problem() {
  const { t } = useTranslation();
  const cards = [
    { color: 'pink', bg: 'linear-gradient(135deg,#F8DEE8,#F2C4D5)', shadow: '0 8px 22px rgba(214,98,138,0.18)', icon: <Globe className="w-5 h-5 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#D86A91,#B84770)', title: t('problem.card1_title'), text: t('problem.card1_text') },
    { color: 'orange', bg: 'linear-gradient(135deg,#FFE7CC,#FFD9A8)', shadow: '0 8px 22px rgba(243,155,42,0.18)', icon: <Clock className="w-5 h-5 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#F8A93D,#E5841A)', title: t('problem.card2_title'), text: t('problem.card2_text') },
    { color: 'red', bg: 'linear-gradient(135deg,#FCEBEB,#F7C1C1)', shadow: '0 8px 22px rgba(224,68,68,0.18)', icon: <Sun className="w-5 h-5 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#ED5E5E,#B92E2E)', title: t('problem.card3_title'), text: t('problem.card3_text') },
  ];
  return (
    <section className="bg-slate-50 px-6 py-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-2.5" style={{ background: 'linear-gradient(135deg,#FCE4E4,#F7C1C1)', color: '#A32D2D' }}>
            {t('problem.tag')}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">{t('problem.title')}</h2>
          <p className="text-sm text-slate-500">{t('problem.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl p-6 relative overflow-hidden" style={{ background: c.bg, boxShadow: c.shadow }}>
              <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full bg-white/40" />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 relative z-10" style={{ background: c.iconBg }}>{c.icon}</div>
              <h3 className="text-base font-extrabold mb-1 text-slate-900 relative z-10">{c.title}</h3>
              <p className="text-[13px] text-slate-600 leading-relaxed relative z-10">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
