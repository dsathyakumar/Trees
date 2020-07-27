'use strict';

const {
    arrayToBinaryTree
} = require('../../../construct');

const {
    serializeViaLevelOrder,
    deserializeLevelOrder
} = require('../index')

const T_1 = arrayToBinaryTree([
    'A',
    'B', 'X',
    'C', 'D', null, null,
    null, 'F', null, 'E', null, null, null, null
]);

const S_T1 = serializeViaLevelOrder(T_1);
console.log(S_T1.length === 15);

const DS_T1 = deserializeLevelOrder(S_T1)
console.log(JSON.stringify(DS_T1, null, 3));
