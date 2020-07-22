
/**
 * Deletes a node in the given Tree.
 * Requires to perform Level order Traversal to grab the deepest rightmost node in the Binary Tree.
 * Via Level order Traversal.
 * - Replace the value of deepest right most node with the value of the node to be deleted.
 * - Delete the deepest right most node.
 * This deletes the node that has to be deleted and also tries to pull up the binary tree in terms
 * of reducing its height.
 * @param {BinaryTreeNode} root
 * @param {*} val
 */
exports.deleteNode = (root, val) => {
    // when root is null => empty tree => return
    if (!root) {
        return;
    }

    const q = [root];
    let deqNode = null;

    let parent = null;
    let nodeToBeDeleted = null
    let deepestRightMost = null;

    // proceed as long as Q is not empty!
    while (q.length) {
        // deQ from front
        deqNode = q.shift();

        // if the currently dequed Node's value equals the value of the node
        // we have to delete, store it
        if (deqNode.val === val && !nodeToBeDeleted) {
            nodeToBeDeleted = deqNode;
        }

        // if a child exists, then current Node is the new parent.
        if (deqNode.left || deqNode.right) {
            parent = deqNode;
        }

        // if LEFT exists, enQ LEFT
        if (deqNode.left) {
            q.push(deqNode.left);
        }

        // if RIGHT exists, enQ RIGHT
        if (deqNode.right) {
            q.push(deqNode.right);
        }

        // if the Q is empty, then current node is the deepest and right most
        // already its parent would be stored in parent referenece
        if (!q.length) {
            deepestRightMost = deqNode;
            break;
        }
    }

    nodeToBeDeleted.val = deepestRightMost.val;
    
    if (parent.left === deepestRightMost) {
        parent.left = null;
    } else {
        parent.right = null;
    }

    return root;
};
