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

 var searchMatrix = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length===0)
    return false;

  const rows = matrix.length;
  const cols = matrix[0].length;
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < rows && col >= 0)
  {
    if (matrix[row][col] == target)
      return true;
    else if (matrix[row][col] > target)
      --col;
    else
      ++row;
  }
  return false;
};