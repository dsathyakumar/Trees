'use strict';

const {
    arrayToBinaryTree
} = require('../../../construct');

const {
    serializeViaPreOrder,
    serializeMorrisPreOrder
} = require('../index')

const T_1 = arrayToBinaryTree([
    'A',
    'B', 'C',
    null, 'D', 'E', 'F',
    null, null, null, null, 'G', null, 'H', 'I'
]);

const S_T1_1 = serializeViaPreOrder(T_1);
console.log(S_T1_1);

const S_T1_2 = serializeMorrisPreOrder(T_1);
console.log(S_T1_2);

const T_2 = arrayToBinaryTree([
    'A',
    null, null
]);

const S_T2_1 = serializeViaPreOrder(T_2);
console.log(S_T2_1);

const S_T2_2 = serializeMorrisPreOrder(T_2);
console.log(S_T2_2);

// const DS_T1 = deserializeLevelOrder(S_T1)
// console.log(JSON.stringify(DS_T1, null, 3));
