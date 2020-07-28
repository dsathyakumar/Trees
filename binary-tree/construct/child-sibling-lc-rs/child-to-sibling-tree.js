'use strict';

/**
 * Converts the LEFT CHILD - RIGHT CHILD linked representation of a Binary Tree
 * to a sibling tree based on LEFT CHILD - RIGHT SIBLING representation.
 * Makes use of Post Order Traversal to perform this conversion.
 * 
 * For a given parent Node,
 * - A) if a RIGHT child & LEFT CHILD existed,
 *      Then this RIGHT CHILD is made a sibling of LEFT
 *      The link between Parent Node and RIGHT child is broken
 * 
 * - B) if a RIGHT child existed in the absence of a LEFT CHILD
 *      Then this RIGHT CHILD Is made the LEFT CHILD of its parent
 *      The Right is set to NULL
 * 
 * - C) The Root Node will no longer have a RIGHT (as its RIGHT sibling is NULL)
 * 
 * While we still use the definition of a BinaryTreeNode, there are some changes:
 * LEFT => Left Child.
 * RIGHT => Right Sibling
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
                        // (This is done cos a RIGHT denotes a RIGHT siibling now)
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

    // Note that after conversion,
    // LEFT => LEFT CHILD
    // RIGHT => RIGHT SIBLING
    return root;
};
