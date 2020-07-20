'use strict';

/**
 * Returns the count of a number of Full nodes in a Binary tree, via a level order traversal.
 * To implement a Q'less level order traversal, for a non-threaded binary tree, morris
 * level order traversal can be used.
 * Full nodes are those parent nodes that have both LEFT & RIGHT child / subtree.
 * @param {TreeNode} root
 * @returns {Number} fullNodeCount
 */
exports.getFullNodeCount = root => {
    let fullNodeCount = 0;

    if (!root) {
        return fullNodeCount;
    }

    const q = [root];

    let deqNode;

    while (q.length) {
        // deQ from front
        deqNode = q.shift();

        // if both LEFT && RIGHT => Full Node
        if (deqNode.left && deqNode.right) {
            fullNodeCount++;
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

    return fullNodeCount;
};
