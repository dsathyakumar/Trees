'use strict';

const {
  TreeNode
} = require('./treenode');

exports.arrayToBinaryTree = (arr) => {
    if (!arr.length) {
        console.log(`Array is empty`);
        return null;
    }

    const rootNode = new TreeNode(arr[0]);
    const q = [rootNode];

    // starting from 0th index of the array, this keeps the count over array index
    let count = 0;
    let deQNode = null;
    let leftIndex = -1;
    let rightIndex = -1;

    while (q.length) {
        // deQ from front
        deQNode = q.shift();

        // compute left and right indexes
        leftIndex = (2 * count) + 1;
        rightIndex = (2 * count) + 2;

        // if leftIndex is < array length &&
        // if the element dequed is NOT NULL &&
        // if the element at the leftIndex is NOT NULL, enQ
        if ((leftIndex < (arr.length))
            && (arr[leftIndex] !== null)
            && (deQNode !== null)) {
            deQNode.left = new TreeNode(arr[leftIndex]);
            q.push(deQNode.left); // enQ at Rear
        } else {
            if (leftIndex < arr.length) {
                q.push(null);
            }
        }

        // if rightIndex is < array length &&
        // if the element dequed is NOT NULL &&
        // if the element at the rightIndex is NOT NULL, enQ
        if ((rightIndex < (arr.length))
            && (arr[rightIndex] !== null)
            && (deQNode !== null)) {
            deQNode.right = new TreeNode(arr[rightIndex]);
            q.push(deQNode.right); // enQ at rear
        } else {
            // else just push a NULL
            if (rightIndex < arr.length) {
                q.push(null);
            }
        }

        ++count;
    }

    return rootNode;
};
