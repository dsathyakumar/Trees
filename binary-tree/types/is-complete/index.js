'use strict';

/**
 * Determines if a Binary Tree is a complete Binary Tree.
 * A Binary Tree is a complete Binary Tree if all levels, safe perhaps the last
 * level is completely filled. And, the last level is also filled such that
 * all nodes are filled as left as possible.
 * 
 * Cases to Take care of:
 * --------------------------
 * - Any given Node must not have a Right Child, while the LEFT is absent. This breaks
 *   the condition that the level is fulled as left as possible.
 * - At any given level, once the last Node of a level is reached, and if there are
 *   subsequent levels, then the current level must be fully filled.
 * 
 * Consequently, checking if current level is fully filled is not as simple as checking
 * if a current Node is NOT a full node. If its not a full node, then all nodes that follow
 * it have to be leaf nodes. Else, if they aren't leaves => next level wont be fully filled.
 * 
 * For this, we consider this as:
 * ------------------------------------------------
 * - Any given Node must not have a Right Child, while the LEFT is absent.
 * - A full Binary Tree node is a node which has 2 child Nodes.
 *   So, if a Node in a level is not a full Node, then all its subsequent Nodes
 *   (stored in the Q), must also be leaf nodes. Cos, if the nodes in the next level
 *   also have child nodes, then the next level is not completely filled.
 * 
 * @param {BinaryTreeNode} root
 * @returns {Boolean} isComplete
 */
exports.isCompleteBinaryTree = root => {
    if (!root) {
        return;
    }

    let isComplete = true;

    const q = [root];

    let deqNode = null;
    let isFullNode = true;
    let childCount = 0;

    while (q.length) {
        deqNode = q.shift();

        // if a RIGHT is present in the absence of a LEFT
        if (!deqNode.left && deqNode.right) {
            isComplete = false;
            break;
        }

        // If so far, there have been only full nodes,
        // check if current node is not a full node.
        // if current Node is not a full node, reset the flag 
        if (isFullNode) {
            if (deqNode.left) {
                q.push(deqNode.left);
                ++childCount;
            }

            if (deqNode.right) {
                q.push(deqNode.right);
                ++childCount;
            }

            if (childCount !== 2) {
                isFullNode = false;
            }
        } else { // if a FULL node did not exist before, current node should be a leaf.
            if (deqNode.left || deqNode.right) {
                isComplete = false;
                break;
            }
        }

        // reset count.
        childCount = 0;
    }

    return isComplete;
};
