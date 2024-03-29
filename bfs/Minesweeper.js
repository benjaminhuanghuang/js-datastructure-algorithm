/*
  529. Minesweeper

  https://leetcode.com/problems/minesweeper/
*/

/*
  DFS
*/



/*
  BFS

*/
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const rows = board.length;
  const cols = board[0].length;
  const x = click[1];
  const y = click[0];

  if (board[y][x] == "M") {
    board[y][x] = "X";
    return board;
  }

  // BFS, put the click in the queue
  let queue = [click];
  while (queue.length > 0) {
    const q2 = [];

    for (click of queue) {
      const x = click[1];
      const y = click[0];
      if (board[y][x] != "E") continue;
      let count = 0;
      for (let tx = x - 1; tx <= x + 1; ++tx) {
        for (let ty = y - 1; ty <= y + 1; ++ty) {
          if (tx >= 0 && tx < cols && ty >= 0 && ty < rows && board[ty][tx] == "M") {
            count += 1;
          }
        }
      }
      // find mine and mark it
      if (count > 0) {
        board[y][x] = count.toString();
        continue;
      }
      board[y][x] = "B";
      // append "E" to the queue  
      for (let tx = x - 1; tx <= x + 1; ++tx) {
        for (let ty = y - 1; ty <= y + 1; ++ty) {
          if (tx >= 0 && tx < cols && ty >= 0 && ty < rows && board[ty][tx] == "E") {
            q2.push([ty, tx]);
          }
        }
      }
    }
    queue = q2;
  }
  return board;
};
