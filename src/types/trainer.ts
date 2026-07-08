export interface RawTrainerItem {
    word: string;
    base?: string;
    kind?: string;
    qws: string[];
    transls: string[];
    notice?: string;
    [key: string]: unknown;
}

export interface TrainerItem extends RawTrainerItem {
    base: string;
    kind: string;
}

export interface LocalTitleItem {
    title: string;
    place: string;
    [key: string]: unknown;
}
