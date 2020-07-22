'use strict';

exports.insertNode = (root, val) => {
    // when root is null => empty tree => return
    if (!root) {
        return false;
    }

    // when value is empty, nothing to insert, return
    if (!val) {
        return false;
    }

    // enQ root
    const q = [root];
    let deqNode = null;

    // proceed as long as Q is not empty!
    while (q.length) {
        // deQ from the front
        deqNode = q.shift();

        // if LEFT, enQ in rear.
        // if not, insert node to the left
        // break
        if (deqNode.left) {
            q.push(deqNode.left);
        } else {
            deqNode.left = new BinaryTreeNode(val);
            break;
        }

        // if RIGHT, enQ in rear.
        // if not, insert node to the right
        // break
        if (deqNode.right) {
            q.push(deqNode.right);
        } else {
            deqNode.right = new BinaryTreeNode(val);
            break;
        }
    }

    // release memory of any enQ'd nodes
    q = null;

    return true;
};