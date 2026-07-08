<template>
    <div class="table-container" ref="tableContentRef">
        <table id="table_verbs" class="trainer-table text-center table_decline">
            <thead>
                <tr class="table-dark">
                    <th
                        v-for="(titleObj, index) in titles"
                        :key="index"
                        :style="{ width: 100 / titles.length + '%' }"
                    >
                        {{ titleObj.title }}
                    </th>
                </tr>
            </thead>

            <tbody
                v-for="(group, gIdx) in groupedTableData"
                :key="gIdx"
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
                    v-for="(row, rIdx) in group.rows"
                    :key="rIdx"
                    :class="{ orange_row: checkHighlight(row) }"
                    @click="handleRowClick(row)"
                >
                    <td
                        v-for="(titleObj, tIdx) in titles"
                        :key="tIdx"
                        v-html="row[titleObj.place] || '—'"
                    ></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

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

const tableContentRef = ref<HTMLElement | null>(null);

// Helper smoothing function from your old script
function flattenObj(ob: any): any {
    let result: any = {};
    for (const i in ob) {
        if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
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

// 1. Create a list of unique Kinds (excluding "All")
const categories = computed(() => {
    const set = new Set<string>();
    props.globalArray.forEach((item) => {
        let kind = item.kind || "Без группы";
        kind = kind[0].toUpperCase() + kind.slice(1);
        set.add(kind);
    });
    return Array.from(set);
});

// 2. Construct the table structure, ensuring row uniqueness based on the `base+kind` rule.
const groupedTableData = computed(() => {
    const result: Array<{ kindName: string; rows: any[] }> = [];
    const usedCombinations = new Set<string>();

    // Create a deep copy and flatten the source array
    const rawPlain = props.globalArray.map((item) => {
        const flat = flattenObj(item);
        if (!flat.base) flat.base = flat.word;
        return flat;
    });

    categories.value.forEach((currentGrName) => {
        const groupRows: any[] = [];

        rawPlain.forEach((item) => {
            const itemKind = (item.kind || "Без группы").toLowerCase();
            const targetKind = currentGrName.toLowerCase();

            const matchesKind =
                itemKind === targetKind ||
                (targetKind === "без группы" && item.kind === "");
            const uniqKey = item.base + item.kind;

            if (matchesKind && !usedCombinations.has(uniqKey)) {
                const flatValues = props.titles.map(
                    (t) => item[t.place] || "—",
                );
                const flatString = flatValues.join("\t");

                groupRows.push({ ...item, flatString });
                usedCombinations.add(uniqKey);
            }
        });

        result.push({
            kindName: currentGrName,
            rows: groupRows,
        });
    });

    return result;
});

// Pool of currently filtered and visible rows (for the modal slider logic)
const visibleFlatRows = computed(() => {
    const rows: any[] = [];
    groupedTableData.value.forEach((group) => {
        if (isGroupVisible(group.kindName)) {
            rows.push(...group.rows);
        }
    });
    return rows;
});

// Check visibility of the entire group (none_table / is_table logic)
const isGroupVisible = (groupKindName: string) => {
    if (props.checkedKind.includes("все") || props.checkedKind.length === 0)
        return true;
    return props.checkedKind.includes(groupKindName.toLowerCase());
};

// Check row highlighting (illum logic)
const checkHighlight = (row: any) => {
    if (!props.currentQuestion || !props.isHintUsed) return false;

    const qwBase = (
        props.currentQuestion.base ||
        props.currentQuestion.word ||
        ""
    ).toLowerCase();
    const qwKind = (props.currentQuestion.kind || "без группы").toLowerCase();

    // Проверяем ячейки строки
    const hasBase = Object.values(row).some(
        (val) => typeof val === "string" && val.toLowerCase() === qwBase,
    );
    const hasKind = (row.kind || "без группы").toLowerCase() === qwKind;

    return hasBase && hasKind;
};

// On click, find the row index within the overall list of visible directory items
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

/* Remove the right border from the last column */
.trainer-table th:last-child,
.trainer-table td:last-child {
    border-right: none;
}

/* Table header (Top level) */
.table-dark th {
    background-color: #111111;
    color: #198754;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #198754;
}

/* Group separator headers (Categories within the table) */
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

/* Data rows */
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
    background-color: #ffc107 !important;
    color: #000000 !important;
}

.orange_row td {
    color: #000000 !important;
    border-bottom: 1px solid #cca105 !important;
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
