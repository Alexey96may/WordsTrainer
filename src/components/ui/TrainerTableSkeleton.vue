<template>
    <div class="table-container skeleton-wrapper">
        <table class="trainer-table text-center table_decline">
            <thead>
                <tr class="table-dark">
                    <th
                        v-for="c in colsCount"
                        :key="'th-' + c"
                        :style="{ width: 100 / colsCount + '%' }"
                    >
                        <div class="skeleton-box skeleton-header"></div>
                    </th>
                </tr>
            </thead>

            <tbody
                v-for="g in groupsCount"
                :key="'g-' + g"
                class="group_table is_table"
            >
                <tr class="group-header-row">
                    <th scope="col" class="table-active" :colspan="colsCount">
                        <div class="skeleton-box skeleton-group"></div>
                    </th>
                </tr>

                <tr v-for="r in rowsPerGroup" :key="'r-' + g + '-' + r">
                    <td v-for="c in colsCount" :key="'td-' + c">
                        <div class="skeleton-box skeleton-cell"></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        colsCount?: number;
        groupsCount?: number;
        rowsPerGroup?: number;
    }>(),
    {
        colsCount: 3,
        groupsCount: 2,
        rowsPerGroup: 3,
    },
);
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
}

.trainer-table th,
.trainer-table td {
    padding: 10px 12px;
    border-bottom: 1px solid #2d2d2d;
    border-right: 1px solid #2d2d2d;
}

.trainer-table th:last-child,
.trainer-table td:last-child {
    border-right: none;
}

.table-dark th {
    background-color: #111111;
    border-bottom: 2px solid #198754;
}

.table-active {
    background-color: #142b1f !important;
    border-bottom: 1px solid #198754 !important;
    border-top: 1px solid #198754 !important;
    padding-left: 15px !important;
}

/* (Shimmer) */
.skeleton-box {
    height: 16px;
    border-radius: 4px;
    background: linear-gradient(90deg, #2a2a2a 25%, #3d3d3d 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite linear;
    margin: 0 auto;
}

.skeleton-header {
    width: 60%;
    height: 14px;
    background: linear-gradient(90deg, #1a3828 25%, #27573e 50%, #1a3828 75%);
    background-size: 200% 100%;
}

.skeleton-group {
    width: 30%;
    margin: 0;
    height: 14px;
}

.skeleton-cell {
    width: 75%;
}

@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
}

@media (max-width: 600px) {
    .skeleton-box {
        height: 14px;
    }
}
</style>
