import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzT from "../public/Locals/uz.json";
import ruT from "../public/Locals/ru.json";
import enT from "../public/Locals/en.json";

i18n

.use(initReactI18next)
.init({
    resources:{
        uz:{translation: uzT},
        ru:{translation: ruT},
        en:{translation: enT},
    },
    len: "en",
    fallbackLng: "uz",
    debug: true,
    interpolition:{
        escapeValue: false,
    },
})

export default i18n
