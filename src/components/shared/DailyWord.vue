<template>
    <div v-if="wordData" class="daily-word-container" ref="container">
        <div class="daily-word-card" :class="{ visible: isVisible }">
            <div class="header">
                <div class="header__up">
                    <div
                        v-if="wordData.voicePath"
                        class="sound-icon"
                        v-html="svgIcon"
                        @click="playAudio"
                    ></div>
                    <span class="level-badge">{{ wordData.level }}</span>
                </div>
                <h2
                    class="word"
                    @click="playAudio"
                    :class="{ 'has-audio': wordData?.voicePath }"
                >
                    {{ capitalizedWord }}
                </h2>
            </div>

            <p class="translation">{{ wordData.translation }}</p>

            <hr class="divider" :style="{ width: isVisible ? '60%' : '0px' }" />

            <div class="details">
                <p v-if="wordData.morfology">
                    <strong>{{ t("dailyWord.morphology") }}</strong>
                    <span v-html="wordData.morfology"></span>
                </p>
                <p v-if="wordData.etymology">
                    <strong>{{ t("dailyWord.etymology") }}</strong>
                    <span v-html="wordData.etymology"></span>
                </p>
            </div>

            <div
                v-if="wordData.synonims || wordData.antonims"
                class="lexical-group"
            >
                <p v-if="wordData.synonims" class="syn">
                    <em>{{ t("dailyWord.synonims") }}</em>
                    {{ wordData.synonims }}
                </p>
                <p v-if="wordData.antonims" class="ant">
                    <em>{{ t("dailyWord.antonims") }}</em>
                    {{ wordData.antonims }}
                </p>
            </div>

            <div class="example-box" v-if="wordData.example">
                <p class="ex-orig">{{ wordData.example }}</p>
                <p class="ex-transl">{{ wordData.exampleTransl }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useDailyWord } from "@/composables/useDailyWord";
import { useI18n } from "vue-i18n";

const { wordData } = useDailyWord();
const { t } = useI18n();
const isVisible = ref(false);
const container = ref<HTMLElement | null>(null);

const capitalizedWord = computed(() => {
    const w = wordData.value?.word || "";
    return w.charAt(0).toUpperCase() + w.slice(1);
});

const svgIcon = `<svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <g data-name="Layer 34" id="Layer_34">
                    <path
                        class="cls-1"
                        d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"
                    />
                    <path
                        class="cls-1"
                        d="M7,22H3a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h4a1,1,0,0,1,1,1V21A1,1,0,0,1,7,22ZM3,12v8H6V12Z"
                    />

                    <path
                        class="cls-1"
                        id="sLevel1"
                        d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"
                    />
                    <path
                        class="cls-1"
                        id="sLevel3"
                        d="M23.65,22.65a1,1,0,0,1-.29-.7A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"
                    />
                    <path
                        class="cls-1"
                        id="sLevel2"
                        d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"
                    />
                </g>
            </svg>`;

const playAudio = () => {
    if (wordData.value?.voicePath) {
        new Audio(import.meta.env.BASE_URL + wordData.value.voicePath).play();
    }
};

const handleScroll = () => {
    if (container.value && !isVisible.value) {
        const top = container.value.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) isVisible.value = true;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.daily-word-container {
    margin-top: 40px;
    margin-bottom: 60px;
}

.daily-word-card {
    max-width: 500px;
    min-width: 50vw;
    margin: 0 auto;
    padding: 30px;
    background-color: rgb(29, 29, 29);
    border: 1px solid #198754;
    border-radius: 8px;
    color: #e0e0e0;
    opacity: 0;
    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
    transform: translateY(20px);
}

.daily-word-card.visible {
    opacity: 1;
    transform: translateY(0);
}

.header {
    margin-bottom: 8px;
}

.header__up {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 8px;
    gap: 12px;
}

.word {
    font-family: var(--font-serif);
    font-size: 2rem;
    margin: 0;
    text-align: center;
}

.word.has-audio {
    cursor: pointer;
    transition: opacity 0.2s;
}

:deep(.daily-word-card svg) {
    fill: #198754;
    transition: fill 0.3s;
}

.word.has-audio:active,
:deep(.daily-word-card svg:active) {
    transform: scale(0.98);
    opacity: 0.6;
}

@media (hover: hover) {
    .word.has-audio:hover {
        opacity: 0.8;
    }

    :deep(.daily-word-card svg:hover) {
        fill: #fff;
    }
}

.level-badge {
    font-size: 0.6rem;
    padding: 2px 6px;
    background: #198754;
    border-radius: 4px;
}

.sound-icon {
    cursor: pointer;
    width: 22px;
    height: 22px;
}

.translation {
    text-align: center;
    font-size: 1.1rem;
    color: #aaa;
    margin-bottom: 20px;
}

.divider {
    border: 0;
    height: 1px;
    background: #198754;
    margin: 0 auto 20px;
    transition: width 0.7s;
}

.details {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.lexical-group {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    font-size: 0.9em;
    color: #888;
}

.lexical-group p {
    flex-basis: 50%;
}

.example-box {
    margin-top: 1.5rem;
    padding: 15px;
    background: rgb(24, 24, 24);
    border-left: 3px solid #198754;
}
.ex-orig {
    font-style: italic;
    font-size: 1rem;
    margin-bottom: 5px;
}
.ex-transl {
    font-size: 0.9em;
    color: #aaa;
}

@media (max-width: 600px) {
    .daily-word-container {
        margin-top: 20px;
        margin-bottom: 60px;
    }

    .daily-word-card {
        width: 100%;
        padding: 1.5rem 18px;
    }

    .details {
        font-size: 0.8rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .lexical-group {
        flex-direction: column;
        gap: 0.5rem;
        font-size: 0.8em;
    }

    .ex-orig {
        font-size: 0.9rem;
    }
    .ex-transl {
        font-size: 0.8em;
    }

    .header__up {
        margin-bottom: 18px;
        gap: 12px;
    }

    .sound-icon {
        width: 18px;
        height: 18px;
    }
}

@media (max-width: 340px) {
    .lexical-group {
        flex-direction: column;
        gap: 1rem;
        font-size: 0.9em;
    }
}
</style>
