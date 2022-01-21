/*
  417. Pacific Atlantic Water Flow

  哪些点最终可以到达 Pacific 和 Atlantic

  Level: Medium

  https://leetcode.com/problems/pacific-atlantic-water-flow/

  #778. Swim in Rising Water
  
  [FB]
*/
/*
  Brute force
  
  对每一个node，调用dfs，看是否可以到达Pacific 和 Atlantic O((N*M)^2)
*/
/*
  https://www.youtube.com/watch?v=s-VkcjHqkGI&ab_channel=NeetCode
  https://zxi.mytechroad.com/blog/searching/417-pacific-atlantic-water-flow/
 
  对 top row, left col 和 bottom row， right col中的cell 调用 dfs  O(N*M)

  有向图
*/
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  //
  const rows = heights.length;
  const cols = heights[0].length;

  // 可以流向 Pacific， Atlantic 的cell
  const p = Array.from(Array(rows), () => Array(cols));
  const a = Array.from(Array(rows), () => Array(cols));

  const dfs = (row, col, prevHeight, visited) => {
    if (row < 0 || col < 0 || row == rows || col == cols) return;
    // cell的高度要相等和递增
    if (visited[row][col] || heights[row][col] < prevHeight) return;
    visited[row][col] = true;
    dfs(row + 1, col, heights[row][col], visited);
    dfs(row - 1, col, heights[row][col], visited);
    dfs(row, col + 1, heights[row][col], visited);
    dfs(row, col - 1, heights[row][col], visited);
  };

  // 2. DFS 和 4条边连通的cell 满足条件, prevHeight取0
  for (let col = 0; col < cols; ++col) {
    dfs(0, col, 0, p); // top
    dfs(rows - 1, col, 0, a); // bottom
  }

  for (let row = 0; row < rows; ++row) {
    dfs(row, 0, 0, p); // left
    dfs(row, cols - 1, 0, a); // right
  }
  // 3. Collect ans
  const ans = [];
  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (p[row][col] && a[row][col]) ans.push([row, col]);
    }
  }

  return ans;
};
