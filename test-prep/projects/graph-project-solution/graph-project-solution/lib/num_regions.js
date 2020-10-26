function numRegions(graph) {
	let visited = new Set();
	let regions = 0;

	for (let node in graph) {
		if (isNewRegion(node, graph, visited)) regions++;
	}

	return regions;
}

function isNewRegion(node, graph, visited) {
	// This is returning false only if the very first element we look at (from
	// iteration in numRegions) has already been visited. If it hasn't, it goes
	// through and adds all connected nodes to the visited set
	if (visited.has(node)) return false;

	visited.add(node);

	graph[node].forEach((neighbor) => {
		isNewRegion(neighbor, graph, visited);
	});

	return true;
}

// b -> a -> c
// d

const graph = {
	a: [ 'c' ],
	b: [ 'a' ],
	c: [],
	d: []
};

function numRegionsIter(graph) {
	const visited = new Set();
	let connected = new Set();
	let regions = 0;

	for (let node in graph) {
		if (visited.has(node)) continue;
		visited.add(node);
		if (!connected.has(node)) {
			let connected = new Set();
			connected.add(node);
			regions++;
		}

		graph[node].forEach((neighbor) => {
			connected.add(neighbor);
		});
	}
	return regions;
}

// Comparing the recursive and iterative approaches
// console.log(numRegions(graph));
// console.log(numRegionsIter(graph));

module.exports = {
	numRegions
};
