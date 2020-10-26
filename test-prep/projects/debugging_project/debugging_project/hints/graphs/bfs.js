function breadthFirstSearch(startingNode, targetVal) {
    const queue = []; // bug here
    const visited = new Set();

    while (queue){ // bug here
        let curr = queue.pop(); // and here 
        // missing a line here!
        if (curr.val === targetVal) return curr;
        visited.add(curr.val);
        queue.push(node.neighbors); // bug here
    };
    return null;
}