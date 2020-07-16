'use strict';

exports.preOrderRecursive = root => {
    const result = [];

    if (!root) {
      return result;
    }

    function recurse(node) {
        if (!node) {
          return;
        }

        result.push(node.val);
        recurse(node.left);
        recurse(node.right);

        return;
    }

    recurse(root);

    return result;
};
