import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // translation file path
      // loadPath: '/assets/i18n/{{ns}}/{{lng}}.json',
      loadPath: `${process.env.PUBLIC_URL}/assets/i18n/{{ns}}/{{lng}}.json`,

    },
    fallbackLng: 'en',
    // disabled in production
    debug: true,
    // can have multiple namespaces, in case you want to divide a huge
    // translation into smaller pieces and load them on demand
    ns: ['tran'],

    interpolation: {
      espaceValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });

export default i18n;
