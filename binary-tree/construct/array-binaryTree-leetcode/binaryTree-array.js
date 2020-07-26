'use strict';

const {
    BinaryTreeNode
} = require('../../treeNode');

/**
 * This is the flattening done by The LeetCode binary Tree visualizer.
 * While a normal flattening via Level Order traversal, tends to maintain node
 * positions and filling in NULL nodes per the definition of complete
 * binary Tree, LC follows a flattening pattern where:
 * - A leaf node of Level N, would contribute 2 NULL nodes to Level (N+1)
 * - An empty LEFT or RIGHT of a Node in level N would contribute to a NULL node in Level (N+1)
 * - A NULL node in Level N would no longer contribute further NULL nodes to Level (N+1)
 * - So if a Level N+1 had NULL, its actually from NON-NULL parent Nodes in Level N
 * - Any Level N can have a max of 2 ^ N nodes (if all Nodes in previous level N- 1 were filled)
 * - If the Last level was reached and the last valid Child Node is reached, other NULL child nodes
 *   at same level are no longer filled.
 * 
 * @param {BinaryTreeNode} root
 * @returns {Array} result
 */
exports.binaryTreeToArray = root => {
    const result = [];

    if (!root) {
        return result;
    }

    const q = [root];

    let deqNode = null;
    let left = null;
    let right = null;

    let nextLevelPointer = root;
    let shouldUpdateNextLevel = false;
    let hasNextLevel = false;

    while (q.length) {
        // deQ from front
        deqNode = q.shift();

        // either the current Node is a NULL or it exists
        // if it exists, get its value
        // if its a NULL, store the NULL
        // (as it has to account for a previous level LEAF node)
        // But ensure the current NULL node, no longer enQ's further NULL Nodes
        result.push(deqNode.val ? deqNode.val : null);

        // if nextLevelPointer is the currently dequed Node,
        // time to update it.
        // reset hasNextLevel to FALSE, coz unless the current new level
        // enQ's more valid child Nodes (non-NULL), this has to be false.
        if (nextLevelPointer === deqNode) {
            shouldUpdateNextLevel = true;
            hasNextLevel = false;
        }

        // if the current Node is NOT NULL
            // enQ its LEFT
            // if the LEFT does not exist, enQ a NULL
        if (deqNode.val) {
            left = (deqNode.left) ? deqNode.left : new BinaryTreeNode(null);
            q.push(left);

            // Always the LEFT has to contribute some value
            if (shouldUpdateNextLevel) {
                nextLevelPointer = left;
                shouldUpdateNextLevel = false;
            }

            // Fill in for next level
            if (left.val && !hasNextLevel) {
                hasNextLevel = true;
            }
        }

        // if the current Node is NOT NULL
            // enQ its RIGHT
            // if the RIGHT does not exist, enQ a NULL
        if (deqNode.val) {
            right = (deqNode.right) ? deqNode.right : new BinaryTreeNode(null);
            q.push(right);

            // Fill in for next level
            if (right.val && !hasNextLevel) {
                hasNextLevel = true;
            }
        }
        
        // if the next dequable elements from the front of the Q
        // is same as a levl pointer, it means that the currently
        // dequed node is the last Node of the current Level and a level
        // transition is about to happen.
        // Also, given that the currently dequed node is the last Node
        // of this level, if the nextLevel does not exist, it means
        // the current level contributed to no childNodes and had only NULL's
        // implying all nodes of the current level were LEAF nodes.
        if (q[0] === nextLevelPointer && !hasNextLevel) {
            break;
        }
    }

    // note that we still have not satisfied the condition of:
    // - If the Last level was reached and the last valid Child Node is reached, other NULL child nodes
    // at same level are no longer filled.

    return result;
};
