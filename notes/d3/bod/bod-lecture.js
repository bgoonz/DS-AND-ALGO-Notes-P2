//graph.png;
//weighted - graph.png;
//complete-or-connected-graph.png
/*
  the connections between nodes are called edges.
  
  
## Adjacency Matrix

---

**The row index will corespond to the source of an edge** and the _column index will correspond to the edges destination._

- When the edges have a direction, `matrix[i][j]` may not be the same as `matrix[j][i]`
- It is **common to say that a node is adjacent to itself so matrix[x][x] is true for any node
- Will be O(n^2) space complexity

---

### A 2D Array as the method of storing the location of Nodes

let matrix = [

|       | **A**   | **B**  | **C**  | **D**  | **E**  | **F**  |
| ----- | ------- | ------ | ------ | ------ | ------ | ------ |
| **A** | [True,  | True,  | True,  | False, | True,  | False] |
| **B** | [False, | True,  | False, | False, | False, | False] |
| **C** | [False, | True,  | True,  | True,  | False, | False] |
| **D** | [False, | False, | False, | True,  | False, | False] |
| **E** | [True,  | False, | False, | False, | True,  | False] |
| **F** | [False, | False, | False, | False, | True,  | True]  |

];

---

## Adjacency List

---

Seeks to solve the shortcomings of the matrix implementation. It uses an object where keys represent node labels and values associated with that key are the adjacent nodes.

---

```js
let graph = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};
  
  //---------------------------------------------------
  Dense graph - edge count is greated than the node count.
  
  A sparse graph has more nodes than edges.
  //-----------------------------------------------------
  
  
  Directed graph... edges on a digraph have a specified direction of transversal.
  
  directed-graph.png
  
  
  path.png
  
  
  cycle.png
  
  
*/
