/*
221. Maximal Square
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's 
and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 4.

# 85. Maximal Rectangle
*/
var maximalSquare = function (matrix) {
  // sumRecord[i,j] = sum(matrix[0][0]) to matrix[i][j] 
  if (matrix == null || matrix.length == 0)
    return 0;

  const rows = matrix.length;
  const cols = matrix[0].length;

  // Use padding
  this.sumRecord = new Array(rows + 1).fill(0);  // without fill(0), get NaN
  for (var row = 0; row <= rows; row++) {
    this.sumRecord[row] = new Array(cols + 1).fill(0);
  }


  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      this.sumRecord[r][c] = int(matrix[r - 1][c - 1])
        + this.sumRecord[r][c - 1] + this.sumRecord[r - 1][c]
        - this.sumRecord[r - 1][c - 1];
    }
  }
  let ans = 0;
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      for (let k = Math.min(rows - row + 1, cols-col+1); k >0; k--)
      {
        let sum = 
      }
    }
  }
};

module.exports = maximalSquare;