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
        const v = board[row][col];
        const v1 = board[row][col + 1];
        const v2 = board[row][col + 2];
        if (v != 0 && v == v1 && v1 == v2) {
          board[row][col] = 0;
          board[row][col + 1] = 0;
          board[row][col + 2] = 0;
          todo = true;
        }
      }
    }
    // vertically remove candy
    for (let row = 0; row + 2 < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const v = board[row][col];
        const v1 = board[row + 1][col];
        const v2 = board[row + 2][col];
        if (v != 0 && v == v1 && v1 == v2) {
          board[row][col] = 0;
          board[row + 1][col] = 0;
          board[row + 2][col] = 0;
          todo = true;
        }
      }
    }

    return todo ? recur() : board;
  };

  return recur();
}
