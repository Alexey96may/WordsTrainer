import { describe, it, expect, vi, beforeEach } from "vitest";
import { useDailyWord } from "./useDailyWord";
import { ref } from "vue";

// Mock vue-i18n
vi.mock("vue-i18n", () => ({
    useI18n: () => ({
        locale: ref("en"),
    }),
}));

// Mock the data files
vi.mock("@/data/daily_words/en.ts", () => ({
    daylyWordArray: [
        { word: "apple", translation: "manzana" },
        { word: "banana", translation: "plátano" },
    ],
}));

vi.mock("@/data/daily_words/ru.ts", () => ({
    daylyWordArray: [{ word: "яблоко", translation: "яблоко" }],
}));

describe("useDailyWord", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    it("should load the correct word based on the day of the year", async () => {
        // Set date to January 1st (dayOfYear = 1)
        const date = new Date(2026, 0, 1);
        vi.setSystemTime(date);

        const { wordData } = useDailyWord();

        // Wait for the async import to resolve
        await vi.waitFor(() => expect(wordData.value).not.toBeNull());

        // dayOfYear % 2 (index 1) = 'banana'
        expect(wordData.value?.word).toBe("banana");
    });

    it("should fallback to ru locale if the requested locale file is missing", async () => {
        // Force a locale that doesn't exist
        vi.mock("vue-i18n", () => ({
            useI18n: () => ({
                locale: ref("fr"), // 'fr.ts' is not mocked
            }),
        }));

        const { wordData } = useDailyWord();

        await vi.waitFor(() => expect(wordData.value).not.toBeNull());

        // Should load the fallback 'ru' mock
        expect(wordData.value?.word).toBe("яблоко");
    });
});
