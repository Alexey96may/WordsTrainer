/**
 * Shuffles an array using the Fisher-Yates shuffle algorithm (returns a new array)
 */
export function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = 0; i < arr.length; i++) {
        const r = Math.floor(Math.random() * (arr.length - i)) + i;
        const temp = arr[r]!;
        arr[r] = arr[i]!;
        arr[i] = temp;
    }
    return arr;
}

/**
 * Capitalizes the first letter of the string (even if preceded by "...").
 * Preserves the case of the remaining characters (to avoid breaking proper nouns).
 */
export function capitalize(str: string): string {
    if (!str) return "";
    const trimmed = str.trim();

    return trimmed.replace(/^(\.\.\.\s*)?(\p{L})/u, (_, dots = "", letter) => {
        return dots + letter.toUpperCase();
    });
}
