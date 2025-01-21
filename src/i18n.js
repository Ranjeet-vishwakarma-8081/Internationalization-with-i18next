import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

// const resources = {
//   en: {
//     translation: enLang,
//   },
//   fr: {
//     translation: frLang,
//   },
//   // Add more languages here...
//   hi: {
//     translation: hiLang,
//   },
// };

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .init({
    // resources,
    fallbackLng: "en",
    // debug: true,
    saveMissing: true,
  });

export default i18n;
