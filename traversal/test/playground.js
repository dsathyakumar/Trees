const {
    arrayToBinaryTree
} = require('../../construct/arrayToBinaryTree');

const {
    preOrderRecursive,
    preOrderIterative
} = require('../index');

// ----------- pre-order traversal
const T_1 = arrayToBinaryTree([
    'A',
    'B', 'C',
    null, null, 'D', 'E',
    null, null, null, null, null, null, 'F', null
]);
console.log(JSON.stringify(T_1, null, 3));
console.log(preOrderRecursive(T_1));
console.log(preOrderIterative(T_1));