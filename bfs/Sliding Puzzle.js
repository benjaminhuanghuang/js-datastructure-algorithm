/*
773. Sliding Puzzle

给一个2×3的棋盘，放0-5。每一步0可以和上下左右的一个数交换。问需要多少步可以构成123450的棋盘状态。

Hard

https://leetcode.com/problems/sliding-puzzle
*/

/*
Time complexity: O(6!)

Space complexity: O(6!)
*/

/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const rows = 2;
  const cols = 3;

  let goal = "";
  let start = "";
  for (let row = 0; row < rows; ++row)
    for (let col = 0; col < cols; ++col) {
      start += board[row][col].toString();
      goal += ((row * cols + col + 1) % (rows * cols)).toString(); // 12345...0
    }

  if (start == goal) return 0;

  const visited = new Set([start]);
  let steps = 0;
  const q = [start];

  while (q.length > 0) {
    ++steps;
    let count = q.length;
    while (count-- > 0) {
      const state = q.shift();
      let pos = state.indexOf("0"); // position of 0
      const row = Math.floor(pos / cols);
      const col = pos % cols;

      for (const dir of [
        [0, 1],
        [-1, 0],
        [0, -1],
        [1, 0],
      ]) {
        const nRow = row + dir[0];
        const nCol = col + dir[1];

        // Out of bound
        if (nRow < 0 || nRow == rows || nCol < 0 || nCol == cols) continue;

        const nPos = nRow * cols + nCol;
        const nState = swap(state, pos, nPos);
        if (visited.has(nState)) continue;
        if (nState == goal) return steps;
        visited.add(nState);
        q.push(nState);
      }
    }
  }
  return -1;
};

function swap(s, i, j) {
  const arr = Array.from(s);
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join("");
}
