import { describe, it, expect } from "vitest";
import { ref } from "vue";
import { useTrainerCategories } from "./useTrainerCategories";
import type { TrainerItem } from "@/types/trainer";

const createMockItems = (): TrainerItem[] => [
    {
        word: "λυώ",
        base: "λυώ",
        kind: "Verbs",
        qws: ["я освобождаю"],
        transls: ["освобождаю"],
    },
    {
        word: "λόγος",
        base: "λόγος",
        kind: "Nouns",
        qws: ["слово"],
        transls: ["слово"],
    },
    {
        word: "γράφω",
        base: "γράφω",
        kind: "Verbs",
        qws: ["я пишу"],
        transls: ["пишу"],
    },
];

describe("useTrainerCategories composable", () => {
    it("should initialize with correct default values", () => {
        const mainArr = ref<TrainerItem[]>([]);
        const mainArrsinSort = ref<TrainerItem[]>([]);
        const mainArrAlwaysFull = ref<TrainerItem[]>([]);
        const remainingQuestions = ref(0);
        const hasError = ref(false);
        const userAnswer = ref("");
        const flagGameOver = ref(false);

        const { checkedKind, sectionArr, activeKindsCount } =
            useTrainerCategories(
                mainArr,
                mainArrsinSort,
                mainArrAlwaysFull,
                remainingQuestions,
                hasError,
                userAnswer,
                flagGameOver,
            );

        expect(checkedKind.value).toEqual(["all"]);
        expect(sectionArr.value).toEqual([]);
        expect(activeKindsCount.value).toBe(-1);
    });

    it("should compute activeKindsCount correctly based on selection", () => {
        const mockItems = createMockItems();
        const mainArr = ref<TrainerItem[]>([...mockItems]);
        const mainArrsinSort = ref<TrainerItem[]>([...mockItems]);
        const mainArrAlwaysFull = ref<TrainerItem[]>([...mockItems]);
        const remainingQuestions = ref(mockItems.length);
        const hasError = ref(false);
        const userAnswer = ref("");
        const flagGameOver = ref(false);

        const { sectionArr, checkedKind, activeKindsCount, selectCategory } =
            useTrainerCategories(
                mainArr,
                mainArrsinSort,
                mainArrAlwaysFull,
                remainingQuestions,
                hasError,
                userAnswer,
                flagGameOver,
            );

        sectionArr.value = ["all", "Verbs", "Nouns"];

        expect(activeKindsCount.value).toBe(2);

        selectCategory("verbs");
        expect(activeKindsCount.value).toBe(1);

        selectCategory("nouns");
        expect(activeKindsCount.value).toBe(2);
    });

    it("should determine if a kind is available in the remaining pool", () => {
        const mockItems = createMockItems();
        const mainArr = ref<TrainerItem[]>([...mockItems]);
        const mainArrsinSort = ref<TrainerItem[]>([
            mockItems[0]!,
            mockItems[2]!,
        ]);
        const mainArrAlwaysFull = ref<TrainerItem[]>([...mockItems]);
        const remainingQuestions = ref(2);
        const hasError = ref(false);
        const userAnswer = ref("");
        const flagGameOver = ref(false);

        const { isKindAvailable } = useTrainerCategories(
            mainArr,
            mainArrsinSort,
            mainArrAlwaysFull,
            remainingQuestions,
            hasError,
            userAnswer,
            flagGameOver,
        );

        expect(isKindAvailable("all")).toBe(true);
        expect(isKindAvailable("verbs")).toBe(true);
        expect(isKindAvailable("nouns")).toBe(false);
    });

    it("should reset errors, clear user input and filter questions array on category selection", () => {
        const mockItems = createMockItems();
        const mainArr = ref<TrainerItem[]>([...mockItems]);
        const mainArrsinSort = ref<TrainerItem[]>([...mockItems]);
        const mainArrAlwaysFull = ref<TrainerItem[]>([...mockItems]);
        const remainingQuestions = ref(mockItems.length);
        const hasError = ref(true);
        const userAnswer = ref("неверный ввод");

        const { selectCategory, checkedKind } = useTrainerCategories(
            mainArr,
            mainArrsinSort,
            mainArrAlwaysFull,
            remainingQuestions,
            hasError,
            userAnswer,
            ref(false),
        );

        selectCategory("verbs");

        expect(hasError.value).toBe(false);
        expect(userAnswer.value).toBe("");

        expect(checkedKind.value).toEqual(["verbs"]);
        expect(mainArr.value).toHaveLength(2);
        expect(remainingQuestions.value).toBe(2);
    });

    it("should revert to 'all' if the last selected category is unchecked", () => {
        const mockItems = createMockItems();
        const mainArr = ref<TrainerItem[]>([...mockItems]);
        const mainArrsinSort = ref<TrainerItem[]>([...mockItems]);
        const mainArrAlwaysFull = ref<TrainerItem[]>([...mockItems]);
        const remainingQuestions = ref(mockItems.length);

        const { selectCategory, checkedKind } = useTrainerCategories(
            mainArr,
            mainArrsinSort,
            mainArrAlwaysFull,
            remainingQuestions,
            ref(false),
            ref(""),
            ref(false),
        );

        selectCategory("verbs");
        selectCategory("verbs");

        expect(checkedKind.value).toEqual(["all"]);
        expect(mainArr.value).toHaveLength(3);
    });
});
