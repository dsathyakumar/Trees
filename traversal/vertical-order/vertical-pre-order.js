'use strict';

/**
 * The most important point to note about vertical order traversal is
 * the Root is assumed to be at (0, 0)
 * So the LEFT child would be considered to be at horizontal distance of unit -1
 * The Right Child would be considered at a horizontal distance of unit +1.
 * So the Left child of the root would be considered to be at (X-1, Y-1)
 * The Right Child of the root would be considered to be at (X+1, Y-1).
 * The Level or Y is also decremented as the child is at the next level.
 * 
 * So, in terms of solving this, we could do it using the pre-order traversal.
 * We maintain a map of the current horizontal distance units.
 * 
 * In normal pre-order traversal, we do not push the NODE onto the stack,
 * unless it had both LEFT and RIGHT. Thereby, if we popped out a NODE from the 
 * stack, its guaranteed to have a RIGHT.
 * 
 * Instead, we push it onto the stack, if it has a LEFT or RIGHT (similar to post-order traversal)
 * Thereby, we are able to backtrack, one node at a time & consequently reduce or increment
 * our currentHorizontalDistance unit. So, when a Node is popped off the stack, it may or may
 * not have a right. So,
 * Peek from Stack, If a node exists,
 *      => Stack is not empty
 *      => Fix the currentHorizontal DIstance (as we have backtracked from Child to parent)
 *      => Check if it has a right,
 *          => If Yes, set it as currentNode
 *          => Fix the currentHorizontal distance unit again.
 *      => If it did not have a right
 *          => Pop it off the stack
 *          => Set currentNode as the prevNode
 *          => Reset prevNode to NULL (so that it can continue popping next element off the stack)
 */
exports.verticalPreOrder = (root) => {
    const result = {};

    // Return if empty tree
    if (!root) {
        return result;
    }

    // Root would be at (0, 0) or (x, y)
    // Moving Left => (x - 1, y - 1)
    // Moving right => (x + 1, y - 1)
    // Backtracking from left to parent => (x + 1, y + 1)
    // Backtracking from right to parent => (x - 1, y + 1)
    let maxHD = 0;
    let minHD = 0;
    let currentHorizontalDistance = 0;
    let currentNode = root;
    let prevNode = null;

    // to temporarily store ancestors.
    const stack = [];

    while (currentNode) {
        // if there is no array to store the currentHorizontalDistance
        // create one.
        if (!result[currentHorizontalDistance]) {
            result[currentHorizontalDistance] = [];
        }

        // process data of node 1st
        result[currentHorizontalDistance].push(currentNode.val);

        // if a LEFT or RIGHT exists => move doward + backTrack exists
        // push into stack
        if (currentNode.left || currentNode.right) {
            stack.unshift(currentNode);
        }

        // if LEFT, process LEFT
        // Updated currentHorizontalDistance and minHD
        if (currentNode.left) {
            currentNode = currentNode.left;
            currentHorizontalDistance = (currentHorizontalDistance - 1);
            minHD = Math.min(minHD, currentHorizontalDistance);
            continue;
        }

        // if RIGHT, process RIGHT
        // Update currentHorizontalDistance and maxHD
        if (currentNode.right) {
            currentNode = currentNode.right;
            currentHorizontalDistance = (currentHorizontalDistance + 1);
            maxHD = Math.max(maxHD, currentHorizontalDistance);
            continue;
        }

        // As long as previous Node exists, iterate
        while (prevNode === null) {
            // peek the stack
            prevNode = stack[0];

            // Empty stack => iteration complete (no more ancestors left)
            if (!prevNode) {
                currentNode = null;
                break;
            }

            // Update currentHorizontalDistance to that of parent
            // if LEFT -> Parent => Backtrack by increment
            // if RIGHT -> Parent => Backtrack by decrement
            if (prevNode.left === currentNode) {
                currentHorizontalDistance = (currentHorizontalDistance + 1);
            } else {
                currentHorizontalDistance = (currentHorizontalDistance - 1);
            }

            // if a RIGHT exists and current is not RIGHT, process RIGHT
            // Update currentHorizontalDistance
            if (prevNode.right && prevNode.right !== currentNode) {
                currentHorizontalDistance = (currentHorizontalDistance + 1)
                currentNode = prevNode.right;
                prevNode = null;
                break;
            }

            // else, set currentNode as prevNode and prevNode to NULL
            // so that inner loop continues to pop off next ancestor
            currentNode = stack.shift();
            prevNode = null;
        }
    }

    return result;
};
