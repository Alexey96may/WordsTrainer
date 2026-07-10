import { ref, computed, type Ref } from "vue";
import type { TrainerItem } from "@/types/trainer";
import { shuffleArray } from "@/utils/trainerHelpers";

export function useTrainerCategories(
    mainArr: Ref<TrainerItem[]>,
    mainArrsinSort: Ref<TrainerItem[]>,
    mainArrAlwaysFull: Ref<TrainerItem[]>,
    remainingQuestions: Ref<number>,
    hasError: Ref<boolean>,
    userAnswer: Ref<string>,
    flagGameOver: Ref<boolean>,
) {
    const sectionArr = ref<string[]>([]);
    const checkedKind = ref<string[]>(["all"]);

    // Calculated property of the number of active categories
    const activeKindsCount = computed<number>(() => {
        return checkedKind.value.includes("all")
            ? sectionArr.value.length - 1
            : checkedKind.value.length;
    });

    // Check category availability in the remaining pool
    const isKindAvailable = (kind: string): boolean => {
        if (kind.toLowerCase() === "all") return true;
        return mainArrsinSort.value.some(
            (item) => item.kind.toLowerCase() === kind.toLowerCase(),
        );
    };

    // Switching category
    const selectCategory = (kind: string) => {
        const kindClean = kind.toLowerCase();

        if (kindClean === "all") {
            checkedKind.value = ["all"];
        } else if (checkedKind.value.includes(kindClean)) {
            checkedKind.value = checkedKind.value.filter(
                (k) => k !== kindClean,
            );
            if (!checkedKind.value.length) checkedKind.value = ["all"];
        } else {
            if (checkedKind.value.includes("all")) checkedKind.value = [];
            checkedKind.value.push(kindClean);
        }

        if (checkedKind.value.includes("all")) {
            mainArr.value = [...mainArrsinSort.value];
        } else {
            mainArr.value = mainArrsinSort.value.filter((item) =>
                checkedKind.value.includes(item.kind.toLowerCase()),
            );
        }

        mainArr.value = shuffleArray(mainArr.value);
        remainingQuestions.value = mainArr.value.length;
        hasError.value = false;
        userAnswer.value = "";

        if (mainArr.value.length === 0) {
            flagGameOver.value = mainArrsinSort.value.length === 0;
        }
    };

    return {
        sectionArr,
        checkedKind,
        activeKindsCount,
        isKindAvailable,
        selectCategory,
    };
}
