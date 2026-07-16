export default {
    meta: {
        title: "αGreek — WordsTrainer",
        description:
            "Application optimisée pour l'entraînement efficace du vocabulaire et de la grammaire du grec.",
        keywords:
            "vue, typescript, entraîneur de langue, langue grecque, grammaire, apprentissage dynamique",
        author: "Aleksey",
        og_title: "WordsTrainer — Plateforme moderne pour apprendre le grec",
        og_description:
            "Application optimisée pour l'entraînement efficace du vocabulaire et de la grammaire du grec.",
        home: "αGreek. Page d'accueil",
        about: "αGreek. À propos du projet",
        trainer: "αGreek. Entraîneur : {name}",
    },
    header: {
        menuTitle: "Menu des entraîneurs",
        links: {
            telegram: "Groupe Telegram",
            quiz: "Quiz sur Telegram",
            about: "À propos du projet",
        },
        breadcrumbs: {
            home: "Accueil",
            trainers: "Entraîneurs",
            about: "À propos",
            grammar: "Grammaire",
            defaultTrainer: "Entraîneur",
        },
    },
    footer: {
        rights: "Tous droits réservés.",
    },
    about: {
        header: {
            subtitle: "Histoire et relance",
            title: "À propos du projet αGreek",
        },
        sections: {
            history: {
                title: "Comment tout a commencé",
                p1: "Le site <strong>αGreek</strong> a été publié pour la première fois en <strong>2022</strong> en tant que plateforme éducative complète pour tous ceux qui sont profondément immergés dans l'apprentissage du grec moderne. Pendant plusieurs années, le projet a aidé à structurer les connaissances, à comprendre les subtilités de la grammaire et à affiner les compétences.",
                p2: "Cependant, le temps impose ses conditions : en raison de l'augmentation soudaine du coût de l'hébergement de qualité, ainsi que des difficultés techniques et des restrictions liées aux règles régionales d'enregistrement et de maintenance des domaines, en <strong>2026</strong>, le site αGreek original a officiellement cessé d'exister dans son format à grande échelle.",
            },
            rebirth: {
                title: "Un second souffle : Qu'est-ce que c'est maintenant ?",
                p1: "Nous ne pouvions pas laisser les outils interactifs accumulés disparaître sans laisser de trace. Le cœur du site, le plus précieux, le plus pratique et le plus apprécié des utilisateurs — <strong>nos entraîneurs interactifs</strong> — a été soigneusement extrait, retravaillé et transféré sur cette plateforme dédiée et allégée.",
                quote: "Cette relance autonome locale est un hommage à la langue et à ceux qui continuent avec persévérance à l'apprendre, malgré tout changement externe.",
            },
            features: {
                title: "Ce qui est conservé et disponible :",
                items: [
                    {
                        title: "Autonomie et vitesse",
                        desc: "Pas de superflu, de scripts lourds ou de longs chargements. Juste du code propre, de la réactivité et une concentration sur la pratique.",
                    },
                    {
                        title: "Tous les entraîneurs de base",
                        desc: "De la pratique des terminaisons du génitif (Γενική) à la vérification complète de tous les temps verbaux et des formes rares de l'aoriste.",
                    },
                    {
                        title: "Logique intuitive",
                        desc: "Changement facile de catégories au sein des exercices, vérification instantanée des réponses et accompagnement sonore.",
                    },
                ],
            },
        },
        action: {
            text: "La langue n'est pas seulement un ensemble de règles strictes, mais un outil vivant de la pensée.",
            btn: "Aller aux entraîneurs",
        },
    },
    home: {
        title: "Apprentissage de la langue grecque",
        subtitle: "Nos entraîneurs interactifs !",
        startBtn: "Commencer l'entraînement",
    },
    trainer: {
        loading: "Chargement...",
        notFound: "Entraîneur introuvable",
        defaultTitle: "Entraîneur",
        categories: {
            all: "Tous",
        },
        controls: {
            ariaMAin: "Contrôle de l'état de l'entraîneur",
            reload: "Réinitialiser la progression",
            refresh: "Passer / Changer la question",
            soundOn: "Volume : niveau {level}",
            soundOff: "Son désactivé",
        },
        form: {
            placeholder: "Votre réponse",
            hintBtn: "Piste",
            submitBtn: "Entrer",
            ariaLabel: "Entrez la réponse en grec",
        },
        remark: {
            title: "Note : ",
        },
        question: {
            error: "Réfléchissez encore !",
        },
        score: {
            remaining: "Questions restantes :",
        },
        modal: {
            noInfo: "Aucune information",
        },
        states: {
            noGroup: "Sans groupe",
            gameOver: "Vous avez terminé l'entraînement ! Recommencez.",
            noQuestions: "Il n'y a plus de questions dans ce mode.",
        },
    },
    trainers: {
        train_gen_case: {
            name: "Cas génitif",
            desc: "Pratique des terminaisons des noms au génitif (Γενική).",
        },
        train_accus_case: {
            name: "Cas accusatif",
            desc: "Pratique de l'usage des noms et articles à l'accusatif (Αιτιατική).",
        },
        train_adjectives: {
            name: "Adjectifs",
            desc: "Accord des adjectifs avec les noms en genre, nombre et cas.",
        },
        train_imperative: {
            name: "Impératif",
            desc: "Formes d'ordres, de demandes et d'interdictions en grec (formes simple et continue).",
        },
        train_indicative: {
            name: "Présent de l'indicatif",
            desc: "Formes de base et utilisation des verbes à l'indicatif.",
        },
        train_irregular_aorist: {
            name: "Aoriste irrégulier",
            desc: "Entraîneur pour mémoriser les formes particulières du passé des verbes irréguliers.",
        },
        train_past_imperfect: {
            name: "Imparfait",
            desc: "Pratique des formes verbales pour exprimer des actions répétées ou prolongées dans le passé.",
        },
        train_past_simple: {
            name: "Aoriste (Passé simple)",
            desc: "Pratique de la formation du passé standard accompli.",
        },
        train_pron: {
            name: "Pronoms",
            desc: "Pronoms personnels, possessifs, démonstratifs et autres types de pronoms grecs.",
        },
        train_verb_all_the_times: {
            name: "Tous les temps verbaux",
            desc: "Entraîneur complexe pour tester les connaissances sur tout le système verbal.",
        },
        train_word_formation: {
            name: "Formation des mots",
            desc: "Étude des préfixes, suffixes et de la logique de construction des mots grecs de même racine.",
        },
    },
    dailyWord: {
        title: "Mot du jour :",
        translationLabel: "Traduction :",
        audioHint: "Cliquez sur le mot pour écouter",
    },
};
