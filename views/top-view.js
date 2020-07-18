'use strict';

/**
 * Returns the top view of the Binary Tree using Vertical Level order traversal
 * Vertical Level order Traversal results in nodes occupying the position properly
 * with respective to the levels.
 * @param {TreeNode} root
 * @returns {Array} result
 */
exports.topView = root => {
    const result = [];

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

    // pick the 1st value from every entry
    for (let count = 0; count < result.length; count++) {
        result[count] = result[count][0]
    }

    return result;
};
