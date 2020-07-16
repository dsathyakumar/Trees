const {
    arrayToBinaryTree
} = require('../../../construct/arrayToBinaryTree');

const {
    levelOrderIntoSeparateArrays,
    levelOrderRecursive,
    levelOrderIterative,
    separateArraysRecursive
} = require('../index');

// ----------- Binary Tree construction from Array
/** The Given Binary Tree is:
 *  ----------------------------
 *            A
 *      _____/ \________
 *     /                \
 *     B                C
 *    /              ___/ \___
 *    G             /         \
 *                D          E
 *                       ___/
 *                      /
 *                      F
 */
const T_1 = arrayToBinaryTree([
    'A',
    'B', 'C',
    'G', null, 'D', 'E',
    null, null, null, null, null, null, 'F', null
]);
console.log(JSON.stringify(T_1, null, 3));

// ----------- level-order traversal
// should print [A, B, C, G, D, E, F]
console.log(levelOrderIterative(T_1));
console.log(levelOrderRecursive(T_1));

// ----------- level-order traversal (separate arrays)
/**
 * Should print:
 * -----------------------------
 * [
 *      [A]
 *      [B, C],
 *      [G, D, E],
 *      [F]
 * ]
 */
console.log(levelOrderIntoSeparateArrays(T_1));
console.log(separateArraysRecursive(T_1));