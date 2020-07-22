'use strict';

/*
* Level-Order Traversal
* Process Nodes Level Wise (Root is at Level = 0)
* @param {BinaryTreeNode} root
**/
const levelOrderIterative = (root) => {
    const result = [];

    // empty tree
    if (!root) {
        return result;
    }

    // uses a Q to store
    const q = [root];
    let deqNode = null;

    // proceed as long as Q is not empty
    while (q.length) {
        // deQ from front
        deqNode = q.shift();

        // process NODE
        result.push(deqNode.val || deqNode.data);

        // if LEFT, enQ LEFT in rear
        if (deqNode.left) {
            q.push(deqNode.left);
        }

        // if RIGHT, enQ RIGHT in rear
        if (deqNode.right) {
            q.push(deqNode.right);
        }
    }
    return result;
}

exports.levelOrderIterative = levelOrderIterative;
