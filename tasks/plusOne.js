"use strict";
/**
 * Вам дано большое целое число, представленное в виде массива целых чисел digits, где каждая цифра digits[i]— это цифра целого числа. Цифры упорядочены от наиболее значимых к наименее значимым слева направо. Большое целое число не содержит начальных '.ith0

Увеличьте большое целое число на единицу и верните полученный массив цифр .

 

Пример 1:

Вход: цифры = [1,2,3]
 Выход: [1,2,4]
 Пояснение: Массив представляет целое число 123.
Увеличение на единицу дает 123 + 1 = 124.
Таким образом, результат должен быть [1,2,4].
Пример 2:

Вход: цифры = [4,3,2,1]
 Выход: [4,3,2,2]
 Пояснение: Массив представляет целое число 4321.
Увеличение на единицу дает 4321 + 1 = 4322.
Таким образом, результат должен быть [4,3,2,2].
Пример 3:

Ввод: цифры = [9]
 Вывод: [1,0]
 Пояснение: Массив представляет целое число 9.
Увеличение на единицу дает 9 + 1 = 10.
Таким образом, результат должен быть [1,0].
 

Ограничения:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digitsне содержит начальных 0символов '.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.plusOne = void 0;
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let number = '';
    digits.forEach((num) => {
        number += num;
    });
    number = String(BigInt(number) + 1n);
    return Array.from(number, (num) => +num);
};
exports.plusOne = plusOne;
const res = (0, exports.plusOne)([1, 2, 3]);
console.log('=======>res', res);
