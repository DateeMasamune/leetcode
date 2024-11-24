"use strict";
/**
 * Римские цифры представлены семью различными символами  : I, V, X, L, и .CDM

Символ        Значение
Я 1
В 5
х 10
Л 50
С 100
Д 500
М 1000
Например,  2записывается как II римская цифра, просто две единицы, сложенные вместе. 12записывается как  XII, что просто X + II. Число 27записывается как XXVII, что XX + V + II.

Римские цифры обычно пишутся от большего к меньшему слева направо. Однако цифра для четырех не IIII. Вместо этого число четыре записывается как IV. Поскольку единица стоит перед пятью, мы вычитаем ее, получая четыре. Тот же принцип применим к числу девять, которое записывается как IX. Существует шесть случаев, когда используется вычитание:

Iможно поместить перед V(5) и X(10), чтобы получить 4 и 9.
Xможно поместить перед L(50) и C(100), чтобы получить 40 и 90.
Cможно разместить перед D(500) и M(1000), чтобы получить 400 и 900.
Данную римскую цифру преобразуйте в целое число.

 

Пример 1:

Вход: s = "III"
 Выход: 3
 Пояснение: III = 3.
Пример 2:

Вход: s = "LVIII"
 Выход: 58
 Пояснение: L = 50, V = 5, III = 3.
Пример 3:

Ввод: s = "MCMXCIV"
 Вывод: 1994
 Пояснение: M = 1000, CM = 900, XC = 90 и IV = 4.
 

Ограничения:

1 <= s.length <= 15
sсодержит только символы ('I', 'V', 'X', 'L', 'C', 'D', 'M').
Гарантируется ,  что sэто допустимая римская цифра в диапазоне [1, 3999].
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanToInt = void 0;
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const mapRoman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const arrRoman = Array.from(s);
    let sum = 0;
    for (let i = 0; i < arrRoman.length; i++) {
        const currentValue = mapRoman[arrRoman[i]];
        const nextValue = mapRoman[arrRoman[i + 1]];
        const saveSum = nextValue - currentValue;
        if (currentValue === mapRoman["I"] &&
            (nextValue === mapRoman["V"] || nextValue === mapRoman["X"])) {
            sum += saveSum;
            i++;
        }
        else if (currentValue === mapRoman["X"] &&
            (nextValue === mapRoman["L"] || nextValue === mapRoman["C"])) {
            sum += saveSum;
            i++;
        }
        else if (currentValue === mapRoman["C"] &&
            (nextValue === mapRoman['D'] || nextValue === mapRoman["M"])) {
            sum += saveSum;
            i++;
        }
        else {
            sum += currentValue;
        }
    }
    return sum;
};
exports.romanToInt = romanToInt;
(0, exports.romanToInt)("DCXXI");
