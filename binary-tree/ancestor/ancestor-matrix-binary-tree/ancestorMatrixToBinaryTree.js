'use strict';

const {
    BinaryTreeNode
} = require('../../treeNode');

/**
 * Constructs a Binary Tree for the given ancestor Matrix.
 * It can be assumed that atleast 1 tree can definitely be constructed from this
 * ancestor matrix. The question is not about whether or not a Binary Tree can be constructed.
 * 
 * Since we only have the ancestor matrix, there is a possibility that more than 1 Binary Tree
 * variant can be constructed from the ancestor Matrix. 
 * 
 * We are asked to construct any one that satisfies the given Ancestor Matrix.
 * 
 * Somethings to Note:
 * - Any Node corresponding to a rowIndex with the Row having all zeros is a LEAF.
 *      (The Node is an ancestor of no node => its a leaf)
 * - Any Node corresponding to a rowIndex with the Row having most number of ones is the ROOT.
 *      (The Node is an ancestor of many nodes => The root is the ancestor for every node, save itself)
 * - If the Nodes (numbered per rowIndexes) are grouped from smallest rowSum to largest rowSum
 *   Then, if two nodes A & B are both ancestors of Node C, and if Node A has a greater rowSum than
 *   Node B, then Node A gets filled at the end => Node B is the immediate ancestor or Lowest ancestor
 *   of Node C.
 * 
 * Here the tree creation is BOTTOM UP. The LEAF nodes are first filled, followed by ancestors.
 * The Root will be last to be filled, since we would be sorting rows in an ascending order
 * based on rowSums. Since the root has max Row sum, it will be processed last.
 * 
 * @param {Array} ancestorMatrix
 * @returns {BinaryTreeNode} root
 */
exports.ancestorMatrixToBinaryTree = ancestorMatrix => {
    // if its not an array or is empty, return
    if (!ancestorMatrix || !Array.isArray(ancestorMatrix)) {
        return;
    }

    // the size of the ancestorMatrix
    // Its usually a N X N matrix
    // So iteration is for N rows and for each row, there are N columns to iterate
    const size = ancestorMatrix.length;

    // create a map <Sum, [RowIndexes]>
    // For a given sum, there can be multiple rowIndexes that sum up to the same sum
    // In C++, there is a multi-map which can hold multiple keys of the same value
    // Such a thing isn't possible in JS. There can be only 1 key in JS.
    // So, since there are multiple rowIndexes having the same sum, for a given key
    // as sum, the rowIndex'es that map to it are put into an array
    const sumToRowIdxMap = {};

    let root = null;

    // Fill the sumToRowIdxMap
    for (let rowIdx = 0; rowIdx < size; rowIdx++) {
        let rowSum = 0;

        // For the given Row, compute sum of all column values
        for (let colIdx = 0; colIdx < size; colIdx++) {
            rowSum = rowSum + ancestorMatrix[rowIdx][colIdx];
        }

        if (!sumToRowIdxMap[rowSum]) {
            sumToRowIdxMap[rowSum] = [];
        }

        // store the current rowIdx mapped to its rowSum
        // note that their can be more than 1 rowIdx with the same value of sum
        sumToRowIdxMap[rowSum].push(rowIdx);
    }

    // A multimap type map in C++ stores the keys in sorted order
    // But JS doesn't guarantee the order in a sorted manner.
    // So, extracting out the key and sorting them
    const keysArr = Object.keys(sumToRowIdxMap);
    keysArr.sort();

    const flattenedSumToRowIdxArr = [];

    // iterate per the sorted order and flatten the map into an array
    // Note that the multi-map has multiple entries for same key (as individual entries)
    // In JS this is not possible. So we used an array. Now we are flattening the array
    // Since the keys are sorted, the least ones appear at the top as individual enrtries.
    // Note that the keys => rowSum
    // The values within the keys are the rowIndexes
    keysArr.forEach(key => {
        const valuesArray = sumToRowIdxMap[key];
        valuesArray.forEach(val => {
            flattenedSumToRowIdxArr.push({
                rowIdx: val,
                rowSum: key
            });
        });
    })

    // create an array representing the nodes.
    // This will hold info on whether or not the node has a parent
    const doesNodeHaveParent = new Array(size);
    doesNodeHaveParent.fill(0);
    Object.seal(doesNodeHaveParent);

    // create an array representing the nodes.
    // This will hold all the nodes.
    // The mapping is based on rowIndex <-> arrayIndex
    const nodesArray = new Array(size);
    nodesArray.fill(0);
    Object.seal(nodesArray);

    // for each item in the flattened array
    // each item is <rowSum, rowIndex>
    flattenedSumToRowIdxArr.forEach(sumRowIdxObjec => {
        const sum = sumRowIdxObjec.rowSum;
        const index = sumRowIdxObjec.rowIdx;

        // store the node into the nodesArray (by creating one)
        nodesArray[index] = new BinaryTreeNode(index);

        // assign this node as the root
        // if its not the root, it will get re-assigned
        // by doing this the Root node will be filled last
        // as the items are sorted and entry with max Row Sum will be filled last.
        root = nodesArray[index];

        // if the sum is zero => a LEAF
            // nothing to do, store the nodes in the nodes array & proceed.
        // if not, iterate the given rowIndex, over all its colums
            // if for any colums, there is a value of 1
                // it => current rowIndex is an ancestor of the node represented by the colIdx
                    // now if that node represented by colIdx, did not have an immediate ancestor
                    // which can checked in the parents Array (doesNodeHaveParent)
                        // then => current Node (represented by rowIndex) can be made an ancestor 
                        // of this node (represented by colIdx)
                        // look for an empty slot in node represented by rowIdx (either LEFT or RIGHt an assign it)
                    // set in the parent's array that this node has an ancestor
                    // (so that even if another node is a potential ancestor, it wont be filled / overriden)
        if (sum !== 0) {
            for (let colIdx = 0; colIdx < size; colIdx++) {
                if (!doesNodeHaveParent[colIdx] && ancestorMatrix[index][colIdx]) {
                    if (!nodesArray[index].left) {
                        nodesArray[index].left = nodesArray[colIdx];
                    } else {
                        nodesArray[index].right = nodesArray[colIdx];
                    }

                    // mark that the currentNode represented by colIdx has an ancestor parent
                    doesNodeHaveParent[colIdx] = 1;
                }
            }
        }

    });

    // last element will be the root as its the element with max Row sum.
    return root;
};
