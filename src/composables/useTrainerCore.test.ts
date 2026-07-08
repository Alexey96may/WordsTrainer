import { describe, it, expect } from "vitest";
import { ref } from "vue";
import { useTrainerCore } from "./useTrainerCore";
import type { RawTrainerItem } from "@/types/trainer";

const mockRawData: RawTrainerItem[] = [
    {
        word: "αγαπώ",
        kind: "verbs",
        qws: ["Я ... тебя"],
        transls: ["люблю"],
    },
    {
        word: "σκύλος",
        kind: "nouns",
        qws: ["Это мой ..."],
        transls: ["собака"],
    },
];

describe("useTrainerCore composable", () => {
    it("should initialize lists and section kinds properly", () => {
        const { initTrainer, mainArr, remainingQuestions } = useTrainerCore();
        const sectionArr = ref<string[]>([]);

        initTrainer(mockRawData, sectionArr);

        expect(mainArr.value).toHaveLength(2);
        expect(remainingQuestions.value).toBe(2);
        expect(sectionArr.value).toContain("Все");
        expect(sectionArr.value).toContain("Verbs");
    });

    it("should return true for correct answer and clean up the state", () => {
        const {
            initTrainer,
            userAnswer,
            checkUserAnswer,
            mainArr,
            remainingQuestions,
            hasError,
        } = useTrainerCore();
        const sectionArr = ref<string[]>([]);

        initTrainer(mockRawData, sectionArr);

        userAnswer.value = mainArr.value[0]!.word;

        const result = checkUserAnswer();

        expect(result).toBe(true);
        expect(hasError.value).toBe(false);
        expect(remainingQuestions.value).toBe(1);
        expect(userAnswer.value).toBe("");
    });

    it("should return false for incorrect answer and set error state", () => {
        const {
            initTrainer,
            userAnswer,
            checkUserAnswer,
            remainingQuestions,
            hasError,
        } = useTrainerCore();
        const sectionArr = ref<string[]>([]);

        initTrainer(mockRawData, sectionArr);
        userAnswer.value = "wrong_answer";

        const result = checkUserAnswer();

        expect(result).toBe(false);
        expect(hasError.value).toBe(true);
        expect(remainingQuestions.value).toBe(2);
    });
});
