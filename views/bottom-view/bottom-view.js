'use strict';

/**
 * Returns the bottom view of the Binary Tree using Vertical Level order traversal.
 * @param {TreeNode} root
 * @returns {Array} result
 */
exports.bottomView = root => {
    const result = [];

    if (!root) {
        return result;
    }

    const q = [root];

    let hd = 0;
    let deqNode = null;
    let nodeToDistanceMap = new Map();
    nodeToDistanceMap.set(root, 0);

    while (q.length) {
        deqNode = q.shift();

        hd = nodeToDistanceMap.get(deqNode);

        // if LEFT, enQ in rear, updated HD and store in map
        if (deqNode.left) {
            hd = hd - 1;
            q.push(deqNode.left);
            nodeToDistanceMap.set(deqNode.left, hd);
        }

        // if RIGHT, enQ in rear, updated HD and store in map
        if (deqNode.right) {
            hd = hd + 1;
            q.push(deqNode.right);
            nodeToDistanceMap.set(deqNode.right, hd);
        }

        // delete the entry from the map.
        nodeToDistanceMap.delete(deqNode);
    }

    // pick the last value from every entry
    for (let count = 0; count < result.length; count++) {
        result[count] = result[count][result[count].length - 1]
    }

    return result;
};
