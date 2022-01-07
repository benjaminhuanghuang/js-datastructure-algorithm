/*
1277. Count Square Submatrices with All Ones

https://leetcode.com/problems/count-square-submatrices-with-all-ones/

# 221. Maximal Square
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  // dp[i][j] := edge of largest square with right bottom corner at (i, j)
  const dp = Array.from(new Array(rows), () => new Array(cols).fill(0));
  let ans = 0;
  for (let row = 0; row < rows; ++row)
    for (let col = 0; col < cols; ++col) {
      dp[row][col] = matrix[row][col];
      if (row && col && dp[row][col]) {
        dp[row][col] = Math.min(dp[row - 1][col - 1], dp[row][col - 1], dp[row - 1][col]) + 1;
      }
      ans += dp[row][col];
    }
  return ans;
};
