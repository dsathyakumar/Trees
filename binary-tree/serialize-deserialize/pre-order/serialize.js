'use strict';

const EMPTY_INDICATOR = '/';

/**
 * Serializes the Binary tree using pre-order traversal via a Stack.
 * @param {BinaryTreeNode} root
 * @returns {String} result
 */
exports.serialize = root => {
    if (!root) {
        return '';
    }

    const result = [];

    let currentNode = root;
    let stack = [];
    let prevNode = null;

    while (currentNode) {
        // if there exists a LEFT or RIGHT subtree, push into Stack
        // as they will have to be processed later
        if (currentNode.left || currentNode.right) {
            stack.unshift(currentNode);
        }

        // process current Node
        result.push(currentNode.val);

        // if LEFT, process it
        if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
        }

        // push in an empty indicator to indicate an empty left
        result.push(EMPTY_INDICATOR);

        // if RIGHT, process it (in the absence of LEFT)
        // to indicate and absent LEFT (push in a /)
        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }

        // Push in an empty indicator for the empty RIGHT
        result.push(EMPTY_INDICATOR);

        // process ancestors in the stack
        while (prevNode === null) {
            // peek top element from stack
            prevNode = stack[0];

            // if stack was empty, set currentNode to NULL
            // so that the outer loop breaks
            // break the inner
            if (!prevNode) {
                currentNode = null;
                break;
            }

            // if a RIGHT exists and its not the same as currentNode, process it
            if (prevNode.right && prevNode.right !== currentNode) {
                currentNode = prevNode.right;
                prevNode = null;
                break;
            }

            // Account for the ancestor node not having a RIGHT
            if (!prevNode.right) {
                result.push(EMPTY_INDICATOR);
            }

            // else pop the top off the stack and reset prevNode to NULL
            // so that the inner loop can process previous ancestors
            // Also set currentNode to the previousNode so as to backtrack
            // to the right of previous ancestor
            currentNode = stack.shift();
            prevNode = null;
        }

    }

    // return result in a stringified format.
    return result.toString();
};

/**
 * Serializes the Binary tree using Morris pre-order traversal.
 * @param {BinaryTreeNode} root
 * @returns {String} result
 */
exports.serializeMorrisPreOrder = root => {
    if (!root) {
        return '';
    }

    const result = [];

    let currentNode = root;
    let inOrderPredecessor = null;

    while (currentNode) {
        // if a LEFT existed, process it
        if (currentNode.left) {
            inOrderPredecessor = currentNode.left;

            while (inOrderPredecessor) {
                if (inOrderPredecessor.right) {
                    if (inOrderPredecessor.right !== currentNode) {
                        inOrderPredecessor = inOrderPredecessor.right;
                        continue;
                    } else {
                        inOrderPredecessor.right = null;
                        currentNode = currentNode.right;
                        result.push(EMPTY_INDICATOR);
                        break;
                    }
                } else {
                    result.push(currentNode.val);
                    inOrderPredecessor.right = currentNode;
                    currentNode = currentNode.left
                    break;
                }
            }

            continue;
        }

        // process the current Node before processing anything further.
        // Also, the one node case would not have processed itself, unless there was a 
        // LEFT or RIGHT. So, process the node now.
        result.push(currentNode.val);

        // if this excecuted, then there isn't a LEFT
        // account for it as part of serialization by marking with a empty indicator
        result.push(EMPTY_INDICATOR);

        // if RIGHT exists, process it
        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }

        // if neither LEFT nor RIGHT
        // This case would never exist unless the tree had only 1 node => ROOT
        result.push(EMPTY_INDICATOR);
        break;
    }

    return result.toString();
};
