'use strict';

exports.binaryTreeToMap = root => {
    if (!root) {
        return null;
    }
    return {
        val: root.val,
        left: node.left ? binaryTreeToNestedMap(node.left) : null,
        right: node.right ? binaryTreeToNestedMap(node.right) : null
    }
};
