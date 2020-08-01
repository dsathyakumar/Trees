'use strict';

const {
    BinaryTreeNode
} = require('../../treeNode');

/**
 * Returns the Linked Representation of a Binary Tree (Left Child + Right Child)
 * with an input array containing an efficient Level Order Traversal Information
 * data.
 * @param {Array} data
 * @returns {BinaryTreeNode} root
 */
exports.arrayToBinaryTree = (data) => {
    if (!data.length) {
        return null;
    }

    let root = new BinaryTreeNode(data.shift());

    let q = [root];

    let current;

    let deqNode = null;
    let left = null;
    let right = null;

    // Iteration can be based on the Q not being empty
    // or flattened serialized data not being empty.
    // Since the last level's child nodes are not included in the serialized data
    // the data gets completed faster.
    while (data.length) {
        deqNode = q.shift();

        if (deqNode) {
            left = data.shift();
            right = data.shift();

            if (left !== null && typeof left !== 'undefined') {
                deqNode.left = new BinaryTreeNode(left);
                q.push(deqNode.left);
            }

            if (right !== null && typeof right !== 'undefined') {
                deqNode.right = new BinaryTreeNode(right);
                q.push(deqNode.right);
            }
        }
    }

    q = null;

    return root;
};
