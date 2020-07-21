'use strict';

const {
    arrayToBinaryTree
} = require('../../../construct/arrayToBinaryTree');

const {
    isFullBinaryTree
} = require('../index');

const T1 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, null, null
]);
console.log(isFullBinaryTree(T1));

const T2 = arrayToBinaryTree([
    1,
    2, 3,
    4, null, null, null
]);
console.log(isFullBinaryTree(T2));