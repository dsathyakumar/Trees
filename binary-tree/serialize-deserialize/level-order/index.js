'use strict';

const {
    deserialize
} = require('./de-serialize');
const {
    serialize
} = require('./serialize');

exports.serializeViaLevelOrder = serialize;
exports.deserializeLevelOrder = deserialize;
