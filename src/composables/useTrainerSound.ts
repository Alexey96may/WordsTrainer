import { ref } from "vue";

export function useTrainerSound() {
    const soundLevel = ref(3);
    const sVolume = ref(1);
    const isSoundOn = ref(true);

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
        if (soundLevel.value === 0) {
            sVolume.value = 0;
            isSoundOn.value = false;
        } else {
            isSoundOn.value = true;
            sVolume.value =
                soundLevel.value === 1 ? 0.1 : soundLevel.value === 2 ? 0.5 : 1;
            if (audioHint) playSound(audioHint);
        }
    };

    const playSound = (audioNode: HTMLAudioElement | null) => {
        if (!isSoundOn.value || !audioNode) return;
        try {
            const clone = audioNode.cloneNode() as HTMLAudioElement;
            clone.volume = sVolume.value;
            // Check for jsdom environment, where play() might return undefined or be missing
            if (typeof clone.play === "function") {
                clone.play();
            }
        } catch (e) {
            console.warn(
                "Audio playback not supported in current environment",
                e,
            );
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
