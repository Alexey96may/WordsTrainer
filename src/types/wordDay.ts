export type wordLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface DailyWord {
    word: string;
    translation: string;

    morfology: string;
    etymology: string;

    synonims: string;
    antonims: string;

    level: wordLevel;

    example: string;
    exampleTransl: string;

    voicePath?: string;
}
