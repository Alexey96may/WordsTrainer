<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

// ВХОДЯЩИЕ ДАННЫЕ (Глобальные массивы из твоего WP)
// Если данные приходят извне, их можно передавать через props или импортировать файл.
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
});

const globalArray = ref(props.trainingData);
const paramGlobal = ref(props.paramGlobal);
const titles = ref(props.tableTitles);
const pageTitle = ref(props.trainingName);

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

// РЕАКТИВНЫЕ СОСТОЯНИЯ ТРЕНАЖЕРА
const userAnswer = ref("");
const hasError = ref(false);
const remainingQuestions = ref(0);
const fromHintButton = ref(false);
const showNotesFlag = ref(false);

// Звук
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

// Массивы вопросов
const mainArrAlwaysFull = ref([]);
const mainArr = ref([]);
const mainArrsinSort = ref([]); // Для отслеживания доступности в текущем режиме

// Категории/Кастомный селектор
const sectionArr = ref([]);
const checkedKind = ref(["все"]);
const flagSec = ref(true);
const flagGameOver = ref(false);

// Заметки и таблицы
const showNotesBanner = ref(false);
const notesText = ref("");
const notesOpacity = ref(0.95);
const notesVisibility = ref("visible");

// Модалка (Подробный просмотр по клику на таблицу)
const isModalOpen = ref(false);
const activeTableRowIndex = ref(-1); // Храним индекс выбранной строки tr
const modalWordCaps = ref("");
const modalTranslation = ref("");
const modalItems = ref([]); // Элементы внутри флекс-сетки модалки
const modalFlexDirection = ref("row");
const modalItemWidth = ref("100%");
const modalCrossClass = ref("");

// Тач-события для свайпа в модалке
let xTouch = null;
let hwWidth = window.screen.width / 4;
const modalLeftOffset = ref(0);
const modalOpacity = ref(1);

// ==========================================
// ИНИЦИАЛИЗАЦИЯ И ФОРМИРОВАНИЕ МАССИВОВ
// ==========================================
const initTrainer = () => {
    if (!globalArray.value.length) return;

    // 1. Формируем список категорий (Kind)
    const kinds = new Set(["Все"]);
    globalArray.value.forEach((item) => {
        if (!item.base) item.base = item.word;

        if (item.kind) {
            const strKind = item.kind[0].toUpperCase() + item.kind.slice(1);
            kinds.add(strKind);
        } else {
            item.kind = "Без группы";
            kinds.add("Без группы");
        }
    });
    sectionArr.value = Array.from(kinds);

    // 2. Формируем полный массив вопросов (mainArrAlwaysFull)
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

// Перемешивание Фишера-Йетса
const shuffleArray = () => {
    const arr = mainArr.value;
    for (let i = 0; i < arr.length; i++) {
        const r = Math.floor(Math.random() * (arr.length - i)) + i;
        const temp = arr[r];
        arr[r] = arr[i];
        arr[i] = temp;
    }
};

// Текущий вопрос с подсветкой точек
const currentQuestionHtml = computed(() => {
    if (!mainArr.value.length)
        return flagGameOver.value
            ? "Вы полностью завершили тренировку! Начните заново."
            : "В данном режиме больше нет вопросов.";

    const pattern = /\.\.\./g;
    const qwMod = mainArr.value[0].qws[0].replace(
        pattern,
        '<span style="color: red">...</span>',
    );
    return `${qwMod} <br><span class="spanTransl">(${mainArr.value[0].transls[0]})</span>`;
});

//Количество вопросов у "Все" динамически
const totalAvailableCount = computed(() => {
    return checkedKind.value.includes("все")
        ? sectionArr.value.length - 1
        : checkedKind.value.length;
});

// ==========================================
// УПРАВЛЕНИЕ ЗВУКОМ
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

// ==========================================
// ЛОГИКА ОТВЕТОВ И КНОПОК
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

        // Удаляем из общего пула
        const index = mainArrsinSort.value.indexOf(mainArr.value[0]);
        if (index > -1) {
            mainArrsinSort.value.splice(index, 1);
        }
        mainArr.value.shift();
        remainingQuestions.value = mainArr.value.length;

        fromHintButton.value = false;
        showNotesFlag.value = false;
        showNotesBanner.value = false;

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

    // Логика заметок (Показать баннер)
    if (mainArr.value[0].notice && !showNotesFlag.value) {
        notesText.value = mainArr.value[0].notice;
        showNotesBanner.value = true;
        showNotesFlag.value = true;
    }
};

