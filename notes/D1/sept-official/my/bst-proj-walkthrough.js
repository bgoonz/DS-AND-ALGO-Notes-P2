function orderArrayHelper(root, callback) {}

function preOrderArray(root) {
    if (root === null) {
        return [];
    } else {
        const leftArray = preOrderArray(root.left);
        const rightArray = preOrderArray(root.right);
        return [root.val, ...leftArray, ...rightArray];
    }
}
