/*
1466. Reorder Routes to Make All Paths Lead to the City Zero

https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
*/

/*
https://www.youtube.com/watch?v=m17yOR5_PpI&ab_channel=NeetCode


*/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  // start from city 0 recursively check its neighbors, count outgoing edges

  const visited = new Set();

  const graph = new Map();
  let changes = 0;
  //const edges = Array.from(Array(n), () => Array(n).fill(0)); // out of memory
  const edges = new Set();
  for (const [city1, city2] of connections) {
    if (!graph.has(city1)) {
      graph.set(city1, []);
    }
    graph.get(city1).push(city2);
    if (!graph.has(city2)) {
      graph.set(city2, []);
    }
    graph.get(city2).push(city1);
    edges.add(city1 + "," + city2);
  }

  const dfs = (city) => {
    for (const neighbor of graph.get(city)) {
      if (visited.has(neighbor)) continue;
      // can this neighbor reach city 0
      if (!edges.has(neighbor + "," + city)) {
        changes++;
      }
      visited.add(neighbor);
      dfs(neighbor);
    }
  };

  visited.add(0);
  dfs(0);
  return changes;
};
