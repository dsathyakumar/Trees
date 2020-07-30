## Left Child Right Sibling Linked Representation of Binary Trees 
> This representation is also generally known as the LC-RS representation. 

The tree so formed is also called a Doubly Chained tree / Sibling Tree and the transform is called the Knuth Transform. **Note that for this section, the transformation is done for
Binary Tree**. 

In General, we would convert a Nested List / Nested Map representation of an n-ary tree
to the LC-RS tree. It can also be said that the LC-RS tree represents the Linked representation for an n-ary tree.

### What is this?
Left-Child Right-Sibling Representation is a different representation of an n-ary tree where instead of holding a reference to each and every child node, a node holds just two references, first a reference to it’s first child, and the other to it’s immediate next sibling.

### Benefits
Think about storing or representing a m-ary / n-ary tree. Per the current linked representation of Left Child / Right Child, if we had 1 pointer representing every child of a given Node, then a
n-ary tree has to hold n-pointers (provided we had info of the child nodes before hand).
If not, and an upper max is set, then its possible that a number of nodes are trees and it results in wastage of space. 
This new transformation not only removes the need of advance knowledge of the number of children a node has, but also limits the number of references to a maximum of two, thereby making it so much easier to code.

### How is this done?
At each node, link children of same parent from left to right.
Parent should be linked with only first child.

### In what way this is useful?
An n-ary tree in computer science is a collection of nodes normally represented hierarchically in the following fashion.

- The tree starts at the root node.
- Each node of the tree holds a list of references to its child nodes.
- The number of children a node has is less than or equal to n.

A typical representation of n-ary tree uses an array of n references (or pointers) to store children (Note that n is an upper bound on number of children). 

Can we do better? 

The idea of Left-Child Right- Sibling representation is to store only two pointers in every node.

It is a different representation of an n-ary tree where instead of holding a reference to each and every child node, a node holds just two references, first a reference to it’s first child, and the other to it’s immediate next sibling. 

This new transformation not only removes the need of advance knowledge of the number of children a node has, but also limits the number of references to a maximum of two, thereby making it so much easier to code. 

One thing to note is that in the previous representation a link between two nodes denoted a parent-child relationship whereas in this representation a link between two nodes may denote a parent-child relationship or a sibling-sibling relationship.

```javascript
Left Child Right Sibling tree representation
      10
      |  
      2 -> 3 -> 4 -> 5
      |    |  
      6    7 -> 8 -> 9
```

![image](https://user-images.githubusercontent.com/5446493/88879211-f4ebd180-d1e6-11ea-924c-15fcfa5ea90d.png)

### Conversion process
- For any given parent node, have the LINK only for the LEFT child.
- If the parent node did not have a LEFT child and had only the RIGHT child, make the RIGHT child as the LEFT child of the parent.
- Remove the link between Parent and RIGHT child.
- Create a link between LEFT child of parent and RIGHT of parent.
- Thus, the RIGHT has become a sibling of the LEFT
- The ROOT will not have any sibling.
- The normal TreeNode representation where LEFT and RIGHT represent LEFT child and 
    RIGHT child, now represent LEFT CHILD and RIGHT sibling.

## Algorithm
- Since this section basically converts a Linked LEFT-CHILD & RIGHT-CHILD representation of Binary Tree to its LC-RS representation and converts it back, we have used Post Order Traversal for the same.
- However, while recovering the tree back, if a LEFT is present, its not possible for sure to say
if the LEFT child was actually a LEFT originally or a RIGHT child made as LEFT. 
- So to properly recover the original tree back, we would either need the pre-order and in-order traversal sequence of the Binary Tree or the pre-order serialization data (with info on NULL nodes), to properly re-construct the original tree.

### Advantages:
1. This representation saves up memory by limiting the maximum number of references required per node to two.
2. It is easier to code.

### Disadvantages :
1. Basic operations like searching/insertion/deletion tend to take a longer time because in order to find the appropriate position we would have to traverse through all the siblings of the node to be searched/inserted/deleted (in the worst case).


### References
https://www.techiedelight.com/convert-normal-binary-tree-left-child-right-sibling-binary-tree/
https://www.geeksforgeeks.org/creating-tree-left-child-right-sibling-representation/
https://www.geeksforgeeks.org/left-child-right-sibling-representation-tree/
https://www.geeksforgeeks.org/convert-left-right-representation-bianry-tree-right/?ref=rp
