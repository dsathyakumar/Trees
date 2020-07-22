'use strict';

const {
    arrayToBinaryTree
} = require('../../../construct');

const {
    bottomView
} = require('../bottom-view');

const T_1 = arrayToBinaryTree([
    20,
    8, 22,
    5, 3, null, 25,
    null, null, 10, 14, null, null
]);

// output : 5, 10, 3, 14, 25
console.log(bottomView(T_1));

const T_2 = arrayToBinaryTree([
    20,
    8, 22,
    5, 3, 4, 25,
    null, null, 10, 14, null, null, null, null
]);

// output 5, 10, 4, 14, 25
console.log(bottomView(T_2));

const T_3 = arrayToBinaryTree([
    20,
    8, 22,
    5, 10, 21, 25,
    null, null, 9, 14, null, null, null, null
]);

// output: 5 9 21 14 25
console.log(bottomView(T_3));
