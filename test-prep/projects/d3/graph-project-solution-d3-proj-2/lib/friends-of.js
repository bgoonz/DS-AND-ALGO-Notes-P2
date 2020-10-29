/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 */

function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance) {
	// If we have already reached the maximum distance that we are allowed to travel,
	// we return. This is our base case.
	if (currentDistance >= maxDistance) return;

	// Otherwise we are allowed to explore this node. We add the name to our visited
	// set to indicate that this person is within our maxDistance.
	visited.add(name);

	// We continue our exploration by making our recursive call on each neighbor of
	// this node. We increment our currentDistance in order to represent us taking
	// one step further from our starting location. This recursive step gets us
	// closer to our base case.
	for (let nextFriend of adjacencyList[name]) {
		friendsOfRecursion(nextFriend, adjacencyList, visited, maxDistance, currentDistance + 1);
	}

	// We don't need to return anything from this function because the intention is
	// to modify our set, which we use after we exit recursion.
}

function friendsOf(adjacencyList, name, distance) {
	// If our name is not in the adjacencyList, we do not enter the conditional.
	// Since the default return value of a function is undefined, we do not need an else.
	if (name in adjacencyList) {
		// We create a set in our top level function that we can pass in to our recursion.
		// When we manipulate it in the recursive calls, we will be able to access the
		// updated value back at the end of this function.
		let visited = new Set();

		// We iterate through each of our immediate friends in the adjacency list and
		// make our recursive calls to explore the graph at that node.
		// The 0 that we pass in at the end indicates that we have not made any moves
		// along edges at this point. As we continue our recursion, we will increment this.
		for (let friend of adjacencyList[name]) {
			friendsOfRecursion(friend, adjacencyList, visited, distance, 0);
		}

		// Now that our visited set represents all of the nodes within the specified
		// distance of ourself, we can remove ourself from the set. What remains is
		// all of our friends within that distance.
		visited.delete(name);
		// Since we are expecting an array to be returned, we can convert our modified
		// set into one using Array.from().
		return Array.from(visited);
	}
}

/******************************************************************************
 * Do not change code beneath this line.
 */
try {
	exports.friendsOf = friendsOf;
} catch (e) {
	exports.friendsOf = () => {
		throw new Error('Cannot export friendsOf.');
	};
}
