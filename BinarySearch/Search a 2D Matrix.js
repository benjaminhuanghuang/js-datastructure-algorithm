/*
    74. Search a 2D Matrix
*/


/*
  Solution: cover the 2d array to 1d array
*/
var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  var low = 0;
  var high = rows * cols - 1;

  while (low <= high) {
    var mid = Math.floor((high - low) / 2) + low;
    // Key point: conver the mid to col, row
    var col = mid % cols;
    var row = Math.floor(mid / cols);

    if (matrix[row][col] == target) {
      return true;
    } else if (matrix[row][col] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
};
