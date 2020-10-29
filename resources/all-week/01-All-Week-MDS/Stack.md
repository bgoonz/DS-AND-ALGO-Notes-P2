# The Stack data structure

> The #data-structures series is a collection of posts about reimplemented data structures in JavaScript.

The [#data-structures series](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/category/data-structures-in-javascript/) is a collection of posts about reimplemented data structures in JavaScript.

If you are not familiar with data structures, a quick introduction and the full list of reimplemented data structures can be found in the [introduction post of the series on data structures in JavaScript](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/data-structures-in-javascript/).

If you feel comfortable with the concept of each data structure and only want to see the code, have a look at the summary post of the series. It removes all explanations and contains only the [JavaScript code for all data structures](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/data-structures-in-javascript-all-the-code/) discussed in the series.

Get the code on Github
----------------------

Of course, all the code can also be found on Github in the repository [data-structures-in-javascript](https://github.com/benoitvallon/computer-science-in-javascript/tree/master/data-structures-in-javascript).

Definition
----------

> A Stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a Stack gives rise to its alternative name, LIFO (for last in, first out). **From [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))**

A Stack often has a third method peek which allows to check the last pushed element without popping it.

Complexity
----------

| Average |   |   |   |
| --- | --- | --- | --- |
| Access | Search | Insertion | Deletion |
| O(n) | O(n) | O(1) | O(1) |

To get a full overview of the time and space complexity of the Stack data structure, have a look to this excellent [Big O cheat sheet](http://bigocheatsheet.com/).

The code
--------

    function Stack() {
      this.stack = [];
    }
    
    Stack.prototype.push = function(value) {
      this.stack.push(value);
    };
    Stack.prototype.pop = function() {
      return this.stack.pop();
    };
    Stack.prototype.peek = function() {
      return this.stack[this.stack.length - 1];
    };
    Stack.prototype.length = function() {
      return this.stack.length;
    };
    Stack.prototype.print = function() {
      console.log(this.stack.join(' '));
    };
    
    var stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.print(); // => 1 2 3
    console.log('length is 3:', stack.length()); // => 3
    console.log('peek is 3:', stack.peek()); // => 3
    console.log('pop is 3:', stack.pop()); // => 3
    stack.print(); // => 1 2
    console.log('pop is 2:', stack.pop());  // => 2
    console.log('length is 1:', stack.length()); // => 1
    console.log('pop is 1:', stack.pop()); // => 1
    stack.print(); // => ''
    console.log('peek is undefined:', stack.peek()); // => undefined
    console.log('pop is undefined:', stack.pop()); // => undefined
    

* * *

* * *

* * *


[Source](https://blog.benoitvallon.com/data-structures-in-javascript/the-stack-data-structure/)