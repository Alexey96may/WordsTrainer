<script setup lang="ts">
import { ref, computed, watch } from "vue";
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
import type { LocalTitleItem, RawTrainerItem } from "@/types/trainer";
import { useTrainerSound } from "@/composables/useTrainerSound";
import { useTrainerCore } from "@/composables/useTrainerCore";
import { useTrainerCategories } from "@/composables/useTrainerCategories";

const props = defineProps({
    slug: {
        type: String,
        required: true,
    },
    paramGlobal: {
        type: Array,
        default: () => [],
    },
    theoryContent: {
        type: String,
        default: "",
    },
});

const { t, locale } = useI18n();

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

// 2. Core Module (Question and answer state management)
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
} = useTrainerCore();

// 3. Categories Module (Passing reactive dependencies from the Core)
const {
    sectionArr,
    checkedKind,
    activeKindsCount,
    isKindAvailable,
    selectCategory,
} = useTrainerCategories(
    mainArr,
    mainArrsinSort,
    mainArrAlwaysFull,
    remainingQuestions,
    hasError,
    userAnswer,
    flagGameOver,
);

const globalArray = ref<RawTrainerItem[]>([]);
const paramGlobal = ref<string[]>(props.paramGlobal as string[]);
const titles = ref<LocalTitleItem[]>([]);
const pageTitle = computed(() => {
    if (!props.slug) return t("trainer.loading");

    const key = `trainers.${props.slug}.name`;
    const translated = t(key);

    return translated !== key ? translated : t("trainer.defaultTitle");
});

const trainerTableComponent = ref<InstanceType<typeof TrainerTable> | null>(
    null,
);
const modalCurrentIndex = ref(0);
const modalTableRows = ref<unknown[]>([]);
const isModalOpen = ref(false);

const tableDOMElement = computed(() => {
    return trainerTableComponent.value?.tableContentRef || null;
});

// Dynamic data loading by slug
const loadTrainerData = async (slug: string) => {
    try {
        // const module = await import(`../data/trainings/${slug}.js`);
        const module = await import(
            `../data/trainings/${slug}/${locale.value}.ts`
        );

        globalArray.value = module.globalArray as RawTrainerItem[];
        titles.value = module.tableTitlesArr as LocalTitleItem[];

        userAnswer.value = "";
        hasError.value = false;
        fromHintButton.value = false;
        showNotesFlag.value = false;
        flagGameOver.value = false;
        checkedKind.value = ["all"];

        initTrainer(globalArray.value, sectionArr);
    } catch (err) {
        console.error("Ошибка загрузки...", err);
        globalArray.value = [];
    }
};

watch(
    () => props.slug,
    (newSlug) => {
        if (newSlug) {
            loadTrainerData(newSlug);
        }
    },
    { immediate: true },
);

watch(locale, () => {
    if (props.slug) {
        loadTrainerData(props.slug);
    }
});

// User actions in the game
const handleInputSubmit = () => {
    const isCorrect = checkUserAnswer();
    if (isCorrect) {
        playSound(audioGreat);
    } else {
        playSound(audioBad);
    }
};

const showHint = () => {
    if (!mainArr.value.length) return;
    playSound(audioHint);
    fromHintButton.value = true;
    userAnswer.value = mainArr.value[0]!.word;
    showNotesFlag.value = true;
};

const reloadGame = () => {
    playSound(audioHint);
    flagGameOver.value = false;
    hasError.value = false;
    userAnswer.value = "";
    showNotesFlag.value = false;

    if (!checkedKind.value.includes("all")) {
        mainArr.value = mainArrAlwaysFull.value.filter((item) =>
            checkedKind.value.includes(item.kind.toLowerCase()),
        );
        mainArrsinSort.value = [...mainArr.value];
    } else {
        mainArr.value = [...mainArrAlwaysFull.value];
        mainArrsinSort.value = [...mainArrAlwaysFull.value];
    }
    mainArr.value = shuffleArray(mainArr.value);
    remainingQuestions.value = mainArr.value.length;
};

const refreshGame = () => {
    if (mainArr.value.length <= 1) return;
    playSound(audioHint);
    hasError.value = false;
    userAnswer.value = "";
    showNotesFlag.value = false;

    const first = mainArr.value.shift();
    mainArr.value = shuffleArray(mainArr.value);
    if (first) mainArr.value.push(first);
};

const handleModalOpenRequest = (payload: {
    flatIndex: number;
    filteredRows: unknown[];
}) => {
    modalCurrentIndex.value = payload.flatIndex;
    modalTableRows.value = payload.filteredRows;
    isModalOpen.value = true;
};
</script>

<template>
    <div class="mainTrainer">
        <div class="title">
            <hr class="hr_title_page" size="3" />
            <h1 class="title_page">{{ pageTitle }}</h1>
            <hr class="hr_title_page" size="3" />
        </div>

        <div v-if="pageTitle === t('trainer.notFound')" class="text-center">
            <h2 style="color: #e53131; margin-top: 40px">
                $t('trainer.notFound')
            </h2>
        </div>

        <section v-else>
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
                v-if="globalArray.length"
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
