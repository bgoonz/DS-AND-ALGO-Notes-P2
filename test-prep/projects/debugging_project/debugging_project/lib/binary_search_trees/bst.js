class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor(){
       this.root = new TreeNode(null);
   }

   insert(val, root=this.root){
       if (!this.root){
           this.root = new TreeNode(val);
       };

       if (val < root.val){
            root.left = new TreeNode(val);
       } else {
            root.right = new TreeNode(val);
       };
   }

   searchRecur(val, root=this.root){
       if (!root) return false;
       
       if (val < root.val){
           return this.searchRecur(val, root.left);
       } else {
           return this.searchRecur(val, root.right);
       };
   }

   searchIter(val){
       while (this.root){
           if (val === this.root.val){
               return true;
           } else if (val < this.root.val){
               this.root = this.root.left;
           } else {
               this.root = this.root.right;
           }
       };
       return false;
   }
}

module.exports = {
    TreeNode,
    BST
};

// example
let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(16);
tree.insert(1);
tree.insert(7);
tree.insert(16);

console.log(tree.searchRecur(7)) // should be true
console.log(tree.searchRecur(14)) // should be false

console.log(tree.searchIter(7)) // should be true
console.log(tree.searchIter(14)) // should be false