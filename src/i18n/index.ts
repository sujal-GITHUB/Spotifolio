import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from './en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, 
    },
  });
