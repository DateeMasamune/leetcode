"use strict";
/**
 * Дано отсортированное множество различных целых чисел и целевое значение, вернуть индекс, если цель найдена. Если нет, вернуть индекс, где бы он был, если бы он был вставлен по порядку.

Вам необходимо написать алгоритм, обладающий  O(log n)сложностью во время выполнения.

Пример 1:

Ввод: числа = [1,3,5,6], цель = 5
 Вывод: 2
Пример 2:

Ввод: числа = [1,3,5,6], цель = 2
 Вывод: 1
Пример 3:

Ввод: числа = [1,3,5,6], цель = 7
 Вывод: 4
 

Ограничения:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
numsсодержит различные значения, отсортированные в порядке возрастания .
-104 <= target <= 104
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchInsert = void 0;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target < nums[i]) {
            if (target === nums[i - 1]) {
                return i - 1;
            }
            else {
                return i;
            }
        }
        if (i === nums.length - 1) {
            if (nums[i] === target) {
                return i;
            }
            return i + 1;
        }
    }
};
exports.searchInsert = searchInsert;
const res = (0, exports.searchInsert)([1], 1);
