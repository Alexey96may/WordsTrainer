<template>
    <div class="about-container">
        <div class="title-container fade-in-init">
            <span class="subtitle_page">История и перезапуск</span>
            <h1 class="title_page">О проекте αGreek</h1>
        </div>

        <div class="about-content">
            <section
                :ref="
                    (el) => {
                        if (el) revealSections.push(el as HTMLElement);
                    }
                "
                class="info-section scroll-reveal"
            >
                <h2>Как всё начиналось</h2>
                <p>
                    Сайт <strong>αGreek</strong> впервые был опубликован в
                    <strong>2022 году</strong> как полноценная образовательная
                    платформа для всех, кто глубоко погружён в изучение
                    новогреческого языка. На протяжении нескольких лет проект
                    помогал структурировать знания, разбираться в
                    хитросплетениях грамматики и оттачивать навыки.
                </p>
                <p>
                    Однако время диктует свои условия: из-за резко возросшей
                    стоимости качественного хостинга, а также технических
                    сложностей и ограничений, связанных с региональными
                    правилами регистрации и обслуживания доменов, в
                    <strong>2026 году</strong> оригинальный сайт αGreek в своём
                    прежнем масштабном формате официально прекратил
                    существование.
                </p>
            </section>

            <section
                :ref="
                    (el) => {
                        if (el) revealSections.push(el as HTMLElement);
                    }
                "
                class="info-section scroll-reveal"
            >
                <h2>Второе дыхание: Что это сейчас?</h2>
                <p>
                    Мы не могли позволить накопленным интерактивным наработкам
                    бесследно исчезнуть. Самое ценное, практичное и любимое
                    пользователями ядро сайта —
                    <strong>наши интерактивные тренажёры</strong>
                    — было аккуратно извлечено, переработано и перенесено на эту
                    выделенную, облегчённую платформу.
                </p>
                <blockquote>
                    Этот локальный автономный перезапуск — дань уважения языку и
                    тем, кто упорно продолжает его осваивать, несмотря на любые
                    внешние изменения.
                </blockquote>
            </section>

            <section
                :ref="
                    (el) => {
                        if (el) revealSections.push(el as HTMLElement);
                    }
                "
                class="info-section scroll-reveal"
            >
                <h2>Что сохранено и доступно:</h2>
                <div class="features-list">
                    <div class="feature-item">
                        <span class="feature-icon">🛡️</span>
                        <div>
                            <h3>Автономность и скорость</h3>
                            <p>
                                Никакой лишней «воды», тяжеловесных скриптов или
                                долгой загрузки. Только чистый код, реактивность
                                и фокус на практике.
                            </p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">📝</span>
                        <div>
                            <h3>Все базовые тренажёры</h3>
                            <p>
                                От отработки окончаний родительного падежа
                                (Γενική) до комплексной проверки всех глагольных
                                времён и редких форм аориста.
                            </p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🎯</span>
                        <div>
                            <h3>Интуитивная логика</h3>
                            <p>
                                Удобное переключение категорий внутри
                                тренировок, мгновенная проверка ответов и
                                звуковое сопровождение.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div
                :ref="
                    (el) => {
                        if (el) revealSections.push(el as HTMLElement);
                    }
                "
                class="action-zone scroll-reveal"
            >
                <p>
                    Язык — это не только свод строгих правил, но и живой
                    инструмент мысли.
                </p>
                <RouterLink to="/" class="back-to-trainers-btn">
                    Перейти к тренажёрам
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

const revealSections: HTMLElement[] = [];
let observer: IntersectionObserver | null = null;

onMounted(() => {
    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.15,
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer?.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealSections.forEach((section) => {
        if (section) observer?.observe(section);
    });
});

onUnmounted(() => {
    if (observer) observer.disconnect();
    revealSections.length = 0;
});
</script>

<style scoped>
.about-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 40px;
}

.scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition:
        opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1),
        transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    will-change: opacity, transform;
}

.scroll-reveal.reveal-visible {
    opacity: 1;
    transform: translateY(0);
}

.fade-in-init {
    animation: fadeInUpInit 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes fadeInUpInit {
    from {
        opacity: 0;
        transform: translateY(15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.title-container {
    text-align: center;
    margin: 30px 0 40px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #198754;
    border-image: linear-gradient(
            to right,
            rgba(33, 37, 41, 0),
            #198754 50%,
            rgba(33, 37, 41, 0)
        )
        1;
}

.subtitle_page {
    display: block;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #198754;
    font-weight: 600;
    margin-bottom: 6px;
}

.title_page {
    color: #ffffff;
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.about-content {
    background-color: rgb(29, 29, 29);
    border: 1px solid #198754;
    border-radius: 8px;
    padding: 32px;
}

.info-section {
    margin-bottom: 32px;
}

h2 {
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 16px;
    padding-left: 12px;
    line-height: 1.3;
    border-left: 3px solid #198754;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
}

p {
    color: #ccc;
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 0 16px 0;
}

p strong {
    color: #fff;
}

blockquote {
    margin: 24px 0;
    padding: 16px 20px;
    background-color: rgba(25, 135, 84, 0.08);
    border-left: 3px solid #198754;
    border-radius: 0 6px 6px 0;
    font-style: italic;
    color: #d6d6d6;
    line-height: 1.5;
}

.features-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 20px;
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    background-color: #1d1d1d;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 16px;
}

.feature-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    background-color: #242424;
    padding: 8px;
    border-radius: 6px;
    line-height: 1;
}

.feature-item h3 {
    color: #198754;
    margin: 0 0 6px 0;
    font-size: 1.1rem;
}

.feature-item p {
    font-size: 0.9rem;
    color: #aaa;
    margin: 0;
    line-height: 1.4;
}

.action-zone {
    text-align: center;
    margin-top: 40px;
    padding-top: 24px;
    border-top: 1px solid #333;
}

.action-zone p {
    font-style: italic;
    color: #8b8b8b;
    margin-bottom: 20px;
}

.back-to-trainers-btn {
    display: inline-block;
    background-color: #198754;
    color: white;
    text-decoration: none;
    padding: 12px 28px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 1rem;
    transition:
        background-color 0.2s,
        transform 0.2s;
    box-shadow: 0 4px 12px rgba(25, 135, 84, 0.2);
}

.back-to-trainers-btn:hover {
    background-color: #157347;
    transform: translateY(-2px);
}
.back-to-trainers-btn:active {
    background-color: #157347;
    transform: scale(0.98);
}

@media (hover: hover) {
    .back-to-trainers-btn:hover {
        background-color: #157347;
        transform: translateY(-2px);
    }
}

@media (max-width: 600px) {
    .about-content {
        padding: 20px;
    }
    .title_page {
        font-size: 1.7rem;
    }
    h2 {
        font-size: 1.2rem;
    }
    p {
        font-size: 0.9rem;
    }
    .feature-item {
        padding: 12px;
        gap: 12px;
    }
    .back-to-trainers-btn {
        width: 100%;
        box-sizing: border-box;
    }
}
</style>
