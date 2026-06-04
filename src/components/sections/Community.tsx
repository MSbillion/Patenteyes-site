import { useTranslation } from 'react-i18next';
import { Globe, MessageSquare, Target } from 'lucide-react';

export function Community() {
  const { t } = useTranslation();
  const tags = ['🇮🇹 Italiano', '🇸🇦 Arabo', '🇵🇰 Urdu', '🇮🇳 Hindi', '🇨🇳 Cinese', '🇪🇸 Spagnolo', '🇫🇷 Francese', '🇬🇧 English'];
  return (
    <section className="bg-white px-6 py-12 relative overflow-hidden">
      <div className="absolute -left-24 top-1/2 w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(149,114,232,0.10),transparent 70%)' }} />
      <div className="absolute -right-24 -bottom-12 w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(34,211,189,0.10),transparent 70%)' }} />
      <div className="max-w-[1100px] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-2.5" style={{ background: 'linear-gradient(135deg,#E6F1FB,#B5D4F4)', color: '#0C447C' }}>
              {t('community.tag')}
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">
              {t('community.title_part1')} <span style={{ background: 'linear-gradient(135deg,#3B6FE8,#5C36AE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('community.title_part2')}</span>
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-4">{t('community.description')}</p>
            <div className="flex flex-col gap-2.5 mb-5">
              {[
                { icon: <Globe className="w-4 h-4 text-white" strokeWidth={2.2} />, bg: 'linear-gradient(135deg,#3B6FE8,#1E40AF)', text: t('community.point1') },
                { icon: <MessageSquare className="w-4 h-4 text-white" strokeWidth={2.2} />, bg: 'linear-gradient(135deg,#9572E8,#5C36AE)', text: t('community.point2') },
                { icon: <Target className="w-4 h-4 text-white" strokeWidth={2.2} />, bg: 'linear-gradient(135deg,#22D3BD,#0F9E8F)', text: t('community.point3') },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: p.bg }}>{p.icon}</div>
                  <span dangerouslySetInnerHTML={{ __html: p.text }} />
                </div>
              ))}
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {tags.map((tag, i) => (
                <span key={i} className="bg-slate-50 px-3 py-1.5 rounded-full text-xs font-semibold">{tag}</span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-2 left-2 -right-2 -bottom-2 rounded-3xl opacity-20" style={{ background: 'linear-gradient(135deg,#3B6FE8,#22D3BD)' }} />
            <div className="relative aspect-[1.1/1] rounded-3xl overflow-hidden" style={{ boxShadow: '0 24px 48px rgba(15,26,54,0.18)' }}>
              <img src="/hero-group.jpg" alt="PatenteYes Community" className="w-full h-full object-cover block" />
            </div>
            <div className="absolute -top-3 -right-3 bg-white rounded-2xl px-3 py-2 flex items-center gap-2" style={{ boxShadow: '0 12px 28px rgba(0,0,0,0.15)' }}>
              <div className="flex">
                <div className="w-6 h-6 rounded-full border-2 border-white -mr-1.5" style={{ background: 'linear-gradient(135deg,#C99775,#9C6E4F)' }} />
                <div className="w-6 h-6 rounded-full border-2 border-white -mr-1.5" style={{ background: 'linear-gradient(135deg,#7A4F2C,#4A2D14)' }} />
                <div className="w-6 h-6 rounded-full border-2 border-white" style={{ background: 'linear-gradient(135deg,#A87852,#7A4F2C)' }} />
              </div>
              <div>
                <div className="text-[11px] font-extrabold text-slate-900 leading-none">{t('community.badge_title')}</div>
                <div className="text-[9px] text-[#5DD17B] mt-0.5">{t('community.badge_subtitle')} 🌍</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
