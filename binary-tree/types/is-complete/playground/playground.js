'use strict';

const {
    arrayToBinaryTree
} = require('../../../construct/arrayToBinaryTree');

const {
    isCompleteBinaryTree
} = require('../index');

const T1 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, null, null
]);
// should print TRUE
console.log(isCompleteBinaryTree(T1));

const T2 = arrayToBinaryTree([
    1,
    2, 3,
    null, 4, null, null
]);
// should print FALSE
console.log(isCompleteBinaryTree(T2));

const T3 = arrayToBinaryTree([
    1,
    2, null,
    3, 4, null, null
]);
// should print FALSE
console.log(isCompleteBinaryTree(T3));

const T4 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, 6, null
]);
// should print TRUE
console.log(isCompleteBinaryTree(T4));

const T5 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, null, 6
]);
// should print FALSE
console.log(isCompleteBinaryTree(T5));

const T6 = arrayToBinaryTree([
    1,
    null, 3
]);
// should print FALSE
console.log(isCompleteBinaryTree(T6));

const T7 = arrayToBinaryTree([
    1,
    2, 3,
    null, 4, 5, 6
]);
// should print FALSE
console.log(isCompleteBinaryTree(T7));

const T8 = arrayToBinaryTree([
    1,
    2, 3,
    null, null, 4, 5
]);
// should print FALSE
console.log(isCompleteBinaryTree(T8));

const T9 = arrayToBinaryTree([
    1,
    2, 3
]);
// should print TRUE
console.log(isCompleteBinaryTree(T9));

const T10 = arrayToBinaryTree([
    1,
    2, 3,
    4, null, null, null
]);
// should print TRUE
console.log(isCompleteBinaryTree(T10));
