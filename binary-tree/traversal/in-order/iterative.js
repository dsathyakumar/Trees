'use strict';

/*
* In-Order Traversal
* Process LEFT - DATA - RIGHT
* @param {BinaryTreeNode} root
**/
exports.inOrderIterative = (root) => {
    const result = [];

    // empty tree
    if (!root) {
        return result;
    }

    // a stack for temporarily holding nodes that have both left and right
    const stack = [];
    let currentNode = root;
    let prevNode = null;

    // process as long as a currentNode exists
    while (currentNode) {
        // if a LEFT exists, push it into stack
        // so that it can be retrieved later to process the NODE and RIGHT
        // process its LEFT
        if (currentNode.left) {
            stack.unshift(currentNode);
            currentNode = currentNode.left;
            continue;
        }

        // if NO LEFT, process NODE
        result.push(currentNode.data || currentNode.val);

        // PROCESS RIGHT (if it exists, in absence of LEFT)
        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }

        // neither LEFT nor RIGHT => LEAF node
        // if (!currentNode.left && !currentNode.right) {

            // loop back to process ancestors for their right
            while (prevNode === null) {
                // pop ancestor from stack
                prevNode = stack.shift();

                // if stack is empty, break inner loop 
                // set currentNode to NULL and thereby break outer loop
                if (!prevNode) {
                    currentNode = null;
                    break;
                }

                // process NODE
                result.push(prevNode.data || prevNode.val);

                // Now if a RIGHT exists, then process it
                if (prevNode.right) {
                    currentNode = prevNode.right;
                    prevNode = null;
                    break;
                }

                // else reset prevNode to NULL so that inner loop continues
                // to pop off the next previous ancestor available
                prevNode = null;
            }
        // }
    }
    return result;
};
