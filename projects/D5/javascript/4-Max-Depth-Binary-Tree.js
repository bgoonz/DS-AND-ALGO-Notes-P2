/*
  ## Problem 4: Max Depth of Binary Tree
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes
---> along the longest path from the root node down to the farthest leaf node.
Note: the depth at the root is 0.
```js
  //   3
  //  / \
  // 9  20
  //   /  \
  //  15   7
```
*/
function getHeight(root) {
    if (!root) return -1; //base case
    return 1 + Math.max(maxDepth(root.left), getHeight(root.right));
}
