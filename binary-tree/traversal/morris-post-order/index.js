'use strict';

const {
    BinaryTreeNode
} = require('../../treeNode');

/**
 * Ref: https://www.codespeedy.com/morris-postorder-tree-traversal-in-cpp/
 * Performs a Stack-less post order traversal of the Binary tree.
 * Re-purposes the in-order morris traversal via a temp BinaryTreeNode.
 * Uses 2 additional aux spaces references to loop back over visited nodes.
 * @param {BinaryTreeNode} root
 * @returns {Array} result
 */
exports.morrisPostOrder = root => {
    const result = [];

    // empty tree check
    if (!root) {
        return result;
    }

    // The iteration starts off with an empty tree Node.
    // The given tree is made the left subtree of this tempNode.
    let tempNode = new BinaryTreeNode();
    tempNode.left = root;

    let predecessor = null;

    // Stop Node is a pointer to the predecessor which created a LINK
    // to currentNode by assigning its RIGHT pointer to currentNode.
    // Note that, since we used a Temp Node, the back link wont point
    // correctly. So, to fix this, we determine the predecessor as stopNode.
    // Then we iterate currentNode to predecessor - 1 and so on, until,
    // stopNode becomes the LEFT child, at this point we stop and move to nextNode
    let stopNode = null;
    let nextNode = null;

    // So iteration starts off with the tempNode instead of the given root.
    let currentNode = tempNode;

    // loop along as long as currentNode exists.
    while (currentNode) {
        // process LEFT if it exists.
        if (currentNode.left) {
            predecessor = currentNode.left;

            if (stopNode === predecessor) {
                stopNode = null;
                currentNode = nextNode;
                nextNode = null;
                continue;
            }

            while (predecessor) {
                if (predecessor.right) {
                    if (predecessor.right === stopNode) {
                        result.push(predecessor.val);
                        stopNode = predecessor;
                        break;
                    } else if (predecessor.right === currentNode) {
                        result.push(predecessor.val);
                        stopNode = predecessor;
                        predecessor.right = null;
                        nextNode = currentNode.right;
                        break;
                    } else {
                        predecessor = predecessor.right;
                        continue;
                    }
                } else {
                    predecessor.right = currentNode;
                    currentNode = currentNode.left;
                    break;
                }
            }

            continue;
        }

        // proccess RIGHT if it exists (in the absence of a LEFT)
        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }

        // Note that Post order Morris Traversal doesn't deal with
        // the case of RootNode alone. This is because, even if only
        // root node exists, it would be the LEFT child of a TEMP Node
        // thereby effectively creating a back link between itself and TEMP
    }

    // After the entire iteration is over, remove the left link of the
    // tempNode which is pointing to the given root.
    // Set tempNode to NULL
    tempNode.left = null;
    tempNode = null;

    return result;
};
