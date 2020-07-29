'use strict';

/**
 * Destroys the whole binary tree. Any reference held by the caller for the root
 * of the Tree, would be NULL. Performs a post Order traversal of the root, to
 * delete the child nodes, before deletion of parent.
 * 
 * @param {BinaryTreeNode} root
 * @returns {undefined}
 */
exports.destroyTree = (root) => {
    if (!root) {
        return;
    }

    const stack = [];
    let currentNode = root;
    let prevNode = null;

    while (currentNode) {
        // LEFT or RIGHT exists, push into Stack
        if (currentNode.left || currentNode.right) {
            stack.unshift(currentNode);
        }

        // if a LEFT exists, process it
        if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
        }

        // if a RIGHT exists, process it only if LEFT is absent
        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }

        // if control comes here => its a LEAF node!
        // so begin processing ancestor nodes
        while (!prevNode) {
            // peek the stack
            prevNode = stack[0];

            // Stack is empty. So break inner loop and outer loop
            // The currentNode would be the last node of the traversal.
            // Given that this is post order traversal, the root will be the last one
            if (!prevNode && (currentNode === root)) {
                currentNode = prevNode;
                root = null;
                break;
            }

            // There are 2 possibilities here:
            // 1. Current Node is the Left Child of the ancestor
                // Reset the LEFT to NULL
                // If a Right existed now, then it has to be processed
                    // set currentNode to prevNode.right
                    // Reset prevNode to NULL
                    // Break inner loop
            if (prevNode.left === currentNode) {
                prevNode.left = null;
                if (prevNode.right) {
                    currentNode = prevNode.right;
                    prevNode = null;
                    break;
                }
            }

            // 2. Current Node is the Right Child of the ancestor || a RIGHT does not exist
                // A) if a RIGHT exists
                    // Reset it to NULL
                // Set current Node as prevNode (top of the stack)
                // Set prevNode to NULL (so that inner loop continues)
            if ((prevNode.right === currentNode)
                || !prevNode.right) {
                if (prevNode.right) {
                    prevNode.right = null;
                }

                currentNode = stack.shift();
                prevNode = null;
            }
        }
    }

    return;
}