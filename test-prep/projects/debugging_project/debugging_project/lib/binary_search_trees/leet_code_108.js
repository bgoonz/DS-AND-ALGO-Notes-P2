// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var sortedArrayToBST = function(nums) {
    const midIdx = nums.length / 2;
    const root = new TreeNode(nums[midIdx]);

    const left = sortedArrayToBST(nums.slice(0, midIdx));
    const right = sortedArrayToBST(nums.slice(midIdx, nums.length-1));

    return root;
}

// example
let root = sortedArrayToBST([-10,-3,0,5,9]);

function inOrderArray(root) {
    if (!root) return [];
    return [...inOrderArray(root.left), root.val, ...inOrderArray(root.right)];
};

console.log(inOrderArray(root)); // should equal [-10, -3, 0, 5, 9]