/**
 * Creates an isolated cooldown counter.
 * Returns true if the interval has elapsed, and false if the call is too frequent.
 */
export function createCooldown(cooldownMs = 120) {
    let lastPlayedTime = 0;

    return (): boolean => {
        const now = Date.now();
        if (now - lastPlayedTime < cooldownMs) {
            return false;
        }
        lastPlayedTime = now;
        return true;
    };
}
