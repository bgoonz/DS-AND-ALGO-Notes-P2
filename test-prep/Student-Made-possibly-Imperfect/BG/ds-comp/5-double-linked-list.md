# The Doubly Linked List data structure

> The #data-structures series is a collection of posts about reimplemented data structures in JavaScript.


Get the code on Github
----------------------

Of course, all the code can also be found on Github in the repository [data-structures-in-javascript](https://github.com/benoitvallon/computer-science-in-javascript/tree/master/data-structures-in-javascript).

Definition
----------

> A Doubly Linked List is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes. **From [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list)**

Having two node links allow traversal in either direction but adding or removing a node in a doubly linked list requires changing more links than the same operations on a Singly Linked List.

Complexity
----------

| Average |   |   |   |
| --- | --- | --- | --- |
| Access | Search | Insertion | Deletion |
| O(n) | O(n) | O(1) | O(1) |



The code
--------
```js
class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.numberOfValues = 0;
    }

    add(data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.numberOfValues++;
    }
    remove(data) {
        var current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = this.head.next;
                    this.head.previous = null;
                } else if (current === this.tail) {
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                } else {
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                }
                this.numberOfValues--;
            }
            current = current.next;
        }
    }
    insertAfter(data, toNodeData) {
        var current = this.head;
        while (current) {
            if (current.data === toNodeData) {
                var node = new Node(data);
                if (current === this.tail) {
                    this.add(data);
                } else {
                    current.next.previous = node;
                    node.previous = current;
                    node.next = current.next;
                    current.next = node;
                    this.numberOfValues++;
                }
            }
            current = current.next;
        }
    }
    traverse(fn) {
        var current = this.head;
        while (current) {
            if (fn) {
                fn(current);
            }
            current = current.next;
        }
    }
    traverseReverse(fn) {
        var current = this.tail;
        while (current) {
            if (fn) {
                fn(current);
            }
            current = current.previous;
        }
    }
    length() {
        return this.numberOfValues;
    }
    print() {
        var string = "";
        var current = this.head;
        while (current) {
            string += current.data + " ";
            current = current.next;
        }
        console.log(string.trim());
    }
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.print(); // => ''
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(4);
doublyLinkedList.print(); // => 1 2 3 4
console.log("length is 4:", doublyLinkedList.length()); // => 4
doublyLinkedList.remove(3); // remove value
doublyLinkedList.print(); // => 1 2 4
doublyLinkedList.remove(9); // remove non existing value
doublyLinkedList.print(); // => 1 2 4
doublyLinkedList.remove(1); // remove head
doublyLinkedList.print(); // => 2 4
doublyLinkedList.remove(4); // remove tail
doublyLinkedList.print(); // => 2
console.log("length is 1:", doublyLinkedList.length()); // => 1
doublyLinkedList.remove(2); // remove tail, the list should be empty
doublyLinkedList.print(); // => ''
console.log("length is 0:", doublyLinkedList.length()); // => 0
doublyLinkedList.add(2);
doublyLinkedList.add(6);
doublyLinkedList.print(); // => 2 6
doublyLinkedList.insertAfter(3, 2);
doublyLinkedList.print(); // => 2 3 6
doublyLinkedList.traverseReverse(function (node) {
    console.log(node.data);
});
doublyLinkedList.insertAfter(4, 3);
doublyLinkedList.print(); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 9); // insertAfter a non existing node
doublyLinkedList.print(); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 4);
doublyLinkedList.insertAfter(7, 6); // insertAfter the tail
doublyLinkedList.print(); // => 2 3 4 5 6 7
doublyLinkedList.add(8); // add node with normal method
doublyLinkedList.print(); // => 2 3 4 5 6 7 8
console.log("length is 7:", doublyLinkedList.length()); // => 7
doublyLinkedList.traverse(function (node) {
    node.data = node.data + 10;
});
doublyLinkedList.print(); // => 12 13 14 15 16 17 18
doublyLinkedList.traverse(function (node) {
    console.log(node.data);
}); // => 12 13 14 15 16 17 18
console.log("length is 7:", doublyLinkedList.length()); // => 7
doublyLinkedList.traverseReverse(function (node) {
    console.log(node.data);
}); // => 18 17 16 15 14 13 12
doublyLinkedList.print(); // => 12 13 14 15 16 17 18
console.log("length is 7:", doublyLinkedList.length()); // => 7
/*
   ~ js-files : (master) node double-linked-list.js 

1 2 3 4
length is 4: 4
1 2 4
1 2 4
2 4
2
length is 1: 1

length is 0: 0
2 6
2 3 6
6
3
2
2 3 4 6
2 3 4 6
2 3 4 5 6 7
2 3 4 5 6 7 8
length is 7: 7
12 13 14 15 16 17 18
12
13
14
15
16
17
18
length is 7: 7
18
17
16
15
14
13
12
12 13 14 15 16 17 18
length is 7: 7
 ~ js-files : (master) 
*/

```
 

* * *

* * *

* * *


[Source](http://blog.benoitvallon.com/data-structures-in-javascript/the-doubly-linked-list-data-structure/)
