/*
399. Evaluate Division

Medium

https://leetcode.com/problems/evaluate-division/
*/
/*

https://zxi.mytechroad.com/blog/graph/leetcode-399-evaluate-division/

Solution 1: DFS

Time complexity O(equations + queries * equations)
Space complexity O(e)
*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  //1. Build a graph
  // A/B = n, key is A, value is <B,n>
  const graph = new Map();
  for (let i = 0; i < equations.length; ++i) {
    const A = equations[i][0];
    const B = equations[i][1];
    const value = values[i];
    if (!graph.has(A)) {
      graph.set(A, new Map());
    }
    graph.get(A).set(B, value);

    if (!graph.has(B)) {
      graph.set(B, new Map());
    }
    graph.get(B).set(A, 1.0 / value);
  }

  const ans = [];
  // DFS
  const divide = (A, B, visited) => {
    if (A == B) return 1.0;
    visited.add(A);
    for (const [C, value] of graph.get(A)) {
      if (visited.has(C)) continue;
      const d = divide(C, B, visited); // d = C / B
      // A / B = C / B * A / C
      if (d > 0) return d * graph.get(A).get(C);
    }
    return -1.0;
  };
  // main.
  for (const [X, Y] of queries) {
    if (!graph.has(X) || !graph.has(Y)) {
      // variable no in graph
      ans.push(-1.0);
      continue;
    }
    const visited = new Set();
    ans.push(divide(X, Y, visited));
  }
  return ans;
};
