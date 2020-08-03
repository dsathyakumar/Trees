'use strict';

exports.bfs = (root, val) => {
    if (!root) {
        console.warn(`Tree is empty!`);
        return;
    }

    if (!val) {
        console.warn(`Value To Search For is empty!`);
        return;
    }

    let doesValueExist = false;
    let deqNode = null;
    let q = [root];

    while (q.length) {
        deqNode = q.shift();

        if (deqNode.val === val) {
            doesValueExist = true;
            break;
        }

        if (deqNode.left) {
            q.push(deqNode.left);
        }

        if (deqNode.right) {
            q.push(deqNode.right);
        }
    }

    return doesValueExist;
};
