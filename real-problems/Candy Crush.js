/*
723. Candy Crush

https://leetcode.com/problems/candy-crush/

[FB]
*/

/*

https://www.youtube.com/watch?v=ho8LHmUWZLs&t=0s&ab_channel=CatRacketCode-LeetCodeJavaScript
*/

/**
 * @param {number[][]} board
 * @return {number[][]}
 */
function candyCrush(board) {
  const rows = board.length;
  const cols = board[0].length;

  const recur = () => {
    // move positive numbers down, elimiate 0s col by col
    for (let col = 0; col < cols; col++) {
      let writeI = rows - 1;
      for (let row = rows - 1; row >= 0; row--) {
        if (board[row][col] > 0) {
          board[writeI][col] = board[row][col];
          writeI--;
        }
      }
      // bob the 0s
      while (writeI >= 0) {
        board[writeI][col] = 0;
        writeI--;
      }
    }

    let todo = false;
    // horizontally remove candy
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col + 1 < cols; col++) {
        const v = Math.abs(board[row][col]);
        const v1 = Math.abs(board[row][col + 1]);
        const v2 = Math.abs(board[row][col + 2]);
        // 不能设置成0， 这样会导致多于3个的无法被remove
        if (v != 0 && v == v1 && v1 == v2) {
          board[row][col] = -v;
          board[row][col + 1] = -v;
          board[row][col + 2] = -v;
          todo = true;
        }
      }
    }
    // vertically remove candy
    for (let row = 0; row + 2 < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const v = Math.abs(board[row][col]);
        const v1 = Math.abs(board[row + 1][col]);
        const v2 = Math.abs(board[row + 2][col]);
        if (v != 0 && v == v1 && v1 == v2) {
          board[row][col] = -v;
          board[row + 1][col] = -v;
          board[row + 2][col] = -v;
          todo = true;
        }
      }
    }

    return todo ? recur() : board;
  };

  return recur();
}
