/*
310. Minimum Height Trees

Medium

https://leetcode.com/problems/minimum-height-trees/

*/

/*
  https://www.youtube.com/watch?v=-Tk52eP5n3c
  给一棵树，从那个node出发到别的node的距离最小
  BFS + leave cutting

*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  let leaves = [];
  if (n == 1) {
    leaves.push(0);
    return leaves;
  }
  // 1. build the graph
  const graph = new Map();
  for (const [start, end] of edges) {
    if (!graph.has(start)) {
      graph.set(start, []);
    }
    graph.get(start).push(end);
    if (!graph.has(end)) {
      graph.set(end, []);
    }
    graph.get(end).push(start);
  }

  // 2. cut the leave node
  for (let i = 0; i < n; ++i) {
    if (graph.get(i).length == 1) leaves.push(i);
  }
  while (n > 2) {
    n -= leaves.length;
    const newLeaves = [];
    for (const i of leaves) {
      const neighoburs = graph.get(i);
      // cut i
      for (const n of neighoburs) {
        const nn = graph.get(n);
        graph.set(
          n,
          nn.filter((e) => e != i)
        );
      }
      if (graph.get(n).length == 1) newLeaves.push(n);
    }
    leaves = newLeaves;
  }
  return leaves;
};
