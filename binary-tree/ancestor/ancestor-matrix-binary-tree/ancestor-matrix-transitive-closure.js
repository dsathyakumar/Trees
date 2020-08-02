'use strict';

/**
 * Computes the size or number of nodes in the Binary Tree
 * @param {BinaryTreeNode} node
 * @return {Number} size
 */
const sizeOf = node => {
    if (!node) {
        return 0;
    }

    return sizeOf(node.left) + 1 + sizeOf(node.right);
}

/**
 * Generates the initial ancestor matrix, that is filled with 0's
 * @param {Number} size
 * @returns {Array} 2D - ancestor Matrix
 */
const generateInitialMatrix = size => {
    // creates a new Array of fixed size (via Seal) & pre-fills with 0
    // Note that since Array is pre-filled, it cannot use the .push methods
    // instead directly assign values.
    const ancestorMatrix = new Array(size);
    ancestorMatrix.fill(0);
    Object.seal(ancestorMatrix);

    // for each array element, create a new array of size (so as to create a 2D array)
    for (let count = 0; count < size; count++) {
        ancestorMatrix[count] = new Array(size);
        ancestorMatrix[count].fill(0);
        Object.seal(ancestorMatrix[count]);
    }

    return ancestorMatrix;
}

// recursively fills the ancestorMatrix with info on immediate ancestors
const constructAncestorMatrix = (node, parentIndex, ancestorMatrix) => {
    // NULL node => return
    // Nothing to fill if the node is NULL
    // This is the base case that terminates the recursion
    // It will be triggered / hit when a LEAF node invokes its LEFT or RIGHT
    if (!node) {
        return;
    }

    // The Root node does not have any ancestor & so is assigned a value of -1
    // Check for it & skip it
    // If not, then fill in the ancestor for this node.
    if (parentIndex !== -1) {
        ancestorMatrix[parentIndex][(node.val)] = 1;
    }

    // update the parent pointer to represent the current Node's numbered value
    const nextParentIdx = (node.val || node.data);

    // fill in the ancestor of current Node's LEFT
    constructAncestorMatrix(node.left, nextParentIdx, ancestorMatrix);

    // fill in the ancestor of current Node's RIGHT
    constructAncestorMatrix(node.right, nextParentIdx, ancestorMatrix);

    return;
}

/**
 * @description
 * - Even in this, the Nodes are labelled (have a value of / numbered) from 0 to N-1,
 * where N = number of Nodes available.
 * - This method does not make use of any aux Data Structures like an ancestor Array
 * to hold the array of ancestors for a given Node.
 * - Instead, it fills the ancestor matrix initially with the immediate ancestors of a given
 * Node, by passing its numbered index to the child.
 * - Later, after pre-order traversal completes and all the Child Nodes have their
 * immediate ancestors filled, it applies Transitive Closure property of the Matrix
 * to determine other ancestors.
 * - This is done via the Floydd Warshalls Algorithm. The basic idea being
 * if 1 is an ancestor of 0, and, if 5 is an ancestor of 1, then 5 is also an ancestor of 0.
 * - The transitive closure matrix of a graph is similar to the reachability matrix
 * - It answers the question : (can one vertice A be reached from another vertice B)
 * - While the Dijikstra's algorithm computes the single source shortest path between 2 nodes,
 * the Flyodd Warshall's algorithm computes the same for all nodes (all pair shortest paths)
 * @param {BinaryTreeNode} root
 * @returns {Array} 2D ancestor matrix array
 */
exports.ancestorMatrixViaTransitiveClosure = root => {
    // empty tree return
    if (!root) {
        return;
    }

    // compute sizeof binary tree
    const size = sizeOf(root);

    // Generate initial Matrix filled with 0's for dimensions = (size x size)
    const ancestorMatrix = generateInitialMatrix(size);

    // fills the ancestor Matrix with immediate ancestors
    constructAncestorMatrix(root, -1, ancestorMatrix);

    // Transitive Closure on the ancestor Matrix via Improved Floydd Warshall.
    // Floydd warshall applies to a Graph with weights / costs
    // It tends to take the Min of 2 values (which we have replaced with || - as this is a boolean matix)
    // && is used to replace summing up values (as its ultimately a 1 again)
    // The runtime complexity is O(N^2) for creating a matrix
    // And then creating the transitive closure matrix which is N * O(N ^ 2) = O (N ^ 3)
    // Thi basically computes the other indirect ancestors
    // For eg) if 1 is an ancestor of 0, and if, 5 is an ancestor of 1, then 5 is an (indirect) ancestor of 0
    // This is because, we have constrained ourselves with O(1) space complexity
    // And do not have an ancestor array to store all ancestors
    // SO we compute immediate / direct ancestors only. The rest are figured out this way.
    for (let k = 0; k < size; k++) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
               ancestorMatrix[i][j] = (
                   ancestorMatrix [i][j] || (
                       ancestorMatrix[i][k] && ancestorMatrix[k][j]
                    )
                );
            }
        }
    }

    return ancestorMatrix;
};
