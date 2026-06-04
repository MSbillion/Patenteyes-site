import { useTranslation } from 'react-i18next';

export function HowItWorks() {
  const { t } = useTranslation();
  const steps = [
    { stripe: 'linear-gradient(90deg,#3B6FE8,#1E40AF)', numBg: 'linear-gradient(135deg,#3B6FE8,#1E40AF)', cardBg: '#fff', border: true, title: t('how.s1_title'), text: t('how.s1_text') },
    { stripe: 'linear-gradient(90deg,#9572E8,#5C36AE)', numBg: 'linear-gradient(135deg,#9572E8,#5C36AE)', cardBg: 'linear-gradient(135deg,#EFE6FB,#DDC9F5)', title: t('how.s2_title'), text: t('how.s2_text') },
    { stripe: 'linear-gradient(90deg,#22D3BD,#0F9E8F)', numBg: 'linear-gradient(135deg,#22D3BD,#0F9E8F)', cardBg: 'linear-gradient(135deg,#D1F4F0,#A8E8E0)', title: t('how.s3_title'), text: t('how.s3_text') },
    { stripe: 'linear-gradient(90deg,#5DD17B,#2E8B57)', numBg: 'linear-gradient(135deg,#5DD17B,#2E8B57)', cardBg: 'linear-gradient(135deg,#E5F5EC,#CDEBD9)', title: t('how.s4_title'), text: t('how.s4_text') },
  ];
  return (
    <section id="how" className="bg-slate-50 px-6 py-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-2.5" style={{ background: 'linear-gradient(135deg,#E6F1FB,#B5D4F4)', color: '#0C447C' }}>
            {t('how.tag')}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">{t('how.title')}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl p-5 text-center relative overflow-hidden" style={{ background: s.cardBg, boxShadow: s.border ? '0 8px 22px rgba(15,26,54,0.08)' : '0 8px 22px rgba(0,0,0,0.10)', border: s.border ? '1.5px solid #ECEEF3' : 'none' }}>
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: s.stripe }} />
              <div className="w-12 h-12 mx-auto mt-1.5 mb-3 rounded-2xl text-white flex items-center justify-center text-xl font-extrabold" style={{ background: s.numBg, boxShadow: '0 6px 14px rgba(0,0,0,0.15)' }}>{i + 1}</div>
              <h3 className="text-[15px] font-extrabold mb-1.5 text-slate-900">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
