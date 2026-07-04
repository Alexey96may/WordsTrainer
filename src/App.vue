<script setup lang="ts">
import { ref, watchEffect } from "vue";
import TrainerPage from "./pages/TrainerPage.vue";
import Header from "@/components/shared/AppHeader.vue";
import Footer from "@/components/shared/AppFooter.vue";

const currentTrainingId = ref("train_gen_case");

const trainingData = ref([]);
const tableTitles = ref([]);
const trainingName = ref("Родительный падеж");

const handleTrainerSelection = (trainerId: string, trainerName: string) => {
    currentTrainingId.value = trainerId;
    trainingName.value = trainerName;
};

watchEffect(async () => {
    try {
        const module = await import(
            `./data/trainings/${currentTrainingId.value}.js`
        );
        trainingData.value = module.globalArray;
        tableTitles.value = module.tableTitlesArr;
    } catch (err) {
        console.error("Ошибка загрузки файла тренажера:", err);
    }
});
</script>

<template>
    <Header
        @select-trainer="handleTrainerSelection"
        :current-training-name="trainingName"
    />

    <TrainerPage
        v-if="trainingData.length"
        :key="currentTrainingId"
        :training-data="trainingData"
        :table-titles="tableTitles"
        :training-name="trainingName"
    />

    <Footer />
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
