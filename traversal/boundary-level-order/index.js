'use strict';

/**
 * Boundary Level order traversal. In this traversal,
 * - the first element of the level (starting boundary) is printed first,
 * - followed by last element (ending boundary).
 * - Then the process is repeated for the second and last-second element,
 * - till the complete level has been printed.
 * @param {TreeNode} root
 * @returns {Array} result
 */
exports.boundaryLevelOrder = root => {
    const result = [];

    if (!root) {
        return result;
    }

    const q = [root];

    let deqNode = null;
    let size = q.length;
    let levelTraversalArr;

    while (q.length) {
        levelTraversalArr = [];

        while (size !== 0) {
            deqNode = q.shift();

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
        size = q.length;
    }

    let ct = 0;

    while (ct < result.length) {
        let tempArr = [];

        for (let low = 0, high = (result[ct].length - 1); low <= high; low++, high--) {
            tempArr.push(result[ct][low]);
            if (low !== high) {
                tempArr.push(result[ct][high]);
            }
        }

        if (tempArr.length) {
            result[ct] = tempArr;
        }
        ++ct;
    }

    return result;
};
