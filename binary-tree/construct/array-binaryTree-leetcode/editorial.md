## Array To Binary Tree (based on LeetCode's Binary Tree visualizer)

### What is this representation?

This representation is based on Leet Code's [Binary Tree Visualizer](https://support.leetcode.com/hc/en-us/articles/360011883654-What-does-1-null-2-3-mean-in-binary-tree-representation-)

For example, this would have the following representation for the following tree:

![image](https://user-images.githubusercontent.com/5446493/88489193-239c4a80-cf50-11ea-8dda-b548933b77c4.png)

### What is the usual Level Order Representation ?

This representation differs from the usual Level Order representation of a Binary Tree (per the complete Binary Tree representation).

In the usual Level Order Representation of a Complete Binary Tree

- For an index i, its Left Child can be found at (2 * i) + 1
- For an index i, its Right Child can be found at (2 * i) + 2
- For a Node at index i of the array, its parent can be found at Math.floor((i-1)/2)

A **complete Binary Tree** is one where:
- Every Node has 0 or 2 children
- All levels save perhaps the last level is completely filled
- The Last Level is filled left most (a Left has to be filled before a Right is filled)

This implementation does not skip over NULL nodes.
A NULL when enQ'd will have further references to NULL only (which can be optimized)
So, this representation ends up causing a huge number of NULL's being included (used to represent NULL nodes)

### How the Leet code representation differs from the usual Level Order representation?
While a normal flattening via Level Order traversal, tends to maintain node positions and filling in NULL nodes per the definition of complete binary Tree, 
LeetCode follows a flattening pattern where:
- A leaf node at Level N, would contribute 2 NULL nodes to Level (N+1)
- A NULL node in Level N would no longer contribute further NULL nodes to Level (N+1)
- An empty LEFT or RIGHT of a Node in level N would contribute to a NULL node in Level (N+1)
- So if a Level (N+1) had NULL, its actually from NON-NULL parent Nodes in Level N (which could either be a LEAF or a HALF node).
- Any Level N can have a max of 2 ^ N nodes (if all Nodes in previous level N- 1 were filled), starting with `level=0` belonging to the root Node
- If the Last level was reached and the last valid Child Node is reached, other NULL child nodes at same level are no longer filled.

For eg)

![image](https://user-images.githubusercontent.com/5446493/88489579-42034580-cf52-11ea-9470-0bd396417596.png)

This ends up with a Representation as:

```javascript
[
    1,
    6,2,
    7,5,null,null,
    8,null,6,4,
    7,9,null,null,3,5,
    null,null,10,8,4,2,null,null,
    9,11,null,null,1
]
```

The need for checking out this came with the LC Problem [Serialize and De-serialize a Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/).
With Leet Code using this kind of representation, it caused some issues with the solution which was attempted via the usual Level Order Traversal.

### Difference with an example:
