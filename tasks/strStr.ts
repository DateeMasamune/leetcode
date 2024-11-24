/**
 * Для двух строк needleи haystackвернуть индекс первого вхождения needleв haystack, или , -1если needleне является частью haystack.

 

Пример 1:

Ввод: haystack = "sadbutsad", needle = "sad"
 Вывод: 0
 Пояснение: "sad" встречается под индексами 0 и 6.
Первое вхождение имеет индекс 0, поэтому мы возвращаем 0.
Пример 2:

Ввод: haystack = "leetcode", needle = "leeto"
 Вывод: -1
 Пояснение: "leeto" не встречается в "leetcode", поэтому мы возвращаем -1.
 

Ограничения:

1 <= haystack.length, needle.length <= 104
haystackи needleсостоят только из строчных английских букв.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export const strStr = function (haystack: string, needle: string) {
    for (let i = 0; i < haystack.length; i++) {
        const result = needle === haystack.substring(i, i + needle.length)

        if (result) {
            return i
        }
        if (i === haystack.length - 1) {
            return -1
        }
    }
};

const res = strStr("hello", "ll")
console.log('=======>res', res);
