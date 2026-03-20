import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzT from "./locales/uz.json";
import ruT from "./locales/ru.json";
import enT from "./locales/en.json";

i18n

    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uzT },
            ru: { translation: ruT },
            en: { translation: enT },
        },
        lng: "en",
        fallbackLng: "uz",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
