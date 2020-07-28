'use strict';

const {
    arrayToBinaryTree
} = require('../../../construct/array-binaryTree');

const {
    childToSiblingTree,
    siblingTreeToChild
} = require('../');

const T_1 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, 6, null,
    null, null, null, null, 7, 8, null, null
]);

const siblingTree_T1 = childToSiblingTree(T_1);
console.log(JSON.stringify(siblingTree_T1, null, 3));
