'use strict';

const {
    lcArrayToBinaryTree
} = require('../../../construct');

const {
    binaryTreeToAncestorMatrix
} = require('../');

const T1 = lcArrayToBinaryTree([
    5,
    1, 2,
    0, 4, 3, null
]);

const T1_ansMatrix = binaryTreeToAncestorMatrix(T1);
console.log(T1_ansMatrix);