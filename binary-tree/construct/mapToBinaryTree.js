'use strict';

// In a map based representation the structure is as follows:
/**
 * const treeMap = {
 *      val: 'A',
 *      left: {
 *          val: 'B',
 *          left: {
 *              val: 'D',
 *              left: null,
 *              right: null
 *          },
 *          right: {
 *              val: 'E',
 *              left: null,
 *              right: null
 *          }
 *      },
 *      right: {
 *          val: 'C',
 *          left: {
 *              val: 'F',
 *              left: null,
 *              right: null
 *          },
 *          right: {
 *              val: 'G',
 *              left: null,
 *              right: null
 *          }
 *      }
 * }
 */
// The above structure is a recursive structure and we follow a recursive implementation.
/**
 * Converts a Nested Map representation to a Binary Tree
 * Uses recursion as the data structure itself is recursive.
 * Recursion is Binary, progressive, without loopback (1pass)
 * Every JS Obj has 3 props : data => value, left => JS Obj for LEFT subtree
 * right => JS Obj for right subtree
 * @param {Object} data
 * @returns {TreeNode} node
 */
exports.mapToBinaryTree = data => {
    // Tree is empty
    if (!data) {
        console.log(`data is empty!`);
        return;
    }
    // Base case for recursion is that its a LEAF
    if (data.val && !data.left && !data.right) {
        return new TreeNode(data.val, null, null)
    }
    // a null check is in place here as one of the subtrees can still be NULL
    return new TreeNode(
        data.val,
        data.left ? nestedMapToBinaryTree(data.left) : null,
        data.right ? nestedMapToBinaryTree(data.right) : null
    );
};
