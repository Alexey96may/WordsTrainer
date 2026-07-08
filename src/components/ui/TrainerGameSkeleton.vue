<template>
    <div class="content_game content_training skeleton-game">
        <div class="training-config-skeleton">
            <div class="skeleton-audio">
                <div class="skeleton-btn-round skeleton-anim"></div>
                <div class="skeleton-btn-round skeleton-anim"></div>
                <div class="skeleton-btn-round skeleton-anim"></div>
            </div>
            <div class="skeleton-select skeleton-anim"></div>
        </div>

        <div class="skeleton-question-container">
            <div class="skeleton-question-line skeleton-anim"></div>
            <div class="skeleton-question-translation skeleton-anim"></div>
        </div>

        <div class="skeleton-form-container">
            <div class="skeleton-input skeleton-anim"></div>
            <div class="skeleton-form-buttons">
                <div class="skeleton-btn-action skeleton-anim"></div>
                <div class="skeleton-btn-action skeleton-anim"></div>
            </div>
        </div>

        <div class="skeleton-score skeleton-anim"></div>
    </div>
</template>

<style scoped>
/* Базовые стили игрового контейнера, один в один как у тебя в тренажёре */
.skeleton-game {
    background-color: rgb(29, 29, 29);
    border: 1px solid rgba(25, 135, 84, 0.2); /* блеклый зелёный на время загрузки */
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    pointer-events: none; /* отключаем любые клики */
    user-select: none;
}

/* --- Панель конфигурации --- */
.training-config-skeleton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-bottom: 40px; /* Отступ до вопроса */
}
.skeleton-audio {
    display: flex;
    gap: 8px;
}
.skeleton-btn-round {
    width: 36px;
    height: 36px;
    border-radius: 6px;
}
.skeleton-select {
    width: 180px;
    height: 38px;
    border-radius: 6px;
}

/* --- Блок вопроса --- */
.skeleton-question-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0 24px;
    min-height: 84px; /* Тот самый min-height, который мы подбирали! */
    justify-content: center;
    width: 100%;
}
.skeleton-question-line {
    width: 50%;
    height: 24px;
    border-radius: 4px;
    margin-bottom: 8px;
}
.skeleton-question-translation {
    width: 30%;
    height: 16px;
    border-radius: 4px;
}

/* --- Форма ввода --- */
.skeleton-form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
}
.skeleton-input {
    width: 100%;
    max-width: 500px;
    height: 46px; /* Высота стандартного текстового инпута */
    border-radius: 6px;
}
.skeleton-form-buttons {
    display: flex;
    gap: 12px;
    justify-content: center;
    width: 100%;
}
.skeleton-btn-action {
    width: 120px;
    height: 38px;
    border-radius: 6px;
}

/* --- Счётчик очков --- */
.skeleton-score {
    width: 140px;
    height: 16px;
    border-radius: 4px;
    margin: 24px auto 0; /* Центрируем внизу */
}

/* --- АНИМАЦИЯ МЕРЦАНИЯ (ШИММЕР) --- */
.skeleton-anim {
    background: linear-gradient(90deg, #252525 25%, #333333 50%, #252525 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite ease-in-out;
}

@keyframes shimmer {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}

/* --- АДАПТИВ ПОД МОБИЛКИ --- */
@media (max-width: 600px) {
    .skeleton-game {
        padding: 18px;
    }
    .training-config-skeleton {
        margin-bottom: 30px;
    }
    .skeleton-question-container {
        min-height: 96px;
    }
}

@media (max-width: 340px) {
    .skeleton-game {
        padding: 12px;
        border-radius: 6px;
    }
    .training-config-skeleton {
        flex-direction: column;
        gap: 12px;
        align-items: center;
        height: auto;
    }
    .skeleton-select {
        width: 100%;
    }
    .skeleton-question-container {
        min-height: 90px;
    }
    .skeleton-question-line {
        width: 80%;
    }
    .skeleton-question-translation {
        width: 60%;
    }
}
</style>
