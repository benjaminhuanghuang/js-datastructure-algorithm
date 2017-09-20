
/*
304. Range Sum Query 2D - Immutable


# 221. Maximal Square
*/

/*
  Brute force takes O(mn)
  
  DP: Preprocess take O(mn)
      sum(r1, c1, r2, c2) takes O(1)
*/
var NumMatrix = function (matrix) {
  // sumRecord[i,j] = sum(matrix[0][0]) to matrix[i][j] 
  this.sumRecord = null;
  if (matrix == null || matrix.length == 0)
    return;
  const rows = matrix.length;
  const cols = matrix[0].length;

  this.sumRecord = new Array(rows + 1).fill(0);  // without fill(0), get NaN
  for (var row = 0; row <= rows; row++) {
    this.sumRecord[row] = new Array(cols + 1).fill(0);
  }


  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      this.sumRecord[r][c] = matrix[r - 1][c - 1]
        + this.sumRecord[r][c - 1] + this.sumRecord[r - 1][c]
        - this.sumRecord[r - 1][c - 1];
    }
  }
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  if (this.sumRecord == null)
    return 0;

  return this.sumRecord[row2 + 1][col2 + 1]
    - this.sumRecord[row2 + 1][col1] - this.sumRecord[row1][col2 + 1]
    + this.sumRecord[row1][col1];
};


module.exports = NumMatrix;