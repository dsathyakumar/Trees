exports.inOrderRecursive = root => {
    const result = [];

    if (!root) {
      return result;
    }

    function recurse(node) {
        if (!node) {
          return;
        }

        recurse(node.left);
        result.push(node.val);
        recurse(node.right);

        return;
    }

    recurse(root);
    return result;
};
