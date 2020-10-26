var buildTree = function(preorder, inorder) {
    if (!preorder || !inorder) return []; // bug here

    const rootVal = preorder.shift();
    const root = TreeNode.new(rootVal); // bug

    // bug somemwhere in this section
    const leftInorder = inorder.slice(0, inorder.indexOf(rootVal));
    const rightInorder = inorder.slice(inorder.indexOf(rootVal));

    // and here
    const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
    const rightPreorder = preorder.slice(1 + leftPreorder.length);

    // and missing something here
    buildTree(leftInorder, leftPreorder);
    buildTree(rightInorder, rightPreorder);

    return root;
}