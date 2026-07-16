import { computed } from "vue";
import type { DailyWord } from "@/types/wordDay";

export function useDailyWord(dailyWordArray: DailyWord[]) {
    const getDailyWord = (): DailyWord => {
        if (dailyWordArray.length === 0) {
            throw new Error("dailyWordArray is empty");
        }

        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now.getTime() - start.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        const index = (dayOfYear - 1) % dailyWordArray.length;
        return dailyWordArray[index < 0 ? 0 : index]!;
    };

    const wordData = computed(() => getDailyWord());

    return { wordData };
}
