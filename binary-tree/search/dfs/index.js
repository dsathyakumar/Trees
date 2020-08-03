'use strict';

exports.dfs = (root, val) => {
    if (!root) {
        console.warn(`Tree is empty!`);
        return;
    }

    if (!val) {
        console.warn(`Value To Search For is empty!`);
        return;
    }

    let doesValueExist = false;
    let currentNode = root;
    let prevNode = null;
    let stack = [];

    while (currentNode) {
        if (currentNode.val === val) {
            doesValueExist = true;
            break;
        }

        if (currentNode.left && currentNode.right) {
            stack.unshift(currentNode);
        }

        if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
        }

        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }

        prevNode = stack.shift();

        if (!prevNode) {
            break;
        }

        currentNode = prevNode.right;
    }
    
    return doesValueExist;
};
