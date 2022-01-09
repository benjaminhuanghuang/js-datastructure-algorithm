/*
79. Word Search

Given a 2D board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or 
vertically neighboring. 

The same letter cell may not be used more than once.

https://leetcode.com/problems/word-search/
*/

/*
http://zxi.mytechroad.com/blog/leetcode/leetcode-79-word-search/

Time complexity: O(m*n*4^l)
search 4 direction, l = len(word) , Time = 4 * 4 * 4....
Space complexity: O(m*n+ l), m*n 为输入，l为递归深度
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length == 0) return false;
  rows = board.length;
  cols = board[0].length;

  const dfs = (board, word, pos, row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols || word.charAt(pos) != board[row][col]) return false;

    // Found the last char of the word
    if (pos == word.length - 1) return true;

    const cur = board[row][col]; // backup
    board[row][col] = 0; // 小技巧，防止重入
    // Search 4 directions
    const found =
      dfs(board, word, pos + 1, row + 1, col) ||
      dfs(board, word, pos + 1, row - 1, col) ||
      dfs(board, word, pos + 1, row, col + 1) ||
      dfs(board, word, pos + 1, row, col - 1);
    board[row][col] = cur;
    return found;
  };
  // Search every cell
  for (let row = 0; row < rows; row++)
    for (let col = 0; col < cols; col++) {
      if (dfs(board, word, 0, row, col)) return true;
    }
  return false;
};
