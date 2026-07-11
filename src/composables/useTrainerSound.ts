import { ref, watch } from "vue";

export function useTrainerSound() {
    const savedLevel = localStorage.getItem("trainer_sound_level");
    const initialLevel = savedLevel ? parseInt(savedLevel, 10) : 3;

    const soundLevel = ref(initialLevel);
    const calculateVolume = (level: number) => {
        if (level === 1) return 0.1;
        if (level === 2) return 0.5;
        if (level === 3) return 1.0;
        return 0;
    };

    const sVolume = ref(calculateVolume(initialLevel));
    const isSoundOn = ref(initialLevel > 0);

    watch(soundLevel, (newLevel) => {
        localStorage.setItem("trainer_sound_level", newLevel.toString());
    });

    const audioBad =
        typeof Audio !== "undefined"
            ? new Audio(`${import.meta.env.BASE_URL}sound/effects/bad.wav`)
            : null;
    const audioGreat =
        typeof Audio !== "undefined"
            ? new Audio(`${import.meta.env.BASE_URL}sound/effects/great.wav`)
            : null;
    const audioHint =
        typeof Audio !== "undefined"
            ? new Audio(`${import.meta.env.BASE_URL}sound/effects/hint.wav`)
            : null;

    const toggleSound = () => {
        soundLevel.value = (soundLevel.value + 1) % 4;

        isSoundOn.value = soundLevel.value !== 0;
        sVolume.value = calculateVolume(soundLevel.value);

        if (isSoundOn.value && audioHint) {
            playSound(audioHint);
        }
    };

    const playSound = (audioNode: HTMLAudioElement | null) => {
        if (!isSoundOn.value || !audioNode) return;
        try {
            const clone = audioNode.cloneNode() as HTMLAudioElement;
            clone.volume = sVolume.value;
            if (typeof clone.play === "function") {
                clone.play();
            }
        } catch (e) {
            console.warn("Audio playback not supported", e);
        }
    };

    return {
        soundLevel,
        sVolume,
        isSoundOn,
        audioBad,
        audioGreat,
        audioHint,
        toggleSound,
        playSound,
    };
}
