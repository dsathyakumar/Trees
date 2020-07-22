'use strict';

/**
 * Computes the Left View of the Binary Tree.
 * Uses Level order traversal via a Q
 * To perform Q'less traversal, morris level order traversal can be used.
 * @param {BinaryTreeNode} root
 * @returns {Array} result
 */
exports.leftView = (root) => {
    const result = [];

    // if empty tree, return
    if (!root) {
        return result;
    }

    // initialize Q with Root as 1st element
    const q = [root];

    // the pointer to the 1st node in every level
    let levelsFirstNodepointer = root;

    // a locking mechanism that will
    // open when the 1st node of a level is reached
    // and close when the 1st node of the next level is got.
    let shouldUpdate = false;

    // Temp variable to hold the deq'd node
    let deqNode = null;

    while (q.length) {
        // deque from the front
        deqNode = q.shift();

        // when this is TRUE => the traversal has moved to the next level
        // open the lock, so that the 1st node of next level can be filled.
        if (levelsFirstNodepointer === deqNode) {
            // For left view, the 1st node from the left in every level is needed.
            // push into result.
            result.push(deqNode.val);
            shouldUpdate = true;
        }

        // if LEFT, enQ it in the rear (levels are traversed L->R)
        if (deqNode.left) {
            q.push(deqNode.left);

            // when the lock to fill the 1st node of next level is open, fill it & lock again
            if (shouldUpdate) {
                levelsFirstNodepointer = deqNode.left;
                shouldUpdate = false
            }
        }

        // if RIGHT, enQ in the rear (levels are traversed L->R)
        if (deqNode.right) {
            q.push(deqNode.right);

            // when the lock to fill the 1st node of next level is open, fill it & lock again
            if (shouldUpdate) {
                levelsFirstNodepointer = deqNode.right;
                shouldUpdate = false
            }
        }
    }

    return result;
};
