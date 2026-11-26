import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ref } from "vue";

// Общая локаль для моков
const locale = ref("en");

// Моки файлов со словами
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
        vi.resetModules();
        locale.value = "en";
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.clearAllMocks();
    });

    it("should load the correct word based on the day of the year", async () => {
        vi.setSystemTime(new Date(2026, 0, 1));

        vi.doMock("vue-i18n", () => ({
            useI18n: () => ({
                locale,
            }),
        }));

        const { useDailyWord } = await import("./useDailyWord");
        const { wordData } = useDailyWord();

        await vi.waitFor(() => {
            expect(wordData.value).not.toBeNull();
        });

        expect(wordData.value?.word).toBe("banana");
    });

    it("should fallback to ru locale if the requested locale file is missing", async () => {
        locale.value = "locale_that_does_not_exist";

        vi.doMock("vue-i18n", () => ({
            useI18n: () => ({
                locale,
            }),
        }));

        const { useDailyWord } = await import("./useDailyWord");
        const { wordData } = useDailyWord();

        await vi.waitFor(() => {
            expect(wordData.value).not.toBeNull();
        });

        expect(wordData.value?.word).toBe("яблоко");
    });
});
