import { useTranslation } from 'react-i18next';
import { Check, Globe, Star } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden min-h-[600px]" style={{ background: 'linear-gradient(135deg,#3B6FE8 0%,#1E40AF 70%,#1E3A8A 100%)' }}>
      <div className="absolute left-[-100px] top-[-100px] w-[340px] h-[340px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(149,114,232,0.4),transparent 70%)' }} />
      <div className="absolute right-[25%] top-[20%] w-[160px] h-[160px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(34,211,189,0.3),transparent 70%)' }} />
      <div className="absolute right-[5%] bottom-[-60px] w-[240px] h-[240px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(63,168,102,0.25),transparent 70%)' }} />

      <div className="grid md:grid-cols-[1.05fr_1.1fr] gap-8 items-center max-w-[1100px] mx-auto px-6 md:px-8 py-12 md:py-14 relative z-10">
        <div>
          <div className="motto-shiny inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold mb-4 tracking-wide">
            <Star className="w-3.5 h-3.5 fill-[#5C3A0A] stroke-none" />
            {t('hero.motto')}
            <Star className="w-3.5 h-3.5 fill-[#5C3A0A] stroke-none" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-none tracking-tight text-white mb-4">
            {t('hero.title_part1')}
            <br />
            <span style={{ background: 'linear-gradient(135deg,#5DD17B,#22D3BD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {t('hero.title_part2')}
            </span>
          </h1>
          <p className="text-base text-white/90 leading-relaxed mb-6 max-w-[520px]" dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }} />

          <div className="flex flex-col gap-2 mb-6 max-w-[480px]">
            {[
              { color: 'linear-gradient(135deg,#5DD17B,#2E8B57)', text: t('hero.bullet_1') },
              { color: 'linear-gradient(135deg,#22D3BD,#0F9E8F)', text: t('hero.bullet_2') },
              { color: 'linear-gradient(135deg,#9572E8,#5C36AE)', text: t('hero.bullet_3') },
              { color: 'linear-gradient(135deg,#FBD370,#D9A327)', text: t('hero.bullet_4') },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-white">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: b.color }}>
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3.5} />
                </div>
                {b.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2.5 mb-4 flex-wrap">
            <button className="btn-jump-shine text-white border-none px-6 py-3.5 rounded-xl text-sm font-extrabold shadow-xl" style={{ background: 'linear-gradient(135deg,#5DD17B,#2E8B57)', boxShadow: '0 8px 22px rgba(46,139,87,0.40)' }}>
              {t('hero.cta_primary')} →
            </button>
            <button className="bg-white/15 text-white border-[1.5px] border-white/35 px-5 py-3.5 rounded-xl text-sm font-bold">
              {t('hero.cta_secondary')}
            </button>
          </div>
          <p className="text-xs text-white/80">{t('hero.micro_text')}</p>
        </div>

        <div className="relative min-h-[380px] md:min-h-[480px] flex items-center justify-center" style={{ perspective: '1400px' }}>
          <div className="relative w-full max-w-[480px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[380px] rounded-full" style={{ background: 'radial-gradient(ellipse,rgba(255,255,255,0.18),rgba(255,255,255,0.04) 60%,transparent 80%)' }} />
            <div className="absolute top-6 left-6 -right-3 -bottom-3 rounded-2xl opacity-30 blur-[4px]" style={{ background: 'linear-gradient(135deg,#5DD17B,#22D3BD)', transform: 'perspective(1400px) rotateY(-16deg) rotateX(7deg)' }} />
            <div className="lic-shine relative rounded-2xl overflow-hidden z-10 animate-float-license" style={{ boxShadow: '0 40px 75px rgba(0,0,0,0.50),0 0 0 1px rgba(255,255,255,0.25)', transformStyle: 'preserve-3d' }}>
              <img src="/patente-omar.png" alt="Patente Italiana" className="w-full block" />
            </div>

            <div className="absolute -top-4 -right-3 text-white px-4 py-3 rounded-full text-xs font-extrabold flex items-center gap-1.5 z-20 animate-pulse-stamp" style={{ background: 'linear-gradient(135deg,#5DD17B,#2E8B57)', boxShadow: '0 12px 28px rgba(46,139,87,0.50)' }}>
              <Check className="w-4 h-4 text-white" strokeWidth={3.5} />
              {t('hero.stamp')}
            </div>

            <div className="absolute -left-7 -top-2 bg-white rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 z-10" style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.20)' }}>
              <img src="/giulia-avatar.jpg" alt="Giulia" className="w-9 h-9 rounded-full object-cover border-2 border-[#5DD17B]" />
              <div>
                <div className="text-[11px] font-extrabold text-slate-900 leading-none">Giulia</div>
                <div className="text-[9px] text-slate-500 mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5DD17B]" />
                  {t('hero.float_giulia_status')}
                </div>
              </div>
            </div>

            <div className="absolute -left-6 bottom-8 text-white rounded-2xl px-3.5 py-2.5 flex items-center gap-2 z-10" style={{ background: 'linear-gradient(135deg,#9572E8,#5C36AE)', boxShadow: '0 12px 30px rgba(122,79,214,0.40)' }}>
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center"><Globe className="w-4 h-4 text-white" /></div>
              <div>
                <div className="text-[11px] font-extrabold leading-none">{t('hero.float_langs_title')}</div>
                <div className="text-[9px] opacity-90 mt-0.5">{t('hero.float_langs_subtitle')}</div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-16 rounded-2xl px-3.5 py-2.5 flex items-center gap-2 z-10" style={{ background: 'linear-gradient(135deg,#FFD66B,#FBD370)', boxShadow: '0 12px 30px rgba(244,194,74,0.40)' }}>
              <div className="w-7 h-7 rounded-full bg-white/40 flex items-center justify-center"><Star className="w-3.5 h-3.5 fill-[#5C3A0A] stroke-none" /></div>
              <div>
                <div className="text-[11px] font-extrabold text-[#5C3A0A] leading-none">€9,99/mese</div>
                <div className="text-[9px] text-[#7A4F0C] mt-0.5">{t('hero.float_price_subtitle')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
