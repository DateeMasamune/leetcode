"use strict";
/**
 * n Вы поднимаетесь по лестнице. Чтобы достичь вершины, нужны шаги.

Каждый раз вы можете либо подняться 1, либо 2по ступенькам. Сколькими различными способами вы можете подняться на вершину?

 

Пример 1:

Вход: n = 2
 Выход: 2
 Пояснение: Есть два способа подняться на вершину.
1. 1 шаг + 1 шаг
2. 2 шага
Пример 2:

Вход: n = 3
 Выход: 3
 Пояснение: Есть три способа подняться на вершину.
1. 1 шаг + 1 шаг + 1 шаг
2. 1 шаг + 2 шага
3. 2 шага + 1 шаг
 

Ограничения:

1 <= n <= 45
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.climbStairs = void 0;
/**
 * @param {number} n
 * @return {number}
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
const climbStairs = function (n) {
    const DEFAULT_STEP = 1;
    const TWO_STEP = 2;
    let stepCount = TWO_STEP;
    let step = 0;
    let index = 0;
    let countLength = 1;
    const stack = {};
    while (step < n) {
        step += stepCount;
        const isOverflow = step > n;
        stack[index] = !isOverflow ? stack[index]?.length ? [...stack[index], stepCount] : [stepCount] : [];
        if (step === n) {
            step = 0;
            const isStop = stack[index][stack[index].length - 1] === TWO_STEP;
            if (isStop) {
                step = n + 1;
            }
            index++;
            stepCount = TWO_STEP;
            countLength = 1;
        }
        else {
            if (countLength >= Object.keys(stack).length) {
                stepCount = 1;
            }
            else {
                stepCount = TWO_STEP;
                countLength++;
            }
        }
    }
    const totalSteps = Object.values(stack)?.reduce((acc, value) => {
        if (value[value.length - 1] === TWO_STEP) {
            return acc + 1;
        }
        const getTwo = value.filter((num) => num === TWO_STEP)?.length;
        let calc = factorial(value.length) / (factorial(getTwo) * factorial(value.length - getTwo));
        if (!value.length) {
            calc = 0;
        }
        return acc + calc;
    }, DEFAULT_STEP);
    return totalSteps;
};
exports.climbStairs = climbStairs;
(0, exports.climbStairs)(3);
