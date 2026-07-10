import { createI18n } from "vue-i18n";

import ru from "@/locales/ru";
import en from "@/locales/en";

const getBrowserLang = (): string => {
    const browserLang = navigator.language || "ru";
    const lang = browserLang.split("-")[0] as string;

    const supported = ["ru", "en"];

    return supported.includes(lang) ? lang : "ru";
};

export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("lang") || getBrowserLang(),
    fallbackLocale: "ru",
    messages: { ru, en },
    missingWarn: true,
    fallbackWarn: true,
});
