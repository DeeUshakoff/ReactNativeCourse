import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as en from './localization/en.json';
import * as ru from './localization/ru.json';
import {LangType} from './LangType';

export const defaultNS = 'common';
export const resources = {
  ru: {common: ru},
  en: {common: en},
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: LangType.RU,
  fallbackLng: LangType.EN,
  compatibilityJSON: 'v4',
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
});
export const Localization = i18n;
