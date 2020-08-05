'use strict';

const {
    BinaryTreeNode
} = require('../../treeNode');

/**
 * @description
 * Note that the ancestor Matrix are of 2 types
 * - immediate ancestor matrix
 *      This is similar to the ancestor matrix got with pre-order traversal.
 *      wherein if Node A is the lowest ancestor of Node B, then the only ancestor
 *      for Node B is Node A (even though the tree's root is an ancestor, its not the lowest)
 * - Full ancestor matrix.
 *      This is similar to the ancestor matrix got with pre-order traversal
 *      but it also includes the fact that the root is an ancestor of every node in the tree.
 * 
 * To convert immediate ancestor matrix to full ancestor matrix, the matrix transitive closure
 * property is applied.
 */

/**
 * Determines the root node from the ancestor Matrix.
 * This is based on the fact that in the ancestor matrix, any column that is full of zeroes
 * is the Node index of the root (as the root has no ancestor, including itself)
 * @param {2DArray} ancestorMatrix 
 * @returns {Number} rootIndex
 */
const rootFinder = (ancestorMatrix) => {
    let rootNodeVal = null;

    columnLooper:
    for (let colIdx = 0; colIdx < (ancestorMatrix.length); colIdx++) {
        let isRoot = true;

        rowLooper:
        for (let rowIdx = 0; rowIdx < (ancestorMatrix.length); rowIdx++) {
            const value = ancestorMatrix[rowIdx][colIdx];
            if (value !== 0) {
                isRoot = false
                break rowLooper;
            }
        }

        if (isRoot) {
            rootNodeVal = colIdx;
            break columnLooper;
        }
    }

    return rootNodeVal;
};

/**
 * Recursively builds the Binary Tree in a TOP DOWN Manner
 * There is no basecase for recursion here as its run within a for loop which has a terminating
 * condition.
 * @param {2DArray} ancestorMatrix
 * @param {Number} index
 * @returns {BinaryTreeNode} node
 */
const treeBuilder = (ancestorMatrix, index) => {
    // Form the rootNode from the Root Element.
    const node = new BinaryTreeNode(index);

    // maintain a child counter
    let childCount = 0;

    // for the given index that represents a node on a row, iterate over its columns
    // initially this started off with the rowindex belonging to the root
    // which was the ancestor for many nodes.
    for (let colIdx = 0; colIdx < (ancestorMatrix.length); colIdx++) {
        if (ancestorMatrix[index][colIdx] === 1) {
            if (childCount === 0) {
                node.left = treeBuilder(ancestorMatrix, colIdx);
            } else if (childCount === 1) {
                node.right = treeBuilder(ancestorMatrix, colIdx);
            }
            childCount++;
        }
    }

    return node;
}

/**
 * Generates a Binary Tree from the immediate ancestor matrix.
 * @param {Array} ancestorMatrix
 * @returns {BinaryTreeNode} root
 */
exports.ancestorMatrixToBinaryTreeTopDown = (ancestorMatrix) => {
    // if its not an array or is empty, return
    if (!ancestorMatrix || !Array.isArray(ancestorMatrix)) {
        return;
    }

    // Determine the root element from the ancestor Matrix
    const root = rootFinder(ancestorMatrix);

    return treeBuilder(ancestorMatrix, root);
};
