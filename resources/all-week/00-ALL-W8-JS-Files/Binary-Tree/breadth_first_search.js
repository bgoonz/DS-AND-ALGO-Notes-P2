// Utilizing a queue instead of recursion makes sense in this scenario because
// we want to implement a First-In First-Out (FIFO) traversal approach.
// As we encounter neighbors, we want to make sure we explored all of the previous
// neighbors before further exploring a branch.
function breadthFirstSearch(startingNode, targetVal) {
	// We initialize our queue with our starting node so that we enter our loop.
	let queue = [ startingNode ];
	let visited = new Set();

	// While we still have nodes that we need to explore...
	while (queue.length) {
		// Shift the first element off of our queue. This will always be the oldest
		// element added in, indicating it is as close to our starting point as possible.
		let node = queue.shift();
		// If we've already been to this node, continue to the next iteration and
		// look at the next element in the queue. We don't want to explore this
		// node or its neighbors again.
		if (visited.has(node)) continue;
		// Mark that we have been to this node by adding it to our set.
		visited.add(node);
		// If we found our value, return the reference to our node.
		if (node.val === targetVal) return node;
		// If we didn't fine our value, add our neighbors to the end of the queue.
		// Any nodes that were already in our queue will be explored first.
		queue.push(...node.neighbors);
	}
	// If we went through all of the reachable elements in our graph without
	// finding our target value, we return null.
	return null;
}

module.exports = {
	breadthFirstSearch
};
