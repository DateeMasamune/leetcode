"use strict";
/**
 * Дана строка s, найдите длину самой длинной из них.
подстрока
без повторения символов.

 

Пример 1:

Ввод: s = "abcabcbb"
 Вывод: 3
 Пояснение: Ответ: "abc", длина которого равна 3.
Пример 2:

Ввод: s = "bbbbb"
 Вывод: 1
 Пояснение: Ответ: "b", длина которого равна 1.
Пример 3:

Ввод: s = "pwwkew"
 Вывод: 3
 Пояснение: Ответ: "wke", длина которого равна 3.
Обратите внимание, что ответ должен быть подстрокой, «pwke» — это подпоследовательность, а не подстрока.
 

Ограничения:

0 <= s.length <= 5 * 104
sсостоит из английских букв, цифр, символов и пробелов.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthOfLongestSubstring = void 0;
/**
 * @param {string}
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (s.length <= 0) {
        return 0;
    }
    let newRef = 0;
    let ref = 0;
    let result = '';
    const stack = [];
    while (stack.length < s.length) {
        const indexOf = result.indexOf(s[ref]);
        if (indexOf === 0 || indexOf > 0) {
            newRef++;
            ref = newRef;
            stack.push(result);
            result = s[ref];
        }
        else {
            result += s[ref];
        }
        ref++;
        ref = ref === s.length ? s.length - 1 : ref;
    }
    return Math.max(...stack.map((letter) => letter.length));
};
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
const res = (0, exports.lengthOfLongestSubstring)('');
console.log('=======>res', res);
/**
 * встречаю букву
 * проверяю текущая буква есть уже в переменной?
 * да - сдвигаю указатель на + 1, пушу в стек, записываю в переменную новую букву относительно указателя,
 * нет - добавляю букву в переменную, если указатель дошел до конца слова, то пушу слово в стек, сдвигаю указатель на +1
 *
 */
/**
 * anviaj
 * anvi
 * nviaj
 * viaj
 * iaj
 * aj
 * j
 */
/**
 * dvdf
 * d
 * dv
 * v
 * vd
 * vdf
 */
var lengthOfLongestSubstring2 = function (s) {
    let maxLength = 0;
    let start = 0;
    const chars = new Array(128).fill(-1);
    for (let end = 0; end < s.length; end++) {
        const charCode = s.charCodeAt(end);
        console.log('=======>charCode', charCode);
        console.log('=======>chars[charCode]', chars[charCode]);
        start = Math.max(start, chars[charCode] + 1);
        chars[charCode] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};
lengthOfLongestSubstring2('pwwkew');
