'use strict';

const {
    getNodesCount
} = require('./nodes-count');

/**
 * This returns the number of edges in the Binary Tree.
 * The number of edges can be found as Number of Nodes - 1.
 * For only a root node, its 0.
 * For an empty tree, return -1.
 * @param {TreeNode} root
 * @returns {Number}
 */
exports.getEdgesCount = root => {
    if (!root) {
        return -1;
    }

    return getNodesCount(root) - 1;
};
