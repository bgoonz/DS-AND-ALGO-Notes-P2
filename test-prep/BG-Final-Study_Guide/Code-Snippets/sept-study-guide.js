// //-------------------Binary-Tree-Proj-1-----------------------------------------
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// //-------------------------------tree-order---------------------------
// function preOrderArray(root) {
//     if (!root) return [];
//     return [
//         root.val,
//         ...preOrderArray(root.left),
//         ...preOrderArray(root.right),
//     ];
// }
// function inOrderArray(root) {
//     if (!root) return [];
//     return [...inOrderArray(root.left), root.val, ...inOrderArray(root.right)];
// }
// function postOrderArray(root) {
//     if (!root) return [];
//     return [
//         ...postOrderArray(root.left),
//         ...postOrderArray(root.right),
//         root.val,
//     ];
// }
// //------------------------------dfs--------------------------------------
// // Iterative Solution
// function dfs(root) {
//     if (!root) return [];
//     let stack = [root];
//     let vals = [];
//     while (stack.length) {
//         let node = stack.pop();
//         vals.push(node.val);
//         if (node.right) stack.push(node.right);
//         if (node.left) stack.push(node.left);
//     }
//     return vals;
// }
// // Recursive Solution
// const dfsRec = (root) => {
//     if (!root) return [];
//     return [root.val, ...dfsRec(root.left), ...dfsRec(root.right)];
// };
// //-----------------------BFS-----------------------------------------------
// function bfs(root) {
//     if (!root) return [];
//     let queue = [root];
//     let vals = [];
//     while (queue.length) {
//         let node = queue.shift();
//         vals.push(node.val);
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }
//     return vals;
// }
// //---------------Build-Tree-----leetcode---require treeNode--------------------
// function buildTree(preorder, inorder) {
//     if (!preorder.length && !inorder.length) return null;
//     // the first element in the preorder array is the root
//     let root = new TreeNode(preorder[0]);
//     let rootIdx = inorder.indexOf(preorder[0]);
//     // the left subtree is everything in the inorder array to the left of the root
//     let leftInorder = inorder.slice(0, rootIdx);
//     // the right subtree is everything in the inorder array to the right of the root
//     let rightInorder = inorder.slice(rootIdx + 1);
//     // to build the left subtree, the values in the leftPreorder array have to be the same as the ones in the leftInorder array
//     let leftPreorder = preorder.filter((val) => leftInorder.includes(val));
//     // to build the left subtree, the values in the leftPreorder array have to be the same as the ones in the leftInorder array
//     let rightPreorder = preorder.filter((val) => rightInorder.includes(val));
//     root.left = buildTree(leftPreorder, leftInorder);
//     root.right = buildTree(rightPreorder, rightInorder);
//     return root;
// }
//-------------------------------------------------------------------------------------

