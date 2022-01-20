/*

1162. As Far from Land as Possible

find a water cell such that its distance to the nearest land cell is maximized, and return the distance.

https://leetcode.com/problems/as-far-from-land-as-possible/
*/
/*
  把所有的陆地同时向外扩散
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const q = [];

  // Put all land cells into a queue
  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (grid[row][col] == 1) {
        q.push([row, col]); // land
      }
    }
  }

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let steps = 0;

  while (q.length > 0) {
    let size = q.length;
    while (size--) {
      const [row, col] = q.shift();
      for (const d of dirs) {
        const nCol = col + d[0];
        const nRow = row + d[1];
        if (nCol < 0 || nCol >= cols || nRow < 0 || nRow >= rows || grid[nRow][nCol] != 0) continue;
        grid[nRow][nCol] = 1;
        q.push([nRow, nCol]);
      }
    }
    ++steps;
  }
  return steps == 1 ? -1 : steps - 1;
};
