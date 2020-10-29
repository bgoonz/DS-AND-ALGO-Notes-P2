// Recursive
function maxValue(node, visited = new Set()) {
	if (visited.has(node)) return -Infinity;
	visited.add(node);
	let neighborMaxes = node.neighbors.map((neighbor) => maxValue(neighbor, visited));
	return Math.max(node.val, ...neighborMaxes);
}

// Iterative (Stack)
function maxValue(node) {
	const visited = new Set();
	let curMax = node.val;
	const stack = [ node ];
	while (stack.length > 0) {
		const curNode = stack.pop();
		if (visited.has(curNode)) continue;
		visited.add(curNode);
		if (curNode.val > curMax) curMax = curNode.val;
		stack.push(...curNode.neighbors);
	}
	return curMax;
}

module.exports = {
	maxValue
};
