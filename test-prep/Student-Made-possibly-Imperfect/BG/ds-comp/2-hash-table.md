# The Hash Table data structure


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



The code
--------

Because my `calculateHash` function is overly simple (mod of the key length) I need to be sure that I am able to save more than one value for every hash. As a consequence I am storing another object for every hash in my Hash Table.

A better example would have had a `calculateHash` function that returns only one possible hash for every key. I could have done that with a simple JavaScript `Object` (the hash being the same as the key) but the specificity of the Hash Table data structure is to have this special `calculateHash` function.
```js
  class HashTable {
    constructor( size ) {
        this.values = {};
        this.numberOfValues = 0;
        this.size = size;
    }
    add( key, value ) {
        let hash = this.calculateHash( key );
        if ( !this.values.hasOwnProperty( hash ) ) {
            this.values[ hash ] = {};
        }
        if ( !this.values[ hash ].hasOwnProperty( key ) ) {
            this.numberOfValues++;
        }
        this.values[ hash ][ key ] = value;
    }
    remove( key ) {
        let hash = this.calculateHash( key );
        if (
            this.values.hasOwnProperty( hash ) &&
            this.values[ hash ].hasOwnProperty( key )
        ) {
            delete this.values[ hash ][ key ];
            this.numberOfValues--;
        }
    }
    calculateHash( key ) {
        return key.toString().length % this.size;
    }
    search( key ) {
        let hash = this.calculateHash( key );
        if (
            this.values.hasOwnProperty( hash ) &&
            this.values[ hash ].hasOwnProperty( key )
        ) {
            return this.values[ hash ][ key ];
        } else {
            return null;
        }
    }
    length() {
        return this.numberOfValues;
    }
    print() {
        let string = "";
        for ( let value in this.values ) {
            for ( let key in this.values[ value ] ) {
                string += this.values[ value ][ key ] + " ";
            }
        }
        console.log( string.trim() );
    }
}
let hashTable = new HashTable( 3 );
hashTable.add( "first", 1 );
hashTable.add( "second", 2 );
hashTable.add( "third", 3 );
hashTable.add( "fourth", 4 );
hashTable.add( "fifth", 5 );
hashTable.print(); // => 2 4 1 3 5
console.log( "length gives 5:", hashTable.length() ); // => 5
console.log( "search second gives 2:", hashTable.search( "second" ) ); // => 2
hashTable.remove( "fourth" );
hashTable.remove( "first" );
hashTable.print(); // => 2 3 5
console.log( "length gives 3:", hashTable.length() ); // => 3
/*
   ~ js-files : (master) node hash.js 
2 4 1 3 5
length gives 5: 5
search second gives 2: 2
2 3 5
length gives 3: 3
*/
```
    

* * *

* * *

* * *


[Source](http://blog.benoitvallon.com/data-structures-in-javascript/the-hash-table-data-structure/)
