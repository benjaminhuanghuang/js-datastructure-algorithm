/*
827. Making A Large Island

Hard

https://leetcode.com/problems/making-a-large-island

# 200. Number of Islands
*/

/*
pass 1: 找出连通分量 give each connected component a unique id and count its ara.

pass 2: for each 0 zero, check its 4 neighbours, sum areas up by unique ids.

Time complexity: O(n*m)

Space complexity: O(n*m)
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const getColor = (row, col) => {
    return row < 0 || row >= rows || col < 0 || col >= cols ? 0 : grid[row][col];
  };

  // Return the area of a connected component, set all elements to color_.
  const getArea = (row, col, color) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] != 1) return 0;
    grid[row][col] = color;
    return (
      1 +
      getArea(row - 1, col, color) +
      getArea(row + 1, col, color) +
      getArea(row, col - 1, color) +
      getArea(row, col + 1, color)
    );
  };

  color = 1;

  const areas = new Map(); // color -> area

  let ans = 0;
  // pass 1.
  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (grid[row][col] == 1) {
        ++color;
        areas.set(color, getArea(row, col, color));
        ans = Math.max(ans, areas.get(color));
      }
    }
  }
  // pass 2
  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (grid[row][col] == 0) {
        let area = 1;
        //color 不能重复
        for (let color of new Set([
          getColor(row, col - 1),
          getColor(row, col + 1),
          getColor(row - 1, col),
          getColor(row + 1, col),
        ])) {
          area += areas.has(color) ? areas.get(color) : 0;
        }
        ans = Math.max(ans, area);
      }
    }
  }
  return ans;
};
