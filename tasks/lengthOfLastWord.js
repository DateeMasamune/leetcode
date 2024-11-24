"use strict";
/**
 * Для заданной строки, sсостоящей из слов и пробелов, вернуть длину последнего слова в строке.

Слово — это максимум
подстрока
состоящий только из символов, не являющихся пробелами.

 

Пример 1:

Ввод: s = "Hello World"
 Вывод: 5
 Пояснение: Последнее слово — "World" длиной 5.
Пример 2:

Ввод: s = "Отправь меня на луну"
 Вывод: 4
 Пояснение: Последнее слово - "луна" длиной 4.
Пример 3:

Ввод: s = "luffy is still joyboy"
 Вывод: 6
 Пояснение: Последнее слово — "joyboy" длиной 6.
 

Ограничения:

1 <= s.length <= 104
sсостоит только из английских букв и пробелов ' '.
В тексте будет как минимум одно слово s.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthOfLastWord = void 0;
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    let res = 0;
    let str = s.trim();
    for (let i = str.length - 1; i >= 0; i--) {
        if (str.charCodeAt(i) !== 32) {
            res++;
        }
        else {
            return res;
        }
        if (i === 0) {
            return res;
        }
    }
};
exports.lengthOfLastWord = lengthOfLastWord;
const res = (0, exports.lengthOfLastWord)("   fly me   to   the moon  ");
console.log('=======>res', res);
