import { describe, it, expect } from "vitest";
import { ref } from "vue";
import { useTrainerCore } from "./useTrainerCore";
import type { TrainerItem } from "@/types/trainer";

// Используем TrainerItem, как того требует новая структура
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
        // Проверяем, что категории нормализованы (если ваша логика приводит их к Capitalize)
        expect(sectionArr.value).toContain("verbs");
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

        // Внимание: теперь checkUserAnswer требует slug
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
