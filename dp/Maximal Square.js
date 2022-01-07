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
# 1277. Count Square Submatrices with All Ones

*/
/*
https://www.youtube.com/watch?v=6X7Ha2PrDmM&ab_channel=NeetCode

O(m*n)
*/
var maximalSquare = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  // 从 0, 0 到 r, c 构成的最大边长
  const cache = Array.from(new Array(rows), () => new Array(cols).fill(-1));
  let ans = 0;
  const helper = (row, col) => {
    if (row < 0 || col < 0) {
      return 0;
    }
    if (cache[row][col] == -1) {
      const top = helper(row - 1, col);
      const left = helper(row, col - 1);
      const diag = helper(row - 1, col - 1);
      cache[row][col] = 0;
      if (matrix[row][col] == "1") {
        cache[row][col] = Math.min(top, left, diag) + 1;
      }
    }
    ans = Math.max(ans, cache[row][col] ** 2);
    return cache[row][col];
  };

  // main
  helper(rows - 1, cols - 1);
  return ans;
};

var maximalSquare = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  // 从 0, 0 到 r, c 构成的最大Square的边长
  const cache = Array.from(new Array(rows), () => new Array(cols).fill(0));
  let ans = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cache[row][col] = matrix[row][col] == "1" ? 1 : 0;
      if (cache[row][col] == 0) continue;
      if (row == 0 || col == 0) {
        // do nothing
      } else if (row == 0) {
        cache[row][col] = cache[row][col - 1] + 1;
      } else if (col == 0) {
        cache[row][col] = cache[row - 1][col] + 1;
      } else {
        cache[row][col] = Math.min(cache[row - 1][col - 1], cache[row - 1][col], cache[row][col - 1]) + 1;
      }

      ans = Math.max(ans, cache[row][col] * cache[row][col]);
    }
  }
  return ans;
};

/*
  https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-221-maximal-square/

  O(n^3)
*/
var maximalSquare = function (matrix) {
  // sumRecord[i,j] = sum(matrix[0][0]) to matrix[i][j]
  if (matrix == null || matrix.length == 0) return 0;

  const rows = matrix.length;
  const cols = matrix[0].length;

  // Using padding
  this.sumRecord = new Array(rows + 1).fill(0); // without fill(0), get NaN
  for (var row = 0; row <= rows; row++) {
    this.sumRecord[row] = new Array(cols + 1).fill(0);
  }

  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      this.sumRecord[r][c] =
        parseInt(matrix[r - 1][c - 1]) +
        this.sumRecord[r][c - 1] +
        this.sumRecord[r - 1][c] -
        this.sumRecord[r - 1][c - 1];
    }
  }
  let ans = 0;
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      for (let k = Math.min(rows - r + 1, cols - c + 1); k > 0; k--) {
        // size from 1 to min (rows - r + 1, cols - c + 1)
        let sum =
          sumRecord[r + k - 1][c + k - 1] -
          sumRecord[r + k - 1][c - 1] -
          sumRecord[r - 1][c + k - 1] +
          sumRecord[r - 1][c - 1];

        if (sum == k * k) {
          ans = Math.max(ans, sum);
          break;
        }
      }
    }
  }

  return ans;
};

module.exports = maximalSquare;

const res = maximalSquare(["11", "11"]);
