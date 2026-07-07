// src/config/trainers.ts

export interface TrainerConfig {
    id: string; // Используем строковый ID (slug) как единый идентификатор
    name: string;
    description: string;
    icon: string;
}

export const TRAINERS_CONFIG: TrainerConfig[] = [
    {
        id: "train_gen_case",
        name: "Родительный падеж",
        description:
            "Отработка окончаний существительных в родительном падеже (Γενική).",
        icon: "📝",
    },
    {
        id: "train_accus_case",
        name: "Винительный падеж",
        description:
            "Практика употребления существительных и артиклей в винительном падеже (Αιτιατική).",
        icon: "🎯",
    },
    {
        id: "train_adjectives",
        name: "Прилагательные",
        description:
            "Согласование прилагательных с существительными в роде, числе и падеже.",
        icon: "🎨",
    },
    {
        id: "train_imperative",
        name: "Повелительное наклонение",
        description:
            "Формы приказов, просьб и запретов в греческом языке (Простая и длительная формы).",
        icon: "📢",
    },
    {
        id: "train_indicative",
        name: "Изъявительное наклонение",
        description:
            "Базовые формы и употребление глаголов в изъявительном наклонении.",
        icon: "🗣️",
    },
    {
        id: "train_irregular_aorist",
        name: "Неправильный аорист",
        description:
            "Тренажёр для запоминания особых форм прошедшего времени у неправильных глаголов.",
        icon: "⚡",
    },
    {
        id: "train_past_imperfect",
        name: "Прошедшее длительное (Имперфект)",
        description:
            "Отработка глагольных форм для выражения повторяющихся или длительных действий в прошлом.",
        icon: "⏳",
    },
    {
        id: "train_past_simple",
        name: "Прошедшее простое (Аорист)",
        description:
            "Практика образования стандартного прошедшего времени совершенного вида.",
        icon: "🎬",
    },
    {
        id: "train_pron",
        name: "Местоимения",
        description:
            "Личные, притяжательные, указательные и другие типы греческих местоимений.",
        icon: "👤",
    },
    {
        id: "train_verb_all_the_times",
        name: "Все глагольные времена",
        description:
            "Комплексный тренажёр для проверки знаний по всей глагольной системе.",
        icon: "🔄",
    },
    {
        id: "train_word_formation",
        name: "Словообразование",
        description:
            "Изучение приставок, суффиксов и логики построения однокоренных греческих слов.",
        icon: "🧱",
    },
];
