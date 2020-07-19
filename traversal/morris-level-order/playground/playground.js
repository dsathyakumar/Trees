const {
    arrayToBinaryTree
} = require('../../../construct/arrayToBinaryTree');

const {
    morrisLevelOrder
} = require('../index');

const T_1 = arrayToBinaryTree([
    'A',
    'B', null,
    'C', 'D', null, null,
    null, 'F', null, 'E', null, null, null, null
]);
console.log(JSON.stringify(T_1, null, 3));

// ----------- morris level order traversal
console.log(morrisLevelOrder(T_1));

const T_2 = arrayToBinaryTree([
    'A',
    'B', 'C',
    'G', null, 'D', 'E',
    null, null, null, null, null, null, 'F', null
]);
console.log(JSON.stringify(T_2, null, 3));

// ----------- morris level order traversal
console.log(morrisLevelOrder(T_2));


