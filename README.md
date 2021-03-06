## Trees

### Topics
1. **Construction of Binary Tree (from a specific representation to its Linked representation & back)**
    - [Convert from Array Representation of Binary Tree to a Binary Tree & back (based on Level Order Traversal representation of complete binary tree)](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/construct/array-binaryTree)
    - [Convert from Array Representation of Binary Tree to a Binary Tree & back (based on LeetCode's Level Order Traversal representation of binary tree)](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/construct/array-binaryTree-leetcode)
    - [Convert Nested Lists representation of Binary Tree to a Binary Tree & back](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/construct/list-binaryTree) based on [Tree Representation by BradFieldCS](https://bradfieldcs.com/algos/trees/representing-a-tree/)
    - [Convert Map representation of Binary Tree & back](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/construct/map-binaryTree) based on [Tree Representation by BradFieldCS](https://bradfieldcs.com/algos/trees/representing-a-tree/)
    - [Convert BinaryTreeNode to Left-Child & Right-Sibling representation & back (LC - RS)](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/construct/child-sibling-lc-rs)
2. **Traversals of a Binary Tree**
    - _InOrder_
        - [Recursive](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/traversal/in-order/recursive.js)
        - [Iterative](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/traversal/in-order/iterative.js)
    - _Pre-order_
        - [Recursive](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/traversal/pre-order/recursive.js)
        - [Iterative](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/traversal/pre-order/iterative.js)
    - _Post-order_
        - [Recursive](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/traversal/post-order/recursive.js)
        - [Iterative](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/traversal/post-order/iterative.js)
    - _Level-order_
        - [Iterative](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/traversal/level-order/iterative.js)
        - [Recursive](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/traversal/level-order/recursive.js)
        - Reverse Level order traversal
    - _Levels into separate arrays_
        - [Iterative](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/traversal/level-order/separate-arrays-iterative.js)
        - [Recursive](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/traversal/level-order/separate-arrays-recursive.js)
    - zigzag-order
        - Zigzag (Horizontal)
        - Zigzag inverse (Horizontal)
        - ZigZag Reverse (Horizontal)
        - Vertical ZigZag (Horizontal)
    - spiral-order
        - Clockwise
        - AntiClockwise
        - Clockwise Reverse
        - Anti-ClockWise Reverse
    - vertical-order
        - Same row & column with order from left to right
        - Same row & column with order of smaller value reported first.
    - diagonal-order
        - slope = -1 line
        - slope = +1 line
    - boundary-level-order
    - left-right traversal
    - triangular traversal
    - middle to up-down order traversal
    - sideways traversal
    - [Morris in-order traversal](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/traversal/morris-in-order)
    - [Morris pre-order traversal](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/traversal/morris-pre-order)
    - [Morris post-order traversal](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/traversal/morris-post-order)
    - [Morris level-order traversal](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/traversal/morris-level-order)
3. **Insertion (of a Node into a Binary Tree)**
    - [Insertion of Node to Binary Tree via Level Order Traversal](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/insertion)
4. **[Deletion](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/deletion)**
    - [Deletion of a Node](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/deletion/deleteNode.js) from Binary Tree via the Deepest and RightMost Node swap approach
    - [Destroy the Binary Tree](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/deletion/destroyTree.js) via Post order traversal
5. **Views of a Binary Tree**
    - [Top View](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/views/top-view)
    - [Left View](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/views/left-view)
    - [Right View](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/views/right-view)
    - [Bottom View](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/views/bottom-view)
6. **Height / Depth of tree**
    - Max Height / Depth of Tree (Recursive top-down)
    - Max Height / Depth of Tree (Recursive bottom-up)
    - Min Height / Depth of Tree (Iterative)
7. **Width of tree**
8. **Diameter of tree**
9. **Counts**
    - [Number of leaf nodes](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/counts/leaf-node-count.js) (terminal or external nodes - nodes without children)
    - [Number of full nodes](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/counts/full-node-count.js) (those that have both LEFT and RIGHT subtrees)
    - [Number of half nodes](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/counts/half-node-count.js) (those that have either LEFT or RIGHT subtrees)
    - [Number of internal nodes](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/counts/internal-node-count.js) (non-terminal / non-leaf nodes)
    - [Number of levels](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/counts/levels-count.js)
    - [Number of edges](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/counts/edges-count.js)
    - [Number of nodes](https://github.com/dsathyakumar/Trees/blob/master/binary-tree/counts/nodes-count.js)
    - Sum of all nodes
10. **Check if binary tree is height Balanced.**
11. **Convert N-ary tree to Binary Tree and back.**
12. **Serialize Binary Tree**
    - [Serialize via pre-order traversal with info on Leaf Nodes and Null Child Nodes & de-serialize](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/serialize-deserialize/pre-order)
    - [Serialize via pre-order traversal with info on internal Nodes and external Nodes & de-serialize](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/serialize-deserialize/pre-order-with-bit)
    - [Serialize via level-order traversal of Complete Binary tree & de-serialize](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/serialize-deserialize/level-order)
    - [Serialize via level-order traversal of Binary tree, per leetcode representation & de-serialize](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/serialize-deserialize/level-order-leetcode)
13. **Serialize N-ary tree.**
14. **Structural (changes to the structure of the Binary Tree - specific structural observations, checks and changes)**
    - [Invert a Binary Tree](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/structural/invert)
15. **Search**
    - [BFS](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/search/bfs) via Level order Traversal
    - [DFS](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/search/dfs) via pre-order traversal
16. **Binary Tree type checks**
    - [isHeightBalanced](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/types/is-height-balanced)
    - [isFull](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/types/is-full)
    - [isPerfect](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/types/is-perfect)
    - [isComplete](https://github.com/dsathyakumar/Trees/tree/master/binary-tree/types/is-complete)
    - isSkewed
    - isIdentical
    - isIsomorphic
    - isSymmetrical
    - isQuasiIsoMorphic
