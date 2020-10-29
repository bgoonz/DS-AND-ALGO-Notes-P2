var isBalanced = function(root) {
    if (!root) return null; // bug here

    const isCurrentLevelBalanced = getHeight(root.left) - getHeight(root.right) === 1 || getHeight(root.left) - getHeight(root.right) === 0; // bug here
    const isLeftBalanced = isBalanced(root.left);
    const isRightBalanced = isBalanced(root.right);

    return isCurrentLevelBalanced && isLeftBalanced && isRightBalanced;
};

var getHeight = function(root){
    if (!root) return null; // bug here
    return Math.max(getHeight(root.left), getHeight(root.right)); // and here (but you can do this function in 2 lines! :o)
}