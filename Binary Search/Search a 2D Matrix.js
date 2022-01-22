/*
74. Search a 2D Matrix

Medium

https://leetcode.com/problems/search-a-2d-matrix/
*/

/*
  Solution: cover the 2d array to 1d array
*/
var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  var l = 0;
  var r = rows * cols;

  while (l < r) {
    var m = Math.floor((r - l) / 2) + l;
    // Key point: conver the mid to col, row
    var col = m % cols;
    var row = Math.floor(m / cols);

    if (matrix[row][col] == target) {
      return true;
    } else if (matrix[row][col] > target) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return false;
};
