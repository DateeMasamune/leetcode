"use strict";
/**
 * Для заданного rootдвоичного дерева вернуть симметричный обход значений его узлов .

 

Пример 1:

Ввод: корень = [1,null,2,3]

Вывод: [1,3,2]

Объяснение:



Пример 2:

Ввод: корень = [1,2,3,4,5,null,8,null,null,6,7,9]

Вывод: [4,2,6,5,7,1,3,9,8]

Объяснение:



Пример 3:

Ввод: корень = []

Выход: []

Пример 4:

Ввод: корень = [1]

Вывод: [1]

 

Ограничения:

Число узлов в дереве находится в диапазоне [0, 100].
-100 <= Node.val <= 100
 

Продолжение: Рекурсивное решение тривиально, можно ли сделать это итеративно?
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.inorderTraversal = void 0;
class TreeNode {
    constructor(value = null, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}
const createTree = (nodes, shift) => {
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i]) {
            const leftNode = nodes[(i - shift) * 2 + 1];
            const rightNode = nodes[(i - shift) * 2 + 2];
            //@ts-ignore
            nodes[i].left = leftNode || null;
            //@ts-ignore
            nodes[i].right = rightNode || null;
        }
        else {
            shift++;
        }
    }
    const [readyTree] = nodes || [];
    return readyTree;
};
const inorderTraversal = function (root) {
    let shift = 0;
    const stack = [];
    const result = [];
    const arrNodes = [];
    for (let i = 0; i < root.length; i++) {
        arrNodes.push(root[i] === null ? null : new TreeNode(root[i]));
    }
    const tree = createTree(arrNodes, shift);
    let ref = tree;
    stack.push(tree);
    while (stack.length > 0) {
        if (ref?.left) {
            stack.push(ref?.left);
            ref = ref?.left;
        }
        else if (ref?.right) {
            result.push(ref.value);
            stack.pop();
            stack.push(ref?.right);
            ref = ref?.right;
        }
        else {
            const node = stack.pop();
            result.push(node.value);
            if (node?.right) {
                stack.push(node?.right);
                ref = node?.right;
            }
        }
    }
    return [...result];
};
exports.inorderTraversal = inorderTraversal;
(0, exports.inorderTraversal)([1, null, 2, 3]);
// inorderTraversal([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
// индекс * 2 + 1 - левое поддерево
// индекс * 2 + 2 - правое поддерево
/**
 * формула индекс * 2 + 1 - левое поддерево
 * формула индекс * 2 + 2 - правое поддерево
 *
 *                 1
 *               /   \
 *              2     3
 *             / \   / \
 *            4   5 6   7
 *
 * значения - 1 2 3 4 5 6 7
 * индексы -  0 1 2 3 4 5 6
 * пример:
 * - найти левое поддерево узла 1 - (0 * 2 + 1) = 1(индекс) или 2(значение)
 * - найти правое поддерево узла 1 - (0 * 2 + 2) = 2(индекс) или 3(значение)
 *
 * - найти левое поддерево узла 2 - (1 * 2 + 1) = 3(индекс) или 4(значение)
 * - найти правое поддерево узла 2 - (1 * 2 + 2) = 4(индекс) или 5(значение)
 *
 */
