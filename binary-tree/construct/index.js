'use strict';

const {
  arrayToBinaryTree,
  binaryTreeToArray
} = require('./array-binaryTree/');

const {
  mapToBinaryTree,
  binaryTreeToMap
} = require('./map-binaryTree')

const {
  listToBinaryTree,
  binaryTreeToList
} = require('./list-binaryTree');

exports.binaryTreeToArray = binaryTreeToArray;
exports.arrayToBinaryTree = arrayToBinaryTree;

exports.mapToBinaryTree = mapToBinaryTree;
exports.binaryTreeToMap = binaryTreeToMap;

exports.listToBinaryTree = listToBinaryTree;
exports.binaryTreeToList = binaryTreeToList;
