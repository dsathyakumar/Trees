'use strict';

/**
 * Recursively inverts the Binary Tree.
 * Here the recursion is TOP DOWN => the given Node's LEFT and RIGHT subTree root
 * are 1st inverted and then its child nodes are inverted.
 * @param {BinaryTreeNode} root
 * @returns {BinaryTreeNode} root
 */
exports.invertBinaryTreeRecursivelyTopDown = root => {
    if (!root) {
        return;
    }

    function invert(node) {
        if (!node) {
            return;
        }

        // First invert the given Node's RIGHT and LEFT subTree Roots
        let temp = node.left;
        node.left = node.right;
        node.right = temp;

        // proceed to Invert the LEFT and RIGHT subTrees
        invert(node.left);
        invert(node.right);

        // return the Node with all its LEFT and RIGHT inverted.
        // So ultimately it will return the Root
        return node;
    }

    return invert(root);
};
