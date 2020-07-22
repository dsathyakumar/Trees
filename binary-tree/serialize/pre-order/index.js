'use strict';

const {
    deserialize
} = require('./de-serialize');
const {
    serialize
} = require('./serialize');

exports.serializeViaPreOrder = serialize;
exports.deserializePreOrder = deserialize;
