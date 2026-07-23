<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";
import { useI18n } from "vue-i18n";

import TrainerQuestion from "@/components/trainer/TrainerQuestion.vue";
import TrainerAudioControls from "@/components/trainer/TrainerAudioControls.vue";
import TrainerForm from "@/components/trainer/TrainerForm.vue";
import TrainerScore from "@/components/trainer/TrainerScore.vue";
import TrainerGameSkeleton from "@/components/ui/TrainerGameSkeleton.vue";
import TrainerCategorySelect from "@/components/trainer/TrainerCategorySelect.vue";
import TrainerTable from "@/components/trainer/TrainerTable.vue";
import TrainerNotice from "@/components/trainer/TrainerNotice.vue";
import WordModal from "@/components/trainer/WordModal.vue";

import { shuffleArray } from "@/utils/trainerHelpers";
import type {
    LocalTitleItem,
    RawTrainerItem,
    TrainerItem,
} from "@/types/trainer";
import { useTrainerSound } from "@/composables/useTrainerSound";
import { useTrainerCore } from "@/composables/useTrainerCore";
import { useTrainerCategories } from "@/composables/useTrainerCategories";

import { getProgress, saveProgress } from "@/utils/db";

const props = defineProps({
    slug: { type: String, required: true },
    theoryContent: { type: String, default: "" },
});

const { t, locale } = useI18n();
const isSyncing = ref(false);

// 1. Sound Module
const {
    soundLevel,
    isSoundOn,
    toggleSound,
    playSound,
    audioBad,
    audioGreat,
    audioHint,
} = useTrainerSound();

// 2. Core Module
const {
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
    sectionArr,
    checkedKind,
    prepareTrainerStructure,
} = useTrainerCore();

