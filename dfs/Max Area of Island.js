/*
695. Max Area of Island

https://leetcode.com/problems/max-area-of-island/

# 200. Number of Islands
*/

/*
  https://www.youtube.com/watch?v=iJGr1OtmH0c&ab_channel=NeetCode

  Time O(M*N)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let maxArea = 0;

  // dfs 返回未被访问过的，包含 row, col 的岛屿的大小
  const dfs = (row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] == 0) {
      return 0;
    }
    grid[row][col] = 0; // visited
    return 1 + dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1);
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      maxArea = Math.max(maxArea, dfs(row, col));
    }
  }
  return maxArea;
};
