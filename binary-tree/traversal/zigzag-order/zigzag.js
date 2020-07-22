'use strict';

/**
 * The ZigZag Level traversal is basically a level order traversal
 * where in the elements are filled from L->R in level 0
 * and R->L in the Level 1 and so on alternatively.
 * So even number levels would be filled L->R
 * Odd number levels would be filled R->L
 * In JS, the traversal would be the usual level order traversal.
 * But, while filling the result, for L->R traversal, we will push elements into the array
 * So, the 1st element of traversal from left, would be the 1st element in result array.
 * Bt, while filling the result for R->L, we will unshift elements into the array
 * causing the 1st element of the level (level order traversal) to move to the last position
 * @param {BinaryTreeNode} root
 * @returns {Array} result
 */
exports.zigzag = (root) => {
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

        result.push(levelTraversalArray);
        ++level;
        size = q.length;
    }

    return result;
};
