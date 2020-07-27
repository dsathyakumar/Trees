'use strict';

const {
    serializeViaPreOrderWithBit,
    deserializePreOrderWithBit
} = require('../index');

const {
    lcArrayToBinaryTree,
    arrayToBinaryTree
} = require('../../../construct');

// Tree built with usual Level Order Traversal
const T_0 = arrayToBinaryTree([
    'A',
    'B', 'C',
    null, 'D', 'E', 'F',
    null, null, null, null, 'G', null, 'H', 'I'
]);

const S_T0_1 = serializeViaPreOrderWithBit(T_0);
console.log(S_T0_1);

console.log(deserializePreOrderWithBit(S_T0_1));

// --------------------------------------------------------------

// Tree built with LC's efficient Binary Tree representation
const T_1 = lcArrayToBinaryTree([
    3,
    2, 4,
    1
]);
const s_T1 = serializeViaPreOrderWithBit(T_1);
console.log(s_T1);

const ds_T1 = deserializePreOrderWithBit(s_T1);
console.log(ds_T1);

// --------------------------------------------------------------

// Tree built with usual Level Order Traversal
const T_2 = arrayToBinaryTree([
    'A',
    null, null
]);

const S_T2_1 = serializeViaPreOrderWithBit(T_2);
console.log(S_T2_1);

console.log(deserializePreOrderWithBit(S_T2_1));

// --------------------------------------------------------------

const T_3 = lcArrayToBinaryTree([1,6,2,7,5,null,null,8,null,6,4,7,9,null,null,3,5,null,null,10,8,4,2,null,null,9,11,null,null,1]);

const S_T3_1 = serializeViaPreOrderWithBit(T_3);
console.log(S_T3_1);

console.log(deserializePreOrderWithBit(S_T3_1));

// --------------------------------------------------------------