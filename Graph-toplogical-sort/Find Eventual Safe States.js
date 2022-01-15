/*
802. Find Eventual Safe States

Medium

https://leetcode.com/problems/find-eventual-safe-states/

给一个有向图，找出所有不可能进入环的节点。

A node is unsafe if it has cycle or there is a path from it to a node who forms a cycle

*/

/*
  DFS
  Time O(V+E)
  Space O(V+E)

  States: Unkonw, visiting , unsafe, safe
*/
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes_DFS = function (graph) {
  // 0 unkonw, 1 visiting , 2 unsafe, 3 safe
  const state = new Array(graph.length).fill(0);

  const ans = [];
  const dfs = (graph, curr, state) => {
    if (state[curr] == 1) {
      // curr is already visiting. it is a cycle and unsafe;
      state[curr] = 2;
      return 2;
    }
    if (state[curr] != 0) {
      // curr is visited.
      return state[curr];
    }
    state[curr] = 1; // start visit
    for (const next of graph[curr]) {
      if (dfs(graph, next, state) == 2) {
        state[curr] = 2;
        return 2;
      }
    }
    state[curr] = 3;
    return 3;
  };
  for (let i = 0; i < graph.length; i++) {
    if (dfs(graph, i, state) == 3) {
      ans.push(i);
    }
  }

  // ans.sort((a, b) => a - b);
  return ans;
};
