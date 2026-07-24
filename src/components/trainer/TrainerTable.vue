<template>
    <div ref="tableContentRef" class="table-container">
        <table id="table_verbs" class="trainer-table text-center table_decline">
            <thead>
                <tr class="table-dark">
                    <th
                        v-for="titleObj in titles"
                        :key="titleObj.place"
                        :style="{ width: 100 / titles.length + '%' }"
                    >
                        {{ titleObj.title }}
                    </th>
                </tr>
            </thead>

            <tbody
                v-for="group in groupedTableData"
                :key="group.kindName"
                class="group_table"
                :class="
                    isGroupVisible(group.kindName) ? 'is_table' : 'none_table'
                "
            >
                <tr class="group-header-row">
                    <th
                        scope="col"
                        class="table-active"
                        :colspan="titles.length"
                    >
                        {{ group.kindName }}
                    </th>
                </tr>

                <tr
                    v-for="row in group.rows"
                    :key="row.uniqKey"
                    :class="{ orange_row: highlightedRowKeys.has(row.uniqKey) }"
                    @click="handleRowClick(row)"
                >
                    <td
                        v-for="titleObj in titles"
                        :key="titleObj.place"
                        v-html="row[titleObj.place] || '—'"
                    ></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

interface TitleItem {
    title: string;
    place: string;
}

interface Props {
    titles: TitleItem[];
    globalArray: any[];
    checkedKind: string[];
    currentQuestion: any;
    isHintUsed: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (
        e: "row-select",
        payload: { flatIndex: number; filteredRows: any[] },
    ): void;
}>();

const { t } = useI18n();
const tableContentRef = ref<HTMLElement | null>(null);

function flattenObj(ob: any): any {
    let result: any = {};
    for (const i in ob) {
        if (
            typeof ob[i] === "object" &&
            ob[i] !== null &&
            !Array.isArray(ob[i])
        ) {
            const temp = flattenObj(ob[i]);
            for (const j in temp) {
                result[j] = temp[j];
            }
        } else {
            result[i] = ob[i];
        }
    }
    return result;
}

const groupedTableData = computed(() => {
    const noGroupText = t("trainer.states.noGroup");
    const groupsMap = new Map<string, { kindName: string; rows: any[] }>();
    const usedCombinations = new Set<string>();

    for (let i = 0; i < props.globalArray.length; i++) {
        const item = props.globalArray[i];
        const flat = flattenObj(item);
        if (!flat.base) flat.base = flat.word;

        let rawKind = flat.kind || noGroupText;
        const kindName = rawKind[0].toUpperCase() + rawKind.slice(1);
        const uniqKey = `${flat.base || ""}_${flat.kind || ""}_${i}`;

        if (usedCombinations.has(`${flat.base}_${flat.kind}`)) continue;
        usedCombinations.add(`${flat.base}_${flat.kind}`);

        const flatValues = props.titles.map(
            (tItem) => flat[tItem.place] || "—",
        );
        const flatString = flatValues.join("\t");
        const rowObj = { ...flat, flatString, uniqKey };

        if (!groupsMap.has(kindName)) {
            groupsMap.set(kindName, { kindName, rows: [rowObj] });
        } else {
            groupsMap.get(kindName)!.rows.push(rowObj);
        }
    }

    return Array.from(groupsMap.values());
});

const visibleFlatRows = computed(() => {
    const rows: any[] = [];
    for (const group of groupedTableData.value) {
        if (isGroupVisible(group.kindName)) {
            rows.push(...group.rows);
        }
    }
    return rows;
});

const isGroupVisible = (groupKindName: string) => {
    if (props.checkedKind.includes("all") || props.checkedKind.length === 0)
        return true;
    return props.checkedKind.includes(groupKindName.toLowerCase());
};

