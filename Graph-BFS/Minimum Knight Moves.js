/*

1197. Minimum Knight Moves

In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].

https://leetcode.com/problems/minimum-knight-moves/
https://wentao-shao.gitbook.io/leetcode/graph-search/1197.minimum-knight-moves
*/

function minKnightMoves(x, y) {
  const DIRECTIONS = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  
  //knight at square [0, 0].
  const q = [[0, 0]];
  visited = new Set();
  visited.add("0,0");

  let result = 0;
  while (queue.length > 0) {
    const size = queue.size();
    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift();
      if (row == y && col == x) {
        return result;
      }

      for ([dRow, dCol] of DIRECTIONS) {
        const newRow = row + dRow;
        const newCol = col + dCol;
        // If you remove this condition newX >= -1 && newY >= -1) this solution would give TLE.
        if (!visited.contains(newRow + "," + newCol) && newX >= -1 && newY >= -1) {
          queue.push([newRow, newCol]);
          visited.add(newX + "," + newY);
        }
      }
    }
    result++;
  }
  return -1;
}
