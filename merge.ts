/**
 * Вам даны два целочисленных массива nums1и nums2, отсортированных в неубывающем порядке , и два целых числа mи n, представляющие количество элементов в nums1и nums2соответственно.

Объединить nums1 в nums2один массив, отсортированный в неубывающем порядке .

Окончательный отсортированный массив не должен возвращаться функцией, а должен храниться внутри массиваnums1 . Чтобы учесть это, nums1имеет длину m + n, где первые mэлементы обозначают элементы, которые должны быть объединены, а последние nэлементы установлены в 0и должны игнорироваться. nums2имеет длину n.

 

Пример 1:

Вход: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 Выход: [1,2,2,3,5,6]
 Пояснение: Массивы, которые мы объединяем, — это [1,2,3] и [2,5,6].
Результатом слияния является [ 1 , 2 , 2, 3 , 5, 6] с подчеркнутыми элементами, взятыми из nums1.
Пример 2:

Ввод: nums1 = [1], m = 1, nums2 = [], n = 0
 Вывод: [1]
 Пояснение: Массивы, которые мы объединяем, — это [1] и [].
Результатом слияния является [1].
Пример 3:

Ввод: nums1 = [0], m = 0, nums2 = [1], n = 1
 Вывод: [1]
 Пояснение: Массивы, которые мы объединяем, — это [] и [1].
Результатом слияния является [1].
Обратите внимание, что поскольку m = 0, в nums1 нет элементов. 0 присутствует только для того, чтобы результат слияния мог поместиться в nums1.
 

Ограничения:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export const merge = function (nums1: number[], m: number, nums2: number[], n: number) {
    nums1.length = m
    nums2.length = n
    nums1.push(...nums2)
    nums1.sort((a, b) => a - b)

    return nums1
};

const res = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
console.log('=====>res', res);