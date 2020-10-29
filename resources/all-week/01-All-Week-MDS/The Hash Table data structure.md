# The Hash Table data structure

> The #data-structures series is a collection of posts about reimplemented data structures in JavaScript.

The [#data-structures series](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/category/data-structures-in-javascript/) is a collection of posts about reimplemented data structures in JavaScript.

If you are not familiar with data structures, a quick introduction and the full list of reimplemented data structures can be found in the [introduction post of the series on data structures in JavaScript](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/data-structures-in-javascript/).

If you feel comfortable with the concept of each data structure and only want to see the code, have a look at the summary post of the series. It removes all explanations and contains only the [JavaScript code for all data structures](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/data-structures-in-javascript/data-structures-in-javascript-all-the-code/) discussed in the series.

Get the code on Github
----------------------

Of course, all the code can also be found on Github in the repository [data-structures-in-javascript](https://github.com/benoitvallon/computer-science-in-javascript/tree/master/data-structures-in-javascript).

Definition
----------

> A Hash Table (Hash Map) is a data structure used to implement an associative array, a structure that can map keys to values. A Hash Table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. **From [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)**

Hash Tables are considered the more efficient data structure for lookup and for this reason, they are widely used.

Complexity
----------

| Average |   |   |   |
| --- | --- | --- | --- |
| Access | Search | Insertion | Deletion |
| \- | O(1) | O(1) | O(1) |

To get a full overview of the time and space complexity of the Hash Table data structure, have a look to this excellent [Big O cheat sheet](http://bigocheatsheet.com/).

The code
--------

Because my `calculateHash` function is overly simple (mod of the key length) I need to be sure that I am able to save more than one value for every hash. As a consequence I am storing another object for every hash in my Hash Table.

A better example would have had a `calculateHash` function that returns only one possible hash for every key. I could have done that with a simple JavaScript `Object` (the hash being the same as the key) but the specificity of the Hash Table data structure is to have this special `calculateHash` function.

    function HashTable(size) {
      this.values = {};
      this.numberOfValues = 0;
      this.size = size;
    }
    
    HashTable.prototype.add = function(key, value) {
      var hash = this.calculateHash(key);
      if(!this.values.hasOwnProperty(hash)) {
        this.values[hash] = {};
      }
      if(!this.values[hash].hasOwnProperty(key)) {
        this.numberOfValues++;
      }
      this.values[hash][key] = value;
    };
    HashTable.prototype.remove = function(key) {
      var hash = this.calculateHash(key);
      if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
        delete this.values[hash][key];
        this.numberOfValues--;
      }
    };
    HashTable.prototype.calculateHash = function(key) {
      return key.toString().length % this.size;
    };
    HashTable.prototype.search = function(key) {
      var hash = this.calculateHash(key);
      if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
        return this.values[hash][key];
      } else {
        return null;
      }
    };
    HashTable.prototype.length = function() {
      return this.numberOfValues;
    };
    HashTable.prototype.print = function() {
      var string = '';
      for(var value in this.values) {
        for(var key in this.values[value]) {
          string += this.values[value][key] + ' ';
        }
      }
      console.log(string.trim());
    };
    
    var hashTable = new HashTable(3);
    hashTable.add('first', 1);
    hashTable.add('second', 2);
    hashTable.add('third', 3);
    hashTable.add('fourth', 4);
    hashTable.add('fifth', 5);
    hashTable.print(); // => 2 4 1 3 5
    console.log('length gives 5:', hashTable.length()); // => 5
    console.log('search second gives 2:', hashTable.search('second')); // => 2
    hashTable.remove('fourth');
    hashTable.remove('first');
    hashTable.print(); // => 2 3 5
    console.log('length gives 3:', hashTable.length()); // => 3
    

* * *

* * *

* * *


[Source](https://blog.benoitvallon.com/data-structures-in-javascript/the-hash-table-data-structure/)