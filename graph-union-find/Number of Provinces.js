/*
547. Number of Provinces

https://leetcode.com/problems/number-of-provinces/


Same as Firend Circles
*/

/*
  Solution : DFS

  Time O(N^2)
*/
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  if (isConnected.length == 0) return 0;

  const n = isConnected.length;

  const visited = new Array(n).fill(0);

  let count = 0;

  const dfs = (curr) => {
    if (visited[curr]) return;

    visited[curr] = 1;

    for (let i = 0; i < n; i++) {
      if (isConnected[curr][i] && !visited[i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    dfs(i);
    count++;
  }
};

var findCircleNum_UnionFind = function (isConnected) {
  if (isConnected.length == 0) return 0;
  const n = isConnected.length;
  const father = new Array(n);
  let count = n;
  for (let i = 0; i < n; i++) {
    father[i] = i;
  }

  const find = (x) => {
    if (father[x] == x) {
      return x;
    }
    const root = find(father[x]);
    father[x] = root;
    return root;
  };

  const union = (a, b) => {
    const root_a = find(a);
    const root_b = find(b);
    if (root_a != root_b) {
      father[root_a] = root_b;
      count--;
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j]) {
        union(i, j);
      }
    }
  }
  return count;
};