// Перезапуск текущего режима
const reloadGame = () => {
    playSound(audio_hint);
    flagGameOver.value = false;
    hasError.value = false;
    userAnswer.value = "";
    showNotesBanner.value = false;
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

// Пропуск / Смена текущего вопроса внутри режима
const refreshGame = () => {
    if (mainArr.value.length <= 1) return;
    playSound(audio_hint);
    hasError.value = false;
    userAnswer.value = "";
    showNotesBanner.value = false;
    showNotesFlag.value = false;

    const first = mainArr.value.shift();
    shuffleArray();
    mainArr.value.push(first);
};

// ==========================================
// СЕЛЕКТОР КАТЕГОРИЙ (ФИЛЬТРАЦИЯ КЛИКОМ)
// ==========================================
const selectCategory = (kind) => {
    const kindClean = kind.toLowerCase();

    if (kindClean === "все") {
        checkedKind.value = ["все"];
    } else if (checkedKind.value.includes(kindClean)) {
        checkedKind.value = checkedKind.value.filter((k) => k !== kindClean);
        if (!checkedKind.value.length) checkedKind.value = ["все"];
    } else {
        if (checkedKind.value.includes("все")) {
            checkedKind.value = [];
        }
        checkedKind.value.push(kindClean);
    }

    // Пересчет основного массива по фильтрам
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
    showNotesBanner.value = false;

    if (mainArr.value.length === 0) {
        flagGameOver.value = mainArrsinSort.value.length === 0;
    }
};

// Скрыть/раскрыть селектор (анимация стрелок)
const toggleSelectContainer = () => {
    if (flagGameOver.value) return;
    flagSec.value = !flagSec.value;
};

// Проверка активности цвета категорий в селекторе (логика topicZShow)
const isKindActiveInPool = (kind) => {
    if (kind.toLowerCase() === "все") return true;
    return mainArrsinSort.value.some(
        (item) => item.kind.toLowerCase() === kind.toLowerCase(),
    );
};

// ==========================================
// ЛОГИКА СКРОЛЛА И БАННЕРА КУКИ / ЗАМЕТОК
// ==========================================
const handleScroll = () => {
    // Логика скрытия баннера заметок при достижении конца таблицы
    const tableContent = document.getElementById("table-content");
    if (!tableContent) return;

    let tableEndPos =
        tableContent.offsetTop + tableContent.offsetHeight - window.innerHeight;
    if (window.scrollY >= tableEndPos) {
        notesVisibility.value = "hidden";
        notesOpacity.value = 0;
    } else {
        notesVisibility.value = "visible";
        notesOpacity.value = 0.95;
    }
};

// ==========================================
// МОДАЛЬНОЕ ОКНО СЛОВА (ДЕТАЛИЗАЦИЯ И СВАЙПЫ)
// ==========================================
// Преобразование в плоский объект для генерации таблицы
const flattenObj = (ob) => {
    let result = {};
    for (const i in ob) {
        if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
            const temp = flattenObj(ob[i]);
            for (const j in temp) {
                result[j] = temp[j];
            }
        } else {
            result[i] = ob[i];
        }
    }
    return result;
};