//----------------------------PROJ 2 BST---------------------------------------------
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BST {
//     constructor() {
//         this.root = null;
//     }
//     insert(val, currentNode = this.root) {
//         if (!this.root) {
//             this.root = new TreeNode(val);
//             return;
//         }
//         if (val < currentNode.val) {
//             if (!currentNode.left) {
//                 currentNode.left = new TreeNode(val);
//             } else {
//                 this.insert(val, currentNode.left);
//             }
//         } else {
//             if (!currentNode.right) {
//                 currentNode.right = new TreeNode(val);
//             } else {
//                 this.insert(val, currentNode.right);
//             }
//         }
//     }
//     searchRecur(val, currentNode = this.root) {
//         if (!currentNode) return false;
//         if (val < currentNode.val) {
//             return this.searchRecur(val, currentNode.left);
//         } else if (val > currentNode.val) {
//             return this.searchRecur(val, currentNode.right);
//         } else {
//             return true;
//         }
//     }
//     searchIter(val) {
//         let currentNode = this.root;
//         while (currentNode) {
//             if (val < currentNode.val) {
//                 currentNode = currentNode.left;
//             } else if (val > currentNode.val) {
//                 currentNode = currentNode.right;
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }
// }
// const sam = new TreeNode("Sam");
// console.log("sam:", sam);
// const riv = new TreeNode("River");
// const barry = new TreeNode("Barry");
// const dean = new TreeNode("Dean");
// const tree = new BST();
// tree.root = sam;
// sam.left = riv;
// sam.right = barry;
// riv.left = dean;
// console.log("riv:", riv);
// console.log("tree.banana:--->", tree.banana);
// const tree2 = ["sam", "river", "Barry", "dean"];
// console.log("tree 2--->", tree2);
// tree2.child = "sam";
// console.log("tree 2--->after--->", tree2);
// //----------------------------------proj2 leetcode 108-------------------------------
// /*
//   Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
//
// For this problem, a height-balanced binary tree is defined as a binary tree
//  in which the depth of the two subtrees of every node never differ by more than 1.
//  Example:
//
// Given the sorted array: [-10,-3,0,5,9],
//
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//
//       0
//      / \
//    -3   9
//    /   /
//  -10  5
// */
// const getHeight = (root) => {
//     if (!root) return -1;
//     return 1 + Math.max(getHeight(root.left), getHeight(root.right));
// };
//
// function isBalanced(root) {
//     // check the height of each branch
//     // left and right subtrees height diff <= 1
//     if (!root) return true;
//     let heightDifference =
//         Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
//
//     return heightDifference && isBalanced(root.left) && isBalanced(root.right);
// }
// //---------Or--------------------------------------------------/
// function sortedArrayToBST(nums) {
//     if (!nums.length) return null;
//     let midIdx = Math.floor(nums.length / 2);
//     // we use the middle element of the array as our root
//     let root = new TreeNode(nums[midIdx]);
//     // the root's left subtree is a recursive call on the left side of the array
//     root.left = sortedArrayToBST(nums.slice(0, midIdx));
//     // the root's right subtree is a recursive call on the right side of the array
//     root.right = sortedArrayToBST(nums.slice(midIdx + 1));
//     return root;
// }
// //----------OR---------------------------------------
// let sortedArrayToBST = function (nums) {
//     return generate(nums, 0, nums.length - 1);
// };
// let generate = function (nums, start, end) {
//     if (start > end) {
//         return null;
//     }
//     let midIndex = start + parseInt((end - start) / 2);
//     let midVal = nums[midIndex];
//     let node = new TreeNode(midVal);
//     node.left = generate(nums, start, midIndex - 1);
//     node.right = generate(nums, midIndex + 1, end);
//     return node;
// };
// //------------------------------LeetCode 110-----------------------------------
// function getHeight(root) {
//     if (!root) return -1;
//     return 1 + Math.max(getHeight(root.left), getHeight(root.right));
// }
//
// function isBalanced(root) {
//     if (!root) return true;
//
//     // check to see if the top level of the tree is balanced
//     let heightDifference =
//         Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
//
//     // also check to see if the left and right subtrees are balanced
//     return heightDifference && isBalanced(root.left) && isBalanced(root.right);
// }
//--------------------------------------------------------------------------------------
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BST {
//     constructor() {
//         this.root = null;
//     }
//     insert(val, currentNode = this.root) {
//         if (!this.root) {
//             this.root = new TreeNode(val);
//             return;
//         }
//         if (val < currentNode.val) {
//             if (!currentNode.left) {
//                 currentNode.left = new TreeNode(val);
//             } else {
//                 this.insert(val, currentNode.left);
//             }
//         } else {
//             if (!currentNode.right) {
//                 currentNode.right = new TreeNode(val);
//             } else {
//                 this.insert(val, currentNode.right);
//             }
//         }
//     }
//     searchRecur(val, currentNode = this.root) {
//         if (!currentNode) return false;
//         if (val < currentNode.val) {
//             return this.searchRecur(val, currentNode.left);
//         } else if (val > currentNode.val) {
//             return this.searchRecur(val, currentNode.right);
//         } else {
//             return true;
//         }
//     }
//     searchIter(val) {
//         let currentNode = this.root;
//         while (currentNode) {
//             if (val < currentNode.val) {
//                 currentNode = currentNode.left;
//             } else if (val > currentNode.val) {
//                 currentNode = currentNode.right;
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }
// }
//-------------------------------------------
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// let ten = new TreeNode("10");
// let five = new TreeNode("5");
// let sixteen = new TreeNode("16");
// let one = new TreeNode("1");
// let seven = new TreeNode("7");
// let sixteenDuplicate = new TreeNode("16");
// ten.left = five;
// ten.right = sixteen;
// five.left = one;
// five.right = seven;
// sixteen.right = sixteenDuplicate;
// console.log("ten: ", ten);
// console.log("----------ten above^----------");
// console.log("five: ", five);
// console.log("----------five----------");
// console.log("sixteen: ", sixteen);
// console.log("----------sixteen----------");
// console.log(" one: ", one);
// console.log("----------one----------");
// console.log("seven: ", seven);
// console.log("----------seven----------");
// console.log("sixteenDuplicate: ", sixteenDuplicate);
//---------------------------------------------------------------------------------------
// //! Explain and implement a Graph
// // Class based Graph
// class GraphNode {
//     constructor(val) {
//         this.val = val;
//         this.neighbors = [];
//     }
// }
// let a = new GraphNode("a");
// let b = new GraphNode("b");
// let c = new GraphNode("c");
// // a.neighbors = [b];
// // b.neighbors = [c];
// // c.neighbors = [a];
//
// let graph = {
//     a: ["b"],
//     b: ["c"],
//     c: ["a"],
// };
// //When doing breadth first, iterative is simpler and easier.
// //We can use a queue to do this.
// function breadthFirstSearch(graph, startingNode, targetVal) {
//     // Populate our queue with the starting Node
//     let queue = [startingNode];
//     // Create a new empty Set to hold the nodes we've visited
//     let visited = new Set();
//     // Keep going until the queue is empty
//     while (queue.length) {
//         // Dequeue the first thing from the queue
//         let node = queue.shift();
//         // If we've visited this node before, then just continue, which goes
//         // back up to the while loop
//         if (visited.has(node)) continue;
//         // Add the node to the visited set.
//         visited.add(node);
//         // Check to see if the node is the one we are looking for, if it is
//         // return true
//         if (node === targetVal) return true;
//         // Enqueue the node's neighbors from the adjacency graph onto the queue
//         queue.push(...graph[node]);
//     }
//     // If we made it through the loop without finding one, return false
//     return false;
// }
// breadthFirstSearch(graph, "a", "c");
// console.log(
//     'breadthFirstSearch(graph, "a", "c"): ',
//     breadthFirstSearch(graph, "a", "c")
// ); //breadthFirstSearch(graph, "a", "c"):  true

