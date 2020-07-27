'use strict';

const {
    BinaryTreeNode
} = require("../../treeNode");

/**
 * De-Serializes a Pre-order BIT based Binary Tree representation
 * back to the Linked (Root - Left Child + Right Child) representation.
 * Fr eg) A' B' / D C' E' G / F' H I
 * 
 * The key is:
 * - Left child becomes a LEAF to current Parent.
 * - Right Child becomes a LEAF to current Parent.
 * 
 * @param {String} data
 * @returns {BinaryTreeNode} root
 */
exports.deserialize = data => {
    // if its an empty tree
    if (data[0].length === 1 && data[0] === '/') {
        return null;
    }

    data = data.split(',');

    let root;
    const stack = [];

    let current = data.shift();
    let isLeft = true;
    let isInternal = false;
    let parentNode = null;

    while (current) {
        // determine if the current value represents an internal node or not.
        if (current.charAt(current.length - 1) === "'") {
            isInternal = true;
            current = current.substring(0, current.length - 1);
        }

        if (isInternal) {
            if (current !== '/') {
                // create the Node for the current element
                current = new BinaryTreeNode(current);

                if (parentNode) {
                    if (isLeft) {
                        parentNode.left = current;
                        stack.unshift(parentNode);
                    } else {
                        parentNode.right = current;
                        isLeft = true;
                    }
                } else {
                    root = current;
                }
                parentNode = current;
            } else {
                if (isLeft) {
                    isLeft = false;
                } else {
                    parentNode = stack.shift();
                }
            }
        } else {
            if (parentNode) {
                if (isLeft) {
                    isLeft = false;
                    
                    if (current !== '/') {
                        parentNode.left = new BinaryTreeNode(current);
                    }
                } else {
                    if (current !== '/') {
                        parentNode.right = new BinaryTreeNode(current);
                    }

                    parentNode = stack.shift();
                }
            } else {
                root = new BinaryTreeNode(current);
            }
        }

        current = data.shift();
        isInternal = false;
    }

    return root;
};
