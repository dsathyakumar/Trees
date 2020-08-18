const {
    arrayToBinaryTree
} = require('../../../construct');

const {
    morrisPostOrder
} = require('../index');

const T_1 = arrayToBinaryTree([
    'A',
    'B', 'X',
    'C', 'D', null, null,
    null, 'F', null, 'E', null, null, null, null
]);
console.log(JSON.stringify(T_1, null, 3));

// ----------- morris post order traversal
// [F, C, E, D, B, X, A]
console.log(morrisPostOrder(T_1));

const T_2 = arrayToBinaryTree([
    'A',
    'B', 'C',
    'G', null, 'D', 'E',
    null, null, null, null, null, null, 'F', null
]);
console.log(JSON.stringify(T_2, null, 3));

// ----------- post-order traversal
// should print [G, B, D, F, E, C, A]
console.log(morrisPostOrder(T_2));

const T_3 = arrayToBinaryTree([
    'A',
    null, null    
]);
console.log(JSON.stringify(T_3, null, 3));
console.log(morrisPostOrder(T_3));
