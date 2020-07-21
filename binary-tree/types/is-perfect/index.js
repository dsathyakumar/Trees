'use strict';

/**
 * Determines if a Binary Tree is a Perfect Binary Tree.
 * A Binary Tree is said to be a perfect Binary Tree when every Node has
 * either 0 or 2 children and all Leaf Nodes are at same level.
 * There are 3 cases thus:
 * - if any Node had only 1 child (a half node), then its not a Perfect BT
 * - If any Node in a level, had child Nodes, while the previous Node was a leaf
 *   Then its not a perfect binary Tree (as leaf nodes are not at the same level)
 * - If any Node in a level, was a leaf, while the previous Node had child Nodes
 *  Then, its not a perfect Binary Tree (as leaf nodes are not at the same level)
 * 
 * @param {TreeNode} root
 * @returns {Boolean} isPerfect
 */
exports.isPerfectBinaryTree = root => {
    if (!root) {
        return;
    }

    let isPerfect = true;

    const q = [root];

    let deqNode;

    let prevNodeChildCount = -1;
    let currentNodeChildCount = 0;

    let prevNodeLevel = -1;
    let currentNodeLevel = -1;

    let levelPointer = root;
    let shouldUpdateLevel = false;

    while (q.length) {
        deqNode = q.shift();

        if (levelPointer === deqNode) {
            shouldUpdateLevel = true;
            ++currentNodeLevel;
        }

        if (deqNode.left) {
            ++currentNodeChildCount;
            q.push(deqNode.left);

            if (shouldUpdateLevel) {
                levelPointer = deqNode.left;
                shouldUpdateLevel = false;
            }
        }

        if (deqNode.right) {
            ++currentNodeChildCount;
            q.push(deqNode.right);

            if (shouldUpdateLevel) {
                levelPointer = deqNode.right;
                shouldUpdateLevel = false;
            }
        }

        if ((currentNodeChildCount === 1) || 
            ((prevNodeLevel === currentNodeLevel) && (prevNodeChildCount !== currentNodeChildCount))) {
            isPerfect = false;
            break;
        }

        prevNodeChildCount = currentNodeChildCount;
        currentNodeChildCount = 0;

        prevNodeLevel = currentNodeLevel;
    }

    return isPerfect;
};
