/*
  1192. Critical Connections in a Network
  
  [Hard]

  A critical connection is a connection that, if removed, will make some servers unable to reach some 
  other server.

  Return all critical connections in the network in any order.

  https://leetcode.com/problems/critical-connections-in-a-network/

  [Amazon]
*/

/*
  https://www.youtube.com/watch?v=mKUsbABiwBI&ab_channel=%E5%B0%8F%E5%B0%8F%E7%A6%8FLeetCode
  DFS
  在无向图中 找bridge, 两个componeent的连接
  1）判断是否已经访问过，2）比较步数来判断是否是critical path
  Since the solution involves running DFS the time complexity is = O(E+V)
*/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
  const result = [];

  const graph = new Map();
  //1. build graph
  for (let i = 0; i < connections.length; i++) {
    const [from, to] = connections[i];
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from).push(to);
    if (!graph.has(to)) {
      graph.set(to, []);
    }
    graph.get(to).push(from);
  }
  // 每个node见过的最小值
  const jump = new Array(n).fill(-1);
  // start from curr node,retun the min steps
  const dfs = (curr, parent, level) => {
    jump[curr] = level + 1;
    for (const child of graph.get(curr)) {
      if (child == parent) {
        continue;
      } else if (jump[child] == -1) {
        // child is not accessed
        jump[curr] = Math.min(jump[curr], dfs(child, curr, level + 1));
      } else {
        // child is accessed.
        jump[curr] = Math.min(jump[curr], jump[child]);
      }
    }
    // 说明有环
    if (jump[curr] == level + 1 && curr != 0) {
      result.push([parent, curr]);
    }
    return jump[curr];
  };

  // main
  dfs(0, -1, 0);
  return result;
};
