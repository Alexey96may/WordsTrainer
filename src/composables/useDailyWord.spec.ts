import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useDailyWord } from "@/composables/useDailyWord";
import type { DailyWord } from "@/types/wordDay";

describe("useDailyWord", () => {
    const mockWords: DailyWord[] = [
        { word: "word1" } as DailyWord,
        { word: "word2" } as DailyWord,
    ];

    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("should throw an error if the array is empty", () => {
        expect(() => useDailyWord([])).toThrow("dailyWordArray is empty");
    });

    it("should return the correct word for a specific date", () => {
        // January 1st, 2026 (dayOfYear = 1)
        // (1 - 1) % 2 = 0 -> index 0
        vi.setSystemTime(new Date(2026, 0, 1));

        const { wordData } = useDailyWord(mockWords);
        expect(wordData.value.word).toBe("word1");
    });

    it("should switch to the next word on the next day", () => {
        // January 2nd, 2026 (dayOfYear = 2)
        // (2 - 1) % 2 = 1 -> index 1
        vi.setSystemTime(new Date(2026, 0, 2));

        const { wordData } = useDailyWord(mockWords);
        expect(wordData.value.word).toBe("word2");
    });

    it("should cycle through the words if the array is shorter than a year", () => {
        // January 3rd, 2026 (dayOfYear = 3)
        // (3 - 1) % 2 = 0 -> index 0
        vi.setSystemTime(new Date(2026, 0, 3));

        const { wordData } = useDailyWord(mockWords);
        expect(wordData.value.word).toBe("word1");
    });
});
