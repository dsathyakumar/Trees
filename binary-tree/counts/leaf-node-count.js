'use strict';

/**
 * Gets the count of number of leaf nodes in a binary tree.
 * Also known as count of terminal nodes, via a level order traversal using a Q.
 * To implement a Q'less traversal for a non-threaded binary tree,
 * morris level order traversal can be used.
 * @param {BinaryTreeNode} root
 * @returns {Number} leafNodeCount
 */
exports.getLeafNodeCount = root => {
    let leafNodeCount = 0;

    if (!root) {
        return leafNodeCount;
    }

    const q = [root];

    let deqNode;

    while (q.length) {
        // deQ from front
        deqNode = q.shift();

        // if no LEFT and RIGHT => a leaf
        // => terminal node or external node.
        if (!deqNode.left && !deqNode.right) {
            leafNodeCount++;
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

    return leafNodeCount;
};
