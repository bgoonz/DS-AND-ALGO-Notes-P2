var sortedArrayToBST = function(nums) {
    // missing base case
    const midIdx = nums.length / 2; // bug here
    const root = new TreeNode(nums[midIdx]);

    // bug somewhere here
    const left = sortedArrayToBST(nums.slice(0, midIdx));
    const right = sortedArrayToBST(nums.slice(midIdx, nums.length-1));

    // missing something here
    return root;
}