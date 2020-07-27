'use strict';

const {
    deserialize
} = require('./de-serialize');

const {
    serialize
} = require('./serialize');

exports.lcSerialize = serialize;
exports.lcDeSerialize = deserialize;
