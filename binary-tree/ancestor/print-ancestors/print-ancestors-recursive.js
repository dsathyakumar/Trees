'use strict';

/**
 * Prints the ancestors of the Binary Tree
 * @param {BinaryTreeNode} root 
 * @param {*} targetData
 */
exports.printAncestorsRecursively = (root, targetData) => {
    // empty tree, return
    if (!root) {
        console.warn(`Tree is empty!`);
        return;
    }

    if (!targetData) {
        console.warn(`Target Data to search is empty!`);
        return;
    }

    const ancestorsArray = [];

    /**
     * Bottom-Up progressive Branched (Binary) Recursion, without loopbacks
     * @param {BinaryTreeNode} node 
     * @param {*} valueToFind
     * @param {Array} ancestorsArray
     */
    function collectAncestors(node, valueToFind, ancestorsArray) {
        // Base case of recursion when a LEAF's LEFT & RIGHT null are hit
        // Ultimate base case will be hit once per branch.
        if (!node) {
            return;
        }

        // check if the current value is the valueToFind
        // return true if its so.
        // So the current Node's parent becomes an ancestor
        // This is also a base case (under the assumption that Tree has unique values)
        // This case will be hit once overall for the Tree.
        if (node.val === valueToFind) {
            return true;
        }

        // Else the currentNode may be an ancestor (so push into ancestor array)
        // Its pushed in with the anticipation that the valueToFind may be present in
        // one of its subTrees. If its not, it will be removed later
        // (After traversing LEFT and RIGHT subTrees)
        ancestorsArray.push(node.val);

        // Traverse LEFT and RIGHT subTrees (to check if the node with valueToFind is present)
        const isFoundInLeft = collectAncestors(node.left, valueToFind, ancestorsArray);
        const isFoundInRight = collectAncestors(node.right, valueToFind, ancestorsArray);

        // if its not present, then pop the current Node from ancestor array
        // as its not an ancestor.
        // Since currentNode is not an ancestor, currentNode;s parent also can't be one
        // so return false.
        if (!isFoundInLeft && !isFoundInRight) {
            ancestorsArray.pop();
            return false;
        }

        // this means that the `valueToFind` is present in one of the subtrees
        // making the current Node an ancestor of valueToFind.
        // Since currentNode is an ancestor, currentNode's parent also is one.
        // So return TRUE.
        return true;
    }

    // performs a recursive pre-order traversal to collect all the ancestors of
    // the valueToFind (if its found)
    collectAncestors(root, targetData, ancestorsArray);

    // loop over the returned array to print it
    return ancestorsArray;
};
