export interface DailyWord {
    word: string;
    base: string;
    groups: {
        morfology: string;
        etymology: string;
        aplication?: string;
        synonims?: string;
    };
    qws: string[];
    transls: string[];
    translation: string;
    kind: string;
    unicTransl: string;
    notice: string;
    voicePath?: string;
}
