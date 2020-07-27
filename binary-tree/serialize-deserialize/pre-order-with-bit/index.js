'use strict';

const {
    deserialize
} = require('./de-serialize');
const {
    serialize
} = require('./serialize');

exports.serializeViaPreOrderWithBit = serialize;
exports.deserializePreOrderWithBit = deserialize;
