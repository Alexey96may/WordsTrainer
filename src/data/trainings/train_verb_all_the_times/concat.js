import { writeFileSync } from "fs";
import { globalArray } from "./ru.js"; // СКЕЛЕТ (порядок элементов тут)
import { globalArray2 } from "./fr.js"; // ДАННЫЕ (тут лежат заполненные объекты)

const getCompositeKey = (item) => `${item.word.trim()}_${item.base.trim()}`;

// 1. Создаем "Словарь правок" на основе данных из второго массива
// Map берет каждый объект из globalArray2 и делает его доступным по ключу
const processedMap = new Map(
    globalArray2.map((item) => [getCompositeKey(item), item]),
);

// 2. Проходим по первому массиву (скелету)
// Если находим такой же объект в Map — заменяем его на объект из второго массива
// Если не находим — оставляем оригинальный объект из первого массива
const finalArray = globalArray.map((originalItem) => {
    const key = getCompositeKey(originalItem);
    return processedMap.has(key) ? processedMap.get(key) : originalItem;
});

// 3. Сохраняем итоговый результат
try {
    writeFileSync(
        "final_data.json",
        JSON.stringify(finalArray, null, 4),
        "utf8",
    );
    console.log("Готово! Файл final_data.json создан.");
} catch (err) {
    console.error("Ошибка записи:", err);
}
