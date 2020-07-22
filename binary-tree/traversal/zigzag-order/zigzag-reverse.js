'use strict';
/**
 * The ZigZag level reverse is same as the ZigZag type traversal,
 * Even levels are reports L->R
 * Odd levels are reported R->L
 * except that the results are reported backwards, from the bottom level starting first.
 * For this, we use the usual level order traversal, filling elements
 * L->R in the result array, for even levels
 * R->L in the result array, for odd levels
 * @param {BinaryTreeNode} root
 */
exports.zigzagReverse = root => {
    const result = [];

    if (!root) {
        return result;
    }

    const q = [root];

    let deqNode = null;
    let level = 0
    let levelTraversalArray;
    let size = q.length;

    while (q.length) {
        levelTraversalArray = [];

        while (size !== 0) {
            // deQ from front
            deqNode = q.shift();

            // For even levels report results L->R
            // For odd levels, report results R->L
            if (level % 2 === 0) {
                levelTraversalArray.push(deqNode.val);
            } else {
                levelTraversalArray.unshift(deqNode.val);
            }

            // if LEFT, enQ
            if (deqNode.left) {
                q.push(deqNode.left);
            }

            // if RIGHT, enQ
            if (deqNode.right) {
                q.push(deqNode.right);
            }

            --size;
        }

        result.unshift(levelTraversalArray);
        ++level;
        size = q.length;
    }

    return result;
};
