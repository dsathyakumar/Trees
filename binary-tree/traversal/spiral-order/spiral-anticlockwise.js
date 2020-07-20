'use strict';

exports.spiralAntiClockWise = root => {
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

            // elements are filled in the level from R->L
            levelTraversalArr.unshift(deqNode.val);

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
        // when pushing the high row, they have to be reported R->L
        // so do a reverse iteration for high
        let temp = [];
        for (let ct = 0; ct < result[low].length; ct++) {
            temp.push(result[high].shift());
        }

        res.push(temp);

        // all levels are filled R->L (so no alteration needed for this result)
        res.push(result[high]);

        ++low;
        --high;
    }

    return res;
};
