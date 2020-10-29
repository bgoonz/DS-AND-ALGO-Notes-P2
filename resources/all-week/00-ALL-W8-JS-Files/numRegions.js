function numRegions(graph) {
    const set = new Set();
    let regions = 0;
    for (key in graph) {
        regions += 1;
        set.add(...graph[key]);
    };
    return regions;
}

// example

let graph1 = {
    'a': ['b'],
    'b': ['a'],
    'c': ['d'],
    'd': ['e', 'c'],
    'e': ['d'],
};
console.log(numRegions(graph1)); // should equal 2