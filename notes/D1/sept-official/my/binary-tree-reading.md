# Example Binary Tree

### Visual Aid

---

## ![picture alt](https://assets.aaonline.io/data_structures_algorithms/trees/images/graph_a.png)

---

### Example Code

---

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
let f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
```

---

---

# Terms

- tree - graph with no cycles
- binary tree - tree where nodes have at most 2 nodes
- root - the ultimate parent, the single node of a tree that can access every other node through edges; by definition the root will not have a parent
- internal node - a node that has children
- leaf - a node that does not have any children
- path - a series of nodes that can be traveled through edges - for example A, B, E is a path through the above tree

---

# Search Patterns

- Breadth First Search - Check all nodes at a level before moving down a level
- Depth First Search - Check the depth as far as it goes for one child, before
  moving on to the next child.
- Pre-Order Traversal - Access the data of the current node, recursively visit the left sub tree, recursively visit the right sub tree
- In-Order Traversal - Recursively visit the left sub tree, access the data of the current node, recursively visit the right sub tree
- Post-Order Traversal - Recursively visit the left sub tree, recursively visit the right sub tree, access the data of the current node.

---

# Constraints

- Given any node of the tree, the values on the left must be strictly less than that node
- Given any node of the tree, the values on the right must be strictly greater than or equal to that node
- Given these constraints a binary tree is necessarily a sorted data structure
- The worst binary trees devolve into a linked list, the best are height balanced (think branching).
