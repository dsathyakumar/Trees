'use strict';

const {
    BinaryTreeNode
} = require('../../treeNode');

exports.deserialize = data => {
    if (!data.length) {
        return null;
    }

    data = data.split(',');

    const root = new BinaryTreeNode(data[0]);
    const q = [root];

    // pointer to current index of the data array
    let count = 0;

    // dequable node
    let deqNode = null;

    // childIndexes of current Node (whose index is indicated by count)
    let leftIdx = 0;
    let rightIdx = 0;

    while (q.length) {
        deqNode = q.shift();

        leftIdx = (2 * count) + 1;
        rightIdx = (2 * count) + 2;

        if (deqNode
            && (leftIdx < data.length)
            && (data[leftIdx] !== '/')) {
            deqNode.left = new BinaryTreeNode(data[leftIdx]);
            q.push(deqNode.left);
        } else {
            if (leftIdx < data.length) {
                q.push(null);
            }
        }

        if (deqNode
            && (rightIdx < data.length)
            && (data[rightIdx] !== '/')) {
            deqNode.right = new BinaryTreeNode(data[rightIdx]);
            q.push(deqNode.right);
        } else {
            if (rightIdx < data.length) {
                q.push(null);
            }
        }

        ++count;
    }

    return root;
};
