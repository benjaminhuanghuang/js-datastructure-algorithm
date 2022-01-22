/*
909. Snakes and Ladders

Medium

https://leetcode.com/problems/snakes-and-ladders/
*/

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const length = board.length;
  board.reverse(); // up side down
  const int2Pos = (n) => {
    const row = Math.floor((n - 1) / length);
    let col = (n - 1) % length;
    if (row % 2) {
      col = length - 1 - col;
    }
    return [row, col];
  };

  // [square , move]
  const q = [[1, 0]];
  const visited = new Set();
  while (q.length > 0) {
    const [square, moves] = q.shift();
    for (let i = 1; i < 7; i++) {
      nextSquare = square + i;
      const [r, c] = int2Pos(nextSquare);
      if (board[r][c] != -1) {
        nextSquare = board[r][c];
      }
      if (nextSquare == length * length) {
        return moves + 1;
      }
      if (!visited.has(nextSquare)) {
        visited.add(nextSquare);
        q.push([nextSquare, moves + 1]);
      }
    }
  }
  return -1;
};
