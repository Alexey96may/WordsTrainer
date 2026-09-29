// useDailyWord.ts
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import type { DailyWord } from "@/types/wordDay";

export function getWordForDate(
    date: Date,
    list: DailyWord[],
): DailyWord | null {
    if (!list || list.length === 0) return null;

    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const index = dayOfYear % list.length;

    return list[index] || null;
}

export async function loadWordList(locale: string): Promise<DailyWord[]> {
    try {
        const module = await import(`@/data/daily_words/${locale}.ts`);
        return module.daylyWordArray;
    } catch {
        console.warn(`File for locale ${locale} not found, loading ru`);
        const fallback = await import(`@/data/daily_words/ru.ts`);
        return fallback.daylyWordArray;
    }
}

export function useDailyWord() {
    const { locale } = useI18n();
    const wordData = ref<DailyWord | null>(null);

    const loadWordData = async (currentLocale: string) => {
        const list = await loadWordList(currentLocale);
        wordData.value = getWordForDate(new Date(), list);
    };

    watch(
        locale,
        (newLocale) => {
            loadWordData(newLocale);
        },
        { immediate: true },
    );

    return { wordData };
}
