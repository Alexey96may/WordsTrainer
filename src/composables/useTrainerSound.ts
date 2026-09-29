import { ref, watch } from "vue";
import { Capacitor } from "@capacitor/core";
import { NativeAudio } from "@capacitor-community/native-audio";
import { createCooldown } from "@/utils/cooldown";

const canPlaySound = createCooldown(200);

type SoundKey = "bad" | "great" | "hint";

const SOUND_FILES: Record<SoundKey, string> = {
    bad: "sound/effects/bad.wav",
    great: "sound/effects/great.wav",
    hint: "sound/effects/hint.wav",
};

export function useTrainerSound() {
    const isNative = Capacitor.getPlatform() !== "web";

    const savedLevel = localStorage.getItem("trainer_sound_level");
    const initialLevel = savedLevel ? parseInt(savedLevel, 10) : 3;

    const soundLevel = ref(initialLevel);
    const isSoundOn = ref(initialLevel > 0);

    const calculateVolume = (level: number) => {
        if (level === 1) return 0.1;
        if (level === 2) return 0.5;
        if (level === 3) return 1.0;
        return 0;
    };

    const sVolume = ref(calculateVolume(initialLevel));

    const webAudio: Record<SoundKey, HTMLAudioElement | null> = {
        bad: null,
        great: null,
        hint: null,
    };

    if (!isNative && typeof Audio !== "undefined") {
        for (const key of Object.keys(SOUND_FILES) as SoundKey[]) {
            webAudio[key] = new Audio(
                `${import.meta.env.BASE_URL}${SOUND_FILES[key]}`,
            );
        }
    }

    if (isNative) {
        (Object.keys(SOUND_FILES) as SoundKey[]).forEach((key) => {
            NativeAudio.preload({
                assetId: key,
                assetPath: SOUND_FILES[key].replace("sound/effects/", ""),
                audioChannelNum: 1,
                isUrl: false,
            }).catch((e) =>
                console.warn(`NativeAudio preload failed for ${key}`, e),
            );
        });
    }

    watch(soundLevel, (newLevel) => {
        localStorage.setItem("trainer_sound_level", newLevel.toString());
    });

    const toggleSound = () => {
        soundLevel.value = (soundLevel.value + 1) % 4;
        isSoundOn.value = soundLevel.value !== 0;
        sVolume.value = calculateVolume(soundLevel.value);

        if (isSoundOn.value) {
            playSound("hint");
        }
    };

    const playSound = (key: SoundKey, isKindAvailable: boolean = true) => {
        if (!isSoundOn.value || !isKindAvailable) return;
        if (!canPlaySound()) return;

        try {
            if (isNative) {
                NativeAudio.setVolume({
                    assetId: key,
                    volume: sVolume.value,
                }).then(() => {
                    NativeAudio.play({ assetId: key }).catch(() => {});
                });
                return;
            }

            const node = webAudio[key];
            if (!node) return;

            const clone = node.cloneNode() as HTMLAudioElement;
            clone.volume = sVolume.value;
            if (typeof clone.play === "function") {
                clone.play().catch(() => {});
            }
        } catch (e) {
            console.warn("Audio playback not supported", e);
        }
    };

    return {
        soundLevel,
        sVolume,
        isSoundOn,
        toggleSound,
        playSound,
    };
}
