/*
1428. Leftmost Column with at Least a One

Medium

https://leetcode.com/problems/leftmost-column-with-at-least-a-one/

[FB]
*/


/*
  只有 0 和 1
  看到1，之后的全都是 1
  从最右上开始， 是1，往下左吗，是0往下找
*/

function leftMostColumnWithOne(binaryMatrix) {
  const [rows, cols] = binaryMatrix.dimensions();
  let row = rows - 1, cols = cols - 1, res = -1;
  while (row >= 0 && col >= 0) {
      const cur = binaryMatrix.get(row, col);
      if (cur == 0) {
          row--;
      } else {
          res = col;
          col--;
      }
  }
  return res;
}