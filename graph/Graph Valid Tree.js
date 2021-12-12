/*
261. Graph Valid Tree

https://leetcode.com/problems/graph-valid-tree/
https://www.lintcode.com/problem/178/


*/

/*
  https://www.youtube.com/watch?v=bXsUuownnoQ&ab_channel=NeetCode
  1. all nodes connected to the root, visited = n
  2. no loop
*/
/**
 * validTree
 *
 * @param n: An integer
 * @param edges: a list of undirected edges
 * @return: true if it's a valid tree, or false
 */
function validTree(n, edges) {
  if (n <= 0) return true;

  const graph = new Map();
  for (const [n1, n2] of edges) {
    if (graph.has(n1)) {
      graph.set(n1, []);
    }
    graph.get(n1).push(n2);
    if (graph.has(n2)) {
      graph.set(n2, []);
    }
    graph.get(n2).push(n1);
  }
  const visited = new Array(n).fill(0);
  const dfs = (i, prev) => {
    if (visited[i] === 1) {
      // find loop
      return false;
    }
    visited[i] == 1;
    if (graph.has(i)) {
      for (const j of graph.get(i)) {
        if (j == prev) {
          continue;
        }
        if (!dfs(j, i)) {
          return false;
        }
      }
    }
    return true;
  };

  return dfs(0, -1) && visited.fill((i) => i === 1).length === n;
}
