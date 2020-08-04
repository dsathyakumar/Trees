'use strict';

const {
    lcArrayToBinaryTree
} = require('../../../construct');

const {
    binaryTreeToAncestorMatrix,
    ancestorMatrixViaTransitiveClosure,
    ancestorMatrixToBinaryTree
} = require('../');

const T1 = lcArrayToBinaryTree([
    5,
    1, 2,
    0, 4, 3, null
]);

const T1_ansMatrix = binaryTreeToAncestorMatrix(T1);
console.log(T1_ansMatrix);

const T1_trans_closure = ancestorMatrixViaTransitiveClosure(T1);
console.log(T1_trans_closure);

const T2 = ancestorMatrixToBinaryTree(
    [
        [ 0, 0, 0, 0, 0, 0 ],
        [ 1, 0, 0, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 1, 0 ]
    ]
);
console.log(T2);