/*
694. Number of Distinct Islands

Count the number of distinct islands. 
An island is considered to be the same as another if and only if one island can be translated to equal the other.

https://leetcode.com/problems/number-of-distinct-islands/
https://ttzztt.gitbooks.io/lc/content/number-of-distinct-islands.html

# 200. Number of Islands
*/
/*
  How to hash the shape of the island?
  对于每一个island中的cell都记录 (nRow - baseRow) + "_" + (nCol - baseCol)
*/
function numDistinctIslands(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const shapes = new Set();
  const visited = Array.from(Array(rows), () => Array(cols).fill(0));

  const dfs = (baseRow, baseCol, row, col, shape) => {
    visited[row][col] = 1;
    for (const dir of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]) {
      const nRow = row + dir[0];
      const nCol = col + dir[1];

      if (nRow < 0 || nCol < 0 || nRow >= rows || nCol >= cols || visited[nRow][nCol]) {
        return shape;
      }
      shape.add((nRow - baseRow) + "_" + (nCol - baseCol));
      dfs(baseRow, baseCol, nRow, nCol, shape);
    }
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] && visited[row][col]) {
        const shape = new Set();
        const shape = dfs(row, col, row, col, shape);
        const shapeStr = [...shape].join("_");
        shapes.add(shapeStr);
      }
    }
  }
  return shapes.size;
}
