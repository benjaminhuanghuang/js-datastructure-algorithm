/*
240. Search a 2D Matrix II

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
Time complexity: O(m + n)
Space complexity: O(1)
*/

var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  const rows = matrix.length;
  const cols = matrix[0].length;
  let r = 0;
  let c = cols - 1;
  while (r < rows && c >= 0) {
    if (matrix[r][c] == target) return true;
    else if (matrix[r][c] > target) --c;
    else ++r;
  }
  return false;
};
