'use strict';

/**
 * In clockwise spiral traversal, the level 0 would be printed L->R (push)
 * This would be followed by the last level from R->L (unshift)
 * Then the level 1 from L->R
 * Then the (last level - 1) from R->L and so on.
 * The easy way is to use level order traversal and store the result in a 2D array.
 * 
 * @param {BinaryTreeNode} root
 * @returns {Array} result
 */
exports.spiralClockWise = root => {
    const result = [];

    if (!root) {
        return result;
    }

    const q = [root];

    let size = q.length;
    let levelTraversalArr;
    let level = 0;
    let deqNode = null;

    while (q.length) {
        levelTraversalArr = [];

        while (size !== 0) {
            deqNode = q.shift();

            // elements are filled in the level from L->R
            levelTraversalArr.push(deqNode.val);

            if (deqNode.left) {
                q.push(deqNode.left);
            }

            if (deqNode.right) {
                q.push(deqNode.right);
            }

            --size;
        }

        result.push(levelTraversalArr);

        if (!q.length) {
            break;
        }

        size = q.length;
        ++level;
    }

    let res = [];
    
    let low = 0;
    let high = level;

    // alternatively fills LOW and HIGH
    while (low < high) {
        // all levels are filled L->R (so no alteration needed for this result)
        res.push(result[low]);

        // when pushing the high row, they have to be reported R->L
        // so do a reverse iteration for high
        let temp = [];
        for (let ct = (result[high].length - 1); ct >= 0; ct--) {
            temp.push(result[high].pop());
        }

        res.push(temp);

        ++low;
        --high;
    }

    return res;
};