const openWordModal = (index, rowData) => {
    activeTableRowIndex.value = index;
    isModalOpen.value = true;

    // Эмулируем парсинг текста строки tr
    const firstTableWord = rowData.base || rowData.word || "";
    modalWordCaps.value =
        firstTableWord[0].toUpperCase() + firstTableWord.slice(1);
    modalTranslation.value = rowData.translation || "";

    // Фильтруем данные из globalArray
    const filtered = globalArray.value.filter((item) => {
        const baseClean = (item.base || item.word || "").toLowerCase().trim();
        return (
            baseClean === firstTableWord.toLowerCase().trim() &&
            (rowData.kind.toLowerCase() === item.kind.toLowerCase() ||
                paramGlobal.value.includes("withoutKind"))
        );
    });

    // Рассчитываем стили колонок в зависимости от countFill
    const countFill = filtered.length;
    if (countFill < 4) {
        modalFlexDirection.value = "column";
        modalItemWidth.value = "auto";
    } else if (countFill === 24) {
        modalFlexDirection.value = "row";
        modalItemWidth.value = "50%";
    } else if (countFill === 6 || countFill === 9 || countFill > 17) {
        modalFlexDirection.value = "row";
        modalItemWidth.value = "33.3%";
    } else {
        modalFlexDirection.value = "row";
        modalItemWidth.value = "100%";
    }

    modalItems.value = filtered;
    document.body.style.overflowY = "hidden";
};

const closeWordModal = () => {
    isModalOpen.value = false;
    document.body.style.overflowY = "auto";
};

// Переключение строк внутри модалки (Вверх/Вниз -> Предыдущий/Следующий)
const navigateModal = (direction) => {
    // Находим все доступные данные из таблицы (имитация строк tr)
    const nextIndex = activeTableRowIndex.value + direction;
    if (nextIndex >= 0 && nextIndex < globalArray.value.length) {
        openWordModal(nextIndex, globalArray.value[nextIndex]);
    }
};

// Навигация клавишами
const handleKeyDown = (e) => {
    if (!isModalOpen.value) return;
    if (e.key === "ArrowLeft") navigateModal(-1);
    if (e.key === "ArrowRight") navigateModal(1);
    if (e.key === "Enter" || e.key === "Backspace") closeWordModal();
};

// Скролл внутри модалки (Появление крестика)
const handleModalScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop > 100) {
        modalCrossClass.value =
            "forJsTrainerButtonBefAppear forJsTrainerButtonAppear";
    } else if (scrollTop === 0) {
        modalCrossClass.value = "";
    }
};

// Тач-события
const handleTouchStart = (e) => {
    if (!isModalOpen.value) return;
    xTouch = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
    if (!isModalOpen.value || !xTouch) return;
    const newCoordX = e.changedTouches[0].clientX;
    const diff = newCoordX - xTouch;

    if (Math.abs(diff) > 15) {
        modalLeftOffset.value = diff;
    }
};

const handleTouchEnd = (e) => {
    if (!isModalOpen.value || !xTouch) return;
    const lastTouch = e.changedTouches[0].clientX;
    const diff = lastTouch - xTouch;

    if (Math.abs(diff) < hwWidth) {
        // Недостаточный свайп — возвращаем назад
        modalLeftOffset.value = 0;
    } else if (diff < 0) {
        // Свайп влево -> Следующее слово
        modalLeftOffset.value = -hwWidth * 2;
        modalOpacity.value = 0;
        setTimeout(() => {
            navigateModal(1);
            modalLeftOffset.value = 0;
            modalOpacity.value = 1;
        }, 200);
    } else if (diff > 0) {
        // Свайп вправо -> Предыдущее слово
        modalLeftOffset.value = hwWidth * 2;
        modalOpacity.value = 0;
        setTimeout(() => {
            navigateModal(-1);
            modalLeftOffset.value = 0;
            modalOpacity.value = 1;
        }, 200);
    }
    xTouch = null;
};

