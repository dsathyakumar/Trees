'use strict';

/**
 * Returns the count of a number of nodes in a Binary tree, via a level order traversal.
 * To implement a Q'less level order traversal, for a non-threaded binary tree, morris
 * level order traversal can be used.
 * @param {TreeNode} root
 * @returns {Number} nodeCount
 */
exports.getNodesCount = root => {
    let nodeCount = 0;

    if (!root) {
        return nodeCount;
    }

    const q = [root];

    let deqNode;

    while (q.length) {
        // deQ from front
        deqNode = q.shift();

        nodeCount++;

        // if LEFT, enQ in the rear
        if (deqNode.left) {
            q.push(deqNode.left);
        }

        // if RIGHT, enQ in the rear
        if (deqNode.right) {
            q.push(deqNode.right);
        }
    }

    return nodeCount;
};
