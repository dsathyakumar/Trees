'use strict';

const {
    lcArrayToBinaryTree,
    lcBinaryTreeToArray
} = require('../');

const T_1 = lcArrayToBinaryTree([
    'A',
    'B', 'C',
    null, 'D', 'E', 'F',
    null, null, null, null, 'G', null, 'H', 'I'
]);

const T_2 = lcArrayToBinaryTree([
    3,
    2, 4,
    1, null, null, null
]);

console.log(lcBinaryTreeToArray(T_1));
console.log(lcBinaryTreeToArray(T_2));

const DS_T1 = lcArrayToBinaryTree(lcBinaryTreeToArray(T_1));

const DS_T2 = lcArrayToBinaryTree([
    1,
    6,2,
    7,5,null,null,
    8,null,6,4,
    7,9,null,null,3,5,
    null,null,10,8,4,2,null,null,
    9,11,null,null,1
]);

console.log(lcBinaryTreeToArray(DS_T2));
