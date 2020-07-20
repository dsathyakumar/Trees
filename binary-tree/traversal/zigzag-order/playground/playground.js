const {
    arrayToBinaryTree
} = require('../../../construct/arrayToBinaryTree');

const {
    zigzag,
    zigzagInverse,
    zigzagReverse
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

console.log(zigzag(T_1));
console.log(zigzagReverse(T_1));
console.log(zigzagInverse(T_1));
