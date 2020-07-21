'use strict';

/**
 * A Binary Tree is said to be a full binary tree if each of its node's has
 * 0 or 2 child nodes and there are no nodes with just 1 child. However, unlink
 * a perfect binary tree, it does not pose the condition that all leaf nodes
 * have to be at the same level.
 * @param {TreeNode} root
 * @returns {Boolean} isFull
 */
exports.isFullBinaryTree = root => {
    if (!root) {
        return;
    }

    let isFull = true;

    let deqNode = null;

    const q = [root];

    while (q.length) {
        deqNode = q.shift();

        if ((deqNode.left && !deqNode.right)
            || (!deqNode.left && deqNode.right)) {
            isFull = false;
            break;
        }

        if (deqNode.left) {
            q.push(deqNode.left);
        }

        if (deqNode.right) {
            q.push(deqNode.right);
        }
    }

    return isFull;
};
