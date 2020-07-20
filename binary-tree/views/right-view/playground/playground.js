'use strict';

const {
    arrayToBinaryTree
} = require('../../../construct/arrayToBinaryTree');

const {
    rightView
} = require('../right-view');

const T_1 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, 6, 7,
    null, null, null, null, null, null, null, 8
]);

// should print [1, 3, 7, 8]
console.log(rightView(T_1));

const T_2 = arrayToBinaryTree([
    10,
    2, 3,
    7, 8, 12, 15,
    null, null, null, null, null, null, 14, null
]);

// should print [10, 3, 15, 14]
console.log(rightView(T_2));
