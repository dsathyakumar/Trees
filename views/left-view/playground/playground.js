'use strict';

const {
    arrayToBinaryTree
} = require('../../../construct/arrayToBinaryTree');

const {
    leftView
} = require('../left-view');

const T_1 = arrayToBinaryTree([
    4,
    5, 2,
    null, null, 3, 1,
    null, null, null, null, 6, 7, null, null
]);

// shouldPrint [4, 5, 3, 6]
console.log(leftView(T_1));

const T_2 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, null, 6
]);

// should print [1, 2, 4]
console.log(leftView(T_2));

const T_3 = arrayToBinaryTree([
    1,
    2, 3,
    null, 4, null, null,
    null, null, null, 5, null, null, null, null,
    null, null, null, null, null, null, null, 6, null, null, null, null, null, null, null, null
]);

// should print [1, 2, 4, 5, 6]
console.log(leftView(T_3));