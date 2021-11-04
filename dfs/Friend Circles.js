/*
花花酱 LeetCode 547. Friend Circles

https://zxi.mytechroad.com/blog/graph/leetcode-547-friend-circles/

547. Number of Provinces

https://leetcode.com/problems/number-of-provinces/

*/

/*
  DFS
  https://zxi.mytechroad.com/blog/graph/leetcode-547-friend-circles/
*/
/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function (M) {
  if (M.length == 0) {
    return 0;
  }
  const n = M.length;
  const visited = new Array(n).fill(0);
  let ans = 0;

  // 砍掉所有与curr有关联的节点
  const dfs = (curr) => {
    if (visited[curr]) return;
    visited[curr] = 1;

    // Visit tall friends(neighbors)
    for (let i = 0; i < n; i++) {
      if (M[curr][i] && !visited[i]) {
        dfs(i);
      }
     }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) return;
    dfs(i);
    ans++;
  }
};

/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function (M) {
  let numCircles = 0;
  const visited = new Set();
  M.forEach((row, i) => {
    if (visited.has(i)) return;
    numCircles++;
    const queue = row.map((x, i) => (x ? i : -1)).filter((x) => x > -1);
    while (queue.length > 0) {
      const f = queue.pop();
      if (!visited.has(f)) {
        visited.add(f);
        queue.push(...M[f].map((x, i) => (x ? i : -1)).filter((x) => x > -1));
      }
    }
  });
  return numCircles;
};
