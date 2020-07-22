'use strict';

const {
    arrayToBinaryTree
} = require('../../../construct');

const {
    isPerfectBinaryTree
} = require('../index');

const T_1 = arrayToBinaryTree([
    'A',
    'B', 'C',
    'D', 'E', 'F', null
]);

console.log(isPerfectBinaryTree(T_1));

const T_2 = arrayToBinaryTree([
    'A',
    'B', 'C',
    'D', 'E', 'F', 'G',
    null, null, null, null, 1, 2, null, null
]);

console.log(isPerfectBinaryTree(T_2));

const T_3 = arrayToBinaryTree([
    'A',
    'B', 'C',
    'D', 'E', 'F', 'G',
    1, 2, 3, 4, null, null, null, null
]);

console.log(isPerfectBinaryTree(T_3));

const T_4 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, 6, 7
]);

console.log(isPerfectBinaryTree(T_4));