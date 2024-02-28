import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, fr, gu, hi} from './resources';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: {
    en: en,
    fr: fr,
    gu: gu,
    hi: hi,
  },
});
export default i18n;
