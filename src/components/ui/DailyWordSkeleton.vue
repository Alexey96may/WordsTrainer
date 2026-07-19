<template>
    <div class="daily-word-container">
        <div class="daily-word-card skeleton-card">
            <!-- Header -->
            <div class="header__up">
                <div class="skeleton-box sound-icon-skel"></div>
                <div class="skeleton-box badge-skel"></div>
            </div>
            <div class="skeleton-box word-skel"></div>

            <!-- Translation -->
            <div class="skeleton-box transl-skel"></div>

            <!-- Divider -->
            <div class="divider-skel"></div>

            <!-- Details -->
            <div class="details-skel">
                <div class="skeleton-box morph-skel"></div>
                <div class="skeleton-box etim-skel"></div>
            </div>

            <!-- Example -->
            <div class="skeleton-box example-skel"></div>
        </div>
    </div>
</template>

<style scoped>
@keyframes pulse {
    0% {
        opacity: 0.4;
    }
    50% {
        opacity: 0.7;
    }
    100% {
        opacity: 0.4;
    }
}

.skeleton-box {
    background: #333;
    animation: pulse 1.5s infinite ease-in-out;
    border-radius: 4px;
}

.daily-word-container {
    margin-top: 40px;
    margin-bottom: 60px;
}

.daily-word-card {
    max-width: 500px;
    min-width: 50vw;
    margin: 0 auto;
    padding: 2rem 2rem 3rem;
    background-color: rgb(29, 29, 29);
    border: 1px solid #198754;
    border-radius: 8px;
}

.header__up {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-bottom: 1rem;
}

.sound-icon-skel {
    width: 22px;
    height: 22px;
}
.badge-skel {
    width: 40px;
    height: 20px;
}
.word-skel {
    height: 40px;
    margin: 0 auto 20px;
    width: 60%;
}
.transl-skel {
    height: 20px;
    margin: 0 auto 20px;
    width: 40%;
}
.divider-skel {
    height: 1px;
    background: #333;
    width: 60%;
    margin: 0 auto 20px;
}
.details-skel {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 20px;
}
.morph-skel {
    height: 16px;
    width: 80%;
}
.etim-skel {
    height: 16px;
    width: 90%;
}
.example-skel {
    height: 60px;
    width: 100%;
    margin-top: 20px;
}

@media (max-width: 600px) {
    .daily-word-card {
        width: 100%;
        padding: 1rem;
    }
    .word-skel {
        width: 80%;
    }
}
</style>
