'use strict';

exports.binaryTreeToArray = root => {
  const result = [];

  if (!root) {
    return result;
  }

  const q = [root];
  let size = q.length;
  let deqNode;
  let hasNotNullNode = true;

  // level loop
  while (q.length && hasNotNullNode) {
      hasNotNullNode = false;
      // nodes in a level loop
      while (size !== 0) {
          deqNode = q.shift();

          result.push(deqNode ? deqNode.val : null);

          if ((!hasNotNullNode) && (deqNode) && (deqNode.left || deqNode.right)) {
            hasNotNullNode = true;
          }

          if (deqNode && deqNode.left) {
            q.push(deqNode.left)
          } else {
            q.push(null);
          }

          if (deqNode && deqNode.right) {
            q.push(deqNode.right);
          } else {
            q.push(null);
          }

          --size;
      }
      size = q.length;
  }

  return result;
};
