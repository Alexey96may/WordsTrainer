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
