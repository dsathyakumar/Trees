'use strict';

/**
 * Returns the top view of the Binary Tree using Vertical Level order traversal
 * Vertical Level order Traversal results in nodes occupying the position properly
 * with respective to the levels.
 * @param {TreeNode} root
 * @returns {Array} result
 */
exports.topView = root => {
    const result = {};

    if (!root) {
        return result;
    }

    // Q to temporarily store
    const q = [root];

    // horizontal distance
    let hd = 0;
    let deqNode = null;

    // map to temporarily store the distance of nodes.
    let nodeToDistanceMap = new Map();
    nodeToDistanceMap.set(root, 0);

    while (q.length) {
        // deq from front
        deqNode = q.shift();

        // get the node's hd from map
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
        result[key] = result[key][0];
    })

    return result;
};
