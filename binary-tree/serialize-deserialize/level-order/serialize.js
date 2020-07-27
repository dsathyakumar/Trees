'use strict';

const { BinaryTreeNode } = require("../../treeNode");

/**
 * Returns a serialized form of the Binary Tree.
 * @param {BinaryTreeNode} root
 * @returns {Array} result
 */
exports.serialize = root => {
    const result = [];

    if (!root) {
        return result;
    }

    const q = [root];

    let deqNode = null;
    let left = null;
    let right = null;

    let hasNextLevel = false;
    let levelPointer = root;
    let shouldUpdateLevel = false;

    // proceed as long as Q is not empty
    while (q.length) {
        // deQ from the front of the Q
        deqNode = q.shift();

        // store the value of current Node
        result.push(deqNode.val ? deqNode.val : '/');

        // if its the 1st node of the level, its time to update the levelpointer
        // for teh next level. This can also be NULL.
        if (levelPointer === deqNode) {
            shouldUpdateLevel = true;
            hasNextLevel = false;
        }

        // if a LEFT exists, enQ LEFT in rear of the Q, else enQ NULL
        left = (deqNode.val && deqNode.left) ? deqNode.left : new BinaryTreeNode();
        q.push(left);

        // NULL or NOT NULL, left of current Level pointer will be the 1st Node
        // of the next Level. So no need to check for RIGHT child.
        if (shouldUpdateLevel) {
            levelPointer = left;
            shouldUpdateLevel = false;
        }

        // Note that a NULL, would continue to enQ more NULL nodes endlessly
        // For this, we got to check if the current level has any childNodes
        if (!hasNextLevel && left.val) {
            hasNextLevel = true;
        }

        // if a RIGHT exists, enQ RIGHT in rear of the Q, else enQ NULL
        right = (deqNode.val && deqNode.right) ? deqNode.right : new BinaryTreeNode();
        q.push(right);

        // Note that a NULL, would continue to enQ more NULL nodes endlessly
        // For this, we got to check if the current level has any childNodes
        if (!hasNextLevel && right.val) {
            hasNextLevel = true;
        }

        // if tis is true, break
        if (q[0] === levelPointer && !hasNextLevel) {
            break;
        }
    }

    return result.toString();
};
