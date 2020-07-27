'use strict';

/**
 * Return the serialized representation of a Binary Tree
 * based on having a BIT to represent internal nodes.
 * https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/SequentialRep.html
 * @param {BinaryTreeNode} root
 * @return {String} result
 */
exports.serialize = (root) => {
    if (!root) {
        return '/';
    }

    const result = [];
    const stack = [];

    let currentNode = root;
    let isInternal;
    let prevNode = null;

    while (currentNode) {
        isInternal = false;

        // check whether its an internal Node & push into stack
        if (currentNode.left !== null || currentNode.right !== null) {
            isInternal = true;
            stack.unshift(currentNode);
        }

        // include the prime bit ' to indicate if its an internal Node.
        result.push(currentNode.val + (isInternal ? "'" : ''));

        // if LEFT exists, process it.
        if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
        }

        // if its an internal Node and a LEFT did not exist,
        // account for it by including an empty indicator.
        if (isInternal) {
            result.push('/');
        }

        // if a RIGHT exists, process it.
        if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
        }

        // if it came here, RIGHT did not exist.
        // If its not a leaf node, then push a / to account for
        // empty RIGHT (this should never execute)
        // if (isInternal) {
        //     result.push('/');
        // }

        while (prevNode === null) {
            prevNode = stack[0];

            if (!prevNode) {
                currentNode = null;
                break;
            }

            if (prevNode.right && prevNode.right !== currentNode) {
                currentNode = prevNode.right;
                prevNode = null;
                break;
            }

            // A RIGHT isn't there, but a LEFT exists => internal Node
            // so push an empty indicator for the LEFt that isn't there.
            // This is done only if a RIGHt  isn't there (not for the case
            // where its already processed)
            if (!prevNode.right && prevNode.left) {
                result.push('/');
            }

            currentNode = stack.shift();
            prevNode = null;
        }
    }

    return result.toString();
};
