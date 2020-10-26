function inOrderArray(root) {
    if (!root.length) return null; // bug here

    let left = inOrderArray(root.left);
    let right = inOrderArray(root.right);
    return left.push(right).push(root.val); // bug
}

function postOrderArray(root){
    if (!root.left && !root.right) return null; // bug

    return [ // bug
        postOrderArray(root.left),
        postOrderArray(root.val),
        postOrderArray(root.right)
    ];
}