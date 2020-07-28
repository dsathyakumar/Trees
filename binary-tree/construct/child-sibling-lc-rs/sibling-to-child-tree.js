'use strict';

/**
 * Converts the LC-RS representation of Binary Tree, back to the Binary tree
 * Linked Representation of Left child - Right Child.
 * 
 * The only issue being, that, while converting Binary Tree (from Left Child Right Child)
 * Linked Representation to LC-RS representation, if only a RIGHT Child was present,
 * this was converted to LEFT CHILD. So while converting back, we really cannot say
 * for sure if the LEFT child present was originally a LEFT or a RIGHT.
 * 
 * To recover back the original tree, we may need more info like either both the Pre-order
 * and in-order traversal info of the Tree or the pre-order serialized representation of tree
 * with info on leaf nodes and null nodes.
 * 
 * For a binary tree this actually makes no difference. This LC-RS representation
 * is originally used to convert a m-ary tree to a Binary Tree and apply all
 * Binary Tree stuff to an m-ary tree. So, even in such cases, it makes no difference.
 * 
 * Note that this transform is also called Knuth Transform. The trees so formed
 * are also called Doubly Chained trees.
 * 
 * @param {BinaryTreeNode} root (LC-RS)
 * @returns {BinaryTreeNode} root (LC-RC)
 */
exports.siblingToChildTree = root => {
    if (!root) {
        return;
    }

    // if a RIGHT exists for a NODE, then it means that this RIGHT
    // originally belonged to its parent & is currently the RIGHT sibling
    // of the given Node.

    let currentNode = root;
    const stack = [];
    let prevNode = null;

    while (currentNode) {
        // if a NODE has a LEFT, process it
        if (currentNode.left) {
            if (currentNode.left.right) {
                currentNode.right = currentNode.left.right;
                currentNode.left.right = null;
                stack.unshift(currentNode);
            }

            currentNode = currentNode.left;
            continue;
        }

        // if any previous Node's exist, they ought to have a RIGHT
        // as they were pushed into the stack only after the RIGHT was added
        // from the LEFT child.
        while (!prevNode) {
            prevNode = stack.shift();

            if (!prevNode) {
                currentNode = prevNode;
                break;
            }

            if (prevNode.right) {
                currentNode = prevNode.right;
                prevNode = null;
                break;
            }
        }
    }

    return root;
};
