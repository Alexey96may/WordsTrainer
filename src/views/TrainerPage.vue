<script setup>
import { ref, computed, watch } from "vue";
import { TRAINERS_CONFIG } from "@/config/trainers";

import TrainerQuestion from "@/components/trainer/TrainerQuestion.vue";
import TrainerAudioControls from "@/components/trainer/TrainerAudioControls.vue";
import TrainerForm from "@/components/trainer/TrainerForm.vue";
import TrainerScore from "@/components/trainer/TrainerScore.vue";
import TrainerCategorySelect from "@/components/trainer/TrainerCategorySelect.vue";
import TrainerTable from "@/components/trainer/TrainerTable.vue";
import TrainerNotice from "@/components/trainer/TrainerNotice.vue";
import WordModal from "@/components/trainer/WordModal.vue";

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

// Генерируем карту имен динамически из конфига: { "train_gen_case": "Родительный падеж", ... }
const trainerNames = TRAINERS_CONFIG.reduce((acc, trainer) => {
    acc[trainer.id] = trainer.name;
    return acc;
}, {});

// Состояние данных тренажера
const globalArray = ref([]);
const paramGlobal = ref(props.paramGlobal);
const titles = ref([]);
const pageTitle = ref("Загрузка...");

// Состояние игрового процесса
const userAnswer = ref("");
const hasError = ref(false);
const remainingQuestions = ref(0);
const fromHintButton = ref(false);
const showNotesFlag = ref(false);

// Управление звуком
const soundLevel = ref(3);
const sVolume = ref(1);
const isSoundOn = ref(true);

const audio_bad = new Audio(`${import.meta.env.BASE_URL}sound/effects/bad.wav`);
const audio_great = new Audio(
    `${import.meta.env.BASE_URL}sound/effects/great.wav`,
);
const audio_hint = new Audio(
    `${import.meta.env.BASE_URL}sound/effects/hint.wav`,
);

// Очереди и пулы вопросов
const mainArrAlwaysFull = ref([]);
const mainArr = ref([]);
const mainArrsinSort = ref([]);

// Фильтрация (Категории)
const sectionArr = ref([]);
const checkedKind = ref(["все"]);
const flagGameOver = ref(false);

// Refs
const trainerTableComponent = ref(null);
const modalCurrentIndex = ref(0);
const modalTableRows = ref([]);
const isModalOpen = ref(false);

const tableDOMElement = computed(() => {
    return trainerTableComponent.value?.tableContentRef || null;
});

