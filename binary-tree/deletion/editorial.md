## Binary Tree Node Deletion

### Overview
Delete a specific Node in the Binary Tree

### Procedure
While Node deletion is the intended purpose, the final purpose is to always reduce the height of the given Binary Tree. For this, we always need to aim at a solution that intends upon pulling up the binary tree, in an effort to reduce the height and better balance it.

### Steps
- Find the Node that is to be deleted.
- Find the deepest and right most Node of the Binary Tree
- Also determine the parent of this deepest and rightmost Node.
- Now replace the value of the node to be deleted, with the, value of deepest & rightmost Node of the Binary Tree.
- Delete the deepest and right most Node & unlink it from its parent
- Now the node to be deleted is gone and the deepest & rightmost node has taken its place, effectively removing the node and also reducing the height of the binary tree.
- The above method is suggested by [Narasimha Karumanchi](https://www.amazon.com/Data-Structures-Algorithms-Made-Easy/dp/819324527X)

### Implementation
- To go over the Binary Tree, level order traversal is used.
- The implementation done here is an iterative level order traversal using a Q.
- In any given level, if the current Node has childNodes, then the current Node becomes the parentNode (as its the latest in introducing childNodes of the next level)
- So, if a Tree has N levels, then the last Node of the (N-1)th level, would end up contributing the deepest and rightmost node of the Binary Tree.
- 3 variables are used
    - 1. To store the Node whose value is to be deleted
    - 2. The parent of the deepest and rightmost node.
    - 3. The deepest and rightmost node (this is the lastly dequed Node)


## Binary Tree Tree Destroy

### Overview
Destroys the whole Binary Tree

### Procedure
To destroy a given Node in the Binary Tree, its LEFT and RIGHT child nodes have to be deleted first. So for the whole tree under consideration, its LEFT and RIGHT subtrees have to be deleted first, before the root can be deleted.

### Steps
- Determine a way to traverse the Binary Tree
- Delete the child nodes before deleting the parent Nodes
- The above method is suggested by [Narasimha Karumanchi](https://www.amazon.com/Data-Structures-Algorithms-Made-Easy/dp/819324527X)

### Implementation
- To go over the Binary Tree and delete children before deleting parent Nodes, post order traversal is used.
- Using post-order traversal, traverse the tree to hit a leaf, using a stack to store ancestor nodes.
- Then peek the previous ancestor from top off the stack
    - if the current Node is the LEFT child of the previous peeked ancestor
        - un-link it / set it to NULL / remove reference
        - proceed to check if the previous peeked ancestor has a RIGHT and traverse it
        - if there is no RIGHT,
            - pop this ancestor from the stack & set it as currentNode
            - proceed to peek next ancestor
    - if the current Node is the RIGHT child of the previous peeked ancestor
        - un-link it / set it to NULL / remove reference
        - pop this ancestor from the stack & set it as currentNode
        - proceed to peek next ancestor
- In this way, the LEFT and RIGHT children are progressively deleted, followed by deletion of the parents & the last Node to be deleted is the ROOT.
