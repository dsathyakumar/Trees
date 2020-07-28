'use strict';

const {
    arrayToBinaryTree,
    lcArrayToBinaryTree
} = require('../..');

const {
    childToSiblingTree,
    siblingToChildTree
} = require('..');

const T_1 = arrayToBinaryTree([
    1,
    2, 3,
    4, 5, 6, null,
    null, null, null, null, 7, 8, null, null
]);

const siblingTree_T1 = childToSiblingTree(T_1);
console.log(JSON.stringify(siblingTree_T1, null, 3));

const childTree_T1 = siblingToChildTree(siblingTree_T1);


const T_2 = arrayToBinaryTree([
    1,
    2, 3
]);

const siblingTree_T2 = childToSiblingTree(T_2);
console.log(JSON.stringify(siblingTree_T2, null, 3));

const childTree_T2 = siblingToChildTree(siblingTree_T2);

const T_3 = arrayToBinaryTree([
    1,
    null, 3,
    null, null, 4, 5
]);

const siblingTree_T3 = childToSiblingTree(T_3);
console.log(JSON.stringify(siblingTree_T3, null, 3));

const childTree_T3 = siblingToChildTree(siblingTree_T3);

const T_4 = lcArrayToBinaryTree([
    1,
    4, null,
    null, 5,
    6, 7
]);

const siblingTree_T4 = childToSiblingTree(T_4);
console.log(JSON.stringify(siblingTree_T4, null, 3));

const childTree_T4 = siblingToChildTree(siblingTree_T4);
console.log(JSON.stringify(childTree_T4, null, 3));