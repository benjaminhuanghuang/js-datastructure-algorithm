/*
378. Kth Smallest Element in a Sorted Matrix

矩阵每行每列各自排序。找出矩阵中第K小的元素。

Level: Medium

https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix

# 240. Search a 2D Matrix II
*/

/*
Solution 1: Binary Search

Find the smallest x, such that there are k elements that are smaller or equal to x.

Time complexity: O(nlogn*log(max – min))
 here max-min is the difference between largest and smallest values in the matrix

Space complexity: O(1)

https://www.youtube.com/watch?v=v57lNF2mb_s&ab_channel=HuaHua


*/
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  // 左闭右开
  let l = matrix[0][0];
  let r = matrix[rows - 1][cols - 1] + 1;
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    let total = 0;
    let col = cols - 1;
    // find out how many numbers are greater than mid between lo and hi
    for (let row = 0; row < rows; row++) {
      while (col >= 0 && matrix[row][col] > mid) {
        col--;
      }

      total += col + 1; // + whole row
    }

    if (total >= k) r = mid;
    else l = mid + 1;
  }
  return l;
};
