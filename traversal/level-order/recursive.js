'use strict';

exports.levelOrderRecursive = root => {
  const result = [];
  
  if (!root) {
    return result;
  }

  let level = 0;

  function recurse(node, lvl) {
    if (!node) {
      return;
    }

    if (lvl === 0) {
      result.push(node.val);
      return true;
    }

    return (
      recurse(node.left, lvl - 1)
      ||
      recurse(node.right, lvl - 1)
    );
  }

  while (recurse(root, level)) {
    ++level;
  }

  return result;
};
