'use strict';

/**
 * Converts the LEFT CHILD - RIGHT CHILD linked representation of a Binary Tree
 * to a sibling tree based on LEFT CHILD - RIGHT SIBLING representation.
 * Makes use of Post Order Traversal to perform this conversion.
 * 
 * @param {BinaryTreeNode} root
 * @returns {BinaryTreeNode} root
 */
exports.childToSiblingTree = (root) => {
    if (!root) {
        return;
    }

    const stack = [];
    let currentNode = root;
    let prevNode = null;

    while (currentNode) {
        // if a LEFT or RIGHT exists, then push it into Stack
        // so that it can be later revisited to process RIGHT subtree
        if (currentNode.left || currentNode.right) {
            stack.unshift(currentNode);
        }

        // if LEFT exists, process it
        if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
        }

        // if RIGHT exists, process it
        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }

        // if currentNode is a LEAF, process ancestors
        while (prevNode === null) {
            // peek top of stack
            prevNode = stack[0];

            // if stack is empty, set currentNode to NULL
            // break inner loop, so that outer loop also breaks
            if (!prevNode) {
                currentNode = null;
                break;
            }

            // if a RIGHT exists
            if (prevNode.right) {
                // if its not the currentNode, process RIGHT
                if (prevNode.right !== currentNode) {
                    currentNode = prevNode.right;
                    prevNode = null;
                    break;
                } else {
                    // perform the change
                    // A) if a LEFT did not exist, set current RIGHT as the LEFT child
                        // (This is done cos a RIGHT denotes a RIGHT subling now)
                    // B) if a RIGHT existed, its made as RIGHT sibling of the Node's
                        // LEFT child.
                    if (prevNode.left) {
                        prevNode.left.right = prevNode.right;
                    } else {
                        prevNode.left = prevNode.right;
                    }
                    prevNode.right = null;
                }
            }

            // if control comes here its either cos a RIGHT does not exist or, the RIGHT is already processed.
            // A) reset prevNode to NULL so that inner loop progresses
                // to process the prev ancestor
            // B) pop stack and set it as currentNode (or prevNode)
            currentNode = stack.shift();
            prevNode = null;
        }
    }

    return root;
};