const activeHighlightVariants = computed(() => {
    if (!props.currentQuestion || !props.isHintUsed) return [];

    const rawWord = props.currentQuestion.word || "";
    const rawBase = props.currentQuestion.base || "";

    const wordVariants = rawWord
        .split("/")
        .map((v: string) => v.trim().toLowerCase())
        .filter(Boolean);

    const baseVariants = rawBase
        .split("/")
        .map((v: string) => v.trim().toLowerCase())
        .filter(Boolean);

    if (wordVariants.length > 0) {
        const qwKind = (
            props.currentQuestion.kind || t("trainer.states.noGroup")
        ).toLowerCase();

        let hasWordMatch = false;
        for (const group of groupedTableData.value) {
            if (group.kindName.toLowerCase() !== qwKind) continue;
            for (const row of group.rows) {
                for (const key in row) {
                    if (
                        typeof row[key] === "string" &&
                        wordVariants.includes(row[key].trim().toLowerCase())
                    ) {
                        hasWordMatch = true;
                        break;
                    }
                }
                if (hasWordMatch) break;
            }
            if (hasWordMatch) break;
        }

        if (hasWordMatch) return wordVariants;
    }

    return baseVariants;
});

const highlightedRowKeys = computed(() => {
    const set = new Set<string>();
    if (!props.currentQuestion || !props.isHintUsed) return set;

    const variants = activeHighlightVariants.value;
    if (!variants.length) return set;

    const qwKind = (
        props.currentQuestion.kind || t("trainer.states.noGroup")
    ).toLowerCase();

    for (const group of groupedTableData.value) {
        if (group.kindName.toLowerCase() !== qwKind) continue;

        for (const row of group.rows) {
            for (const key in row) {
                const val = row[key];
                if (
                    typeof val === "string" &&
                    variants.includes(val.trim().toLowerCase())
                ) {
                    set.add(row.uniqKey);
                    break;
                }
            }
        }
    }

    return set;
});

const handleRowClick = (clickedRow: any) => {
    const idx = visibleFlatRows.value.findIndex(
        (r) => r.flatString === clickedRow.flatString,
    );
    if (idx !== -1) {
        emit("row-select", {
            flatIndex: idx,
            filteredRows: visibleFlatRows.value,
        });
    }
};

defineExpose({ tableContentRef });
</script>

<style scoped>
.table-container {
    width: 100%;
    overflow-x: auto;
    margin-top: 24px;
    border: 1px solid #198754;
    border-radius: 8px;
    background-color: #1d1d1d;
}

.trainer-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background-color: #1d1d1d;
    color: #ffffff;
}

.trainer-table th,
.trainer-table td {
    padding: 10px 12px;
    border-bottom: 1px solid #2d2d2d;
    border-right: 1px solid #2d2d2d;
    font-size: 0.95rem;
}

.trainer-table th:last-child,
.trainer-table td:last-child {
    border-right: none;
}

.table-dark th {
    background-color: #111111;
    color: #198754;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #198754;
}

.table-active {
    background-color: #142b1f !important;
    color: #ffffff !important;
    font-weight: bold;
    text-align: left;
    padding-left: 15px !important;
    border-bottom: 1px solid #198754 !important;
    border-top: 1px solid #198754 !important;
}

.group_table.none_table {
    display: none;
}

.group_table.is_table {
    display: table-row-group;
}

.group_table.is_table tr:not(.group-header-row) {
    background-color: #1d1d1d;
    transition: background-color 0.15s ease-in-out;
    cursor: pointer;
}

@media (hover: hover) {
    .group_table.is_table tr:not(.group-header-row):hover {
        background-color: #262626;
    }
    .group_table.is_table tr:not(.group-header-row):nth-child(even):hover {
        background-color: #2b2b2b;
    }
}

.group_table.is_table tr:not(.group-header-row):nth-child(even) {
    background-color: #222222;
}

.group_table.is_table tr:not(.group-header-row):active {
    background-color: #262626;
}
.group_table.is_table tr:not(.group-header-row):nth-child(even):active {
    background-color: #2b2b2b;
}

.orange_row,
.group_table.is_table tr.orange_row:nth-child(even) {
    background-color: #25c97c !important;
    color: #000000 !important;
}

.orange_row td {
    color: #000000 !important;
    border-bottom: 1px solid #198754 !important;
}

@media (max-width: 600px) {
    .trainer-table th,
    .trainer-table td {
        font-size: 0.9rem;
    }
    .table-dark th {
        font-size: 0.7rem;
    }
    .group-header-row {
        font-size: 0.8rem;
    }
}
@media (max-width: 340px) {
    .trainer-table th,
    .trainer-table td {
        font-size: 0.8rem;
    }
    .table-dark th {
        font-size: 0.6rem;
    }
    .group-header-row th {
        font-size: 0.7rem;
    }
}
</style>
