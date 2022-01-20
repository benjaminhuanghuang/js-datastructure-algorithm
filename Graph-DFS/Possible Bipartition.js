/*
886. Possible Bipartition

https://leetcode.com/problems/possible-bipartition/

# 785. Is Graph Bipartite?
*/

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  // 1. Build graph
  const graph = new Map();
  for (const d of dislikes) {
    if (!graph.has(d[0] - 1)) {
      graph.set(d[0] - 1, []);
    }
    graph.get(d[0] - 1).push(d[1] - 1);

    if (!graph.has(d[1] - 1)) {
      graph.set(d[1] - 1, []);
    }
    graph.get(d[1] - 1).push(d[0] - 1);
  }
  const colored = new Array(n).fill(0); // 0: unknown, 1: red, -1: blue

  // DFS, 把node染成color，对neighbour 反转颜色
  const coloring = (node, color) => {
    if (colored[node]) {
      //检查是否有冲突
      return colored[node] == color;
    }
    colored[node] = color;
    if (graph.has(node)) {
      for (const neighbour of graph.get(node)) {
        if (!coloring(neighbour, -color)) {
          return false;
        }
      }
    }
    return true;
  };

  for (let i = 0; i < n; ++i) if (colored[i] == 0 && !coloring(i, 1)) return false;
  return true;
};
