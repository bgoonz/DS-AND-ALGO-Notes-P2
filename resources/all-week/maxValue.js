
function maxValue(node, visited=new Set()) {
    if (visited.has(node)) return null;
    visited.add(node);
    let neighborMaxes = [];

    node.neighbors.forEach((neighbor) => 
        neighborMaxes.push(maxValue(neighbor)));

    return Math.max(neighborMaxes);
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

module.exports = { maxValue };