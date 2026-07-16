export default {
    meta: {
        title: "αGreek — WordsTrainer",
        description:
            "Una aplicación optimizada para el entrenamiento efectivo de vocabulario y gramática griega.",
        keywords:
            "vue, typescript, entrenador de idiomas, lengua griega, gramática, aprendizaje dinámico",
        author: "Aleksey",
        og_title:
            "WordsTrainer — Plataforma moderna para el aprendizaje de idiomas",
        og_description:
            "Una aplicación optimizada para el entrenamiento efectivo de vocabulario y gramática griega.",
        home: "αGreek. Página Principal",
        about: "αGreek. Sobre el Proyecto",
        trainer: "αGreek. Ejercicio: {name}",
    },
    header: {
        menuTitle: "Menú de ejercicios",
        links: {
            telegram: "Grupo en Telegram",
            quiz: "Quiz en Telegram",
            about: "Sobre el proyecto",
        },
        breadcrumbs: {
            home: "Inicio",
            trainers: "Ejercicios",
            about: "Sobre el proyecto",
            grammar: "Gramática",
            defaultTrainer: "Ejercicio",
        },
    },
    footer: {
        rights: "Todos los derechos reservados.",
    },
    about: {
        header: {
            subtitle: "Historia y relanzamiento",
            title: "Sobre el proyecto αGreek",
        },
        sections: {
            history: {
                title: "Cómo empezó todo",
                p1: "El sitio <strong>αGreek</strong> fue publicado por primera vez en <strong>2022</strong> como una plataforma educativa integral para todos aquellos profundamente inmersos en el estudio del griego moderno. Durante varios años, el proyecto ayudó a estructurar conocimientos, descifrar las complejidades de la gramática y perfeccionar habilidades.",
                p2: "Sin embargo, los tiempos cambian: debido al aumento drástico en el costo del alojamiento de alta calidad, así como a dificultades técnicas y restricciones relacionadas con las regulaciones regionales de registro y mantenimiento de dominios, en <strong>2026</strong> el sitio original αGreek, en su formato original a gran escala, dejó de existir oficialmente.",
            },
            rebirth: {
                title: "Un segundo aire: ¿Qué es esto ahora?",
                p1: "No podíamos permitir que los recursos interactivos acumulados desaparecieran sin dejar rastro. El núcleo más valioso, práctico y apreciado por los usuarios —<strong>nuestros ejercicios interactivos</strong>— fue cuidadosamente extraído, reelaborado y trasladado a esta plataforma dedicada y ligera.",
                quote: "Este relanzamiento local y autónomo es un homenaje al idioma y a aquellos que siguen aprendiéndolo con persistencia, a pesar de cualquier cambio externo.",
            },
            features: {
                title: "Lo que se ha conservado y está disponible:",
                items: [
                    {
                        title: "Autonomía y velocidad",
                        desc: "Nada de relleno innecesario, scripts pesados o cargas lentas. Solo código limpio, reactividad y enfoque en la práctica.",
                    },
                    {
                        title: "Todos los ejercicios básicos",
                        desc: "Desde la práctica de las terminaciones del genitivo (Γενική) hasta la comprobación completa de todos los tiempos verbales y las formas raras del aoristo.",
                    },
                    {
                        title: "Lógica intuitiva",
                        desc: "Cambio sencillo de categorías dentro de los entrenamientos, verificación instantánea de respuestas y acompañamiento de audio.",
                    },
                ],
            },
        },
        action: {
            text: "El lenguaje no es solo un conjunto de reglas estrictas, sino también una herramienta viva de pensamiento.",
            btn: "Ir a los ejercicios",
        },
    },
    home: {
        title: "Aprendizaje del idioma griego",
        subtitle: "¡Nuestros ejercicios interactivos!",
        startBtn: "Comenzar el entrenamiento",
    },
    trainer: {
        loading: "Cargando...",
        notFound: "Ejercicio no encontrado",
        defaultTitle: "Ejercicio",
        categories: {
            all: "Todos",
        },
        controls: {
            ariaMAin: "Gestión del estado del ejercicio",
            reload: "Reiniciar progreso actual",
            refresh: "Saltar / Cambiar pregunta",
            soundOn: "Volumen: nivel {level}",
            soundOff: "Sonido desactivado",
        },
        form: {
            placeholder: "Tu respuesta",
            hintBtn: "Pista",
            submitBtn: "Enviar",
            ariaLabel: "Introduce la respuesta en griego",
        },
        remark: {
            title: "Nota: ",
        },
        question: {
            error: "¡Piénsalo de nuevo!",
        },
        score: {
            remaining: "Preguntas restantes:",
        },
        modal: {
            noInfo: "Sin información",
        },
        states: {
            noGroup: "Sin grupo",
            gameOver: "¡Has completado el entrenamiento! Empieza de nuevo.",
            noQuestions: "No hay más preguntas en este modo.",
        },
    },
    trainers: {
        train_gen_case: {
            name: "Caso Genitivo",
            desc: "Práctica de las terminaciones de los sustantivos en caso genitivo (Γενική).",
        },
        train_accus_case: {
            name: "Caso Acusativo",
            desc: "Práctica del uso de sustantivos y artículos en caso acusativo (Αιτιατική).",
        },
        train_adjectives: {
            name: "Adjetivos",
            desc: "Concordancia de adjetivos con sustantivos en género, número y caso.",
        },
        train_imperative: {
            name: "Modo Imperativo",
            desc: "Formas de órdenes, peticiones y prohibiciones en griego (formas simple y continua).",
        },
        train_indicative: {
            name: "Presente del modo indicativo",
            desc: "Formas básicas y uso de los verbos en el modo indicativo.",
        },
        train_irregular_aorist: {
            name: "Aoristo irregular",
            desc: "Ejercicio para memorizar formas especiales del pasado en verbos irregulares.",
        },
        train_past_imperfect: {
            name: "Pasado continuo (Imperfecto)",
            desc: "Práctica de formas verbales para expresar acciones repetitivas o continuas en el pasado.",
        },
        train_past_simple: {
            name: "Pasado simple (Aoristo)",
            desc: "Práctica de la formación del pasado estándar de aspecto perfectivo.",
        },
        train_pron: {
            name: "Pronombres",
            desc: "Pronombres personales, posesivos, demostrativos y otros tipos de pronombres griegos.",
        },
        train_verb_all_the_times: {
            name: "Todos los tiempos verbales",
            desc: "Ejercicio complejo para comprobar conocimientos de todo el sistema verbal.",
        },
        train_word_formation: {
            name: "Formación de palabras",
            desc: "Estudio de prefijos, sufijos y la lógica de construcción de palabras griegas de la misma raíz.",
        },
    },
    dailyWord: {
        title: "Palabra del día:",
        translationLabel: "Traducción:",
        audioHint: "Haz clic en la palabra para escuchar",
    },
};
