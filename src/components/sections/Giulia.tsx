import { useTranslation } from 'react-i18next';
import { Globe, User, FileText, Clock, ChevronLeft, Star, FileText as FileIcon } from 'lucide-react';

export function Giulia() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden px-6 py-12" style={{ background: 'linear-gradient(135deg,#FFF8E8 0%,#FFE9B0 100%)' }}>
      <div className="absolute -left-20 -top-20 w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(244,194,74,0.30),transparent 70%)' }} />
      <div className="absolute -right-12 -bottom-12 w-[240px] h-[240px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(243,155,42,0.20),transparent 70%)' }} />
      <div className="max-w-[1100px] mx-auto relative">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase mb-2.5" style={{ background: 'linear-gradient(135deg,#FFE9B0,#FFD773)', color: '#854F0B' }}>
            {t('giulia.tag')}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">{t('giulia.title')}</h2>
          <p className="text-sm text-slate-500">{t('giulia.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">
              {t('giulia.headline_part1')}<br />
              <span style={{ background: 'linear-gradient(135deg,#F8A93D,#E5841A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('giulia.headline_part2')}</span>
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-5">{t('giulia.description')}</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: <Globe className="w-4 h-4 text-white" strokeWidth={2.2} />, title: t('giulia.feat1_title'), text: t('giulia.feat1_text') },
                { icon: <User className="w-4 h-4 text-white" strokeWidth={2.2} />, title: t('giulia.feat2_title'), text: t('giulia.feat2_text') },
                { icon: <FileText className="w-4 h-4 text-white" strokeWidth={2.2} />, title: t('giulia.feat3_title'), text: t('giulia.feat3_text') },
                { icon: <Clock className="w-4 h-4 text-white" strokeWidth={2.2} />, title: t('giulia.feat4_title'), text: t('giulia.feat4_text') },
              ].map((f, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#F8A93D,#E5841A)' }}>{f.icon}</div>
                  <div className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900">{f.title}</strong> {f.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-[260px] md:w-[300px] mx-auto">
            <div className="bg-slate-900 rounded-[36px] p-2 relative" style={{ boxShadow: '0 30px 60px rgba(15,26,54,0.30)' }}>
              <div className="bg-white rounded-[28px] overflow-hidden aspect-[9/19]">
                <div className="px-4 pt-4 pb-3.5 flex items-center gap-2.5" style={{ background: 'linear-gradient(135deg,#3B6FE8,#1E40AF)' }}>
                  <ChevronLeft className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  <img src="/giulia-avatar.jpg" alt="Giulia" className="w-9 h-9 rounded-full object-cover border-2 border-[#5DD17B]" />
                  <div className="text-white">
                    <div className="text-sm font-bold flex items-center gap-1">Giulia <Star className="w-3 h-3 fill-[#FFD66B] stroke-none" /></div>
                    <div className="text-[10px] opacity-85 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#5DD17B]" />{t('giulia.chat_role')}</div>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 h-[calc(100%-70px)] overflow-y-auto">
                  <div className="text-center text-[10px] text-slate-500 mb-2.5 font-medium">{t('giulia.chat_today')}</div>
                  <div className="flex items-end gap-1.5 mb-2">
                    <img src="/giulia-avatar.jpg" alt="" className="w-6 h-6 rounded-full object-cover shrink-0" />
                    <div className="bg-white rounded-2xl rounded-tl-sm p-2.5 max-w-[78%] text-[11px] text-slate-900 leading-relaxed" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>{t('giulia.chat_msg1')}</div>
                  </div>
                  <div className="text-white rounded-2xl rounded-tr-sm p-2.5 max-w-[78%] ml-auto text-[11px] leading-relaxed mb-2" style={{ background: 'linear-gradient(135deg,#3B6FE8,#1E40AF)', boxShadow: '0 4px 10px rgba(46,99,240,0.20)' }}>{t('giulia.chat_user_msg')}</div>
                  <div className="flex items-end gap-1.5 mb-2">
                    <img src="/giulia-avatar.jpg" alt="" className="w-6 h-6 rounded-full object-cover shrink-0" />
                    <div className="bg-white rounded-2xl rounded-tl-sm p-2.5 max-w-[78%] text-[11px] text-slate-900 leading-relaxed" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                      {t('giulia.chat_msg2_intro')} <strong className="font-bold">{t('giulia.chat_msg2_bold')}</strong> {t('giulia.chat_msg2_end')}<br /><br />💡 {t('giulia.chat_msg2_tip')}
                      <div className="mt-2 inline-flex items-center gap-1 px-2 py-1.5 bg-green-50 rounded-lg text-[10px] text-green-700 font-semibold"><FileIcon className="w-2.5 h-2.5" />{t('giulia.chat_source')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-6 flex-wrap">
          {[
            { flag: '🇮🇹', name: 'Italiano' }, { flag: '🇬🇧', name: 'English' }, { flag: '🇸🇦', name: 'العربية' }, { flag: '🇵🇰', name: 'اردو' },
            { flag: '🇮🇳', name: 'हिन्दी' }, { flag: '🇨🇳', name: '中文' }, { flag: '🇪🇸', name: 'Español' }, { flag: '🇫🇷', name: 'Français' },
          ].map((l, i) => (
            <div key={i} className="bg-white px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 border-[1.5px] border-yellow-100 text-slate-900">
              <span className="text-sm">{l.flag}</span>{l.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