// Жизненный цикл Vue
onMounted(() => {
    initTrainer();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
    <main class="mainTrainer">
        <hr class="hr_title_page" size="3" />
        <h1 class="title_page">{{ pageTitle }}</h1>
        <hr class="hr_title_page" size="3" />

        <section>
            <div class="content_game content_training" style="padding: 24px">
                <div class="fix_two_rows">
                    <span v-if="hasError" id="errorField">Подумайте ещё!</span>
                    <div>
                        <h2
                            class="text-center"
                            id="question_text"
                            v-html="currentQuestionHtml"
                        ></h2>
                    </div>
                </div>

                <div id="select_container">
                    <div id="select_game"></div>

                    <div id="arrowCont">
                        <div class="arrowSel" id="arrowSelTwo"></div>
                        <div class="arrowSel" id="arrowSelThree"></div>
                    </div>
                </div>

                <div
                    id="soundCheckDiv"
                    :class="{ dispNone: !isControlsVisible }"
                >
                    <div id="reload_Game" @click="reloadGame" title="Сбросить">
                        <img src="@/assets/img/reload.svg" alt="reloadIcon" />
                    </div>
                    <div
                        id="refresh_Game"
                        @click="refreshGame"
                        title="Обновить"
                    >
                        <img src="@/assets/img/refresh.svg" alt="refreshIcon" />
                    </div>
                    <div
                        id="soundCheck"
                        @click="toggleSound"
                        :class="{ 'sound-off': !isSoundOn }"
                    >
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g data-name="Layer 34" id="Layer_34">
                                <path
                                    class="cls-1"
                                    d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"
                                />
                                <path
                                    class="cls-1"
                                    d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1-3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"
                                />
                                <path
                                    v-if="isSoundOn"
                                    class="cls-1"
                                    id="sLevel1"
                                    d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"
                                />
                                <path
                                    v-if="isSoundOn"
                                    class="cls-1"
                                    id="sLevel2"
                                    d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"
                                />
                                <path
                                    v-if="isSoundOn"
                                    class="cls-1"
                                    id="sLevel3"
                                    d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"
                                />
                            </g>
                        </svg>
                    </div>
                </div>

                <form
                    class="form_game form_train"
                    id="form_game"
                    @submit.prevent="handleInputSubmit"
                    style="padding-bottom: 24px"
                >
                    <input
                        v-model="userAnswer"
                        autocomplete="off"
                        size="30"
                        type="text"
                        name="verb"
                        id="input_verb"
                        ref="answerInput"
                    />
                    <button
                        @click="showHint"
                        class="my_btn fw-bold button_game"
                        type="button"
                        style="margin-right: 12px"
                    >
                        Ответ
                    </button>
                    <button class="my_btn fw-bold button_game" type="submit">
                        Ввод
                    </button>
                </form>

                <h4 class="text-center score_title">
                    Осталось вопросов:
                    <span id="score">{{ remainingQuestions }}</span>
                </h4>
            </div>

            <div class="table-content" id="table-content"></div>
        </section>

        <section class="train_content" v-html="theoryContent"></section>

        <div id="stat_page" class="stat_topic">
            <img src="@/assets/img/viewers.png" alt="просмотры" />
            <span class="views_counter">{{ viewsCount }}</span>
        </div>
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

.fix_two_rows {
    min-height: 80px;
    position: relative;
    text-align: center;
}

#errorField {
    color: #dc3545;
    font-weight: bold;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 8px;
}

#question_text {
    color: #ffffff;
    font-size: 1.5rem;
}

#select_container {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#soundCheckDiv {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
}

#soundCheckDiv div {
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#soundCheck svg {
    width: 32px;
    height: 32px;
}

#soundCheck svg .cls-1 {
    fill: #e0e0e0;
    transition: fill 0.2s ease;
}

/* Перекрашиваем SVG иконку во Vue при выключении звука */
#soundCheck.sound-off svg path {
    fill: #6c757d !important;
}

.form_game {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

#input_verb {
    padding: 0.375rem 0.75rem;
    font-size: 1.2rem;
    background-color: #fff;
    border: 1px solid #092217;
    border-radius: 0.25rem;
    color: #000;
}

.my_btn {
    padding: 0.375rem 1.2rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    background: none;
    color: rgb(235, 235, 235);
    border: 1px solid #198754;
    cursor: pointer;
    transition: all 0.2s ease;
}

.my_btn:hover {
    background-color: #198754;
}

.score_title {
    color: #d6d6d6;
    margin-top: 20px;
}

#score {
    color: #198754;
    font-weight: bold;
}

.train_content {
    background-color: rgb(24, 24, 24);
    padding: 20px;
    border-radius: 6px;
    color: #e0e0e0;
    line-height: 1.6;
}

#stat_page {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    color: #8b8b8b;
    font-size: 14px;
}

#stat_page img {
    width: 20px;
    height: 20px;
}

.dispNone {
    display: none !important;
}
</style>
