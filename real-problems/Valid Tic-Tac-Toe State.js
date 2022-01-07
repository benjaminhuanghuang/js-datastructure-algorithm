/*
794. Valid Tic-Tac-Toe State

https://leetcode.com/problems/valid-tic-tac-toe-state/
*/

/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
  // 每个人各走了几步
  let x = 0;
  let o = 0;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] == "X") x++;
      if (board[row][col] == "O") o++;
    }
  }
  // X is the first player,
  if (!(x == o || x == o + 1)) return false;
  // when x == o, X is the next player
  if (x == o && win(board, "X")) return false;
  // when x == o + 1, O is the next player
  if (x == o + 1 && win(board, "O")) return false;
  return true;
};

function win(board, ch) {
  // 3 rows
  for (let row = 0; row < 3; row++) {
    if (Array.from(board[row]).every((i) => i == ch)) return true;
  }
  // 3 cols
  for (let col = 0; col < 3; col++) {
    if (board[0][col] == board[1][col] && board[1][col] == board[2][col] && board[0][col] == ch) return true;
  }
  // cross
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] == ch) return true;
  if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] == ch) return true;

  return false;
}
