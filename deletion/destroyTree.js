'use strict';

exports.destroyTree = (root) => {
    if (!root) {
        return;
    }

    const stack = [];
    let currentNode = root;
    let prevNode = null;

    while (currentNode) {
        // if children, push current into stack
        if (currentNode.left || currentNode.right) {
            stack.unshift(currentNode);
        }

        // if LEFT, process LEFT
        if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
        }

        // if RIGHT, process RIGHT
        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }

        // LEAF node
        while (prevNode === null) {
            prevNode = stack[0];


            if (prevNode.left === currentNode) {

            }

        }

    }

    return;
}