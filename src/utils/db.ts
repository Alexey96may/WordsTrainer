import { openDB } from "idb";
import { toRaw } from "vue";

const DB_NAME = "GreekTrainerDB";
const STORE_NAME = "trainer-progress";

const dbPromise = openDB(DB_NAME, 1, {
    upgrade(db) {
        db.createObjectStore(STORE_NAME);
    },
    blocked() {
        console.error("DB: Open request blocked by another version");
    },
    blocking() {
        console.error("DB: Open request blocking another version");
    },
});

export const saveProgress = async (slug: string, data: any) => {
    try {
        const db = await dbPromise;
        const plainData = JSON.parse(JSON.stringify(toRaw(data)));
        await db.put(STORE_NAME, plainData, slug);
    } catch (e) {
        console.error("DB: Save error", e);
    }
};

export const getProgress = async (slug: string) => {
    try {
        const db = await dbPromise;
        const result = await db.get(STORE_NAME, slug);
        return result;
    } catch (e) {
        console.error("DB: Fetch error", e);
        return null;
    }
};

export const deleteProgress = async (slug: string) => {
    try {
        const db = await dbPromise;
        await db.delete(STORE_NAME, slug);
    } catch (e) {
        console.error("DB: Delete error", e);
    }
};
