// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

var isBalanced = function(root) {
    if (!root) return null;

    const isCurrentLevelBalanced = getHeight(root.left) - getHeight(root.right) === 1 || getHeight(root.left) - getHeight(root.right) === 0;
    const isLeftBalanced = isBalanced(root.left);
    const isRightBalanced = isBalanced(root.right);

    return isCurrentLevelBalanced && isLeftBalanced && isRightBalanced;
};

var getHeight = function(root){
    if (!root) return null;
    return Math.max(getHeight(root.left), getHeight(root.right));
}

// example

const { TreeNode } = require('../binary_trees/tree_node.js');


let root = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(getHeight(root)) // should equal 3
console.log(isBalanced(root)) // should be true