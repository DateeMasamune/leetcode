"use strict";
/**
 * 14. Самый длинный общий префикс
Легкий
Темы
Компании
Напишите функцию для поиска самой длинной общей строки префикса среди массива строк.

Если общего префикса нет, вернуть пустую строку "".

 

Пример 1:

Ввод: strs = ["flower","flow","flight"]
 Вывод: "fl"
Пример 2:

Ввод: strs = ["dog","racecar","car"]
 Вывод: ""
 Пояснение: Среди входных строк нет общего префикса.
 

Ограничения:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i]состоит только из строчных английских букв.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestCommonPrefix = void 0;
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs.length <= 1) {
        return String(strs);
    }
    const [word, ...words] = strs;
    let result = '';
    for (let i = 0; i < word.length; i++) {
        const res = words.every((s) => word[i] === s.substring(i, i + 1));
        if (res) {
            result += word[i];
        }
        else {
            break;
        }
    }
    return result;
};
exports.longestCommonPrefix = longestCommonPrefix;
const res = (0, exports.longestCommonPrefix)(["reflower", "flow", "flight"]);
console.log('=======>res', res);
