import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "@locales/en/translation.json";
import translationBR from "@locales/br/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationBR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
