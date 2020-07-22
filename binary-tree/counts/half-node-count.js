'use strict';

/**
 * Returns the count of a number of 1/2 nodes in a Binary tree, via a level order traversal.
 * To implement a Q'less level order traversal, for a non-threaded binary tree, morris
 * level order traversal can be used.
 * 1/2 nodes are those parent nodes that have only either a LEFT or RIGHT child / subtree.
 * @param {BinaryTreeNode} root
 * @returns {Number} halfNodeCount
 */
exports.getHalfNodeCount = root => {
    let halfNodeCount = 0;

    if (!root) {
        return halfNodeCount;
    }

    const q = [root];

    let deqNode;

    while (q.length) {
        // deQ from front
        deqNode = q.shift();

        // if one of LEFT or RIGHT => Half Node
        if ((deqNode.left && !deqNode.right) || (!deqNode.left && deqNode.right)) {
            halfNodeCount++;
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

    return halfNodeCount;
};
