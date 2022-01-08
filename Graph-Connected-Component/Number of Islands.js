/*

  200. Number of Islands
  
  https://leetcode.com/problems/number-of-islands/
*/

/*
  https://zxi.mytechroad.com/blog/searching/leetcode-200-number-of-islands/

  1. Step on 1, start search connected points
  2. marke the 1s to 0s
  
  Time complexity: O(mn)
  Space complexity: O(mn)
*/

var numIslands = function (grid) {
  const rows = grid.length;
  if (rows === 0) {
      return 0;
  }
  const cols = grid[0].length;
  if (cols.length) {
    return 0;
  }

  let result = 0;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] == "1") {
        result++;
        dfs(row, col);
      }
    }
  }

  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === "0") return;
    grid[row][col] = "0"; // visited
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

};
