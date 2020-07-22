/**
 * Does an iterative level order traversal, but reports the nodes of
 * every level into its own separate arrays
 * @param {BinaryTreeNode} root
 */
exports.levelOrderIntoSeparateArrays = (root) => {
    let result = [];

    // if tree is empty, return
    if (!root) {
        return [];
    }

    // Starts with storing root into Q
    const q = [root];

    // size of the current snapshot of the q
    // there can be other elements pushed into the Q from Rear
    // but we are always interested in current snapshot as it contains
    // count of number of elements in current level being iterated.
    let size = q.length;

    // the node being deQ'd from the Q at any point
    let deqNode = null;

    // stores the nodes of any given level, at any instant
    let level;

    // as long as Q is not empty
    // outer loop runs for N levels
    while (q.length) {
        // every level gets a new array to store elements of its level
        level = [];

        // iterate for the current snapshot of the q
        // => iterates (2 ^ level) times as each level has (2^level) nodes
        // fr eg) level = 0 (root node) has 2 ^ 0 = 1 node
        while (size !== 0) {
            // deQ from front of q
            deqNode = q.shift();

            // push deQNode's value into the level
            level.push(deqNode.val);

            // if LEFT, enQ in Rear
            if (deqNode.left) {
                q.push(deqNode.left);
            }

            // if RIGHT, enQ in Rear
            if (deqNode.right) {
                q.push(deqNode.right);
            }

            // decrement current snapshot as elements of current
            // level are being deQ'd
            --size;
        }

        // push current level into result
        result.push(level);

        // reset the size of Q to the current size of q
        // this size comprises of child nodes of the current level
        size = q.length;
    }

    return result;
};
