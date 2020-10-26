function maxValue(node, visited=new Set()) {
    if (visited.has(node)) return null; // bug here
    visited.add(node);
    let neighborMaxes = [];

    // bug somewhere here
    node.neighbors.forEach((neighbor) => 
        neighborMaxes.push(maxValue(neighbor)));

    return Math.max(neighborMaxes); // bug here
}