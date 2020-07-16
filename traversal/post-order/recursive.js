exports.postOrderRecursive = root => {
    const result = [];

    if (!root) {
      return result;
    }

    function recurse(node) {
        if (!node) {
          return;
        }

        recurse(node.left);
        recurse(node.right);
        result.push(node.val);

        return;
    }

    recurse(root);

    return result;
};
