function numRegions(graph) {
    const set = new Set();
    let regions = 0;
    for (key in graph) {
        // missing a line in this general area
        regions += 1;
        
        // and one in this general area
        set.add(...graph[key]);
    };
    return regions;
}