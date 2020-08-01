'use strict';

/**
 * Returns the size of the Binary Tree Node.
 * if a Root is passed, it returns the size of the whole Tree
 * or the count of the number of Nodes.
 * 
 * This count is needed to create a 2D ancestor Matrix of size N x N
 * where N = number of Nodes and the nodes are labelled from 0 to N-1
 * @param {BinaryTreeNode} node
 * @returns {Number}
 */
const sizeOf = root => {
    if (!root) {
        return 0;
    }

    function getSize(node) {
        if (!node) {
            return 0;
        }

        // when the current node is transferring its size to its parent
        // it has to include itself in the count (bdesides the count of LEFT and RIGHT)
        return getSize(node.left) + 1 + getSize(node.right);
    }

    return getSize(root);
};

/**
 * Basically generates a fixed size 2D array for the given input size
 * @param {BinaryTreeNode} size
 * @returns {Array} 2D-empty
 */
const buildEmptyAncestorMatrix = (size) => {
    const ancestorMatrix = new Array(size);

    ancestorMatrix.fill(0);
    Object.seal(ancestorMatrix);

    for (let idx = 0; (idx < size); idx++) {
        ancestorMatrix[idx] = new Array(size);
        ancestorMatrix[idx].fill(0);
        Object.seal(ancestorMatrix[idx]);
    }

    return ancestorMatrix;
}

/**
 * Basically does a pre-order traversal to compute the ancestorMatrix
 * By Pre-order its ROOT-LEFT-RIGHT
 * @param {BinaryTreeNode} node
 * @param {Array} ancestorsArray
 * @param {2D-Array} ancestorMatrix
 */
const generateAncestorMatrixForTree = (node, ancestorsArray, ancestorMatrix) => {
    // Nothing to fill if the node is NULL
    // This is the base case that terminates the recursion
    // It will be triggered / hit when a LEAF node invokes its LEFT or RIGHT
    if (!node) {
        return;
    }

    // Loop over the list of ancestors to mark that they are the ancestors
    // of the current node. Note that by default, the ancestorMatrix is filled with 0's.
    // So, here, the ancestors of the given Node are re-set to 1.
    ancestorsArray.forEach(ancestor => {
        ancestorMatrix[ancestor.data || ancestor.val][node.data || node.val] = 1;
    });

    // Push the current Node into the ancestor Array
    // As it becomes an ancestor for its child Nodes
    ancestorsArray.push(node);

    // compute for current Node;s LEFT subtree & RIGHT subtree
    generateAncestorMatrixForTree(node.left, ancestorsArray, ancestorMatrix);
    generateAncestorMatrixForTree(node.right, ancestorsArray, ancestorMatrix);

    // after computing for its LEFT and RIGHT subtrees, pop from ancestors Array
    ancestorsArray.pop();

    // return the ancestorMatrix
    return ancestorMatrix;
}

/**
 * Builds the ancestor matrix for a Tree whose Nodes are labelled from 0 to N-1
 * where N = number of Nodes. By Naming, it does not imply that we mark Nodes
 * with values 0 to N-1. The Nodes themselves have a value of 0 to N-1.
 * @param {BinaryTreeNode} root
 * @returns {Array} 2D-array
 */
exports.binaryTreeToAncestorMatrix = root => {
    if (!root) {
        return;
    }

    // computes the size of the Binary Tree
    // (which will be used to build the ancestor matrix)
    const size = sizeOf(root);

    // generates a fixed dimension 2D array (filled with 0's) based on `size`
    const ancestorMatrix = buildEmptyAncestorMatrix(size);

    // a temp array to store all the traversed ancestors
    const ancestorsArray = [];

    // generates the ancestor matrix for the given Tree
    return generateAncestorMatrixForTree(root, ancestorsArray, ancestorMatrix);
};
