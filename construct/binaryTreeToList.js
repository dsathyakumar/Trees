'use strict';

exports.binaryTreeToList = root => {
    if (!root) {
        return [];
    }
    return [
        root.val,
        root.left ? binaryTreeToListOfLists(root.left) : [],
        root.right ? binaryTreeToListOfLists(root.right) : []
    ]
};