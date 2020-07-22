const {
    arrayToBinaryTree
} = require('../../../construct');

const {
    postOrderIterative,
    postOrderRecursive
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

// ----------- post-order traversal
// should print [G, B, D, F, E, C, A]
console.log(postOrderRecursive(T_1));
console.log(postOrderIterative(T_1));
