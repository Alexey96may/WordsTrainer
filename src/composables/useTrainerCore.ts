import { ref, computed } from "vue";
import type { TrainerItem, RawTrainerItem } from "@/types/trainer";
import { shuffleArray } from "@/utils/trainerHelpers";

export function useTrainerCore() {
    // Gameplay state
    const userAnswer = ref("");
    const hasError = ref(false);
    const remainingQuestions = ref(0);
    const fromHintButton = ref(false);
    const showNotesFlag = ref(false);
    const flagGameOver = ref(false);

    // Queues and question pools
    const mainArrAlwaysFull = ref<TrainerItem[]>([]);
    const mainArr = ref<TrainerItem[]>([]);
    const mainArrsinSort = ref<TrainerItem[]>([]);

    // Initialize the trainer from a raw data array
    const initTrainer = (
        rawArray: RawTrainerItem[],
        sectionArr: { value: string[] },
    ) => {
        if (!rawArray.length) return;

        const kinds = new Set<string>(["Все"]);

        // Normalization and mapping of incoming data
        const normalizedArray: TrainerItem[] = rawArray.map((item) => {
            const base = item.base || item.word;
            let kind = "Без группы";
            if (item.kind && item.kind.trim() !== "") {
                kind = item.kind[0]!.toUpperCase() + item.kind.slice(1);
            }
            kinds.add(kind);
            return { ...item, base, kind };
        });

        sectionArr.value = Array.from(kinds);

        const fullList: TrainerItem[] = [];
        normalizedArray.forEach((item) => {
            if (
                item.qws &&
                item.qws.length &&
                item.qws.length === item.transls.length &&
                item.word &&
                item.word !== "—"
            ) {
                if (item.qws.length > 1) {
                    for (let p = 0; p < item.qws.length; p++) {
                        const clone = JSON.parse(
                            JSON.stringify(item),
                        ) as TrainerItem;
                        clone.qws = [item.qws[p]!];
                        clone.transls = [item.transls[p]!];
                        fullList.push(clone);
                    }
                } else {
                    fullList.push(item);
                }
            }
        });

        mainArrAlwaysFull.value = fullList;
        mainArr.value = shuffleArray(fullList);
        mainArrsinSort.value = [...fullList];
        remainingQuestions.value = mainArr.value.length;
    };

    // Dynamic HTML for the current question
    const currentQuestionHtml = computed<string>(() => {
        if (!mainArr.value.length) {
            return flagGameOver.value
                ? "Вы полностью завершили тренировку! Начните заново."
                : "В данном режиме больше нет вопросов.";
        }

        const currentItem = mainArr.value[0]!;
        const pattern = /\.\.\./g;
        const qwMod = currentItem.qws[0]!.replace(
            pattern,
            '<span style="color: red">...</span>',
        );
        return `${qwMod} <br><span class="spanTransl">(${currentItem.transls[0]})</span>`;
    });

    // Validation of user response
    const checkUserAnswer = (): boolean => {
        if (!mainArr.value.length) return false;

        const currentItem = mainArr.value[0]!;
        const answers = currentItem.word
            .split("/")
            .map((a) => a.trim().toLowerCase());
        const userAnsClean = userAnswer.value.trim().toLowerCase();

        const isCorrect =
            answers.includes(userAnsClean) ||
            currentItem.word.toLowerCase() === userAnsClean;

        if (isCorrect) {
            hasError.value = false;
            userAnswer.value = "";

            const index = mainArrsinSort.value.findIndex(
                (item) => item === currentItem,
            );
            if (index > -1) mainArrsinSort.value.splice(index, 1);

            mainArr.value.shift();
            remainingQuestions.value = mainArr.value.length;
            fromHintButton.value = false;
            showNotesFlag.value = false;

            if (mainArr.value.length === 0) {
                flagGameOver.value = mainArrsinSort.value.length === 0;
            }
            return true;
        } else {
            hasError.value = true;
            return false;
        }
    };

    return {
        userAnswer,
        hasError,
        remainingQuestions,
        fromHintButton,
        showNotesFlag,
        flagGameOver,
        mainArrAlwaysFull,
        mainArr,
        mainArrsinSort,
        initTrainer,
        currentQuestionHtml,
        checkUserAnswer,
    };
}
