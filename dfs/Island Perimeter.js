/*
463. Island Perimeter

Level: Easy

https://leetcode.com/problems/island-perimeter

*/
/*
  Graph DFS

  O(rows*cols) 
*/
var islandPerimeter = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const visit = Array.from(Array(rows), () => Array(cols).fill(0));
  const dfs = (r, c) => {
    // reach border or water
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == 0) return 1;
    if (visit[r][c] === 1) return 0;
    visit[r][c] = 1;
    let perim = dfs(r, c + 1);
    perim += dfs(r, c - 1);
    perim += dfs(r + 1, c);
    perim += dfs(r - 1, c);
    return perim;
  };

  // main
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        return dfs(r, c);
      }
    }
  }
};

/*
  列举可以贡献边长的block

*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let ans = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == 1) {
        // first row or row -1 is 0
        if (r == 0 || (r > 0 && grid[r - 1][c] == 0)) ans++;
        if (r == grid.size() - 1 || (r < grid.size() - 1 && grid[r + 1][c] == 0))
          // last row or row + 1 is 0
          ans++;
        if (c == 0 || (c > 0 && grid[r][c - 1] == 0))
          // first col or col -1 is 0
          ans++;
        if (c == grid[0].size() - 1 || (c < grid[0].size() - 1 && grid[r][c + 1] == 0)) ans++;
      }
    }
  }
  return ans;
};
