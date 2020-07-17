'use strict';

/**
 * Use Morris Traversal to perform Pre-order
 * This is a stackless & queueless traversal that is implemented on a
 * non-threaded Binary Tree.
 * The key to processing Node values in morris pre-order is:
 * - when left is going to be re-set
 * - when right is going to be re-set
 * @param {TreeNode} root
 * @returns {Array} result
 */
exports.morrisPreOrder = root => {
    const result = [];

    if (!root) {
        return result;
    }

    let currentNode = root;
    let inOrderPredecessor = null;

    while (currentNode) {
        // if LEFT, process it
        if (currentNode.left) {
            // start by setting inOrder predecessor as LEFT subTree root.
            // if this node, did not have a RIGHT, then this would end up
            // becoming the inOrderPredecessor
            inOrderPredecessor = currentNode.left;

            // as long as inOrderPredecessor exists, there are 3 cases
            while(inOrderPredecessor) {
                // 1) When it has a RIGHT
                if (inOrderPredecessor.right) {
                    // Case 1A) RIGHT is not the currentNode
                    // current = inOrderPredecessor.right
                    // continue inner loop
                    if (inOrderPredecessor.right !== currentNode) {
                        inOrderPredecessor = inOrderPredecessor.right;
                        continue;
                    } else {
                        // Case 1B) RIGHT is the currentNode
                        // inOrderPredecessor.right = null
                        // process the currentNode
                        // set currentNode = currentNode.right
                        // break inner loop
                        inOrderPredecessor.right = null;
                        currentNode = currentNode.right;
                        break;
                    }
                } else {
                    // 2) When it does not have a RIGHT
                    // inOrderPredecessor.right = currentNode
                    // currentNode = currentNode.left
                    // break inner loop
                    inOrderPredecessor.right = currentNode;
                    // as this is pre-order, process NODE first
                    result.push(currentNode.val);
                    currentNode = currentNode.left;
                    break;
                }
            }

            continue;
        }

        // if RIGHT, process it (in the absence of a LEFT)
        if (currentNode.right) {
            // as this is pre-order, process NODE first
            result.push(currentNode.val);
            currentNode = currentNode.right;
        }
    }

    return result;
};
