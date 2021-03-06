'use strict';

/**
 * Performs morris in-order traversal.
 * This is a stackless & queueless traversal that is implemented on a
 * non-threaded Binary Tree.
 * - The key to processing in-order morris traversal for Node data is that
 * it has to be done, once the left subtree is fully processed (and the loop
 * terminates back in the currentNode), before the processing of right subtree starts.
 * @param {BinaryTreeNode} root
 * @returns {Array} result
 */
exports.morrisInOrder = root => {
    const result = [];

    if (!root) {
        return result;
    }

    let currentNode = root;
    let inOrderPredecessor = null;

    while (currentNode) {
        // Check if a LEFT subTree exists, process it
        if (currentNode.left) {
            // start by setting inOrder predecessor as LEFT subTree root.
            // if this node, did not have a RIGHT, then this would end up
            // becoming the inOrderPredecessor
            inOrderPredecessor = currentNode.left;

            // as long as inOrderPredecessor exists, there are 3 cases
            while (inOrderPredecessor) {
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
                        result.push(currentNode.val);
                        currentNode = currentNode.right;
                        break;
                    }
                } else {
                    // 2) When it does not have a RIGHT
                    // inOrderPredecessor.right = currentNode
                    // currentNode = currentNode.left
                    // break inner loop
                    inOrderPredecessor.right = currentNode;
                    currentNode = currentNode.left;
                    break;
                }
            }

            continue;
        }

        // if not LEFT subTree, process currentNode.
        // Before processing the RIght.
        // So, just in case the tree had only ROOT (1 Node only)
        // then this would process the it.
        result.push(currentNode.val);

        // if RIGHT subTree exists, process it & outer loop continues
        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }

        // this is mainly for case of a ROOT node (prevent the loop from going on endlessly)
        break;
    }

    return result;
};
