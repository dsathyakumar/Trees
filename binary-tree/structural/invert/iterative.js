'use strict';

/**
 * Iteratively inverts a Binary Tree per Level order Traversal
 * @param {BinaryTreeNode} root
 * @returns {BinaryTreeNode} root
 */
exports.invertBinaryTreeIteratively = root => {
    if (!root) {
        return;
    }

    // a Q to process child Nodes per Level Order Traversal
    const q = [root];

    let deqNode;
    let temp;

    while (q.length) {
        // deq from front of the Q
        deqNode = q.shift();

        // 1st swap currently dequed Node's LEFT and RIGHT subtrees
        temp = deqNode.left;
        deqNode.left = deqNode.right;
        deqNode.right = temp;

        // Then enQ LEFT if it exists, so that when its dequed
        // its subtrees can be inverted
        if (deqNode.left) {
            q.push(deqNode.left);
        }

        // Then enQ RIGHT if it exists, so that when its dequed
        // its subtrees can be inverted
        if (deqNode.right) {
            q.push(deqNode.right);
        }
    }

    return root;
};
