/*
37. Sudoku Solver

https://leetcode.com/problems/sudoku-solver/

# 36. Valid Sudoku
# 51. N-Queens
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // 1 - 9 occur once in whole row, whole col, whole box
  // [ith row][number] [ith col][number] [ith box][number]
  // ex: [ith row][N] = 1 means ith row already use number N
  let rows = Array.from(new Array(9), () => new Array(10).fill(0));
  let cols = Array.from(new Array(9), () => new Array(10).fill(0));
  let boxes = Array.from(new Array(9), () => new Array(10).fill(0));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j];
      if (c !== ".") {
        let num = parseInt(c);
        let bx = Math.floor(j / 3);
        let by = Math.floor(i / 3);
        rows[i][num] = 1;
        cols[j][num] = 1;
        boxes[by * 3 + bx][num] = 1;
      }
    }
  }
  const dfs = (x, y) => {
    // exit recursion condition, reach to the end;
    if (y === 9) return true;

    // traverse from left to right, then next row
    let nextX = (x + 1) % 9;
    let nextY = nextX === 0 ? y + 1 : y;

    // already has number, DFS next element
    if (board[y][x] !== ".") return dfs(nextX, nextY);

    // fill number from 1 - 9
    for (let i = 1; i <= 9; i++) {
      let bx = Math.floor(x / 3);
      let by = Math.floor(y / 3);
      let box_index = by * 3 + bx;
      // if not breaking the following 3 rules
      if (!rows[y][i] && !cols[x][i] && !boxes[box_index][i]) {
        // modify, fill the number
        rows[y][i] = 1;
        cols[x][i] = 1;
        boxes[box_index][i] = 1;
        board[y][x] = i.toString();
        // Try to fill next element, if success return true, or recover
        if (dfs(nextX, nextY)) return true;
        // recover data
        board[y][x] = ".";
        boxes[box_index][i] = 0;
        cols[x][i] = 0;
        rows[y][i] = 0;
      }
    }
    return false;
  };
  // main
  dfs(0, 0);
};
