'use strict';

/**
 * Performs morris level order traversal.
 * This is a stackless & queueless traversal that is implemented on a
 * non-threaded Binary Tree.
 * @param {TreeNode} root
 * @returns {Array} result
 */
exports.morrisLevelOrder = root => {
    const result = [];

    if (!root) {
        return result;
    }

    let currentNode = root;
    let inOrderPredecessor = null;
    let currentLevel = 0;
    let retrace;

    while (currentNode) {
        if (currentNode.left) {
            retrace = 0;
            inOrderPredecessor = currentNode.left;
            ++retrace;

            while (inOrderPredecessor) {
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

        if (!result[currentLevel]) {
            result[currentLevel] = [];
        }
        result[currentLevel].push(currentNode.val);

        if (currentNode.right) {
            currentLevel = (currentLevel + 1);
            currentNode = currentNode.right;
        }
    }

    return result;
};
