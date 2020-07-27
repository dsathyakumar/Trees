'use strict';

const {
    arrayToBinaryTree,
    lcArrayToBinaryTree,
} = require('../../../construct');

const {
    serializeViaPreOrder,
    serializeMorrisPreOrder,
    deserializePreOrder
} = require('../index');

// wrong
// console.log(JSON.stringify(
//     deserializePreOrder('1,6,7,8,7,/,/,9,10,9,/,/,11,/,/,8,/,/,/,5,6,/,/,4,3,4,1,/,/,/,2,/,/,5,/,/,2,/,/')
//     , null, 3));

// console.log(JSON.stringify(
//     deserialize('1,6,7,8,7,/,/,9,10,9,/,/,11,/,/,8,/,/,/,5,6,/,/,4,3,4,1,/,/,/,2,/,/,5,/,/,2,/,/')
//     , null, 3));

// --------------------------------------------------------------

// Tree built with usual Level Order Traversal
const T_0 = arrayToBinaryTree([
    'A',
    'B', 'C',
    null, 'D', 'E', 'F',
    null, null, null, null, 'G', null, 'H', 'I'
]);

const S_T0_1 = serializeViaPreOrder(T_0);
console.log(S_T0_1);

const S_T0_2 = serializeMorrisPreOrder(T_0);
console.log(S_T0_2);

console.log(S_T0_1 === S_T0_2);

console.log(deserializePreOrder(S_T0_1));

// --------------------------------------------------------------

// Tree built with LC's efficient Binary Tree representation
const T_1 = lcArrayToBinaryTree([
    3,
    2, 4,
    1
]);
const s_T1 = serializeViaPreOrder(T_1);
console.log(s_T1);

const s_T2 = serializeMorrisPreOrder(T_1);
console.log(s_T2);

console.log(s_T2 === s_T1);

const ds_T1 = deserializePreOrder(s_T1);
console.log(ds_T1);

// --------------------------------------------------------------

// Tree built with usual Level Order Traversal
const T_2 = arrayToBinaryTree([
    'A',
    null, null
]);

const S_T2_1 = serializeViaPreOrder(T_2);
console.log(S_T2_1);

const S_T2_2 = serializeMorrisPreOrder(T_2);
console.log(S_T2_2);

console.log(S_T2_1 === S_T2_2);

console.log(deserializePreOrder(S_T2_1));

// --------------------------------------------------------------

const T_3 = lcArrayToBinaryTree([1,6,2,7,5,null,null,8,null,6,4,7,9,null,null,3,5,null,null,10,8,4,2,null,null,9,11,null,null,1]);

const S_T3_1 = serializeMorrisPreOrder(T_3);
console.log(S_T3_1);

const S_T3_2 = serializeViaPreOrder(T_3);
console.log(S_T3_2);

console.log(S_T3_1 === S_T3_2);

console.log(deserializePreOrder(S_T3_2));

// --------------------------------------------------------------