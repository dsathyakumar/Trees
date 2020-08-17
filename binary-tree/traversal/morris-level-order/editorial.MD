## Morris Level-Order Traversal

> This is a form of stackless and Q-less traversal for a non-threaded binary Tree, that helps gaining a O(1) space complexity.

### What is the Need?
- Note that, the usual traversal for in-order and pre-order and post-order make use of a stack, mainly, to hold the ancestors along a path, so that, they can be re-visited later either to process the ancestor Node or to process their RIGHT subtrees. 
- In the same way, a level order traversal, makes use of a queue to hold the child Nodes of the next level. This has a space complexity of O(N). Morris traversal helps overcome that via some clever back links to ancestors, removing the need for a stack / Queue.

### Can Morris traversal (in-order) be extended over to a level order traversal?
Yes, they can be extended to perform level-order traversal, the only difference being the Nodes are going to be printed in the separate arrays (one per level of the level order traversal). Note that there is no separate algorithm for this. We use the in-order traversal and maintain a counter for the levels.

### The Steps for In Order Traversal is:
- Traverse each level and print the nodes of a level into a separate array.
- The final result is a 2D array, containing 1 array per level.
- The root is at level = 0

### How does morris travesal do this?
Morris traversal determines the in-order predecessor of a Node, to create a temp Back Link, so that these ancestor Nodes can be re-visited later, to process their RIGHT subtrees, once their LEFT subtrees are done processing.

For ex)
![image](https://user-images.githubusercontent.com/5446493/90345721-592cd480-dfe0-11ea-897b-ff4a8fc20b1e.png)

In this diagram, 

- Node E has a back link to Node A
- Node D has a back link to Node B
- To modify this for Level order traversal, we keep a `currentLevel` indicator. Every time a LEFT or RIGHT is traversed, the `currentLevel` is incremented.
- The only issue is when we are moving from a Node to a RIGHT which is an ancestor Node. Here we are going back up, but instead, we end up incrmenting the currentLevel, which is wrong. This has to be fixed.
- So we hold a counter called `retrace` that will count the number of steps to retrace back, from a predecessor to a given Node. For eg) when we have looped back to the ancestor Node B, from D. The current Level would be 4, instead of 1. To fix this, from Node B, compute the in-order predecessors. This would traverse from C to D, before realizing we have looped back to the same Node. So, from D, the number of steps to retrace would be 2.
- Now to fix the problem with `currentLevel`, which at B is now 4, we do, `currentLevel = currentLevel - (retrace + 1)`, i.e `currentLevel = 4 - (2 + 1)` which is 1. The + 1 here is to accomodate the incorrect traversal made from Node D, to the false temp link, to Node B.

### Steps for Morris Level order traversal.
It follows the usual Morris in-order traversal sequence, with this special case of looping back to ancestors (mentioned above, where the value of `currentLevel` has to be fixed.)
