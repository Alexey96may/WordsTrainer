<script setup>
import { ref, computed, onMounted, watch } from "vue";
import TrainerQuestion from "@/components/trainer/TrainerQuestion.vue";
import TrainerAudioControls from "@/components/trainer/TrainerAudioControls.vue";
import TrainerForm from "@/components/trainer/TrainerForm.vue";
import TrainerScore from "@/components/trainer/TrainerScore.vue";
import TrainerTable from "@/components/trainer/TrainerTable.vue";
import TrainerNotice from "@/components/trainer/TrainerNotice.vue";
import WordModal from "@/components/trainer/WordModal.vue";

const props = defineProps({
    trainingData: {
        type: Array,
        required: true,
    },
    tableTitles: {
        type: Array,
        default: () => [],
    },
    trainingName: {
        type: String,
        default: "Тренажёр",
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

// Данные и параметры страницы
const globalArray = ref(props.trainingData);
const paramGlobal = ref(props.paramGlobal);
const titles = ref(props.tableTitles);
const pageTitle = ref(props.trainingName);

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

const audio_bad = new Audio(
    "/wp-content/themes/alfa-greek/assets/music/bad.wav",
);
const audio_great = new Audio(
    "/wp-content/themes/alfa-greek/assets/music/great.wav",
);
const audio_hint = new Audio(
    "/wp-content/themes/alfa-greek/assets/music/hint.wav",
);

// Очереди и пулы вопросов
const mainArrAlwaysFull = ref([]);
const mainArr = ref([]);
const mainArrsinSort = ref([]);

// Фильтрация (Категории)
const sectionArr = ref([]);
const checkedKind = ref(["все"]);
const isSelectOpen = ref(false); // Замена flagSec для открытия/закрытия списка
const flagGameOver = ref(false);

// Refs для доступа к DOM элементам дочерних компонентов
const trainerTableComponent = ref(null);
const modalCurrentIndex = ref(0);
const modalTableRows = ref([]);
const isModalOpen = ref(false);

// Ссылка на DOM-ноду таблицы внутри дочернего компонента для расчета скролла плашки notice
const tableDOMElement = computed(() => {
    return trainerTableComponent.value?.tableContentRef || null;
});

// Синхронизация при изменении входящих пропсов WordPress
watch(
    () => props.trainingData,
    (newData) => {
        globalArray.value = newData;
        paramGlobal.value = props.paramGlobal;
        titles.value = props.tableTitles;
        pageTitle.value = props.trainingName;
        initTrainer();
    },
);

// ==========================================
// ИНИЦИАЛИЗАЦИЯ И ИГРОВАЯ ЛОГИКА
// ==========================================
const initTrainer = () => {
    if (!globalArray.value.length) return;

    // 1. Формируем уникальные категории (Kind)
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

    // 2. Дробление комплексных вопросов (qws.length > 1) на отдельные элементы
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

// Текст текущего вопроса (парсинг многоточий)
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

// Счётчик количества выбранных групп для отображения в "Все (X)"
const activeKindsCount = computed(() => {
    return checkedKind.value.includes("все")
        ? sectionArr.value.length - 1
        : checkedKind.value.length;
});

// Проверка доступности категории в текущей сессии тренажёра (логика цвета текста из topicZShow)
const isKindAvailable = (kind) => {
    if (kind.toLowerCase() === "все") return true;
    return mainArrsinSort.value.some(
        (item) => item.kind.toLowerCase() === kind.toLowerCase(),
    );
};

// ==========================================
// ОБРАБОТКА ИГРОВЫХ КНОПОК И ОТВЕТОВ
// ==========================================
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

        // Удаляем отгаданное слово из сессии сортировки
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

// ==========================================
// КАТЕГОРИИ И ФИЛЬТРЫ
// ==========================================
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

    // Применение фильтров
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

// ==========================================
// ЗВУКОВАЯ СИСТЕМА
// ==========================================
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

// Открытие модалки из компонента таблицы справочника
const handleModalOpenRequest = (payload) => {
    modalCurrentIndex.value = payload.flatIndex;
    modalTableRows.value = payload.filteredRows;
    isModalOpen.value = true;
};

onMounted(() => {
    initTrainer();
});
</script>

<template>
    <main class="mainTrainer">
        <hr class="hr_title_page" size="3" />
        <h1 class="title_page">{{ pageTitle }}</h1>
        <hr class="hr_title_page" size="3" />

        <section>
            <div class="content_game content_training" style="padding: 24px">
                <TrainerQuestion
                    :question-html="currentQuestionHtml"
                    :has-error="hasError"
                />

                <div id="select_container">
                    <div
                        id="select_game"
                        :style="{ height: isSelectOpen ? 'auto' : '40px' }"
                        class="custom-select-box"
                    >
                        <div
                            class="option first-opt"
                            :class="{
                                optSelected: checkedKind.includes('все'),
                            }"
                            @click="selectCategory('Все')"
                        >
                            Все <sup>({{ activeKindsCount }})</sup>
                        </div>

                        <div class="secOptionContainer">
                            <div
                                v-for="(kind, index) in sectionArr.slice(1)"
                                :key="index"
                                class="option"
                                :class="{
                                    optSelected: checkedKind.includes(
                                        kind.toLowerCase(),
                                    ),
                                    'disabled-kind': !isKindAvailable(kind),
                                }"
                                @click="selectCategory(kind)"
                            >
                                {{ kind }}
                            </div>
                        </div>
                    </div>

                    <div id="arrowCont" @click="isSelectOpen = !isSelectOpen">
                        <span
                            id="arrowSelTwo"
                            :style="{
                                borderColor: isSelectOpen ? 'white' : '#198754',
                            }"
                        ></span>
                        <span
                            id="arrowSelThree"
                            :style="{
                                borderColor: isSelectOpen ? '#198754' : 'white',
                            }"
                        ></span>
                    </div>
                </div>

                <TrainerAudioControls
                    :is-sound-on="isSoundOn"
                    :sound-level="soundLevel"
                    @reload="reloadGame"
                    @refresh="refreshGame"
                    @toggle-sound="toggleSound"
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
</template>

<style scoped>
.mainTrainer {
    width: 100%;
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
    margin-bottom: 24px;
}

/* Стилизация кастомного выпадающего списка под дизайн WP */
.custom-select-box {
    width: 100%;
    max-width: 400px;
    border: 1px solid #198754;
    border-radius: 4px;
    background-color: #222;
    overflow: hidden;
    transition: height 0.2s ease-in-out;
}

.option {
    padding: 8px 16px;
    color: #fff;
    cursor: pointer;
    border-bottom: 1px solid #2d2d2d;
    transition: background-color 0.2s;
}

.option:hover {
    background-color: #2d2d2d;
}

.first-opt {
    border-bottom: 1px solid #198754;
    font-weight: bold;
}

.optSelected {
    background-color: #198754 !important;
    color: white !important;
}

.disabled-kind {
    color: #7f7f7f !important;
}

#select_container {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

#arrowCont {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    padding: 4px 12px;
}

#arrowCont span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(45deg);
    transition: border-color 0.2s;
}

#arrowSelThree {
    transform: rotate(-135deg) !important;
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
