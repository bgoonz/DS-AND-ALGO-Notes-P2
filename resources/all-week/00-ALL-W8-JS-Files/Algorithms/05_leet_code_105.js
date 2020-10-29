/*
  Construct Binary Tree from Preorder and Inorder Traversal
Category	Difficulty	Likes	Dislikes
algorithms	Medium (50.14%)	4107	109
Tags
Companies
bloomberg

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
Discussion | Solution
*/

// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

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
let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

function buildTree(preorder, inorder) {
    console.log("5");

    const root = new TreeNode(preorder[0]);
    console.log("root: ", root);
    console.log("preorder[ 0 ] : ", preorder[0]);

    const rootVal = preorder[0];
    if (preorder.length === 0 || inorder.length === 0) return null;
    if (preorder.length === 1) return node;
    const helpArr = split(inorder, root.val);
    let mid = inorder.indexOf(rootVal);
    root.left = buildTree(preorder.slice(0, mid), helpArr[0]);
    root.right = buildTree(preorder.slice(1 + mid), [1]);
    console.log("mid: ", mid);

    console.log(node);
    return node;
}

leftInorder = inorder.slice(0, rootIdx);
rightInorder = inorder.slice(rootIdx + 1);
leftPreorder = preorder.filter((val) => leftInorder.includes(val));
leftPreordder = preorder.slice(1, 1 + leftInorder.length);

function split(array, target) {
    let leftS = [];
    let rightS = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            let leftS = array.slice(0, i);
            let rightS = array.slice(i + 1);
            break;
        }
    }
    return [left, right];
}

console.log("buildTree(preorder, inorder): ", buildTree(preorder, inorder));
