'use strict';

exports.getLevelCount = root => {
    // levels usually begin from level 0 onwards
    // but here the count is needed, not level number.
    let levelCount = 0;

    if (!root) {
        return levelCount;
    }

    const q = [root];

    let deqNode = null;
    let levelPointer = root;
    let shouldUpdatePointer = false;

    while (q.length) {
        deqNode = q.shift();

        if (deqNode === levelPointer) {
            ++levelCount;
            shouldUpdatePointer = true;
        }

        if (deqNode.left) {
            q.push(deqNode.left);

            if (shouldUpdatePointer) {
                levelPointer = deqNode.left;
                shouldUpdatePointer = false;
            }
        }

        if (deqNode.right) {
            q.push(deqNode.right);

            if (shouldUpdatePointer) {
                levelPointer = deqNode.right;
                shouldUpdatePointer = false;
            }
        }
    }

    return levelCount;
};
