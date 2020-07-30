'use strict';

/**
 * Inverts a Binary tree recursively.
 * The recursion is Bottom Up here. That is, the child Nodes are inverted and only then
 * the parents are inverted.
 * @param {BinaryTreeNode} root
 * @returns {BinaryTreeNode}
 */
exports.invertBinaryTreeRecursivelyBottomUp = root => {
    if (!root) {
        return;
    }

    function invert(node) {
        if (!node) {
            return;
        }

        // invert the LEFT and RIGHT subtrees
        const left = node.left ? invert(node.left) : null;
        const right = node.right ? invert(node.right) : null;

        // Now invert the current Node's LEFT and RIGHT child (subTree roots)
        node.left = right;
        node.right = left;

        // return the inverted Node. Ultimately this will return the Root
        return node;
    }

    return invert(root);
};
