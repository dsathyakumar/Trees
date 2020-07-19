const {
    arrayToBinaryTree
} = require('../../../construct/arrayToBinaryTree');

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
console.log(morrisPostOrder(T_1));
