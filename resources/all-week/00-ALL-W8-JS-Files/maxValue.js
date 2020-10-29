
function maxValue(node, visited=new Set()) {
    if (visited.has(node)) return -Infinity;
    visited.add(node);
    let neighborMaxes = node.neighbors.map((neighbor) => maxValue(neighbor, visited));
    return Math.max(node.val, ...neighborMaxes);
}

// example

const { GraphNode } = require('./graph_node');

let seven = new GraphNode(7);
let eight = new GraphNode(8);
let nine = new GraphNode(9);
seven.neighbors = [eight];
eight.neighbors = [nine];
nine.neighbors = [seven];

console.log(maxValue(seven)); // should equal 9