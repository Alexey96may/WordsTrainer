import { describe, it, expect } from "vitest";
import { ref } from "vue";
import { useTrainerCategories } from "./useTrainerCategories";
import type { TrainerItem } from "@/types/trainer";

const createMockItems = (): TrainerItem[] => [
    {
        word: "λυώ",
        base: "λυώ",
        kind: "verbs",
        qws: ["я освобождаю"],
        transls: ["освобождаю"],
    },
    {
        word: "λόγος",
        base: "λόγος",
        kind: "nouns",
        qws: ["слово"],
        transls: ["слово"],
    },
    {
        word: "γράφω",
        base: "γράφω",
        kind: "verbs",
        qws: ["я пишу"],
        transls: ["пишу"],
    },
];

describe("useTrainerCategories composable", () => {
    const setup = () => {
        const mainArr = ref<TrainerItem[]>([]);
        const mainArrsinSort = ref<TrainerItem[]>([]);
        const mainArrAlwaysFull = ref<TrainerItem[]>([]);
        const remainingQuestions = ref(0);
        const hasError = ref(false);
        const showNotesFlag = ref(false);
        const userAnswer = ref("");
        const flagGameOver = ref(false);
        const sectionArr = ref<string[]>([]);
        const checkedKind = ref<string[]>(["all"]);

        const composable = useTrainerCategories(
            mainArr,
            mainArrsinSort,
            mainArrAlwaysFull,
            remainingQuestions,
            hasError,
            userAnswer,
            flagGameOver,
            sectionArr,
            checkedKind,
            showNotesFlag,
        );

        return {
            ...composable,
            mainArr,
            mainArrsinSort,
            mainArrAlwaysFull,
            remainingQuestions,
            hasError,
            userAnswer,
            flagGameOver,
            sectionArr,
            checkedKind,
        };
    };

    it("should initialize with correct default values", () => {
        const { checkedKind, sectionArr, activeKindsCount } = setup();

        expect(checkedKind.value).toEqual(["all"]);
        expect(sectionArr.value).toEqual([]);
        expect(activeKindsCount.value).toBe(-1);
    });

    it("should compute activeKindsCount correctly based on selection", () => {
        const {
            sectionArr,
            checkedKind,
            activeKindsCount,
            selectCategory,
            mainArrAlwaysFull,
        } = setup();

        const mockItems = createMockItems();
        mainArrAlwaysFull.value = [...mockItems];
        sectionArr.value = ["all", "verbs", "nouns"];

        expect(activeKindsCount.value).toBe(2);

        selectCategory("verbs");
        expect(activeKindsCount.value).toBe(1);

        selectCategory("nouns");
        expect(activeKindsCount.value).toBe(2);
    });

    it("should determine if a kind is available in the remaining pool", () => {
        const { isKindAvailable, mainArrAlwaysFull } = setup();

        const mockItems = createMockItems();
        mainArrAlwaysFull.value = [...mockItems];

        expect(isKindAvailable("all")).toBe(true);
        expect(isKindAvailable("verbs")).toBe(true);
        expect(isKindAvailable("nouns")).toBe(true);
    });

    it("should reset errors, clear user input and filter questions array on category selection", () => {
        const {
            selectCategory,
            checkedKind,
            hasError,
            userAnswer,
            remainingQuestions,
            mainArr,
            mainArrAlwaysFull,
        } = setup();

        const mockItems = createMockItems();
        mainArrAlwaysFull.value = [...mockItems];
        hasError.value = true;
        userAnswer.value = "неверный ввод";

        selectCategory("verbs");

        expect(hasError.value).toBe(false);
        expect(userAnswer.value).toBe("");
        expect(checkedKind.value).toEqual(["verbs"]);
        expect(mainArr.value).toHaveLength(2);
        expect(remainingQuestions.value).toBe(2);
    });

    it("should revert to 'all' if the last selected category is unchecked", () => {
        const { selectCategory, checkedKind, mainArr, mainArrAlwaysFull } =
            setup();

        const mockItems = createMockItems();
        mainArrAlwaysFull.value = [...mockItems];

        selectCategory("verbs");
        selectCategory("verbs"); // Отмена выбора

        expect(checkedKind.value).toEqual(["all"]);
        expect(mainArr.value).toHaveLength(3);
    });
});
