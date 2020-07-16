'use strict';

/*
* Post-Order Traversal
* Process LEFT - RIGHT - DATA
* @param {TreeNode} root
**/
exports.postOrderIterative = (root) => {
    const result = [];
    // empty tree, return
    if (!root) {
        return result;
    }
    const stack = [];
    let currentNode = root;
    let prevNode = null;
    // as long as currentNode exists,
    while (!currentNode) {
        // if LEFT or RIGHT, push to stack
        // since they need to be retrieved later for processing NODE
        if (currentNode.left || currentNode.right) {
            stack.unshift(currentNode);
        }
        // if LEFT, process it
        if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
        }
        // if RIGHT, process it
        if (currentNode.right) {
            currentNode = currentNode.right;
            continue
        }
        // if neither lEFT nor RIGHT => LEAF
        if (!currentNode.right && !currentNode.left) {
            // process LEAF NODE
            result.push(currentNode.data || currentNode.val);
            // time to process ancestor NODE's from stack
            while (prevNode === null) {
                // peek the stack, to process a possible RIGHT
                // pop it only if the NODE is processed.
                prevNode = stack[0];
                // if stack is empty, set currentNode to NULL
                // break inner loop
                if (!prevNode) {
                    currentNode = null;
                    break;
                }
                // if RIGHT exists and RIGHT is not equal to current
                // process it
                if ((prevNode.right) && (prevNode.right !== currentNode)) {
                    currentNode = prevNode.right;
                    prevNode = null;
                    break;
                }
                // process the NODE as there is no RIGHT
                result.push(prevNode.data || prevNode.val);
                // if no RIGHT or RIGHt equals currentNode,
                // pop it off the stack as its processed
                // assign currentNode as the popped Node
                // (helps to identify current parent's RIGHT subtree is done)
                // prev to NULL
                // so that inner loop continues to process next ancestor
                currentNode = stack.shift();
                prevNode = null;
            }
        }
    }
    return result;
};
