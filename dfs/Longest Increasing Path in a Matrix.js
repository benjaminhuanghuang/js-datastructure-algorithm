/*

329. Longest Increasing Path in a Matrix

[Hard]

https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  if (matrix.length === 0) return 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  const mem = Array.from(Array(rows), () => Array(cols).fill(-1));

  let longestPath = 0;

  const dfs = (row, col) => {
    if (mem[row][col] != -1) return mem[row][col];

    mem[row][col] = 1;
    for (const dir of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      const nRow = row + dir[0];
      const nCol = col + dir[1];
      if (nRow < 0 || nCol < 0 || nRow >= rows || nCol >= cols || matrix[nRow][nCol] <= matrix[row][col]) continue;
      mem[row][col] = Math.max(mem[row][col], 1 + dfs(nRow, nCol));
    }
    return mem[row][col];
  };
  // Main loop
  for (let row = 0; row < rows; ++row)
    for (let col = 0; col < cols; ++col) {
      longestPath = Math.max(longestPath, dfs(row, col));
    }
  return longestPath;
};