// 3. Categories Module
const { activeKindsCount, isKindAvailable, selectCategory } =
    useTrainerCategories(
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

const globalArray = ref<RawTrainerItem[]>([]);
const paramGlobal = ref<string[]>([]);
const titles = ref<LocalTitleItem[]>([]);
const trainerTableComponent = ref<InstanceType<typeof TrainerTable> | null>(
    null,
);
const modalCurrentIndex = ref(0);
const modalTableRows = ref<unknown[]>([]);
const isModalOpen = ref(false);

const pageTitle = computed(() => {
    if (!props.slug) return t("trainer.loading");
    const key = `trainers.${props.slug}.name`;
    const translated = t(key);
    return translated !== key ? translated : t("trainer.defaultTitle");
});

const tableDOMElement = computed(
    () => trainerTableComponent.value?.tableContentRef || null,
);

const applySavedFilter = () => {
    if (checkedKind.value.includes("all")) {
        mainArr.value = [...mainArrsinSort.value];
    } else {
        mainArr.value = mainArrsinSort.value.filter((item) =>
            checkedKind.value.includes(item.kind.toLowerCase()),
        );
    }
    remainingQuestions.value = mainArr.value.length;
};

const loadTrainerData = async (slug: string) => {
    isSyncing.value = true;

    const currentLang = locale.value || "ru";
    let module;
    try {
        module = await import(`../data/trainings/${slug}/${currentLang}.ts`);
    } catch {
        module = await import(`../data/trainings/${slug}/ru.ts`);
    }

    titles.value = module.tableTitlesArr;
    paramGlobal.value = module.paramGlobal || [];

    const rawData = module.globalArray as RawTrainerItem[];

    prepareTrainerStructure(rawData, sectionArr);

    const saved = await getProgress(slug);

    if (saved) {
        // Восстанавливаем все сохранённые данные
        mainArrsinSort.value = saved.mainArrsinSort;
        mainArr.value = saved.mainArr; // ← порядок сохранён
        sectionArr.value = saved.sectionArr;
        checkedKind.value = saved.checkedKind;

        remainingQuestions.value = mainArr.value.length; // обновляем счётчик
        globalArray.value = [...mainArrsinSort.value]; // для таблицы (все слова)
    } else {
        // Если сейва нет – инициализация с перемешиванием
        initTrainer(rawData, sectionArr);
        globalArray.value = [...mainArrAlwaysFull.value];
        checkedKind.value = ["all"];
    }

    await nextTick();
    isSyncing.value = false;
};

watch(
    () => props.slug,
    (newSlug) => {
        if (newSlug) loadTrainerData(newSlug);
    },
    { immediate: true },
);

watch(locale, async () => {
    if (props.slug) {
        await saveProgress(props.slug, null);
        await loadTrainerData(props.slug);
    }
});

const handleInputSubmit = async () => {
    if (await checkUserAnswer(props.slug)) playSound(audioGreat);
    else playSound(audioBad);
};

const showHint = () => {
    if (!mainArr.value.length) return;
    playSound(audioHint);
    fromHintButton.value = true;
    userAnswer.value = mainArr.value[0]!.word;
    showNotesFlag.value = true;
};

const reloadGame = async () => {
    playSound(audioHint);
    flagGameOver.value = false;
    hasError.value = false;
    userAnswer.value = "";
    showNotesFlag.value = false;
    checkedKind.value = ["all"];

    mainArr.value = shuffleArray([...mainArrAlwaysFull.value]);
    mainArrsinSort.value = [...mainArrAlwaysFull.value];
    remainingQuestions.value = mainArr.value.length;
    globalArray.value = [...mainArrsinSort.value];

    await forceSyncToDB();
};

const refreshGame = async () => {
    let filtered: TrainerItem[];

    if (checkedKind.value.includes("all")) {
        filtered = [...mainArrAlwaysFull.value];
    } else {
        filtered = mainArrAlwaysFull.value.filter(
            (item) =>
                item.kind &&
                checkedKind.value.includes(item.kind.toLowerCase()),
        );
    }

    if (filtered.length <= 1) return;

    playSound(audioHint);
    hasError.value = false;
    userAnswer.value = "";
    showNotesFlag.value = false;

    const shuffled = shuffleArray([...filtered]);

    const first = shuffled.shift();
    if (first) {
        shuffled.push(first);
    }

    mainArr.value = shuffled;

    await forceSyncToDB();
};

const handleModalOpenRequest = (payload: {
    flatIndex: number;
    filteredRows: unknown[];
}) => {
    modalCurrentIndex.value = payload.flatIndex;
    modalTableRows.value = payload.filteredRows;
    isModalOpen.value = true;
};

watch(
    [mainArr, mainArrsinSort, checkedKind],
    async () => {
        if (isSyncing.value) return;
        await saveProgress(props.slug, {
            mainArr: mainArr.value,
            mainArrsinSort: mainArrsinSort.value,
            checkedKind: checkedKind.value,
            sectionArr: sectionArr.value,
        });
    },
    { deep: true },
);

const forceSyncToDB = async () => {
    await saveProgress(props.slug, {
        mainArr: mainArr.value,
        mainArrsinSort: mainArrsinSort.value,
        checkedKind: checkedKind.value,
        sectionArr: sectionArr.value,
    });
};
</script>

<template>
    <div class="mainTrainer">
        <div class="title">
            <hr class="hr_title_page" size="3" />
            <h1 class="title_page">{{ pageTitle }}</h1>
            <hr class="hr_title_page" size="3" />
        </div>

        <section v-if="pageTitle !== t('trainer.notFound')">
            <TrainerGameSkeleton v-if="!globalArray.length" />

            <div v-else class="content_game content_training">
                <div class="training-config">
                    <TrainerAudioControls
                        :is-sound-on="isSoundOn"
                        :sound-level="soundLevel"
                        @reload="reloadGame"
                        @refresh="refreshGame"
                        @toggle-sound="toggleSound"
                    />

                    <TrainerCategorySelect
                        :section-arr="sectionArr"
                        :checked-kind="checkedKind"
                        class="training-config__select"
                        :active-kinds-count="activeKindsCount"
                        :is-kind-available="isKindAvailable"
                        @select-category="selectCategory"
                    />
                </div>

                <TrainerQuestion
                    :question-html="currentQuestionHtml"
                    :has-error="hasError"
                />

                <TrainerForm
                    v-model="userAnswer"
                    :has-error="hasError"
                    @submit="handleInputSubmit"
                    @hint="showHint"
                />

                <TrainerScore :count="remainingQuestions" />
            </div>

            <TrainerTable
                v-if="globalArray.length > 0 && titles.length > 0"
                :key="slug + locale + checkedKind.length + globalArray.length"
                ref="trainerTableComponent"
                :titles="titles"
                :global-array="globalArray"
                :checked-kind="checkedKind"
                :current-question="mainArr[0]"
                :is-hint-used="fromHintButton"
                @row-select="handleModalOpenRequest"
            />
        </section>

        <TrainerNotice
            v-if="globalArray.length"
            :notice-text="
                showNotesFlag && mainArr[0]?.notice ? mainArr[0].notice : ''
            "
            :table-container-ref="tableDOMElement"
        />

        <WordModal
            v-model:current-index="modalCurrentIndex"
            :is-open="isModalOpen"
            :table-rows="modalTableRows"
            :global-array="globalArray"
            :param-global="paramGlobal"
            @close="isModalOpen = false"
        />
        <section
            v-if="globalArray.length && theoryContent"
            class="train_content"
            v-html="theoryContent"
        ></section>
    </div>
</template>

<style scoped>
.mainTrainer {
    width: 100%;
    min-height: 100vh;
}
.content_game {
    background-color: rgb(29, 29, 29);
    border: 1px solid #198754;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
}

.training-config {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 24px;
    position: relative;
    height: 40px;
    z-index: 9999;
}

.train_content {
    background-color: rgb(24, 24, 24);
    padding: 20px;
    border-radius: 6px;
    color: #e0e0e0;
    line-height: 1.6;
    margin-top: 24px;
}

@media (max-width: 600px) {
    .training-config {
        gap: 18px;
        margin-bottom: 30px;
    }

    .content_game {
        padding: 18px;
    }
}
@media (max-width: 340px) {
    .training-config {
        gap: 12px;
        justify-content: center;
        width: 100%;
    }

    .content_game {
        border-radius: 6px;
        padding: 12px;
    }
}
</style>
