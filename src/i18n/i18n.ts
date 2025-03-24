import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./translations/en.js";
import GeoTransilation from "./translations/ge.js";

const resources = {
  en: {
    translation: enTranslation,
  },
  ge: {
    translation: GeoTransilation,
  },
};

const storedLanguage = localStorage.getItem("language") || "en";
const checkedLanguge =
  storedLanguage === "en" || storedLanguage === "ge" ? storedLanguage : "en";
i18next.use(initReactI18next).init({
  resources,
  lng: checkedLanguge,
});

export default i18next;