//--------------------------white boarding--------------------------------------------------
// PROBLEM 1
function joesFriendsBFS(adjacencyList, startName, endName) {
    // We're doing BFS so we know we need a QUEUE
    let queue = [startName];
    // Track our visited friends.
    let visited = new Set();
    // While there are friends left to visit
    while (queue.length) {
        // We remove a friend from the queue
        let name = queue.shift();
        // Check if we've already visited them. if we have, we move on
        if (visited.has(name)) continue;
        // If we haven't, we add them to the visited Set
        visited.add(name);
        // Have we reached Jesse yet?
        if (name === endName) {
            // if so, we know we're done and we can return the number of friends we've
            // visited, which is the length of the visited set (minus Joe)
            return Array.from(visited).length - 1;
        }
        // Otherwise let's add all the friends at our current friend, and run this again
        queue.push(...adjacencyList[name]);
    }
    // if our whole loop happened and we didn't get to Jesse, it means he's not a
    // part of the graph or there's no path between Joe and Jesse
    return "Jesse's not here :(";
}
console.log(
    " TESTS FOR PROBLEMS 1 AND 2---------------------------------------------------------------------"
);
const adjacencyList = {
    derek: ["selam", "dean"],
    joe: ["selam"],
    selam: ["derek", "joe", "dean", "evan"],
    dean: ["derek", "evan", "selam"],
    sam: ["jen"],
    evan: ["selam", "jesse", "dean"],
    jen: ["sam", "javier"],
    javier: ["jen"],
    chris: [],
    jesse: ["evan"],
};

