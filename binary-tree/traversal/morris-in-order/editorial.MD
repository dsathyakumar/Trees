## Morris In-Order Traversal

> This is a form of stackless and Q-less traversal for a non-threaded binary Tree, that helps gaining a O(1) space complexity.

### What is the Need?
Note that, the usual traversal for in-order and pre-order and post-order make use of a stack, mainly, to hold the ancestors along a path, so that, they can be re-visited later either to process the ancestor Node or to process their RIGHT subtrees. In the same way, a level order traversal, makes use of a queue to hold the child Nodes of the next level. This has a space complexity of O(N). Morris traversal helps overcome that via some clever back links to ancestors, removing the need for a stack / Queue.

### Can Morris traversal (in-order) be extended over to a pre-order traversal?
Yes, they can be extended to perform pre-order traversal, the only difference being
the Nodes are going to be printed in the pre-order fashion.

### The Steps for In Order Traversal is:
- its LEFT, ROOT, RIGHT
- note that the LEFT has to be processed 1st, then the Node and then the  RIGHT.

### How does morris travesal do this?
Morris traversal determines the in-order predecessor of a Node, to create a temp Back Link, so that these ancestor Nodes can be re-visited later, to process their RIGHT subtrees, once their LEFT subtrees are done processing.

For ex)
![image](https://user-images.githubusercontent.com/5446493/90345721-592cd480-dfe0-11ea-897b-ff4a8fc20b1e.png)

In this diagram, 

- Node E has a back link to Node A
- Nodee D has a back link to Node B
- So, using these back links, once Node E and Node D are done processing, these back links are used, to reach ancestors, that have to be processed for their RIGHT subtrees.

### How Does Morris Traversal prevent the infinite cycle or loop of processing same set of Nodes, now that they're cyclic.
- When starting at Node B, for the sequence B -> C -> D -> E, its continuously checked, if the Node's RIGHT is same as the starting Node B. This happens at E. Thus, we know that this is a cyclic loop.
- When we reach back the starting Node B, in the cyclic loop, then, the traversal of LEFT subtree is considered complete. This is because, only upon, 1st traversal of Node B, is the temp link created.
- Node B is reached back again, from a decesendant, meaning, all its LEFT subtrees are done processing. So this temp back LINK can be broken, and its RIGHT subtree can be processed.

### The Steps for Morris In Order Traversal is:
For any **Node A** of the Binary Tree (currentNode in iteration),

1) **If LEFT exists:**
    If LEFT exists, proceed to find the in-order predecessor (create Link between in-order predecessor and the currentNode)

    - For this, go to the LEFT Child of Node A,

    - With the LEFT child as starting point, proceed to traverse down the RIGHT subtree of the LEFT child. That is, start going down the RIGHT subtree of the LEFT child, until you hit a NULL child Node.

    - The **Node X** whose RIGHT is a NULL, is the in-order predecessor  of your Node A, meaning, when you do an in-order traversal, this Node X appears before Node A in the traversal sequence.

    - Now make Node A as the right Child of this Node X (note that Node X originally had its RIGHT as NULL). You are creating a LINK here (using this link you will go back to Node A, from Node X, when processing ancestor Nodes).

    - After creating this Link Between Node X and Node A, make Node A's LEFT as the current Node and proceed with iteration.

    - What if the LEFT of Node A, did not have a RIGHT at all ?  Then, the LEFT is the in-order predecessor!

2) **NO LEFT => process Node:**
If LEFT did not exist, then, before processing RIGHT, process NODE's data.

3) **AFTER PROCESSING NODE => process RIGHT:**
This block executes only if LEFT did not exist, the ROOT data is processed. 

    - So set currentNode = currentNode.right and continue iteration.

    - When going down a RIGHT subtree, its possible that the currentNode is itself an ancestor (because of the LINK created between the in-order predecessor and a previous ancestor, in step 1.

    - So, the process in steps #1 is repeated, the only difference being, if there was indeed a LINK, then, the loop would terminate back with the currentNode, instead of a NULL. So we know that there exists a loop.

    - When such a loop exists, break the LINK, process the Node.

    - Also, since we have arrived at an ancestor, the only think LEFT is to process its RIGHT. So set currentNode = currentNode.right and continue with iteration. Neither LEFT nor RIGHT => current Node has no children, For eg) Root Node that is a LEAF (only 1 node in tree). Break the iteration.
         