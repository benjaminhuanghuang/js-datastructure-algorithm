/*
63. Unique Paths II
Follow up for "# 62 Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.

*/

/*


*/

var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid == null || obstacleGrid.length == 0)
    return 0;

  let rows = obstacleGrid.length;
  let cols = obstacleGrid[0].length;

  // MIN_INT means the cell is not solved yet.
  let f = new Array(rows + 1);
  for (let i = 0; i <= rows; i++) {
    f[i] = new Array(cols + 1).fill(Number.MIN_SAFE_INTEGER);
  }
  return paths(cols, rows, obstacleGrid, f)
};

function paths(x, y, grid, f) {
  if (x <= 0 || y <= 0)
    return 0;

  if (x == 1 && y == 1) // reaching staring point , might be an obstacle here.
    return 1 - grid[0][0];

  if (f[y][x] != Number.MIN_SAFE_INTEGER)
    return f[y][x];

  if (grid[y - 1][x - 1] == 1) {
    // there is an obstacle
    f[y][x] = 0;
  }
  else {
    f[y][x] = paths(x - 1, y, grid, f) + paths(x, y - 1, grid, f);
  }

  return f[y][x];
}

module.exports = uniquePathsWithObstacles;


uniquePathsWithObstacles([[0, 0]]);