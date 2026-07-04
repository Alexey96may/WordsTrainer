<template>
    <footer class="footer">
        <div class="links_footer">
            <a :href="telegramLink" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/img/telegram.png" alt="logo_telegram" />
            </a>
        </div>

        <div class="footer_info">
            <div>{{ copyrightText }}</div>
        </div>

        <div v-if="showCookieBlock" id="cookie_block">
            <p>
                Для улучшения работы сайта и его взаимодействия с пользователями
                мы используем файлы cookie. Продолжая работу с сайтом, Вы
                разрешаете использование cookie-файлов, описанное в
                <a
                    class="privat_policy"
                    href="#"
                    @click.prevent="$emit('navigate', 'privacy')"
                    >Политике конфиденциальности</a
                >
                нашего сайта. Вы всегда можете отключить файлы cookie в
                настройках Вашего браузера.
            </p>
            <button class="my_btn cookie_accept" @click="acceptCookies">
                Принять
            </button>
        </div>
    </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Настройки данных (заменяют WP the_field)
const telegramLink = ref("https://t.me/your_telegram_group"); // Подставь сюда свою ссылку на группу
const copyrightText = ref(
    `© 2022-${new Date().getFullYear()} αGreek. Все права защищены.`,
);

const showCookieBlock = ref(false);

// Проверяем, принимал ли пользователь куки ранее
onMounted(() => {
    const isCookieAccepted = localStorage.getItem("cookie_accepted");
    if (!isCookieAccepted) {
        showCookieBlock.value = true;
    }
});

// Логика кнопки «Принять»
const acceptCookies = () => {
    localStorage.setItem("cookie_accepted", "true");
    showCookieBlock.value = false;
};
</script>

<style scoped>
.footer {
    width: 100%;
    padding: 24px 12px;
    margin-top: 24px;
    background-image: linear-gradient(
        180deg,
        rgb(32, 32, 32) 25%,
        rgb(43, 43, 43) 75%
    );
    text-align: center;
    color: #d6d6d6;
    font-size: 90%;
}

.links_footer {
    margin-bottom: 12px;
}

.links_footer img {
    width: 32px;
    height: 32px;
    transition: transform 0.2s ease;
}

.links_footer img:hover {
    transform: scale(1.1);
}

.footer_info div {
    margin-bottom: 6px;
}

.footer_info a {
    color: #198754;
    text-decoration: none;
}

.footer_info a:hover {
    text-decoration: underline;
}

/* СТИЛИ ДЛЯ COOKIE BLOCK */
#cookie_block {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 600px;
    background-color: rgb(43, 43, 43);
    border: 1px solid #198754;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    z-index: 12000;
    text-align: left;
}

#cookie_block p {
    font-size: 13px;
    line-height: 1.4;
    color: #e0e0e0;
    margin: 0 0 12px 0;
}

.privat_policy {
    color: #198754;
    text-decoration: none;
}

.privat_policy:hover {
    text-decoration: underline;
}

.my_btn {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 0.25rem;
    background: none;
    color: rgb(235, 235, 235);
    border: 1px solid #198754;
    cursor: pointer;
    transition: background-color 0.2s;
}

.my_btn:hover {
    background-color: #198754;
}

.cookie_accept {
    float: right;
}
</style>
