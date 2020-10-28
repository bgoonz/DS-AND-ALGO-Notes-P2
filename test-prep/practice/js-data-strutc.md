# Data structures in JavaScript

> The #data-structures series is a collection of posts about reimplemented data structures in JavaScript.

The [#data-structures series](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/category/data-structures-in-javascript/) is a collection of posts about reimplemented data structures in JavaScript.

If you are not familiar with data structures, a quick introduction and the full list of reimplemented data structures can be found in the [introduction post of the series on data structures in JavaScript](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/data-structures-in-javascript/).

If you feel comfortable with the concept of each data structure and only want to see the code, have a look at the summary post of the series. It removes all explanations and contains only the [JavaScript code for all data structures](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/data-structures-in-javascript-all-the-code/) discussed in the series.

Get the code on Github
----------------------

Of course, all the code can also be found on Github in the repository [data-structures-in-javascript](https://github.com/benoitvallon/computer-science-in-javascript/tree/master/data-structures-in-javascript).

*   [Array](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/the-array-data-structure)
*   [Hash Table](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/the-hash-table-data-structure)
*   [Set](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/the-set-data-structure)
*   [Singly Linked List](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/the-singly-linked-list-data-structure)
*   [Doubly Linked List](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/the-doubly-linked-list-data-structure)
*   [Stack](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/the-stack-data-structure)
*   [Queue](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/the-queue-data-structure)
*   [Tree](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/the-tree-data-structure)
*   [Binary Search Tree](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/the-binary-search-tree-data-structure)
*   [Trie](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/the-trie-data-structure)
*   [Graph](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/the-graph-data-structure)

Instead of trying to re-explain what a data structure is, I prefer to leave you with the perfect description [wikipedia](https://en.wikipedia.org/wiki/Data_structure) makes of it.

> In computer science, a data structure is a particular way of organizing data in a computer so that it can be used efficiently. **From [Wikipedia](https://en.wikipedia.org/wiki/Data_structure)**

“used efficiently” here means that according to your needs. You may need for example an organizing structure that allows very fast lookup or it could be very fast insertion or any thing related to your application.

The key thing to remember is that each data structure has it own advantages and disadvantages. There isn’t any one of them that would beat all of the others, that’s the reason why it is important to know them all.

If you hear about data structures, you will for sure hear about their complexity. As said before every data structure has its own advantages and disadvantages, their complexity can be seen as a way of expressing their own advantages and disadvantages easily according to a specific problem.

The complexity is expressed on 2 axes, the space and the time.

The space
---------

The space complexity represents the memory consumption of a data structure. As for most of the things in life, you can’t have it all, so it is with the data structures. You will generally need to trade some time for space or the other way around.

The time
--------

The time complexity for a data structure is in general more diverse than its space complexity.

### Several operations

In contrary to algorithms, when you look at the time complexity for data structures you need to express it for several operations that you can do with data structures. It can be adding elements, deleting elements, accessing an element or even searching for an element.

### Dependent on data

Something that data structure and algorithms have in common when talking about time complexity is that they are both dealing with data. When you deal with data you become dependent on them and as a result the time complexity is also dependent of the data that you received. To solve this problem we talk about 3 different time complexity.

*   The best-case complexity: when the data looks the best
*   The worst-case complexity: when the data looks the worst
*   The average-case complexity: when the data looks average

The big O notation
------------------

The complexity is usually expressed with the [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation). The wikipedia page about this subject is pretty complex but you can find here a good summary of the [different complexity for the most famous data structures and sorting algorithms](http://bigocheatsheet.com/).

![Big O notation cheat sheets](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/img/2016-01-11-data-structures-in-javascript/big-o.png "Big O notation cheat sheets") ![Big O notation cheat sheets](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/img/2016-01-11-data-structures-in-javascript/big-o-complexity.png "Big O notation cheat sheets")

* * *

* * *

* * *


[Source](https://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/)