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

    let tempNode = new TreeNode();
    tempNode.left = root;

    let postOrderPredecessor = null;

    let stopNode = null;
    let nextNode = null;

    let currentNode = tempNode;

    while (currentNode) {
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

        if (currentNode.right) {
            currentNode = currentNode.right;
        }
    }

    tempNode.left = null;
    tempNode = null;

    return result;
};
