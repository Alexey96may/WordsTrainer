import { openDB } from "idb";
import { toRaw } from "vue";
import type { SupportedLang } from "@/i18n";

const DB_NAME = "GreekTrainerDB";
const STORE_NAME = "trainer-progress";

const dbPromise = openDB(DB_NAME, 1, {
    upgrade(db) {
        db.createObjectStore(STORE_NAME);
    },
    blocked() {
        console.error("DB: Open request blocked by another version");
    },
    blocking() {
        console.error("DB: Open request blocking another version");
    },
});

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
    `${locale}:${slug}`;

export const saveProgress = async (
    slug: string,
    data: any,
    locale: SupportedLang,
) => {
    try {
        const key = `${locale}:${slug}`;
        const db = await dbPromise;
        const plainData = fastToRaw(data);
        await db.put(STORE_NAME, plainData, key);
    } catch (e) {
        console.error("DB: Save error", e);
    }
};

export const getProgress = async (slug: string, locale: SupportedLang) => {
    try {
        const key = getStoreKey(slug, locale);
        const db = await dbPromise;
        const result = await db.get(STORE_NAME, key);
        return result;
    } catch (e) {
        console.error("DB: Fetch error", e);
        return null;
    }
};

export const deleteProgress = async (slug: string, locale: SupportedLang) => {
    try {
        const key = getStoreKey(slug, locale);
        const db = await dbPromise;
        await db.delete(STORE_NAME, key);
    } catch (e) {
        console.error("DB: Delete error", e);
    }
};
