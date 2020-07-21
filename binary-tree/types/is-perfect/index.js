'use strict';

/**
 * Determines if a Binary Tree is a Perfect Binary Tree.
 * A Binary Tree is said to be a perfect Binary Tree when every Node has
 * either 0 or 2 children and all Leaf Nodes are at same level.
 * @param {TreeNode} root
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
