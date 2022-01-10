/*
130. Surrounded Regions

Level: Medium

https://leetcode.com/problems/surrounded-regions

*/

/*
  Solution: DFS
  问题转化成 ： cpature everything excepting un-surrounded regions
  the un-surrounded regions is connect to the border
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rows = board.length;
  if (rows == 0) return;
  const cols = board[0].length;
  const dfs = (row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] != "O") return;
    board[row][col] = "G"; // mark it as good if it is 'O'

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  // check left, right border
  for (let row = 0; row < rows; ++row) {
    dfs(row, 0);
    dfs(row, cols - 1);
  }

  // check top, bottom border
  for (let col = 0; col < cols; ++col) {
    dfs(0, col);
    dfs(rows - 1, col);
  }

  const v = new Map([
    ["G", "O"],
    ["O", "X"],
    ["X", "X"],
  ]);

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      board[row][col] = v.get(board[row][col]);
    }
  }
};
