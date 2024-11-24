"use strict";
/**
 * Дано целое число x, вернуть, trueесли xэто
палиндром
, и falseв противном случае .

 

Пример 1:

Ввод: x = 121
 Вывод: true
 Пояснение: 121 читается как 121 слева направо и справа налево.
Пример 2:

Ввод: x = -121
 Вывод: false
 Пояснение: Слева направо читается как -121. Справа налево становится 121-. Поэтому это не палиндром.
Пример 3:

Ввод: x = 10
 Вывод: false
 Пояснение: Читает 01 справа налево. Следовательно, это не палиндром.
 

Ограничения:

-231 <= x <= 231 - 1
 

Продолжение: Можете ли вы решить эту задачу, не преобразуя целое число в строку?
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    let result = 0;
    for (let i = x; i; i = Math.floor(i / 10)) {
        result *= 10;
        result += i % 10;
    }
    return result === x;
};
exports.isPalindrome = isPalindrome;
const fn = (0, exports.isPalindrome)(121);
