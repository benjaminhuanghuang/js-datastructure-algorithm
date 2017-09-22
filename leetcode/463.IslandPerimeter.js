var islandPerimeter = function(grid) {
  if (grid == null || grid.length == 0) return 0;
  let perimeter = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c]) {
        if (r == 0 || grid[r - 1][c] == 0) perimeter++;
        if (r == grid.length - 1 || grid[r + 1][c] == 0) perimeter++;
        if (c == 0 || grid[r][c - 1] == 0) perimeter++;
        if (c == grid[0].length - 1 || grid[r][c + 1] == 0) perimeter++;
      }
    }
  }
  return perimeter;
};

console.log(
  islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])
);
