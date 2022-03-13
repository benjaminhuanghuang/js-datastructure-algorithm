/*
63. Unique Paths II

Medium

https://leetcode.com/problems/unique-paths-ii/
*/

/*
  https://zhang-xiao-mu.blog/2018/12/23/unique-path-i-ii-recursion-and-dynamic-programming/

  https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-63-unique-paths-ii/

  recursion + memoization
  dfs
*/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const n = obstacleGrid.length;
  const m = obstacleGrid[0].length;

  // MIN_VALUE means not solved yet
  let mem = Array.from(Array(n), () => Array(m).fill(Number.MIN_VALUE));

  const helper = (n, m) => {
    if (m < 0 || n < 0) return 0;
    if (m == 0 && n == 0) return 1 - obstacleGrid[0][0];

    // solved
    if (mem[n][m] !== Number.MIN_VALUE) return mem[n][m];
    if (obstacleGrid[n][m] == 1) {
      // there is an obstacle on current block, no path
      return 0;
    } else {
      const left_path = helper(n, m - 1);
      const top_path = helper(n - 1, m);

      mem[n][m] = left_path + top_path;
    }
    return mem[n][m];
  };

  return helper(n - 1, m - 1);
};
