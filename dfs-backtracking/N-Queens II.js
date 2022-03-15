/*
52. N-Queens II

Hard


https://leetcode.com/problems/n-queens-ii/
*/
/*
  solution 1: 基于 51. N-Queens, return ans.length

*/

/*
  Solution 2: 
*/
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  // the col index of queen on each of row
  const colsUsed = new Array(n).fill(false);
  // 每个方向 有 n + n -1 个斜边
  const diagonal135Used = new Array(n + n - 1).fill(false);
  const diagonal45Used = new Array(n + n - 1).fill(false);

  let ans = 0;
  // put queen on (row, col)
  const backtracking = (row) => {
    if (row == n) {
      ans += 1;
      return;
    }

    for (let col = 0; col < n; col++) {
      // (Na)
      // row - col =  -(n-1), -(n-2) ....(n-1)
      const indexOfDiagonal135 = row + n - col - 1;
      // (Pie)
      // row + col = 0, 1, 2, ...n-2
      const indexOfDiagonal45 = row + col;
      if (!colsUsed[col] && !diagonal135Used[indexOfDiagonal135] && !diagonal45Used[indexOfDiagonal45]) {
        // if possible put the queen
        colsUsed[col] = true;
        diagonal135Used[indexOfDiagonal135] = true;
        diagonal45Used[indexOfDiagonal45] = true;

        backtracking(row + 1);
        // if possible put the queen
        colsUsed[col] = false;
        diagonal135Used[indexOfDiagonal135] = false;
        diagonal45Used[indexOfDiagonal45] = false;
      }
    }
  };
  backtracking(0);

  return ans;
};
