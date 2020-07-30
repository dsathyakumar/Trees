'use strict';

const {
    arrayToBinaryTree,
    lcArrayToBinaryTree
} = require('../../../construct');

const {
    invertBinaryTreeIteratively,
    invertBinaryTreeRecursivelyBottomUp,
    invertBinaryTreeRecursivelyTopDown
} = require('../');

const T_1 = arrayToBinaryTree([
    4,
    2, 7,
    1, 3, 6, 9
]);

const T_1_1 = invertBinaryTreeIteratively(JSON.parse(JSON.stringify(T_1)));
const T_1_2 = invertBinaryTreeRecursivelyBottomUp(JSON.parse(JSON.stringify(T_1)));
const T_1_3 = invertBinaryTreeRecursivelyTopDown(JSON.parse(JSON.stringify(T_1)));

console.log(JSON.stringify(T_1_1) === JSON.stringify(T_1_2));
console.log(JSON.stringify(T_1_1) === JSON.stringify(T_1_3));
console.log(JSON.stringify(T_1_2) === JSON.stringify(T_1_3));