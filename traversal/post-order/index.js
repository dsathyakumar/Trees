'use strict';

const {
    postOrderIterative
} = require('./iterative');
const {
    postOrderRecursive
} = require('./recursive');

exports.postOrderRecursive = postOrderRecursive;
exports.postOrderIterative = postOrderIterative;
