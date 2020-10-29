# The Set data structure



Definition
----------

> A Set is an abstract data type that can store certain values, without any particular order, and no repeated values. It is a computer implementation of the mathematical concept of a finite Set. **From [Wikipedia](https://en.wikipedia.org/wiki/Set_(abstract_data_type))**

The Set data structure is usually used to test whether elements belong to set of values. Rather then only containing elements, Sets are more used to perform operations on multiple values at once with methods such as `union`, `intersect`, etc…

Complexity
----------

| Average |   |   |   |
| --- | --- | --- | --- |
| Access | Search | Insertion | Deletion |
| \- | O(n) | O(n) | O(n) |



The code
--------
```js
    function Set() {
      this.values = [];
      this.numberOfValues = 0;
    }
    
    Set.prototype.add = function(value) {
      if(!~this.values.indexOf(value)) {
        this.values.push(value);
        this.numberOfValues++;
      }
    };
    Set.prototype.remove = function(value) {
      let index = this.values.indexOf(value);
      if(~index) {
        this.values.splice(index, 1);
        this.numberOfValues--;
      }
    };
    Set.prototype.contains = function(value) {
      return this.values.indexOf(value) !== -1;
    };
    Set.prototype.union = function(set) {
      let newSet = new Set();
      set.values.forEach(function(value) {
        newSet.add(value);
      });
      this.values.forEach(function(value) {
        newSet.add(value);
      });
      return newSet;
    };
    Set.prototype.intersect = function(set) {
      let newSet = new Set();
      this.values.forEach(function(value) {
        if(set.contains(value)) {
          newSet.add(value);
        }
      });
      return newSet;
    };
    Set.prototype.difference = function(set) {
      let newSet = new Set();
      this.values.forEach(function(value) {
        if(!set.contains(value)) {
          newSet.add(value);
        }
      });
      return newSet;
    };
    Set.prototype.isSubset = function(set) {
      return set.values.every(function(value) {
        return this.contains(value);
      }, this);
    };
    Set.prototype.length = function() {
      return this.numberOfValues;
    };
    Set.prototype.print = function() {
      console.log(this.values.join(' '));
    };
    
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(4);
    set.print(); // => 1 2 3 4
    set.remove(3);
    set.print(); // => 1 2 4
    console.log('contains 4 is true:', set.contains(4)); // => true
    console.log('contains 3 is false:', set.contains(3)); // => false
    console.log('---');
    let set1 = new Set();
    set1.add(1);
    set1.add(2);
    let set2 = new Set();
    set2.add(2);
    set2.add(3);
    let set3 = set2.union(set1);
    set3.print(); // => 1 2 3
    let set4 = set2.intersect(set1);
    set4.print(); // => 2
    let set5 = set.difference(set3); // 1 2 4 diff 1 2 3
    set5.print(); // => 4
    let set6 = set3.difference(set); // 1 2 3 diff 1 2 4
    set6.print(); // => 3
    console.log('set1 subset of set is true:', set.isSubset(set1)); // => true
    console.log('set2 subset of set is false:', set.isSubset(set2)); // => false
    console.log('set1 length gives 2:', set1.length()); // => 2
    console.log('set3 length gives 3:', set3.length()); // => 3

```

* * *

* * *

* * *


[Source](http://blog.benoitvallon.com/data-structures-in-javascript/the-set-data-structure/)
