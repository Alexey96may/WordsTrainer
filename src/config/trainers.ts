import {
    FileText,
    Target,
    Palette,
    Megaphone,
    MessageSquare,
    Zap,
    Clock,
    Film,
    User,
    RefreshCw,
    Box,
} from "lucide-vue-next";
import type { Component } from "vue";

export interface TrainerConfig {
    id: string;
    icon: Component;
}

export const TRAINERS_CONFIG: TrainerConfig[] = [
    { id: "train_gen_case", icon: FileText },
    { id: "train_accus_case", icon: Target },
    { id: "train_adjectives", icon: Palette },
    { id: "train_imperative", icon: Megaphone },
    { id: "train_indicative", icon: MessageSquare },
    { id: "train_irregular_aorist", icon: Zap },
    { id: "train_past_imperfect", icon: Clock },
    { id: "train_past_simple", icon: Film },
    { id: "train_pron", icon: User },
    { id: "train_verb_all_the_times", icon: RefreshCw },
    { id: "train_word_formation", icon: Box },
];
