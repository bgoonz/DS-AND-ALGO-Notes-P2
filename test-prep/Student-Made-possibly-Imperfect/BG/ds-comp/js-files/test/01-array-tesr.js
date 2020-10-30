const MyArray = require("../01-array.js");
let array = new MyArray();
array.add(1);
array.add(2);
array.add(3);
array.add(4);
array.print(); // => 1 2 3 4
console.log("search 3 gives index 2:", array.search(3)); // => 2
console.log("getAtIndex 2 gives 3:", array.getAtIndex(2)); // => 3
console.log("length is 4:", array.length()); // => 4
array.remove(3);
array.print(); // => 1 2 4
array.add(5);
array.add(5);
array.print(); // => 1 2 4 5 5
array.remove(5);
array.print(); // => 1 2 4

/*
  1 2 3 4
search 3 gives index 2: 2
getAtIndex 2 gives 3: 3  
length is 4: 4
1 2 4
1 2 4 5 5
1 2 4
*/