console.log(
    'joesFriendsBFS(adjacencyList, "joe", "jesse"): ',
    joesFriendsBFS(adjacencyList, "joe", "jesse")
);
console.log(joesFriendsDFS(adjacencyList, "joe", "jesse")); // [ 'selam', 'evan', 'dean', 'derek', 'jesse' ]

console.log(
    " TESTS FOR PROBLEMS 3---------------------------------------------------------------------"
);
// PROBLEM 2
function joesFriendsDFS(adjacencyList, startName, endName) {
    // we're doing DFS so we know we need a STACK
    let stack = [startName];
    // Track visited
    let visited = new Set();
    // While there are friends to search through, we're going to contine
    while (stack.length) {
        // We remove the current friend we're comparing to Jesse
        let name = stack.pop();
        // Check if we've already visited them. if we have, we move on.
        if (visited.has(name)) continue;
        // if we haven't, add them to the visited list
        visited.add(name);
        // check if we have reached Jesse
        if (name === endName) {
            // If we have, we can return the list of friends we visited along the way
            const friendsList = Array.from(visited);
            // but we must first remove Joe from the list. we know he's first because
            // he was the first person popped off the stack.
            friendsList.shift();
            return friendsList;
        }
        // if we didn't see Jesse, we add the friends to the top of the stack and keep searching
        stack.push(...adjacencyList[name]);
    }
    // if our whole loop happened and we didn't get to Jesse, it means he's not a
    // part of the graph or there's no path between Joe and Jesse
    return "Jesse's not here :(";
}
// PROBLEM 3 SOLUTION
const hasPathSum = function (root, sum) {
    // If there's no root, we know that it's impossible to reach the sum
    if (!root) return false;
    // we must keep track of our current value, which is the difference between our final sum and the number we're currently on (e.g 22 - 5)
    let currSum = sum - root.val;
    // our base case. if we reach the bottom of the tree, and the difference between
    // our final value and our current value is zero, we know we've found the sum along this path
    // so we can return true.
    if (!root.left && !root.right) {
        if (currSum == 0) return true;
    }
    // Now that we've established our base case and recursive step, we call the recursion
    let leftSum = hasPathSum(root.left, currSum);
    let rightSum = hasPathSum(root.right, currSum);
    // we want these functions to return a number, and we want to check both directions
    return leftSum || rightSum;
};
const pathSum = (root, sum, curSum = root.val) => {
    if (!root) return false;
    if (sum === curSum) return true;
    const leftRecur = pathSum(root.left, sum, curSum + root.val);
    const rightRecur = pathSum(root.right, sum, curSum + root.val);
    console.log(leftRecur || rightRecur);
    return leftRecur || rightRecur;
};
// PROBLEM 4
// DFS Recursive
function maxDepth(root) {
    // Our base case. we've reached the bottom of the tree.
    // Also stops us from running this on an empty tree
    if (!root) return -1;
    // we know this function returns a number, so we just add one to that number
    // to count the 'depth' of our tree.
    // we do this to the left and right of each tree node because we want to ensure
    // we are finding the maximum depth
    const leftHeight = 1 + maxDepth(root.left);
    const rightHeight = 1 + maxDepth(root.right);
    // our function returns the larger number: whichever one has the larger depth.
    return Math.max(leftHeight, rightHeight);
}

class TreeNode {
    constructor(val) {
        (this.val = val), (this.left = null), (this.right = null);
    }
}
const five = new TreeNode(5);
const four = new TreeNode(4);
const eight = new TreeNode(8);
const eleven = new TreeNode(11);
const thirteen = new TreeNode(13);
const fourSecond = new TreeNode(4);
const seven = new TreeNode(7);
const two = new TreeNode(2);
const one = new TreeNode(1);
five.left = four;
five.right = eight;
four.left = eleven;
eleven.left = seven;
eleven.right = two;
eight.left = thirteen;
eight.right = fourSecond;
fourSecond.right = one;
console.log(pathSum(five, 22)); // true

console.log(
    " TESTS FOR PROBLEM 4--------------------------------------------------------------"
);
const three = new TreeNode(3);
const nine = new TreeNode(9);
const twenty = new TreeNode(20);
const fifteen = new TreeNode(15);
const sevenTwo = new TreeNode(7);
three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = sevenTwo;
console.log(maxDepth(three)); // 2
