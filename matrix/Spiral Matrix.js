/*
54. Spiral Matrix

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].

Medium

https://leetcode.com/problems/spiral-matrix/
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];
  if (matrix.length == 0) return res;

  let rowStart = 0;
  let rowEnd = matrix.length - 1;

  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // Left to right
    for (let i = colStart; i <= colEnd; i++) {
      res.push(matrix[rowStart][i]);
    }

    // top to bottom
    for (let j = rowStart + 1; j <= rowEnd; j++) {
      res.push(matrix[j][colEnd]);
    }

    // right to left
    if (rowStart + 1 <= rowEnd) {
      for (let k = colEnd - 1; k >= colStart; k--) {
        res.push(matrix[rowEnd][k]);
      }
    }
    if (colStart + 1 <= colEnd) {
      for (let k = rowEnd - 1; k > rowStart; k--) {
        res.push(matrix[k][colStart]);
      }
    }

    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }
  return res;
};
