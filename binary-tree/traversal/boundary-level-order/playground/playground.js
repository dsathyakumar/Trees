const {
    arrayToBinaryTree
} = require('../../../construct/arrayToBinaryTree');

const {
    boundaryLevelOrder
} = require('../index');

// ----------- Binary Tree construction from Array
/** The Given Binary Tree is:
 *  ----------------------------
 *                      1
 *                  ___/ \____
 *                 /          \
 *                12           13
 *            __ /  \__      __/ \___
 *          /          \    /        \
 *         11          6    4        11
 *         /       ___/ \__       ___/ \___
 *        /       /         \    /          \
 *      23      7           9   2           4
 * 
 * Result of boundary level order traversal:
 * [[1], [12, 13], [11, 11, 6, 4], [23, 4, 7, 2, 9]]
 * 
 */
const T_1 = arrayToBinaryTree([
    1,
    12, 13,
    11, 6, 4, 11,
    23, null, 7, 9, null, null, 2, 4
]);
console.log(JSON.stringify(T_1, null, 3));
console.log(boundaryLevelOrder(T_1));
