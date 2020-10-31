function breadthFirstSearch(startingNode, targetVal) {
    // console.log("----------------");
    // console.log(startingNode);
    // console.log(startingVal);
    // console.log("----------------");
    const queueOfNodesToCheck = [ startingNode ];
    const visitedNodes = new Set();//makes it easier to make sure there are no values revisited.
    while ( queueOfNodesToCheck.length > 0 ) {
        const nodeWeAreChecking = queueOfNodesToCheck.shift();
        if ( targetVal === nodeWeAreChecking.val ) {
            return nodeWeAreChecking;
        }
        visitedNodes.add( nodesWeAreChecking );
        if ( visitedNodes.has( nodeWeAreChecking ) ) {
            visitedNodes.add( nodesWeAreChecking );
            const neghibours = nodeWeAreChecking.neghibours;
            neighbours.forEach( ( neighbor ) )=> {
                queueOfNodesToCheckToCheck.push( neighbor );
            }
        }
    }
    
    
}
