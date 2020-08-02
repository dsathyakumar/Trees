'use strict';

const {
    ancestorMatrixToBinaryTree
} = require('./ancestorMatrixToBinaryTree');

const {
    binaryTreeToAncestorMatrix
} = require('./binaryTreeToAncestorMatrix');

const {
    ancestorMatrixViaTransitiveClosure
} = require('./ancestor-matrix-transitive-closure');

exports.ancestorMatrixToBinaryTree = ancestorMatrixToBinaryTree;
exports.binaryTreeToAncestorMatrix = binaryTreeToAncestorMatrix;

// Time complexity: O (N ^ 3) but space complexity is O (1)
exports.ancestorMatrixViaTransitiveClosure = ancestorMatrixViaTransitiveClosure;
