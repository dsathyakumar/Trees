const {
  arrayToBinaryTree,
  binaryTreeToArray
} = require('./construct');

const {
  deleteNode,
  destroyTree
} = require('./deletion');

const {
    preOrderRecursive,
    preOrderIterative
} = require('./traversal')

//-------- Convert Array to Binary Tree ----------
const T_1 = arrayToBinaryTree([
  3,
  null,
  4,
  null,
  null,
  null,
  5,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  6
]);

console.log(JSON.stringify(T_1, null, 3));

//--------- Convert Binary Tree Back to Array -------
const A_1 = binaryTreeToArray(T_1);
console.log(A_1);

// --------- Delete Node -----------
const T_2 = deleteNode(T_1, 4);
console.log(JSON.stringify(T_2, null, 3));

const T_3 = arrayToBinaryTree([
  'A',
  'B', 'C',
  null, null, 'D', 'E',
  null, null, null, null, null, null, 'F', null
]);
console.log(JSON.stringify(T_3, null, 3));

const T_4 = deleteNode(T_3, 'B');
console.log(JSON.stringify(T_3, null, 3));

// ----------- Inserting a node


