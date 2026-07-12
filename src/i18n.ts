import { createI18n } from "vue-i18n";

import ru from "@/locales/ru";
import en from "@/locales/en";
import es from "@/locales/es";
import fr from "@/locales/fr";

type SupportedLang = "ru" | "en" | "es" | "fr";

const getBrowserLang = (): string => {
    const browserLang = navigator.language || "ru";
    const lang = browserLang.split("-")[0] as SupportedLang;

    const supported: SupportedLang[] = ["ru", "en", "es", "fr"];

    return supported.includes(lang) ? lang : "ru";
};

export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("lang") || getBrowserLang(),
    fallbackLocale: "ru",
    messages: { ru, en, es, fr },
    missingWarn: true,
    fallbackWarn: true,
});
