class Set {
    constructor() {
        this.values = [];
        this.numberOfValues = 0;
    }
    add(value) {
        if (!~this.values.indexOf(value)) {
            this.values.push(value);
            this.numberOfValues++;
        }
    }
    remove(value) {
        let index = this.values.indexOf(value);
        if (~index) {
            this.values.splice(index, 1);
            this.numberOfValues--;
        }
    }
    contains(value) {
        return this.values.indexOf(value) !== -1;
    }
    union(set) {
        let newSet = new Set();
        set.values.forEach(function (value) {
            newSet.add(value);
        });
        this.values.forEach(function (value) {
            newSet.add(value);
        });
        return newSet;
    }
    intersect(set) {
        let newSet = new Set();
        this.values.forEach(function (value) {
            if (set.contains(value)) {
                newSet.add(value);
            }
        });
        return newSet;
    }
    difference(set) {
        let newSet = new Set();
        this.values.forEach(function (value) {
            if (!set.contains(value)) {
                newSet.add(value);
            }
        });
        return newSet;
    }
    isSubset(set) {
        return set.values.every(function (value) {
            return this.contains(value);
        }, this);
    }
    length() {
        return this.numberOfValues;
    }
    print() {
        console.log(this.values.join(" "));
    }
}
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.print(); // => 1 2 3 4
set.remove(3);
set.print(); // => 1 2 4
console.log("contains 4 is true:", set.contains(4)); // => true
console.log("contains 3 is false:", set.contains(3)); // => false
console.log("---");
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
console.log("set1 subset of set is true:", set.isSubset(set1)); // => true
console.log("set2 subset of set is false:", set.isSubset(set2)); // => false
console.log("set1 length gives 2:", set1.length()); // => 2
console.log("set3 length gives 3:", set3.length()); // => 3

/*
   ~ js-files : (master) node set.js 
1 2 3 4
1 2 4
contains 4 is true: true
contains 3 is false: false
---
1 2 3
2
4
3
set1 subset of set is true: true
set2 subset of set is false: false
set1 length gives 2: 2
set3 length gives 3: 3
*/
