<template>
    <section class="wordDayField">
        <h4>{{ t("dailyWord.title") }}</h4>
        <div class="dailyWord" ref="container">
            <div id="dWord" :class="{ visible: isVisible }" @click="playAudio">
                <strong>{{ capitalizedWord }}</strong>
                <span
                    v-if="wordData.voicePath"
                    class="sound-icon"
                    v-html="svgIcon"
                ></span>
            </div>

            <p id="dWordTransl" :class="{ visible: isVisible }">
                <em
                    >{{ t("dailyWord.translationLabel") }}
                    {{ wordData.translation }}</em
                >
            </p>

            <hr
                class="dWordNewHr"
                :style="{ width: isVisible ? lineWidth : '0px' }"
            />

            <p
                id="dWordMorfology"
                :class="{ visible: isVisible }"
                v-html="wordData.groups.morfology"
            ></p>
            <p
                id="dWordEtimology"
                :class="{ visible: isVisible }"
                v-html="wordData.groups.etymology"
            ></p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useDailyWord } from "@/composables/useDailyWord";
import { daylyWordArray } from "@/data/daily_words/words";
import { useI18n } from "vue-i18n";

const { wordData } = useDailyWord(daylyWordArray);
const isVisible = ref(false);
const container = ref<HTMLElement | null>(null);
const lineWidth = ref("0px");
const { t } = useI18n();

const capitalizedWord = computed(() => {
    wordData.value.word.charAt(0).toUpperCase() + wordData.value.word.slice(1);
});

const svgIcon = `...`; // Сюда вставьте ваш SVG код

const playAudio = () => {
    if (wordData.value.voicePath) new Audio(wordData.value.voicePath).play();
};

const handleScroll = () => {
    if (container.value && !isVisible.value) {
        const top = container.value.getBoundingClientRect().top;
        if (top < window.innerHeight) {
            isVisible.value = true;
            lineWidth.value = container.value.clientWidth * 0.6 + "px";
        }
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Проверка при загрузке
});

onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
/* Основной контейнер */
.wordDayField {
    margin: 0 auto;
    padding: 0;
}

.wordDayField h4 {
    text-align: center;
    margin-bottom: 24px;
}

.dailyWord {
    box-shadow: 0px 0px 2px 0px black;
    transition: all 0.75s;
    border-radius: 5px;
    width: 30%;
    padding: 48px 24px;
    margin: 0 auto;
    background-color: white;
    position: relative;
}

/* Элементы, которые плавно проявляются */
#dWord,
#dWordTransl,
#dWordMorfology,
#dWordEtimology {
    transition: opacity 0.75s ease;
    opacity: 0;
}

/* Класс для анимации (добавляется через isVisible) */
#dWord.visible,
#dWordTransl.visible,
#dWordMorfology.visible,
#dWordEtimology.visible {
    opacity: 1;
}

#dWord {
    color: #01170d;
    text-align: center;
    font-family: "EB Garamond", serif;
    font-size: 32px;
    margin-bottom: 6px;
    cursor: pointer; /* Раз мы добавили @click="playAudio" */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

#dWordTransl {
    text-align: center;
}

.dWordNewHr {
    height: 1px;
    border: none;
    background-color: black; /* Убедись, что цвет задан, иначе не увидишь линию */
    margin: 24px auto 12px;
    transition: width 0.75s ease;
}

#dWordMorfology {
    text-align: center;
    margin-bottom: 12px;
}

#dWordEtimology {
    text-align: center;
}

.sound-icon {
    width: 24px;
    height: 24px;
    display: inline-block;
}

/* Мобильная адаптивность (добавь обязательно, чтобы не «глючило») */
@media (max-width: 640px) {
    .dailyWord {
        width: 90%;
        padding: 24px 12px;
    }
}
</style>
