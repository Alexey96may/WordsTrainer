<template>
    <footer class="footer">
        <div class="container">
            <div class="links_footer">
                <a
                    :href="telegramLink"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="@/assets/img/telegram.png" alt="logo_telegram" />
                </a>
            </div>

            <div class="footer_info">
                <div>{{ copyrightText }}</div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const telegramLink = ref("https://t.me/aGreekRu");

const copyrightText = computed(() => {
    const year = new Date().getFullYear();
    return `© 2022-${year} αGreek. ${t("footer.rights")}`;
});
</script>

<style scoped>
.footer {
    width: 100%;
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
.footer .container {
    padding: 24px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}
.links_footer img {
    width: 32px;
    height: 32px;
    transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
}
.links_footer img:active {
    transform: scale(0.95);
}
@media (hover: hover) {
    .links_footer img:hover {
        transform: scale(1.1);
    }
}

@media (max-width: 600px) {
    .footer {
        font-size: 80%;
    }
}
@media (max-width: 340px) {
    .footer {
        font-size: 70%;
    }
    .links_footer img {
        width: 26px;
        height: 26px;
    }
}
</style>
