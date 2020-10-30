function maxValue(node, visited = new Set()) {
    let queue = [node];
    let arr = [];
    while (queue.length) {
        let value = queue.shift();
        if (visited.has(value.val)) continue;
        visited.add(value.val);
        arr.push(value.val)
        if (value.val)
            queue.push(...value.neighbors)
    }

    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max;
    // for(le)
}

module.exports = {
    maxValue
};
