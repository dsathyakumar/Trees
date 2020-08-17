'use strict';

/**
 * Performs morris level order traversal.
 * This is a stackless & queueless traversal that is implemented on a
 * non-threaded Binary Tree.
 * Note, in level order traversal, whenever we traverse a RIGHT, which ends up being
 * an ancestor (just because a LINK was previous created between the in-order predecessor
 * and a given Node), we are doing a wrong increment to the LEVEL (this is going back up
 * while since we do not know that, we end up wrongly incrementing it.). So, this is the + 1
 * being done to the retrace steps (the retrace counter is the number of steps we are
 * making, before we hit back / loop back to the same Node.) 
 * @param {BinaryTreeNode} root
 * @returns {Array} result
 */
exports.morrisLevelOrder = root => {
    // store result here.
    const result = [];

    // Case when Tree is empty, just return
    if (!root) {
        return result;
    }

    // currentNode under iteration
    let currentNode = root;
    let inOrderPredecessor = null;

    // keeping track of the level of the currentNode (level begins with root at 0th level)
    let currentLevel = 0;

    // number of steps to retrace back.
    // This is needed in the case of a loop back.
    // (where we end up with the same currentNode due to the temp back link)
    // This answers the question, from a given predecessor, how many steps / levels
    // I need to back up, to reach my currentNode.
    let retrace;

    while (currentNode) {
        // if there is a LEFT, determine the in-order predecessor.
        if (currentNode.left) {
            retrace = 0;

            // To get the in-order predecessor, start with the LEFT
            // and proceed down the RIGHT subtree, of the LEFT child of currentNode.
            // if there is NO RIGHT, then the LEFT child is the in-order predecessor.
            inOrderPredecessor = currentNode.left;
            ++retrace;

            while (inOrderPredecessor) {
                // 1. If there is a RIGHT
                    // There are 2 possibilities
                    // if the Node is same as currentNode
                        // we have looped back
                        // break the Link, fix the level, process Node, iterate RIGHT
                    // else,
                        // set inOrderPredecessor = inOrderPredecessor.right & continue
                // 2. If there is no RIGHT
                    // => current inOrderPredecessor is the one
                    // > create a LINK between this Node & the currentNode in iteration

                if (inOrderPredecessor.right) {
                    if (inOrderPredecessor.right !== currentNode) {
                        inOrderPredecessor = inOrderPredecessor.right;
                        ++retrace;
                        continue;
                    } else {
                        inOrderPredecessor.right = null;
                        currentLevel = (currentLevel - (retrace + 1));
                        if (!result[currentLevel]) {
                            result[currentLevel] = [];
                        }
                        result[currentLevel].push(currentNode.val);
                        currentNode = currentNode.right;
                        currentLevel = (currentLevel + 1);
                        break;
                    }
                } else {
                    inOrderPredecessor.right = currentNode;
                    currentLevel = (currentLevel + 1);
                    currentNode = currentNode.left;
                    break;
                }
            }

            continue;
        }

        // Note that, only if a LEFT existed, we would visit that
        // Node again, via a Back Link. Else, it has to be processed.
        if (!result[currentLevel]) {
            result[currentLevel] = [];
        }
        result[currentLevel].push(currentNode.val);

        // if there exists a RIGHT, process it.
        // RIGHT may either point to another RIGHT Node or 
        // point to a previous ancestor (via the TEMP back link)
        // if its another RIGHT, then the increment in level is correct.
        // if its an ancestor, then the increment in level is wrong and has
        // to be corrected via the retrace. But since we are incrementing here
        // we do (retrace + 1) to correct the level later.
        if (currentNode.right) {
            currentLevel = (currentLevel + 1);
            currentNode = currentNode.right;
            continue;
        }

        // neither LEFT nor RIGHT, break out as Node is already processed.
        break;
    }

    return result;
};
