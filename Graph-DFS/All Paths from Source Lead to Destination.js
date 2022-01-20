/*
1059. All Paths from Source Lead to Destination

Return true if and only if all roads from source lead to destination.

https://leetcode.com/problems/all-paths-from-source-lead-to-destination/
https://www.fatalerrors.org/a/leetcode-1059-all-paths-from-source-lead-to-destination.html
*/

/*
Source 是否最终落在 Distination上，不能落在其他出度为0的node上， 不能有环
DFS + Backtracking

Time O(V + E)

Space O(n)
*/

function leadsToDestination(n, edges, source, destination) {
  // build graph
  const graph = new Map();
  for (const [n1, n2] of edges) {
    if (graph.has(n1)) {
      graph.set(n1, []);
    }
    graph.get(n1).push(n2);
  }

  const dfs = (curr, destination, visited) => {
    if (!graph.has(cur)) {
      // curr 出度为0
      return curr == destination;
    }
    visited.add(curr);
    for (const neighbor of graph.get(curr)) {
      if (visited.has(neighbor) || !dfs(neighbor, end, visited)) {
        return false;
      }
    }
    visited.remove(curr);
  };

  return dfs(source, destination, new Set());
}
