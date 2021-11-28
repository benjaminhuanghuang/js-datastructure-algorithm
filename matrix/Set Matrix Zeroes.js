/*
73. Set Matrix Zeroes
https://leetcode.com/problems/set-matrix-zeroes/
*/

/*
  Use the first row / first col to indicate whether the i-th row / j-th column need be zeroed.
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let col0 = false;
  let row0 = false;

  // check first col
  for (let i = 0; i < rows; ++i) col0 |= matrix[i][0] == 0;

  // check first row
  for (let j = 0; j < cols; ++j) row0 |= matrix[0][j] == 0;

  // if matrix[row][col] is 0, set matrix[0][col] and matrix[row][0] to 0
  for (let row = 1; row < rows; ++row)
    for (let col = 1; col < cols; ++col) if (matrix[row][col] == 0) matrix[0][col] = matrix[row][0] = 0;

  // set matrix[row][col] according the value of matrix[0][col] and matrix[row][0]
  for (let row = 1; row < rows; ++row)
    for (let col = 1; col < cols; ++col) {
      if (matrix[row][0] == 0 || matrix[0][col] == 0) matrix[row][col] = 0;
    }

  // set first row
  if (row0) {
    for (let col = 0; col < cols; ++col) matrix[0][col] = 0;
  }
  // set first col
  if (col0) {
    for (let row = 0; row < rows; ++row) matrix[row][0] = 0;
  }
};
