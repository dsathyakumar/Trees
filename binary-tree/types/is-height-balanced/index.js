'use strict';

/**
 * Determines if the given Binary Tree is height balanced or Not.
 * Does not try to balance the tree.
 * This computes it recursively.
 * The recursion here is bottom up.
 * The value of the sub-stage of recursion is needed to compute the
 * value of the parent stage.
 * https://leetcode.com/problems/balanced-binary-tree/
 * @param {TreeNode} root
 * @returns {Boolean} isBalanced
 */
exports.isHeightBalanced = root => {
    if (!root) {
        return true;
    }

    function recurse(node) {
        // a Leaf Node would always have a height 1
        // because it has 2 NULL child nodes that contribute a 0
        // thereby it getting a (Math.max(0, 0) + 1) = 1
        if (node === null) {
            return 0;
        }

        // compute height of left and right subtrees.
        const lHeight = recurse(node.left);
        const rHeight = recurse(node.right);

        // This means that Left and Right Subtrees for the given node
        // under consideration are balanced. So, with the values
        // obtained for LEFT and RIGHT subtrees, compute the height of given node.
        if (lHeight !== false && rHeight !== false) {
            const diff = Math.abs(lHeight - rHeight);
            
            if (diff >= 0 && diff <= 1) {
                return (Math.max(lHeight, rHeight) + 1);
            }
        }

        return false;
    }

    return !!recurse(root);
};
