/*
62. Unique Paths  (#63)
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the 
bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/

/*
  Solution 1
  path(m,n)
    if m < 0 || n < 0 return 0
    if m==1 and n==1 return 1
    return path(m-1,n) + path(m, n-1)
  记忆化递归
*/

var uniquePaths = function (m, n) {
  if (m < 0 || n < 0)
    return 0;
  let dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(m + 1).fill(0);
  }
  dp[1][1] = 1;
  for (var r = 1; r <= n; r++) {
    for (var c = 1; c <= m; c++) {
      if (c == 1 && r == 1)
        continue;
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
    }
  }
  return dp[n][m];
};

console.log(uniquePaths(1, 2));