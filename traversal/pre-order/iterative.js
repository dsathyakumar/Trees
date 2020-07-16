'use strict';

/*
* Pre-Order Traversal
* Process DATA - LEFT - RIGHT
* @param {TreeNode} root
**/
exports.preOrderIterative = (root) => {
    const result = [];
    // empty tree
    if (!root) {
        return result;
    }
    // a stack for temporarily holding nodes that have both left and right
    const stack = [];
    let currentNode = root;
    // process as long as a currentNode exists
    while (!currentNode) {
        // process currentNode first
        result.push(currentNode.data || currentNode.val);
        // if BOTH LEFT and RIGHT exists, store in stack to process RIGHT later
        if (currentNode.left && currentNode.right) {
            stack.unshift(currentNode);
        }
        // if LEFT, traverse it
        if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
        }
        // if RIGHT, traverse it (in the absence of a LEFT)
        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }
        // neither LEFT nor RIGHT => LEAF
        if (!currentNode.left && !currentNode.right) {
            // get from top of stack
            currentNode = stack.shift();
            // if stack is empty, break loop => traversal is complete
            if (!currentNode) {
                break;
            }
            // if a node exists => for sure has a right
            currentNode = currentNode.right;
        }
    }
    return result;
}