/**
 * Даны корни двух двоичных деревьев pи q, напишите функцию, которая проверит, являются ли они одинаковыми или нет.

Два бинарных дерева считаются одинаковыми, если они структурно идентичны, а узлы имеют одинаковое значение.

 

Пример 1:


Вход: p = [1,2,3], q = [1,2,3]
 Выход: true
Пример 2:


Вход: p = [1,2], q = [1,null,2]
 Выход: false
Пример 3:


Вход: p = [1,2,1], q = [1,1,2]
 Выход: false
 

Ограничения:

Число узлов в обоих деревьях находится в диапазоне [0, 100].
-104 <= Node.val <= 104
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
class TreeNode {
  val?;
  left?;
  right?;
  constructor(
    val: number | undefined | null,
    left: TreeNode | undefined | null,
    right: TreeNode | undefined | null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
export const isSameTree = function (p: TreeNode, q: TreeNode) {
  if (Object.keys(p || {}).length !== Object.keys(q || {}).length) {
    return false;
  }
  if (p === null && q === null) {
    return true;
  }
  const stackP: (TreeNode | undefined | null)[] = [p];
  const stackQ: (TreeNode | undefined | null)[] = [q];

  while (stackP.length > 0 && stackQ.length > 0) {
    const p = stackP.shift();
    const q = stackQ.shift();
    if (q?.val === p?.val) {
      if (p?.left !== undefined) {
        stackP.push(p?.left);
      }
      if (p?.right !== undefined) {
        stackP.push(p?.right);
      }
      if (q?.left !== undefined) {
        stackQ.push(q?.left);
      }
      if (q?.right !== undefined) {
        stackQ.push(q?.right);
      }
    } else {
      return false;
    }
  }
  return true;
};
const pNodes = {
  val: 0,
  left: {
    val: -5,
    left: null,
    right: null,
  },
  right: null,
};
const qNodes = {
  val: 0,
  left: {
    val: -8,
    left: null,
    right: null,
  },
  right: null,
};
const test = isSameTree(pNodes, qNodes);
console.log("=====>test", test);
