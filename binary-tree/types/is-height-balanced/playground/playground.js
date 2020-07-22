'use strict';

const {
    arrayToBinaryTree
} = require('../../../construct');

const {
    isHeightBalanced
} = require('../index');

const T_1 = arrayToBinaryTree([3,9,20,null,null,15,7]);
console.log(isHeightBalanced(T_1));

const T_2 = arrayToBinaryTree([1,2,2,3,3,null,null,4,4]);
console.log(isHeightBalanced(T_2));
