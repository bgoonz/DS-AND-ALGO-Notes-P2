class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor(){
       this.root = new TreeNode(null); // bug here
   }

   insert(val, root=this.root){
       if (!this.root){
           this.root = new TreeNode(val);
           // missing something here
       };

       if (val < root.val){
            // missing stuff here
            root.left = new TreeNode(val);
       } else {
            // and here
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
       // missing one case
   }

   searchIter(val){
       // missing something here, and while condition isn't quite right
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