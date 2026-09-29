// services/wordNotifications.ts
import { Capacitor } from "@capacitor/core";
import { Preferences } from "@capacitor/preferences";
import { getWordForDate, loadWordList } from "@/composables/useDailyWord";
import type { DailyWord } from "@/types/wordDay";

const isNative = Capacitor.isNativePlatform();

const SCHEDULE_STATE_KEY = "wordNotificationsSchedule";
const DAYS_AHEAD = 7;

type ScheduleState = {
    date: string;
    locale: string;
};

function todayString(): string {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${y}-${m}-${day}`;
}

function capitalize(s: string): string {
    if (!s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function buildBody(word: DailyWord): string {
    const lines: string[] = [];

    lines.push(
        `${capitalize(word.word)}${word.level ? ` (${word.level})` : ""}`,
    );

    lines.push(word.translation ?? "");

    if (word.example) {
        lines.push("");
        lines.push(`📖 ${word.example}`);

        if (word.exampleTransl) {
            lines.push(`— ${word.exampleTransl}`);
        }
    }

    return lines.join("\n");
}

function buildShortBody(word: DailyWord): string {
    return `${capitalize(word.word)}${word.level ? ` (${word.level})` : ""}`;
}

export async function scheduleWordNotifications(
    locale: string,
    title: string,
): Promise<void> {
    if (!isNative) return;

    const today = todayString();

    const stored = await Preferences.get({
        key: SCHEDULE_STATE_KEY,
    });

    if (stored.value) {
        try {
            const state: ScheduleState = JSON.parse(stored.value);

            if (state.date === today && state.locale === locale) {
                return;
            }
        } catch {
            // Повреждённое значение — пересоздаём уведомления.
        }
    }

    const { LocalNotifications } = await import(
        "@capacitor/local-notifications"
    );

    const perm = await LocalNotifications.requestPermissions();

    if (perm.display !== "granted") {
        return;
    }

    const list = await loadWordList(locale);

    const notifications = [];

    for (let i = 1; i <= DAYS_AHEAD; i++) {
        const date = new Date();

        date.setDate(date.getDate() + i);
        date.setHours(9, 0, 0, 0);

        const word = getWordForDate(date, list);

        if (!word) continue;

        notifications.push({
            id: i,
            title,
            body: buildShortBody(word),
            largeBody: buildBody(word),
            smallIcon: "ic_stat_word",
            iconColor: "#198754",
            schedule: {
                at: date,
                allowWhileIdle: true,
            },
            extra: {
                word: word.word,
                index: i,
            },
        });
    }

    const pending = await LocalNotifications.getPending();

    if (pending.notifications.length > 0) {
        await LocalNotifications.cancel({
            notifications: pending.notifications,
        });
    }

    if (notifications.length > 0) {
        await LocalNotifications.schedule({
            notifications,
        });
    }

    await Preferences.set({
        key: SCHEDULE_STATE_KEY,
        value: JSON.stringify({
            date: today,
            locale,
        }),
    });
}
