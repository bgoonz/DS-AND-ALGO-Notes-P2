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

- Binary trees have at most two children per node
- Given any node of the tree, the values on the left must be strictly less than that node
- Given any node of the tree, the values on the right must be strictly greater than or equal to that node
- Given these constraints a binary tree is necessarily a sorted data structure
- The worst binary trees devolve into a linked list, the best are height balanced (think branching).

---

# Example Binary Search Tree

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  searchRecur(val, currentNode = this.root) {
    if (!currentNode) return false;
    if (val < currentNode.val) {
      return this.searchRecur(val, currentNode.left);
    } else if (val > currentNode.val) {
      return this.searchRecur(val, currentNode.right);
    } else {
      return true;
    }
  }

  searchIter(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Maybe works, who knows, pulled it off the internet....

  deleteNodeHelper(root, key) {
    if (root === null) {
      return false;
    }
    if (key < root.val) {
      root.left = deleteNodeHelper(root.left, key);
      return root;
    } else if (key > root.val) {
      root.right = deleteNodeHelper(root.right, key);
      return root;
    } else {
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      let currNode = root.right;
      while (currNode.left !== null) {
        currNode = currNode.left;
      }
      root.val = currNode.val;
      root.right = deleteNodeHelper(root.right, currNode.val);
      return root;
    }
  }

  preOrderTraversal(root) {
    if (!root) return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
  }

  inOrderTraversal(root) {
    if (!root) return;
    preorder(root.left);
    console.log(root.val);
    preorder(root.right);
  }

  postOrderTraversal() {
    if (!root) return;
    preorder(root.left);
    preorder(root.right);
    console.log(root.val);
  }

  breadthFirstSearch(root) {
    let queue = [root];
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr);
      if (curr.left) queue.push(curr.left);
      if (curr.left) queue.push(curr.right);
    }
  }

  depthFirstSearch(root) {
    let stack = [root];
    let seen = new Set();
    while (stack.length) {
      let curr = stack[stack.length - 1];
      if ((!curr.left && !curr.right) || seen.has(curr))
        console.log(stack.pop());
      if (curr.right && !seen.has(curr.right)) stack.push(curr.right);
      if (curr.left && !seen.has(curr.left)) stack.push(curr.left);
      seen.add(curr);
    }
  }
}
```
