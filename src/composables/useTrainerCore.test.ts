import { describe, it, expect, vi } from "vitest";
import { ref } from "vue";
import { useTrainerCore } from "./useTrainerCore";
import type { TrainerItem } from "@/types/trainer";

// Мок Vue I18n
vi.mock("vue-i18n", () => ({
    useI18n: () => ({
        t: (key: string) => key,
        locale: ref("ru"),
    }),
}));

// Мок IndexedDB
vi.mock("@/utils/db", () => ({
    saveProgress: vi.fn().mockResolvedValue(undefined),
    getProgress: vi.fn().mockResolvedValue(null),
    deleteProgress: vi.fn().mockResolvedValue(undefined),
}));

const mockData: TrainerItem[] = [
    {
        word: "αγαπώ",
        base: "αγαπώ",
        kind: "verbs",
        qws: ["Я ... тебя"],
        transls: ["люблю"],
    },
    {
        word: "σκύλος",
        base: "σκύλος",
        kind: "nouns",
        qws: ["Это мой ..."],
        transls: ["собака"],
    },
];

describe("useTrainerCore composable", () => {
    it("should initialize lists and section kinds properly", () => {
        const { initTrainer, mainArr, remainingQuestions } = useTrainerCore();
        const sectionArr = ref<string[]>([]);

        initTrainer(mockData, sectionArr);

        expect(mainArr.value).toHaveLength(2);
        expect(remainingQuestions.value).toBe(2);
        expect(sectionArr.value).toContain("all");
        expect(sectionArr.value).toContain("Verbs");
    });

    it("should return true for correct answer and clean up the state", async () => {
        const {
            initTrainer,
            userAnswer,
            checkUserAnswer,
            mainArr,
            remainingQuestions,
            hasError,
        } = useTrainerCore();

        const sectionArr = ref<string[]>([]);
        initTrainer(mockData, sectionArr);

        userAnswer.value = mainArr.value[0]!.word;
        const result = await checkUserAnswer("test-slug");

        expect(result).toBe(true);
        expect(hasError.value).toBe(false);
        expect(remainingQuestions.value).toBe(1);
        expect(userAnswer.value).toBe("");
    });

    it("should return false for incorrect answer and set error state", async () => {
        const {
            initTrainer,
            userAnswer,
            checkUserAnswer,
            remainingQuestions,
            hasError,
        } = useTrainerCore();

        const sectionArr = ref<string[]>([]);
        initTrainer(mockData, sectionArr);

        userAnswer.value = "wrong_answer";
        const result = await checkUserAnswer("test-slug");

        expect(result).toBe(false);
        expect(hasError.value).toBe(true);
        expect(remainingQuestions.value).toBe(2);
    });
});
