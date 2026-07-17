import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import type { DailyWord } from "@/types/wordDay";

export function useDailyWord() {
    const { locale } = useI18n();
    const wordData = ref<DailyWord | null>(null);

    const getWordForToday = (list: DailyWord[]) => {
        if (!list || list.length === 0) return null;

        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now.getTime() - start.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        const index = dayOfYear % list.length;

        return list[index] || null;
    };

    const loadWordData = async (currentLocale: string) => {
        try {
            const module = await import(
                `@/data/daily_words/${currentLocale}.ts`
            );
            const list: DailyWord[] = module.daylyWordArray;
            wordData.value = getWordForToday(list);
        } catch (e) {
            console.warn(
                `File for locale ${currentLocale} not found, loading ru`,
            );
            const defaultModule = await import(`@/data/daily_words/ru.ts`);
            const list: DailyWord[] = defaultModule.daylyWordArray;
            wordData.value = getWordForToday(list);
        }
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
