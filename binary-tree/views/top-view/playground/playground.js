'use strict';

const {
    arrayToBinaryTree
} = require('../../../construct');

const {
    topView
} = require('../top-view');

const T_1 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, 6, 7
]);

// should print [4, 2, 1, 3, 7]
console.log(topView(T_1));


const T_3 = arrayToBinaryTree([
    1,
    2, 3,
    null, 4, null, null,
    null, null, null, 5, null, null, null, null,
    null, null, null, null, null, null, null, 6, null, null, null, null, null, null, null, null
]);

// should print [2, 1, 3, 6]
console.log(topView(T_3));