'use strict';

const {
    deserialize
} = require('./de-serialize');
const {
    serialize,
    serializeMorrisPreOrder
} = require('./serialize');

exports.serializeViaPreOrder = serialize;
exports.deserializePreOrder = deserialize;
exports.serializeMorrisPreOrder = serializeMorrisPreOrder;
