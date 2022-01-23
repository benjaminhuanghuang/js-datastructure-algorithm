/*
733. Flood Fill

染色和 (sr, sc)相邻的所有颜色为 color的点

Easy

https://leetcode.com/problems/flood-fill
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const rows = image.length;
  const cols = image[0].length;

  const dfs = (row, col, color, newColor) => {
    if (image[row][col] == color) {
      image[row][col] = newColor;

      for (const dir of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const nRow = row + dir[0];
        const nCol = col + dir[1];
        if (nRow < 0 || nCol < 0 || nRow >= rows || nCol >= cols) continue;
        dfs(nRow, nCol, color, newColor);
      }
    }
  };
  // Main
  const color = image[sr][sc];
  if (color != newColor) {
    dfs(sr, sc, color, newColor);
  }
  return image;
};
