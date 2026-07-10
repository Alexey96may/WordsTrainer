import { createI18n } from "vue-i18n";

import ru from "@/locales/ru";
import en from "@/locales/en";

export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("lang") || "ru",
    fallbackLocale: "ru",
    messages: { ru, en },
    missingWarn: true,
    fallbackWarn: true,
});
