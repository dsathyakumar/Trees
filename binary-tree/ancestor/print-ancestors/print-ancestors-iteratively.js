'use strict';

/**
 * Uses pre-order traversal to iteratively get the ancestors of a given Node
 * Its assumed the tree has unique values.
 * @param {BinaryTreeNode} root
 * @param {*} targetData 
 * @returns {Array} ancestorArray
 */
exports.printAncestorsIteratively = (root, targetData) => {
    // Tree is empty
    if (!root) {
        console.warn(`Tree is empty!`);
        return;
    }

    // value to search for is empty
    if (!targetData) {
        console.warn(`Target Data to search is empty!`);
        return;
    }

    const ancestorArray = [];
    let prevNode = null;
    let currentNode = root;

    while (currentNode) {
        if (currentNode.val === targetData) {
            break;
        }

        if (currentNode.left || currentNode.right) {
            ancestorArray.unshift(currentNode);
        }

        if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
        }

        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }

        while (!prevNode) {
            prevNode = ancestorArray[0];

            if (!prevNode) {
                currentNode = prevNode;
                break;
            }

            if (prevNode.right && (prevNode.right !== currentNode)) {
                currentNode = prevNode.right;
                prevNode = null;
                break;
            }

            currentNode = ancestorArray.shift();
            prevNode = null;
        }
    }

    return ancestorArray;
};
