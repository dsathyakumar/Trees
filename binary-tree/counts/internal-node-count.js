'use strict';

/**
 * Gets the count of number of internal (non-terminal) nodes
 * in a Binary Tree via a level order traversal via a Q.
 * To implement a Q'less traversal for a non-threaded binary tree,
 * morris level order traversal can be used.
 * @param {BinaryTreeNode} root
 * @returns {Number} internalNodeCount
 */
exports.getInternalNodeCount = root => {
    let internalNodeCount = 0;

    if (!root) {
        return internalNodeCount;
    }

    const q = [root];

    let deqNode;

    while (q.length) {
        // deQ from front
        deqNode = q.shift();

        // if one of LEFT or RIGHT => not a leaf
        // => non-terminal node or internal node.
        if (deqNode.left || deqNode.right) {
            internalNodeCount++;
        }

        // if LEFT, enQ in the rear
        if (deqNode.left) {
            q.push(deqNode.left);
        }

        // if RIGHT, enQ in the rear
        if (deqNode.right) {
            q.push(deqNode.right);
        }
    }

    return internalNodeCount;
};
