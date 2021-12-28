/*

  https://www.youtube.com/watch?v=SmnUqWmWvz0&ab_channel=BytebyByte
*/

class Node {
  constructor() {
    this.neighbors = [];
  }
}
/*
  BFS

*/
/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPath = function (a, b) {
  const toVisit = [a];
  const partens = new Map();
  parents.set(a, null);  // node->parents

  while (toVisit.length > 0) {
    const curr = toVisit.shift();
    if (curr == b) break;

    for (const node of curr.neighbors) {
      toVisit.push(node);
      partens.set(n, curr);
    }
    if(!partens.has(b)) // Find cycle
    {
      return null;
    }

    const path = [];
    let curr = b;
    while( curr ){
      path.unshift(a);
      curr = partens.get(curr);
    }
    return path; 
  }
};
