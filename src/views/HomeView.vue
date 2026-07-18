<template>
    <div class="home-container">
        <div class="title">
            <hr class="hr_title_page" size="3" />
            <h1 class="title_page">{{ $t("home.title") }}</h1>
            <hr class="hr_title_page" size="3" />
        </div>

        <section class="daily-words">
            <h2 class="subtitle">{{ $t("dailyWord.title") }}</h2>

            <DailyWord />
        </section>

        <section class="trainers">
            <h2 class="subtitle">{{ $t("home.subtitle") }}</h2>

            <div class="trainers-grid">
                <template v-if="isLoading">
                    <TrainerCardSkeleton v-for="i in 6" :key="'loader-' + i" />
                </template>

                <template v-else>
                    <RouterLink
                        v-for="trainer in trainers"
                        :key="trainer.id"
                        :to="`/trainer/${trainer.id}`"
                        class="trainer-card"
                    >
                        <div class="card-icon">
                            <component :is="trainer.icon" />
                        </div>
                        <h3>{{ $t(`trainers.${trainer.id}.name`) }}</h3>
                        <p>{{ $t(`trainers.${trainer.id}.desc`) }}</p>
                        <span class="start-btn">{{ $t("home.startBtn") }}</span>
                    </RouterLink>
                </template>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { TRAINERS_CONFIG, type TrainerConfig } from "@/config/trainers";
import TrainerCardSkeleton from "@/components/ui/TrainerCardSkeleton.vue";
import DailyWord from "@/components/shared/DailyWord.vue";

const isLoading = ref(true);
const trainers = ref<TrainerConfig[]>([]);

onMounted(() => {
    setTimeout(() => {
        trainers.value = TRAINERS_CONFIG;
        isLoading.value = false;
    }, 300);
});
</script>

<style scoped>
.welcome-text {
    text-align: center;
    color: #aaa;
    margin-bottom: 40px;
    font-size: 1.1rem;
}

.daily-words {
    margin: 0 auto;
    padding: 0;
}

.trainers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}
.trainer-card {
    background-color: #1d1d1d;
    border: 1px solid #198754;
    border-radius: 12px;
    padding: 24px;
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    transition:
        transform 0.3s cubic-bezier(0.25, 1, 0.5, 1),
        box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.card-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    transition: all 0.3s;
    text-align: center;
    line-height: 1;
}
.card-icon svg {
    width: 2rem;
    height: 2rem;
    stroke-width: 1.5;
}

.trainer-card h3 {
    color: #198754;
    margin: 0 0 1rem 0;
    text-align: center;
    font-size: 1.4rem;
}
.trainer-card p {
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.5;
    text-align: center;
    flex-grow: 1;
}
.start-btn {
    background-color: #198754;
    color: white;
    text-align: center;
    padding: 10px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 0.9rem;
    transition: background-color 0.2s;
    margin-top: 2rem;
}

.trainer-card:active {
    transform: scale(0.98);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

@media (hover: hover) {
    .trainer-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(25, 135, 84, 0.2);
    }

    .trainer-card:hover .card-icon {
        color: #198754;
    }

    .trainer-card:hover .start-btn {
        background-color: #157347;
    }
}

@media (max-width: 600px) {
    .trainers-grid {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
    .card-icon {
        font-size: 1.6rem;
        display: block;
    }
    .trainer-card h3 {
        font-size: 1.2rem;
        margin: 0 0 0.5rem 0;
    }
    .trainer-card p {
        font-size: 0.8rem;
    }
    .start-btn {
        font-size: 0.8rem;
    }

    .card-icon svg {
        width: 1.5rem;
        height: 1.5rem;
        stroke-width: 1;
    }
}

@media (max-width: 340px) {
    .trainers-grid {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
    .card-icon {
        font-size: 1.3rem;
    }
    .trainer-card {
        border-radius: 6px;
        padding: 24px 12px;
    }
    .trainer-card h3 {
        font-size: 1rem;
    }
    .trainer-card p {
        font-size: 0.7rem;
    }
    .start-btn {
        font-size: 0.6rem;
    }
}
</style>
