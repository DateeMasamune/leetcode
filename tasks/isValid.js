"use strict";
/**
 * Дана строка, sсодержащая только символы '(', ')', '{', '}', '['и ']', определите, является ли входная строка допустимой.

Входная строка действительна, если:

Открытые скобки должны быть закрыты скобками того же типа.
Открытые скобки должны быть закрыты в правильном порядке.
Каждой закрывающейся скобке соответствует открывающаяся скобка того же типа.
 

Пример 1:

Ввод: s = "()"

Вывод: истина

Пример 2:

Ввод: s = "()[]{}"

Вывод: истина

Пример 3:

Ввод: s = "(]"

Вывод: ложь

Пример 4:

Ввод: s = "([])"

Вывод: истина

 

Ограничения:

1 <= s.length <= 104
sсостоит только из скобок '()[]{}'.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    if (s[0] === ')' || s[0] === ']' || s[0] === '}' || s.length <= 1) {
        return false;
    }
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    for (let i = 0; i < s.length; i++) {
        const isOpen = s[i] === '(' || s[i] === '[' || s[i] === '{';
        if (isOpen) {
            stack.push(s[i]);
        }
        else {
            //@ts-ignore
            if (stack[stack.length - 1] === map[s[i]]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
        if (i === s.length - 1) {
            return !(stack.length > 0);
        }
    }
    return true;
};
const res = isValid('([]){');
console.log('=======>res', res);
