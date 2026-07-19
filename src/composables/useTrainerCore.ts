import { ref, computed } from "vue";
import type { TrainerItem, RawTrainerItem } from "@/types/trainer";
import { shuffleArray } from "@/utils/trainerHelpers";
import { saveProgress } from "@/utils/db";
import { useI18n } from "vue-i18n";

export function useTrainerCore() {
    const { t } = useI18n();

    // Состояние игры
    const userAnswer = ref("");
    const hasError = ref(false);
    const remainingQuestions = ref(0);
    const fromHintButton = ref(false);
    const showNotesFlag = ref(false);
    const flagGameOver = ref(false);

    const sectionArr = ref<string[]>([]);
    const checkedKind = ref<string[]>(["all"]);

    // Очереди и пулы вопросов
    const mainArrAlwaysFull = ref<TrainerItem[]>([]);
    const mainArr = ref<TrainerItem[]>([]);
    const mainArrsinSort = ref<TrainerItem[]>([]);

    // 1. Подготовка структуры данных (без перемешивания)
    const prepareTrainerStructure = (
        rawArray: RawTrainerItem[],
        sectionArrRef: any,
    ) => {
        if (!rawArray.length) return;

        const kinds = new Set<string>(["all"]);

        const normalizedArray: TrainerItem[] = rawArray.map((item) => {
            const base = item.base || item.word;
            let kind = t("trainer.states.noGroup");
            if (item.kind && item.kind.trim() !== "") {
                kind = (
                    item.kind[0]!.toUpperCase() + item.kind.slice(1)
                ).toLowerCase();
            }
            kinds.add(kind);
            return { ...item, base, kind };
        });

        sectionArrRef.value = Array.from(kinds);

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
        mainArrsinSort.value = [...fullList];
    };

    // 2. Инициализация (с перемешиванием)
    const initTrainer = (rawArray: RawTrainerItem[], sectionArrRef: any) => {
        prepareTrainerStructure(rawArray, sectionArrRef);
        mainArr.value = shuffleArray([...mainArrAlwaysFull.value]);
        remainingQuestions.value = mainArr.value.length;
    };

    // HTML для вопроса
    const currentQuestionHtml = computed<string>(() => {
        if (!mainArr.value.length) {
            return flagGameOver.value
                ? t("trainer.states.gameOver")
                : t("trainer.states.noQuestions");
        }

        const currentItem = mainArr.value[0]!;
        const pattern = /\.\.\./g;
        const qwMod = currentItem.qws[0]!.replace(
            pattern,
            '<span style="color: red">...</span>',
        );
        return `${qwMod} <br><span class="spanTransl">(${currentItem.transls[0]})</span>`;
    });

    // Проверка ответа
    const checkUserAnswer = async (slug: string): Promise<boolean> => {
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

            await saveProgress(slug, {
                mainArr: mainArr.value,
                mainArrsinSort: mainArrsinSort.value,
                checkedKind: checkedKind.value,
                sectionArr: sectionArr.value,
            });
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
        prepareTrainerStructure,
        currentQuestionHtml,
        checkUserAnswer,
        sectionArr,
        checkedKind,
    };
}
