'use strict';

/**
 * Returns the bottom view of the Binary Tree using Vertical Level order traversal.
 * @param {BinaryTreeNode} root
 * @returns {Array} result
 */
exports.bottomView = root => {
    const result = {};

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

        if (!result[hd]) {
            result[hd] = [];
        }
        result[hd].push(deqNode.val);

        // if LEFT, enQ in rear, updated HD and store in map
        if (deqNode.left) {
            q.push(deqNode.left);
            nodeToDistanceMap.set(deqNode.left, hd - 1);
        }

        // if RIGHT, enQ in rear, updated HD and store in map
        if (deqNode.right) {
            q.push(deqNode.right);
            nodeToDistanceMap.set(deqNode.right, hd + 1);
        }

        // delete the entry from the map.
        nodeToDistanceMap.delete(deqNode);
    }

    Object.keys(result).forEach(key => {
        result[key] = result[key][result[key].length - 1]
    });

    return result;
};
