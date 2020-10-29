# ![](ds-cheat-sheet-operations.png)
> Its always good to have a look at worst-case time complexities of common data structure operations frequently.


Its always good to have a look at worst-case time complexities of common data structure operations frequently.



![Image for post](https://miro.medium.com/max/60/1*6NpRbTpekXG_1l5hh1XeIQ.png?q=20)

![Image for post](https://miro.medium.com/max/3572/1*6NpRbTpekXG_1l5hh1XeIQ.png)

Arrays are one of the basic and important data structures to learn, They take constant time to read and Insert elements at the end and takes a linear time for the remaining.

![Image for post](https://miro.medium.com/max/60/1*vFbcvaNX-aWr5-wERwKFIA.png?q=20)

![Image for post](https://miro.medium.com/max/3746/1*vFbcvaNX-aWr5-wERwKFIA.png)

Stack takes constant time for Push, Pop & Peek operations.

![Image for post](https://miro.medium.com/max/60/1*HgkpbE06UCWm2G3U54J8ew.png?q=20)

![Image for post](https://miro.medium.com/max/2512/1*HgkpbE06UCWm2G3U54J8ew.png)

In Queue for Enqueue, Dequeue & Peek operations it takes only Constant time.

![Image for post](https://miro.medium.com/max/60/1*amq4OYYapQjaN2QXIG5eUw.png?q=20)

![Image for post](https://miro.medium.com/max/3942/1*amq4OYYapQjaN2QXIG5eUw.png)

Here we are considering we are using tails for all single linked lists (Some implementations might not have it).  
Linked List is the data structure that comes with a lot of different operational scenarios, we have to think about head & tail usage in every operation we are doing. And operation logic and complexity changes at the head, tail, and middle. Typically insertion at head & tail takes constant time and insertion in middle takes linear time. Search can take linear time. Deletion at the head takes constant time and it can take linear time in remaining scenarios.



* * *

[](#Trees-basic-concepts "Trees: basic concepts")Trees: basic concepts
----------------------------------------------------------------------

A tree is a data structure where a node can have zero or more children. Each node contains a **value**. Like graphs, the connection between nodes is called **edges**. A tree is a type of graph, but not all of them are trees (more on that later).

These data structures are called "trees" because the data structure resembles a tree 🌳. It starts with a **root** node and **branch** off with its descendants, and finally, there are **leaves**.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/tree-parts.jpg)

Here are some properties of trees:

*   The top-most node is called **root**.
*   A node without children is called **leaf** node or **terminal** node.
*   **Height** (_h_) of the tree is the distance (edge count) between the farthest leaf to the root.
    *   `A` has a height of 3
    *   `I` has a height of 0
*   **Depth** or **level** of a node is the distance between the root and the node in question.
    *   `H` has a depth of 2
    *   `B` has a depth of 1

### [](#Implementing-a-simple-tree-data-structure "Implementing a simple tree data structure")Implementing a simple tree data structure

As we saw earlier, a tree node is just a data structure that has a value and has links to their descendants.

Here's an example of a tree node:

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br></pre></td><td><pre><span><span><span>class</span> <span>TreeNode</span> </span>{</span><br><span>  <span>constructor</span>(value) {</span><br><span>    <span>this</span>.value = value;</span><br><span>    <span>this</span>.descendents = [];</span><br><span>  }</span><br><span>}</span><br></pre></td></tr></tbody></table>

We can create a tree with 3 descendents as follows:

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br></pre></td><td><pre><span></span><br><span><span>const</span> abe = <span>new</span> TreeNode(<span>'Abe'</span>);</span><br><span><span>const</span> homer = <span>new</span> TreeNode(<span>'Homer'</span>);</span><br><span><span>const</span> bart = <span>new</span> TreeNode(<span>'Bart'</span>);</span><br><span><span>const</span> lisa = <span>new</span> TreeNode(<span>'Lisa'</span>);</span><br><span><span>const</span> maggie = <span>new</span> TreeNode(<span>'Maggie'</span>);</span><br><span></span><br><span></span><br><span>abe.descendents.push(homer);</span><br><span>homer.descendents.push(bart, lisa, maggie);</span><br></pre></td></tr></tbody></table>

That's all; we have a tree data structure!

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/simpson2-tree.jpg "Simpson tree data structure")

The node `abe` is the **root** and `bart`, `lisa` and `maggie` are the **leaf** nodes of the tree. Notice that the tree's node can have a different number of descendants: 0, 1, 3, or any other value.

Tree data structures have many applications such as:

*   [Maps](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#HashMaps)
*   [Sets](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Sets)
*   Databases
*   Priority Queues
*   Querying an LDAP (Lightweight Directory Access Protocol)
*   Representing the Document Object Model (DOM) for HTML on Websites.

[](#Binary-Trees "Binary Trees")Binary Trees
--------------------------------------------

Trees nodes can have zero or more children. However, when a tree has at the most two children, then it's called **binary tree**.

### [](#Full-Complete-and-Perfect-binary-trees "Full, Complete and Perfect binary trees")Full, Complete and Perfect binary trees

Depending on how nodes are arranged in a binary tree, it can be **full**, **complete** and **perfect**:

*   **Full binary tree**: each node has exactly 0 or 2 children (but never 1).
*   **Complete binary tree**: when all levels except the last one are **full** with nodes.
*   **Perfect binary tree**: when all the levels (including the last one) are full of nodes.

Look at these examples:

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/full-complete-perfect-binary-tree.jpg "Full vs. Complete vs. Perfect Binary Tree")

These properties are not always mutually exclusive. You can have more than one:

*   A perfect tree is **always** complete and full.
    *   Perfect binary trees have precisely 2k\-1 nodes, where _`k`_ is the last level of the tree (starting with 1).
*   A complete tree is **not** always `full`.
    *   Like in our "complete" example, since it has a parent with only one child. If we remove the rightmost gray node, then we would have a **complete** and **full** tree but not perfect.
*   A full tree is not always complete and perfect.

[](#Binary-Search-Tree-BST "Binary Search Tree (BST)")Binary Search Tree (BST)
------------------------------------------------------------------------------

Binary Search Trees or BST for short are a particular application of binary trees. BST has at most two nodes (like all binary trees). However, the values are in such a way that the left children value must be less than the parent, and the right children is must be higher.

**Duplicates:** Some BST doesn't allow duplicates while others add the same values as a right child. Other implementations might keep a count on a case of the duplicity (we are going to do this one later).

Let's implement a Binary Search Tree!

### [](#BST-Implementation "BST Implementation")BST Implementation

BST are very similar to our previous [implementation of a tree](#Implementing-a-simple-tree-data-structure). However, there are some differences:

*   Nodes can have at most, only two children: left and right.
*   Nodes values has to be ordered as `left < parent < right`.

Here's the tree node. Very similar to what we did before, but we added some handy getters and setters for left and right children. Notice that is also keeping a reference to the parent and we update it every time add children.

TreeNode.js[Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/tree-node.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br><span>24</span><br><span>25</span><br><span>26</span><br><span>27</span><br><span>28</span><br><span>29</span><br><span>30</span><br><span>31</span><br><span>32</span><br></pre></td><td><pre><span><span>const</span> LEFT = <span>0</span>;</span><br><span><span>const</span> RIGHT = <span>1</span>;</span><br><span></span><br><span><span><span>class</span> <span>TreeNode</span> </span>{</span><br><span>  <span>constructor</span>(value) {</span><br><span>    <span>this</span>.value = value;</span><br><span>    <span>this</span>.descendents = [];</span><br><span>    <span>this</span>.parent = <span>null</span>;</span><br><span>  }</span><br><span></span><br><span>  <span>get</span> <span>left</span>() {</span><br><span>    <span>return</span> <span>this</span>.descendents[LEFT];</span><br><span>  }</span><br><span></span><br><span>  <span>set</span> <span>left</span>(<span>node</span>) {</span><br><span>    <span>this</span>.descendents[LEFT] = node;</span><br><span>    <span>if</span> (node) {</span><br><span>      node.parent = <span>this</span>;</span><br><span>    }</span><br><span>  }</span><br><span></span><br><span>  <span>get</span> <span>right</span>() {</span><br><span>    <span>return</span> <span>this</span>.descendents[RIGHT];</span><br><span>  }</span><br><span></span><br><span>  <span>set</span> <span>right</span>(<span>node</span>) {</span><br><span>    <span>this</span>.descendents[RIGHT] = node;</span><br><span>    <span>if</span> (node) {</span><br><span>      node.parent = <span>this</span>;</span><br><span>    }</span><br><span>  }</span><br><span>}</span><br></pre></td></tr></tbody></table>

Ok, so far we can add a left and right child. Now, let's do the BST class that enforces the `left < parent < right` rule.

BinarySearchTree.js linkUrl linkText

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br></pre></td><td><pre><span></span><br><span><span><span>class</span> <span>BinarySearchTree</span> </span>{</span><br><span>  <span>constructor</span>() {</span><br><span>    <span>this</span>.root = <span>null</span>;</span><br><span>    <span>this</span>.size = <span>0</span>;</span><br><span>  }</span><br><span></span><br><span>  add(value) {  }</span><br><span>  find(value) {  }</span><br><span>  remove(value) {  }</span><br><span>  getMax() {  }</span><br><span>  getMin() {  }</span><br><span>}</span><br></pre></td></tr></tbody></table>

Let's implementing insertion.

### [](#BST-Node-Insertion "BST Node Insertion")BST Node Insertion

To insert a node in a binary tree, we do the following:

1.  If a tree is empty, the first node becomes the **root** and you are done.
2.  Compare root/parent's value if it's _higher_ go **right**, if it's _lower_ go **left**. If it's the same, then the value already exists so you can increase the duplicate count (multiplicity).
3.  Repeat #2 until we found an empty slot to insert the new node.

Let's do an illustration how to insert 30, 40, 10, 15, 12, 50:

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/bst2.gif "Inserting nodes on a Binary Search Tree (BST)")

We can implement insert as follows:

BinarySearchTree.prototype.add[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js#L11)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br></pre></td><td><pre><span>add(value) {</span><br><span>  <span>const</span> newNode = <span>new</span> TreeNode(value);</span><br><span></span><br><span>  <span>if</span> (<span>this</span>.root) {</span><br><span>    <span>const</span> { found, parent } = <span>this</span>.findNodeAndParent(value);</span><br><span>    <span>if</span> (found) { </span><br><span>      found.meta.multiplicity = (found.meta.multiplicity || <span>1</span>) + <span>1</span>;</span><br><span>    } <span>else</span> <span>if</span> (value &lt; parent.value) {</span><br><span>      parent.left = newNode;</span><br><span>    } <span>else</span> {</span><br><span>      parent.right = newNode;</span><br><span>    }</span><br><span>  } <span>else</span> {</span><br><span>    <span>this</span>.root = newNode;</span><br><span>  }</span><br><span></span><br><span>  <span>this</span>.size += <span>1</span>;</span><br><span>  <span>return</span> newNode;</span><br><span>}</span><br></pre></td></tr></tbody></table>

We are using a helper function called `findNodeAndParent`. If we found that the node already exists in the tree, then we increase the `multiplicity` counter. Let's see how this function is implemented:

BinarySearchTree.prototype.findNodeAndParent[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js#L44)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br></pre></td><td><pre><span>findNodeAndParent(value) {</span><br><span>  <span>let</span> node = <span>this</span>.root;</span><br><span>  <span>let</span> parent;</span><br><span></span><br><span>  <span>while</span> (node) {</span><br><span>    <span>if</span> (node.value === value) {</span><br><span>      <span>break</span>;</span><br><span>    }</span><br><span>    parent = node;</span><br><span>    node = ( value &gt;= node.value) ? node.right : node.left;</span><br><span>  }</span><br><span></span><br><span>  <span>return</span> { <span>found</span>: node, parent };</span><br><span>}</span><br></pre></td></tr></tbody></table>

`findNodeAndParent` goes through the tree searching for the value. It starts at the root (line 2) and then goes left or right based on the value (line 10). If the value already exists, it will return the node `found` and also the parent. In case that the node doesn't exist, we still return the `parent`.

### [](#BST-Node-Deletion "BST Node Deletion")BST Node Deletion

We know how to insert and search for value. Now, we are going to implement the delete operation. It's a little trickier than adding, so let's explain it with the following cases:

**Deleting a leaf node (0 children)**

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span>    30                             30</span><br><span> /     \         remove(12)     /     \</span><br><span>10      40       ---------&gt;    10      40</span><br><span>  \    /  \                      \    /  \</span><br><span>  15  35   50                    15  35   50</span><br><span>  /</span><br><span>12*</span><br></pre></td></tr></tbody></table>

We just remove the reference from node's parent (15) to be null.

**Deleting a node with one child.**

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>    30                              30</span><br><span> /     \         remove(10)      /     \</span><br><span>10*     40       ---------&gt;     15      40</span><br><span>  \    /  \                            /  \</span><br><span>  15  35   50                         35   50</span><br></pre></td></tr></tbody></table>

In this case, we go to the parent (30) and replace the child (10), with a child's child (15).

**Deleting a node with two children**

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>    30                              30</span><br><span> /     \         remove(40)      /     \</span><br><span>15      40*      ---------&gt;     15      50</span><br><span>       /  \                            /</span><br><span>      35   50                         35</span><br></pre></td></tr></tbody></table>

We are removing node 40, that has two children (35 and 50). We replace the parent's (30) child (40) with the child's right child (50). Then we keep the left child (35) in the same place it was before, so we have to make it the left child of 50.

Another way to do it to remove node 40, is to move the left child (35) up and then keep the right child (50) where it was.

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>    30</span><br><span> /     \</span><br><span>15      35</span><br><span>          \</span><br><span>           50</span><br></pre></td></tr></tbody></table>

Either way is ok as long as you keep the binary search tree property: `left < parent < right`.

**Deleting the root.**

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>   30*                            50</span><br><span> /     \       remove(30)      /     \</span><br><span>15      50     ---------&gt;     15      35</span><br><span>       /</span><br><span>      35</span><br></pre></td></tr></tbody></table>

Deleting the root is very similar to removing nodes with 0, 1, or 2 children that we discussed earlier. The only difference is that afterward, we need to update the reference of the root of the tree.

Here's an animation of what we discussed.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/bst-remove.gif "Removing a node with 0, 1, 2 children from a binary search tree")

In the animation, it moves up the left child/subtree and keeps the right child/subtree in place.

Now that we have a good idea how it should work, let's implement it:

BinarySearchTree.prototype.remove[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js#L89)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br></pre></td><td><pre><span>remove(value) {</span><br><span>  <span>const</span> nodeToRemove = <span>this</span>.find(value);</span><br><span>  <span>if</span> (!nodeToRemove) <span>return</span> <span>false</span>;</span><br><span></span><br><span>  </span><br><span>  <span>const</span> nodeToRemoveChildren = <span>this</span>.combineLeftIntoRightSubtree(nodeToRemove);</span><br><span></span><br><span>  <span>if</span> (nodeToRemove.meta.multiplicity &amp;&amp; nodeToRemove.meta.multiplicity &gt; <span>1</span>) {</span><br><span>    nodeToRemove.meta.multiplicity -= <span>1</span>; </span><br><span>  } <span>else</span> <span>if</span> (nodeToRemove === <span>this</span>.root) {</span><br><span>    </span><br><span>    <span>this</span>.root = nodeToRemoveChildren;</span><br><span>    <span>this</span>.root.parent = <span>null</span>; </span><br><span>  } <span>else</span> {</span><br><span>    <span>const</span> side = nodeToRemove.isParentLeftChild ? <span>'left'</span> : <span>'right'</span>;</span><br><span>    <span>const</span> { parent } = nodeToRemove; </span><br><span>    </span><br><span>    parent[side] = nodeToRemoveChildren;</span><br><span>  }</span><br><span></span><br><span>  <span>this</span>.size -= <span>1</span>;</span><br><span>  <span>return</span> <span>true</span>;</span><br><span>}</span><br></pre></td></tr></tbody></table>

Here are some highlights of the implementation:

*   First, we search if the node exists. If it doesn't, we return false and we are done!
*   If the node to remove exists, then combine left and right children into one subtree.
*   Replace node to delete with the combined subtree.

The function that combines left into right subtree is the following:

BinarySearchTree.prototype.combineLeftIntoRightSubtree[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js#L89)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br></pre></td><td><pre><span>combineLeftIntoRightSubtree(node) {</span><br><span>  <span>if</span> (node.right) {</span><br><span>    <span>const</span> leftmost = <span>this</span>.getLeftmost(node.right);</span><br><span>    leftmost.left = node.left;</span><br><span>    <span>return</span> node.right;</span><br><span>  }</span><br><span>  <span>return</span> node.left;</span><br><span>}</span><br></pre></td></tr></tbody></table>

For instance, let's say that we want to combine the following tree and we are about to delete node `30`. We want to mix 30's left subtree into the right one. The result is this:

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span>   30*                             40</span><br><span> /     \                          /  \</span><br><span>10      40    combine(30)       35   50</span><br><span>  \    /  \   -----------&gt;      /</span><br><span>  15  35   50                  10</span><br><span>                                \</span><br><span>                                 15</span><br></pre></td></tr></tbody></table>

Now, and if we make the new subtree the root, then node `30` is no more!

[](#Binary-Tree-Transversal "Binary Tree Transversal")Binary Tree Transversal
-----------------------------------------------------------------------------

There are different ways of traversing a Binary Tree, depending on the order that the nodes are visited: in-order, pre-order, and post-order. Also, we can use them [DFS](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/#Depth-first-search-DFS-Graph-search) and [BFS](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/#Breadth-frirst-search-BFS-Graph-search) that we learned from the [graph post.](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/) Let's go through each one.

**In-Order Traversal**

In-order traversal visit nodes on this order: left, parent, right.

BinarySearchTree.prototype.inOrderTraversal[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>* inOrderTraversal(node = <span>this</span>.root) {</span><br><span>  <span>if</span> (node.left) { <span>yield</span>* <span>this</span>.inOrderTraversal(node.left); }</span><br><span>  <span>yield</span> node;</span><br><span>  <span>if</span> (node.right) { <span>yield</span>* <span>this</span>.inOrderTraversal(node.right); }</span><br><span>}</span><br></pre></td></tr></tbody></table>

Let's use this tree to make the example:

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span>         10</span><br><span>       /    \</span><br><span>      5      30</span><br><span>    /       /  \</span><br><span>   4       15   40</span><br><span> /</span><br><span>3</span><br></pre></td></tr></tbody></table>

In-order traversal would print out the following values: `3, 4, 5, 10, 15, 30, 40`. If the tree is a BST, then the nodes will be sorted in ascendent order as in our example.

**Post-Order Traversal**

Post-order traversal visit nodes on this order: left, right, parent.

BinarySearchTree.prototype.postOrderTraversal[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>* postOrderTraversal(node = <span>this</span>.root) {</span><br><span>  <span>if</span> (node.left) { <span>yield</span>* <span>this</span>.postOrderTraversal(node.left); }</span><br><span>  <span>if</span> (node.right) { <span>yield</span>* <span>this</span>.postOrderTraversal(node.right); }</span><br><span>  <span>yield</span> node;</span><br><span>}</span><br></pre></td></tr></tbody></table>

Post-order traversal would print out the following values: `3, 4, 5, 15, 40, 30, 10`.

**Pre-Order Traversal and DFS**

In-order traversal visit nodes on this order: parent, left, right.

BinarySearchTree.prototype.preOrderTraversal[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span>* preOrderTraversal(node = <span>this</span>.root) {</span><br><span>  <span>yield</span> node;</span><br><span>  <span>if</span> (node.left) { <span>yield</span>* <span>this</span>.preOrderTraversal(node.left); }</span><br><span>  <span>if</span> (node.right) { <span>yield</span>* <span>this</span>.preOrderTraversal(node.right); }</span><br><span>}</span><br></pre></td></tr></tbody></table>

Pre-order traversal would print out the following values: `10, 5, 4, 3, 30, 15, 40`. This order of numbers is the same result that we would get if we run the Depth-First Search (DFS).

BinarySearchTree.prototype.dfs[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br></pre></td><td><pre><span>* dfs() {</span><br><span>  <span>const</span> stack = <span>new</span> Stack();</span><br><span></span><br><span>  stack.add(<span>this</span>.root);</span><br><span></span><br><span>  <span>while</span> (!stack.isEmpty()) {</span><br><span>    <span>const</span> node = stack.remove();</span><br><span>    <span>yield</span> node;</span><br><span>    </span><br><span>    node.descendents.reverse().forEach(<span><span>child</span> =&gt;</span> stack.add(child));</span><br><span>  }</span><br><span>}</span><br></pre></td></tr></tbody></table>

If you need a refresher on DFS, we covered in details on [Graph post](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/#Depth-first-search-DFS-Graph-search).

**Breadth-First Search (BFS)**

Similar to DFS, we can implement a BFS by switching the `Stack` by a `Queue`:

BinarySearchTree.prototype.bfs[Full Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/trees/binary-search-tree.js)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br></pre></td><td><pre><span>* bfs() {</span><br><span>  <span>const</span> queue = <span>new</span> Queue();</span><br><span></span><br><span>  queue.add(<span>this</span>.root);</span><br><span></span><br><span>  <span>while</span> (!queue.isEmpty()) {</span><br><span>    <span>const</span> node = queue.remove();</span><br><span>    <span>yield</span> node;</span><br><span>    node.descendents.forEach(<span><span>child</span> =&gt;</span> queue.add(child));</span><br><span>  }</span><br><span>}</span><br></pre></td></tr></tbody></table>

The BFS order is: `10, 5, 30, 4, 15, 40, 3`

[](#Balanced-vs-Non-balanced-Trees "Balanced vs. Non-balanced Trees")Balanced vs. Non-balanced Trees
----------------------------------------------------------------------------------------------------

So far, we have discussed how to `add`, `remove` and `find` elements. However, we haven't talked about runtimes. Let's think about the worst-case scenarios.

Let's say that we want to add numbers in ascending order.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/bst-asc.gif "Inserting values in ascending order in a Binary Search Tree")

We will end up with all the nodes on the left side! This unbalanced tree is no better than a LinkedList, so finding an element would take _O(n)_. 😱

Looking for something in an unbalanced tree is like looking for a word in the dictionary page by page. When the tree is balanced, you can open the dictionary in the middle and from there you know if you have to go left or right depending on the alphabet and the word you are looking for.

We need to find a way to balance the tree!

If the tree was **balanced**, then we could find elements in _O(log n)_ instead of going through each node. Let's talk about what balanced tree means.

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/images/balanced-vs-non-balanced-tree.jpg "Balanced vs unbalanced Tree")

If we are searching for `7` in the non-balanced tree, we have to go from 1 to 7. However, in the balanced tree, we visit: `4`, `6`, and `7`. It gets even worse with larger trees. If you have one million nodes, searching for a non-existing element might require to visit all million while on a balanced tree it just requires 20 visits! That's a huge difference!

We are going to solve this issue in the next post using self-balanced trees (AVL trees).

[](#Summary "Summary")Summary
-----------------------------

We have covered much ground for trees. Let's sum it up with bullets:

*   The tree is a data structure where a node has 0 or more descendants/children.
*   Tree nodes don't have cycles (acyclic). If it has cycles, it is a [Graph data structure](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/2018/05/14/Data-Structures-for-Beginners-Graphs-Time-Complexity-tutorial/) instead.
*   Trees with two children or less are called: Binary Tree
*   When a Binary Tree is sorted in a way that the left value is less than the parent and the right children is higher, then and only then we have a **Binary Search Tree**.
*   You can visit a tree in a pre/post/in-order fashion.
*   An unbalanced has a time complexity of _O(n)_. 🤦🏻‍
*   A balanced has a time complexity of _O(log n)_. 🎉


# Graph data structure cheat sheet for coding interviews.

> Covering algorithms: BFS, DFS, detect cycle and find the shortest path

The most commonly used representations of a graph are adjacency matrix (a 2D array of size V x V where V is the number of vertices in a graph) and adjacency list (an array of lists represents the list of vertices adjacent to each vertex).

In the following sections, let's take a look must-to-know algorithms related to graph data structure. For simplicity, adjacency list representation is used in all the implementation.

1\. Breadth First Search (BFS)
------------------------------

Input (graph 1): graph = \[\[1,2\], \[0,2,4\], \[0,1,3\], \[2\], \[1\]\], s = 0  
Output: **0 1 2 4 3**

Breadth First Search for a graph is similar to [Breadth First Traversal of a tree](https://medium.com/@nhudinhtuan/binary-tree-traversals-cheat-sheet-for-coding-interviews-a71af9fe1dba). However, graphs may contain cycles, so we may visit the same vertex again and again. To avoid that, we can use boolean visited array to mark the visited vertices.

The above code traverses only the vertices reachable from a given source vertex. To do complete BFS traversal for disconnected graphs, we need to call BFS for every vertex.

Time complexity is O(V+E) where V is number of vertices in the graph and E is number of edges in the graph.

2\. Depth First Search (DFS)
----------------------------

Input (graph 1): graph = \[\[1,2\], \[0,2,4\], \[0,1,3\], \[2\], \[1\]\], s = 0  
Output: **0 1 2 3 4 (or 0 2 3 1 4)**

Similar to BFS, we also need to use a boolean array to mark the visited vertices for DFS.

Recursive implementation:

Iterative implementation using stack. Please note that the stack may _contain the same vertex twice,_ so we need to check the visited set before printing.

For both implementations, all the vertices may not be reachable from a given vertex (example Disconnected graph). To do complete DFS traversal, we need to call DFS for every vertex.

Time complexity is O(V+E) where V is the number of vertices in the graph and E is number of edges in the graph.

3\. Detect cycle in directed graph
----------------------------------

Given a **directed** graph, return true if the given graph contains at least one cycle, else return false.Input (graph 2): graph = \[\[1,2\], \[2\], \[0,3\], \[\], \[1\]\]  
Output: **True**

DFS can be used to detect a cycle in a Graph. There is a cycle in a graph only if there is a back edge that is from a vertex to itself (self-loop) or to one of its ancestor in DFS stack tree.

Time complexity is the same as the normal DFS, which is O(V+E).

4\. Detect cycle in undirected graph
------------------------------------

Given an **undirected** graph, return true if the given graph contains at least one cycle, else return false.Input (graph 1): graph = \[\[1,2\], \[0,2,4\], \[0,1,3\], \[2\], \[1\]\]  
Output: **True**

For undirected graph, we don't need to keep track of the whole stack tree (compared to directed graph cases). For every vertex 'v', if there is an adjacent 'u' such that u is already visited and u is not a parent of v, then there is a cycle in the graph.

Time complexity is the same as the normal DFS, which is O(V+E).

5\. BFS with multiple sources
-----------------------------

In some problems, you need to start BFS for multiple vertices as well as calculate the travel depth. Let's take a look at a typical problem.

Rotting Oranges: [https://leetcode.com/problems/rotting-oranges/](https://leetcode.com/problems/rotting-oranges/)

![Image for post](https://miro.medium.com/max/3442/1*_l111oYuT3XcwqfhuQ2Mdg.jpeg)

In this question, we use a BFS to model the process. The grid is considered as a graph (an orange cell is a vertex and there are edges to the cell's neighbours). Starting BFS from all rotten oranges with 'depth' 0, and then travel to their neighbours which have 1 more depth. At the end, if we still have unvisited oranges, return -1 as this is impossible to rotten all oranges.

Time complexity is O(V+E) = O(the number of cells in grid).

6\. Topological sort
--------------------

Topological sorting is a linear ordering of vertices such that for every directed edge uv, vertex u comes before v in the ordering. Topological sorting is only possible for [Directed Acyclic Graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph).

![Image for post](https://miro.medium.com/max/2402/1*kXXJJRWrD6vhdDqc6RnEtA.jpeg)

Given a **DAG**, return the topological sortingInput: graph = \[\[1,2\], \[2\], \[3\], \[\], \[1\]\]  
Output: **4 0 1 2 3**

In normal DFS, we print the vertex at the beginning of the recursive function. To find the topological sorting, we modify DFS to make it first recursively call for all its adjacent vertices, then push its value to a stack. At the end, we print out the stack.

Time complexity is the same as the normal DFS, which is O(V+E).

7\. Shortest path in an unweighted graph
----------------------------------------

Given a unweighted graph, a source and a destination, we need to find shortest path from source to destination.Input (graph 1): graph = \[\[1,2\], \[0,2,4\], \[0,1,3\], \[2\], \[1\]\], s=4, d=0  
Output: **4 1 0**Input (graph 2): graph = \[\[1,2\], \[2\], \[0, 3\], \[\], \[1\]\], s=1, d=0  
Output: **1 2 0**

For this question, we use BFS and keep storing the predecessor of a given vertex while doing the breadth first search. At the end, we use the predecessor array to print the path.

Time complexity is the same as normal BFS, which is O(V+E).

7\. Shortest path in a weighted graph
-------------------------------------

Given a graph and a source vertex in graph, find shortest distances from source to all vertices in the given graph.Input: graph = \[\[\[1, 2\], \[2, 6\]\], \[\[2, 1\]\], \[\[0, 1\], \[3, 3\]\], \[\], \[\[1, 1\]\]\], s=0  
Output: **\[0, 2, 3, 6, inf\]**

![Image for post](https://miro.medium.com/max/3126/1*TPDkarMgeeG5kRf8z1NxTA.jpeg)

In this problem, we deal with weighted graph (a real number is associated with each edge of graph). The graph is represented as an adjacency list whose items are a pair of target vertex & weight. Dijkstra's algorithm is used to find the shortest path from a starting vertex to other vertices. The algorithm works for both directed or undirected graph as long as it _does not have negative weight on an edge._

You can read more about Dijkstra's algorithm at [here](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm). The below is my implementation using priority queue.

The above implementation only returns the distances. You can add a predecessor array (similar to shortest path in an unweighted graph) to print out the path. Time complexity is O(V + VlogE), where V is number of vertices in the graph and E is the number of edges in the graph.

You can practice the graph data structure with the following questions:

1.  [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
2.  [Clone Graph](https://leetcode.com/problems/clone-graph/)
3.  [Course Schedule](https://leetcode.com/problems/course-schedule/)
4.  [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
5.  [Number of Islands](https://leetcode.com/problems/number-of-islands/)
6.  [Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
7.  [Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/)
8.  [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
9.  [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) (hint: Dijkstra's algorithm)
10.  [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/solution/) (hints: topology sorting)


[Source](https://towardsdatascience.com/graph-data-structure-cheat-sheet-for-coding-interviews-a38aadf8aa87)
