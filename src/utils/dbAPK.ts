import { Preferences } from "@capacitor/preferences";
import { toRaw } from "vue";
import type { SupportedLang } from "@/i18n";

function fastToRaw<T>(val: T): T {
    const raw = toRaw(val);
    if (!raw || typeof raw !== "object") return raw;

    if (Array.isArray(raw)) {
        return raw.map((item) => toRaw(item)) as unknown as T;
    }

    const result: Record<string, any> = {};
    for (const [key, value] of Object.entries(raw)) {
        const rawValue = toRaw(value);
        result[key] = Array.isArray(rawValue)
            ? rawValue.map((item) => toRaw(item))
            : rawValue;
    }
    return result as T;
}

const getStoreKey = (slug: string, locale: SupportedLang) =>
    `trainer-progress:${locale}:${slug}`;

export const saveProgress = async (
    slug: string,
    data: any,
    locale: SupportedLang,
) => {
    try {
        const key = getStoreKey(slug, locale);
        const plainData = fastToRaw(data);
        await Preferences.set({
            key,
            value: JSON.stringify(plainData),
        });
    } catch (e) {
        console.error("DB: Save error", e);
    }
};

export const getProgress = async (slug: string, locale: SupportedLang) => {
    try {
        const key = getStoreKey(slug, locale);
        const { value } = await Preferences.get({ key });
        if (value == null) return null;
        return JSON.parse(value);
    } catch (e) {
        console.error("DB: Fetch error", e);
        return null;
    }
};

export const deleteProgress = async (slug: string, locale: SupportedLang) => {
    try {
        const key = getStoreKey(slug, locale);
        await Preferences.remove({ key });
    } catch (e) {
        console.error("DB: Delete error", e);
    }
};
