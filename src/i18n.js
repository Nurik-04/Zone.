import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzT from "./Locals/uz.json";
import ruT from "./Locals/ru.json";
import enT from "./Locals/en.json";

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
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// // Papka nomini aniq tekshiring: Locals yoki locales?
// import uzT from "./Locals/uz.json"; 
// import ruT from "./Locals/ru.json";
// import enT from "./Locals/en.json";

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       uz: { translation: uzT },
//       ru: { translation: ruT },
//       en: { translation: enT },
//     },
//     lng: "en", // 'len' emas, 'lng' bo'lishi shart
//     fallbackLng: "uz",
//     debug: true,
//     interpolation: { // 'interpolition' emas, 'interpolation'
//       escapeValue: false,
//     },
//   });

// export default i18n;