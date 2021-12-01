/*
62. Unique Paths

https://leetcode.com/problems/unique-paths/

*/

/*
http://zxi.mytechroad.com/blog/dynamic-programming/leetcode-62-unique-paths/
DP

the recursion pseudocode:
  paths(m, n):
    if(m<0 or n<0) return 0;
    if m ==1 and n == 1
      return 1
    return paths(m-1, n) + paths(m, n -1)

*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
  dp[1][1] = 1;

  for (let row = 1; row <= n; ++row)
    for (let col = 1; col <= m; ++col) {
      if (row == 1 || col == 1) dp[row][col] = 1;
      else dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
    }

  return dp[n][m];
};

/*
  recursion + memoization
  dfs
*/
var uniquePaths = function (m, n) {
  let mem = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

  const helper = (m, n) => {
    if (m < 0 || n < 0) return 0;
    if (m == 1 && n == 1) return 1;
    if (mem[n][m] > 0) return mem[n][m];
    const left_paths = helper(m - 1, n);
    const top_paths = helper(m, n - 1);

    mem[n][m] = left_paths + top_paths;
    return mem[n][m];
  };

  return helper(m, n);
};
