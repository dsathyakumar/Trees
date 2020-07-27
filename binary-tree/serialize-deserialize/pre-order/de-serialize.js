'use strict';

const {
    BinaryTreeNode
} = require('../../treeNode');

/**
 * De-Serializes data (represented as a String) back to the Linked
 * Binary Tree Representation.
 * @param {Array} data
 * @returns {BinaryTreeNode} root
 */
exports.deserialize = function (data) {
    if ((data.length === 1) && (data[0] === '/')) {
        return null;
    }

    data = data.split(',');

    const stack = [];

    let current = data.shift();
    let root;
    let parent = null;
    let isLeft = true;

    while (current) {
        if (current !== '/') {
            current = new BinaryTreeNode(current);

            if (parent) {
                if (isLeft) {
                    parent.left = current;
                    stack.unshift(parent);
                } else {
                    parent.right = current;
                    isLeft = true;
                }
            } else {
                root = current;
            }

            parent = current;
        } else {
            if (isLeft) {
                isLeft = false
            } else {
                parent = stack.shift();
            }
        }

        current = data.shift();
    }

    return root;
};
