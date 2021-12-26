/*
  51. N-Queens
  
  Given an integer n, return all distinct solutions to the n-queens puzzle.

  https://leetcode.com/problems/n-queens/
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = new Array(n).fill(0).map((_) => Array(n).fill("."));

  const result = [];

  // the col index of queen on each of row
  const colsUsed = new Array(n).fill(false);
  const diagonal135Used = new Array(n + n - 1).fill(false);
  const diagonal45Used = new Array(n + n - 1).fill(false);

  // put queen on (row, col)
  const dfs = (row, col) => {
    const indexOfDiagonal135 = row + n - col -1;
    const indexOfDiagonal45 = row + col;
    
    if (colsUsed[col] || diagonal135Used[indexOfDiagonal135] || diagonal45Used[indexOfDiagonal45]) {
      return;
    }

    // if possible put the queen
    board[row][col] = "Q";
    colsUsed[col] = true;
    diagonal135Used[indexOfDiagonal135] = true;
    diagonal45Used[indexOfDiagonal45] = true;

    if (row == n - 1) {
      result.push(board.map((row) => row.join("")));
      return;
    }
    for (let k = 0; k < n; k++) {
      dfs(row + 1, k);
    }

    // if possible put the queen
    board[row][col] = ".";
    colsUsed[col] = false;
    diagonal135Used[indexOfDiagonal135] = false;
    diagonal45Used[indexOfDiagonal45] = false;
  };

  for (let col = 0; col < n; col++) {
    dfs(0, col);
  }

  return result;
};
