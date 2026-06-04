import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import it from '../locales/it.json';
import en from '../locales/en.json';
import ar from '../locales/ar.json';
import ur from '../locales/ur.json';
import hi from '../locales/hi.json';
import zh from '../locales/zh.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';

export const supportedLanguages = [
  { code: 'it', name: 'Italiano', dir: 'ltr' as const },
  { code: 'en', name: 'English', dir: 'ltr' as const },
  { code: 'ar', name: 'العربية', dir: 'rtl' as const },
  { code: 'ur', name: 'اردو', dir: 'rtl' as const },
  { code: 'hi', name: 'हिन्दी', dir: 'ltr' as const },
  { code: 'zh', name: '中文', dir: 'ltr' as const },
  { code: 'es', name: 'Español', dir: 'ltr' as const },
  { code: 'fr', name: 'Français', dir: 'ltr' as const },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: { translation: it },
      en: { translation: en },
      ar: { translation: ar },
      ur: { translation: ur },
      hi: { translation: hi },
      zh: { translation: zh },
      es: { translation: es },
      fr: { translation: fr },
    },
    fallbackLng: 'it',
    supportedLngs: ['it', 'en', 'ar', 'ur', 'hi', 'zh', 'es', 'fr'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

i18n.on('languageChanged', (lng) => {
  const lang = supportedLanguages.find((l) => l.code === lng);
  if (lang) {
    document.documentElement.dir = lang.dir;
    document.documentElement.lang = lng;
  }
});

// Initial direction
const initialLang = supportedLanguages.find((l) => l.code === i18n.language) || supportedLanguages[0];
document.documentElement.dir = initialLang.dir;
document.documentElement.lang = initialLang.code;

export default i18n;
