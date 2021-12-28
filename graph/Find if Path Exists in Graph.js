/*
1971. Find if Path Exists in Graph

https://leetcode.com/problems/find-if-path-exists-in-graph/

*/
/*-----------------------------------------------------------
  BFS check if path exists or not
-----------------------------------------------------------*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function (n, edges, start, end) {
  const graph = new Map();

  for (let i = 0; i < edges.length; i++) {
    if (!graph.has(edges[i][0])) {
      graph.set(edges[i][0], []);
    }
    graph.get(edges[i][0]).push(edges[i][1]);

    if (!graph.has(edges[i][1])) {
      graph.set(edges[i][1], []);
    }
    graph.get(edges[i][1]).push(edges[i][0]);
  }

  const q = [start];
  const visited = new Array(n).fill(false);
  visited[start] = true;
  while (q.length > 0) {
    console.log(q);
    const curr = q.shift();

    if (curr == end) return true;
    if (graph.has(curr)) {
      for (const neighbour of graph.get(curr)) {
        if (!visited[neighbour]) {
          q.push(neighbour);
          visited[neighbour] = true;
        }
      }
    }
  }
  return false;
};
