'use strict';

const {
    TreeNode
} = require('../../treeNode');

/**
 * Performs a Stack-less post order traversal of the Binary tree.
 * Re-purposes the in-order morris traversal via a temp TreeNode.
 * Uses 2 additional aux spaces references to loop back over visited nodes.
 * @param {TreeNode} root
 * @returns {Array} result
 */
exports.morrisPostOrder = root => {
    const result = [];

    if (!root) {
        return result;
    }

    // The iteration starts off with an empty tree Node.
    // The given tree is made the left subtree of this tempNode.
    let tempNode = new TreeNode();
    tempNode.left = root;

    let postOrderPredecessor = null;

    // Stop Node is a pointer to the postOrderPredecessor which created a LINK
    // to currentNode by assigning its RIGHT pointer to currentNode.
    let stopNode = null;
    let nextNode = null;

    // So iteration starts off with the tempNode instead of the given root.
    let currentNode = tempNode;

    // loop along as long as currentNode exists.
    while (currentNode) {
        // process LEFT if it exists.
        if (currentNode.left) {
            postOrderPredecessor = currentNode.left;

            if (stopNode === postOrderPredecessor) {
                stopNode = null;
                currentNode = nextNode;
                nextNode = null;
                continue;
            }

            while (postOrderPredecessor) {
                if (postOrderPredecessor.right) {
                    if (postOrderPredecessor.right === stopNode) {
                        result.push(postOrderPredecessor.val);
                        stopNode = postOrderPredecessor;
                        break;
                    } else if (postOrderPredecessor.right === currentNode) {
                        result.push(postOrderPredecessor.val);
                        stopNode = postOrderPredecessor;
                        postOrderPredecessor.right = null;
                        nextNode = currentNode.right;
                        break;
                    } else {
                        postOrderPredecessor = postOrderPredecessor.right;
                        continue;
                    }
                } else {
                    postOrderPredecessor.right = currentNode;
                    currentNode = currentNode.left;
                    break;
                }
            }

            continue;
        }

        // proccess RIGHT if it exists (in the absence of a LEFT)
        if (currentNode.right) {
            currentNode = currentNode.right;
        }
    }

    // After the entire iteration is over, remove the left link of the
    // tempNode which is pointing to the given root.
    // Set tempNode to NULL
    tempNode.left = null;
    tempNode = null;

    return result;
};
