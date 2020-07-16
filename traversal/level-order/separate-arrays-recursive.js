'use strict';

exports.separateArraysRecursive = root => {
  const result = [];

  if (!root) {
    return result;
  }

  let level = 0;
  let levelResult = [];

  function recurse(node, lvl, lvlResult) {
    if (!node) {
      return;
    }

    if (lvl === 0) {
      lvlResult.push(node.val);
      return true;
    }

    const left = recurse(node.left, lvl - 1, lvlResult);
    const right = recurse(node.right, lvl - 1, lvlResult);

    return (left || right);
  }

  while(recurse(root, level, levelResult)) {
    result.push(levelResult);
    levelResult = [];
    ++level;
  }

  return result;
};

