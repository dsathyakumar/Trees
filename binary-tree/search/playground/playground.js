'use strict';

const {
    lcArrayToBinaryTree
} = require('../../construct');

const {
    bfs
} = require('../bfs');

const {
    dfs
} = require('../dfs');

const T1 = lcArrayToBinaryTree([
    0,
    1, 2,
    3, 4, 5, 6,
    7, null, 8, 9
]);

console.log(bfs(T1, 9));
console.log(dfs(T1, 9));

console.log(bfs(T1, 22));
console.log(dfs(T1, 22));