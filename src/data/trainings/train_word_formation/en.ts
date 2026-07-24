export const tableTitlesArr = [
    { title: "Derived word", place: "base" },
    { title: "Word", place: "word" },
    { title: "Derived translation", place: "unicTransl" },
    { title: "Translation", place: "translation" },
];

export const trainingName = "wordFormation";
export const paramGlobal = ["firstTransl", "withoutKind"];

export const globalArray = [
    {
        word: "ελέγχω",
        base: "έλεγχος",
        groups: {
            morfology:
                '<em>ελέγχω </em>→ έλεγχ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ω</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἐλέγχω</span> – to shame, examine, test < <span style="color:#7a9473">ἔλεγχος</span> – shame, refutation).',
        },
        qws: ["to check"],
        transls: ["From the word Έλεγχος — check"],
        translation: "to check",
        kind: "Verbs in -ω from nouns",
        unicTransl: "check",
        notice: "",
    },
    {
        word: "πυροβολώ",
        base: "πυροβόλο",
        groups: {
            morfology:
                '<em>πυροβολώ </em>→ πυροβόλ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">πυροβόλο</span> – firearm, cannon.',
        },
        qws: ["to shoot"],
        transls: ["From the word Πυροβόλο — firearm, cannon"],
        translation: "to shoot",
        kind: "Verbs in -ω from nouns",
        unicTransl: "firearm, cannon",
        notice: "",
    },
    {
        word: "πολεμώ",
        base: "πόλεμος",
        groups: {
            morfology:
                '<em>πολεμώ </em>→ πόλεμ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ω</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">πολεμῶ</span>, <span style="color:#7a9473">πολεμέω</span> – to wage war < <span style="color:#7a9473">πόλεμος</span> – war).',
        },
        qws: ["to wage war"],
        transls: ["From the word Πόλεμος — war"],
        translation: "to wage war",
        kind: "Verbs in -ω from nouns",
        unicTransl: "war",
        notice: "",
    },
    {
        word: "αγοράζω",
        base: "αγορά",
        groups: {
            morfology:
                '<em>αγοράζω </em>→ αγορ<span style="color: #b87333">ά</span> +<span style="color: #b87333"> -άζω</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">ἀγορά</span> – assembly, goods.',
        },
        qws: ["to buy"],
        transls: ["From the word Αγορά — purchase‑item"],
        translation: "to buy",
        kind: "Verbs in -άζω, -ιάζω from nouns",
        unicTransl: "purchase‑item",
        notice: "",
    },
    {
        word: "δηλητηριάζω",
        base: "δηλητήριο",
        groups: {
            morfology:
                '<em>δηλητηριάζω </em>→ δηλητήρ<span style="color: #b87333">ιο</span> +<span style="color: #b87333"> -ιάζω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">δηλητήριο</span> – poison < Ancient Greek (<span style="color:#7a9473">δηλητήρῐον</span> < <span style="color:#7a9473">δήλησις</span> < <span style="color:#7a9473">δηλέομαι</span>).',
        },
        qws: ["to poison"],
        transls: ["From the word Δηλητήριο — poison"],
        translation: "to poison",
        kind: "Verbs in -άζω, -ιάζω from nouns",
        unicTransl: "poison",
        notice: "",
    },
    {
        word: "δοξάζω",
        base: "δόξα",
        groups: {
            morfology:
                '<em>δοξάζω </em>→ δόξ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -άζω</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">δόξα</span> – glory.',
        },
        qws: ["to glorify"],
        transls: ["From the word Δόξα — glory"],
        translation: "to glorify",
        kind: "Verbs in -άζω, -ιάζω from nouns",
        unicTransl: "glory",
        notice: "",
    },
    {
        word: "εμβολιάζω",
        base: "εμβόλιο",
        groups: {
            morfology:
                '<em>εμβολιάζω </em>→ <span style="color: #b87333">εμ-</span> + βόλι<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -άζω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">εμβόλιο</span> – vaccine < Koine Greek <span style="color:#7a9473">ἐμβόλιον</span> – dart, javelin < Ancient Greek (<span style="color:#7a9473">ἔμβολον</span> – wedge; ship’s beak < <span style="color:#7a9473">ἐμβάλλω</span> – to throw in, insert < <span style="color:#7a9473">ἐμ-</span> (<span style="color:#7a9473">ἐν-</span> / <span style="color:#7a9473">ἐγ-</span>) (in, into) + <span style="color:#7a9473">βάλλω</span> – to throw, strike)',
        },
        qws: ["to vaccinate"],
        transls: ["From the word Εμβόλιο — vaccine"],
        translation: "to vaccinate",
        kind: "Verbs in -άζω, -ιάζω from nouns",
        unicTransl: "vaccine",
        notice: "",
    },
    {
        word: "επισκευάζω",
        base: "επισκευή",
        groups: {
            morfology:
                '<em>επισκευάζω </em>→ <span style="color: #b87333">έπι-</span> + σκευ<span style="color: #b87333">ή</span> + <span style="color: #b87333">-άζω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">επι-</span> (denotes succession, accompaniment; position: on) + <span style="color:#7a9473">σκευάζω</span> – to make < Ancient Greek (<span style="color:#7a9473">σκευάζω</span> < <span style="color:#7a9473">σκεῦος</span> – vessel or <span style="color:#7a9473">σκευή</span> – equipment).',
        },
        qws: ["to repair"],
        transls: ["From the word Επισκευή — repair"],
        translation: "to repair",
        kind: "Verbs in -άζω, -ιάζω from nouns",
        unicTransl: "repair",
        notice: "",
    },
    {
        word: "κατσουφιάζω",
        base: "κατσούφης",
        groups: {
            morfology:
                '<em>κοπιάζω </em>→ κατσούφ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -ιάζω</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">κατηφιάω</span> / <span style="color:#7a9473">κατηφιῶ</span> – to be downcast < <span style="color:#7a9473">κατηφής</span> – gloomy).',
        },
        qws: ["to become sullen"],
        transls: ["From the word Κατσούφης — gloomy"],
        translation: "to become sullen",
        kind: "Verbs in -άζω, -ιάζω from nouns",
        unicTransl: "gloomy",
        notice: "",
    },
    {
        word: "κοπιάζω",
        base: "κόπος",
        groups: {
            morfology:
                '<em>κοπιάζω </em>→ κόπ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ιάζω</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">κόπος</span> – labour < <span style="color:#7a9473">κόπτω</span> – to push, strike).',
        },
        qws: ["to labour, strive, exert oneself"],
        transls: ["From the word Κόπος — labour, effort"],
        translation: "to labour, strive, exert oneself",
        kind: "Verbs in -άζω, -ιάζω from nouns",
        unicTransl: "labour, effort",
        notice: "",
    },
    {
        word: "νυστάζω",
        base: "νύστα",
        groups: {
            morfology:
                '<em>νυστάζω </em>→ νύστ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -άζω</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">νυστάζω</span> < <span style="color:#7a9473">νευστάζω</span> – to nod < <span style="color:#7a9473">νεύω</span> – to shake).',
        },
        qws: ["to be sleepy"],
        transls: ["From the word Νύστα — drowsiness"],
        translation: "to be sleepy",
        kind: "Verbs in -άζω, -ιάζω from nouns",
        unicTransl: "drowsiness",
        notice: "",
    },
    {
        word: "σκουριάζω",
        base: "σκουριά",
        groups: {
            morfology:
                '<em>σκουριάζω </em>→ σκουρ<span style="color: #b87333">ιά</span> +<span style="color: #b87333"> -ιάζω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">σκουριά</span> < Ancient Greek (<span style="color:#7a9473">σκωρία</span> – rust < <span style="color:#7a9473">σκῶρ</span> – dung, excrement).',
        },
        qws: ["to rust"],
        transls: ["From the word Σκουριά — rust"],
        translation: "to rust",
        kind: "Verbs in -άζω, -ιάζω from nouns",
        unicTransl: "rust",
        notice: "",
    },
    {
        word: "θεμελιώνω",
        base: "θεμέλιο",
        groups: {
            morfology:
                '<em>θεμελιώνω </em>→ θεμέλι<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ώνω</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">θεμελιῶ</span>.',
        },
        qws: ["to found, establish"],
        transls: ["From the word Θεμέλιο — foundation, base"],
        translation: "to found, establish",
        kind: "Verbs in -ώνω from nouns and adverbs",
        unicTransl: "foundation, base",
        notice: "",
    },
    {
        word: "καρφώνω",
        base: "καρφί",
        groups: {
            morfology:
                '<em>καρφώνω </em>→ καρφ<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -ώνω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">καρφί</span> – nail < Medieval Greek <span style="color:#7a9473">καρφίον</span>, <span style="color:#7a9473">καρφίν</span> – sucker < Ancient Greek <span style="color:#7a9473">κάρφος</span> – stick, dry chip.',
        },
        qws: ["to nail, drive a nail"],
        transls: ["From the word Καρφί — nail"],
        translation: "to nail, drive a nail",
        kind: "Verbs in -ώνω from nouns and adverbs",
        unicTransl: "nail",
        notice: "",
    },
    {
        word: "κλειδώνω",
        base: "κλειδί",
        groups: {
            morfology:
                '<em>κλειδώνω </em>→ κλειδ<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -ώνω</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">κλείς</span> – bolt, key.',
        },
        qws: ["to lock"],
        transls: ["From the word Κλειδί — key"],
        translation: "to lock",
        kind: "Verbs in -ώνω from nouns and adverbs",
        unicTransl: "key",
        notice: "",
    },
    {
        word: "φορτώνω",
        base: "φορτίο",
        groups: {
            morfology:
                '<em>φορτώνω </em>→ φορτ<span style="color: #b87333">ίο</span> +<span style="color: #b87333"> -ώνω</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">φορτώνω</span> < Ancient Greek (<span style="color:#7a9473">φόρτος</span> – load, burden < <span style="color:#7a9473">φέρω</span> – to carry).',
        },
        qws: ["to load"],
        transls: ["From the word Φορτίο — load"],
        translation: "to load",
        kind: "Verbs in -ώνω from nouns and adverbs",
        unicTransl: "load",
        notice: "",
    },
    {
        word: "χαμηλώνω",
        base: "χαμηλά",
        groups: {
            morfology:
                '<em>χαμηλώνω </em>→ χαμηλ<span style="color: #b87333">ά</span> +<span style="color: #b87333"> -ώνω</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">χαμηλά</span> – low < <span style="color:#7a9473">χαμηλός</span> – low, insignificant) < Ancient Greek <span style="color:#7a9473">χαμαί</span> – on the ground, to the ground.',
        },
        qws: ["to lower, go down"],
        transls: ["From the word Χαμηλά — low"],
        translation: "to lower, go down",
        kind: "Verbs in -ώνω from nouns and adverbs",
        unicTransl: "low",
        notice: "",
    },
    {
        word: "ακριβαίνω",
        base: "ακριβός",
        groups: {
            morfology:
                '<em>ακριβαίνω </em>→ ακριβ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -αίνω</span>',
            etymology:
                '<br>From Koine Greek <span style="color:#7a9473">ἀκριβός</span> – valuable < Ancient Greek (<span style="color:#7a9473">ἀκριβής</span> – valuable < <span style="color:#7a9473">ἄκρος</span> – sharp, best, extreme).',
        },
        qws: ["to become expensive, rise in price"],
        transls: ["From the word Ακριβός — expensive"],
        translation: "to become expensive, rise in price",
        kind: "Verbs in -αίνω from adjectives",
        unicTransl: "expensive",
        notice: "",
    },
    {
        word: "ζεσταίνω",
        base: "ζεστός",
        groups: {
            morfology:
                '<em>ζεσταίνω </em>→ ζεστ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -αίνω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ζεστός</span> – hot < Ancient Greek <span style="color:#7a9473">ζέω</span> – to boil, seethe.',
        },
        qws: ["to heat, warm up"],
        transls: ["From the word Ζεστός — hot"],
        translation: "to heat, warm up",
        kind: "Verbs in -αίνω from adjectives",
        unicTransl: "hot",
        notice: "",
    },
    {
        word: "φαρδαίνω",
        base: "φαρδύς",
        groups: {
            morfology:
                '<em>φαρδαίνω </em>→ φαρδ<span style="color: #b87333">ύς</span> +<span style="color: #b87333"> -αίνω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">φαρδύς</span> – wide < Medieval Greek <span style="color:#7a9473">φαρδύς</span> < Koine Greek <span style="color:#7a9473">εὺφραδής</span> < Ancient Greek <span style="color:#7a9473">φράζω</span> – to explain, expound.',
        },
        qws: ["to widen, expand"],
        transls: ["From the word Φαρδύς — wide"],
        translation: "to widen, expand",
        kind: "Verbs in -αίνω from adjectives",
        unicTransl: "wide",
        notice: "",
    },
    {
        word: "αντικρίζω",
        base: "αντίκρυ",
        groups: {
            morfology:
                '<em>αντικρίζω </em>→ αντίκρ<span style="color: #b87333">υ</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">αντίκρυ</span> < Medieval Greek <span style="color:#7a9473">ἀντίκρυ</span> < Ancient Greek <span style="color:#7a9473">ἀντικρύ</span>.',
        },
        qws: ["to stand opposite"],
        transls: ["From the word Αντίκρυ — opposite side"],
        translation: "to stand opposite",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "opposite side",
        notice: "",
    },
    {
        word: "αρχίζω",
        base: "αρχή",
        groups: {
            morfology:
                '<em>αρχίζω </em>→ αρχ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">ἀρχίζω</span> < Ancient Greek <span style="color:#7a9473">ἀρχή</span> – beginning, foundation.',
        },
        qws: ["to begin"],
        transls: ["From the word Αρχή — beginning"],
        translation: "to begin",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "beginning",
        notice: "",
    },
    {
        word: "αφρίζω",
        base: "αφρός",
        groups: {
            morfology:
                '<em>αφρίζω </em>→ αφρ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">ἀφρίζω</span> – to foam < <span style="color:#7a9473">ἀφρός</span> – foam.',
        },
        qws: ["to foam"],
        transls: ["From the word Αφρός — foam"],
        translation: "to foam",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "foam",
        notice: "",
    },
    {
        word: "ζωγραφίζω",
        base: "ζωγράφος",
        groups: {
            morfology:
                '<em>ζωγραφίζω </em>→ ζωγράφ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">ζωγραφίζω</span> – to draw < Ancient Greek <span style="color:#7a9473">ζωγραφέω</span>, <span style="color:#7a9473">ζωγραφῶ</span>.',
        },
        qws: ["to draw, paint"],
        transls: ["From the word Ζωγράφος — painter"],
        translation: "to draw, paint",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "painter",
        notice: "",
    },
    {
        word: "κερδίζω",
        base: "κέρδος",
        groups: {
            morfology:
                '<em>κερδίζω </em>→ κέρδ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">κερδίζω</span> < Medieval Greek <span style="color:#7a9473">κέρδος</span> < Ancient Greek <span style="color:#7a9473">κερδαίνω</span> – to profit.',
        },
        qws: ["to win, earn"],
        transls: ["From the word Κέρδος — profit, gain"],
        translation: "to win, earn",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "profit, gain",
        notice: "",
    },
    {
        word: "καλημερίζω",
        base: "καλημέρα",
        groups: {
            morfology:
                '<em>καλημερίζω </em>→ καλημέρ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">καλημερίζω</span> < <span style="color:#7a9473">καλημέρα</span> – good day < <span style="color:#7a9473">καλήν</span> <span style="color:#7a9473">ἡμέραν</span>).',
        },
        qws: ["to greet, say good morning"],
        transls: ["From the word Καλημέρα — good day"],
        translation: "to greet, say good morning",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "good day",
        notice: "",
    },
    {
        word: "καπνίζω",
        base: "καπνός",
        groups: {
            morfology:
                '<em>καπνίζω </em>→ καπν<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">καπνός</span> – smoke.',
        },
        qws: ["to smoke"],
        transls: ["From the word Καπνός — smoke"],
        translation: "to smoke",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "smoke",
        notice: "",
    },
    {
        word: "κλαφουρίζω",
        base: "κλαίω, έκλαψα",
        groups: {
            morfology:
                '<em>κλαφουρίζω </em>→ κλαψούρ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">κλαφουρίζω</span> < <span style="color:#7a9473">κλαψούρα</span> – whining < <span style="color:#7a9473">κλάψα</span> – whining) < Ancient Greek <span style="color:#7a9473">κλαίω</span>.',
        },
        qws: ["to whimper at every occasion"],
        transls: ["From the word Κλαίω, έκλαψα — to cry, cried"],
        translation: "to whimper at every occasion",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "to cry",
        notice: "",
    },
    {
        word: "κουδουνίζω",
        base: "κουδούνι",
        groups: {
            morfology:
                '<em>κουδουνίζω </em>→ κουδούν<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">κωδωνίζω</span> < Ancient Greek <span style="color:#7a9473">κώδων</span> – bell.',
        },
        qws: ["to ring, jingle"],
        transls: ["From the word Κουδούνι — bell"],
        translation: "to ring, jingle",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "bell",
        notice: "",
    },
    {
        word: "μαυρίζω",
        base: "μαύρο",
        groups: {
            morfology:
                '<em>μαυρίζω </em>→ μαύρ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">μαυρίζω</span> < Ancient Greek <span style="color:#7a9473">μαῦρος</span> – black, dark-skinned.',
        },
        qws: ["to tan"],
        transls: ["From the word Μαύρο — black"],
        translation: "to tan",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "black",
        notice: "",
    },
    {
        word: "παραμερίζω",
        base: "παράμερα",
        groups: {
            morfology:
                '<em>παραμερίζω </em>→ παραμέρ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">παραμερίζω</span> < <span style="color:#7a9473">παραμέρα</span> – aside < <span style="color:#7a9473">παραμέρος</span> – being aside < <span style="color:#7a9473">πάρα</span> <span style="color:#7a9473">μέρος</span> – to the side)',
        },
        qws: ["to move aside, step aside"],
        transls: ["From the word Παράμερα — aside"],
        translation: "to move aside, step aside",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "aside",
        notice: "",
    },
    {
        word: "πλημμυρίζω",
        base: "πλημμύρα",
        groups: {
            morfology:
                '<em>πλημμυρίζω </em>→ πλημμύρ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">πλημμυρίζω</span> < Ancient Greek (<span style="color:#7a9473">πλημυρέω</span>, <span style="color:#7a9473">πλημυρῶ</span> < <span style="color:#7a9473">πλημύρα</span> – flood).',
        },
        qws: ["to flood"],
        transls: ["From the word Πλημμύρα — flood"],
        translation: "to flood",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "flood",
        notice: "",
    },
    {
        word: "πριονίζω",
        base: "πριόνι",
        groups: {
            morfology:
                '<em>πριονίζω </em>→ πριόν<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">πριονίζω</span> < Ancient Greek <span style="color:#7a9473">πρίων</span> – saw.',
        },
        qws: ["to saw"],
        transls: ["From the word Πριόνι — saw"],
        translation: "to saw",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "saw",
        notice: "",
    },
    {
        word: "προγραμματίζω",
        base: "πρόγραμμα",
        groups: {
            morfology:
                '<em>προγραμματίζω </em>→ πρόγραμμα<span style="color: #b87333">τ</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From French <span style="color:#7a9473">programmer</span> or English <span style="color:#7a9473">program</span>.',
        },
        qws: ["to program"],
        transls: ["From the word Πρόγραμμα — program"],
        translation: "to program",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "program",
        notice: "",
    },
    {
        word: "σκανδαλίζω",
        base: "σκάνδαλο",
        groups: {
            morfology:
                '<em>σκανδαλίζω </em>→ σκάνδαλ<span style="color: #b87333">ον</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">σκάνδαλον</span> – scandal; the bait-stick in a trap < Ancient Greek <span style="color:#7a9473">σκάνδαλον</span>.',
        },
        qws: ["to scandalise, make a scene"],
        transls: ["From the word Σκάνδαλο — scandal"],
        translation: "to scandalise, make a scene",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "scandal",
        notice: "",
    },
    {
        word: "συνηθίζω",
        base: "συνήθης",
        groups: {
            morfology:
                '<em>συνηθίζω </em>→ συνήθ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">συνηθίζω</span> < <span style="color:#7a9473">συνήθης</span> – accustomed).',
        },
        qws: ["to get used to"],
        transls: ["From the word Συνήθης — accustomed"],
        translation: "to get used to",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "accustomed",
        notice: "",
    },
    {
        word: "συχνάζω",
        base: "συχνά",
        groups: {
            morfology:
                '<em>συχνάζω </em>→ συχν<span style="color: #b87333">ά</span> +<span style="color: #b87333"> -άζω</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">συχνός</span> – frequent.',
        },
        qws: ["to frequent"],
        transls: ["From the word Συχνά — often"],
        translation: "to frequent",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "often",
        notice: "",
    },
    {
        word: "φεγγίζω",
        base: "φέγγω",
        groups: {
            morfology:
                '<em>φεγγίζω </em>→ φέγγ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ίζω</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">φεγγίζω</span> < <span style="color:#7a9473">συνήθης</span> – accustomed < Ancient Greek <span style="color:#7a9473">φέγγος</span> – light, brightness.',
        },
        qws: ["to shine through, be translucent"],
        transls: ["From the word Φέγγω — to shine, glow"],
        translation: "to shine through, be translucent",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "to shine, glow",
        notice: "Derives either from φέγγω – to shine, or from φέγγος – light, brightness.",
    },
    {
        word: "ορκίζομαι",
        base: "όρκος",
        groups: {
            morfology:
                '<em>ορκίζομαι </em>→ όρκ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ίζο</span> + <span style="color: #b87333">-ομαι</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ὁρκίζω</span> – to conjure, beseech < <span style="color:#7a9473">ὅρκος</span> – oath)',
        },
        qws: ["to swear (an oath)"],
        transls: ["From the word Όρκος — oath"],
        translation: "to swear (an oath)",
        kind: "Verbs in -ίζω from various parts of speech",
        unicTransl: "oath",
        notice: "",
    },
    {
        word: "ξοδεύω",
        base: "έξοδα",
        groups: {
            morfology:
                '<em>ξοδεύω </em>→ <span style="color: #b87333">έ-</span> + ξοδ<span style="color: #b87333">α</span> + <span style="color: #b87333">-εύω</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">ἐξοδεύω</span> < Ancient Greek <span style="color:#7a9473">ἔξοδος</span> – departure, exit.',
        },
        qws: ["to spend, expend"],
        transls: ["From the word Έξοδα — expenses"],
        translation: "to spend, expend",
        kind: "Verbs in -εύω from various parts of speech",
        unicTransl: "expenses",
        notice: "",
    },
    {
        word: "αγναντεύω",
        base: "αγνάντια",
        groups: {
            morfology:
                '<em>αγναντεύω </em>→ αγνάντ<span style="color: #b87333">ια</span> +<span style="color: #b87333"> -εύω</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">αγναντεύω</span> < <span style="color:#7a9473">αγνάντια</span> – opposite)',
        },
        qws: ["to stand opposite"],
        transls: ["From the word Αγνάντια — opposite"],
        translation: "to stand opposite",
        kind: "Verbs in -εύω from various parts of speech",
        unicTransl: "opposite",
        notice: "",
    },
    {
        word: "δουλεύω",
        base: "δουλειά",
        groups: {
            morfology:
                '<em>δουλεύω </em>→ δουλ<span style="color: #b87333">ειά</span> +<span style="color: #b87333"> -εύω</span>',
            etymology:
                '<br>From Koine Greek <span style="color:#7a9473">δουλεύω</span> – to be a slave, serve < Ancient Greek (<span style="color:#7a9473">δουλόω</span> – to enslave < <span style="color:#7a9473">δοῦλος</span> – slave).',
        },
        qws: ["to work"],
        transls: ["From the word Δουλειά — work"],
        translation: "to work",
        kind: "Verbs in -εύω from various parts of speech",
        unicTransl: "work",
        notice: "",
    },
    {
        word: "κοντεύω",
        base: "κοντά",
        groups: {
            morfology:
                '<em>κοντεύω </em>→ κοντ<span style="color: #b87333">ά</span> +<span style="color: #b87333"> -εύω</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">κοντεύω</span> < <span style="color:#7a9473">κοντά</span> – near) < Ancient Greek <span style="color:#7a9473">κοντός</span> – pole, rod.',
        },
        qws: ["to approach, come near"],
        transls: ["From the word Κοντά — near"],
        translation: "to approach, come near",
        kind: "Verbs in -εύω from various parts of speech",
        unicTransl: "near",
        notice: "",
    },
    {
        word: "σημαδεύω",
        base: "σημάδι",
        groups: {
            morfology:
                '<em>σημαδεύω </em>→ σημάδ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -εύω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">σημάδι</span> – sign, mark < Medieval Greek <span style="color:#7a9473">σημάδιον</span> (diminutive of Ancient Greek <span style="color:#7a9473">σῆμα</span> – sign, mark).',
        },
        qws: ["to mark, brand, aim at"],
        transls: ["From the word Σημάδι — sign, mark"],
        translation: "to mark, brand, aim at",
        kind: "Verbs in -εύω from various parts of speech",
        unicTransl: "sign, mark",
        notice: "",
    },
    {
        word: "ψαχουλεύω",
        base: "ψάχνω",
        groups: {
            morfology:
                '<em>ψαχουλεύω </em>→ ψάχ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> χουλεύω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ψάχνω</span> – to search, feel and <span style="color:#7a9473">χαλεύω</span> – to search, ask.',
        },
        qws: ["to explore, rummage"],
        transls: ["From the word Ψάχνω — to search"],
        translation: "to explore, rummage",
        kind: "Verbs in -εύω from various parts of speech",
        unicTransl: "to search",
        notice: "",
    },
    {
        word: "ψαρεύω",
        base: "ψάρι",
        groups: {
            morfology:
                '<em>ψαρεύω </em>→ ψάρ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -εύω</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ψάρι</span> – fish < Medieval Greek <span style="color:#7a9473">ψάρι</span> – fish < Ancient Greek (<span style="color:#7a9473">ὀψάριον</span> – delicacy < <span style="color:#7a9473">ὄψον</span> – delicacy).',
        },
        qws: ["to fish"],
        transls: ["From the word Ψάρι — fish"],
        translation: "to fish",
        kind: "Verbs in -εύω from various parts of speech",
        unicTransl: "fish",
        notice: "",
    },
    {
        word: "ονειρεύομαι",
        base: "όνειρο",
        groups: {
            morfology:
                '<em>ονειρεύομαι </em>→ όνειρ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -εύω</span> + <span style="color: #b87333">-ομαι</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">ὀνειρεύομαι</span> < Ancient Greek (<span style="color:#7a9473">ὄνειρος</span> – dream; apparition < <span style="color:#7a9473">ὄναρ</span> – dream; apparition).',
        },
        qws: ["to dream"],
        transls: ["From the word Όνειρο — dream"],
        translation: "to dream",
        kind: "Verbs in -εύω from various parts of speech",
        unicTransl: "dream",
        notice: "",
    },
    {
        word: "γραφέας / γραφιάς",
        base: "γράφω",
        groups: {
            morfology:
                '<em>γραφέας, γραφιάς </em>→ γράφ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -έας</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">γραφεύς</span> < <span style="color:#7a9473">γράφω</span> – to write)',
            aplication:
                "<br>Nouns in -έας, -ιάς denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -(ά)τορας are also formed.",
        },
        qws: ["writer"],
        transls: ["From the word Γράφω — to write"],
        translation: "writer",
        kind: "Nouns in -έας, -ιάς from verbs",
        unicTransl: "to write",
        notice: "Nouns in -έας, -ιάς denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -(ά)τορας are also formed.",
    },
    {
        word: "εισαγωγέας",
        base: "εισάγω",
        groups: {
            morfology:
                '<em>εισαγωγέας </em>→ <span style="color: #b87333">εισ-</span> + άγ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ωγέας</span>',
            etymology:
                'From Ancient Greek (<span style="color:#7a9473">εἰσάγω</span> – to import, introduce, bring in < <span style="color:#7a9473">είς-</span> (into) + <span style="color:#7a9473">ἄγω</span> – to lead)',
            aplication:
                "<br>Nouns in -έας, -ιάς denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -(ά)τορας are also formed.",
        },
        qws: ["importer"],
        transls: ["From the word Εισάγω — to import"],
        translation: "importer",
        kind: "Nouns in -έας, -ιάς from verbs",
        unicTransl: "to import",
        notice: "Nouns in -έας, -ιάς denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -(ά)τορας are also formed.",
    },
    {
        word: "εξαγωγέας",
        base: "εξάγω",
        groups: {
            morfology:
                '<em>εξαγωγέας </em>→ εξάγ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ωγέας</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἐξάγω</span> – to export, lead out < <span style="color:#7a9473">εξ-</span> (from, out) + <span style="color:#7a9473">ἄγω</span> – to lead)',
            aplication:
                "<br>Nouns in -έας, -ιάς denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -(ά)τορας are also formed.",
        },
        qws: ["exporter"],
        transls: ["From the word Εξάγω — to export"],
        translation: "exporter",
        kind: "Nouns in -έας, -ιάς from verbs",
        unicTransl: "to export",
        notice: "Nouns in -έας, -ιάς denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -(ά)τορας are also formed.",
    },
    {
        word: "κουρέας",
        base: "κουρεύω",
        groups: {
            morfology:
                '<em>κουρέας </em>→ κουρ<span style="color: #b87333">εύω</span> +<span style="color: #b87333"> -έας</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">κουρεύω</span> – to cut hair < Medieval Greek <span style="color:#7a9473">κουρεύω</span> < Koine Greek (<span style="color:#7a9473">κουρεύομαι</span> – to have one’s hair cut < <span style="color:#7a9473">κούρα</span> – shearing, cutting)',
            aplication:
                "<br>Nouns in -έας, -ιάς denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -(ά)τορας are also formed.",
        },
        qws: ["barber"],
        transls: ["From the word Κουρεύω — to cut hair"],
        translation: "barber",
        kind: "Nouns in -έας, -ιάς from verbs",
        unicTransl: "to cut hair",
        notice: "Nouns in -έας, -ιάς denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -(ά)τορας are also formed.",
    },
    {
        word: "σκαφτιάς",
        base: "σκάβω",
        groups: {
            morfology:
                '<em>σκαφτιάς </em>→ σκάβ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -τιάς</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">σκάφτω, σκάβω</span> – to dig < Ancient Greek <span style="color:#7a9473">σκάπτω</span> – to dig.',
            aplication:
                "<br>Nouns in -έας, -ιάς denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -(ά)τορας are also formed.",
        },
        qws: ["digger"],
        transls: ["From the word Σκάβω — to dig"],
        translation: "digger",
        kind: "Nouns in -έας, -ιάς from verbs",
        unicTransl: "to dig",
        notice: "Nouns in -έας, -ιάς denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -(ά)τορας are also formed.",
    },
    {
        word: "ερχομός",
        base: "έρχομαι",
        groups: {
            morfology:
                '<em>ερχομός </em>→ έρχ<span style="color: #b87333">ομαι</span> +<span style="color: #b87333"> -ομός</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">ερχομός</span> < Ancient Greek <span style="color:#7a9473">ἔρχομαι</span> – to come.',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["arrival, coming"],
        transls: ["From the word Έρχομαι — to come"],
        translation: "arrival, coming",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to come",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "ακρωτηριασμός",
        base: "ακρωτηριάζω",
        groups: {
            morfology:
                '<em>ακρωτηριασμός </em>→ ακρωτηριάζ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -μός</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀκρωτηριασμός</span> < <span style="color:#7a9473">ἀκρωτηριάζω</span> – to amputate < <span style="color:#7a9473">ἀκρωτήριον</span> – top, extremity, edge < <span style="color:#7a9473">ἄκρος</span> – sharp, best, extreme)',
            synonims: "<strong><i>Synonyms</i></strong>: ακρωτηρίαση.",
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["amputation"],
        transls: ["From the word Ακρωτηριάζω — to amputate"],
        translation: "amputation",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to amputate",
        notice: "Synonym – ακρωτηρίαση. <br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "ανταγωνισμός",
        base: "ανταγωνίζομαι",
        groups: {
            morfology:
                '<em>ανταγωνισμός </em>→ ανταγωνίζ<span style="color: #b87333">ομαι</span> +<span style="color: #b87333"> -μός</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">ἀνταγωνίζομαι</span> – to compete < <span style="color:#7a9473">ἀγωνίζομαι</span> – to compete < <span style="color:#7a9473">ἀγών</span> – assembly < <span style="color:#7a9473">ἄγω</span> – to lead.',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["competition"],
        transls: ["From the word Ανταγωνίζομαι — to compete"],
        translation: "competition",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to compete",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "βιασμός",
        base: "βιάζω",
        groups: {
            morfology:
                '<em>βιασμός </em>→ βιάζ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -μός</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">βιάζω</span> – to use force < <span style="color:#7a9473">βία</span> – force, violence.',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["rape"],
        transls: ["From the word Βιάζω — to rape"],
        translation: "rape",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to rape",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "διωγμός",
        base: "διώχνω",
        groups: {
            morfology:
                '<em>διωγμός </em>→ διώχ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -μός</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">διωγμός</span> < <span style="color:#7a9473">διώκω</span> – to chase < <span style="color:#7a9473">δίω</span> – to drive away, pursue)',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["expulsion"],
        transls: ["From the word Διώχνω — to expel, drive out"],
        translation: "expulsion",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to expel, drive out",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "ενθουσιασμός",
        base: "ενθουσιάζομαι",
        groups: {
            morfology:
                '<em>ενθουσιασμός </em>→ ενθουσιάζ<span style="color: #b87333">ομαι</span> +<span style="color: #b87333"> -μός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ενθουσιάζω</span> – to be inspired < Ancient Greek (<span style="color:#7a9473">ἐνθουσιάζω</span> < <span style="color:#7a9473">ἔνθους</span> – inspired, enthusiastic < <span style="color:#7a9473">ἔνθεος</span> – inspired < <span style="color:#7a9473">ἐν</span> + <span style="color:#7a9473">θεός</span> – with God).',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["enthusiasm"],
        transls: ["From the word Ενθουσιάζομαι — to be enthusiastic"],
        translation: "enthusiasm",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to be enthusiastic",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "λυτρωμός",
        base: "λυτρώνω",
        groups: {
            morfology:
                '<em>λυτρωμός </em>→ λυτρ<span style="color: #b87333">ώνω</span> +<span style="color: #b87333"> -μός</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">λυτρωμός</span> < Ancient Greek <span style="color:#7a9473">λυτρόω</span> – to redeem, release.',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["redemption, deliverance"],
        transls: ["From the word Λυτρώνω — to redeem, save"],
        translation: "redemption, deliverance",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to redeem, save",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "πυροβολισμός",
        base: "πυροβολώ",
        groups: {
            morfology:
                '<em>πυροβολισμός </em>→ πυροβολ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ισμος</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">πυροβολώ</span> – to shoot < <span style="color:#7a9473">πυροβόλο</span> – firearm, cannon).',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["shot, gunfire"],
        transls: ["From the word Πυροβολώ — to shoot"],
        translation: "shot, gunfire",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to shoot",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "σεβασμός",
        base: "σέβομαι",
        groups: {
            morfology:
                '<em>σεβασμός </em>→ σέβ<span style="color: #b87333">ομαι</span> +<span style="color: #b87333"> -ασμός</span>',
            etymology:
                '<br>From Koine Greek <span style="color:#7a9473">σεβάζω</span> < Ancient Greek <span style="color:#7a9473">σέβομαι</span> – to respect.',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["respect"],
        transls: ["From the word Σέβομαι — to respect"],
        translation: "respect",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to respect",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "σύνδεσμος",
        base: "συνδέω",
        groups: {
            morfology:
                '<em>σύνδεσμος </em>→ <span style="color: #b87333">συν-</span> + δέ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -σμος</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">σύνδεσμος</span> < <span style="color:#7a9473">συνδέω</span> – to join < <span style="color:#7a9473">σύν-</span> (together) + <span style="color:#7a9473">δέω</span> – to bind)',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["connection, union"],
        transls: ["From the word Συνδέω — to connect"],
        translation: "connection, union",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to connect",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "τραυματισμός",
        base: "τραυματίζω",
        groups: {
            morfology:
                '<em>τραυματισμός </em>→ τραυματίζ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -μός</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">τραυματίζω</span> – to wound, injure < <span style="color:#7a9473">τραῦμα, τρῶμᾰ</span> – wound < <span style="color:#7a9473">τιτρώσκω</span> – to damage)',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["wound, injury"],
        transls: ["From the word Τραυματίζω — to wound, injure"],
        translation: "wound, injury",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to wound, injure",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "χαμός",
        base: "χάνω",
        groups: {
            morfology:
                '<em>χαμός </em>→ χάν<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -μός</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">χαμός</span> < <span style="color:#7a9473">χάνω</span> – to lose).',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["loss, ruin"],
        transls: ["From the word Χάνω — to lose"],
        translation: "loss, ruin",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "to lose",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "αθλητισμός",
        base: "αθλητής",
        groups: {
            morfology:
                '<em>αθλητισμός </em>→ αθλητ<span style="color: #b87333">ής</span> +<span style="color: #b87333"> -ισμος</span>',
            etymology:
                '<br>From French <span style="color:#7a9473">athlétisme</span> – athletics < Ancient Greek (<span style="color:#7a9473">ἀθλητής</span> – athlete, champion < <span style="color:#7a9473">ἀθλέω</span> – to contend, be an athlete < <span style="color:#7a9473">ἆθλος</span> – contest, struggle; or <span style="color:#7a9473">ἆθλον</span> – prize)',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["sport, athletics"],
        transls: ["From the word Αθλητής — athlete"],
        translation: "sport, athletics",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "athlete",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "εμπρησμός",
        base: "εμπρηστής",
        groups: {
            morfology:
                '<em>εμπρησμός </em>→ εμπρηστ<span style="color: #b87333">ής</span> +<span style="color: #b87333"> -μός</span>',
            etymology:
                '<br>From Koine Greek <span style="color:#7a9473">ἐμπρησμός</span> < Ancient Greek (<span style="color:#7a9473">ἐμπίμπρημι</span> – to burn, set on fire < <span style="color:#7a9473">ἐμ-</span> (<span style="color:#7a9473">ἐν-</span> / <span style="color:#7a9473">ἐγ-</span>) (in, into) + <span style="color:#7a9473">πίμπρημι</span> – to blow; to burn)',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["arson"],
        transls: ["From the word Εμπρηστής — arsonist"],
        translation: "arson",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "arsonist",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "τουρισμός",
        base: "τουρίστας",
        groups: {
            morfology:
                '<em>τουρισμός </em>→ τουρίσ<span style="color: #b87333">τας</span> +<span style="color: #b87333"> -μός</span>',
            etymology:
                '<br>From French <span style="color:#7a9473">tourisme</span> – tourism < English (<span style="color:#7a9473">tourism</span> – tourism < <span style="color:#7a9473">tour</span> – tour) < Latin <span style="color:#7a9473">tornare</span> – to turn < Ancient Greek <span style="color:#7a9473">τόρνος</span> – that which turns; lathe; compass.',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["tourism"],
        transls: ["From the word Τουρίστας — tourist"],
        translation: "tourism",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "tourist",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "χριστιανισμός",
        base: "χριστιανός",
        groups: {
            morfology:
                '<em>χριστιανισμός </em>→ χριστιαν<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ισμος</span>',
            etymology:
                '<br>From Koine Greek (<span style="color:#7a9473">χριστιανισμός</span> – Christianity < <span style="color:#7a9473">χριστιανός</span> – Christian < <span style="color:#7a9473">Χριστός</span> – Christ)',
            aplication:
                "<br>Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["Christianity"],
        transls: ["From the word Χριστιανός — Christian"],
        translation: "Christianity",
        kind: "Nouns in -μός, -ισμος from various parts of speech",
        unicTransl: "Christian",
        notice: "Nouns in -μός, -ισμος denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -ση, -ηση (-ξη,-φη), in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "αγανάκτηση",
        base: "αγανακτώ",
        groups: {
            morfology:
                '<em>αγανάκτηση </em>→ αγανακτ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀγανάκτησις</span> – annoyance, indignation < <span style="color:#7a9473">ἀγανακτέω</span> – to irritate, be annoyed < <span style="color:#7a9473">ἄγαν</span> (much) + <span style="color:#7a9473">κτείνω</span> – to kill)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["indignation"],
        transls: ["From the word Αγανακτώ — to be indignant"],
        translation: "indignation",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to be indignant",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "ακύρωση",
        base: "ακυρώνω",
        groups: {
            morfology:
                '<em>ακύρωση </em>→ ακυρώ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀκύρωσις</span> < <span style="color:#7a9473">ἀκυρόω</span> – to annul, cancel < <span style="color:#7a9473">ἄκυρος</span> – powerless, invalid < <span style="color:#7a9473">α-</span> (negation prefix) + <span style="color:#7a9473">κῦρος</span> – authority, validity)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["cancellation"],
        transls: ["From the word Ακυρώνω — to cancel"],
        translation: "cancellation",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to cancel",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "ανάκριση",
        base: "ανακρίνω",
        groups: {
            morfology:
                '<em>ανάκριση </em>→ ανακρί<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀνάκρισις</span> – investigation; inquiry; dispute < <span style="color:#7a9473">ἀνακρίνω</span> – to interrogate, question < <span style="color:#7a9473">ἀνα-</span> (up, back, again; expresses repetition, intensification) + <span style="color:#7a9473">κρίνω</span> – to separate, judge, condemn)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["interrogation, thorough inquiry"],
        transls: ["From the word Ανακρίνω — to interrogate"],
        translation: "interrogation, thorough inquiry",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to interrogate",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "ανάλυση",
        base: "αναλύω",
        groups: {
            morfology:
                '<em>ανάλυση </em>→ αναλύ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀνάλυσις</span> – solving; analysis; dissolution; retreat < <span style="color:#7a9473">ἀναλύω</span> – to dissolve; to retreat < <span style="color:#7a9473">ἀνα-</span> (up, back, again) + <span style="color:#7a9473">λύω</span> – to solve; release)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["analysis"],
        transls: ["From the word Αναλύω — to analyse"],
        translation: "analysis",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to analyse",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "αναχώρηση",
        base: "αναχωρώ",
        groups: {
            morfology:
                '<em>αναχώρηση </em>→ αναχ<span style="color: #b87333">ωρώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀναχώρησις</span> – retreat, withdrawal < <span style="color:#7a9473">ἀναχωρέω</span> – to withdraw, go back < <span style="color:#7a9473">ἀνα-</span> (up, back, again) + <span style="color:#7a9473">χωρέω</span> – to go, make room < <span style="color:#7a9473">χῶρος</span> – place, region)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["departure (of a train)"],
        transls: ["From the word Αναχωρώ — to depart"],
        translation: "departure (of a train)",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to depart",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "απάντηση",
        base: "απαντώ",
        groups: {
            morfology:
                '<em>απάντηση </em>→ απαντ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀπάντησης</span> – answer < <span style="color:#7a9473">ἀπαντάω</span> < <span style="color:#7a9473">ἀπό-</span> (from, off, after) + <span style="color:#7a9473">ἀντάω</span> – to meet, encounter < <span style="color:#7a9473">ἀντη</span> – instead, besides)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["answer"],
        transls: ["From the word Απαντώ — to answer"],
        translation: "answer",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to answer",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "απογοήτευση",
        base: "απογοητεύω",
        groups: {
            morfology:
                '<em>απογοήτευση </em>→ <span style="color: #b87333">απο-</span> + γοητεύ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">απογοητεύω</span> – to disappoint < <span style="color:#7a9473">ἀπό-</span> (from, off, <u>negation</u>) + <span style="color:#7a9473">γοητεύω</span> – to charm, enchant) < Ancient Greek (<span style="color:#7a9473">γόης</span> – sorcerer < <span style="color:#7a9473">γοάω</span> – to groan, lament)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["disappointment"],
        transls: ["From the word Απογοητεύω — to disappoint"],
        translation: "disappointment",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to disappoint",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "απόδειξη",
        base: "αποδεικνύω",
        groups: {
            morfology:
                '<em>απόδειξη </em>→ αποδει<span style="color: #b87333">κνύω</span> +<span style="color: #b87333"> -ξη</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀπόδειξις</span> – proof, demonstration < <span style="color:#7a9473">ἀπό-</span> (from, off) + <span style="color:#7a9473">δείκνῡμι</span> – to show, point out)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["evidence, proof"],
        transls: ["From the word Αποδεικνύω — to prove"],
        translation: "evidence, proof",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to prove",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "απομόνωση",
        base: "απομονώνομαι",
        groups: {
            morfology:
                '<em>απομόνωση </em>→ απομονώ<span style="color: #b87333">νομαι</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">απομονώνω</span> – to isolate < Ancient Greek <span style="color:#7a9473">ἀπομονόομαι</span> – to be isolated < <span style="color:#7a9473">ἀπό-</span> (from) + <span style="color:#7a9473">μονόω</span> – to isolate < <span style="color:#7a9473">μόνος</span> – alone)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["isolation, seclusion"],
        transls: ["From the word Απομονώνομαι — to isolate oneself"],
        translation: "isolation, seclusion",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to isolate oneself",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "άρνηση",
        base: "αρνούμαι",
        groups: {
            morfology:
                '<em>άρνηση </em>→ αρν<span style="color: #b87333">ούμαι</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">αρνούμαι</span> – to refuse < Ancient Greek <span style="color:#7a9473">ἀρνέομαι</span> – to deny, refuse.',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["refusal"],
        transls: ["From the word Αρνούμαι — to refuse"],
        translation: "refusal",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to refuse",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "γέννηση",
        base: "γεννώ",
        groups: {
            morfology:
                '<em>γέννηση </em>→ γενν<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">γέννηση</span> – birth < Ancient Greek (<span style="color:#7a9473">γέννησις</span> – birth < <span style="color:#7a9473">γεννάω</span> – to give birth < <span style="color:#7a9473">γίγνομαι</span> – to become, be born)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["birth"],
        transls: ["From the word Γεννώ — to give birth"],
        translation: "birth",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to give birth",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "διαφήμιση",
        base: "διαφημίζω",
        groups: {
            morfology:
                '<em>διαφήμιση </em>→ διαφημί<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">διαφημίζω</span> – to advertise < Ancient Greek (<span style="color:#7a9473">διαφημίζω</span> – to make known, proclaim < <span style="color:#7a9473">δια-</span> (through, across) + <span style="color:#7a9473">φημί</span> – to speak)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["advertisement"],
        transls: ["From the word Διαφημίζω — to advertise"],
        translation: "advertisement",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to advertise",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "διεύθυνση",
        base: "διευθύνω",
        groups: {
            morfology:
                '<em>διεύθυνση </em>→ διευθύν<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">διευθύνω</span> – to direct, manage < Ancient Greek (<span style="color:#7a9473">δια-</span> (through) + <span style="color:#7a9473">εὐθύνω</span> – to straighten, call to account < <span style="color:#7a9473">εὐθύς</span>, <span style="color:#7a9473">ἰθύς</span> – straight)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["direction, address, management"],
        transls: ["From the word Διευθύνω — to direct, manage"],
        translation: "direction, address, management",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to direct, manage",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "έγκριση",
        base: "εγκρίνω",
        groups: {
            morfology:
                '<em>έγκριση </em>→ εγκρί<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Koine Greek (<span style="color:#7a9473">ἔγκρισις</span> < <span style="color:#7a9473">ἐγκρίνω</span> – to approve) < Ancient Greek <span style="color:#7a9473">ἐγ-</span> (<span style="color:#7a9473">ἐν-</span> / <span style="color:#7a9473">ἐμ-</span>) (in) + <span style="color:#7a9473">κρίνω</span> – to judge, decide.',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["approval"],
        transls: ["From the word Εγκρίνω — to approve"],
        translation: "approval",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to approve",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "έκδοση",
        base: "εκδίδω",
        groups: {
            morfology:
                '<em>έκδοση </em>→ εκδ<span style="color: #b87333">ίδω</span> +<span style="color: #b87333"> -οση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἐκδοσής</span> – delivery < <span style="color:#7a9473">ἐκδίδωμι</span> – to give out < <span style="color:#7a9473">δίδωμι</span> – to give).',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["publication, edition"],
        transls: ["From the word Εκδίδω — to publish"],
        translation: "publication, edition",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to publish",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "εκδίκηση",
        base: "εκδικούμαι",
        groups: {
            morfology:
                '<em>εκδίκηση </em>→ εκδικ<span style="color: #b87333">ούμαι</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἐκδίκησις</span> – revenge < <span style="color:#7a9473">ἐκδικέω</span> – to avenge < <span style="color:#7a9473">ἔκδῐκος</span> – unjust, vengeful)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["revenge"],
        transls: ["From the word Εκδικούμαι — to avenge"],
        translation: "revenge",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to avenge",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "εκκένωση",
        base: "εκκενώνω",
        groups: {
            morfology:
                '<em>εκκένωση </em>→ εκκενώ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">εκκενώνω</span> – to evacuate < Ancient Greek (<span style="color:#7a9473">ἐκκενόω</span> – to evacuate < <span style="color:#7a9473">κενόω</span> – to empty < <span style="color:#7a9473">κενός</span> – empty)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["evacuation"],
        transls: ["From the word Εκκενώνω — to evacuate"],
        translation: "evacuation",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to evacuate",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "έκπληξη",
        base: "εκπλήσσω",
        groups: {
            morfology:
                '<em>έκπληξη </em>→ εκπλή<span style="color: #b87333">σσω</span> +<span style="color: #b87333"> -ξη</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἔκπληξις</span> – amazement < <span style="color:#7a9473">ἐκπλήσσω</span> – to amaze, astonish < <span style="color:#7a9473">ἐκ-</span>, <span style="color:#7a9473">ἐξ-</span> (out) + <span style="color:#7a9473">πλήσσω</span> – to strike)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["amazement, surprise"],
        transls: ["From the word Εκπλήσσω — to amaze"],
        translation: "amazement, surprise",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to amaze",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "εκτέλεση",
        base: "εκτελώ",
        groups: {
            morfology:
                '<em>εκτέλεση </em>→ εκτε<span style="color: #b87333">λώ</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">εκτελώ</span> – to execute < Ancient Greek (<span style="color:#7a9473">ἐκτελέω</span> < <span style="color:#7a9473">ἐκ-</span>, <span style="color:#7a9473">ἐξ-</span> (out) + <span style="color:#7a9473">τέλος</span> – end)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["execution"],
        transls: ["From the word Εκτελώ — to execute"],
        translation: "execution",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to execute",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "εξαπάτηση",
        base: "εξαπατώ",
        groups: {
            morfology:
                '<em>εξαπάτηση </em>→ <span style="color: #b87333">εξ-</span> + απατ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">εξαπατώ</span> – to deceive < Ancient Greek (<span style="color:#7a9473">ἐξαπαταω</span> < <span style="color:#7a9473">ἐξ-</span>, <span style="color:#7a9473">ἐκ-</span> (out) + <span style="color:#7a9473">ἀπατάω</span> – to cheat < <span style="color:#7a9473">ἀπάτη</span> – deceit)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["deception"],
        transls: ["From the word Εξαπατώ — to deceive"],
        translation: "deception",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to deceive",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "επένδυση",
        base: "επενδύω",
        groups: {
            morfology:
                '<em>επένδυση </em>→ <span style="color: #b87333">επ-</span> + <span style="color: #b87333">εν-</span> + δύ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">επενδύω</span> – to invest < Ancient Greek (<span style="color:#7a9473">ἐπενδύω</span> – to cover, put on < <span style="color:#7a9473">ἐπί-</span> (on, upon) + <span style="color:#7a9473">ἐνδύω</span> – to put on, enter < <span style="color:#7a9473">ἐν-</span> (in) + <span style="color:#7a9473">δύω</span> – to enter)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["investment, deposit"],
        transls: ["From the word Επενδύω — to invest"],
        translation: "investment, deposit",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to invest",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "επιβεβαίωση",
        base: "επιβεβαιώνω",
        groups: {
            morfology:
                '<em>επιβεβαίωση </em>→ <span style="color: #b87333">επι-</span> + βεβαιώ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">επιβεβαιώνω</span> – to confirm < <span style="color:#7a9473">επι-</span> (on) + <span style="color:#7a9473">βεβαιώνω</span> – to confirm) < Ancient Greek <span style="color:#7a9473">βεβαιόω</span> – to strengthen, guarantee < <span style="color:#7a9473">βέβαιος</span> – sure, firm < <span style="color:#7a9473">βαίνω</span> – to go)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["confirmation"],
        transls: ["From the word Επιβεβαιώνω — to confirm"],
        translation: "confirmation",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to confirm",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "επίδεση",
        base: "επιδένω",
        groups: {
            morfology:
                '<em>επίδεση </em>→ <span style="color: #b87333">επι-</span> + δέ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἐπίθεσις</span> – placing, imposition < <span style="color:#7a9473">ἐπιτίθημι</span> – to put on < <span style="color:#7a9473">ἐπι-</span> (on) + <span style="color:#7a9473">τῐθημῐ</span> – to place)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["bandaging"],
        transls: ["From the word Επιδένω — to bandage"],
        translation: "bandaging",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to bandage",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "επίσκεψη",
        base: "επισκέπτομαι",
        groups: {
            morfology:
                '<em>επίσκεψη </em>→ <span style="color: #b87333">επι-</span> + σκέ<span style="color: #b87333">πτομαι</span> +<span style="color: #b87333"> -ψη</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἐπισκέπτομαι</span> – to visit < <span style="color:#7a9473">ἐπι-</span> (on) + <span style="color:#7a9473">σκέπτομαι</span> – to look, observe).',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["visit"],
        transls: ["From the word Επισκέπτομαι — to visit"],
        translation: "visit",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to visit",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "θύμηση",
        base: "θυμάμαι",
        groups: {
            morfology:
                '<em>θύμηση </em>→ θυμ<span style="color: #b87333">άμαι</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">θυμάμαι</span> – to remember < <span style="color:#7a9473">θυμοῡμαι</span>) < Ancient Greek (<span style="color:#7a9473">ἐνθυμέομαι</span> – to consider, think over < <span style="color:#7a9473">ἐν-</span> (in) + <span style="color:#7a9473">θῡμός</span> – soul, mind, will)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["memory, recollection"],
        transls: ["From the word Θυμάμαι — to remember"],
        translation: "memory, recollection",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to remember",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "καταδίωξη",
        base: "καταδιώκω",
        groups: {
            morfology:
                '<em>καταδίωξη </em>→ <span style="color: #b87333">κατα-</span> + διώ<span style="color: #b87333">κω</span> +<span style="color: #b87333"> -ξη</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">καταδιώκω</span> – to pursue < Ancient Greek (<span style="color:#7a9473">καταδιώκω</span> – to pursue, chase < <span style="color:#7a9473">κατα-</span> (expresses hostility; intensification; downwards) + <span style="color:#7a9473">διώκω</span> – to chase, persecute < <span style="color:#7a9473">δίω</span> – to drive away)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["pursuit, chase"],
        transls: ["From the word Καταδιώκω — to pursue"],
        translation: "pursuit, chase",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to pursue",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "κατάθεση",
        base: "καταθέτω",
        groups: {
            morfology:
                '<em>κατάθεση </em>→ <span style="color: #b87333">κατα-</span> + θέ<span style="color: #b87333">τω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">καταθέτω</span> – to deposit < Ancient Greek (<span style="color:#7a9473">κατατίθημι</span> – to place, deposit < <span style="color:#7a9473">κατα-</span> (down, against) + <span style="color:#7a9473">τίθημι</span> – to place)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["deposit"],
        transls: ["From the word Καταθέτω — to deposit"],
        translation: "deposit",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to deposit",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "κούραση",
        base: "κουράζομαι",
        groups: {
            morfology:
                '<em>κούραση </em>→ κουρά<span style="color: #b87333">ζομαι</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">κούραση</span> < <span style="color:#7a9473">κουράζω</span> – to tire) < Ancient Greek <span style="color:#7a9473">κουρά</span> – shearing, cutting.',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["tiredness"],
        transls: ["From the word Κουράζομαι — to get tired"],
        translation: "tiredness",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to get tired",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "κρίση",
        base: "κρίνω",
        groups: {
            morfology:
                '<em>κρίση </em>→ κρί<span style="color: #b87333">νω</span> +<span style="color: #b87333"> ση</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">κρίσις</span> – separation, judgement, decision < <span style="color:#7a9473">κρίνω</span> – to separate, judge)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["crisis, opinion"],
        transls: ["From the word Κρίνω — to judge, decide"],
        translation: "crisis, opinion",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to judge, decide",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "λάμψη",
        base: "λάμπω",
        groups: {
            morfology:
                '<em>λάμψη </em>→ λαμ<span style="color: #b87333">πώ</span> +<span style="color: #b87333"> -ψη</span>',
            etymology:
                '<br>From Koine Greek <span style="color:#7a9473">λάμψις</span> < Ancient Greek <span style="color:#7a9473">λάμπω</span> – to shine, gleam.',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["glow, brightness"],
        transls: ["From the word Λάμπω — to shine, gleam"],
        translation: "glow, brightness",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to shine, gleam",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "λίπανση",
        base: "λιπαίνω",
        groups: {
            morfology:
                '<em>λίπανση </em>→ λιπαίν<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                'From Koine Greek <span style="color:#7a9473">λίπανσις</span> – lubrication < Ancient Greek (<span style="color:#7a9473">λιπαίνω</span> – to grease < <span style="color:#7a9473">λίπα</span> – richly, lavishly)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["greasing, fertilisation"],
        transls: ["From the word Λιπαίνω – to fertilise, grease"],
        translation: "greasing, fertilisation",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to fertilise, grease",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        voicePath:
            "/wp-content/themes/alfa-greek/assets/music/voices/word_formation_train/joanna_6.mp3",
    },
    {
        word: "παραβίαση / παράβαση",
        base: "παραβιάζω",
        groups: {
            morfology:
                '<em>παραβίαση, παράβαση </em>→ <span style="color: #b87333">παρα-</span> + βιά<span style="color: #b87333">ζω</span> + <span style="color: #b87333">-ση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">παραβιάζω</span> < <span style="color:#7a9473">βιάζω</span> – to use force < <span style="color:#7a9473">βία</span> – force, violence).',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["violation"],
        transls: ["From the word Παραβιάζω — to violate"],
        translation: "violation",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to violate",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "παράλυση",
        base: "παραλύω",
        groups: {
            morfology:
                '<em>παράλυση </em>→ <span style="color: #b87333">παρα-</span> + λύ<span style="color: #b87333">ω</span> + <span style="color: #b87333">-ση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">παραλύω</span> < <span style="color:#7a9473">λύω</span> – to release).',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["paralysis"],
        transls: ["From the word Παραλύω — to paralyse"],
        translation: "paralysis",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to paralyse",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "περιφρόνηση",
        base: "περιφρονώ",
        groups: {
            morfology:
                '<em>περιφρόνηση </em>→ περιφρον<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["contempt"],
        transls: ["From the word Περιφρονώ — to despise"],
        translation: "contempt",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to despise",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "ποίηση",
        base: "ποιώ",
        groups: {
            morfology:
                '<em>ποίηση </em>→ ποι<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ποιώ</span> – to make, create < Ancient Greek <span style="color:#7a9473">ποιέω</span>, <span style="color:#7a9473">ποιῶ</span>.',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["poetry"],
        transls: ["From the word Ποιώ — to create, make"],
        translation: "poetry",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to create, make",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "προειδοποίηση",
        base: "προειδοποιώ",
        groups: {
            morfology:
                '<em>προειδοποίηση </em>→ προειδοποι<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">προειδοποιώ</span> – to warn < <span style="color:#7a9473">ειδοποιώ</span> – to notify).',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["warning"],
        transls: ["From the word Προειδοποιώ — to warn"],
        translation: "warning",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to warn",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "προπόνηση",
        base: "προπονώ",
        groups: {
            morfology:
                '<em>προπόνηση </em>→ προπον<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["training"],
        transls: ["From the word Προπονώ — to train"],
        translation: "training",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to train",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "πρόσδεση",
        base: "προσδένω",
        groups: {
            morfology:
                '<em>πρόσδεση </em>→ προσδέ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["docking"],
        transls: ["From the word Προσδένω — to dock"],
        translation: "docking",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to dock",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "πρόσκληση",
        base: "προσκαλώ",
        groups: {
            morfology:
                '<em>πρόσκληση </em>→ προσκαλ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["invitation (document)"],
        transls: ["From the word Προσκαλώ — to invite"],
        translation: "invitation (document)",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to invite",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "συζήτηση",
        base: "συζητώ",
        groups: {
            morfology:
                '<em>συζήτηση </em>→ συζητ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["discussion, conversation"],
        transls: ["From the word Συζητώ — to discuss, converse"],
        translation: "discussion, conversation",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to discuss, converse",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "σύλληψη",
        base: "συλλαμβάνω",
        groups: {
            morfology:
                '<em>σύλληψη </em>→ συλλ<span style="color: #b87333">αμβάνω</span> +<span style="color: #b87333"> -ηψη</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">σύλληψις</span> < <span style="color:#7a9473">συλλαμβάνω</span> – to arrest, collect, seize < <span style="color:#7a9473">συλ-</span>, <span style="color:#7a9473">συν-</span> (together) + <span style="color:#7a9473">λαμβάνω</span> – to take)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["arrest"],
        transls: ["From the word Συλλαμβάνω — to arrest, seize"],
        translation: "arrest",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to arrest, seize",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "συνάντηση",
        base: "συναντιέμαι",
        groups: {
            morfology:
                '<em>συνάντηση </em>→ συναντ<span style="color: #b87333">ιέμαι</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["meeting"],
        transls: ["From the word Συναντιέμαι — to meet"],
        translation: "meeting",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to meet",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "σύνδεση",
        base: "συνδέω",
        groups: {
            morfology:
                '<em>σύνδεση </em>→ συνδέ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["connection, union"],
        transls: ["From the word Συνδέω — to connect"],
        translation: "connection, union",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to connect",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "σύνθεση",
        base: "συνθέτω",
        groups: {
            morfology:
                '<em>σύνθεση </em>→ συνθέ<span style="color: #b87333">τω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["composition"],
        transls: ["From the word Συνθέτω — to compose"],
        translation: "composition",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to compose",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "ταπείνωση",
        base: "ταπεινώνω",
        groups: {
            morfology:
                '<em>ταπείνωση </em>→ ταπεινώ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["humiliation"],
        transls: ["From the word Ταπεινώνω — to humiliate"],
        translation: "humiliation",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to humiliate",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "τοποθέτηση",
        base: "τοποθετώ",
        groups: {
            morfology:
                '<em>τοποθέτηση </em>→ τοποθετ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["positioning"],
        transls: ["From the word Τοποθετώ — to position"],
        translation: "positioning",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to position",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "μετάφραση",
        base: "μεταφράζω",
        groups: {
            morfology:
                '<em>μετάφραση </em>→ μεταφρά<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["translation"],
        transls: ["From the word Μεταφράζω — to translate"],
        translation: "translation",
        kind: "Nouns in -η from verbs",
        unicTransl: "to translate",
        notice: "",
    },
    {
        word: "ξεκούραση",
        base: "ξεκουράζομαι",
        groups: {
            morfology:
                '<em>ξεκούραση </em>→ ξεκουρά<span style="color: #b87333">ζομαι</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ξε-</span> (expresses opposition, reversal) + <span style="color:#7a9473">κούραση</span> – tiredness < Medieval Greek (<span style="color:#7a9473">κούραση</span> – tiredness < <span style="color:#7a9473">κουράζω</span> – to tire) < Ancient Greek <span style="color:#7a9473">κουρά</span> – shearing.',
        },
        qws: ["rest"],
        transls: ["From the word Ξεκουράζομαι — to rest"],
        translation: "rest",
        kind: "Nouns in -η from verbs",
        unicTransl: "to rest",
        notice: "",
    },
    {
        word: "ύπνωση",
        base: "υπνώνω",
        groups: {
            morfology:
                '<em>ύπνωση </em>→ υπνώ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">υπνώνω</span> – to put to sleep < Ancient Greek <span style="color:#7a9473">ὕπνος</span> – sleep',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["hypnosis"],
        transls: ["From the word Υπνώνω — to put to sleep"],
        translation: "hypnosis",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to put to sleep",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "υπόθεση",
        base: "υποθέτω",
        groups: {
            morfology:
                '<em>υπόθεση </em>→ <span style="color: #b87333">υπο-</span> + θέ<span style="color: #b87333">τω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ὑπόθεσις</span> – hypothesis, assumption < <span style="color:#7a9473">ὑποτίθημι</span> – to put under < <span style="color:#7a9473">ὑπο-</span> (under) + <span style="color:#7a9473">τίθημι</span> – to place)',
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["assumption, hypothesis"],
        transls: ["From the word Υποθέτω — to suppose"],
        translation: "assumption, hypothesis",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to suppose",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "υποχώρηση",
        base: "υποχωρώ",
        groups: {
            morfology:
                '<em>υποχώρηση </em>→ υποχωρ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ηση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["retreat"],
        transls: ["From the word Υποχωρώ — to retreat"],
        translation: "retreat",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to retreat",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "υπόσχεση",
        base: "υπόσχομαι",
        groups: {
            morfology:
                '<em>υπόσχεση </em>→ υπόσχ<span style="color: #b87333">ομαι</span> +<span style="color: #b87333"> -εση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["promise"],
        transls: ["From the word Υπόσχομαι — to promise"],
        translation: "promise",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to promise",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "φόρτωση",
        base: "φορτώνω",
        groups: {
            morfology:
                '<em>φόρτωση </em>→ φορτώ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -ση</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["loading"],
        transls: ["From the word Φορτώνω — to load"],
        translation: "loading",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to load",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "φύλαξη",
        base: "φυλάγω",
        groups: {
            morfology:
                '<em>φύλαξη </em>→ φυλά<span style="color: #b87333">γω</span> +<span style="color: #b87333"> -ξη</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
        },
        qws: ["guarding, keeping"],
        transls: ["From the word Φυλάγω — to guard, keep"],
        translation: "guarding, keeping",
        kind: "Nouns in -ση, -ηση (-ξη,-φη) from verbs",
        unicTransl: "to guard, keep",
        notice: "Nouns in -ση, -ηση (-ξη,-φη) denote an action (process) or its result and are formed mainly from verbs. With the same meaning, nouns in -μός, -ισμος, in -σίμο, -ξίμω, -φίμω and in -μα are also formed.",
    },
    {
        word: "αγάπη",
        base: "αγαπάω",
        groups: {
            morfology:
                '<em>αγάπη </em>→ αγαπ<span style="color: #b87333">άω</span> +<span style="color: #b87333"> -η</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["love"],
        transls: ["From the word Αγαπάω — to love"],
        translation: "love",
        kind: "Nouns in -η from verbs",
        unicTransl: "to love",
        notice: "",
    },
    {
        word: "απειλή",
        base: "απειλώ",
        groups: {
            morfology:
                '<em>απειλή </em>→ απειλ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["threat"],
        transls: ["From the word Απειλώ — to threaten"],
        translation: "threat",
        kind: "Nouns in -η from verbs",
        unicTransl: "to threaten",
        notice: "",
    },
    {
        word: "αστραπή",
        base: "αστράπτω",
        groups: {
            morfology:
                '<em>αστραπή </em>→ αστράπ<span style="color: #b87333">τω</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["lightning"],
        transls: ["From the word Αστράπτω — to flash"],
        translation: "lightning",
        kind: "Nouns in -η from verbs",
        unicTransl: "to flash",
        notice: "",
    },
    {
        word: "βροντή",
        base: "βροντάω",
        groups: {
            morfology:
                '<em>βροντή </em>→ βροντ<span style="color: #b87333">άω</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["thunder"],
        transls: ["From the word Βροντάω — to thunder"],
        translation: "thunder",
        kind: "Nouns in -η from verbs",
        unicTransl: "to thunder",
        notice: "",
    },
    {
        word: "βοσκή",
        base: "βόσκω",
        groups: {
            morfology:
                '<em>βοσκή </em>→ βόσκ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">βοσκή</span> < <span style="color:#7a9473">βόσκω</span> — to graze)',
        },
        qws: ["pasture"],
        transls: ["From the word Βόσκω — to graze"],
        translation: "pasture",
        kind: "Nouns in -η from verbs",
        unicTransl: "to graze",
        notice: "",
    },
    {
        word: "εισαγωγή",
        base: "εισάγω",
        groups: {
            morfology:
                '<em>εισαγωγή </em>→ εισάγ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -γή</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">εἰσαγωγή</span> < <span style="color:#7a9473">είς-</span> (into) + <span style="color:#7a9473">ἀγωγή</span> – leading, moving < <span style="color:#7a9473">ἄγω</span> – to lead)',
        },
        qws: ["import"],
        transls: ["From the word Εισάγω — to import"],
        translation: "import",
        kind: "Nouns in -η from verbs",
        unicTransl: "to import",
        notice: "",
    },
    {
        word: "εμπιστοσύνη",
        base: "εμπιστεύομαι",
        groups: {
            morfology:
                '<em>εμπιστοσύνη </em>→ εμπιστ<span style="color: #b87333">εύομαι</span> +<span style="color: #b87333"> -οσύνη</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["trust, confidence"],
        transls: ["From the word Εμπιστεύομαι — to trust"],
        translation: "trust, confidence",
        kind: "Nouns in -η from verbs",
        unicTransl: "to trust",
        notice: "",
    },
    {
        word: "εξαγωγή",
        base: "εξάγω",
        groups: {
            morfology:
                '<em>εξαγωγή </em>→ εξάγ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -γή</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἐξᾰγωγή</span> < <span style="color:#7a9473">ἀγωγή</span> – leading, movement < <span style="color:#7a9473">εξ-</span> (out) + <span style="color:#7a9473">ἄγω</span> – to lead)',
        },
        qws: ["export"],
        transls: ["From the word Εξάγω — to export"],
        translation: "export",
        kind: "Nouns in -η from verbs",
        unicTransl: "to export",
        notice: "",
    },
    {
        word: "ευχή",
        base: "εύχομαι",
        groups: {
            morfology:
                '<em>ευχή </em>→ εύχ<span style="color: #b87333">ομαι</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">εὐχή</span> – prayer, wish < <span style="color:#7a9473">εὔχομαι</span> – to wish, pray)',
        },
        qws: ["wish"],
        transls: ["From the word Εύχομαι — to wish"],
        translation: "wish",
        kind: "Nouns in -η from verbs",
        unicTransl: "to wish",
        notice: "",
    },
    {
        word: "λύπη",
        base: "λυπάμαι",
        groups: {
            morfology:
                '<em>λύπη </em>→ λυπ<span style="color: #b87333">άμαι</span> +<span style="color: #b87333"> -η</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">λύπη</span>',
        },
        qws: ["sorrow, regret"],
        transls: ["From the word Λυπάμαι — to regret"],
        translation: "sorrow, regret",
        kind: "Nouns in -η from verbs",
        unicTransl: "to regret",
        notice: "",
    },
    {
        word: "περιγραφή",
        base: "περιγράφω",
        groups: {
            morfology:
                '<em>περιγραφή </em>→ περιγράφ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -η</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">περιγραφή</span> < <span style="color:#7a9473">περῐγρᾰφω</span> – to describe < <span style="color:#7a9473">περι-</span> (around) + <span style="color:#7a9473">γράφω</span> – to write)',
        },
        qws: ["description"],
        transls: ["From the word Περιγράφω — to describe"],
        translation: "description",
        kind: "Nouns in -η from verbs",
        unicTransl: "to describe",
        notice: "",
    },
    {
        word: "προσβολή",
        base: "προσβάλλω",
        groups: {
            morfology:
                '<em>προσβολή </em>→ προσβάλ<span style="color: #b87333">λω</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["insult"],
        transls: ["From the word Προσβάλλω — to insult"],
        translation: "insult",
        kind: "Nouns in -η from verbs",
        unicTransl: "to insult",
        notice: "",
    },
    {
        word: "συμμετοχή",
        base: "σημμετέχω",
        groups: {
            morfology:
                '<em>συμμετοχή </em>→ σημμετ<span style="color: #b87333">έχω</span> +<span style="color: #b87333"> -οχή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["participation"],
        transls: ["From the word Σημμετέχω — to participate"],
        translation: "participation",
        kind: "Nouns in -η from verbs",
        unicTransl: "to participate",
        notice: "",
    },
    {
        word: "σιωπή",
        base: "σιωπώ",
        groups: {
            morfology:
                '<em>σιωπή </em>→ σιωπ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["silence"],
        transls: ["From the word Σιωπώ — to be silent"],
        translation: "silence",
        kind: "Nouns in -η from verbs",
        unicTransl: "to be silent",
        notice: "",
    },
    {
        word: "στροφή",
        base: "στρίβω",
        groups: {
            morfology:
                '<em>στροφή </em>→ στρ<span style="color: #b87333">ίβω</span> +<span style="color: #b87333"> -οφή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["turn"],
        transls: ["From the word Στρίβω — to turn"],
        translation: "turn",
        kind: "Nouns in -η from verbs",
        unicTransl: "to turn",
        notice: "",
    },
    {
        word: "συλλογή",
        base: "συλλέγω",
        groups: {
            morfology:
                '<em>συλλογή </em>→ συλλ<span style="color: #b87333">έγω</span> +<span style="color: #b87333"> -ογή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["collection"],
        transls: ["From the word Συλλέγω — to collect"],
        translation: "collection",
        kind: "Nouns in -η from verbs",
        unicTransl: "to collect",
        notice: "",
    },
    {
        word: "συμβουλή",
        base: "συμβουλεύω",
        groups: {
            morfology:
                '<em>συμβουλή </em>→ συμβουλ<span style="color: #b87333">εύω</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["advice"],
        transls: ["From the word Συμβουλεύω — to advise"],
        translation: "advice",
        kind: "Nouns in -η from verbs",
        unicTransl: "to advise",
        notice: "",
    },
    {
        word: "υπογραφή",
        base: "υπογράφω",
        groups: {
            morfology:
                '<em>υπογραφή </em>→ υπογράφ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ὑπογραφή</span> < <span style="color:#7a9473">ὑπογράφω</span> – to sign < <span style="color:#7a9473">ὑπό-</span> (under) + <span style="color:#7a9473">γράφω</span> – to write)',
        },
        qws: ["signature"],
        transls: ["From the word Υπογράφω — to sign"],
        translation: "signature",
        kind: "Nouns in -η from verbs",
        unicTransl: "to sign",
        notice: "",
    },
    {
        word: "δέσιμο",
        base: "δένω",
        groups: {
            morfology:
                '<em>δέσιμο </em>→ δέ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -σιμο</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">δένω</span> – to tie, bind < Ancient Greek <span style="color:#7a9473">δέω</span>, <span style="color:#7a9473">δένω</span> – to tie.',
            aplication:
                "<br>Nouns in -σίμο, -ξίμω, -φίμω denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -μα are also formed.",
        },
        qws: ["tying, binding, bandaging"],
        transls: ["From the word Δένω — to tie, bind"],
        translation: "tying, binding, bandaging",
        kind: "Nouns in -σίμο, -ξίμω, -φίμω from verbs",
        unicTransl: "to tie, bind",
        notice: "Nouns in -σίμο, -ξίμω, -φίμω denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -μα are also formed.",
    },
    {
        word: "δάρσιμο",
        base: "δέρνω",
        groups: {
            morfology:
                '<em>δάρσιμο </em>→ δ<span style="color: #b87333">έρνω</span> +<span style="color: #b87333"> -άρσιμο</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">δέρνω</span> – to beat < Ancient Greek <span style="color:#7a9473">δέρω</span> – to flay, skin, thrash.',
            aplication:
                "<br>Nouns in -σίμο, -ξίμω, -φίμω denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -μα are also formed.",
        },
        qws: ["beating"],
        transls: ["From the word Δέρνω — to beat"],
        translation: "beating",
        kind: "Nouns in -σίμο, -ξίμω, -φίμω from verbs",
        unicTransl: "to beat",
        notice: "Nouns in -σίμο, -ξίμω, -φίμω denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -μα are also formed.",
    },
    {
        word: "σκάψιμο",
        base: "σκάβω",
        groups: {
            morfology:
                '<em>σκάψιμο </em>→ σκά<span style="color: #b87333">βω</span> +<span style="color: #b87333"> -ψιμο</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">σκάφτω, σκάβω</span> – to dig < Ancient Greek <span style="color:#7a9473">σκάπτω</span> – to dig.',
            aplication:
                "<br>Nouns in -σίμο, -ξίμω, -φίμω denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -μα are also formed.",
        },
        qws: ["digging"],
        transls: ["From the word Σκάβω — to dig"],
        translation: "digging",
        kind: "Nouns in -σίμο, -ξίμω, -φίμω from verbs",
        unicTransl: "to dig",
        notice: "Nouns in -σίμο, -ξίμω, -φίμω denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -μα are also formed.",
    },
    {
        word: "τρέξιμο",
        base: "τρέχω",
        groups: {
            morfology:
                '<em>τρέξιμο </em>→ τρέ<span style="color: #b87333">χω</span> +<span style="color: #b87333"> ξιμο</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">τρέξιμον</span> – beating < Ancient Greek <span style="color:#7a9473">τρέχω</span> – to run, flow.',
            aplication:
                "<br>Nouns in -σίμο, -ξίμω, -φίμω denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -μα are also formed.",
        },
        qws: ["running, flow"],
        transls: ["From the word Τρέχω — to run"],
        translation: "running, flow",
        kind: "Nouns in -σίμο, -ξίμω, -φίμω from verbs",
        unicTransl: "to run",
        notice: "Nouns in -σίμο, -ξίμω, -φίμω denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -μα are also formed.",
    },
    {
        word: "χάσιμο",
        base: "χάνω",
        groups: {
            morfology:
                '<em>χάσιμο </em>→ χά<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -σιμο</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">χάνω</span> < Ancient Greek <span style="color:#7a9473">χάνω</span> – to lose.',
            aplication:
                "<br>Nouns in -σίμο, -ξίμω, -φίμω denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -μα are also formed.",
        },
        qws: ["loss, defeat"],
        transls: ["From the word Χάνω — to lose"],
        translation: "loss, defeat",
        kind: "Nouns in -σίμο, -ξίμω, -φίμω from verbs",
        unicTransl: "to lose",
        notice: "Nouns in -σίμο, -ξίμω, -φίμω denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -μα are also formed.",
    },
    {
        word: "αγόρασμα",
        base: "αγοράζω",
        groups: {
            morfology:
                '<em>αγόρασμα </em>→ αγορά<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -σμα</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀγόρασμα</span> < <span style="color:#7a9473">ἀγοράζω</span> – to buy < <span style="color:#7a9473">ἀγορά</span> – assembly, goods)',
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["buying (process)"],
        transls: ["From the word Αγοράζω — to buy"],
        translation: "buying (process)",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to buy",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "γάυγισμα",
        base: "γαυγίζω",
        groups: {
            morfology:
                '<em>γάυγισμα </em>→ γαυγί<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -σμα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">γαυγίζω</span> – to bark < <span style="color:#7a9473">γαβ</span> – woof (onomatopoeia)',
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["barking"],
        transls: ["From the word Γαυγίζω — to bark"],
        translation: "barking",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to bark",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "δέμα",
        base: "δένω",
        groups: {
            morfology:
                '<em>δέμα </em>→ δέ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -μα</span>',
            etymology:
                '<br>From Koine Greek <span style="color:#7a9473">δέμα</span> < Ancient Greek <span style="color:#7a9473">δέω</span>, <span style="color:#7a9473">δένω</span> – to tie, bind.',
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["bundle, packet, lace, bandage"],
        transls: ["From the word Δένω — to tie, bind"],
        translation: "bundle, packet, lace, bandage",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to tie, bind",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "έμβασμα",
        base: "εμβάζω",
        groups: {
            morfology:
                '<em>έμβασμα </em>→ εμβά<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -σμα</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">εμβάζω</span> – to remit money < <span style="color:#7a9473">εμβιβάζω</span> – to put in, load, bring < <span style="color:#7a9473">εν-</span> (in) + <span style="color:#7a9473">βιβάζω</span> – to raise) < Ancient Greek <span style="color:#7a9473">βαίνω</span> – to go.',
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["money transfer"],
        transls: ["From the word Εμβάζω — to remit money"],
        translation: "money transfer",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to remit money",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "κάπνισμα",
        base: "καπνίζω",
        groups: {
            morfology:
                '<em>κάπνισμα </em>→ καπνί<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -σμα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">καπνίζω</span> – to smoke < Ancient Greek <span style="color:#7a9473">καπνός</span> – smoke.',
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["smoking"],
        transls: ["From the word Καπνίζω — to smoke"],
        translation: "smoking",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to smoke",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "κέντημα",
        base: "κεντώ",
        groups: {
            morfology:
                '<em>κέντημα </em>→ κεντ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ημα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["embroidery"],
        transls: ["From the word Κεντώ — to embroider"],
        translation: "embroidery",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to embroider",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "κουδούνισμα",
        base: "κουδουνίζω",
        groups: {
            morfology:
                '<em>κουδούνισμα </em>→ κουδουνί<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -σμα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["ringing"],
        transls: ["From the word Κουδουνίζω — to ring, jingle"],
        translation: "ringing",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to ring, jingle",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "κρυολόγημα",
        base: "κρυολογώ",
        groups: {
            morfology:
                '<em>κρυολόγημα </em>→ κρυολογ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ημα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["cold (illness)"],
        transls: ["From the word Κρυολογώ — to catch a cold"],
        translation: "cold (illness)",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to catch a cold",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "λίπασμα",
        base: "λιπαίνω",
        groups: {
            morfology:
                '<em>λίπασμα </em>→ λιπ<span style="color: #b87333">αίνω</span> +<span style="color: #b87333"> -ασμα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["fertiliser (substance)"],
        transls: ["From the word Λιπαίνω — to fertilise, grease"],
        translation: "fertiliser (substance)",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to fertilise, grease",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "μαύρισμα",
        base: "μαυρίζω",
        groups: {
            morfology:
                '<em>μαύρισμα </em>→ μαυρί<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -σμα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["tan"],
        transls: ["From the word Μαυρίζω — to tan"],
        translation: "tan",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to tan",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "μήνυμα",
        base: "μηνώ",
        groups: {
            morfology:
                '<em>μήνυμα </em>→ μην<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -υμα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["message, summons"],
        transls: ["From the word Μηνώ — to notify, summon"],
        translation: "message, summons",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to notify, summon",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "πέταμα",
        base: "πετώ",
        groups: {
            morfology:
                '<em>πέταμα </em>→ πετώ +<span style="color: #b87333"> -αμα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["flight, throwing, discarding"],
        transls: ["From the word Πετώ — to fly, throw"],
        translation: "flight, throwing, discarding",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to fly, throw",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "ποίημα",
        base: "ποιώ",
        groups: {
            morfology:
                '<em>ποίημα </em>→ ποι<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ημα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ποιώ</span> – to make, create < Ancient Greek <span style="color:#7a9473">ποιέω</span>, <span style="color:#7a9473">ποιῶ</span>.',
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["poem"],
        transls: ["From the word Ποιώ — to create, make"],
        translation: "poem",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to create, make",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "πότισμα",
        base: "ποτίζω",
        groups: {
            morfology:
                '<em>πότισμα </em>→ ποτί<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -σμα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["watering"],
        transls: ["From the word Ποτίζω — to water"],
        translation: "watering",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to water",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "σφράγισμα",
        base: "σφραγίζω",
        groups: {
            morfology:
                '<em>σφράγισμα </em>→ σφραγί<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -σμα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["filling (dental), seal"],
        transls: ["From the word Σφραγίζω — to seal, fill (a tooth)"],
        translation: "filling (dental), seal",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to seal, fill (a tooth)",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "τραγούδησμα",
        base: "τραγουδώ",
        groups: {
            morfology:
                '<em>τραγούδησμα </em>→ τραγουδ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ησμα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["singing"],
        transls: ["From the word Τραγουδώ — to sing"],
        translation: "singing",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to sing",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "φόρτωμα",
        base: "φορτώνω",
        groups: {
            morfology:
                '<em>φόρτωμα </em>→ φορτώ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -μα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["load, burden, annoyance"],
        transls: ["From the word Φορτώνω — to load"],
        translation: "load, burden, annoyance",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to load",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "ψάρεμα",
        base: "ψαρεύω",
        groups: {
            morfology:
                '<em>ψάρεμα </em>→ ψαρε<span style="color: #b87333">ύω</span> +<span style="color: #b87333"> -μα</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">ψάρεμα</span> < <span style="color:#7a9473">ψάρευμα</span> < <span style="color:#7a9473">ψαρεύω</span> – to fish) < Ancient Greek <span style="color:#7a9473">ὀψάριον</span> – delicacy < <span style="color:#7a9473">ὄψον</span> – delicacy).',
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["fishing"],
        transls: ["From the word Ψαρεύω — to fish"],
        translation: "fishing",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to fish",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "ψιθύρισμα",
        base: "ψιθυρίζω",
        groups: {
            morfology:
                '<em>ψιθύρισμα </em>→ ψιθυρί<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -σμα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
        },
        qws: ["whisper"],
        transls: ["From the word Ψιθυρίζω — to whisper"],
        translation: "whisper",
        kind: "Nouns in -μα from verbs",
        unicTransl: "to whisper",
        notice: "Nouns in -μα denote an action (process) or its result and are formed from verbs. With the same meaning, nouns in -μός, -ισμος, in -ση, -ηση (-ξη,-φη), -φίμω and in -σίμο, -ξίμω, -φίμω are also formed.",
    },
    {
        word: "σκουπίδι",
        base: "σκουπίζω",
        groups: {
            morfology:
                '<em>σκουπίδι </em>→ σκουπ<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -ίδι</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["rubbish"],
        transls: ["From the word Σκουπίζω — to sweep, wipe"],
        translation: "rubbish",
        kind: "Nouns in -ίδι from verbs",
        unicTransl: "to sweep, wipe",
        notice: "",
    },
    {
        word: "στολίδι",
        base: "στολίζω",
        groups: {
            morfology:
                '<em>στολίδι </em>→ στολ<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -ίδι</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["ornament, decoration"],
        transls: ["From the word Στολίζω — to decorate"],
        translation: "ornament, decoration",
        kind: "Nouns in -ίδι from verbs",
        unicTransl: "to decorate",
        notice: "",
    },
    {
        word: "τρεξίδι",
        base: "τρέχω, έτρεξα",
        groups: {
            morfology:
                '<em>τρεξίδι </em>→ τρέχω, έτρεξ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ίδι</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["run, running"],
        transls: ["From the word Τρέχω, έτρεξα — to run"],
        translation: "run, running",
        kind: "Nouns in -ίδι from verbs",
        unicTransl: "to run",
        notice: "",
    },
    {
        word: "βογκητό",
        base: "βογκώ",
        groups: {
            morfology:
                '<em>βογκητό </em>→ βογκ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ητό</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["moan, groan"],
        transls: ["From the word Βογκώ — to groan"],
        translation: "moan, groan",
        kind: "Nouns in -ητό from verbs",
        unicTransl: "to groan",
        notice: "",
    },
    {
        word: "ξεφωνητό",
        base: "ξεφωνίζω",
        groups: {
            morfology:
                '<em>ξεφωνητό </em>→ ξεφων<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -ητό</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["shout, cry"],
        transls: ["From the word Ξεφωνίζω — to shout"],
        translation: "shout, cry",
        kind: "Nouns in -ητό from verbs",
        unicTransl: "to shout",
        notice: "",
    },
    {
        word: "παραμιλητό",
        base: "παραμιλώ",
        groups: {
            morfology:
                '<em>παραμιλητό </em>→ παραμιλ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ητό</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["delirium, rambling"],
        transls: ["From the word Παραμιλώ — to talk nonsense"],
        translation: "delirium, rambling",
        kind: "Nouns in -ητό from verbs",
        unicTransl: "to talk nonsense",
        notice: "",
    },
    {
        word: "κλεισούρα",
        base: "κλείνω",
        groups: {
            morfology:
                '<em>κλεισούρα </em>→ κλεί<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -σούρα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["narrow pass, gorge"],
        transls: ["From the word Κλείνω — to close, lock"],
        translation: "narrow pass, gorge",
        kind: "Nouns in -ούρα from verbs",
        unicTransl: "to close, lock",
        notice: "",
    },
    {
        word: "απεργός",
        base: "απεργώ",
        groups: {
            morfology:
                '<em>απεργός </em>→ απεργ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["striker"],
        transls: ["From the word Απεργώ — to strike"],
        translation: "striker",
        kind: "Nouns in -ος, -ί, -ιο from verbs",
        unicTransl: "to strike",
        notice: "",
    },
    {
        word: "βοσκός",
        base: "βόσκω",
        groups: {
            morfology:
                '<em>βοσκός </em>→ βόσκ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ος</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">βοσκός</span> < <span style="color:#7a9473">βόσκω</span> — to graze)',
        },
        qws: ["shepherd"],
        transls: ["From the word Βόσκω — to graze"],
        translation: "shepherd",
        kind: "Nouns in -ος, -ί, -ιο from verbs",
        unicTransl: "to graze",
        notice: "",
    },
    {
        word: "κόστος",
        base: "κοστίζω",
        groups: {
            morfology:
                '<em>κόστος </em>→ κοστ<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -ος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["cost, price"],
        transls: ["From the word Κοστίζω — to cost"],
        translation: "cost, price",
        kind: "Nouns in -ος, -ί, -ιο from verbs",
        unicTransl: "to cost",
        notice: "",
    },
    {
        word: "σημμέτοχος",
        base: "σημμετέχω",
        groups: {
            morfology:
                '<em>σημμέτοχος </em>→ σημμετ<span style="color: #b87333">έχω</span> +<span style="color: #b87333"> -οχος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["participant"],
        transls: ["From the word Σημμετέχω — to participate"],
        translation: "participant",
        kind: "Nouns in -ος, -ί, -ιο from verbs",
        unicTransl: "to participate",
        notice: "",
    },
    {
        word: "γέλιο",
        base: "γελώ",
        groups: {
            morfology:
                '<em>γέλιο </em>→ γελ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ιο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["laughter"],
        transls: ["From the word Γελώ — to laugh"],
        translation: "laughter",
        kind: "Nouns in -ος, -ί, -ιο from verbs",
        unicTransl: "to laugh",
        notice: "",
    },
    {
        word: "ζυγί",
        base: "ζυγιάζω",
        groups: {
            morfology:
                '<em>ζυγί </em>→ ζυγ<span style="color: #b87333">ιάζω</span> +<span style="color: #b87333"> -ί</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["weight, heaviness, scale"],
        transls: ["From the word Ζυγιάζω — to weigh"],
        translation: "weight, heaviness, scale",
        kind: "Nouns in -ος, -ί, -ιο from verbs",
        unicTransl: "to weigh",
        notice: "",
    },
    {
        word: "κολύμπι",
        base: "κολυμπώ",
        groups: {
            morfology:
                '<em>κολύμπι </em>→ κολυμπ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ι</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["swimming"],
        transls: ["From the word Κολυμπώ — to swim"],
        translation: "swimming",
        kind: "Nouns in -ος, -ί, -ιο from verbs",
        unicTransl: "to swim",
        notice: "",
    },
    {
        word: "λουτρός / λουτρό",
        base: "λούζω",
        groups: {
            morfology:
                '<em>λουτρός </em>→ λού<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -ός</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">λουτρόν</span> – bath, <span style="color:#7a9473">λούω</span> – to wash)',
        },
        qws: ["bath"],
        transls: ["From the word Λούζω — to wash"],
        translation: "bath",
        kind: "Nouns in -ος, -ί, -ιο from verbs",
        unicTransl: "to wash",
        notice: "",
    },
    {
        word: "τραγούδι",
        base: "τραγουδώ",
        groups: {
            morfology:
                '<em>τραγούδι </em>→ τραγουδ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ι</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["song"],
        transls: ["From the word Τραγουδώ — to sing"],
        translation: "song",
        kind: "Nouns in -ος, -ί, -ιο from verbs",
        unicTransl: "to sing",
        notice: "",
    },
    {
        word: "ανάσα",
        base: "ανασαίνω",
        groups: {
            morfology:
                '<em>ανάσα </em>→ ανασ<span style="color: #b87333">αίνω</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["breath"],
        transls: ["From the word Ανασαίνω — to breathe"],
        translation: "breath",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to breathe",
        notice: "",
    },
    {
        word: "πάστρα",
        base: "παστρεύω",
        groups: {
            morfology:
                '<em>πάστρα </em>→ παστρ<span style="color: #b87333">εύω</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["cleanliness, neatness"],
        transls: ["From the word Παστρεύω — to clean"],
        translation: "cleanliness, neatness",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to clean",
        notice: "",
    },
    {
        word: "γιατρειά",
        base: "γιατρεύω",
        groups: {
            morfology:
                '<em>γιατρειά </em>→ γιατρ<span style="color: #b87333">εύω</span> +<span style="color: #b87333"> -εια</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["medical treatment"],
        transls: ["From the word Γιατρεύω — to treat"],
        translation: "medical treatment",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to treat",
        notice: "",
    },
    {
        word: "δουλειά",
        base: "δουλεύω",
        groups: {
            morfology:
                '<em>δουλειά </em>→ δουλ<span style="color: #b87333">εύω</span> +<span style="color: #b87333"> -ειά</span>',
            etymology:
                '<br>From Koine Greek (<span style="color:#7a9473">δουλεία</span> – work, slavery < <span style="color:#7a9473">δουλεύω</span> – to be a slave, serve) < Ancient Greek (<span style="color:#7a9473">δουλόω</span> – to enslave < <span style="color:#7a9473">δοῦλος</span> – slave)',
        },
        qws: ["work"],
        transls: ["From the word Δουλεύω — to work"],
        translation: "work",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to work",
        notice: "",
    },
    {
        word: "ζωγραφιά",
        base: "ζωγραφίζω",
        groups: {
            morfology:
                '<em>ζωγραφιά </em>→ ζωγράφ<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">ζωγραφιά</span> < Ancient Greek (<span style="color:#7a9473">ζωγραφία</span> < <span style="color:#7a9473">ζωγράφος</span> – painter < <span style="color:#7a9473">ζωός</span> (alive) or <span style="color:#7a9473">ζωή</span> (life) + <span style="color:#7a9473">γράφος</span> – writer < <span style="color:#7a9473">γράφω</span> – to write)',
        },
        qws: ["painting, picture"],
        transls: ["From the word Ζωγραφίζω — to draw, paint"],
        translation: "painting, picture",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to draw, paint",
        notice: "",
    },
    {
        word: "θεραπεία",
        base: "θεραπεύω",
        groups: {
            morfology:
                '<em>θεραπεία </em>→ θεραπ<span style="color: #b87333">εύω</span> +<span style="color: #b87333"> -εία</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">θεραπεία</span> < <span style="color:#7a9473">θεραπεύω</span> – to treat, care for < <span style="color:#7a9473">θεράπων</span> – attendant, servant)',
        },
        qws: ["therapy, care, treatment"],
        transls: ["From the word Θεραπεύω — to treat, care for"],
        translation: "therapy, care, treatment",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to treat, care for",
        notice: "",
    },
    {
        word: "καλλιέργεια",
        base: "καλλιεργώ",
        groups: {
            morfology:
                '<em>καλλιέργεια </em>→ καλλιέργ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -εια</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">καλλιέργεια</span> < Koine Greek (<span style="color:#7a9473">καλλιεργεία</span> < <span style="color:#7a9473">καλλιεργώ</span>, <span style="color:#7a9473">καλλιεργέω</span> – to cultivate) < Ancient Greek <span style="color:#7a9473">κάλλος</span> (beauty) + <span style="color:#7a9473">ἔργον</span> – work, deed, action.',
        },
        qws: ["cultivation, farming, diligent pursuit"],
        transls: ["From the word Καλλιέργω — to cultivate"],
        translation: "cultivation, farming, diligent pursuit",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to cultivate",
        notice: "",
    },
    {
        word: "λατρεία",
        base: "λατρεύω",
        groups: {
            morfology:
                '<em>λατρεία </em>→ λατρ<span style="color: #b87333">εύω</span> +<span style="color: #b87333"> -εία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["adoration, worship"],
        transls: ["From the word Λατρεύω — to adore, worship"],
        translation: "adoration, worship",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to adore, worship",
        notice: "",
    },
    {
        word: "προσπάθεια",
        base: "προσπαθώ",
        groups: {
            morfology:
                '<em>προσπάθεια </em>→ προσπαθ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -εια</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["effort, exertion"],
        transls: ["From the word Προσπαθώ — to try, strive"],
        translation: "effort, exertion",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to try, strive",
        notice: "",
    },
    {
        word: "ωφέλεια",
        base: "ωφελώ",
        groups: {
            morfology:
                '<em>ωφέλεια </em>→ ωφελ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -εια</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["benefit, profit, advantage"],
        transls: ["From the word Ωφελώ — to benefit, help"],
        translation: "benefit, profit, advantage",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to benefit, help",
        notice: "",
    },
    {
        word: "αλληλογραφία",
        base: "αλληλογραφώ",
        groups: {
            morfology:
                '<em>αλληλογραφία </em>→ αλληλογραφ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">αλληλο-</span> (mutual) + <span style="color:#7a9473">γραφία</span>, <span style="color:#7a9473">γραφή</span> – writing < <span style="color:#7a9473">γράφω</span> – to write) < Ancient Greek <span style="color:#7a9473">γράφω</span> – to write, draw.',
        },
        qws: ["correspondence"],
        transls: ["From the word Αλληλογραφώ — to correspond"],
        translation: "correspondence",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to correspond",
        notice: "",
    },
    {
        word: "ανησυχία",
        base: "ανησυχώ",
        groups: {
            morfology:
                '<em>ανησυχία </em>→ ανησυχ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ανήσυχος</span> – anxious, worried < Ancient Greek (<span style="color:#7a9473">ἀνήσυχος</span> < <span style="color:#7a9473">ἀν-</span> / <span style="color:#7a9473">ἀ-</span> (negation) + <span style="color:#7a9473">ἥσυχος</span> – quiet, calm)',
        },
        qws: ["anxiety, worry"],
        transls: ["From the word Ανησυχώ — to worry"],
        translation: "anxiety, worry",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to worry",
        notice: "",
    },
    {
        word: "απατία",
        base: "απατώ",
        groups: {
            morfology:
                '<em>απατία </em>→ απατ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["betrayal"],
        transls: ["From the word Απατώ — to betray"],
        translation: "betrayal",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to betray",
        notice: "",
    },
    {
        word: "απεργία",
        base: "απεργώ",
        groups: {
            morfology:
                '<em>απεργία </em>→ απεργ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">απεργός</span> – striker < Ancient Greek <span style="color:#7a9473">απο-</span> (separation, division, removal) + <span style="color:#7a9473">ἔργον</span> – work, labour.',
        },
        qws: ["strike"],
        transls: ["From the word Απεργώ — to strike"],
        translation: "strike",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to strike",
        notice: "",
    },
    {
        word: "απουσία",
        base: "απουσιάζω",
        groups: {
            morfology:
                '<em>απουσία </em>→ απουσ<span style="color: #b87333">ιάζω</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["absence"],
        transls: ["From the word Απουσιάζω — to be absent"],
        translation: "absence",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to be absent",
        notice: "",
    },
    {
        word: "δωροδοκία",
        base: "δωροδοκώ",
        groups: {
            morfology:
                '<em>δωροδοκία </em>→ δωροδοκ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["bribery"],
        transls: ["From the word Δωροδοκώ — to bribe"],
        translation: "bribery",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to bribe",
        notice: "",
    },
    {
        word: "επικοινωνία",
        base: "επικοινωνώ",
        groups: {
            morfology:
                '<em>επικοινωνία </em>→ επικοινων<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["communication"],
        transls: ["From the word Επικοινωνώ — to communicate"],
        translation: "communication",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to communicate",
        notice: "",
    },
    {
        word: "κατηγορία",
        base: "κατηγορώ",
        groups: {
            morfology:
                '<em>κατηγορία </em>→ κατηγορ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["accusation"],
        transls: ["From the word Κατηγορώ — to accuse"],
        translation: "accusation",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to accuse",
        notice: "",
    },
    {
        word: "λιποθυμία",
        base: "λιποθυμώ",
        groups: {
            morfology:
                '<em>λιποθυμία </em>→ λιποθυμ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["fainting"],
        transls: ["From the word Λιποθυμώ — to faint"],
        translation: "fainting",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to faint",
        notice: "",
    },
    {
        word: "προστασία",
        base: "προστατεύω",
        groups: {
            morfology:
                '<em>προστασία </em>→ προστ<span style="color: #b87333">ατεύω</span> +<span style="color: #b87333"> -ασία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["protection"],
        transls: ["From the word Προστατεύω — to protect"],
        translation: "protection",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to protect",
        notice: "",
    },
    {
        word: "συσκευασία",
        base: "συσκευάζω",
        groups: {
            morfology:
                '<em>συσκευασία </em>→ συσκευ<span style="color: #b87333">άζω</span> +<span style="color: #b87333"> -ασία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["packaging (action)"],
        transls: ["From the word Συσκευάζω — to pack"],
        translation: "packaging (action)",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to pack",
        notice: "",
    },
    {
        word: "τιμωρία",
        base: "τιμωρώ",
        groups: {
            morfology:
                '<em>τιμωρία </em>→ τιμωρ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["punishment"],
        transls: ["From the word Τιμωρώ — to punish"],
        translation: "punishment",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to punish",
        notice: "",
    },
    {
        word: "τοποθεσία",
        base: "τοποθετώ",
        groups: {
            morfology:
                '<em>τοποθεσία </em>→ τοποθ<span style="color: #b87333">ετώ</span> +<span style="color: #b87333"> -εσία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["location, position"],
        transls: ["From the word Τοποθετώ — to position"],
        translation: "location, position",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to position",
        notice: "",
    },
    {
        word: "χρεοκοπία",
        base: "χρεοκοπώ",
        groups: {
            morfology:
                '<em>χρεοκοπία </em>→ χρεοκοπ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["bankruptcy"],
        transls: ["From the word Χρεοκοπώ — to go bankrupt"],
        translation: "bankruptcy",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to go bankrupt",
        notice: "",
    },
    {
        word: "χρεοκοπία",
        base: "χρεοκοπώ",
        groups: {
            morfology:
                '<em>χρεοκοπία </em>→ χρεοκοπ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["bankruptcy"],
        transls: ["From the word Χρεοκοπώ — to go bankrupt"],
        translation: "bankruptcy",
        kind: "Nouns in -α, -εια, -ια from verbs",
        unicTransl: "to go bankrupt",
        notice: "",
    },
    {
        word: "εισπράκτορας",
        base: "εισπράττω",
        groups: {
            morfology:
                '<em>εισπράκτορας </em>→ εισπρ<span style="color: #b87333">άττω</span> +<span style="color: #b87333"> -άκτορας</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -(ά)τορας denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -έας, -ιάς are also formed.",
        },
        qws: ["transport conductor"],
        transls: ["From the word Εισπράττω — to collect (fares)"],
        translation: "transport conductor",
        kind: "Nouns in -(ά)τορας from verbs",
        unicTransl: "to collect (fares)",
        notice: "Nouns in -(ά)τορας denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -έας, -ιάς are also formed.",
    },
    {
        word: "συμβουλάτορας",
        base: "συμβουλεύω",
        groups: {
            morfology:
                '<em>συμβουλάτορας </em>→ συμβουλ<span style="color: #b87333">εύω</span> +<span style="color: #b87333"> -άτορας</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -(ά)τορας denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -έας, -ιάς are also formed.",
        },
        qws: ["adviser"],
        transls: ["From the word Συμβουλεύω — to advise"],
        translation: "adviser",
        kind: "Nouns in -(ά)τορας from verbs",
        unicTransl: "to advise",
        notice: "Nouns in -(ά)τορας denote the doer of an action and are formed from verbs. With the same meaning, nouns in -της, -ιστης, -ότης and -έας, -ιάς are also formed.",
    },
    {
        word: "αναπτήρας",
        base: "ανάβω, ανάπτω",
        groups: {
            morfology:
                '<em>αναπτήρας </em>→ ανάπτ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -τήρας</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ανάβω</span>, <span style="color:#7a9473">ανάπτω</span> – to light < Medieval Greek <span style="color:#7a9473">ἀνάβω</span> < Ancient Greek <span style="color:#7a9473">ἀνάπτω</span> < <span style="color:#7a9473">ἀνά</span> + <span style="color:#7a9473">ἅπτω</span> – to fasten',
            aplication:
                "<br>Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
        },
        qws: ["lighter"],
        transls: ["From the word Ανάπτω, ανάβω — to light"],
        translation: "lighter",
        kind: "Nouns in -τήρας, -τήρι from verbs",
        unicTransl: "to light",
        notice: "Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
    },
    {
        word: "καταβρεχτήρας",
        base: "καταβρέχω",
        groups: {
            morfology:
                '<em>καταβρεχτήρας </em>→ καταβρέχ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -τήρας</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">καταβρέχω</span> – to sprinkle < Ancient Greek (<span style="color:#7a9473">καταβρέχω</span> < <span style="color:#7a9473">κατά</span> + <span style="color:#7a9473">βρέχω</span> – to wet)',
            aplication:
                "<br>Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
        },
        qws: ["sprinkler, watering machine"],
        transls: ["From the word Καταβρέχω — to sprinkle, wet"],
        translation: "sprinkler, watering machine",
        kind: "Nouns in -τήρας, -τήρι from verbs",
        unicTransl: "to sprinkle, wet",
        notice: "Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
    },
    {
        word: "κινητήρας",
        base: "κινώ",
        groups: {
            morfology:
                '<em>κινητήρας </em>→ κιν<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ητήρας</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">κινητήρ</span> – mover',
            aplication:
                "<br>Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
        },
        qws: ["engine"],
        transls: ["From the word Κινώ — to move"],
        translation: "engine",
        kind: "Nouns in -τήρας, -τήρι from verbs",
        unicTransl: "to move",
        notice: "Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
    },
    {
        word: "ξυπνητήρι",
        base: "ξυπνώ",
        groups: {
            morfology:
                '<em>ξυπνητήρι </em>→ ξυπν<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ητήρι</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">ξύπνημα</span> – awakening < <span style="color:#7a9473">ξυπνώ</span> – to wake) < Medieval Greek (<span style="color:#7a9473">ξυπνῶ</span> < <span style="color:#7a9473">ἔξυπνος</span> – awake) < Ancient Greek <span style="color:#7a9473">ὕπνος</span> – sleep',
            aplication:
                "<br>Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
        },
        qws: ["alarm clock"],
        transls: ["From the word Ξυπνώ — to wake"],
        translation: "alarm clock",
        kind: "Nouns in -τήρας, -τήρι from verbs",
        unicTransl: "to wake",
        notice: "Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
    },
    {
        word: "ποτήρι",
        base: "ποτίζω",
        groups: {
            morfology:
                '<em>ποτήρι </em>→ πο<span style="color: #b87333">τίζω</span> +<span style="color: #b87333"> -τήρι</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">ποτήρ</span>, <span style="color:#7a9473">ποτήριον</span> < Ancient Greek (<span style="color:#7a9473">ποτήριον</span> – small cup < <span style="color:#7a9473">ποτήρ</span> – cup < <span style="color:#7a9473">πίνω</span> – to drink)',
            aplication:
                "<br>Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
        },
        qws: ["glass"],
        transls: ["From the word Ποτίζω — to water, give a drink"],
        translation: "glass",
        kind: "Nouns in -τήρας, -τήρι from verbs",
        unicTransl: "to water, give a drink",
        notice: "Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
    },
    {
        word: "ποτιστήρι",
        base: "ποτίζω",
        groups: {
            morfology:
                '<em>ποτιστήρι </em>→ ποτί<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -στήρι</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">ποτιστήριν</span> < Ancient Greek (<span style="color:#7a9473">ποτίζω</span> — to water < <span style="color:#7a9473">πότος</span> – drink)',
            aplication:
                "<br>Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
        },
        qws: ["watering can"],
        transls: ["From the word Ποτίζω — to water"],
        translation: "watering can",
        kind: "Nouns in -τήρας, -τήρι from verbs",
        unicTransl: "to water",
        notice: "Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
    },
    {
        word: "σκαλιστήρι",
        base: "σκαλίζω",
        groups: {
            morfology:
                '<em>σκαλιστήρι </em>→ σκαλί<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -στήρας</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">σκαλιστήριον</span> < <span style="color:#7a9473">σκαλίζω</span> — to hoe, weed) < Ancient Greek <span style="color:#7a9473">σκάλλω</span> – to dig, hoe',
            aplication:
                "<br>Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
        },
        qws: ["hoe, chisel"],
        transls: ["From the word Σκαλίζω — to dig, scrape, carve"],
        translation: "hoe, chisel",
        kind: "Nouns in -τήρας, -τήρι from verbs",
        unicTransl: "to dig, scrape, carve",
        notice: "Nouns in -τήρας, -τήρι denote devices, tools, and are formed mainly from verbs.",
    },
    {
        word: "βασανιστήριο",
        base: "βασανίζω",
        groups: {
            morfology:
                '<em>βασανιστήριο </em>→ βασανί<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -στήριο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["torture"],
        transls: ["From the word Βασανίζω — to torture"],
        translation: "torture",
        kind: "Nouns in -τήριο from verbs",
        unicTransl: "to torture",
        notice: "",
    },
    {
        word: "γυναστήριο",
        base: "γυμνάζω",
        groups: {
            morfology:
                '<em>γυναστήριο </em>→ γυμνά<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -στήριο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["gymnasium"],
        transls: ["From the word Γυμνάζω — to train"],
        translation: "gymnasium",
        kind: "Nouns in -τήριο from verbs",
        unicTransl: "to train",
        notice: "",
    },
    {
        word: "δικαστήριο",
        base: "δικάζω",
        groups: {
            morfology:
                '<em>δικαστήριο </em>→ δικά(ζω) +<span style="color: #b87333"> -στήριο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["court (building, institution)"],
        transls: ["From the word Δικάζω — to judge, sentence"],
        translation: "court (building, institution)",
        kind: "Nouns in -τήριο from verbs",
        unicTransl: "to judge, sentence",
        notice: "",
    },
    {
        word: "εκπαιδευτήριο",
        base: "εκπαιδεύω",
        groups: {
            morfology:
                '<em>εκπαιδευτήριο </em>→ εκπαιδεύ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -τήριο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["school, educational institution"],
        transls: ["From the word Εκπαιδεύω — to educate"],
        translation: "school, educational institution",
        kind: "Nouns in -τήριο from verbs",
        unicTransl: "to educate",
        notice: "",
    },
    {
        word: "επισκεπτήριο",
        base: "επισκέπτομαι",
        groups: {
            morfology:
                '<em>επισκεπτήριο </em>→ επισκέπτ<span style="color: #b87333">ομαι</span> +<span style="color: #b87333"> -ήριο</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἐπισκέπτομαι</span> — to visit < <span style="color:#7a9473">σκέπτομαι</span> – to look, observe).',
        },
        qws: ["visiting card"],
        transls: ["From the word Επισκέπτομαι — to visit"],
        translation: "visiting card",
        kind: "Nouns in -τήριο from verbs",
        unicTransl: "to visit",
        notice: "",
    },
    {
        word: "καμπαναριό",
        base: "καμπάνα",
        groups: {
            morfology:
                '<em>καμπαναριό </em>→ καμπάν<span style="color: #b87333">α</span> +<span style="color: #b87333"> -αριό</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -αριό denote a place (territory) and are formed from nouns. With the same meaning, nouns in -άδικο, -ίδικο and -είο, -ιο are also formed.",
        },
        qws: ["bell tower"],
        transls: ["From the word Καμπάνα — bell"],
        translation: "bell tower",
        kind: "Nouns in -αριό from nouns",
        unicTransl: "bell",
        notice: "Nouns in -αριό denote a place (territory) and are formed from nouns. With the same meaning, nouns in -άδικο, -ίδικο and -είο, -ιο are also formed.",
    },
    {
        word: "πλυσταριό",
        base: "πλύστρα",
        groups: {
            morfology:
                '<em>πλυσταριό </em>→ πλύστ<span style="color: #b87333">ρα</span> +<span style="color: #b87333"> -αριό</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -αριό denote a place (territory) and are formed from nouns. With the same meaning, nouns in -άδικο, -ίδικο and -είο, -ιο are also formed.",
        },
        qws: ["laundry (place)"],
        transls: ["From the word Πλύστρα — washerwoman"],
        translation: "laundry (place)",
        kind: "Nouns in -αριό from nouns",
        unicTransl: "washerwoman",
        notice: "Nouns in -αριό denote a place (territory) and are formed from nouns. With the same meaning, nouns in -άδικο, -ίδικο and -είο, -ιο are also formed.",
    },
    {
        word: "σκουπιδαριό",
        base: "σκουπίδι",
        groups: {
            morfology:
                '<em>σκουπιδαριό </em>→ σκουπίδ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -αριό</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -αριό denote a place (territory) and are formed from nouns. With the same meaning, nouns in -άδικο, -ίδικο and -είο, -ιο are also formed.",
        },
        qws: ["rubbish dump"],
        transls: ["From the word Σκουπίδι — rubbish"],
        translation: "rubbish dump",
        kind: "Nouns in -αριό from nouns",
        unicTransl: "rubbish",
        notice: "Nouns in -αριό denote a place (territory) and are formed from nouns. With the same meaning, nouns in -άδικο, -ίδικο and -είο, -ιο are also formed.",
    },
    {
        word: "ασβεστάδικο",
        base: "ασβεστάς",
        groups: {
            morfology:
                '<em>ασβεστάδικο </em>→ ασβεστ<span style="color: #b87333">άς</span> +<span style="color: #b87333"> -άδικο</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">ασβεστάς</span> – lime seller; owner of a lime kiln < <span style="color:#7a9473">ασβέστης</span> – lime) < Medieval Greek (<span style="color:#7a9473">ασβέστης</span> – lime < <span style="color:#7a9473">ασβέστιν</span> – diminutive of lime) < Ancient Greek (<span style="color:#7a9473">ἄσβεστος</span> – unslaked; lime < Medieval Greek <span style="color:#7a9473">ἀ-</span> (negation) + <span style="color:#7a9473">σβέννυμι</span> – to quench)',
            aplication:
                "<br>Nouns in -άδικο, -ίδικο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -είο, -ιο are also formed.",
        },
        qws: ["lime kiln"],
        transls: ["From the word Ασβεστάς — lime seller; owner of a lime kiln"],
        translation: "lime kiln",
        kind: "Nouns in -άδικο, -ίδικο from nouns",
        unicTransl: "lime seller; owner of a lime kiln",
        notice: "Nouns in -άδικο, -ίδικο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -είο, -ιο are also formed.",
    },
    {
        word: "γαλατάδικο",
        base: "γαλατάς",
        groups: {
            morfology:
                '<em>γαλατάδικο </em>→ γαλατ<span style="color: #b87333">άς</span> +<span style="color: #b87333"> -άδικο</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">γαλατάς</span> – milkman < <span style="color:#7a9473">γάλα</span> – milk) < Ancient Greek <span style="color:#7a9473">γάλα</span> – milk.',
            aplication:
                "<br>Nouns in -άδικο, -ίδικο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -είο, -ιο are also formed.",
        },
        qws: ["dairy shop"],
        transls: ["From the word Γαλατάς — milkman"],
        translation: "dairy shop",
        kind: "Nouns in -άδικο, -ίδικο from nouns",
        unicTransl: "milkman",
        notice: "Nouns in -άδικο, -ίδικο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -είο, -ιο are also formed.",
    },
    {
        word: "παλιατζίδικο",
        base: "παλιατζής",
        groups: {
            morfology:
                '<em>παλιατζίδικο </em>→ παλιατζ<span style="color: #b87333">ής</span> +<span style="color: #b87333"> -ίδικο</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">παλιατζής</span> – second-hand dealer < <span style="color:#7a9473">παλιός</span> – old) < Medieval Greek <span style="color:#7a9473">παλιός</span> – old < Ancient Greek (<span style="color:#7a9473">παλαιός</span> – old < <span style="color:#7a9473">πάλαι</span> – long ago)',
            aplication:
                "<br>Nouns in -άδικο, -ίδικο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -είο, -ιο are also formed.",
        },
        qws: ["second-hand shop"],
        transls: ["From the word Παλιατζής — second-hand dealer"],
        translation: "second-hand shop",
        kind: "Nouns in -άδικο, -ίδικο from nouns",
        unicTransl: "second-hand dealer",
        notice: "Nouns in -άδικο, -ίδικο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -είο, -ιο are also formed.",
    },
    {
        word: "ραφτάδικο",
        base: "ράφτης",
        groups: {
            morfology:
                '<em>ραφτάδικο </em>→ ράφτ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -άδικο</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ράφτης</span> – tailor < Medieval Greek <span style="color:#7a9473">ράφτης</span> – tailor < <span style="color:#7a9473">ράπτω</span>, <span style="color:#7a9473">ράβω</span> – to sew) < Ancient Greek <span style="color:#7a9473">ῥάπτω</span> – to sew.',
            aplication:
                "<br>Nouns in -άδικο, -ίδικο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -είο, -ιο are also formed.",
        },
        qws: ["tailor's shop"],
        transls: ["From the word Ράφτης — tailor"],
        translation: "tailor's shop",
        kind: "Nouns in -άδικο, -ίδικο from nouns",
        unicTransl: "tailor",
        notice: "Nouns in -άδικο, -ίδικο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -είο, -ιο are also formed.",
    },
    {
        word: "βιβλιοπωλείο",
        base: "βιβλιοπώλης",
        groups: {
            morfology:
                '<em>βιβλιοπωλείο </em>→ βιβλιοπώλ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -είο</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">βιβλιοπώλης</span> – bookseller < Ancient Greek (<span style="color:#7a9473">βιβλιοπώλης</span> – bookseller < <span style="color:#7a9473">βιβλίον</span> – small book, letter + <span style="color:#7a9473">πώλης</span> – seller < <span style="color:#7a9473">βίβλος</span> – book, papyrus < <span style="color:#7a9473">βύβλος</span> – papyrus, book < <span style="color:#7a9473">Βύβλος</span> – Byblos, ancient city in Lebanon)',
            aplication:
                "<br>Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
        },
        qws: ["bookshop"],
        transls: ["From the word Βιβλιοπώλης — bookseller"],
        translation: "bookshop",
        kind: "Nouns in -είο, -ιο from nouns",
        unicTransl: "bookseller",
        notice: "Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
    },
    {
        word: "δασαρχείο",
        base: "δασάρχης",
        groups: {
            morfology:
                '<em>δασαρχείο </em>→ δασάρχ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -είο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
        },
        qws: ["forestry office"],
        transls: ["From the word Δασάρχης — forester"],
        translation: "forestry office",
        kind: "Nouns in -είο, -ιο from nouns",
        unicTransl: "forester",
        notice: "Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
    },
    {
        word: "ιατρείο",
        base: "ιατρός, γιατρός",
        groups: {
            morfology:
                '<em>ιατρείο </em>→ ιατρ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -είο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
        },
        qws: ["doctor's surgery"],
        transls: ["From the word Ιατρός, γιατρός — doctor"],
        translation: "doctor's surgery",
        kind: "Nouns in -είο, -ιο from nouns",
        unicTransl: "doctor",
        notice: "Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
    },
    {
        word: "κουρείο",
        base: "κουρέας",
        groups: {
            morfology:
                '<em>κουρείο </em>→ κουρ<span style="color: #b87333">έας</span> +<span style="color: #b87333"> -είο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
        },
        qws: ["barber shop"],
        transls: ["From the word Κουρέας — barber"],
        translation: "barber shop",
        kind: "Nouns in -είο, -ιο from nouns",
        unicTransl: "barber",
        notice: "Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
    },
    {
        word: "εστιατόριο",
        base: "εστιάτορας",
        groups: {
            morfology:
                '<em>εστιατόριο </em>→ εστιάτορ<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ιο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
        },
        qws: ["restaurant"],
        transls: ["From the word Εστιάτορας — restaurateur, host"],
        translation: "restaurant",
        kind: "Nouns in -είο, -ιο from nouns",
        unicTransl: "restaurateur, host",
        notice: "Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
    },
    {
        word: "φυλάκιο",
        base: "φύλακας",
        groups: {
            morfology:
                '<em>φυλάκιο </em>→ φύλακ<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ιο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
        },
        qws: ["guardhouse, sentry box"],
        transls: ["From the word Φύλακας — guard"],
        translation: "guardhouse, sentry box",
        kind: "Nouns in -είο, -ιο from nouns",
        unicTransl: "guard",
        notice: "Nouns in -είο, -ιο denote a place (territory) and are formed from nouns. With the same meaning, nouns in -αριό and -άδικο, -ίδικο are also formed.",
    },
    {
        word: "αλευράς",
        base: "αλεύρι",
        groups: {
            morfology:
                '<em>αλευράς </em>→ αλεύρ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -άς</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
        },
        qws: ["flour merchant"],
        transls: ["From the word Αλεύρι — flour"],
        translation: "flour merchant",
        kind: "Nouns in -άς from nouns",
        unicTransl: "flour",
        notice: "Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
    },
    {
        word: "γαλατάς",
        base: "γάλα",
        groups: {
            morfology:
                '<em>γαλατάς </em>→ γάλ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ατάς</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">γάλα</span> – milk < Ancient Greek <span style="color:#7a9473">γάλα</span> – milk.',
            aplication:
                "<br>Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
        },
        qws: ["milkman"],
        transls: ["From the word Γάλα — milk"],
        translation: "milkman",
        kind: "Nouns in -άς from nouns",
        unicTransl: "milk",
        notice: "Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
    },
    {
        word: "κεραμιδάς",
        base: "κεραμίδι",
        groups: {
            morfology:
                '<em>κεραμιδάς </em>→ κεραμίδ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -άς</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">κεραμίδι</span> – roof tile < Medieval Greek <span style="color:#7a9473">κεραμίδι</span> < Ancient Greek (<span style="color:#7a9473">κεραμίδιον</span> – diminutive of roof tile < <span style="color:#7a9473">κερᾰμῑς</span> – roof tile, clay < <span style="color:#7a9473">κέρᾰμος</span> – clay)',
            aplication:
                "<br>Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
        },
        qws: ["potter, brickmaker"],
        transls: ["From the word Κεραμίδι — roof tile"],
        translation: "potter, brickmaker",
        kind: "Nouns in -άς from nouns",
        unicTransl: "roof tile",
        notice: "Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
    },
    {
        word: "μυλωνάς",
        base: "μύλος",
        groups: {
            morfology:
                '<em>μυλωνάς </em>→ μύλ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ωνάς</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">μυλών</span> – mill < <span style="color:#7a9473">μύλος</span> – miller, grinder < <span style="color:#7a9473">μύλη</span> – mill',
            aplication:
                "<br>Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
        },
        qws: ["miller"],
        transls: ["From the word Μύλος — mill"],
        translation: "miller",
        kind: "Nouns in -άς from nouns",
        unicTransl: "mill",
        notice: "Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
    },
    {
        word: "σιδεράς",
        base: "σίδερο",
        groups: {
            morfology:
                '<em>σιδεράς </em>→ σίδερ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -άς</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
        },
        qws: ["blacksmith, ironmonger"],
        transls: ["From the word Σίδερο — iron"],
        translation: "blacksmith, ironmonger",
        kind: "Nouns in -άς from nouns",
        unicTransl: "iron",
        notice: "Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
    },
    {
        word: "ψαράς",
        base: "ψάρι",
        groups: {
            morfology:
                '<em>ψαράς </em>→ ψάρ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -άς</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">ὀψαρᾶς</span> < Ancient Greek (<span style="color:#7a9473">ὀψάριον</span> – delicacy < <span style="color:#7a9473">ὄψον</span> – delicacy).',
            aplication:
                "<br>Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
        },
        qws: ["fisherman"],
        transls: ["From the word Ψάρι — fish"],
        translation: "fisherman",
        kind: "Nouns in -άς from nouns",
        unicTransl: "fish",
        notice: "Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
    },
    {
        word: "ψωμάς",
        base: "ψωμί",
        groups: {
            morfology:
                '<em>ψωμάς </em>→ ψωμ<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -άς</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
        },
        qws: ["baker"],
        transls: ["From the word Ψωμί — bread"],
        translation: "baker",
        kind: "Nouns in -άς from nouns",
        unicTransl: "bread",
        notice: "Nouns in -άς denote a profession and are formed from nouns. With the same meaning, nouns in -άριος, -άρης, -ιάρης and -τζής are also formed.",
    },
    {
        word: "πευκιάς",
        base: "πέυκο",
        groups: {
            morfology:
                '<em>πευκιάς </em>→ πέυκ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ίας</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ίας, -ία denote a large quantity of what the derived noun means. With the same meaning, nouns in -ώνας, -ιώνας are also formed.",
        },
        qws: ["pine grove"],
        transls: ["From the word Πέυκο — pine"],
        translation: "pine grove",
        kind: "Nouns in -ίας, -ία from nouns",
        unicTransl: "pine",
        notice: "Nouns in -ίας, -ία denote a large quantity of what the derived noun means. With the same meaning, nouns in -ώνας, -ιώνας are also formed.",
    },
    {
        word: "αμμοθδιά",
        base: "άμμος, αμμούδα",
        groups: {
            morfology:
                '<em>αμμοθδιά </em>→ άμμ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -οθδιά</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ίας, -ία denote a large quantity of what the derived noun means. With the same meaning, nouns in -ώνας, -ιώνας are also formed.",
        },
        qws: ["sandy beach"],
        transls: ["From the word Άμμος, αμμούδα — sand"],
        translation: "sandy beach",
        kind: "Nouns in -ίας, -ία from nouns",
        unicTransl: "sand",
        notice: "Nouns in -ίας, -ία denote a large quantity of what the derived noun means. With the same meaning, nouns in -ώνας, -ιώνας are also formed.",
    },
    {
        word: "πλατανιά",
        base: "πλατάνι",
        groups: {
            morfology:
                '<em>πλατανιά </em>→ πλατάν<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ίας, -ία denote a large quantity of what the derived noun means. With the same meaning, nouns in -ώνας, -ιώνας are also formed.",
        },
        qws: ["plane tree grove"],
        transls: ["From the word Πλατάνι — plane tree"],
        translation: "plane tree grove",
        kind: "Nouns in -ίας, -ία from nouns",
        unicTransl: "plane tree",
        notice: "Nouns in -ίας, -ία denote a large quantity of what the derived noun means. With the same meaning, nouns in -ώνας, -ιώνας are also formed.",
    },
    {
        word: "επαγγελματίας",
        base: "επάγγελμα",
        groups: {
            morfology:
                '<em>επαγγελματίας </em>→ επάνγγελ<span style="color: #b87333">μα</span> +<span style="color: #b87333"> -ματίας</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">επάγγελμα</span> – profession < Ancient Greek (<span style="color:#7a9473">ἐπάγγελμα</span> < <span style="color:#7a9473">ἐπαγγέλλομαι</span> – to promise; to pursue a profession < <span style="color:#7a9473">επ-</span>, <span style="color:#7a9473">επι-</span> (on) + <span style="color:#7a9473">ἀγγέλλω</span> – to announce < <span style="color:#7a9473">ἄγγελος</span> – messenger, angel)',
        },
        qws: ["professional"],
        transls: ["From the word Επάνγγελμα — profession"],
        translation: "professional",
        kind: "Nouns in -ίας, -εία from nouns",
        unicTransl: "profession",
        notice: "",
    },
    {
        word: "ληστεία",
        base: "ληστής",
        groups: {
            morfology:
                '<em>ληστεία </em>→ ληστ<span style="color: #b87333">ής</span> + <span style="color: #b87333">-εία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["robbery"],
        transls: ["From the word Ληστής — robber"],
        translation: "robbery",
        kind: "Nouns in -ίας, -εία from nouns",
        unicTransl: "robber",
        notice: "",
    },
    {
        word: "κτηματίας",
        base: "κτήμα",
        groups: {
            morfology:
                '<em>κτηματίας </em>→ κτή<span style="color: #b87333">μα</span> +<span style="color: #b87333"> -ματίας</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["property owner, landowner"],
        transls: ["From the word Κτήμα — property, estate"],
        translation: "property owner, landowner",
        kind: "Nouns in -ίας, -εία from nouns",
        unicTransl: "property, estate",
        notice: "",
    },
    {
        word: "αχερώνας",
        base: "άχερο",
        groups: {
            morfology:
                '<em>αχερώνας </em>→ άχερ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ώνας</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
        },
        qws: ["stack of straw"],
        transls: ["From the word Άχερο — straw"],
        translation: "stack of straw",
        kind: "Nouns in -ώνας, -ιώνας from nouns",
        unicTransl: "straw",
        notice: "Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
    },
    {
        word: "αμπελώνας",
        base: "αμπέλι",
        groups: {
            morfology:
                '<em>αμπελώνας </em>→ αμπέλ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ώνας</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
        },
        qws: ["vineyard, vine plantation"],
        transls: ["From the word Αμπέλι — vine"],
        translation: "vineyard, vine plantation",
        kind: "Nouns in -ώνας, -ιώνας from nouns",
        unicTransl: "vine",
        notice: "Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
    },
    {
        word: "ελαιώνας",
        base: "ελία, ελαία",
        groups: {
            morfology:
                '<em>ελαιώνας </em>→ ελαί<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ώνας</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
        },
        qws: ["olive grove"],
        transls: ["From the word Ελία, ελαία — olive, olive tree"],
        translation: "olive grove",
        kind: "Nouns in -ώνας, -ιώνας from nouns",
        unicTransl: "olive, olive tree",
        notice: "Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
    },
    {
        word: "καλαμιώνας",
        base: "καλάμι",
        groups: {
            morfology:
                '<em>καλαμιώνας </em>→ καλάμ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ιώνας</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
        },
        qws: ["reed thicket"],
        transls: ["From the word Καλάμι — reed"],
        translation: "reed thicket",
        kind: "Nouns in -ώνας, -ιώνας from nouns",
        unicTransl: "reed",
        notice: "Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
    },
    {
        word: "ξενώνας",
        base: "ξένος",
        groups: {
            morfology:
                '<em>ξενώνας </em>→ ξέν<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ώνας</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
        },
        qws: ["guesthouse"],
        transls: ["From the word Ξένος — stranger, foreigner"],
        translation: "guesthouse",
        kind: "Nouns in -ώνας, -ιώνας from nouns",
        unicTransl: "stranger, foreigner",
        notice: "Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
    },
    {
        word: "περιστεριώνας",
        base: "περιστέρι",
        groups: {
            morfology:
                '<em>περιστεριώνας </em>→ περιστέρ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ιώνας</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
        },
        qws: ["dovecote, pigeon loft"],
        transls: ["From the word Περιστέρι — pigeon"],
        translation: "dovecote, pigeon loft",
        kind: "Nouns in -ώνας, -ιώνας from nouns",
        unicTransl: "pigeon",
        notice: "Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
    },
    {
        word: "στρατώνας",
        base: "στρατός",
        groups: {
            morfology:
                '<em>στρατώνας </em>→ στρατ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ώνας</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">στρατών</span> < <span style="color:#7a9473">στρατός</span> – army',
            aplication:
                "<br>Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
        },
        qws: ["barracks"],
        transls: ["From the word Στρατός — army"],
        translation: "barracks",
        kind: "Nouns in -ώνας, -ιώνας from nouns",
        unicTransl: "army",
        notice: "Nouns in -ώνας, -ιώνας denote a large quantity of what the derived noun means. With the same meaning, nouns in -ίας, -ία are also formed.",
    },
    {
        word: "επιστήμονας",
        base: "επιστήμη",
        groups: {
            morfology:
                '<em>επιστήμονας </em>→ επιστήμ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ονας</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἐπιστήμη</span> – science, knowledge < <span style="color:#7a9473">ἐπίσταμαι</span> – to know well, be certain < <span style="color:#7a9473">ἐπι-</span> (on) + <span style="color:#7a9473">ἵστημι</span> – to stand, place)',
        },
        qws: ["scientist"],
        transls: ["From the word Επιστήμη — science"],
        translation: "scientist",
        kind: "Nouns in -ονας from nouns",
        unicTransl: "science",
        notice: "",
    },
    {
        word: "βαρκάρης",
        base: "βάρκα",
        groups: {
            morfology:
                '<em>βαρκάρης </em>→ βάρκ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -άρης</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">βαρκάρης</span> < <span style="color:#7a9473">βάρκα</span> – boat) < Late Latin <span style="color:#7a9473">barca</span> < Latin <span style="color:#7a9473">baris</span> < Ancient Greek <span style="color:#7a9473">βᾶρις</span> < Ancient Egyptian <span style="color:#7a9473">/bair/</span>.',
            aplication:
                "<br>Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
        },
        qws: ["boatman"],
        transls: ["From the word Βάρκα — boat"],
        translation: "boatman",
        kind: "Nouns in -άριος, -άρης, -ιάρης from nouns",
        unicTransl: "boat",
        notice: "Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
    },
    {
        word: "περιβολάρης",
        base: "περιβόλι",
        groups: {
            morfology:
                '<em>περιβολάρης </em>→ περιβόλ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -άρης</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">περιβολάρης</span>, <span style="color:#7a9473">περβολάρης</span> < Koine Greek <span style="color:#7a9473">περιβόλιον</span> – small area surrounded by something, e.g., a wall < Ancient Greek (<span style="color:#7a9473">περίβόλος</span> – area surrounded by something, e.g., a wall < <span style="color:#7a9473">περί-</span> (around) + <span style="color:#7a9473">βάλλω</span> – to throw, strike)',
            aplication:
                "<br>Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
        },
        qws: ["gardener"],
        transls: ["From the word Περιβόλι — garden"],
        translation: "gardener",
        kind: "Nouns in -άριος, -άρης, -ιάρης from nouns",
        unicTransl: "garden",
        notice: "Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
    },
    {
        word: "καρβουνιάρης",
        base: "κάρβουνο",
        groups: {
            morfology:
                '<em>καρβουνιάρης </em>→ κάρβουν<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ιάρης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
        },
        qws: ["charcoal burner"],
        transls: ["From the word Κάρβουνο — charcoal"],
        translation: "charcoal burner",
        kind: "Nouns in -άριος, -άρης, -ιάρης from nouns",
        unicTransl: "charcoal",
        notice: "Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
    },
    {
        word: "σκουπιδιάρης",
        base: "σκουπίδι",
        groups: {
            morfology:
                '<em>σκουπιδιάρης </em>→ σκουπίδ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ιάρης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
        },
        qws: ["dustman, street sweeper"],
        transls: ["From the word Σκουπίδι — rubbish"],
        translation: "dustman, street sweeper",
        kind: "Nouns in -άριος, -άρης, -ιάρης from nouns",
        unicTransl: "rubbish",
        notice: "Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
    },
    {
        word: "αποθηκάριος",
        base: "αποθήκη",
        groups: {
            morfology:
                '<em>αποθηκάριος </em>→ αποθήκ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -άριος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
        },
        qws: ["warehouseman, storekeeper"],
        transls: ["From the word Αποθήκη — warehouse, storeroom"],
        translation: "warehouseman, storekeeper",
        kind: "Nouns in -άριος, -άρης, -ιάρης from nouns",
        unicTransl: "warehouse, storeroom",
        notice: "Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
    },
    {
        word: "βιβλιοθηκάριος",
        base: "βιβλιοθήκη",
        groups: {
            morfology:
                '<em>βιβλιοθηκάριος </em>→ βιβλιοθήκ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -άριος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
        },
        qws: ["librarian"],
        transls: ["From the word Βιβλιοθήκη — library"],
        translation: "librarian",
        kind: "Nouns in -άριος, -άρης, -ιάρης from nouns",
        unicTransl: "library",
        notice: "Nouns in -άριος, -άρης, -ιάρης denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -τζής are also formed.",
    },
    {
        word: "καφετζής",
        base: "καφενείο",
        groups: {
            morfology:
                '<em>καφετζής </em>→ καφ<span style="color: #b87333">ενείο</span> +<span style="color: #b87333"> -ετζής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -τζής denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -άριος, -άρης, -ιάρης are also formed.",
        },
        qws: ["coffee shop owner"],
        transls: ["From the word Καφενείο — coffee shop"],
        translation: "coffee shop owner",
        kind: "Nouns in -τζής from nouns",
        unicTransl: "coffee shop",
        notice: "Nouns in -τζής denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -άριος, -άρης, -ιάρης are also formed.",
    },
    {
        word: "κουλουρτζής",
        base: "κουλούρι",
        groups: {
            morfology:
                '<em>κουλουρτζής </em>→ κουλούρ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -τζής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -τζής denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -άριος, -άρης, -ιάρης are also formed.",
        },
        qws: ["pretzel seller"],
        transls: ["From the word Κουλούρι — pretzel, ring-shaped bread"],
        translation: "pretzel seller",
        kind: "Nouns in -τζής from nouns",
        unicTransl: "pretzel, ring-shaped bread",
        notice: "Nouns in -τζής denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -άριος, -άρης, -ιάρης are also formed.",
    },
    {
        word: "τζαμτζής",
        base: "τζάμι",
        groups: {
            morfology:
                '<em>τζαμτζής </em>→ τζάμ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -τζής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -τζής denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -άριος, -άρης, -ιάρης are also formed.",
        },
        qws: ["glazier"],
        transls: ["From the word Τζάμι — windowpane"],
        translation: "glazier",
        kind: "Nouns in -τζής from nouns",
        unicTransl: "windowpane",
        notice: "Nouns in -τζής denote a profession and are formed from nouns. With the same meaning, nouns in -άς and -άριος, -άρης, -ιάρης are also formed.",
    },
    {
        word: "γιώργαινα",
        base: "γιώργος",
        groups: {
            morfology:
                '<em>γιώργαινα </em>→ γιώργ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -αινα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -αινα, -ίνα denote the wife of a person by name or surname.",
        },
        qws: ["wife of Georgios"],
        transls: ["From the word Γιώργος — Georgios"],
        translation: "wife of Georgios",
        kind: "Nouns in -αινα, -ίνα from nouns",
        unicTransl: "Georgios",
        notice: "Nouns in -αινα, -ίνα denote the wife of a person by name or surname.",
    },
    {
        word: "δημήτραινα",
        base: "δημήτρης",
        groups: {
            morfology:
                '<em>δημήτραινα </em>→ δημήτρ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -αινα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -αινα, -ίνα denote the wife of a person by name or surname.",
        },
        qws: ["wife of Dimitris"],
        transls: ["From the word Δημήτρης — Dimitris"],
        translation: "wife of Dimitris",
        kind: "Nouns in -αινα, -ίνα from nouns",
        unicTransl: "Dimitris",
        notice: "Nouns in -αινα, -ίνα denote the wife of a person by name or surname.",
    },
    {
        word: "θοδωρίνα",
        base: "θόδωρος",
        groups: {
            morfology:
                '<em>θοδωρίνα </em>→ θόδωρ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ίνα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -αινα, -ίνα denote the wife of a person by name or surname.",
        },
        qws: ["wife of Theodoros"],
        transls: ["From the word Θόδωρος — Theodoros"],
        translation: "wife of Theodoros",
        kind: "Nouns in -αινα, -ίνα from nouns",
        unicTransl: "Theodoros",
        notice: "Nouns in -αινα, -ίνα denote the wife of a person by name or surname.",
    },
    {
        word: "ανηφοριά",
        base: "ανήφορος",
        groups: {
            morfology:
                '<em>ανηφοριά </em>→ ανήφορ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["uphill, ascent"],
        transls: ["From the word Ανήφορος — uphill road"],
        translation: "uphill, ascent",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "uphill road",
        notice: "",
    },
    {
        word: "αρχοντιά",
        base: "άρχοντας",
        groups: {
            morfology:
                '<em>αρχοντιά </em>→ αρχοντ<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ἄρχοντας</span> – lord, ruler, rich man < Medieval Greek <span style="color:#7a9473">ἄρχοντας</span> < Ancient Greek (<span style="color:#7a9473">ἄρχων</span> – ruler, leader < <span style="color:#7a9473">ἄρχω</span> – to begin, lead, rule);',
        },
        qws: ["nobility, wealth, noble origin"],
        transls: ["From the word Άρχοντας — lord, ruler, rich man, archon"],
        translation: "nobility, wealth, noble origin",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "lord, ruler, rich man, archon",
        notice: "",
    },
    {
        word: "βαλανιδιά",
        base: "βαλανίδι",
        groups: {
            morfology:
                '<em>βαλανιδιά </em>→ βαλανίδ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["oak tree"],
        transls: ["From the word Βαλανίδι — acorn"],
        translation: "oak tree",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "acorn",
        notice: "",
    },
    {
        word: "βραδιά",
        base: "βράδυ",
        groups: {
            morfology:
                '<em>βραδιά </em>→ βράδ<span style="color: #b87333">υ</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">βραδιά</span> < <span style="color:#7a9473">βραδεῖα</span> < <span style="color:#7a9473">βραδύς</span> – slow, late)',
        },
        qws: ["evening, party"],
        transls: ["From the word Βράδυ — evening"],
        translation: "evening, party",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "evening",
        notice: "",
    },
    {
        word: "καλοκεριά",
        base: "καλοκαίρι",
        groups: {
            morfology:
                '<em>καλοκεριά </em>→ καλοκ<span style="color: #b87333">αίρι</span> +<span style="color: #b87333"> -εριά</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["good weather"],
        transls: ["From the word Καλοκαίρι — summer"],
        translation: "good weather",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "summer",
        notice: "",
    },
    {
        word: "κερασιά",
        base: "κεράσι",
        groups: {
            morfology:
                '<em>κερασιά </em>→ κεράσ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">κεράσι</span> – cherry < Ancient Greek <span style="color:#7a9473">κεράσιον</span> – cherry, cherry tree < <span style="color:#7a9473">κερασός</span> – cherry tree)',
        },
        qws: ["cherry tree"],
        transls: ["From the word Κεράσι — cherry"],
        translation: "cherry tree",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "cherry",
        notice: "",
    },
    {
        word: "μαστοριά",
        base: "μάστορας",
        groups: {
            morfology:
                '<em>μαστοριά </em>→ μάστορ<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">μαστορεία</span> – craftsmanship < <span style="color:#7a9473">μάστορας</span> – master < <span style="color:#7a9473">μαΐστωρ</span> < <span style="color:#7a9473">μαγίστωρ</span>) < Latin <span style="color:#7a9473">magister</span> – teacher, head',
        },
        qws: ["craftsmanship, skill"],
        transls: ["From the word Μάστορας — master craftsman"],
        translation: "craftsmanship, skill",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "master craftsman",
        notice: "",
    },
    {
        word: "μηλιά",
        base: "μήλο",
        groups: {
            morfology:
                '<em>μηλιά </em>→ μήλ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">μήλο</span> – apple < Ancient Greek <span style="color:#7a9473">μῆλον</span> – apple.',
        },
        qws: ["apple tree"],
        transls: ["From the word Μήλο — apple"],
        translation: "apple tree",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "apple",
        notice: "",
    },
    {
        word: "νυχτιά",
        base: "νύχτα",
        groups: {
            morfology:
                '<em>νυχτιά </em>→ νύχτ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">νυχτιά</span> < <span style="color:#7a9473">νύχτα</span> – night < <span style="color:#7a9473">νύκτα</span> – night) < Ancient Greek <span style="color:#7a9473">νύξ</span> – night',
        },
        qws: ["nighttime"],
        transls: ["From the word Νύχτα — night"],
        translation: "nighttime",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "night",
        notice: "",
    },
    {
        word: "παγωνιά",
        base: "πάγος",
        groups: {
            morfology:
                '<em>παγωνιά </em>→ πάγ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ωνιά</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">παγώνω</span> – to freeze < Medieval Greek <span style="color:#7a9473">παγῶ</span> – to fix',
        },
        qws: ["frost"],
        transls: ["From the word Πάγος — ice"],
        translation: "frost",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "ice",
        notice: "",
    },
    {
        word: "παλικαριά",
        base: "παλικάρι",
        groups: {
            morfology:
                '<em>παλικαριά </em>→ παλικάρ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">παλικάρι, παλληκάρι</span> – brave young man, lad < Koine Greek <span style="color:#7a9473">παλικάριν</span> < Ancient Greek (<span style="color:#7a9473">πάλλαξ</span> – youth, child < <span style="color:#7a9473">παλικάριν</span> – concubine)',
        },
        qws: ["bravery, daring"],
        transls: ["From the word Παλικάρι — brave young man, lad"],
        translation: "bravery, daring",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "brave young man, lad",
        notice: "",
    },
    {
        word: "πλαγιά",
        base: "πλαί, πλάγι",
        groups: {
            morfology:
                '<em>πλαγιά </em>→ πλάγ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["slope, hillside"],
        transls: ["From the word Πλαί, πλάγι — side"],
        translation: "slope, hillside",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "side",
        notice: "",
    },
    {
        word: "συννεφιά",
        base: "σύννεφο",
        groups: {
            morfology:
                '<em>συννεφιά </em>→ σύννεφ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["cloudiness"],
        transls: ["From the word Σύννεφο — cloud"],
        translation: "cloudiness",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "cloud",
        notice: "",
    },
    {
        word: "χρονιά",
        base: "χρόνος",
        groups: {
            morfology:
                '<em>χρονιά </em>→ χρόν<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ιά</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["season, period, year"],
        transls: ["From the word Χρόνος — year, time"],
        translation: "season, period, year",
        kind: "Nouns in -ιά from nouns",
        unicTransl: "year, time",
        notice: "",
    },
    {
        word: "αρχοντολόγι",
        base: "άρχοντας",
        groups: {
            morfology:
                '<em>αρχοντολόγι </em>→ άρχοντ<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ολόγι</span>',
            etymology:
                '<br>Either from Medieval Greek (<span style="color:#7a9473">ἀρχοντολόγιν</span> – nobility < <span style="color:#7a9473">ἄρχοντας</span> – lord, ruler, rich man) < Ancient Greek <span style="color:#7a9473">ἄρχων</span> – ruler, leader < <span style="color:#7a9473">ἄρχω</span> – to begin, lead, rule); <br>Or from Modern Greek <span style="color:#7a9473">ἀρχοντολόγιο</span> – book or list of nobles of a region < Katharevousa <span style="color:#7a9473">ἀρχοντολόγιον</span> < Medieval Greek <span style="color:#7a9473">ἀρχοντολόγιν</span> – nobility < Ancient Greek (<span style="color:#7a9473">ἄρχοντας</span> – lord, ruler, rich man < <span style="color:#7a9473">ἄρχων</span> – ruler, leader < <span style="color:#7a9473">ἄρχω</span> – to begin, lead, rule);',
        },
        qws: ["nobility, rich people"],
        transls: ["From the word Άρχοντας — lord, ruler, rich man, archon"],
        translation: "nobility, rich people",
        kind: "Nouns in -λό(γ)ι from nouns",
        unicTransl: "lord, ruler, rich man, archon",
        notice: "",
    },
    {
        word: "συγγενολόγι",
        base: "συγγενής",
        groups: {
            morfology:
                '<em>συγγενολόγι </em>→ συγγεν<span style="color: #b87333">ής</span> +<span style="color: #b87333"> -ολόγι</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["relatives, kin"],
        transls: ["From the word Συγγενής — relative"],
        translation: "relatives, kin",
        kind: "Nouns in -λό(γ)ι from nouns",
        unicTransl: "relative",
        notice: "",
    },
    {
        word: "κλεφτουριά",
        base: "κλέφτης",
        groups: {
            morfology:
                '<em>κλεφτουριά </em>→ κλέφτ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -ουριά</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["klephts (Greek bandits)"],
        transls: ["From the word Κλέφτης — thief"],
        translation: "klephts (Greek bandits)",
        kind: "Nouns in -ουριά from nouns",
        unicTransl: "thief",
        notice: "",
    },
    {
        word: "λασπουριά",
        base: "λάσπη",
        groups: {
            morfology:
                '<em>λασπουριά </em>→ λάσπ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ουριά</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["slush, bog, swamp"],
        transls: ["From the word Λάσπη — mud"],
        translation: "slush, bog, swamp",
        kind: "Nouns in -ουριά from nouns",
        unicTransl: "mud",
        notice: "",
    },
    {
        word: "αδειούχος",
        base: "άδεια",
        groups: {
            morfology:
                '<em>αδειούχος </em>→ άδει<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ούχος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["license holder, person on leave"],
        transls: ["From the word Άδεια — permission, leave"],
        translation: "license holder, person on leave",
        kind: "Nouns in -ούχος from nouns",
        unicTransl: "permission, leave",
        notice: "",
    },
    {
        word: "αξιωματούχος",
        base: "αξίωμα",
        groups: {
            morfology:
                '<em>αξιωματούχος </em>→ αξίω<span style="color: #b87333">μα</span> +<span style="color: #b87333"> -ματούχος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["official, officer, degree holder"],
        transls: ["From the word Αξίωμα — dignity, rank, office, axiom"],
        translation: "official, officer, degree holder",
        kind: "Nouns in -ούχος from nouns",
        unicTransl: "dignity, rank, office, axiom",
        notice: "",
    },
    {
        word: "πτυχιούχος",
        base: "πτυχίο",
        groups: {
            morfology:
                '<em>πτυχιούχος </em>→ πτυχίο +<span style="color: #b87333"> -ούχος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["graduate, degree holder"],
        transls: ["From the word Πτυχίο — diploma, degree"],
        translation: "graduate, degree holder",
        kind: "Nouns in -ούχος from nouns",
        unicTransl: "diploma, degree",
        notice: "",
    },
    {
        word: "συνταξιούχος",
        base: "σύνταξη",
        groups: {
            morfology:
                '<em>συνταξιούχος </em>→ σύνταξ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ιούχος</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">σύνταξη</span> – pension < Ancient Greek (<span style="color:#7a9473">σύνταξις</span> – order, arrangement, army, connection < <span style="color:#7a9473">συντάσσω</span> – to arrange, establish, connect)',
        },
        qws: ["pensioner"],
        transls: ["From the word Σύνταξη — pension"],
        translation: "pensioner",
        kind: "Nouns in -ούχος from nouns",
        unicTransl: "pension",
        notice: "",
    },
    {
        word: "αγριάδα",
        base: "άγριος",
        groups: {
            morfology:
                '<em>αγριάδα </em>→ άγρ<span style="color: #b87333">ιος</span> +<span style="color: #b87333"> -άδα</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">άγριος</span> – wild < Ancient Greek (<span style="color:#7a9473">ἄγριος</span> – wild < <span style="color:#7a9473">ἀγρός</span> – field, village)',
        },
        qws: ["wildness, savagery"],
        transls: ["From the word Άγριος — wild"],
        translation: "wildness, savagery",
        kind: "Nouns in -άδα from adjectives",
        unicTransl: "wild",
        notice: "",
    },
    {
        word: "εξυπνάδα",
        base: "έξυπνος",
        groups: {
            morfology:
                '<em>εξυπνάδα </em>→ έξυπν<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -άδα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">έξυπνος</span> – smart < Medieval Greek <span style="color:#7a9473">ἔξυπνος</span> < Ancient Greek <span style="color:#7a9473">ἐξ</span> (out) + <span style="color:#7a9473">ὕπνος</span> – sleep',
        },
        qws: ["cleverness, intelligence"],
        transls: ["From the word Έξυπνος — smart"],
        translation: "cleverness, intelligence",
        kind: "Nouns in -άδα from adjectives",
        unicTransl: "smart",
        notice: "",
    },
    {
        word: "νοστιμάδα",
        base: "νόστιμος",
        groups: {
            morfology:
                '<em>νοστιμάδα </em>→ νόστιμ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -άδα</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">νοστιμάδα</span> < <span style="color:#7a9473">νόστιμος</span> – tasty) < Ancient Greek (<span style="color:#7a9473">νόστῐμος</span> – safe, bringing return, pleasant-tasting, juicy < <span style="color:#7a9473">νόστος</span> – return < <span style="color:#7a9473">νέομαι</span> – to go, return)',
        },
        qws: ["deliciousness, tastiness"],
        transls: ["From the word Νόστιμος — tasty"],
        translation: "deliciousness, tastiness",
        kind: "Nouns in -άδα from adjectives",
        unicTransl: "tasty",
        notice: "",
    },
    {
        word: "σκληράδα",
        base: "σκληρός",
        groups: {
            morfology:
                '<em>σκληράδα </em>→ σκληρ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -άδα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">σκληρός</span> – hard, severe < Ancient Greek <span style="color:#7a9473">σκληρός</span>',
        },
        qws: ["hardness, cruelty"],
        transls: ["From the word Σκληρός — hard, harsh, severe, cruel"],
        translation: "hardness, cruelty",
        kind: "Nouns in -άδα from adjectives",
        unicTransl: "hard, harsh, severe, cruel",
        notice: "",
    },
    {
        word: "ασπρίλα",
        base: "άσπρος",
        groups: {
            morfology:
                '<em>ασπρίλα </em>→ άσπρ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ίλα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">άσπρος</span> – white < Koine Greek <span style="color:#7a9473">ἄσπρος</span> < Latin <span style="color:#7a9473">asper</span> – rough, harsh, difficult',
        },
        qws: ["whiteness"],
        transls: ["From the word Άσπρος — white"],
        translation: "whiteness",
        kind: "Nouns in -ίλα from adjectives",
        unicTransl: "white",
        notice: "",
    },
    {
        word: "κοκκινίλα",
        base: "κόκκινος",
        groups: {
            morfology:
                '<em>κοκκινίλα </em>→ κόκκιν<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ίλα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">κόκκινος</span> – red < Koine Greek <span style="color:#7a9473">κόκκινος</span> < Ancient Greek <span style="color:#7a9473">κόκκος</span> – grain, seed',
        },
        qws: ["redness"],
        transls: ["From the word Κόκκινος — red"],
        translation: "redness",
        kind: "Nouns in -ίλα from adjectives",
        unicTransl: "red",
        notice: "",
    },
    {
        word: "μαυρίλα",
        base: "μαύρος",
        groups: {
            morfology:
                '<em>μαυρίλα </em>→ μαύρ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ίλα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">μαύρος</span> – black < Ancient Greek <span style="color:#7a9473">μαυρός</span> – dark, dim',
        },
        qws: ["blackness"],
        transls: ["From the word Μαύρος — black"],
        translation: "blackness",
        kind: "Nouns in -ίλα from adjectives",
        unicTransl: "black",
        notice: "",
    },
    {
        word: "σαπίλα",
        base: "σάπιος",
        groups: {
            morfology:
                '<em>σαπίλα </em>→ σάπ<span style="color: #b87333">ιος</span> +<span style="color: #b87333"> -ίλα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">σάπιος</span> – rotten < Medieval Greek (<span style="color:#7a9473">σάπιος</span> < <span style="color:#7a9473">σαπίζω</span> – to rot) < Ancient Greek <span style="color:#7a9473">σήπομαι</span> – to rot',
        },
        qws: ["rottenness"],
        transls: ["From the word Σάπιος — rotten"],
        translation: "rottenness",
        kind: "Nouns in -ίλα from adjectives",
        unicTransl: "rotten",
        notice: "",
    },
    {
        word: "αγραμματοσύνη",
        base: "αγράμματος",
        groups: {
            morfology:
                '<em>αγραμματοσύνη </em>→ αγράμματ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -οσύνη</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["illiteracy"],
        transls: ["From the word Αγράμματος — illiterate"],
        translation: "illiteracy",
        kind: "Nouns in -οσύνη from adjectives",
        unicTransl: "illiterate",
        notice: "",
    },
    {
        word: "καλοσύνη",
        base: "καλός",
        groups: {
            morfology:
                '<em>καλοσύνη </em>→ καλ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -οσύνη</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["goodness, kindness"],
        transls: ["From the word Καλός — good, kind"],
        translation: "goodness, kindness",
        kind: "Nouns in -οσύνη from adjectives",
        unicTransl: "good, kind",
        notice: "",
    },
    {
        word: "αβεβαιότητα",
        base: "αβέβαιος",
        groups: {
            morfology:
                '<em>αβεβαιότητα </em>→ αβέβαι<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ότητα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["uncertainty"],
        transls: ["From the word Αβέβαιος — uncertain"],
        translation: "uncertainty",
        kind: "Nouns in -ότητα, -ύτητα from adjectives",
        unicTransl: "uncertain",
        notice: "",
    },
    {
        word: "αθωότητα",
        base: "αθώος",
        groups: {
            morfology:
                '<em>αθωότητα </em>→ αθώ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ότητα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["innocence, naivety"],
        transls: ["From the word Αθώος — innocent, naive"],
        translation: "innocence, naivety",
        kind: "Nouns in -ότητα, -ύτητα from adjectives",
        unicTransl: "innocent, naive",
        notice: "",
    },
    {
        word: "γενναιότητα",
        base: "γενναίος",
        groups: {
            morfology:
                '<em>γενναιότητα </em>→ γενναί<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ότητα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["bravery, courage, generosity"],
        transls: ["From the word Γενναίος — brave, courageous, generous"],
        translation: "bravery, courage, generosity",
        kind: "Nouns in -ότητα, -ύτητα from adjectives",
        unicTransl: "brave, courageous, generous",
        notice: "",
    },
    {
        word: "σεμνότητα",
        base: "σεμνός",
        groups: {
            morfology:
                '<em>σεμνότητα </em>→ σεμν<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ότητα</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">σεμνότης</span> – solemnity < <span style="color:#7a9473">σεμνός</span> – revered < <span style="color:#7a9473">σέβομαι</span> – to respect)',
        },
        qws: ["modesty, decency"],
        transls: ["From the word Σεμνός — modest"],
        translation: "modesty, decency",
        kind: "Nouns in -ότητα, -ύτητα from adjectives",
        unicTransl: "modest",
        notice: "",
    },
    {
        word: "τιμιότητα",
        base: "τίμιος",
        groups: {
            morfology:
                '<em>τιμιότητα </em>→ τίμι<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ότητα</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">τιμιότης</span> – honesty < <span style="color:#7a9473">τίμιος</span> – honest)',
        },
        qws: ["honesty"],
        transls: ["From the word Τίμιος — honest"],
        translation: "honesty",
        kind: "Nouns in -ότητα, -ύτητα from adjectives",
        unicTransl: "honest",
        notice: "",
    },
    {
        word: "τρυφερότητα",
        base: "τρυφερός",
        groups: {
            morfology:
                '<em>τρυφερότητα </em>→ τρυφερ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ότητα</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">τρυφερότης</span> – tenderness, delicacy < <span style="color:#7a9473">τρυφερός</span> – tender, luxurious < <span style="color:#7a9473">τρυφή</span> – luxury, enjoyment)',
        },
        qws: ["tenderness"],
        transls: ["From the word Τρυφερός — tender"],
        translation: "tenderness",
        kind: "Nouns in -ότητα, -ύτητα from adjectives",
        unicTransl: "tender",
        notice: "",
    },
    {
        word: "βαρύτητα",
        base: "βαρύς",
        groups: {
            morfology:
                '<em>βαρύτητα </em>→ βαρ<span style="color: #b87333">ύς</span> +<span style="color: #b87333"> -ύτητα</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">βᾰρύτης</span> – weight, arrogance < <span style="color:#7a9473">βᾰρύς</span> – heavy)',
        },
        qws: ["weight, seriousness, gravity"],
        transls: ["From the word Βαρύς — heavy, serious"],
        translation: "weight, seriousness, gravity",
        kind: "Nouns in -ότητα, -ύτητα from adjectives",
        unicTransl: "heavy, serious",
        notice: "",
    },
    {
        word: "ταχύτητα",
        base: "ταχύς",
        groups: {
            morfology:
                '<em>ταχύτητα </em>→ ταχ<span style="color: #b87333">ύς</span> +<span style="color: #b87333"> -ύτητα</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ταχυτής</span> – speed < <span style="color:#7a9473">τᾰχύς</span> – fast)',
        },
        qws: ["speed"],
        transls: ["From the word Ταχύς — fast"],
        translation: "speed",
        kind: "Nouns in -ότητα, -ύτητα from adjectives",
        unicTransl: "fast",
        notice: "",
    },
    {
        word: "αδικία",
        base: "άδικος",
        groups: {
            morfology:
                '<em>αδικία </em>→ άδικ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀδικία</span> < <span style="color:#7a9473">ἄδικος</span> – unjust < <span style="color:#7a9473">ἀ-</span> (negation) + <span style="color:#7a9473">δίκη</span> – justice)',
        },
        qws: ["injustice"],
        transls: ["From the word Άδικος — unjust"],
        translation: "injustice",
        kind: "Nouns in -ία, -εία from adjectives",
        unicTransl: "unjust",
        notice: "",
    },
    {
        word: "αϋπνία",
        base: "άυπνος",
        groups: {
            morfology:
                '<em>αϋπνία </em>→ άυπν<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ία</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀϋπνία</span> < <span style="color:#7a9473">ἀ-</span> (negation) + <span style="color:#7a9473">ὕπνος</span> – sleep)',
        },
        qws: ["insomnia"],
        transls: ["From the word Άυπνος — sleepless"],
        translation: "insomnia",
        kind: "Nouns in -ία, -εία from adjectives",
        unicTransl: "sleepless",
        notice: "",
    },
    {
        word: "ξηρασία",
        base: "ξηρός",
        groups: {
            morfology:
                '<em>ξηρασία </em>→ ξηρ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ασία</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["drought"],
        transls: ["From the word Ξηρός — dry"],
        translation: "drought",
        kind: "Nouns in -ία, -εία from adjectives",
        unicTransl: "dry",
        notice: "",
    },
    {
        word: "προδοσία",
        base: "προδοτικός",
        groups: {
            morfology:
                '<em>προδοσία </em>→ προδο<span style="color: #b87333">τικός</span> +<span style="color: #b87333"> -σία</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">προδοσία</span> < <span style="color:#7a9473">προδοτικός</span> – treacherous)',
        },
        qws: ["betrayal"],
        transls: ["From the word Προδοτικός — treacherous"],
        translation: "betrayal",
        kind: "Nouns in -ία, -εία from adjectives",
        unicTransl: "treacherous",
        notice: "",
    },
    {
        word: "συνήθεια",
        base: "συνήθης",
        groups: {
            morfology:
                '<em>συνήθεια </em>→ συνήθ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -εία</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">συνήθεια</span> < <span style="color:#7a9473">συνήθης</span> – accustomed < <span style="color:#7a9473">συν</span> + <span style="color:#7a9473">ἦθος</span> – character, custom < <span style="color:#7a9473">ἔθος</span> – habit, custom < <span style="color:#7a9473">ἔθω</span> – to be accustomed)',
        },
        qws: ["habit, custom"],
        transls: ["From the word Συνήθης — accustomed"],
        translation: "habit, custom",
        kind: "Nouns in -ία, -εία from adjectives",
        unicTransl: "accustomed",
        notice: "",
    },
    {
        word: "αλμύρα",
        base: "αλμυρός",
        groups: {
            morfology:
                '<em>αλμύρα </em>→ αλμυρ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["saltiness, brine"],
        transls: ["From the word Αλμυρός — salty, brackish"],
        translation: "saltiness, brine",
        kind: "Nouns in -α, -η from adjectives",
        unicTransl: "salty, brackish",
        notice: "",
    },
    {
        word: "γλύκα",
        base: "γλυκός",
        groups: {
            morfology:
                '<em>γλύκα </em>→ γλυκ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["sweetness, tenderness"],
        transls: ["From the word Γλυκός — sweet, tender, gentle"],
        translation: "sweetness, tenderness",
        kind: "Nouns in -α, -η from adjectives",
        unicTransl: "sweet, tender, gentle",
        notice: "",
    },
    {
        word: "ζέστη",
        base: "ζεστός",
        groups: {
            morfology:
                '<em>ζέστη </em>→ ζεστ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">ζέστη</span> < Koine Greek <span style="color:#7a9473">ζεστός</span> – hot < Ancient Greek <span style="color:#7a9473">ζέω</span> – to boil, seethe.',
        },
        qws: ["heat, warmth"],
        transls: ["From the word Ζεστός — hot, warm"],
        translation: "heat, warmth",
        kind: "Nouns in -α, -η from adjectives",
        unicTransl: "hot, warm",
        notice: "",
    },
    {
        word: "ζωγραφική",
        base: "ζωγραφικός",
        groups: {
            morfology:
                '<em>ζωγραφική </em>→ ζωγραφικ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["painting, art of painting"],
        transls: ["From the word Ζωγραφικός — pictorial, graphic"],
        translation: "painting, art of painting",
        kind: "Nouns in -α, -η from adjectives",
        unicTransl: "pictorial, graphic",
        notice: "",
    },
    {
        word: "ξέρα",
        base: "ξερός",
        groups: {
            morfology:
                '<em>ξέρα </em>→ ξερ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["dryness, dry land, reef"],
        transls: ["From the word Ξερός — dry, arid, lean"],
        translation: "dryness, dry land, reef",
        kind: "Nouns in -α, -η from adjectives",
        unicTransl: "dry, arid, lean",
        notice: "",
    },
    {
        word: "πίκρα",
        base: "πικρός",
        groups: {
            morfology:
                '<em>πίκρα </em>→ πικρ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["bitterness, grief"],
        transls: ["From the word Πικρός — bitter"],
        translation: "bitterness, grief",
        kind: "Nouns in -α, -η from adjectives",
        unicTransl: "bitter",
        notice: "",
    },
    {
        word: "φοβέρα",
        base: "φοβερός",
        groups: {
            morfology:
                '<em>φοβέρα </em>→ φοβερ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["threat, intimidation"],
        transls: ["From the word Φοβερός — terrible, scary"],
        translation: "threat, intimidation",
        kind: "Nouns in -α, -η from adjectives",
        unicTransl: "terrible, scary",
        notice: "",
    },
    {
        word: "ψύχρα",
        base: "ψυχρός",
        groups: {
            morfology:
                '<em>ψύχρα </em>→ ψυχρ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["cold, frost"],
        transls: ["From the word Ψυχρός — cold"],
        translation: "cold, frost",
        kind: "Nouns in -α, -η from adjectives",
        unicTransl: "cold",
        notice: "",
    },
    {
        word: "ανταγωνιστής",
        base: "ανταγωνίζομαι",
        groups: {
            morfology:
                '<em>ανταγωνιστής </em>→ ανταγων +<span style="color: #b87333"> -ιστής</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">ἀνταγωνίζομαι</span> – to compete < <span style="color:#7a9473">ἀγωνίζομαι</span> – to compete < <span style="color:#7a9473">ἀγών</span> – assembly < <span style="color:#7a9473">ἄγω</span> – to lead.',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["competitor"],
        transls: ["From the word Ανταγωνίζομαι — to compete"],
        translation: "competitor",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to compete",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "βιαστής",
        base: "βιάζω",
        groups: {
            morfology:
                '<em>βιαστής </em>→ βιάζ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -της</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">βιάζω</span> – to use force < <span style="color:#7a9473">βία</span> – force, violence.',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["rapist"],
        transls: ["From the word Βιάζω — to rape"],
        translation: "rapist",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to rape",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "εκδότης",
        base: "εκδίδω",
        groups: {
            morfology:
                '<em>εκδότης </em>→ εκδ<span style="color: #b87333">ίδω</span> +<span style="color: #b87333"> -ότης</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">εκδίδω</span> – to publish.',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["publisher"],
        transls: ["From the word Εκδίδω — to publish"],
        translation: "publisher",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to publish",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "ενθουσιαστής",
        base: "ενθουσιάζω",
        groups: {
            morfology:
                '<em>ενθουσιαστής </em>→ ενθουσιάζ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -της</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ενθουσιάζω</span> – to be inspired < Ancient Greek (<span style="color:#7a9473">ἐνθουσιάζω</span> < <span style="color:#7a9473">ἔνθους</span> – inspired, enthusiastic < <span style="color:#7a9473">ἔνθεος</span> – inspired < <span style="color:#7a9473">ἐν</span> + <span style="color:#7a9473">θεός</span> – with God).',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["enthusiast"],
        transls: ["From the word Ενθουσιάζω — to be inspired"],
        translation: "enthusiast",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to be inspired",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "επενδυτής",
        base: "επενδύω",
        groups: {
            morfology:
                '<em>επενδυτής </em>→ επενδύ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -τής</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">ἐπενδύτης</span> < <span style="color:#7a9473">ἐπενδύω</span> – to put on < <span style="color:#7a9473">ἐνδύω</span> – to dress, enter < <span style="color:#7a9473">δύω</span> – to enter.',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["investor"],
        transls: ["From the word Επενδύω — to invest"],
        translation: "investor",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to invest",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "επισκέπτης",
        base: "επισκέπτομαι",
        groups: {
            morfology:
                '<em>επισκέπτης </em>→ επισκέπτ<span style="color: #b87333">ομαι</span> +<span style="color: #b87333"> -της</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἐπισκέπτης</span> < <span style="color:#7a9473">ἐπισκέπτομαι</span> — to visit < <span style="color:#7a9473">σκέπτομαι</span> – to look, observe).',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["visitor"],
        transls: ["From the word Επισκέπτομαι — to visit"],
        translation: "visitor",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to visit",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "θεριστής",
        base: "θερίζω",
        groups: {
            morfology:
                '<em>θεριστής </em>→ θερ<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -ιστης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["reaper"],
        transls: ["From the word Θερίζω — to reap"],
        translation: "reaper",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to reap",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "καπνιστής",
        base: "καπνίζω",
        groups: {
            morfology:
                '<em>καπνιστής </em>→ καπν<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -ιστης</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">καπνίζω</span> – to smoke < <span style="color:#7a9473">καπνός</span> – smoke)',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["smoker"],
        transls: ["From the word Καπνίζω — to smoke"],
        translation: "smoker",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to smoke",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "λυτρωτής",
        base: "λυτρώνω",
        groups: {
            morfology:
                '<em>λυτρωτής </em>→ λυτρ<span style="color: #b87333">ώνω</span> +<span style="color: #b87333"> -ωτης</span>',
            etymology:
                '<br>From Koine Greek <span style="color:#7a9473">λυτρωτής</span> < Ancient Greek <span style="color:#7a9473">λυτρόω</span> – to redeem, release < <span style="color:#7a9473">λύτρον</span> – ransom, redemption < <span style="color:#7a9473">λύω</span> – to release + <span style="color:#7a9473">-τρον</span> (instrumental suffix).',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["redeemer, saviour"],
        transls: ["From the word Λυτρώνω — to redeem"],
        translation: "redeemer, saviour",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to redeem",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "νικητής",
        base: "νικάω",
        groups: {
            morfology:
                '<em>νικητής </em>→ νικ<span style="color: #b87333">άω</span> +<span style="color: #b87333"> -ητης</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">νικητής</span> < <span style="color:#7a9473">νικάω, νικῶ</span> – to win < <span style="color:#7a9473">νίκη</span> – victory)',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["winner"],
        transls: ["From the word Νικάω — to win"],
        translation: "winner",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to win",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "παίχτης",
        base: "παίζω",
        groups: {
            morfology:
                '<em>παίχτης </em>→ παίζω, παίχ<span style="color: #b87333">τηκα</span> +<span style="color: #b87333"> -της</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">παίκτης</span> < Ancient Greek (<span style="color:#7a9473">παίκτης</span> < <span style="color:#7a9473">παίζω</span> – to play < <span style="color:#7a9473">παῖς</span> – child)',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["player, performer"],
        transls: ["From the word Παίζω — to play"],
        translation: "player, performer",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to play",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "ποιητής",
        base: "ποιώ",
        groups: {
            morfology:
                '<em>ποιητής </em>→ ποι<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ητής</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">ποιητής</span> < <span style="color:#7a9473">ποιέω</span>, <span style="color:#7a9473">ποιῶ</span> – to make, create.',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["poet"],
        transls: ["From the word Ποιώ — to create, make"],
        translation: "poet",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to create, make",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "πολεμιστής",
        base: "πολεμώ",
        groups: {
            morfology:
                '<em>πολεμιστής </em>→ πολεμ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ιστής</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">πολεμῶ</span>, <span style="color:#7a9473">πολεμέω</span> – to wage war < <span style="color:#7a9473">πόλεμος</span> – war).',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["warrior"],
        transls: ["From the word Πολεμώ — to wage war"],
        translation: "warrior",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to wage war",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "προγραμματιστής",
        base: "προγραμματίζω",
        groups: {
            morfology:
                '<em>προγραμματιστής </em>→ προγραμματ<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -ιστης</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">προγραμματίζω</span> – to program < French <span style="color:#7a9473">programmer</span> or English <span style="color:#7a9473">program</span>.',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["programmer"],
        transls: ["From the word Προγραμματίζω — to program"],
        translation: "programmer",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to program",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "προδότης",
        base: "προδίδω",
        groups: {
            morfology:
                '<em>προδότης </em>→ προδ<span style="color: #b87333">ίδω</span> +<span style="color: #b87333"> -ότης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["traitor"],
        transls: ["From the word Προδίδω — to betray"],
        translation: "traitor",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to betray",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "προπονητής",
        base: "προπονώ",
        groups: {
            morfology:
                '<em>προπονητής </em>→ προπον<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ητής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["coach, trainer"],
        transls: ["From the word Προπονώ — to train"],
        translation: "coach, trainer",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to train",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "ράφτης",
        base: "ράβω",
        groups: {
            morfology:
                '<em>ράφτης </em>→ ράβ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -της</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["tailor"],
        transls: ["From the word Ράβω — to sew"],
        translation: "tailor",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to sew",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "συλλέκτης",
        base: "συλλέγω",
        groups: {
            morfology:
                '<em>συλλέκτης </em>→ συλλέγ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -της</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["collector"],
        transls: ["From the word Συλλέγω — to collect"],
        translation: "collector",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to collect",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "τραγουδιστής",
        base: "τραγουδώ",
        groups: {
            morfology:
                '<em>τραγουδιστής </em>→ τραγουδ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ιστής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["singer"],
        transls: ["From the word Τραγουδώ — to sing"],
        translation: "singer",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to sing",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "υφαντής",
        base: "υφαίνω",
        groups: {
            morfology:
                '<em>υφαντής </em>→ υφαίν<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -της</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["weaver"],
        transls: ["From the word Υφαίνω — to weave"],
        translation: "weaver",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to weave",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "φορτωτής",
        base: "φορτώνω",
        groups: {
            morfology:
                '<em>φορτωτής </em>→ φορτώ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -τής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["loader"],
        transls: ["From the word Φορτώνω — to load"],
        translation: "loader",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "to load",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "ανθρωπιστής",
        base: "άνθρωπος",
        groups: {
            morfology:
                '<em>ανθρωπιστής </em>→ άνθρωπ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ιστής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["humanist"],
        transls: ["From the word Άνθρωπος — human"],
        translation: "humanist",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "human",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "εγωιστής",
        base: "εγώ",
        groups: {
            morfology:
                '<em>εγωιστής </em>→ εγ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ιστής</span>',
            etymology:
                '<br>From French <span style="color:#7a9473">égoïste</span> < Ancient Greek <span style="color:#7a9473">ἐγώ</span> – I.',
            aplication:
                "<br>Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
        },
        qws: ["egoist"],
        transls: ["From the word Εγώ — I"],
        translation: "egoist",
        kind: "Nouns in -της, -ιστης, -ότης from various parts of speech",
        unicTransl: "I",
        notice: "Nouns in -της, -ιστης, -ότης denote the doer of an action and are formed mainly from verbs. With the same meaning, nouns in -(ά)τορας and -έας, -ιάς are also formed.",
    },
    {
        word: "γεροντάκος",
        base: "γέροντας",
        groups: {
            morfology:
                '<em>γεροντάκος </em>→ γέροντ<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -άκος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["old man (affectionate)"],
        transls: ["From the word Γέροντας — old man"],
        translation: "old man (affectionate)",
        kind: "Diminutive nouns in -άκος, -άκης, -άκι from nouns",
        unicTransl: "old man",
        notice: "Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "δρομάκος",
        base: "δρόμος",
        groups: {
            morfology:
                '<em>δρομάκος </em>→ δρόμ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -άκος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["path, lane (diminutive)"],
        transls: ["From the word Δρόμος — road"],
        translation: "path, lane (diminutive)",
        kind: "Diminutive nouns in -άκος, -άκης, -άκι from nouns",
        unicTransl: "road",
        notice: "Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "μαθητάκος",
        base: "μαθητής",
        groups: {
            morfology:
                '<em>μαθητάκος </em>→ μαθητ<span style="color: #b87333">ής</span> +<span style="color: #b87333"> -άκος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["pupil (affectionate)"],
        transls: ["From the word Μαθητής — pupil"],
        translation: "pupil (affectionate)",
        kind: "Diminutive nouns in -άκος, -άκης, -άκι from nouns",
        unicTransl: "pupil",
        notice: "Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "γιωργάκης",
        base: "γιώργος",
        groups: {
            morfology:
                '<em>γιωργάκης </em>→ γιώργ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -άκης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["Georgie (diminutive)"],
        transls: ["From the word Γιώργος — Georgios"],
        translation: "Georgie (diminutive)",
        kind: "Diminutive nouns in -άκος, -άκης, -άκι from nouns",
        unicTransl: "Georgios",
        notice: "Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "κοσμάκης",
        base: "κόσμος",
        groups: {
            morfology:
                '<em>κοσμάκης </em>→ κόσμ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -άκης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["little world (diminutive)"],
        transls: ["From the word Κόσμος — world"],
        translation: "little world (diminutive)",
        kind: "Diminutive nouns in -άκος, -άκης, -άκι from nouns",
        unicTransl: "world",
        notice: "Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "αρνάκι",
        base: "αρνί",
        groups: {
            morfology:
                '<em>αρνάκι </em>→ αρν<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -άκι</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">αρνί</span> – lamb < Medieval Greek <span style="color:#7a9473">ἀρνίν</span> – lamb < Ancient Greek (<span style="color:#7a9473">ἀρνίον</span> – lamb < <span style="color:#7a9473">ἀρήν</span> – ram)',
            aplication:
                "<br>Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["little lamb"],
        transls: ["From the word Αρνί — lamb"],
        translation: "little lamb",
        kind: "Diminutive nouns in -άκος, -άκης, -άκι from nouns",
        unicTransl: "lamb",
        notice: "Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "δαχτυλάκι",
        base: "δάχτυλο",
        groups: {
            morfology:
                '<em>δαχτυλάκι </em>→ δάχτυλ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -άκι</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["little finger"],
        transls: ["From the word Δάχτυλο — finger"],
        translation: "little finger",
        kind: "Diminutive nouns in -άκος, -άκης, -άκι from nouns",
        unicTransl: "finger",
        notice: "Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "παιδάκι",
        base: "παιδί",
        groups: {
            morfology:
                '<em>παιδάκι </em>→ παιδ<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -άκι</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["little child"],
        transls: ["From the word Παιδί — child"],
        translation: "little child",
        kind: "Diminutive nouns in -άκος, -άκης, -άκι from nouns",
        unicTransl: "child",
        notice: "Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "ψαράκι",
        base: "ψάρι",
        groups: {
            morfology:
                '<em>ψαράκι </em>→ ψάρ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -άκι</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ψάρι</span> – fish < Medieval Greek <span style="color:#7a9473">ψάρι</span> – fish < Ancient Greek (<span style="color:#7a9473">ὀψάριον</span> – delicacy < <span style="color:#7a9473">ὄψον</span> – delicacy).',
            aplication:
                "<br>Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["little fish"],
        transls: ["From the word Ψάρι — fish"],
        translation: "little fish",
        kind: "Diminutive nouns in -άκος, -άκης, -άκι from nouns",
        unicTransl: "fish",
        notice: "Nouns in -άκος, -άκης, -άκι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -ίτσα, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "ελενίτσα",
        base: "ελένη",
        groups: {
            morfology:
                '<em>ελενίτσα </em>→ ελέν<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ίτσα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ίτσα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["Eleni (affectionate)"],
        transls: ["From the word Ελένη — Eleni"],
        translation: "Eleni (affectionate)",
        kind: "Diminutive nouns in -ίτσα from nouns",
        unicTransl: "Eleni",
        notice: "Nouns in -ίτσα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "κλωστίτσα",
        base: "κλωστή",
        groups: {
            morfology:
                '<em>κλωστίτσα </em>→ κλωστ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ίτσα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">κλωστή</span> – thread < Medieval Greek <span style="color:#7a9473">κλωστή</span> < Ancient Greek (<span style="color:#7a9473">κλώθω</span> – to spin < <span style="color:#7a9473">κάλαθος</span> – basket, wicker)',
            aplication:
                "<br>Nouns in -ίτσα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["little thread"],
        transls: ["From the word Κλωστή — thread"],
        translation: "little thread",
        kind: "Diminutive nouns in -ίτσα from nouns",
        unicTransl: "thread",
        notice: "Nouns in -ίτσα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "μηλίτσα",
        base: "μήλο",
        groups: {
            morfology:
                '<em>μηλίτσα </em>→ μήλ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ίτσα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">μήλο</span> – apple < Ancient Greek <span style="color:#7a9473">μῆλον</span> – apple.',
            aplication:
                "<br>Nouns in -ίτσα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["little apple"],
        transls: ["From the word Μήλο — apple"],
        translation: "little apple",
        kind: "Diminutive nouns in -ίτσα from nouns",
        unicTransl: "apple",
        notice: "Nouns in -ίτσα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ούδα, -ούδι, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "αγγελούδι",
        base: "άγγελος",
        groups: {
            morfology:
                '<em>αγγελούδι </em>→ άγγελ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ούδι</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ούδα, -ούδι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["little angel"],
        transls: ["From the word Άγγελος — angel"],
        translation: "little angel",
        kind: "Diminutive nouns in -ούδα, -ούδι from nouns",
        unicTransl: "angel",
        notice: "Nouns in -ούδα, -ούδι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "κοπελούδα",
        base: "κοπέλα",
        groups: {
            morfology:
                '<em>κοπελούδα </em>→ κοπέλ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ούδα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ούδα, -ούδι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["young girl (affectionate)"],
        transls: ["From the word Κοπέλα — girl"],
        translation: "young girl (affectionate)",
        kind: "Diminutive nouns in -ούδα, -ούδι from nouns",
        unicTransl: "girl",
        notice: "Nouns in -ούδα, -ούδι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούλης, -ουλα, -ούλι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "αδερφούλης",
        base: "αδερφός",
        groups: {
            morfology:
                '<em>αδερφούλης </em>→ αδερφ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ούλης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["brother (affectionate)"],
        transls: ["From the word Αδερφός — brother"],
        translation: "brother (affectionate)",
        kind: "Diminutive nouns in -ούλης, -ουλα, -ούλι from nouns",
        unicTransl: "brother",
        notice: "Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "παππούλης",
        base: "παππούς",
        groups: {
            morfology:
                '<em>παππούλης </em>→ παππ<span style="color: #b87333">ούς</span> +<span style="color: #b87333"> -ούλης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["grandfather (affectionate)"],
        transls: ["From the word Παππούς — grandfather"],
        translation: "grandfather (affectionate)",
        kind: "Diminutive nouns in -ούλης, -ουλα, -ούλι from nouns",
        unicTransl: "grandfather",
        notice: "Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "αγγελικούλα",
        base: "αγγελίκα",
        groups: {
            morfology:
                '<em>αγγελικούλα </em>→ αγγελ<span style="color: #b87333">ίκα</span> +<span style="color: #b87333"> -ούλα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["Angelica (affectionate)"],
        transls: ["From the word Αγγελίκα — Angelica"],
        translation: "Angelica (affectionate)",
        kind: "Diminutive nouns in -ούλης, -ουλα, -ούλι from nouns",
        unicTransl: "Angelica",
        notice: "Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "αδερφούλα",
        base: "αδερφή",
        groups: {
            morfology:
                '<em>αδερφούλα </em>→ αδερφ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ούλα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["sister (affectionate)"],
        transls: ["From the word Αδερφή — sister"],
        translation: "sister (affectionate)",
        kind: "Diminutive nouns in -ούλης, -ουλα, -ούλι from nouns",
        unicTransl: "sister",
        notice: "Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "βρυσούλα",
        base: "βρύση",
        groups: {
            morfology:
                '<em>βρυσούλα </em>→ βρύσ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ούλα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["little spring, little tap"],
        transls: ["From the word Βρύση — spring, tap"],
        translation: "little spring, little tap",
        kind: "Diminutive nouns in -ούλης, -ουλα, -ούλι from nouns",
        unicTransl: "spring, tap",
        notice: "Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "κορούλα",
        base: "κόρη",
        groups: {
            morfology:
                '<em>κορούλα </em>→ κόρ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ούλα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["little daughter"],
        transls: ["From the word Κόρη — daughter"],
        translation: "little daughter",
        kind: "Diminutive nouns in -ούλης, -ουλα, -ούλι from nouns",
        unicTransl: "daughter",
        notice: "Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "μητερούλα",
        base: "μητέρα",
        groups: {
            morfology:
                '<em>μητερούλα </em>→ μητέρ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ούλα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["mummy"],
        transls: ["From the word Μητέρα — mother"],
        translation: "mummy",
        kind: "Diminutive nouns in -ούλης, -ουλα, -ούλι from nouns",
        unicTransl: "mother",
        notice: "Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "σακούλι",
        base: "σακί",
        groups: {
            morfology:
                '<em>σακούλι </em>→ σακ<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -ούλι</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
        },
        qws: ["little bag"],
        transls: ["From the word Σακί — sack"],
        translation: "little bag",
        kind: "Diminutive nouns in -ούλης, -ουλα, -ούλι from nouns",
        unicTransl: "sack",
        notice: "Nouns in -ούλης, -ουλα, -ούλι are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -όπουλο, -οπούλα are also formed.",
    },
    {
        word: "αρχοντόπουλο / αρχοντοπούλα",
        base: "άρχοντας",
        groups: {
            morfology:
                '<em>αρχοντόπουλο, αρχοντοπούλα </em>→ άρχοντ<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -όπουλο</span>/<span style="color: #b87333">-οπούλα</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">ἄρχοντας</span> – lord, ruler, rich man < Ancient Greek (<span style="color:#7a9473">ἄρχων</span> – ruler, leader < <span style="color:#7a9473">ἄρχω</span> – to begin, lead, rule);',
            aplication:
                "<br>Nouns in -όπουλο, -οπούλα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
        },
        qws: ["son of nobility, daughter of nobility"],
        transls: ["From the word Άρχοντας — lord, ruler, rich man, archon"],
        translation: "son of nobility, daughter of nobility",
        kind: "Diminutive nouns in -όπουλο, -οπούλα from nouns",
        unicTransl: "lord, ruler, rich man, archon",
        notice: "Nouns in -όπουλο, -οπούλα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
    },
    {
        word: "βασιλόπουλο / βασιλοπούλα",
        base: "βασιλιάς",
        groups: {
            morfology:
                '<em>βασιλόπουλο, βασιλοπούλα </em>→ βασιλ<span style="color: #b87333">ιάς</span> +<span style="color: #b87333"> -όπουλο/-οπούλα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Nouns in -όπουλο, -οπούλα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
        },
        qws: ["prince, princess"],
        transls: ["From the word Βασιλιάς — king"],
        translation: "prince, princess",
        kind: "Diminutive nouns in -όπουλο, -οπούλα from nouns",
        unicTransl: "king",
        notice: "Nouns in -όπουλο, -οπούλα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
    },
    {
        word: "βοσκόπουλο, βοσκοπούλα",
        base: "βοσκός",
        groups: {
            morfology:
                '<em>βοσκόπουλο, βοσκοπούλα </em>→ βοσκ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -όπουλο</span>/<span style="color: #b87333">-οπούλα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">βοσκός</span> – shepherd < Ancient Greek (<span style="color:#7a9473">βοσκός</span> < <span style="color:#7a9473">βόσκω</span> – to graze)',
            aplication:
                "<br>Nouns in -όπουλο, -οπούλα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
        },
        qws: ["shepherd boy, shepherdess"],
        transls: ["From the word Βοσκός – shepherd"],
        translation: "shepherd boy, shepherdess",
        kind: "Diminutive nouns in -όπουλο, -οπούλα from nouns",
        unicTransl: "shepherd",
        notice: "Nouns in -όπουλο, -οπούλα are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
    },
    {
        word: "βαρκάκι / βαρκίτσα / βαρκούλα",
        base: "βάρκα",
        groups: {
            morfology:
                '<em>βαρκάκι, βαρκίτσα, βαρκούλα </em>→ βάρκ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -άκι/-ίτσα/-ούλα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">βάρκα</span> – boat < Late Latin <span style="color:#7a9473">barca</span> < Latin <span style="color:#7a9473">baris</span> < Ancient Greek <span style="color:#7a9473">βᾶρις</span> < Ancient Egyptian <span style="color:#7a9473">/bair/</span>.',
            aplication:
                "<br>These nouns have multiple endings and are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -όπουλο, -οπούλα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
        },
        qws: ["little boat"],
        transls: ["From the word Βάρκα — boat"],
        translation: "little boat",
        kind: "Diminutive nouns with multiple endings from nouns",
        unicTransl: "boat",
        notice: "These nouns have multiple endings and are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -όπουλο, -οπούλα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
    },
    {
        word: "γατάκι / γατίτσα / γατούλα / γατούλι",
        base: "γάτα",
        groups: {
            morfology:
                '<em>γατάκι, γατίτσα, γατούλα, γατούλι </em>→ γάτ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -άκι/-ίτσα/-ούλα/-ούλι</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">γάτα</span> – cat < Medieval Greek <span style="color:#7a9473">γάτα</span> < Medieval Latin <span style="color:#7a9473">gatta</span> < Late Latin <span style="color:#7a9473">catta</span>, <span style="color:#7a9473">cattus</span>.',
            aplication:
                "<br>These nouns have multiple endings and are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -όπουλο, -οπούλα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
        },
        qws: ["kitten"],
        transls: ["From the word Γάτα — cat"],
        translation: "kitten",
        kind: "Diminutive nouns with multiple endings from nouns",
        unicTransl: "cat",
        notice: "These nouns have multiple endings and are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -όπουλο, -οπούλα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
    },
    {
        word: "πετρίτσα / πετρούλα / πετράδι / πετραδάκι",
        base: "πέτρα",
        groups: {
            morfology:
                '<em>πετρίτσα, πετρούλα, πετράδι, πετραδάκι </em>→ πέτρα +<span style="color: #b87333"> -ίτσα/-ούλα/-άδι/-αδάκι</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">πέτρα</span> – stone < Ancient Greek <span style="color:#7a9473">πέτρα</span> – rock, stone.',
            aplication:
                "<br>These nouns have multiple endings and are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -όπουλο, -οπούλα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
        },
        qws: ["pebble, little stone"],
        transls: ["From the word Πέτρα — stone"],
        translation: "pebble, little stone",
        kind: "Diminutive nouns with multiple endings from nouns",
        unicTransl: "stone",
        notice: "These nouns have multiple endings and are diminutive forms of the noun from which they are derived. With the same meaning, nouns in -άκος, -άκης, -άκι, -ίτσα, -όπουλο, -οπούλα, -ούδα, -ούδι and -ούλης, -ουλα, -ούλι are also formed.",
    },
    {
        word: "βαρέλα",
        base: "βαρέλι",
        groups: {
            morfology:
                '<em>βαρέλα </em>→ βαρέλ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">βαρέλι</span> – barrel < Medieval Greek <span style="color:#7a9473">βαρέλι</span> < Italian <span style="color:#7a9473">barella</span>',
            aplication:
                "<br>Nouns in -α are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -άρα, -αρας are also formed.",
        },
        qws: ["big barrel"],
        transls: ["From the word Βαρέλι — barrel"],
        translation: "big barrel",
        kind: "Augmentative nouns in -α from nouns",
        unicTransl: "barrel",
        notice: "Nouns in -α are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -άρα, -αρας are also formed.",
    },
    {
        word: "καλοκύθα",
        base: "καλοκύθι",
        groups: {
            morfology:
                '<em>καλοκύθα </em>→ καλοκύθ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">καλοκύθι</span> – pumpkin < Ancient Greek <span style="color:#7a9473">καλοκύνθη</span>',
            aplication:
                "<br>Nouns in -α are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -άρα, -αρας are also formed.",
        },
        qws: ["big pumpkin"],
        transls: ["From the word Καλοκύθι — pumpkin"],
        translation: "big pumpkin",
        kind: "Augmentative nouns in -α from nouns",
        unicTransl: "pumpkin",
        notice: "Nouns in -α are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -άρα, -αρας are also formed.",
    },
    {
        word: "κασόνα",
        base: "κασόνι",
        groups: {
            morfology:
                '<em>κασόνα </em>→ κασόν<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">κασόνι</span> – box < Italian <span style="color:#7a9473">cassone</span>',
            aplication:
                "<br>Nouns in -α are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -άρα, -αρας are also formed.",
        },
        qws: ["big box, chest"],
        transls: ["From the word Κασόνι — box"],
        translation: "big box, chest",
        kind: "Augmentative nouns in -α from nouns",
        unicTransl: "box",
        notice: "Nouns in -α are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -άρα, -αρας are also formed.",
    },
    {
        word: "κουτάλα",
        base: "κουτάλι",
        groups: {
            morfology:
                '<em>κουτάλα </em>→ κουτάλ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">κουτάλι</span> – spoon < Medieval Greek <span style="color:#7a9473">κουτάλιν</span> < Koine Greek <span style="color:#7a9473">κουτάλιον</span>, <span style="color:#7a9473">κωτάλιον</span> – diminutive of ladle < Medieval Greek <span style="color:#7a9473">κώταλις</span> – stirrer, ladle.',
            aplication:
                "<br>Nouns in -α are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -άρα, -αρας are also formed.",
        },
        qws: ["big spoon, ladle"],
        transls: ["From the word Κουτάλι — spoon"],
        translation: "big spoon, ladle",
        kind: "Augmentative nouns in -α from nouns",
        unicTransl: "spoon",
        notice: "Nouns in -α are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -άρα, -αρας are also formed.",
    },
    {
        word: "φετάρα",
        base: "φέτα",
        groups: {
            morfology:
                '<em>φετάρα </em>→ φέτ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -άρα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">φέτα</span> – slice < Italian <span style="color:#7a9473">fetta</span> – slice < Latin (<span style="color:#7a9473">offitta</span> – slice, piece < <span style="color:#7a9473">offa</span> – chunk, piece)',
            aplication:
                "<br>Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
        },
        qws: ["large slice, hunk"],
        transls: ["From the word Φέτα — slice"],
        translation: "large slice, hunk",
        kind: "Augmentative nouns in -άρα, -αρας from nouns",
        unicTransl: "slice",
        notice: "Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
    },
    {
        word: "φωνάρα",
        base: "φωνή",
        groups: {
            morfology:
                '<em>φωνάρα </em>→ φων<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -άρα</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">φωνή</span> – voice, sound < Ancient Greek <span style="color:#7a9473">φωνή</span>',
            aplication:
                "<br>Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
        },
        qws: ["loud voice, shout"],
        transls: ["From the word Φωνή — voice, sound"],
        translation: "loud voice, shout",
        kind: "Augmentative nouns in -άρα, -αρας from nouns",
        unicTransl: "voice, sound",
        notice: "Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
    },
    {
        word: "δουλευταράς",
        base: "δουλευτής",
        groups: {
            morfology:
                '<em>δουλευταράς </em>→ δουλευτ<span style="color: #b87333">ής</span> +<span style="color: #b87333"> -άρας</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">δουλευτής</span> – worker, labourer < Koine Greek (<span style="color:#7a9473">δουλευτής</span> – worker, servant, slave < <span style="color:#7a9473">δουλεύω</span> – to be a slave, serve) < Ancient Greek (<span style="color:#7a9473">δουλόω</span> – to enslave < <span style="color:#7a9473">δοῦλος</span> – slave)',
            aplication:
                "<br>Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
        },
        qws: ["hard worker"],
        transls: ["From the word Δουλευτής — worker, labourer"],
        translation: "hard worker",
        kind: "Augmentative nouns in -άρα, -αρας from nouns",
        unicTransl: "worker, labourer",
        notice: "Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
    },
    {
        word: "κοιλαράς",
        base: "κοιλιά",
        groups: {
            morfology:
                '<em>κοιλαράς </em>→ κοιλ<span style="color: #b87333">ιά</span> +<span style="color: #b87333"> -άρας</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">κοιλιά</span> – belly < Medieval Greek <span style="color:#7a9473">κοιλιά</span> – belly < Ancient Greek <span style="color:#7a9473">κοιλία</span> – cavity < <span style="color:#7a9473">κοῖλος</span> – hollow',
            aplication:
                "<br>Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
        },
        qws: ["big belly, pot-bellied"],
        transls: ["From the word Κοιλιά — belly"],
        translation: "big belly, pot-bellied",
        kind: "Augmentative nouns in -άρα, -αρας from nouns",
        unicTransl: "belly",
        notice: "Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
    },
    {
        word: "χορευταράς",
        base: "χορευτής",
        groups: {
            morfology:
                '<em>χορευταράς </em>→ χορευτ<span style="color: #b87333">ής</span> +<span style="color: #b87333"> -άρας</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">χορευτής</span> – dancer < Ancient Greek (<span style="color:#7a9473">χορευτής</span> < <span style="color:#7a9473">χορός</span> – dance)',
            aplication:
                "<br>Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
        },
        qws: ["keen dancer"],
        transls: ["From the word Χορευτής — dancer"],
        translation: "keen dancer",
        kind: "Augmentative nouns in -άρα, -αρας from nouns",
        unicTransl: "dancer",
        notice: "Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
    },
    {
        word: "παίδαρας",
        base: "παιδί",
        groups: {
            morfology:
                '<em>παίδαρας </em>→ παιδ<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -άρας</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">παιδί</span> – child < Medieval Greek <span style="color:#7a9473">παιδίν</span> < Ancient Greek (<span style="color:#7a9473">παιδίον</span> – little child < <span style="color:#7a9473">παῖς</span> – child)',
            aplication:
                "<br>Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
        },
        qws: ["big child"],
        transls: ["From the word Παιδί — child"],
        translation: "big child",
        kind: "Augmentative nouns in -άρα, -αρας from nouns",
        unicTransl: "child",
        notice: "Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
    },
    {
        word: "σκύλαρας",
        base: "σκυλί, σκύλος",
        groups: {
            morfology:
                '<em>σκύλαρας </em>→ σκυλ<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -άρας</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">σκυλί</span>, <span style="color:#7a9473">σκύλος</span> – dog < Medieval Greek <span style="color:#7a9473">σκυλίον</span> – little dog < Ancient Greek <span style="color:#7a9473">σκύλος</span> – dog.',
            aplication:
                "<br>Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
        },
        qws: ["big dog"],
        transls: ["From the word Σκυλί, σκύλος — dog"],
        translation: "big dog",
        kind: "Augmentative nouns in -άρα, -αρας from nouns",
        unicTransl: "dog",
        notice: "Nouns in -άρα, -αρας are augmentative forms of the noun from which they are derived. With the same meaning, nouns in -α are also formed.",
    },
    {
        word: "ηπερώτης",
        base: "Ήπερεις",
        groups: {
            morfology:
                '<em>ηπερώτης </em>→ Ήπερ<span style="color: #b87333">εις</span> +<span style="color: #b87333"> -ώτης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
        },
        qws: ["inhabitant of Epirus"],
        transls: ["From the word Ήπερεις — Epirus"],
        translation: "inhabitant of Epirus",
        kind: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης from nouns",
        unicTransl: "Epirus",
        notice: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
    },
    {
        word: "θρακιώτης",
        base: "Θράκη",
        groups: {
            morfology:
                '<em>θρακιώτης </em>→ Θράκ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ιώτης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
        },
        qws: ["Thracian"],
        transls: ["From the word Θράκη — Thrace"],
        translation: "Thracian",
        kind: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης from nouns",
        unicTransl: "Thrace",
        notice: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
    },
    {
        word: "ρουμελιώτης",
        base: "Ρούμελη",
        groups: {
            morfology:
                '<em>ρουμελιώτης </em>→ Ρούμελ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ιώτης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
        },
        qws: ["inhabitant of Roumeli"],
        transls: ["From the word Ρούμελη — Roumeli"],
        translation: "inhabitant of Roumeli",
        kind: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης from nouns",
        unicTransl: "Roumeli",
        notice: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
    },
    {
        word: "σουλιώτης",
        base: "Σούλι",
        groups: {
            morfology:
                '<em>σουλιώτης </em>→ Σούλ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ιώτης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
        },
        qws: ["inhabitant of Souli"],
        transls: ["From the word Σούλι — Souli"],
        translation: "inhabitant of Souli",
        kind: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης from nouns",
        unicTransl: "Souli",
        notice: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
    },
    {
        word: "ανατολίτης",
        base: "ανατολή",
        groups: {
            morfology:
                '<em>ανατολίτης </em>→ ανατολ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ίτης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
        },
        qws: ["inhabitant of the East"],
        transls: ["From the word Ανατολή — East"],
        translation: "inhabitant of the East",
        kind: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης from nouns",
        unicTransl: "East",
        notice: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
    },
    {
        word: "αραχοβίτης",
        base: "Αράχοβα",
        groups: {
            morfology:
                '<em>αραχοβίτης </em>→ Αράχοβ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ίτης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
        },
        qws: ["inhabitant of Arachova"],
        transls: ["From the word Αράχοβα — Arachova"],
        translation: "inhabitant of Arachova",
        kind: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης from nouns",
        unicTransl: "Arachova",
        notice: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
    },
    {
        word: "μοσχοβίτης",
        base: "Μόσχα",
        groups: {
            morfology:
                '<em>μοσχοβίτης </em>→ Μόσχ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -οβίτης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
        },
        qws: ["inhabitant of Moscow"],
        transls: ["From the word Μόσχα — Moscow"],
        translation: "inhabitant of Moscow",
        kind: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης from nouns",
        unicTransl: "Moscow",
        notice: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
    },
    {
        word: "πολίτης",
        base: "πόλη",
        groups: {
            morfology:
                '<em>πολίτης </em>→ πόλ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ίτης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
        },
        qws: ["citizen"],
        transls: ["From the word Πόλη — city"],
        translation: "citizen",
        kind: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης from nouns",
        unicTransl: "city",
        notice: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
    },
    {
        word: "μοραίτη",
        base: "Μοριάς",
        groups: {
            morfology:
                '<em>μοραίτη </em>→ Μορ<span style="color: #b87333">ιάς</span> +<span style="color: #b87333"> -αίτη</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
        },
        qws: ["inhabitant of the Peloponnese"],
        transls: ["From the word Μοριάς — Peloponnese"],
        translation: "inhabitant of the Peloponnese",
        kind: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης from nouns",
        unicTransl: "Peloponnese",
        notice: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
    },
    {
        word: "μανιάτης",
        base: "Μάνη",
        groups: {
            morfology:
                '<em>μανιάτης </em>→ Μάν<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ιάτης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
        },
        qws: ["inhabitant of Mani"],
        transls: ["From the word Μάνη — Mani"],
        translation: "inhabitant of Mani",
        kind: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης from nouns",
        unicTransl: "Mani",
        notice: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
    },
    {
        word: "σπαρτιάτης",
        base: "Σπάρτη",
        groups: {
            morfology:
                '<em>σπαρτιάτης </em>→ Σπάρτ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ιάτης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
        },
        qws: ["Spartan"],
        transls: ["From the word Σπάρτη — Sparta"],
        translation: "Spartan",
        kind: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης from nouns",
        unicTransl: "Sparta",
        notice: "Ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης. Also ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός and -αίος, -ιός exist.",
    },
    {
        word: "αλεξανδρινός",
        base: "Αλεξάνδρεια",
        groups: {
            morfology:
                '<em>αλεξανδρινός </em>→ Αλεξάνδρ<span style="color: #b87333">εια</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
        },
        qws: ["Alexandrian"],
        transls: ["From the word Αλεξάνδρεια — Alexandria"],
        translation: "Alexandrian",
        kind: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός from nouns",
        unicTransl: "Alexandria",
        notice: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
    },
    {
        word: "αμερικανός",
        base: "Αμερική",
        groups: {
            morfology:
                '<em>αμερικανός </em>→ Αμερικ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ανός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
        },
        qws: ["American"],
        transls: ["From the word Αμερική — America"],
        translation: "American",
        kind: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός from nouns",
        unicTransl: "America",
        notice: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
    },
    {
        word: "αφρικανός",
        base: "Αφρική",
        groups: {
            morfology:
                '<em>αφρικανός </em>→ Αφρικ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ανός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
        },
        qws: ["African"],
        transls: ["From the word Αφρική — Africa"],
        translation: "African",
        kind: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός from nouns",
        unicTransl: "Africa",
        notice: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
    },
    {
        word: "ουκρανός",
        base: "Ουκρανία",
        groups: {
            morfology:
                '<em>ουκρανός </em>→ Ουκρ<span style="color: #b87333">ανία</span> +<span style="color: #b87333"> -ανός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
        },
        qws: ["Ukrainian"],
        transls: ["From the word Ουκρανία — Ukraine"],
        translation: "Ukrainian",
        kind: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός from nouns",
        unicTransl: "Ukraine",
        notice: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
    },
    {
        word: "πατρινός",
        base: "Πάτρα",
        groups: {
            morfology:
                '<em>πατρινός </em>→ Πάτρ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
        },
        qws: ["inhabitant of Patras"],
        transls: ["From the word Πάτρα — Patras"],
        translation: "inhabitant of Patras",
        kind: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός from nouns",
        unicTransl: "Patras",
        notice: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
    },
    {
        word: "πρεβεζάνος",
        base: "Πρεβέζα",
        groups: {
            morfology:
                '<em>πρεβεζάνος </em>→ Πρεβέζ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -άνος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
        },
        qws: ["inhabitant of Preveza"],
        transls: ["From the word Πρεβέζα — Preveza"],
        translation: "inhabitant of Preveza",
        kind: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός from nouns",
        unicTransl: "Preveza",
        notice: "Ethnic masculine nouns in -ανός, -ιανός, -άνος, -ινός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -αίος, -ιός exist.",
    },
    {
        word: "πολίτισσα",
        base: "πόλη",
        groups: {
            morfology:
                '<em>πολίτισσα </em>→ πόλ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ίτισσα</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic feminine nouns in -ισσα. Also ethnic masculine nouns in -α, -ή exist.",
        },
        qws: ["female citizen"],
        transls: ["From the word Πόλη — city"],
        translation: "female citizen",
        kind: "Ethnic feminine nouns in -ισσα from nouns",
        unicTransl: "city",
        notice: "Ethnic feminine nouns in -ισσα. Also ethnic masculine nouns in -α, -ή exist.",
    },
    {
        word: "ουκρανή",
        base: "ουκρανός",
        groups: {
            morfology:
                '<em>ουκρανή </em>→ ουκραν<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic feminine nouns in -α from paroxytone, -ή from oxytone nouns. Also ethnic masculine nouns in -ισσα exist.",
        },
        qws: ["Ukrainian (female)"],
        transls: ["From the word Ουκρανός — Ukrainian (male)"],
        translation: "Ukrainian (female)",
        kind: "Ethnic feminine nouns in -α from paroxytone, -ή from oxytone nouns",
        unicTransl: "Ukrainian (male)",
        notice: "Ethnic feminine nouns in -α from paroxytone, -ή from oxytone nouns. Also ethnic masculine nouns in -ισσα exist.",
    },
    {
        word: "πρεβεζάνα",
        base: "πρεβεζάνος",
        groups: {
            morfology:
                '<em>πρεβεζάνα </em>→ πρεβεζάν<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -α</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic feminine nouns in -α from paroxytone, -ή from oxytone nouns. Also ethnic masculine nouns in -ισσα exist.",
        },
        qws: ["female inhabitant of Preveza"],
        transls: ["From the word Πρεβεζάνος — inhabitant of Preveza (male)"],
        translation: "female inhabitant of Preveza",
        kind: "Ethnic feminine nouns in -α from paroxytone, -ή from oxytone nouns",
        unicTransl: "inhabitant of Preveza (male)",
        notice: "Ethnic feminine nouns in -α from paroxytone, -ή from oxytone nouns. Also ethnic masculine nouns in -ισσα exist.",
    },
    {
        word: "συριανή",
        base: "συριανός",
        groups: {
            morfology:
                '<em>συριανή </em>→ συριαν<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ή</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic feminine nouns in -α from paroxytone, -ή from oxytone nouns. Also ethnic masculine nouns in -ισσα exist.",
        },
        qws: ["female inhabitant of Syros"],
        transls: ["From the word Συριανός — inhabitant of Syros (male)"],
        translation: "female inhabitant of Syros",
        kind: "Ethnic feminine nouns in -α from paroxytone, -ή from oxytone nouns",
        unicTransl: "inhabitant of Syros (male)",
        notice: "Ethnic feminine nouns in -α from paroxytone, -ή from oxytone nouns. Also ethnic masculine nouns in -ισσα exist.",
    },
    {
        word: "αθηναίος",
        base: "Αθήνα",
        groups: {
            morfology:
                '<em>αθηναίος </em>→ Αθήν<span style="color: #b87333">α</span> +<span style="color: #b87333"> -αίος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -αίος, -ιός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -ανός, -ιανός, -άνος, -ινός exist.",
        },
        qws: ["inhabitant of Athens"],
        transls: ["From the word Αθήνα — Athens"],
        translation: "inhabitant of Athens",
        kind: "Ethnic masculine nouns in -αίος, -ιός from nouns",
        unicTransl: "Athens",
        notice: "Ethnic masculine nouns in -αίος, -ιός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -ανός, -ιανός, -άνος, -ινός exist.",
    },
    {
        word: "ευρωπαίος",
        base: "Ευρώπη",
        groups: {
            morfology:
                '<em>ευρωπαίος </em>→ Ευρώπ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -αίος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -αίος, -ιός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -ανός, -ιανός, -άνος, -ινός exist.",
        },
        qws: ["European"],
        transls: ["From the word Ευρώπη — Europe"],
        translation: "European",
        kind: "Ethnic masculine nouns in -αίος, -ιός from nouns",
        unicTransl: "Europe",
        notice: "Ethnic masculine nouns in -αίος, -ιός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -ανός, -ιανός, -άνος, -ινός exist.",
    },
    {
        word: "θεσσαλονικιός",
        base: "Θεσσαλονίκη",
        groups: {
            morfology:
                '<em>θεσσαλονικιός </em>→ Θεσσαλονίκ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ιός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -αίος, -ιός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -ανός, -ιανός, -άνος, -ινός exist.",
        },
        qws: ["inhabitant of Thessaloniki"],
        transls: ["From the word Θεσσαλονίκη — Thessaloniki"],
        translation: "inhabitant of Thessaloniki",
        kind: "Ethnic masculine nouns in -αίος, -ιός from nouns",
        unicTransl: "Thessaloniki",
        notice: "Ethnic masculine nouns in -αίος, -ιός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -ανός, -ιανός, -άνος, -ινός exist.",
    },
    {
        word: "μυτιληνιός",
        base: "Μυτιλήνη",
        groups: {
            morfology:
                '<em>μυτιληνιός </em>→ Μυτιλήν<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ιός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
            aplication:
                "<br>Ethnic masculine nouns in -αίος, -ιός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -ανός, -ιανός, -άνος, -ινός exist.",
        },
        qws: ["inhabitant of Mytilene"],
        transls: ["From the word Μυτιλήνη — Mytilene"],
        translation: "inhabitant of Mytilene",
        kind: "Ethnic masculine nouns in -αίος, -ιός from nouns",
        unicTransl: "Mytilene",
        notice: "Ethnic masculine nouns in -αίος, -ιός. Also ethnic masculine nouns in -ώτης, -ιώτης, -ίτης, -αίτης, -ιάτης and -ανός, -ιανός, -άνος, -ινός exist.",
    },
    {
        word: "αναλυτικός",
        base: "αναλύω",
        groups: {
            morfology:
                '<em>αναλυτικός </em>→ αναλύ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -τικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["analytical"],
        transls: ["From the word Αναλύω — to analyse"],
        translation: "analytical",
        kind: "Adjectives in -τικός from verbs",
        unicTransl: "to analyse",
        notice: "",
    },
    {
        word: "διαφημιστικός",
        base: "διαφημίζω",
        groups: {
            morfology:
                '<em>διαφημιστικός </em>→ διαφημ<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -ιστικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["advertising, promotional"],
        transls: ["From the word Διαφημίζω — to advertise"],
        translation: "advertising, promotional",
        kind: "Adjectives in -τικός from verbs",
        unicTransl: "to advertise",
        notice: "",
    },
    {
        word: "δροσιστικός",
        base: "δροσίζω",
        groups: {
            morfology:
                '<em>δροσιστικός </em>→ δροσ<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -ιστικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["refreshing, cooling"],
        transls: ["From the word Δροσίζω — to cool, refresh"],
        translation: "refreshing, cooling",
        kind: "Adjectives in -τικός from verbs",
        unicTransl: "to cool, refresh",
        notice: "",
    },
    {
        word: "εκδοτικός",
        base: "εκδίδω",
        groups: {
            morfology:
                '<em>εκδοτικός </em>→ εκδ<span style="color: #b87333">ίδω</span> +<span style="color: #b87333"> -οτικός</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">έκδοσής</span> – delivery < <span style="color:#7a9473">ἐκδίδωμι</span> – to give out < <span style="color:#7a9473">δίδωμι</span> – to give).',
        },
        qws: ["publishing"],
        transls: ["From the word Εκδίδω — to publish"],
        translation: "publishing",
        kind: "Adjectives in -τικός from verbs",
        unicTransl: "to publish",
        notice: "",
    },
    {
        word: "εκπληκτικός",
        base: "εκπλήσσω",
        groups: {
            morfology:
                '<em>εκπληκτικός </em>→ εκπλ<span style="color: #b87333">ήσσω</span> +<span style="color: #b87333"> -ηκτικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["amazing, astonishing"],
        transls: ["From the word Εκπλήσσω — to amaze"],
        translation: "amazing, astonishing",
        kind: "Adjectives in -τικός from verbs",
        unicTransl: "to amaze",
        notice: "",
    },
    {
        word: "ενοχλητικός",
        base: "ενοχλώ",
        groups: {
            morfology:
                '<em>ενοχλητικός </em>→ ενοχλ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ητικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["annoying, bothersome"],
        transls: ["From the word Ενοχλώ — to annoy, bother"],
        translation: "annoying, bothersome",
        kind: "Adjectives in -τικός from verbs",
        unicTransl: "to annoy, bother",
        notice: "",
    },
    {
        word: "επενδυτικός",
        base: "επενδύω",
        groups: {
            morfology:
                '<em>επενδυτικός </em>→ επενδύ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -τικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["investment"],
        transls: ["From the word Επενδύω — to invest"],
        translation: "investment",
        kind: "Adjectives in -τικός from verbs",
        unicTransl: "to invest",
        notice: "",
    },
    {
        word: "παραπονετικός",
        base: "παραπονιέμαι",
        groups: {
            morfology:
                '<em>παραπονετικός </em>→ παραπον<span style="color: #b87333">ιέμαι</span> +<span style="color: #b87333"> -ετικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["complaining, whining"],
        transls: ["From the word Παραπονιέμαι — to complain"],
        translation: "complaining, whining",
        kind: "Adjectives in -τικός from verbs",
        unicTransl: "to complain",
        notice: "",
    },
    {
        word: "περαστικός",
        base: "περνώ, πέρασα",
        groups: {
            morfology:
                '<em>περαστικός </em>→ πέρασ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -τικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["passing, fleeting, temporary"],
        transls: ["From the word Περνώ, πέρασα — to pass, go through; passed"],
        translation: "passing, fleeting, temporary",
        kind: "Adjectives in -τικός from verbs",
        unicTransl: "to pass, go through",
        notice: "",
    },
    {
        word: "σκανδαλιστικός",
        base: "σκανδαλίζω",
        groups: {
            morfology:
                '<em>σκανδαλιστικός </em>→ σκανδαλ<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -ιστικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["scandalous"],
        transls: ["From the word Σκανδαλίζω — to scandalise"],
        translation: "scandalous",
        kind: "Adjectives in -τικός from verbs",
        unicTransl: "to scandalise",
        notice: "",
    },
    {
        word: "θλιβερός",
        base: "θλίβω",
        groups: {
            morfology:
                '<em>θλιβερός </em>→ θλίβ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ερός</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">θλιβερός</span> < Ancient Greek <span style="color:#7a9473">θλίβω</span> – to press, squeeze, trouble.',
        },
        qws: ["sad, sorrowful"],
        transls: ["From the word Θλίβω — to press, squeeze, trouble, sadden"],
        translation: "sad, sorrowful",
        kind: "Adjectives in -ερός, -ικός, -τήριος from verbs",
        unicTransl: "to press, squeeze, trouble, sadden",
        notice: "",
    },
    {
        word: "καρτερικός",
        base: "καρτερώ",
        groups: {
            morfology:
                '<em>καρτερικός </em>→ καρτερ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">καρτερία</span> – patience < Ancient Greek <span style="color:#7a9473">καρτερῶ</span> – to wait, endure.',
        },
        qws: ["patient, enduring, persistent"],
        transls: ["From the word Καρτερώ — to wait, endure"],
        translation: "patient, enduring, persistent",
        kind: "Adjectives in -ερός, -ικός, -τήριος from verbs",
        unicTransl: "to wait, endure",
        notice: "",
    },
    {
        word: "κινητήριος",
        base: "κινώ",
        groups: {
            morfology:
                '<em>κινητήριος </em>→ κιν<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ητήριος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["driving, motor"],
        transls: ["From the word Κινώ — to move"],
        translation: "driving, motor",
        kind: "Adjectives in -ερός, -ικός, -τήριος from verbs",
        unicTransl: "to move",
        notice: "",
    },
    {
        word: "λαμπερός",
        base: "λάμπω",
        groups: {
            morfology:
                '<em>λαμπερός </em>→ λάμπ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ερός</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">λαμπερός</span> – shining, sunny < Ancient Greek <span style="color:#7a9473">λάμπω</span> – to shine, be bright; to be famous.',
        },
        qws: ["bright, shining, excellent"],
        transls: ["From the word Λάμπω — to shine, glow"],
        translation: "bright, shining, excellent",
        kind: "Adjectives in -ερός, -ικός, -τήριος from verbs",
        unicTransl: "to shine, glow",
        notice: "",
    },
    {
        word: "μετρικός",
        base: "μετρώ",
        groups: {
            morfology:
                '<em>μετρικός </em>→ μετρ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">μετρικός</span> < <span style="color:#7a9473">μέτρον</span> – measure, measurement)',
        },
        qws: ["measuring, metric"],
        transls: ["From the word Μετρώ — to measure"],
        translation: "measuring, metric",
        kind: "Adjectives in -ερός, -ικός, -τήριος from verbs",
        unicTransl: "to measure",
        notice: "",
    },
    {
        word: "πειθαρχικός",
        base: "πειθαρχώ",
        groups: {
            morfology:
                '<em>πειθαρχικός </em>→ πειθαρχ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["obedient, disciplined, disciplinary"],
        transls: ["From the word Πειθαρχώ — to obey, submit"],
        translation: "obedient, disciplined, disciplinary",
        kind: "Adjectives in -ερός, -ικός, -τήριος from verbs",
        unicTransl: "to obey, submit",
        notice: "",
    },
    {
        word: "σωτήριος",
        base: "σώζω",
        groups: {
            morfology:
                '<em>σωτήριος </em>→ σώ<span style="color: #b87333">ζω</span> +<span style="color: #b87333"> -τήριος</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">σωτήριος</span> < <span style="color:#7a9473">σωτήρ</span> – saviour, deliverer < <span style="color:#7a9473">σώζω</span> – to save, deliver < <span style="color:#7a9473">σῶς</span> – safe and sound, alive)',
        },
        qws: ["salvific, beneficial"],
        transls: ["From the word Σώζω — to save, deliver"],
        translation: "salvific, beneficial",
        kind: "Adjectives in -ερός, -ικός, -τήριος from verbs",
        unicTransl: "to save, deliver",
        notice: "",
    },
    {
        word: "ακουστός",
        base: "ακούω",
        groups: {
            morfology:
                '<em>ακουστός </em>→ ακού<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -στός</span>',
            etymology:
                '<br>From Ancient Greek (<span style="color:#7a9473">ἀκουστός</span> < <span style="color:#7a9473">ἀκούω</span> – to hear, listen)',
        },
        qws: ["known, famous"],
        transls: ["From the word Ακούω — to hear"],
        translation: "known, famous",
        kind: "Adjectives in -τός: (-ητός, -ωτός, -στός, -φτός, -χτός etc.) from verbs",
        unicTransl: "to hear",
        notice: "",
    },
    {
        word: "καμαρωτός",
        base: "καμαρώνω",
        groups: {
            morfology:
                '<em>καμαρωτός </em>→ καμαρ<span style="color: #b87333">ώνω</span> +<span style="color: #b87333"> -ωτός</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">καμαρώνω</span> – to be proud, swagger < <span style="color:#7a9473">καμάρι</span> – pride, conceit) < <span style="color:#7a9473">καμάριον</span> < <span style="color:#7a9473">καμάρα</span> – arched structure)',
        },
        qws: ["proud, arched, curved"],
        transls: ["From the word Καμαρώνω — to be proud, swagger"],
        translation: "proud, arched, curved",
        kind: "Adjectives in -τός: (-ητός, -ωτός, -στός, -φτός, -χτός etc.) from verbs",
        unicTransl: "to be proud, swagger",
        notice: "",
    },
    {
        word: "ξυπνητός",
        base: "ξυπνώ",
        groups: {
            morfology:
                '<em>ξυπνητός </em>→ ξυπν<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ητός</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">ξυπνώ</span> – to wake) < Medieval Greek (<span style="color:#7a9473">ξυπνῶ</span> < <span style="color:#7a9473">ἔξυπνος</span> – awake) < Ancient Greek <span style="color:#7a9473">ὕπνος</span> – sleep',
        },
        qws: ["awake, smart, clever"],
        transls: ["From the word Ξυπνώ — to wake"],
        translation: "awake, smart, clever",
        kind: "Adjectives in -τός: (-ητός, -ωτός, -στός, -φτός, -χτός etc.) from verbs",
        unicTransl: "to wake",
        notice: "",
    },
    {
        word: "πεταχτός",
        base: "πετώ",
        groups: {
            morfology:
                '<em>πεταχτός </em>→ πετ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -αχτός</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">πεταχτός</span> < Koine Greek <span style="color:#7a9473">πετώ</span>, <span style="color:#7a9473">πετάω</span> – to fly < Ancient Greek <span style="color:#7a9473">πέτομαι</span> – to fly.',
        },
        qws: ["flying, swift"],
        transls: ["From the word Πετώ — to fly"],
        translation: "flying, swift",
        kind: "Adjectives in -τός: (-ητός, -ωτός, -στός, -φτός, -χτός etc.) from verbs",
        unicTransl: "to fly",
        notice: "",
    },
    {
        word: "σβηστός",
        base: "σβήνω",
        groups: {
            morfology:
                '<em>σβηστός </em>→ σβή<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -στός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["extinguished, erased, cancelled"],
        transls: ["From the word Σβήνω — to extinguish, erase"],
        translation: "extinguished, erased, cancelled",
        kind: "Adjectives in -τός: (-ητός, -ωτός, -στός, -φτός, -χτός etc.) from verbs",
        unicTransl: "to extinguish, erase",
        notice: "",
    },
    {
        word: "σκυφτός",
        base: "σκύβω",
        groups: {
            morfology:
                '<em>σκυφτός </em>→ σκύ<span style="color: #b87333">βω</span> +<span style="color: #b87333"> -φτός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">σκύβω</span> — to bend, stoop < Medieval Greek <span style="color:#7a9473">σκύπτω</span> < Ancient Greek (<span style="color:#7a9473">κύπτω</span> – to bend < possibly from <span style="color:#7a9473">κυφός</span> – bent forward, hunchbacked)',
        },
        qws: ["bent, stooping"],
        transls: ["From the word Σκύβω — to bend, stoop"],
        translation: "bent, stooping",
        kind: "Adjectives in -τός: (-ητός, -ωτός, -στός, -φτός, -χτός etc.) from verbs",
        unicTransl: "to bend, stoop",
        notice: "",
    },
    {
        word: "σφιχτός",
        base: "σφίγγω",
        groups: {
            morfology:
                '<em>σφιχτός </em>→ σφί<span style="color: #b87333">γγω</span> +<span style="color: #b87333"> -χτός</span>',
            etymology:
                '<br>From Medieval Greek <span style="color:#7a9473">σφικτός</span> – tight < Ancient Greek <span style="color:#7a9473">σφιγκτός</span> – tight < <span style="color:#7a9473">σφίγγω</span> – to bind tightly',
        },
        qws: ["tight, narrow, stingy"],
        transls: ["From the word Σφίγγω — to squeeze, tighten"],
        translation: "tight, narrow, stingy",
        kind: "Adjectives in -τός: (-ητός, -ωτός, -στός, -φτός, -χτός etc.) from verbs",
        unicTransl: "to squeeze, tighten",
        notice: "",
    },
    {
        word: "γεμάτος",
        base: "γεμίζω",
        groups: {
            morfology:
                '<em>γεμάτος </em>→ γεμ<span style="color: #b87333">ίζω</span> +<span style="color: #b87333"> -άτος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["full"],
        transls: ["From the word Γεμίζω — to fill, load"],
        translation: "full",
        kind: "Adjectives in -άτος from nouns and verbs",
        unicTransl: "to fill, load",
        notice: "",
    },
    {
        word: "χορτάτος",
        base: "χορταίνω",
        groups: {
            morfology:
                '<em>χορτάτος </em>→ χορτ<span style="color: #b87333">αίνω</span> +<span style="color: #b87333"> -άτος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["full, satiated"],
        transls: ["From the word Χορταίνω — to eat one's fill"],
        translation: "full, satiated",
        kind: "Adjectives in -άτος from nouns and verbs",
        unicTransl: "to eat one's fill",
        notice: "",
    },
    {
        word: "αφράτος",
        base: "αφρός",
        groups: {
            morfology:
                '<em>αφράτος </em>→ αφρ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -άτος</span>',
            etymology:
                '<br>From Medieval Greek (<span style="color:#7a9473">ἀφράτος</span> < <span style="color:#7a9473">ἀφρός</span> – foam)',
        },
        qws: ["foamy, fluffy, white"],
        transls: ["From the word Αφρός — foam"],
        translation: "foamy, fluffy, white",
        kind: "Adjectives in -άτος from nouns and verbs",
        unicTransl: "foam",
        notice: "",
    },
    {
        word: "δροσάτος",
        base: "δροσία",
        groups: {
            morfology:
                '<em>δροσάτος </em>→ δροσ<span style="color: #b87333">ία</span> +<span style="color: #b87333"> -άτος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["cool, fresh, dewy"],
        transls: ["From the word Δροσία — coolness, dew"],
        translation: "cool, fresh, dewy",
        kind: "Adjectives in -άτος from nouns and verbs",
        unicTransl: "coolness, dew",
        notice: "",
    },
    {
        word: "μυρωδάτος",
        base: "μυρωδιά",
        groups: {
            morfology:
                '<em>μυρωδάτος </em>→ μυρωδ<span style="color: #b87333">ιά</span> +<span style="color: #b87333"> -άτος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["fragrant, aromatic"],
        transls: ["From the word Μυρωδιά — smell, aroma"],
        translation: "fragrant, aromatic",
        kind: "Adjectives in -άτος from nouns and verbs",
        unicTransl: "smell, aroma",
        notice: "",
    },
    {
        word: "σπαθάτος",
        base: "σπαθί",
        groups: {
            morfology:
                '<em>σπαθάτος </em>→ σπαθ<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -άτος</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">σπαθί</span> – sword < Koine Greek <span style="color:#7a9473">σπαθίον</span> – small blade < Ancient Greek <span style="color:#7a9473">σπάθη</span> – broad blade of wood or metal, sword.',
        },
        qws: ["sword-like"],
        transls: ["From the word Σπαθί — sword"],
        translation: "sword-like",
        kind: "Adjectives in -άτος from nouns and verbs",
        unicTransl: "sword",
        notice: "",
    },
    {
        word: "κατοικήσιμος",
        base: "κατοικώ",
        groups: {
            morfology:
                '<em>κατοικήσιμος </em>→ κατοικ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ήσιμος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["habitable"],
        transls: ["From the word Κατοικώ — to inhabit, live"],
        translation: "habitable",
        kind: "Adjectives in -σιμος from verbs",
        unicTransl: "to inhabit, live",
        notice: "",
    },
    {
        word: "φαγώσιμος",
        base: "τρώγω, έφαγα",
        groups: {
            morfology:
                '<em>φαγώσιμος </em>→ έφαγ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ώσιμος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["edible"],
        transls: ["From the word Τρώγω, έφαγα — to eat"],
        translation: "edible",
        kind: "Adjectives in -σιμος from verbs",
        unicTransl: "to eat",
        notice: "",
    },
    {
        word: "αφεραιτέος",
        base: "αφαιρώ",
        groups: {
            morfology:
                '<em>αφεραιτέος </em>→ αφ<span style="color: #b87333">αιρώ</span> +<span style="color: #b87333"> -εραιτέος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["to be subtracted"],
        transls: ["From the word Αφαιρώ — to subtract, remove"],
        translation: "to be subtracted",
        kind: "Adjectives in -τέος from verbs",
        unicTransl: "to subtract, remove",
        notice: "",
    },
    {
        word: "διαιρετέος",
        base: "διαιρώ",
        groups: {
            morfology:
                '<em>διαιρετέος </em>→ διαιρ<span style="color: #b87333">ώ</span> +<span style="color: #b87333"> -ετέος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["to be divided"],
        transls: ["From the word Διαιρώ — to divide"],
        translation: "to be divided",
        kind: "Adjectives in -τέος from verbs",
        unicTransl: "to divide",
        notice: "",
    },
    {
        word: "μειωτέος",
        base: "μειώνω",
        groups: {
            morfology:
                '<em>μειωτέος </em>→ μειώ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -τέος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["to be reduced, limited"],
        transls: ["From the word Μειώνω — to reduce, limit"],
        translation: "to be reduced, limited",
        kind: "Adjectives in -τέος from verbs",
        unicTransl: "to reduce, limit",
        notice: "",
    },
    {
        word: "πληρωτέος",
        base: "πληρώνω",
        groups: {
            morfology:
                '<em>πληρωτέος </em>→ πληρώ<span style="color: #b87333">νω</span> +<span style="color: #b87333"> -τέος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["to be paid"],
        transls: ["From the word Πληρώνω — to pay"],
        translation: "to be paid",
        kind: "Adjectives in -τέος from verbs",
        unicTransl: "to pay",
        notice: "",
    },
    {
        word: "κοκαλιάρης",
        base: "κόκαλο",
        groups: {
            morfology:
                '<em>κοκαλιάρης </em>→ κόκαλ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ιάρης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["bony"],
        transls: ["From the word Κόκαλο — bone"],
        translation: "bony",
        kind: "Adjectives in -άρης, -ιάρης from nouns",
        unicTransl: "bone",
        notice: "",
    },
    {
        word: "πεισματάρης",
        base: "πείσμα",
        groups: {
            morfology:
                '<em>πεισματάρης </em>→ πείσ<span style="color: #b87333">μα</span> +<span style="color: #b87333"> -ματάρης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["stubborn, persistent"],
        transls: ["From the word Πείσμα — stubbornness, persistence"],
        translation: "stubborn, persistent",
        kind: "Adjectives in -άρης, -ιάρης from nouns",
        unicTransl: "stubbornness, persistence",
        notice: "",
    },
    {
        word: "ασημένιος",
        base: "ασήμι",
        groups: {
            morfology:
                '<em>ασημένιος </em>→ ασήμ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ένιος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["silver, silvery"],
        transls: ["From the word Ασήμι — silver"],
        translation: "silver, silvery",
        kind: "Adjectives in -ένιος from nouns",
        unicTransl: "silver",
        notice: "",
    },
    {
        word: "μαρμαρένιος",
        base: "μάρμαρο",
        groups: {
            morfology:
                '<em>μαρμαρένιος </em>→ μάρμαρ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ένιος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["marble"],
        transls: ["From the word Μάρμαρο — marble"],
        translation: "marble",
        kind: "Adjectives in -ένιος from nouns",
        unicTransl: "marble",
        notice: "",
    },
    {
        word: "σανιδένιος",
        base: "σανίδι",
        groups: {
            morfology:
                '<em>σανιδένιος </em>→ σανίδ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ένιος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["wooden (made of board)"],
        transls: ["From the word Σανίδι — board"],
        translation: "wooden (made of board)",
        kind: "Adjectives in -ένιος from nouns",
        unicTransl: "board",
        notice: "",
    },
    {
        word: "βρόχινος",
        base: "βροχή",
        groups: {
            morfology:
                '<em>βρόχινος </em>→ βροχ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ινος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["rainy"],
        transls: ["From the word Βροχή — rain"],
        translation: "rainy",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "rain",
        notice: "",
    },
    {
        word: "γυάλινος",
        base: "γυαλί",
        groups: {
            morfology:
                '<em>γυάλινος </em>→ γυαλ<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -ινος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["glass"],
        transls: ["From the word Γυαλί — glass"],
        translation: "glass",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "glass",
        notice: "",
    },
    {
        word: "καλοκαιρινός",
        base: "καλοκαίρι",
        groups: {
            morfology:
                '<em>καλοκαιρινός </em>→ καλοκαίρ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["summer"],
        transls: ["From the word Καλοκαίρι — summer"],
        translation: "summer",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "summer",
        notice: "",
    },
    {
        word: "λαστιχένιος",
        base: "λάστιχο",
        groups: {
            morfology:
                '<em>λαστιχένιος </em>→ λάστιχ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ένιος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["rubber"],
        transls: ["From the word Λάστιχο — rubber"],
        translation: "rubber",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "rubber",
        notice: "",
    },
    {
        word: "λινός",
        base: "λινάρι",
        groups: {
            morfology:
                '<em>λινός </em>→ λ<span style="color: #b87333">ινάρι</span> +<span style="color: #b87333"> -ινος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["linen"],
        transls: ["From the word Λινάρι — flax"],
        translation: "linen",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "flax",
        notice: "",
    },
    {
        word: "μάλλινος",
        base: "μαλλί",
        groups: {
            morfology:
                '<em>μάλλινος </em>→ μαλλ<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -ινος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["woollen"],
        transls: ["From the word Μαλλί — hair, wool"],
        translation: "woollen",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "hair, wool",
        notice: "",
    },
    {
        word: "μπρούντζινος",
        base: "μπρούντζος",
        groups: {
            morfology:
                '<em>μπρούντζινος </em>→ μπρούντζ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ινος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["bronze"],
        transls: ["From the word Μπρούντζος — bronze"],
        translation: "bronze",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "bronze",
        notice: "",
    },
    {
        word: "ξύλινος",
        base: "ξύλο",
        groups: {
            morfology:
                '<em>ξύλινος </em>→ ξύλ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ινος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["wooden"],
        transls: ["From the word Ξύλο — wood (material)"],
        translation: "wooden",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "wood (material)",
        notice: "",
    },
    {
        word: "πέτρινος",
        base: "πέτρα",
        groups: {
            morfology:
                '<em>πέτρινος </em>→ πέτρ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ινος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["stone"],
        transls: ["From the word Πέτρα — stone"],
        translation: "stone",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "stone",
        notice: "",
    },
    {
        word: "πήλινος",
        base: "πηλός",
        groups: {
            morfology:
                '<em>πήλινος </em>→ πηλ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ινος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["clay"],
        transls: ["From the word Πηλός — clay"],
        translation: "clay",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "clay",
        notice: "",
    },
    {
        word: "πορσελάνινος",
        base: "πορσελάνη",
        groups: {
            morfology:
                '<em>πορσελάνινος </em>→ πορσελάν<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ινος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["porcelain"],
        transls: ["From the word Πορσελάνη — porcelain"],
        translation: "porcelain",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "porcelain",
        notice: "",
    },
    {
        word: "φθινοπωρινός",
        base: "φθινόπωρο",
        groups: {
            morfology:
                '<em>φθινοπωρινός </em>→ φθινόπωρ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["autumn"],
        transls: ["From the word Φθινόπωρο — autumn"],
        translation: "autumn",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "autumn",
        notice: "",
    },
    {
        word: "χάρτινος",
        base: "χαρτί",
        groups: {
            morfology:
                '<em>χάρτινος </em>→ χαρτ<span style="color: #b87333">ί</span> +<span style="color: #b87333"> -ινος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["paper"],
        transls: ["From the word Χαρτί — paper"],
        translation: "paper",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "paper",
        notice: "",
    },
    {
        word: "χάρτινος",
        base: "χαρτόνι",
        groups: {
            morfology:
                '<em>χάρτινος </em>→ χαρτ<span style="color: #b87333">όνι</span> +<span style="color: #b87333"> -ινος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["cardboard"],
        transls: ["From the word Χαρτόνι — cardboard"],
        translation: "cardboard",
        kind: "Adjectives in -ινος from nouns",
        unicTransl: "cardboard",
        notice: "",
    },
    {
        word: "άτακτος",
        base: "αταξία",
        groups: {
            morfology:
                '<em>άτακτος </em>→ ατ<span style="color: #b87333">αξία</span> +<span style="color: #b87333"> -ακτος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["naughty, unruly"],
        transls: ["From the word Αταξία — naughtiness"],
        translation: "naughty, unruly",
        kind: "Adjectives in -ος from nouns",
        unicTransl: "naughtiness",
        notice: "",
    },
    {
        word: "άτολμος",
        base: "ατολμία",
        groups: {
            morfology:
                '<em>άτολμος </em>→ ατολμ<span style="color: #b87333">ία</span> +<span style="color: #b87333"> -ος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["timid"],
        transls: ["From the word Ατολμία — timidity"],
        translation: "timid",
        kind: "Adjectives in -ος from nouns",
        unicTransl: "timidity",
        notice: "",
    },
    {
        word: "βιομηχανικός",
        base: "βιομηχανία",
        groups: {
            morfology:
                '<em>βιομηχανικός </em>→ βιομηχαν<span style="color: #b87333">ία</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["industrial"],
        transls: ["From the word Βιομηχανία — industry"],
        translation: "industrial",
        kind: "Adjectives in -ος from nouns",
        unicTransl: "industry",
        notice: "",
    },
    {
        word: "γενναιόδωρος",
        base: "γενναιοδωρία",
        groups: {
            morfology:
                '<em>γενναιόδωρος </em>→ γενναιοδωρ<span style="color: #b87333">ία</span> +<span style="color: #b87333"> -ος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["generous"],
        transls: ["From the word Γενναιοδωρία — generosity"],
        translation: "generous",
        kind: "Adjectives in -ος from nouns",
        unicTransl: "generosity",
        notice: "",
    },
    {
        word: "δύσπιστος",
        base: "δυσπιστία",
        groups: {
            morfology:
                '<em>δύσπιστος </em>→ δυσπιστ<span style="color: #b87333">ία</span> +<span style="color: #b87333"> -ος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["distrustful"],
        transls: ["From the word Δυσπιστία — distrust"],
        translation: "distrustful",
        kind: "Adjectives in -ος from nouns",
        unicTransl: "distrust",
        notice: "",
    },
    {
        word: "υπεύθυνος",
        base: "ευθύνη",
        groups: {
            morfology:
                '<em>υπεύθυνος </em>→ ευθύν<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["responsible"],
        transls: ["From the word Ευθύνη — responsibility"],
        translation: "responsible",
        kind: "Adjectives in -ος from nouns",
        unicTransl: "responsibility",
        notice: "",
    },
    {
        word: "κληρονόμος",
        base: "κληρονομία",
        groups: {
            morfology:
                '<em>κληρονόμος </em>→ κληρονομ<span style="color: #b87333">ία</span> +<span style="color: #b87333"> -ος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["inheritance (as adjective), heir"],
        transls: ["From the word Κληρονομία — inheritance"],
        translation: "inheritance (as adjective), heir",
        kind: "Adjectives in -ος from nouns",
        unicTransl: "inheritance",
        notice: "",
    },
    {
        word: "κρύος",
        base: "κρύο",
        groups: {
            morfology:
                '<em>κρύος </em>→ κρύ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["cold"],
        transls: ["From the word Κρύο — cold"],
        translation: "cold",
        kind: "Adjectives in -ος from nouns",
        unicTransl: "cold",
        notice: "",
    },
    {
        word: "μουσικός",
        base: "μουσική",
        groups: {
            morfology:
                '<em>μουσικός </em>→ μουσικ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["musician (adj.), musical"],
        transls: ["From the word Μουσική — music"],
        translation: "musician (adj.), musical",
        kind: "Adjectives in -ος from nouns",
        unicTransl: "music",
        notice: "",
    },
    {
        word: "οικονομικός",
        base: "οικονομία",
        groups: {
            morfology:
                '<em>οικονομικός </em>→ οικονομ<span style="color: #b87333">ία</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["economic"],
        transls: ["From the word Οικονομία — economy"],
        translation: "economic",
        kind: "Adjectives in -ος from nouns",
        unicTransl: "economy",
        notice: "",
    },
    {
        word: "σίγουρος",
        base: "σιγουρία",
        groups: {
            morfology:
                '<em>σίγουρος </em>→ σιγουρ<span style="color: #b87333">ία</span> +<span style="color: #b87333"> -ος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["sure, certain"],
        transls: ["From the word Σιγουρία — certainty"],
        translation: "sure, certain",
        kind: "Adjectives in -ος from nouns",
        unicTransl: "certainty",
        notice: "",
    },
    {
        word: "βυσσινής",
        base: "βύσσινο",
        groups: {
            morfology:
                '<em>βυσσινής </em>→ βύσσιν<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["cherry-coloured"],
        transls: ["From the word Βύσσινο — cherry (fruit)"],
        translation: "cherry-coloured",
        kind: "Adjectives in -ής, -ύς from nouns",
        unicTransl: "cherry (fruit)",
        notice: "",
    },
    {
        word: "θαλασσινής",
        base: "θάλασσα",
        groups: {
            morfology:
                '<em>θαλασσινής </em>→ θάλασσ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ινής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["sea-blue"],
        transls: ["From the word Θάλασσα — sea"],
        translation: "sea-blue",
        kind: "Adjectives in -ής, -ύς from nouns",
        unicTransl: "sea",
        notice: "",
    },
    {
        word: "τριανταφυλλής",
        base: "τριαντάφυλλο",
        groups: {
            morfology:
                '<em>τριανταφυλλής </em>→ τριαντάφυλλ<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["rose-coloured"],
        transls: ["From the word Τριαντάφυλλο — rose"],
        translation: "rose-coloured",
        kind: "Adjectives in -ής, -ύς from nouns",
        unicTransl: "rose",
        notice: "",
    },
    {
        word: "βαθύς",
        base: "βαθός",
        groups: {
            morfology:
                '<em>βαθύς </em>→ βαθ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["deep, dark (colour)"],
        transls: ["From the word Βαθός — depth"],
        translation: "deep, dark (colour)",
        kind: "Adjectives in -ής, -ύς from nouns",
        unicTransl: "depth",
        notice: "",
    },
    {
        word: "παχύς",
        base: "πάχος",
        groups: {
            morfology:
                '<em>παχύς </em>→ πάχ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["fat, thick"],
        transls: ["From the word Πάχος — fat, thickness"],
        translation: "fat, thick",
        kind: "Adjectives in -ής, -ύς from nouns",
        unicTransl: "fat, thickness",
        notice: "",
    },
    {
        word: "φαρδύς",
        base: "φάρδος",
        groups: {
            morfology:
                '<em>φαρδύς </em>→ φάρδ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ής</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["wide, spacious"],
        transls: ["From the word Φάρδος — width"],
        translation: "wide, spacious",
        kind: "Adjectives in -ής, -ύς from nouns",
        unicTransl: "width",
        notice: "",
    },
    {
        word: "νόμιμος",
        base: "νόμος",
        groups: {
            morfology:
                '<em>νόμιμος </em>→ νόμ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ιμος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["legal, lawful"],
        transls: ["From the word Νόμος — law"],
        translation: "legal, lawful",
        kind: "Adjectives in -ιμος from nouns",
        unicTransl: "law",
        notice: "",
    },
    {
        word: "βροχερός",
        base: "βροχή",
        groups: {
            morfology:
                '<em>βροχερός </em>→ βροχ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ερός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["rainy"],
        transls: ["From the word Βροχή — rain"],
        translation: "rainy",
        kind: "Adjectives in -ερός from nouns",
        unicTransl: "rain",
        notice: "",
    },
    {
        word: "δροσερός",
        base: "δροσιά",
        groups: {
            morfology:
                '<em>δροσερός </em>→ δροσ<span style="color: #b87333">ιά</span> +<span style="color: #b87333"> -ερός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["cool, fresh, dewy"],
        transls: ["From the word Δροσιά — coolness, dew"],
        translation: "cool, fresh, dewy",
        kind: "Adjectives in -ερός from nouns",
        unicTransl: "coolness, dew",
        notice: "",
    },
    {
        word: "φαρμακερός",
        base: "φαρμάκι",
        groups: {
            morfology:
                '<em>φαρμακερός </em>→ φαρμάκ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ερός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["poisonous, toxic"],
        transls: ["From the word Φαρμάκι — poison"],
        translation: "poisonous, toxic",
        kind: "Adjectives in -ερός from nouns",
        unicTransl: "poison",
        notice: "",
    },
    {
        word: "φλογερός",
        base: "φλόγα",
        groups: {
            morfology:
                '<em>φλογερός </em>→ φλόγ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ερός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["flaming, fiery, ardent"],
        transls: ["From the word Φλόγα — flame"],
        translation: "flaming, fiery, ardent",
        kind: "Adjectives in -ερός from nouns",
        unicTransl: "flame",
        notice: "",
    },
    {
        word: "λιπαρός",
        base: "λίπος",
        groups: {
            morfology:
                '<em>λιπαρός </em>→ λίπ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -αρός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["fatty, greasy"],
        transls: ["From the word Λίπος — fat"],
        translation: "fatty, greasy",
        kind: "Adjectives in -αρός from nouns",
        unicTransl: "fat",
        notice: "",
    },
    {
        word: "αγκαθωτός",
        base: "αγκάθι",
        groups: {
            morfology:
                '<em>αγκαθωτός </em>→ αγκάθ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ωτός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["thorny, prickly"],
        transls: ["From the word Αγκάθι — thorn, splinter"],
        translation: "thorny, prickly",
        kind: "Adjectives in -ωτός from nouns",
        unicTransl: "thorn, splinter",
        notice: "",
    },
    {
        word: "μεταξωτός",
        base: "μετάξι",
        groups: {
            morfology:
                '<em>μεταξωτός </em>→ μετάξ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ωτός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["silken, silk"],
        transls: ["From the word Μετάξι — silk"],
        translation: "silken, silk",
        kind: "Adjectives in -ωτός from nouns",
        unicTransl: "silk",
        notice: "",
    },
    {
        word: "φουντωτός",
        base: "φούντωμα",
        groups: {
            morfology:
                '<em>φουντωτός </em>→ φούντ<span style="color: #b87333">ωμα</span> +<span style="color: #b87333"> -ωτός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["bushy, thick"],
        transls: ["From the word Φούντωμα — bushiness, thickness"],
        translation: "bushy, thick",
        kind: "Adjectives in -ωτός from nouns",
        unicTransl: "bushiness, thickness",
        notice: "",
    },
    {
        word: "ύποπτος",
        base: "υποψία",
        groups: {
            morfology:
                '<em>ύποπτος </em>→ υπο<span style="color: #b87333">ψία</span> +<span style="color: #b87333"> -πτός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["suspicious"],
        transls: ["From the word Υποψία — suspicion"],
        translation: "suspicious",
        kind: "Adjectives in -τός from nouns",
        unicTransl: "suspicion",
        notice: "",
    },
    {
        word: "εθνικός",
        base: "έθνος",
        groups: {
            morfology:
                '<em>εθνικός </em>→ έθν<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["national"],
        transls: ["From the word Έθνος — nation"],
        translation: "national",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "nation",
        notice: "",
    },
    {
        word: "ελληνικός",
        base: "έλληνας",
        groups: {
            morfology:
                '<em>ελληνικός </em>→ έλλην<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["Greek"],
        transls: ["From the word Έλληνας — Greek"],
        translation: "Greek",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "Greek",
        notice: "",
    },
    {
        word: "ηλιακός",
        base: "ήλιος",
        groups: {
            morfology:
                '<em>ηλιακός </em>→ ήλι<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ακός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["solar"],
        transls: ["From the word Ήλιος — sun"],
        translation: "solar",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "sun",
        notice: "",
    },
    {
        word: "αιρετικός",
        base: "αίρεση",
        groups: {
            morfology:
                '<em>αιρετικός </em>→ αίρε<span style="color: #b87333">ση</span> +<span style="color: #b87333"> -τικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["heretical, heretic"],
        transls: ["From the word Αίρεση — heresy"],
        translation: "heretical, heretic",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "heresy",
        notice: "",
    },
    {
        word: "αδερφικός",
        base: "αδερφός",
        groups: {
            morfology:
                '<em>αδερφικός </em>→ αδερφ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["brotherly"],
        transls: ["From the word Αδερφός — brother"],
        translation: "brotherly",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "brother",
        notice: "",
    },
    {
        word: "ανατολικός",
        base: "ανατολή",
        groups: {
            morfology:
                '<em>ανατολικός </em>→ ανατολ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["eastern"],
        transls: ["From the word Ανατολή — east"],
        translation: "eastern",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "east",
        notice: "",
    },
    {
        word: "αστυνομικός",
        base: "αστυνομία",
        groups: {
            morfology:
                '<em>αστυνομικός </em>→ αστυνομ<span style="color: #b87333">ία</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Modern Greek (<span style="color:#7a9473">αστυνομία</span> – police < <span style="color:#7a9473">αστυνόμος</span> – police officer) < Ancient Greek (<span style="color:#7a9473">ἀστυνόμος</span> – guarding the city < <span style="color:#7a9473">ἄστυ</span> – city + <span style="color:#7a9473">νόμος</span> – law)',
        },
        qws: ["police (adj.), policeman"],
        transls: ["From the word Αστυνομία — police"],
        translation: "police (adj.), policeman",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "police",
        notice: "",
    },
    {
        word: "γαλλικός",
        base: "Γαλλία",
        groups: {
            morfology:
                '<em>γαλλικός </em>→ Γαλλ<span style="color: #b87333">ία</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">Γαλλία</span> – France < Latin <span style="color:#7a9473">Gallia</span>.',
        },
        qws: ["French"],
        transls: ["From the word Γαλλία — France"],
        translation: "French",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "France",
        notice: "",
    },
    {
        word: "γέρικος",
        base: "γέρος",
        groups: {
            morfology:
                '<em>γέρικος </em>→ γέρ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">γέρος</span> – old man < Medieval Greek <span style="color:#7a9473">γέρος</span> < Ancient Greek <span style="color:#7a9473">γέρων</span> – old man, elder.',
        },
        qws: ["old, elderly"],
        transls: ["From the word Γέρος — old man"],
        translation: "old, elderly",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "old man",
        notice: "",
    },
    {
        word: "διαστημικός",
        base: "διάστημα",
        groups: {
            morfology:
                '<em>διαστημικός </em>→ διάστημ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">διάστημα</span> – space < Ancient Greek (<span style="color:#7a9473">διάστημα</span> – distance, interval < <span style="color:#7a9473">δια-</span> (through) + <span style="color:#7a9473">ἵστημι</span> – to stand, place)',
        },
        qws: ["space (adj.)"],
        transls: ["From the word Διάστημα — space"],
        translation: "space (adj.)",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "space",
        notice: "",
    },
    {
        word: "δυτικός",
        base: "δύση",
        groups: {
            morfology:
                '<em>δυτικός </em>→ δύ<span style="color: #b87333">ση</span> +<span style="color: #b87333"> -τικός</span>',
            etymology:
                '<br>From Koine Greek <span style="color:#7a9473">δῠτικός</span> < Ancient Greek <span style="color:#7a9473">δύω</span>, <span style="color:#7a9473">δύνω</span> – to enter, set.',
        },
        qws: ["western"],
        transls: ["From the word Δύση — west"],
        translation: "western",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "west",
        notice: "",
    },
    {
        word: "εγωιστικός",
        base: "εγωιστής",
        groups: {
            morfology:
                '<em>εγωιστικός </em>→ εγωιστ<span style="color: #b87333">ής</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">εγωιστής</span> – egoist < French <span style="color:#7a9473">égoïste</span> < Ancient Greek <span style="color:#7a9473">ἐγώ</span> – I.',
        },
        qws: ["egoistic"],
        transls: ["From the word Εγωιστής — egoist"],
        translation: "egoistic",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "egoist",
        notice: "",
    },
    {
        word: "επιστημονικός",
        base: "επιστήμονας",
        groups: {
            morfology:
                '<em>επιστημονικός </em>→ επιστήμον<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">επιστήμονας</span> – scientist < Ancient Greek (<span style="color:#7a9473">ἐπιστήμη</span> – science, knowledge < <span style="color:#7a9473">ἐπίσταμαι</span> – to know well < <span style="color:#7a9473">ἐπι-</span> (on) + <span style="color:#7a9473">ἵστημι</span> – to stand, place)',
        },
        qws: ["scientific"],
        transls: ["From the word Επιστήμονας — scientist"],
        translation: "scientific",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "scientist",
        notice: "",
    },
    {
        word: "εχθρικός",
        base: "εχθρός",
        groups: {
            morfology:
                '<em>εχθρικός </em>→ εχθρ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Koine Greek <span style="color:#7a9473">ἐχθρικός</span> < Ancient Greek <span style="color:#7a9473">ἐχθρός</span> – enemy, hateful.',
        },
        qws: ["hostile, enemy"],
        transls: ["From the word Εχθρός — enemy"],
        translation: "hostile, enemy",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "enemy",
        notice: "",
    },
    {
        word: "ζωγραφικός",
        base: "ζωγράφος",
        groups: {
            morfology:
                '<em>ζωγραφικός </em>→ ζωγράφ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ζωγραφική</span> – painting < Ancient Greek (<span style="color:#7a9473">ζωγρᾰφικός</span> < <span style="color:#7a9473">ζωγράφος</span> – painter < <span style="color:#7a9473">ζωός</span> (alive) or <span style="color:#7a9473">ζωή</span> (life) + <span style="color:#7a9473">γράφος</span> – writer < <span style="color:#7a9473">γράφω</span> – to write)',
        },
        qws: ["pictorial, graphic"],
        transls: ["From the word Ζωγράφος — painter"],
        translation: "pictorial, graphic",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "painter",
        notice: "",
    },
    {
        word: "ηλεκτρικός",
        base: "ηλεκτρισμός",
        groups: {
            morfology:
                '<em>ηλεκτρικός </em>→ ηλεκτρ<span style="color: #b87333">ισμός</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["electric"],
        transls: ["From the word Ηλεκτρισμός — electricity"],
        translation: "electric",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "electricity",
        notice: "",
    },
    {
        word: "κεραμικός",
        base: "κεραμική",
        groups: {
            morfology:
                '<em>κεραμικός </em>→ κεραμ<span style="color: #b87333">ική</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["ceramic"],
        transls: ["From the word Κεραμική — ceramics"],
        translation: "ceramic",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "ceramics",
        notice: "",
    },
    {
        word: "κυκλικός",
        base: "κύκλος",
        groups: {
            morfology:
                '<em>κυκλικός </em>→ κύκλ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["circular"],
        transls: ["From the word Κύκλος — circle"],
        translation: "circular",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "circle",
        notice: "",
    },
    {
        word: "οικογενειακός",
        base: "οικογένεια",
        groups: {
            morfology:
                '<em>οικογενειακός </em>→ οικογένει<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ακός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["family (adj.)"],
        transls: ["From the word Οικογένεια — family"],
        translation: "family (adj.)",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "family",
        notice: "",
    },
    {
        word: "πλαστικός",
        base: "πλαστικό",
        groups: {
            morfology:
                '<em>πλαστικός </em>→ πλαστ<span style="color: #b87333">ικό</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["plastic"],
        transls: ["From the word Πλαστικό — plastic"],
        translation: "plastic",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "plastic",
        notice: "",
    },
    {
        word: "ποιητικός",
        base: "ποιητής",
        groups: {
            morfology:
                '<em>ποιητικός </em>→ ποιητ<span style="color: #b87333">ής</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Ancient Greek <span style="color:#7a9473">ποιητής</span> < <span style="color:#7a9473">ποιέω</span>, <span style="color:#7a9473">ποιῶ</span> – to make, create.',
        },
        qws: ["poetic"],
        transls: ["From the word Ποιητής — poet"],
        translation: "poetic",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "poet",
        notice: "",
    },
    {
        word: "προαστιακός",
        base: "προάστιο",
        groups: {
            morfology:
                '<em>προαστιακός </em>→ προάστι<span style="color: #b87333">ο</span> +<span style="color: #b87333"> -ακός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["suburban"],
        transls: ["From the word Προάστιο — suburb"],
        translation: "suburban",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "suburb",
        notice: "",
    },
    {
        word: "προδοτικός",
        base: "προδότης",
        groups: {
            morfology:
                '<em>προδοτικός </em>→ προδότ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["treacherous, traitorous"],
        transls: ["From the word Προδότης — traitor"],
        translation: "treacherous, traitorous",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "traitor",
        notice: "",
    },
    {
        word: "σεληνιακός",
        base: "σελήνη",
        groups: {
            morfology:
                '<em>σεληνιακός </em>→ σελήν<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ιακός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["lunar"],
        transls: ["From the word Σελήνη — moon"],
        translation: "lunar",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "moon",
        notice: "",
    },
    {
        word: "σημμετοχικός",
        base: "σημμέτοχος",
        groups: {
            morfology:
                '<em>σημμετοχικός </em>→ σημμέτοχ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["participating"],
        transls: ["From the word Σημμέτοχος — participant"],
        translation: "participating",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "participant",
        notice: "",
    },
    {
        word: "τουριστικός",
        base: "τουρίστας",
        groups: {
            morfology:
                '<em>τουριστικός </em>→ τουρίστ<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">τουρίστας</span> – tourist < Italian <span style="color:#7a9473">turista</span> – tourist < French <span style="color:#7a9473">touriste</span> – tourist < English (<span style="color:#7a9473">tourist</span> – tourist < <span style="color:#7a9473">tour</span> – tour) < Latin <span style="color:#7a9473">tornare</span> – to turn < Ancient Greek <span style="color:#7a9473">τόρνος</span> – that which turns; lathe; compass.',
        },
        qws: ["tourist, touristic"],
        transls: ["From the word Τουρίστας — tourist"],
        translation: "tourist, touristic",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "tourist",
        notice: "",
    },
    {
        word: "φεύτικος",
        base: "φεύτης",
        groups: {
            morfology:
                '<em>φεύτικος </em>→ φεύτ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -ικός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["false, fake"],
        transls: ["From the word Φεύτης — liar"],
        translation: "false, fake",
        kind: "Adjectives in -ακός, -ιακός, -ικός, -ικος from nouns",
        unicTransl: "liar",
        notice: "",
    },
    {
        word: "ανοιξιάτικος",
        base: "άνοιξη",
        groups: {
            morfology:
                '<em>ανοιξιάτικος </em>→ άνοιξ<span style="color: #b87333">η</span> +<span style="color: #b87333"> -ιάτικος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["spring (adj.)"],
        transls: ["From the word Άνοιξη — spring"],
        translation: "spring (adj.)",
        kind: "Adjectives in -άτικος, -ιάτικος from nouns",
        unicTransl: "spring",
        notice: "",
    },
    {
        word: "κυριακάτικος",
        base: "κυριακή",
        groups: {
            morfology:
                '<em>κυριακάτικος </em>→ κυριακ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -άτικος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["Sunday (adj.)"],
        transls: ["From the word Κυριακή — Sunday"],
        translation: "Sunday (adj.)",
        kind: "Adjectives in -άτικος, -ιάτικος from nouns",
        unicTransl: "Sunday",
        notice: "",
    },
    {
        word: "χειμωνιάτικος",
        base: "χειμώνας",
        groups: {
            morfology:
                '<em>χειμωνιάτικος </em>→ χειμών<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ιάτικος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["winter (adj.)"],
        transls: ["From the word Χειμώνας — winter"],
        translation: "winter (adj.)",
        kind: "Adjectives in -άτικος, -ιάτικος from nouns",
        unicTransl: "winter",
        notice: "",
    },
    {
        word: "αγορίστικος",
        base: "αγόρι",
        groups: {
            morfology:
                '<em>αγορίστικος </em>→ αγόρ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ίστικος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["boyish"],
        transls: ["From the word Αγόρι — boy"],
        translation: "boyish",
        kind: "Adjectives in -ίστικος from nouns",
        unicTransl: "boy",
        notice: "",
    },
    {
        word: "κοριτσίστικος",
        base: "κορίτσι",
        groups: {
            morfology:
                '<em>κοριτσίστικος </em>→ κορίτσ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ίστικος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["girlish"],
        transls: ["From the word Κορίτσι — girl"],
        translation: "girlish",
        kind: "Adjectives in -ίστικος from nouns",
        unicTransl: "girl",
        notice: "",
    },
    {
        word: "κουκλίστικος",
        base: "κούκλα",
        groups: {
            morfology:
                '<em>κουκλίστικος </em>→ κούκλ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ίστικος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["doll-like, cute"],
        transls: ["From the word Κούκλα — doll"],
        translation: "doll-like, cute",
        kind: "Adjectives in -ίστικος from nouns",
        unicTransl: "doll",
        notice: "",
    },
    {
        word: "αιώνιος",
        base: "αιώνας",
        groups: {
            morfology:
                '<em>αιώνιος </em>→ αιών<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ιος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["eternal"],
        transls: ["From the word Αιώνας — century"],
        translation: "eternal",
        kind: "Adjectives in -ιος from nouns",
        unicTransl: "century",
        notice: "",
    },
    {
        word: "ουράνιος",
        base: "ουρανός",
        groups: {
            morfology:
                '<em>ουράνιος </em>→ ουραν<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ιος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["heavenly"],
        transls: ["From the word Ουρανός — sky"],
        translation: "heavenly",
        kind: "Adjectives in -ιος from nouns",
        unicTransl: "sky",
        notice: "",
    },
    {
        word: "τίμιος",
        base: "τιμή",
        groups: {
            morfology:
                '<em>τίμιος </em>→ τιμ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ιος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["valuable, dear, honest, honourable"],
        transls: ["From the word Τιμή — price, honour"],
        translation: "valuable, dear, honest, honourable",
        kind: "Adjectives in -ιος from nouns",
        unicTransl: "price, honour",
        notice: "",
    },
    {
        word: "αντρείος",
        base: "άντρας",
        groups: {
            morfology:
                '<em>αντρείος </em>→ άντρ<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -είος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["manly, courageous"],
        transls: ["From the word Άντρας — man"],
        translation: "manly, courageous",
        kind: "Adjectives in -ειος from nouns",
        unicTransl: "man",
        notice: "",
    },
    {
        word: "γυναικείος, γυναίκειος",
        base: "γυναίκα",
        groups: {
            morfology:
                '<em>γυναικείος, γυναίκειος </em>→ γυναίκ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -είος/-ειος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["female, womanly"],
        transls: ["From the word Γυναίκα — woman"],
        translation: "female, womanly",
        kind: "Adjectives in -ειος from nouns",
        unicTransl: "woman",
        notice: "",
    },
    {
        word: "αριστοτέλειος",
        base: "Αριστοτέλης",
        groups: {
            morfology:
                '<em>αριστοτέλειος </em>→ Αριστοτέλ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -ειος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["Aristotelian"],
        transls: ["From the name Αριστοτέλης — Aristotle"],
        translation: "Aristotelian",
        kind: "Adjectives in -ειος from nouns",
        unicTransl: "Aristotle",
        notice: "",
    },
    {
        word: "πυθαγόρειος",
        base: "Πυθαγόρας",
        groups: {
            morfology:
                '<em>πυθαγόρειος </em>→ Πυθαγόρ<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ειος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["Pythagorean"],
        transls: ["From the name Πυθαγόρας — Pythagoras"],
        translation: "Pythagorean",
        kind: "Adjectives in -ειος from nouns",
        unicTransl: "Pythagoras",
        notice: "",
    },
    {
        word: "αρσάκειο",
        base: "Αρσάκης",
        groups: {
            morfology:
                '<em>αρσάκειο </em>→ Αρσάκ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -ειο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["school in Athens (named after Arsakis)"],
        transls: ["From the name Αρσάκης — Arsakis"],
        translation: "school in Athens (named after Arsakis)",
        kind: "Adjectives in -ειος in neuter gender from nouns",
        unicTransl: "Arsakis",
        notice: "",
    },
    {
        word: "βαρβάκειο",
        base: "Βαρβάκης",
        groups: {
            morfology:
                '<em>βαρβάκειο </em>→ Βαρβάκ<span style="color: #b87333">ης</span> +<span style="color: #b87333"> -ειο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["educational institution founded by Varvakis"],
        transls: ["From the name Βαρβάκης — Varvakis"],
        translation: "educational institution founded by Varvakis",
        kind: "Adjectives in -ειος in neuter gender from nouns",
        unicTransl: "Varvakis",
        notice: "",
    },
    {
        word: "ζάππειο",
        base: "Ζάππας",
        groups: {
            morfology:
                '<em>ζάππειο </em>→ Ζάππ<span style="color: #b87333">ας</span> +<span style="color: #b87333"> -ειο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["building in Athens funded by Konstantinos Zappas"],
        transls: ["From the name Ζάππας — Zappas"],
        translation: "building in Athens funded by Konstantinos Zappas",
        kind: "Adjectives in -ειος in neuter gender from nouns",
        unicTransl: "Zappas",
        notice: "",
    },
    {
        word: "μαράσλειο",
        base: "Μαρασλής",
        groups: {
            morfology:
                '<em>μαράσλειο </em>→ Μαρασλ<span style="color: #b87333">ής</span> +<span style="color: #b87333"> -ειο</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["schools and publishing houses founded by Grigorios Maraslis"],
        transls: ["From the name Μαρασλής — Maraslis"],
        translation:
            "schools and publishing houses founded by Grigorios Maraslis",
        kind: "Adjectives in -ειος in neuter gender from nouns",
        unicTransl: "Maraslis",
        notice: "",
    },
    {
        word: "ακμαίος",
        base: "ακμή",
        groups: {
            morfology:
                '<em>ακμαίος </em>→ ακμ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -αίος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["flourishing, thriving"],
        transls: ["From the word Ακμή — peak, flourishing"],
        translation: "flourishing, thriving",
        kind: "Adjectives in -αίος from nouns",
        unicTransl: "peak, flourishing",
        notice: "",
    },
    {
        word: "μοιραίος",
        base: "μοίρα",
        groups: {
            morfology:
                '<em>μοιραίος </em>→ μοίρ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -αίος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["fatal, doomed, inevitable"],
        transls: ["From the word Μοίρα — fate, destiny"],
        translation: "fatal, doomed, inevitable",
        kind: "Adjectives in -αίος from nouns",
        unicTransl: "fate, destiny",
        notice: "",
    },
    {
        word: "διψαλέος",
        base: "δίψα",
        groups: {
            morfology:
                '<em>διψαλέος </em>→ δίψ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -αλέος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["thirsty"],
        transls: ["From the word Δίψα — thirst"],
        translation: "thirsty",
        kind: "Adjectives in -λέος from nouns",
        unicTransl: "thirst",
        notice: "",
    },
    {
        word: "πειναλέος",
        base: "πείνα",
        groups: {
            morfology:
                '<em>πειναλέος </em>→ πείν<span style="color: #b87333">α</span> +<span style="color: #b87333"> -αλέος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["hungry, starving"],
        transls: ["From the word Πείνα — hunger"],
        translation: "hungry, starving",
        kind: "Adjectives in -λέος from nouns",
        unicTransl: "hunger",
        notice: "",
    },
    {
        word: "αρματωλός",
        base: "αρματία",
        groups: {
            morfology:
                '<em>αρματωλός </em>→ αρματ<span style="color: #b87333">ία</span> +<span style="color: #b87333"> -ωλός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["sinful"],
        transls: ["From the word Αρματία — sin, error"],
        translation: "sinful",
        kind: "Adjectives in -λός from nouns",
        unicTransl: "sin, error",
        notice: "",
    },
    {
        word: "σιωπιλός",
        base: "σιωπή",
        groups: {
            morfology:
                '<em>σιωπιλός </em>→ σιωπ<span style="color: #b87333">ή</span> +<span style="color: #b87333"> -ιλός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["silent, quiet"],
        transls: ["From the word Σιωπή — silence"],
        translation: "silent, quiet",
        kind: "Adjectives in -λός from nouns",
        unicTransl: "silence",
        notice: "",
    },
    {
        word: "ασπρούλης",
        base: "άσπρος",
        groups: {
            morfology:
                '<em>ασπρούλης </em>→ άσπρ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ούλης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["whitish (affectionate)"],
        transls: ["From the word Άσπρος — white"],
        translation: "whitish (affectionate)",
        kind: "Adjectives in -ούλης from adjectives",
        unicTransl: "white",
        notice: "",
    },
    {
        word: "κοντούλης",
        base: "κοντός",
        groups: {
            morfology:
                '<em>κοντούλης </em>→ κοντ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ούλης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["short (affectionate)"],
        transls: ["From the word Κοντός — short"],
        translation: "short (affectionate)",
        kind: "Adjectives in -ούλης from adjectives",
        unicTransl: "short",
        notice: "",
    },
    {
        word: "μικρούλης",
        base: "μικρός",
        groups: {
            morfology:
                '<em>μικρούλης </em>→ μικρ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ούλης</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["tiny (affectionate)"],
        transls: ["From the word Μικρός — small"],
        translation: "tiny (affectionate)",
        kind: "Adjectives in -ούλης from adjectives",
        unicTransl: "small",
        notice: "",
    },
    {
        word: "ζεστούτσικος",
        base: "ζεστός",
        groups: {
            morfology:
                '<em>ζεστούτσικος </em>→ ζεστ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ούτσικος</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">ζεστός</span> – hot < Ancient Greek <span style="color:#7a9473">ζέω</span> – to boil, seethe.',
        },
        qws: ["warmish (affectionate)"],
        transls: ["From the word Ζεστός — warm"],
        translation: "warmish (affectionate)",
        kind: "Adjectives in -ούτσικος from adjectives",
        unicTransl: "warm",
        notice: "",
    },
    {
        word: "καλούτσικος",
        base: "καλός",
        groups: {
            morfology:
                '<em>καλούτσικος </em>→ καλ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ούτσικος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["nice, good (affectionate)"],
        transls: ["From the word Καλός — good, kind"],
        translation: "nice, good (affectionate)",
        kind: "Adjectives in -ούτσικος from adjectives",
        unicTransl: "good, kind",
        notice: "",
    },
    {
        word: "ψηλούτσικος",
        base: "ψηλός",
        groups: {
            morfology:
                '<em>ψηλούτσικος </em>→ ψηλ<span style="color: #b87333">ός</span> +<span style="color: #b87333"> -ούτσικος</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["tallish (affectionate)"],
        transls: ["From the word Ψηλός — tall"],
        translation: "tallish (affectionate)",
        kind: "Adjectives in -ούτσικος from adjectives",
        unicTransl: "tall",
        notice: "",
    },
    {
        word: "αγριωπός",
        base: "άγριος",
        groups: {
            morfology:
                '<em>αγριωπώς </em>→ άγρι<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ωπός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["fierce-looking"],
        transls: ["From the word Άγριος — wild, fierce"],
        translation: "fierce-looking",
        kind: "Adjectives in -ωπός from adjectives",
        unicTransl: "wild, fierce",
        notice: "",
    },
    {
        word: "κοκκινωπός",
        base: "κόκκινος",
        groups: {
            morfology:
                '<em>κοκκινωπός </em>→ κόκκιν<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ωπός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["reddish"],
        transls: ["From the word Κόκκινος — red"],
        translation: "reddish",
        kind: "Adjectives in -ωπός from adjectives",
        unicTransl: "red",
        notice: "",
    },
    {
        word: "πρασινωπός",
        base: "πράσινος",
        groups: {
            morfology:
                '<em>πρασινωπός </em>→ πράσιν<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ωπός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["greenish"],
        transls: ["From the word Πράσινος — green"],
        translation: "greenish",
        kind: "Adjectives in -ωπός from adjectives",
        unicTransl: "green",
        notice: "",
    },
    {
        word: "ασπριδερός",
        base: "άσπρος",
        groups: {
            morfology:
                '<em>ασπριδερός </em>→ άσπρ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ιδερός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["whitish"],
        transls: ["From the word Άσπρος — white"],
        translation: "whitish",
        kind: "Adjectives in -ιδερός from adjectives",
        unicTransl: "white",
        notice: "",
    },
    {
        word: "μαυριδερός",
        base: "μαύρος",
        groups: {
            morfology:
                '<em>μαυριδερός </em>→ μαύρ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ιδερός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["darkish"],
        transls: ["From the word Μαύρος — black"],
        translation: "darkish",
        kind: "Adjectives in -ιδερός from adjectives",
        unicTransl: "black",
        notice: "",
    },
    {
        word: "βαθουλός",
        base: "βαθύς",
        groups: {
            morfology:
                '<em>βαθουλός </em>→ βαθ<span style="color: #b87333">ύς</span> +<span style="color: #b87333"> -ουλός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["deep, hollow"],
        transls: ["From the word Βαθύς — deep"],
        translation: "deep, hollow",
        kind: "Adjectives in -ουλός from adjectives",
        unicTransl: "deep",
        notice: "",
    },
    {
        word: "μακρουλός",
        base: "μακρύς",
        groups: {
            morfology:
                '<em>μακρουλός </em>→ μακρ<span style="color: #b87333">ύς</span> +<span style="color: #b87333"> -ουλός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["longish, oblong"],
        transls: ["From the word Μακρύς — long"],
        translation: "longish, oblong",
        kind: "Adjectives in -ουλός from adjectives",
        unicTransl: "long",
        notice: "",
    },
    {
        word: "παχουλός",
        base: "παχύς",
        groups: {
            morfology:
                '<em>παχουλός </em>→ παχ<span style="color: #b87333">ύς</span> +<span style="color: #b87333"> -ουλός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["chubby"],
        transls: ["From the word Παχύς — fat"],
        translation: "chubby",
        kind: "Adjectives in -ουλός from adjectives",
        unicTransl: "fat",
        notice: "",
    },
    {
        word: "αντικρινός",
        base: "αντίκρυ",
        groups: {
            morfology:
                '<em>αντικρινός </em>→ αντίκρ<span style="color: #b87333">υ</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">αντίκρυ</span> < Medieval Greek <span style="color:#7a9473">ἀντίκρυ</span> < Ancient Greek <span style="color:#7a9473">ἀντικρύ</span>.',
        },
        qws: ["opposite"],
        transls: ["From the word Αντίκρυ — opposite"],
        translation: "opposite",
        kind: "Adjectives in -ινός from adverbs",
        unicTransl: "opposite",
        notice: "",
    },
    {
        word: "κατοπινός",
        base: "κατόπιν",
        groups: {
            morfology:
                '<em>κατοπινός </em>→ κατόπ<span style="color: #b87333">ιν</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["subsequent, following"],
        transls: ["From the word Κατόπιν — afterwards"],
        translation: "subsequent, following",
        kind: "Adjectives in -ινός from adverbs",
        unicTransl: "afterwards",
        notice: "",
    },
    {
        word: "κοντινός",
        base: "κοντά",
        groups: {
            morfology:
                '<em>κοντινός </em>→ κοντ<span style="color: #b87333">ά</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">κοντά</span> – near < Ancient Greek <span style="color:#7a9473">κοντός</span> – pole, rod.',
        },
        qws: ["near, close"],
        transls: ["From the word Κοντά — near"],
        translation: "near, close",
        kind: "Adjectives in -ινός from adverbs",
        unicTransl: "near",
        notice: "",
    },
    {
        word: "μακρινός",
        base: "μακριά",
        groups: {
            morfology:
                '<em>μακρινός </em>→ μακρ<span style="color: #b87333">ιά</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["distant, far"],
        transls: ["From the word Μακριά — far"],
        translation: "distant, far",
        kind: "Adjectives in -ινός from adverbs",
        unicTransl: "far",
        notice: "",
    },
    {
        word: "παντοτινός",
        base: "πάντοτε",
        groups: {
            morfology:
                '<em>παντοτινός </em>→ πάντοτ<span style="color: #b87333">ε</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["eternal, continuous"],
        transls: ["From the word Πάντοτε — always"],
        translation: "eternal, continuous",
        kind: "Adjectives in -ινός from adverbs",
        unicTransl: "always",
        notice: "",
    },
    {
        word: "περσινός",
        base: "πέρσι",
        groups: {
            morfology:
                '<em>περσινός </em>→ πέρσ<span style="color: #b87333">ι</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["last year's"],
        transls: ["From the word Πέρσι — last year"],
        translation: "last year's",
        kind: "Adjectives in -ινός from adverbs",
        unicTransl: "last year",
        notice: "",
    },
    {
        word: "σημερινός",
        base: "σήμερα",
        groups: {
            morfology:
                '<em>σημερινός </em>→ σήμερ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["today's"],
        transls: ["From the word Σήμερα — today"],
        translation: "today's",
        kind: "Adjectives in -ινός from adverbs",
        unicTransl: "today",
        notice: "",
    },
    {
        word: "τωρινός",
        base: "τώρα",
        groups: {
            morfology:
                '<em>τωρινός </em>→ τώρ<span style="color: #b87333">α</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                "<br>The etymology of this word has not been added yet. You can send it to us!",
        },
        qws: ["current, present"],
        transls: ["From the word Τώρα — now"],
        translation: "current, present",
        kind: "Adjectives in -ινός from adverbs",
        unicTransl: "now",
        notice: "",
    },
    {
        word: "φετινός",
        base: "φέτος",
        groups: {
            morfology:
                '<em>φετινός </em>→ φέτ<span style="color: #b87333">ος</span> +<span style="color: #b87333"> -ινός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">φέτος</span> – this year < Koine Greek (<span style="color:#7a9473">ἐφετινός</span> – of this year < <span style="color:#7a9473">ἔτος</span> – year)',
        },
        qws: ["this year's"],
        transls: ["From the word Φέτος — this year"],
        translation: "this year's",
        kind: "Adjectives in -ινός from adverbs",
        unicTransl: "this year",
        notice: "",
    },
    {
        word: "χτεσινός / χθεσινός",
        base: "χτες, χθες",
        groups: {
            morfology:
                '<em>χτεσινός </em>→ χτες +<span style="color: #b87333"> -ινός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">χτες</span> – yesterday',
        },
        qws: ["yesterday's"],
        transls: ["From the word Χτες — yesterday"],
        translation: "yesterday's",
        kind: "Adjectives in -ινός from adverbs",
        unicTransl: "yesterday",
        notice: "",
    },
    {
        word: "αυριανός",
        base: "αύριο",
        groups: {
            morfology:
                '<em>αυριανός </em>→ αύρ<span style="color: #b87333">ιο</span> +<span style="color: #b87333"> -ιανός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">αύριο</span> – tomorrow < Medieval Greek <span style="color:#7a9473">αὔριο</span> < Ancient Greek <span style="color:#7a9473">αὔριον</span>',
        },
        qws: ["tomorrow's"],
        transls: ["From the word Αύριο — tomorrow"],
        translation: "tomorrow's",
        kind: "Adjectives in -ιανός from adverbs",
        unicTransl: "tomorrow",
        notice: "",
    },
    {
        word: "παρακατιανός",
        base: "παρακάτω",
        groups: {
            morfology:
                '<em>παρακατιανός </em>→ παρακάτ<span style="color: #b87333">ω</span> +<span style="color: #b87333"> -ιανός</span>',
            etymology:
                '<br>From Modern Greek <span style="color:#7a9473">παρακάτω</span> – below, further, then < Ancient Greek (<span style="color:#7a9473">κάτω</span> – down, below < <span style="color:#7a9473">κάτα</span> – towards, about; against)',
        },
        qws: ["lower, inferior, mediocre"],
        transls: ["From the word Παρακάτω — below, further, then"],
        translation: "lower, inferior, mediocre",
        kind: "Adjectives in -ιανός from adverbs",
        unicTransl: "below, further, then",
        notice: "",
    },
];
