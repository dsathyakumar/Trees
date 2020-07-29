'use strict';

const {
    arrayToBinaryTree,
    lcArrayToBinaryTree
} = require('../../construct');

const {
    deleteNode,
    destroyTree
} = require('../');

const T_1 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, 6, 7
]);
console.log(destroyTree(T_1));

const T_2 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, 6, null,
    null, null, null, null, 7, 8, null, null
]);
console.log(destroyTree(T_2));

const T_3 = arrayToBinaryTree([
    1,
    2, 3
]);
console.log(destroyTree(T_3));

const T_4 = arrayToBinaryTree([
    1,
    null, 3,
    null, null, 4, 5
]);
console.log(destroyTree(T_4));

const T_5 = lcArrayToBinaryTree([
    1,
    4, null,
    null, 5,
    6, 7
]);
console.log(destroyTree(T_5));

const T_6 = lcArrayToBinaryTree([
    1,
    2, 3,
    4, 5, 6, null,
    null, null, null, null, 7, 8
]);
const T_6_del = deleteNode(T_6, 2);