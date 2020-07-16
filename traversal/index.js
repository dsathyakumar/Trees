'use strict';

const {
    preOrderRecursive,
    preOrderIterative
} = require('./pre-order');
const {
    inOrderRecursive,
    inOrderIterative
} = require('./in-order');
const {
    postOrderRecursive,
    postOrderIterative
} = require('./post-order');
const {
    levelOrderIterative,
    levelOrderRecursive,
    levelOrderIntoSeparateArrays,
    separateArraysRecursive
} = require('./level-order');

exports.preOrderRecursive = preOrderRecursive;
exports.preOrderIterative = preOrderIterative;

exports.inOrderRecursive = inOrderRecursive;
exports.inOrderIterative = inOrderIterative;

exports.postOrderRecursive = postOrderRecursive;
exports.postOrderIterative = postOrderIterative;

exports.levelOrderIterative = levelOrderIterative;
exports.levelOrderRecursive = levelOrderRecursive;
exports.levelOrderIntoSeparateArrays = levelOrderIntoSeparateArrays;
exports.separateArraysRecursive = separateArraysRecursive;