import { useTranslation } from 'react-i18next';
import { MessageSquare, CheckSquare, FileText, Calendar, Bell, BarChart3, Smartphone } from 'lucide-react';

const EarthGlobe = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" className="block">
    <defs>
      <radialGradient id="globeGradF" cx="35%" cy="35%">
        <stop offset="0%" stopColor="#7BC8FF" />
        <stop offset="100%" stopColor="#1E5DAA" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="42" fill="url(#globeGradF)" />
    <path d="M 18 38 Q 25 32 35 35 Q 42 30 50 33 Q 58 35 62 30 Q 70 28 78 32 L 80 38 Q 72 42 65 40 Q 58 44 52 42 Q 46 46 38 44 Q 28 46 18 38 Z" fill="#3FA866" opacity="0.85" />
    <path d="M 28 55 Q 35 52 42 56 Q 50 54 58 58 Q 65 56 72 60 L 70 68 Q 60 70 52 66 Q 45 70 38 66 Q 32 64 28 55 Z" fill="#3FA866" opacity="0.85" />
    <ellipse cx="50" cy="50" rx="42" ry="14" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.4" />
    <ellipse cx="50" cy="50" rx="42" ry="28" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
    <line x1="50" y1="8" x2="50" y2="92" stroke="#fff" strokeWidth="0.8" opacity="0.3" />
    <ellipse cx="50" cy="50" rx="20" ry="42" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.25" />
    <circle cx="40" cy="35" r="6" fill="#fff" opacity="0.20" />
  </svg>
);

export function Features() {
  const { t } = useTranslation();
  const features = [
    { color: 'purple', bg: 'linear-gradient(135deg,#EFE6FB,#DDC9F5)', shadow: '0 12px 32px rgba(122,79,214,0.18)', icon: <EarthGlobe />, iconBg: 'linear-gradient(135deg,#9572E8,#5C36AE)', title: t('features.f1_title'), text: t('features.f1_text') },
    { color: 'orange', bg: 'linear-gradient(135deg,#FFE7CC,#FFD9A8)', shadow: '0 12px 32px rgba(243,155,42,0.18)', icon: <MessageSquare className="w-6 h-6 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#F8A93D,#E5841A)', title: t('features.f2_title'), text: t('features.f2_text') },
    { color: 'teal', bg: 'linear-gradient(135deg,#D1F4F0,#A8E8E0)', shadow: '0 12px 32px rgba(20,184,166,0.18)', icon: <CheckSquare className="w-6 h-6 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#22D3BD,#0F9E8F)', title: t('features.f3_title'), text: t('features.f3_text') },
    { color: 'gold', bg: 'linear-gradient(135deg,#FFE9B0,#FFD773)', shadow: '0 12px 32px rgba(244,194,74,0.18)', icon: <FileText className="w-6 h-6 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#FBD370,#D9A327)', title: t('features.f4_title'), text: t('features.f4_text') },
    { color: 'green', bg: 'linear-gradient(135deg,#E5F5EC,#CDEBD9)', shadow: '0 12px 32px rgba(46,139,87,0.18)', icon: <Calendar className="w-6 h-6 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#5DD17B,#2E8B57)', title: t('features.f5_title'), text: t('features.f5_text') },
    { color: 'blue', bg: 'linear-gradient(135deg,#E6F1FB,#B5D4F4)', shadow: '0 12px 32px rgba(46,99,240,0.18)', icon: <Bell className="w-6 h-6 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#3B6FE8,#1E40AF)', title: t('features.f6_title'), text: t('features.f6_text') },
    { color: 'pink', bg: 'linear-gradient(135deg,#F8DEE8,#F2C4D5)', shadow: '0 12px 32px rgba(214,98,138,0.18)', icon: <BarChart3 className="w-6 h-6 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#D86A91,#B84770)', title: t('features.f7_title'), text: t('features.f7_text') },
    { color: 'red', bg: 'linear-gradient(135deg,#FCEBEB,#F7C1C1)', shadow: '0 12px 32px rgba(224,68,68,0.18)', icon: <Smartphone className="w-6 h-6 text-white" strokeWidth={2.2} />, iconBg: 'linear-gradient(135deg,#ED5E5E,#B92E2E)', title: t('features.f8_title'), text: t('features.f8_text') },
  ];
  return (
    <section id="features" className="px-6 py-12" style={{ background: 'linear-gradient(180deg,#fff 0%,#F4F6FB 100%)' }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-2.5" style={{ background: 'linear-gradient(135deg,#EFE6FB,#DDC9F5)', color: '#5C36AE' }}>
            {t('features.tag')}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">{t('features.title')}</h2>
          <p className="text-sm text-slate-500">{t('features.subtitle')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl p-5 min-h-[200px] relative overflow-hidden" style={{ background: f.bg, boxShadow: f.shadow }}>
              <div className="absolute -right-7 -top-7 w-[120px] h-[120px] rounded-full bg-white/40" />
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3.5 relative z-10 p-1.5" style={{ background: f.iconBg }}>{f.icon}</div>
              <h3 className="text-base font-extrabold mb-1.5 text-slate-900 relative z-10">{f.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed relative z-10">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
