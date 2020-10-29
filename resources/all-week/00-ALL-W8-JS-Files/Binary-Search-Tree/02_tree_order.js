// function preOrderArray(root, tree = []) {
//
//   if(!root) return tree;
//
//   tree.push(root.val);
//   preOrderArray(root.left, tree);
//   preOrderArray(root.right, tree);
//
//   return tree;
// }

let node = require("./01_tree_node");
//---------------OR-------------------------
function preOrderArray(root) {
    if (!root) return [];
    return [
        root.val,
        ...preOrderArray(root.left),
        ...preOrderArray(root.right),
    ];
}
/*
//when you get to D's children root.left is null so we hit our base case
                                    Ⓐ 
                                   ╱  ╲
                                 Ⓑ     Ⓒ
                                ╱ ╲    ╱ ╲        
                               Ⓓ  Ⓔ  Ⓕ  Ⓖ
*/

//---------------------W Stack------------------------------
//preorder root-left-right
//
/*
                                    Ⓐ 
                                   ╱  ╲
                                 Ⓑ     Ⓒ
                                ╱           
                               Ⓓ   
*/
//preorder
//breadth first would be a queue
// when you only push and pop on an array it functions like a stack
function dfsWstack(root) {
    if (!root) return [];
    let stack = [root]; //initially A
    let vals = [];
    while (stack.length) {
        let node = stack.pop(); //node is A//node is B
        vals.push(node.val); //push A into vals array//add B to vals
        if (node.right) stack.push(node.right); //push children of the node into stack//add D to stack// D has no children so we don't push to stack
        // stack.push(node.right) first because stack is LiFo
        if (node.left) stack.push(node.left); //no right child
    }
    return vals;
}

// ----------------------------------------------------------
function inOrderArray(root, tree = []) {
    if (!root) return tree;

    inOrderArray(root.left, tree);
    tree.push(root.val);
    inOrderArray(root.right, tree);

    return tree;
}

function postOrderArray(root, tree = []) {
    if (!root) return tree;

    postOrderArray(root.left, tree);
    postOrderArray(root.right, tree);
    tree.push(root.val);

    return tree;
}

// let root = new TreeNode('a');
// let b = new TreeNode('b');
// let c = new TreeNode('c');
// let d = new TreeNode('d');
// let e = new TreeNode('e');
// let f = new TreeNode('f');

// root.left = b;
// root.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(preOrderArray(root));

module.exports = {
    preOrderArray,
    inOrderArray,
    postOrderArray,
};
