'use strict';

const {
    getEdgesCount
} = require('./edges-count');
const {
    getFullNodeCount
} = require('./full-node-count')
const {
    getHalfNodeCount
} = require('./half-node-count');
const {
    getInternalNodeCount
} = require('./internal-node-count');
const {
    getLeafNodeCount
} = require('./leaf-node-count');
const {
    getLevelCount
} = require('./levels-count');
const {
    getNodesCount
} = require('./nodes-count');


exports.getEdgesCount = getEdgesCount;
exports.getFullNodeCount = getFullNodeCount;
exports.getHalfNodeCount = getHalfNodeCount;
exports.getInternalNodeCount = getInternalNodeCount;
exports.getLeafNodeCount = getLeafNodeCount;
exports.getLevelCount = getLevelCount;
exports.getNodesCount = getNodesCount;
