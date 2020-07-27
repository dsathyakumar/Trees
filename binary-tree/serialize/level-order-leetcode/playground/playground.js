'use strict';

const {
    lcDeSerialize,
    lcSerialize
} = require('../');

const {
    lcArrayToBinaryTree
} = require('../../../construct/array-binaryTree-leetcode/');

const T_1 = lcArrayToBinaryTree([
    'A',
    'B', 'C',
    null, 'D', 'E', 'F',
    null, null, 'G', null, 'H', 'I'
]);

const serialized_T_1 = lcSerialize(T_1);
const deSerialized_T_1 = lcDeSerialize(serialized_T_1);

const T_2 = lcArrayToBinaryTree([
    3,
    2, 4,
    1
]);

const serialized_T_2 = lcSerialize(T_2);
const deSerialized_T_2 = lcDeSerialize(serialized_T_2);

const T_3 = lcArrayToBinaryTree([
    1,
    6,2,
    7,5,null,null,
    8,null,6,4,
    7,9,null,null,3,5,
    null,null,10,8,4,2,null,null,
    9,11,null,null,1
]);

const serialized_T_3 = lcSerialize(T_3);
const deSerialized_T_3 = lcDeSerialize(serialized_T_3);

const T_4 = lcArrayToBinaryTree([
    'A',
    'B', 'C',
    'G', null, 'D', 'E',
    null, null, null, null, 'F', null
]);

const serialized_T_4 = lcSerialize(T_4);
const deSerialized_T_4 = lcDeSerialize(serialized_T_4);
