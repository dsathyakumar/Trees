'use strict';
/**
 * const data = [
 *      'A',
 *      [
 *          'B',
 *          [
 *              'C',
 *              [],
 *              []
 *          ],
 *          [
 *              'D',
 *              []
 *              []
 *          ]
 *      ],
 *      [
 *          'C',
 *          [
 *              'E',
 *              [],
 *              []
 *          ],
 *          [
 *              'F',
 *              [],
 *              []
 *          ]
 *      ]
 * ]
 */
/**
 * Converts a Nested List (List of List) representation to a Binary Tree
 * Uses recursion as the data structure itself is recursive.
 * Binary, progressive Recursion (without loopback => 1 pass)
 * Every Array has 3 parts : data[0] => value, data[1] => array for LEFT subtree
 * data[2] => Array for right subtree. These arrays internally have nested arrays
 * @param {Array} data
 * @returns {TreeNode} node
 */
exports.listToBinaryTree = data => {
    // case when tree is empty
    if (!data || !data.length) {
        console.log(`data is empty!`);
        return;
    }
    // Base case for Recursion (LEAF node)
    if (data[0] && !data[1].length && !data[2].length) {
        return new TreeNode(data[0], null, null)
    }
    return new TreeNode(
        data[0],
        data[1] ? listOfListToBinaryTree(data[1]) : null,
        data[2] ? listOfListToBinaryTree(data[2]) : null
    );
};
