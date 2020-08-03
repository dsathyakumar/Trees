'use strict';

const {
    lcArrayToBinaryTree
} = require('../../../construct');

const {
    printAncestorsIteratively,
    printAncestorsRecursively
} = require('../');

const T1 = lcArrayToBinaryTree([
    1,
    2, 3,
    4, 5, 6, 7,
    null, null, null, null, 8, null, null, 9
]);
const recursiveAncestorList = printAncestorsRecursively(T1, 7);
const iterativeAncestorList = printAncestorsIteratively(T1, 7);
