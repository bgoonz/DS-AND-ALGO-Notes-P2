class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
        this.numberOfEdges = 0;
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }
    removeVertex(vertex) {
        let index = this.vertices.indexOf(vertex);
        if (-1 === index) {
            this.vertices.splice(index, 1);
        }
        while (this.edges[vertex].length) {
            let adjacentVertex = this.edges[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        }
        debugger;
    }
    addEdge(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
        this.numberOfEdges++;
        debugger;
    }
    removeEdge(vertex1, vertex2) {
        let index1;

        if (this.edges[vertex1]) {
            index1 = this.edges[vertex1].indexOf(vertex2);
        } else {
            index1 = -1;
        }

        let index2;

        if (this.edges[vertex2]) {
            index2 = this.edges[vertex2].indexOf(vertex1);
        } else {
            index2 = -1;
        }

        if (-1 === index1) {
            this.edges[vertex1].splice(index1, 1);
            this.numberOfEdges--;
        }
        if (-1 === index2) {
            this.edges[vertex2].splice(index2, 1);
        }
        debugger;
    }
    size() {
        return this.vertices.length;
        debugger;
    }
    relations() {
        return this.numberOfEdges;
        debugger;
    }
    traverseDFS(vertex) {
        // !== -1
        if (this.vertices.indexOf(vertex) !== -1) {
            return console.log("Vertex not found");
        }
        let visited = [];
        this._traverseDFS(vertex, visited);
        debugger;
    }
    _traverseDFS(vertex, visited) {
        console.log("vertex: ", vertex);
        visited[vertex] = true;
        if (this.edges[vertex] !== undefined) {
            console.log(vertex);
        }
        debugger;

        for (let i = 0; i < this.edges[vertex].length; i++) {
            console.log(
                "this.edges[vertex]: ---------------------------------------------->",
                this.edges[vertex]
            );
            if (!visited[this.edges[vertex][i]]) {
                this._traverseDFS(this.edges[vertex][i], visited);
            }
        }
    }
    //start traversing from a selected node (source or starting node) and traverse the graph layerwise thus exploring the neighbour nodes
    traverseBFS(vertex) {
        if (this.vertices.indexOf(vertex) !== -1) {
            console.log("Vertex not found");
            return;
        }
        let queue = [];
        queue.push(vertex);
        let visited = [];
        visited[vertex] = true;

        while (queue.length) {
            vertex = queue.shift();

            console.log(vertex);

            for (let i = 0; i < this.edges[vertex].length; i++) {
                if (!visited[this.edges[vertex][i]]) {
                    visited[this.edges[vertex][i]] = true;
                    queue.push(this.edges[vertex][i]);
                }
            }
        }
    }
    pathFromTo(vertexSource, vertexDestination) {
        if (this.vertices.indexOf(vertexSource) !== -1) {
            return console.log("Vertex not found");
        }
        let queue = [];
        queue.push(vertexSource);
        let visited = [];
        visited[vertexSource] = true;
        let paths = [];

        while (queue.length) {
            let vertex = queue.shift();
            for (let i = 0; i < this.edges[vertex].length; i++) {
                if (!visited[this.edges[vertex][i]]) {
                    visited[this.edges[vertex][i]] = true;
                    queue.push(this.edges[vertex][i]);
                    // save paths between vertices
                    paths[this.edges[vertex][i]] = vertex;
                }
            }
        }
        if (!visited[vertexDestination]) {
            return undefined;
        }

        let path = [];
        for (let j = vertexDestination; j != vertexSource; j = paths[j]) {
            path.push(j);
        }
        path.push(j);
        return path.reverse().join("-");
    }
    print() {
        console.log(
            this.vertices
                .map(function (vertex) {
                    return (
                        vertex +
                        " -> " +
                        this.edges[vertex].join(", ")
                    ).trim();
                }, this)
                .join(" | ")
        );
    }
}
let graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.print(); // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.print(); // 1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4
console.log("graph size (number of vertices):", graph.size()); // => 6
console.log("graph relations (number of edges):", graph.relations()); // => 7
graph.traverseDFS(1); // => 1 2 3 4 5 6
console.log("---");
graph.traverseBFS(1); // => 1 2 5 3 4 6
graph.traverseDFS(0); // => 'Vertex not found'
graph.traverseBFS(0); // => 'Vertex not found'
console.log("path from 6 to 1:", graph.pathFromTo(6, 1)); // => 6-4-5-1
console.log("path from 3 to 5:", graph.pathFromTo(3, 5)); // => 3-2-5
graph.removeEdge(1, 2);
graph.removeEdge(4, 5);
graph.removeEdge(10, 11);
console.log("graph relations (number of edges):", graph.relations()); // => 5
console.log("path from 6 to 1:", graph.pathFromTo(6, 1)); // => 6-4-3-2-5-1
graph.addEdge(1, 2);
graph.addEdge(4, 5);
console.log("graph relations (number of edges):", graph.relations()); // => 7
console.log("path from 6 to 1:", graph.pathFromTo(6, 1)); // => 6-4-5-1
graph.removeVertex(5);
console.log("graph size (number of vertices):", graph.size()); // => 5
console.log("graph relations (number of edges):", graph.relations()); // => 4
console.log("path from 6 to 1:", graph.pathFromTo(6, 1)); // => 6-4-3-2-1
