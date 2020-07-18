'use strict';

/**
 * Returns the Vertical Traversal Result of Binary Tree via Level order traversal.
 * @param {TreeNode} root
 */
exports.verticalLevelOrder = root => {
    const result = {};

    if (!root) {
        return result;
    }

    const nodeToDistanceMap = new Map();
    nodeToDistanceMap.set(root, 0);

    const q = [root];

    let deqNode = null;
    let hd;

    while (q.length) {
        deqNode = q.shift();
        hd = nodeToDistanceMap.get(deqNode);

        if (!result[hd]) {
            result[hd] = [];
        }

        result[hd].push(deqNode.val);

        // if LEFT, enQ & update its HD into the map
        if (deqNode.left) {
            q.push(deqNode.left);
            nodeToDistanceMap.set(deqNode.left, hd - 1);
        }

        // if RIGHT, enQ & update its HD into the map
        if (deqNode.right) {
            q.push(deqNode.right);
            nodeToDistanceMap.set(deqNode.right, hd + 1);
        }

        nodeToDistanceMap.delete(deqNode);
    }

    return result;
};
