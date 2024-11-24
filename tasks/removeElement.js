"use strict";
/**
 * Дан массив целых чисел numsи целое число val, удалить все вхождения valв nums in-place . Порядок элементов может быть изменен. Затем вернуть количество элементов, в numsкоторых не равныval .

Рассмотрим число элементов, в numsкотором не равны valбыть k, чтобы быть принятым, вам необходимо сделать следующие вещи:

Измените массив numsтак, чтобы первые kэлементы numsсодержали элементы, которые не равны val. Остальные элементы numsне важны, как и размер nums.
Возвращаться k.
Судья по индивидуальному заказу:

Судья проверит ваше решение с помощью следующего кода:

int[] nums = [...]; // Входной массив
int val = ...; // Значение для удаления
int[] expectedNums = [...]; // Ожидаемый ответ правильной длины.
                            // Сортировка выполняется без значений, равных val.

int k = removeElement(nums, val); // Вызывает вашу реализацию

утверждать k == expectedNums.length;
sort(nums, 0, k); // Сортируем первые k элементов nums
для (int i = 0; i < actualLength; i++) {
    утверждать nums[i] == expectedNums[i];
}
Если все утверждения пройдены, то ваше решение будет принято .

 

Пример 1:

Ввод: nums = [3,2,2,3], val = 3
 Вывод: 2, nums = [2,2,_,_]
 Пояснение: Ваша функция должна возвращать k = 2, при этом первые два элемента nums равны 2.
Не имеет значения, что вы оставите после возвращаемого k (поэтому они и есть подчеркивания).
Пример 2:

Ввод: nums = [0,1,2,2,3,0,4,2], val = 2
 Вывод: 5, nums = [0,1,4,0,3,_,_,_]
 Пояснение: Ваша функция должна возвращать k = 5, при этом первые пять элементов nums должны содержать 0, 0, 1, 3 и 4.
Обратите внимание, что пять элементов могут быть возвращены в любом порядке.
Не имеет значения, что вы оставите после возвращаемого k (поэтому они и есть подчеркивания).
 

Ограничения:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeElement = void 0;
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    let head = 0;
    let tail = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        const currentElement = nums[head];
        const lastElements = nums[tail];
        if (currentElement === val) {
            nums[head] = lastElements;
            nums[tail] = currentElement;
            tail--;
        }
        else {
            head++;
        }
    }
    return head;
};
exports.removeElement = removeElement;
const res = (0, exports.removeElement)([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log('=======>res', res);
