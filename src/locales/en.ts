export default {
    meta: {
        title: "αGreek — WordsTrainer",
        description:
            "An optimized application for effective Greek vocabulary and grammar training.",
        keywords:
            "vue, typescript, language trainer, Greek language, grammar, dynamic learning",
        author: "Aleksey",
        og_title: "WordsTrainer — Modern Language Learning Platform",
        og_description:
            "An optimized application for effective Greek vocabulary and grammar training.",
        home: "αGreek. Home Page",
        about: "αGreek. About Project",
        trainer: "αGreek. Trainer: {name}",
    },
    about: {
        header: {
            subtitle: "History and Relaunch",
            title: "About the αGreek Project",
        },
        sections: {
            history: {
                title: "How It All Began",
                p1: "The <strong>αGreek</strong> website was first published in <strong>2022</strong> as a comprehensive educational platform for those deeply immersed in learning Modern Greek.",
                p2: "However, in <strong>2026</strong>, the original site officially ceased to exist in its former large-scale format due to rising hosting costs and technical constraints.",
            },
            rebirth: {
                title: "A Second Wind",
                p1: "We could not let the accumulated resources disappear. Our <strong>interactive trainers</strong> have been migrated to this lightweight platform.",
                quote: "This autonomous relaunch is a tribute to the language and those who continue to master it.",
            },
            features: {
                title: "Key Features:",
                items: [
                    {
                        title: "Autonomy and Speed",
                        desc: "No unnecessary fluff, just clean code and focus.",
                    },
                    {
                        title: "All Core Trainers",
                        desc: "From genitive endings to complex verb forms.",
                    },
                    {
                        title: "Intuitive Logic",
                        desc: "Easy category switching and instant feedback.",
                    },
                ],
            },
        },
        action: {
            text: "Language is a living tool of thought.",
            btn: "Go to Trainers",
        },
    },
    home: {
        title: "Learning Modern Greek",
        subtitle: "Our Interactive Trainers:",
        startBtn: "Start Training",
    },
    header: {
        menuTitle: "Trainer Menu",
        links: {
            telegram: "Telegram Group",
            quiz: "Telegram Quiz",
            about: "About Project",
        },
        breadcrumbs: {
            home: "Home",
            trainers: "Trainers",
            about: "About",
            grammar: "Grammar",
            defaultTrainer: "Trainer",
        },
    },
    footer: { rights: "All rights reserved." },
    trainer: {
        loading: "Loading...",
        notFound: "Trainer not found",
        defaultTitle: "Trainer",
        categories: {
            all: "All",
        },
        controls: {
            ariaMAin: "Simulator state management",
            reload: "Reset progress",
            refresh: "Skip / Change question",
            soundOn: "Volume: level {level}",
            soundOff: "Sound off",
        },
        form: {
            placeholder: "Your answer",
            hintBtn: "Hint",
            submitBtn: "Enter",
            ariaLabel: "Enter your answer in Greek",
        },
        remark: {
            title: "Notice: ",
        },
        question: {
            error: "Think again!",
        },
        score: {
            remaining: "Questions remaining:",
        },
        modal: {
            noInfo: "No information",
        },
        states: {
            noGroup: "No group",
            gameOver: "You have completed the training! Start over.",
            noQuestions: "There are no more questions in this mode.",
        },
    },
    trainers: {
        train_gen_case: {
            name: "Genitive Case",
            desc: "Practicing noun endings in Genitive (Γενική).",
        },
        train_accus_case: {
            name: "Accusative Case",
            desc: "Practicing noun and article usage in Accusative (Αιτιατική).",
        },
        train_adjectives: {
            name: "Adjectives",
            desc: "Adjective agreement in gender, number, and case.",
        },
        train_imperative: {
            name: "Imperative Mood",
            desc: "Commands, requests, and prohibitions.",
        },
        train_indicative: {
            name: "Present Indicative",
            desc: "Basic verb forms in indicative.",
        },
        train_irregular_aorist: {
            name: "Irregular Aorist",
            desc: "Memorizing irregular past tense forms.",
        },
        train_past_imperfect: {
            name: "Imperfect Past",
            desc: "Repetitive or continuous past actions.",
        },
        train_past_simple: {
            name: "Simple Past (Aorist)",
            desc: "Standard past tense formation.",
        },
        train_pron: {
            name: "Pronouns",
            desc: "Personal, possessive, and demonstrative pronouns.",
        },
        train_verb_all_the_times: {
            name: "All Verb Tenses",
            desc: "Comprehensive verb system check.",
        },
        train_word_formation: {
            name: "Word Formation",
            desc: "Prefixes, suffixes, and word roots.",
        },
        train_complex_sentences: {
            name: "Complex Sentences & Links",
            desc: "Mastering conjunctions and linking structures to build complex sentences effectively.",
        },
    },
    dailyWord: {
        title: "Word of the day:",
        translationLabel: "Translation: ",
        synonims: "Synonyms: ",
        antonims: "Antonyms: ",
        audioHint: "Click the word to listen",
    },
};
