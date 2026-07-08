import { describe, it, expect, beforeEach, vi } from "vitest";
import { useTrainerSound } from "./useTrainerSound";

class AudioMock {
    public volume = 1;

    public cloneNode(): AudioMock {
        return this;
    }

    public play(): Promise<void> {
        return Promise.resolve();
    }
}

if (typeof globalThis.Audio === "undefined") {
    globalThis.Audio = AudioMock as unknown as typeof Audio;
}

describe("useTrainerSound composable", () => {
    beforeEach(() => {
        vi.stubEnv("BASE_URL", "/");
    });

    it("should initialize with default values (level 3, volume 1, sound on)", () => {
        const { soundLevel, sVolume, isSoundOn } = useTrainerSound();
        expect(soundLevel.value).toBe(3);
        expect(sVolume.value).toBe(1);
        expect(isSoundOn.value).toBe(true);
    });

    it("should cycle through sound levels and update volume correctly", () => {
        const { soundLevel, sVolume, isSoundOn, toggleSound } =
            useTrainerSound();

        // 1st click: from 3 to 0 (mute)
        toggleSound();
        expect(soundLevel.value).toBe(0);
        expect(sVolume.value).toBe(0);
        expect(isSoundOn.value).toBe(false);

        // 2nd click: from 0 to 1 (low volume)
        toggleSound();
        expect(soundLevel.value).toBe(1);
        expect(sVolume.value).toBe(0.1);
        expect(isSoundOn.value).toBe(true);

        // 3rd click: from 1 to 2 (medium volume)
        toggleSound();
        expect(soundLevel.value).toBe(2);
        expect(sVolume.value).toBe(0.5);
        expect(isSoundOn.value).toBe(true);

        // 4th click: from 2 back to 3 (max volume)
        toggleSound();
        expect(soundLevel.value).toBe(3);
        expect(sVolume.value).toBe(1);
        expect(isSoundOn.value).toBe(true);
    });
});
