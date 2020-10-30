function breadthFirstSearch(startingNode, targetVal) {
    // We initialize our queue with our starting node so that we enter our loop.
    let queue = [startingNode];
    let visited = new Set();

    // While we still have nodes that we need to explore...
    while (queue.length) {
        let node = queue.shift();
        if (visited.has(node)) continue;
        visited.add(node);
        if (node.val === targetVal) return node;
        queue.push(...node.neighbors);
    }
    return null;
};

module.exports = {
    breadthFirstSearch
};