// Динамическая загрузка данных по slug
const loadTrainerData = async (slug) => {
    try {
        pageTitle.value = trainerNames[slug] || "Тренажёр";

        // Динамический импорт js-файла
        const module = await import(`../data/trainings/${slug}.js`);

        globalArray.value = module.globalArray;
        titles.value = module.tableTitlesArr;

        // Сброс состояния
        userAnswer.value = "";
        hasError.value = false;
        fromHintButton.value = false;
        showNotesFlag.value = false;
        flagGameOver.value = false;
        checkedKind.value = ["все"];

        initTrainer();
    } catch (err) {
        console.error("Ошибка загрузки файла тренажера для slug:", slug, err);
        pageTitle.value = "Тренажёр не найден";
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

// Инициализация
const initTrainer = () => {
    if (!globalArray.value.length) return;

    const kinds = new Set(["Все"]);
    globalArray.value.forEach((item) => {
        if (!item.base) item.base = item.word;
        if (item.kind && item.kind.trim() !== "") {
            const strKind = item.kind[0].toUpperCase() + item.kind.slice(1);
            kinds.add(strKind);
        } else {
            item.kind = "Без группы";
            kinds.add("Без группы");
        }
    });
    sectionArr.value = Array.from(kinds);

    const fullList = [];
    globalArray.value.forEach((item) => {
        if (
            item.qws &&
            item.qws.length &&
            item.qws.length === item.transls.length &&
            item.word &&
            item.word !== "—"
        ) {
            if (item.qws.length > 1) {
                for (let p = 0; p < item.qws.length; p++) {
                    const clone = JSON.parse(JSON.stringify(item));
                    clone.qws = [item.qws[p]];
                    clone.transls = [item.transls[p]];
                    fullList.push(clone);
                }
            } else {
                fullList.push(item);
            }
        }
    });

    mainArrAlwaysFull.value = fullList;
    mainArr.value = Array.from(fullList);
    mainArrsinSort.value = Array.from(fullList);

    shuffleArray();
    remainingQuestions.value = mainArr.value.length;
};

const shuffleArray = () => {
    const arr = mainArr.value;
    for (let i = 0; i < arr.length; i++) {
        const r = Math.floor(Math.random() * (arr.length - i)) + i;
        const temp = arr[r];
        arr[r] = arr[i];
        arr[i] = temp;
    }
};

const currentQuestionHtml = computed(() => {
    if (!mainArr.value.length) {
        return flagGameOver.value
            ? "Вы полностью завершили тренировку! Начните заново."
            : "В данном режиме больше нет вопросов.";
    }
    const pattern = /\.\.\./g;
    const qwMod = mainArr.value[0].qws[0].replace(
        pattern,
        '<span style="color: red">...</span>',
    );
    return `${qwMod} <br><span class="spanTransl">(${mainArr.value[0].transls[0]})</span>`;
});

const activeKindsCount = computed(() => {
    return checkedKind.value.includes("все")
        ? sectionArr.value.length - 1
        : checkedKind.value.length;
});

const isKindAvailable = (kind) => {
    if (kind.toLowerCase() === "все") return true;
    return mainArrsinSort.value.some(
        (item) => item.kind.toLowerCase() === kind.toLowerCase(),
    );
};

const handleInputSubmit = () => {
    if (!mainArr.value.length) return;

    const answers = mainArr.value[0].word
        .split("/")
        .map((a) => a.trim().toLowerCase());
    const userAnsClean = userAnswer.value.trim().toLowerCase();
    const isCorrect =
        answers.includes(userAnsClean) ||
        mainArr.value[0].word.toLowerCase() === userAnsClean;

    if (isCorrect) {
        playSound(audio_great);
        hasError.value = false;
        userAnswer.value = "";

        const index = mainArrsinSort.value.indexOf(mainArr.value[0]);
        if (index > -1) mainArrsinSort.value.splice(index, 1);

        mainArr.value.shift();
        remainingQuestions.value = mainArr.value.length;
        fromHintButton.value = false;
        showNotesFlag.value = false;

        if (mainArr.value.length === 0) {
            flagGameOver.value = mainArrsinSort.value.length === 0;
        }
    } else {
        playSound(audio_bad);
        hasError.value = true;
    }
};

const showHint = () => {
    if (!mainArr.value.length) return;
    playSound(audio_hint);
    fromHintButton.value = true;
    userAnswer.value = mainArr.value[0].word;
    showNotesFlag.value = true;
};

const reloadGame = () => {
    playSound(audio_hint);
    flagGameOver.value = false;
    hasError.value = false;
    userAnswer.value = "";
    showNotesFlag.value = false;

    if (!checkedKind.value.includes("все")) {
        mainArr.value = mainArrAlwaysFull.value.filter((item) =>
            checkedKind.value.includes(item.kind.toLowerCase()),
        );
        mainArrsinSort.value = Array.from(mainArr.value);
    } else {
        mainArr.value = Array.from(mainArrAlwaysFull.value);
        mainArrsinSort.value = Array.from(mainArrAlwaysFull.value);
    }
    shuffleArray();
    remainingQuestions.value = mainArr.value.length;
};

const refreshGame = () => {
    if (mainArr.value.length <= 1) return;
    playSound(audio_hint);
    hasError.value = false;
    userAnswer.value = "";
    showNotesFlag.value = false;

    const first = mainArr.value.shift();
    shuffleArray();
    mainArr.value.push(first);
};

const selectCategory = (kind) => {
    const kindClean = kind.toLowerCase();

    if (kindClean === "все") {
        checkedKind.value = ["все"];
    } else if (checkedKind.value.includes(kindClean)) {
        checkedKind.value = checkedKind.value.filter((k) => k !== kindClean);
        if (!checkedKind.value.length) checkedKind.value = ["все"];
    } else {
        if (checkedKind.value.includes("все")) checkedKind.value = [];
        checkedKind.value.push(kindClean);
    }

    if (checkedKind.value.includes("все")) {
        mainArr.value = Array.from(mainArrsinSort.value);
    } else {
        mainArr.value = mainArrsinSort.value.filter((item) =>
            checkedKind.value.includes(item.kind.toLowerCase()),
        );
    }

    shuffleArray();
    remainingQuestions.value = mainArr.value.length;
    hasError.value = false;
    userAnswer.value = "";

    if (mainArr.value.length === 0) {
        flagGameOver.value = mainArrsinSort.value.length === 0;
    }
};

const toggleSound = () => {
    soundLevel.value = (soundLevel.value + 1) % 4;
    if (soundLevel.value === 0) {
        sVolume.value = 0;
        isSoundOn.value = false;
    } else {
        isSoundOn.value = true;
        sVolume.value =
            soundLevel.value === 1 ? 0.1 : soundLevel.value === 2 ? 0.5 : 1;
        playSound(audio_hint);
    }
};

const playSound = (audioNode) => {
    if (!isSoundOn.value) return;
    const clone = audioNode.cloneNode();
    clone.volume = sVolume.value;
    clone.play();
};

const handleModalOpenRequest = (payload) => {
    modalCurrentIndex.value = payload.flatIndex;
    modalTableRows.value = payload.filteredRows;
    isModalOpen.value = true;
};
</script>

<template>
    <main v-if="globalArray.length" class="mainTrainer">
        <div class="title">
            <hr class="hr_title_page" size="3" />
            <h1 class="title_page">{{ pageTitle }}</h1>
            <hr class="hr_title_page" size="3" />
        </div>

        <section>
            <div class="content_game content_training">
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
            v-if="theoryContent"
            class="train_content"
            v-html="theoryContent"
        ></section>
    </main>

    <main v-else class="mainTrainer">
        <h1 class="title_page">
            {{
                pageTitle === "Тренажёр не найден"
                    ? "Тренажёр не найден"
                    : "Загрузка данных тренажёра..."
            }}
        </h1>
    </main>
</template>

<style scoped>
.mainTrainer {
    width: 100%;
    min-height: 100vh;
}
.title {
    margin: 40px 0;
}
.hr_title_page {
    border: 0;
    height: 3px;
    background: #198754;
    background-image: linear-gradient(to right, #212529, #198754, #212529);
    margin: 16px 0;
}
.title_page {
    text-align: center;
    color: #ffffff;
    font-size: 2rem;
    margin: 12px 0;
}
.content_game {
    background-color: rgb(29, 29, 29);
    border: 1px solid #198754;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
}

/* Верхняя панель управления игрой */
.training-config {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-bottom: 40px;
    position: relative;
    height: 40px;
    z-index: 9999;
}

.training-config__select {
    position: absolute;
    top: 0;
    right: 0;
}

.train_content {
    background-color: rgb(24, 24, 24);
    padding: 20px;
    border-radius: 6px;
    color: #e0e0e0;
    line-height: 1.6;
    margin-top: 24px;
}
</style>
