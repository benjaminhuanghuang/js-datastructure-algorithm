/*
934. Shortest Bridge

Medium

https://leetcode.com/problems/shortest-bridge
*/

/*
  多起点，多终点最短路径
  Solution: DFS + BFS

    Use DFS to find one island and color all the nodes as 2 (BLUE).
    Use BFS to find the shortest path from any nodes with color 2 (BLUE) to any nodes with color 1 (RED).
    
    Time complexity: O(mn)

    Space complexity: O(mn)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // 1. DFS find islands
  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] != 1) return;
    grid[row][col] = 2;
    q.push([row, col]);

    dfs(row - 1, col);
    dfs(row, col - 1);
    dfs(row + 1, col);
    dfs(row, col + 1);
  };

  const q = []; // [row, col]
  let find = false;
  for (let row = 0; row < rows && !find; ++row) {
    for (let col = 0; (col < cols) & !find; ++col) {
      if (grid[row][col]) {
        // find island
        // find all pieces in island, mark it to 2
        dfs(row, col);
        find = true;
      }
    }
  }

  // 2. BFS
  let steps = 0;
  while (q.length > 0) {
    let size = q.length;
    while (size--) {
      const [row, col] = q.shift();
      for (const dir of [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const nRow = row + dir[0];
        const nCol = col + dir[1];
        if (nRow < 0 || nCol < 0 || nRow >= rows || nCol >= cols || grid[nRow][nCol] == 2) continue;
        if (grid[nRow][nCol] == 1) return steps;
        grid[nRow][nCol] = 2;
        q.push([nRow, nCol]);
      }
    }
    ++steps;
  }
  return -1;
};
