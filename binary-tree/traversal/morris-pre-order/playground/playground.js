const {
    arrayToBinaryTree
} = require('../../../construct');

const {
    morrisPreOrder
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

// ----------- pre-order traversal
// should print [A, B, G, C, D, E, F]
console.log(morrisPreOrder(T_1));


const T_2 = arrayToBinaryTree([
    'A',
    null, null    
]);
console.log(JSON.stringify(T_2, null, 3));
console.log(morrisPreOrder(T_2));