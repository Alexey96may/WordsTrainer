<template>
    <div class="home-container">
        <hr class="hr_title_page" size="3" />
        <h1 class="title_page">Изучение Греческого Языка</h1>
        <hr class="hr_title_page" size="3" />

        <p class="welcome-text">
            Выберите интерактивный тренажёр для практики:
        </p>

        <div class="trainers-grid">
            <RouterLink
                v-for="trainer in trainers"
                :key="trainer.id"
                :to="`/trainer/${trainer.id}`"
                class="trainer-card"
            >
                <div class="card-icon">{{ trainer.icon }}</div>
                <h3>{{ trainer.name }}</h3>
                <p>{{ trainer.description }}</p>
                <span class="start-btn">Начать тренировку</span>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { TRAINERS_CONFIG } from "@/config/trainers";

interface TrainerItem {
    id: number;
    slug: string;
    name: string;
    description: string;
    icon: string;
}

// Полный список всех 11 тренажёров, синхронизированный с хедером и файлами JS
const trainers = ref(TRAINERS_CONFIG);
</script>

<style scoped>
.home-container {
    max-width: 1200px; /* Немного расширил, чтобы 11 карточек красивее ложились в сетку */
    margin: 0 auto;
    padding: 20px;
}
.welcome-text {
    text-align: center;
    color: #aaa;
    margin-bottom: 40px;
    font-size: 1.1rem;
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
    transition:
        transform 0.2s,
        box-shadow 0.2s;
    display: flex;
    flex-direction: column;
}
.trainer-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(25, 135, 84, 0.2);
}
.card-icon {
    font-size: 2rem;
    margin-bottom: 12px;
}
.trainer-card h3 {
    color: #198754;
    margin: 0 0 10px 0;
    font-size: 1.4rem;
}
.trainer-card p {
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.5;
    flex-grow: 1;
    margin-bottom: 20px;
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
}
.trainer-card:hover .start-btn {
    background-color: #157347;
}
</style>
