/*
994. Rotting Oranges

https://leetcode.com/problems/rotting-oranges/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const q = [];
  let fresh = 0;
  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (grid[row][col] == 1) ++fresh;
      else if (grid[row][col] == 2) q.push([col, row]);
    }
  }
  let minutes = 0;
  const dirs = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];
  while (q.length > 0 && fresh > 0) {
    let size = q.length;
    while (size--) {
      const [col, row] = q.shift();
      for (dir of dirs) {
        const tx = col + dir[0];
        const ty = row + dir[1];
        // process the fresh orange (1)
        if (tx < 0 || tx >= cols || ty < 0 || ty >= rows || grid[ty][tx] != 1) continue;
        --fresh;
        grid[ty][tx] = 2;
        q.push([tx, ty]);
      }
    }
    ++minutes;
  }
  return fresh ? -1 : minutes;
};
