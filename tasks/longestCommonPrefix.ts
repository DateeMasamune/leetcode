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

/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function (strs: string[]) {
    if (strs.length <= 1) {
        return String(strs);
    }
    const [word, ...words] = strs;
    let result = '';
    for (let i = 0; i < word.length; i++) {
        const res = words.every((s: string) => word[i] === s.substring(i, i + 1))
        if (res) {
            result += word[i]
        } else {
            break
        }
    }
    return result;
};

const res = longestCommonPrefix(["reflower","flow","flight"])
console.log('=======>res', res);
