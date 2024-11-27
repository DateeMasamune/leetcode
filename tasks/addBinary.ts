/**
 * Даны две двоичные строки aи b, вернуть их сумму в виде двоичной строки .

 

Пример 1:

Вход: a = "11", b = "1"
 Выход: "100"
Пример 2:

Вход: a = "1010", b = "1011"
 Выход: "10101"
 

Ограничения:

1 <= a.length, b.length <= 104
aи bсостоят только из '0'или '1'символов.
Каждая строка не содержит начальных нулей, за исключением самого нуля.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const addBinary = function (a: string, b: string) {
    let first = null
    let second = null
    let result = []
    let buffer = 0
    const rulse: Record<number, number> = {
        0: 0,
        1: 1,
        2: 0,
        3: 1,
    }

    if (a.length === b.length || a.length > b.length) {
        first = a
        second = b
    } else {
        first = b
        second = a
    }


    while (first.length || second.length) {

        const a = first.length ? +first.slice(-1) : null
        const b = second.length ? +second.slice(-1) : null

        if (b === null && a !== null) {
            if (buffer) {
                const isOverflow = a + buffer > 1
                const sum = a + buffer
                result.push(rulse[sum])
                if (isOverflow) {
                    buffer = 1
                } else {
                    buffer = 0
                }
            } else {
                result.push(a)
            }
        } else if (a !== null && b !== null) {
            const sum = buffer ? buffer + a + b : a + b

            if (sum > 1) {
                result.push(rulse[sum])
                buffer = 1
            } else {
                result.push(rulse[sum])
                buffer = 0
            }
        }

        if (buffer && first.length === 1) {
            result.push(buffer)
        }

        first = first.substring(0, first.length - 1)
        second = second.substring(0, second.length - 1)
    }
    return result.reverse().join('')
};

export const addB = (a: string, b: string) => {
    const f = parseInt(a, 2)
    const s = parseInt(b, 2)

    const sum = f + s

    return sum.toString(2)
}
const res = addBinary('100', '110010')
const res1 = addB('100', '110010')