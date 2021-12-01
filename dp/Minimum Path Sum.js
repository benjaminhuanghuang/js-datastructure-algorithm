/*
64. Minimum Path Sum

https://leetcode.com/problems/minimum-path-sum/
*/

/*
https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-64-minimum-path-sum/

 Recursion with memoization
 Time complexity: O(mn)

Space complexity: O(mn)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rows = grid.length;
  if (rows == 0) return 0;
  const cols = grid[0].length;

  let mem = Array.from(Array(rows + 1), () => Array(cols + 1).fill(0));

  const helper = (grid, rows, cols, x, y) => {
    if (x == 0 && y == 0) return grid[y][x];
    if (x < 0 || y < 0) return Number.MAX_SAFE_INTEGER;
    if (mem[y][x] > 0) return mem[y][x];

    const ans = grid[y][x] + Math.min(helper(grid, rows, cols, x - 1, y), helper(grid, rows, cols, x, y - 1));

    mem[y][x] = ans;
    return ans;
  };
  return helper(grid, rows, cols, cols - 1, rows - 1);
};

/*
https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-64-minimum-path-sum/

DP
*/
