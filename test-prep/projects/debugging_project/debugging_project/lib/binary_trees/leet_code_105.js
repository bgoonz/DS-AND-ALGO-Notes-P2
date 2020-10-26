// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

var buildTree = function(preorder, inorder) {
    if (!preorder || !inorder) return [];

    const rootVal = preorder.shift();
    const root = TreeNode.new(rootVal);

    const leftInorder = inorder.slice(0, inorder.indexOf(rootVal));
    const rightInorder = inorder.slice(inorder.indexOf(rootVal));

    const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
    const rightPreorder = preorder.slice(1 + leftPreorder.length);

    buildTree(leftInorder, leftPreorder);
    buildTree(rightInorder, rightPreorder);

    return root;
}

// example
let root = buildTree([3,9,20,15,7], [9,3,15,20,7]);

function inOrderArray(root) {
    if (!root) return [];
    return [...inOrderArray(root.left), root.val, ...inOrderArray(root.right)];
};

console.log(inOrderArray(root)); // should equal [9, 3, 15, 20, 7]