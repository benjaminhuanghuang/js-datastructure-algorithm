/*
1260. Shift 2D Grid

Easy

https://leetcode.com/problems/shift-2d-grid/

*/
/*
Shift k times is equivalent to flatten the matrix and rotate by -k or (m*n – k % (m * n)).

Time complexity: O(m*n)
Space complexity: O(m*n)
*/

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const n = grid.length;
  const m = grid[0].length;
  const steps = k % (m * n);
  const g = [];
  for (let i = 0; i < n; ++i) g = g.concat(grid[i]);

  const rotateBetween = (nums, l, r) => {
    while (l < r) {
      const temp = nums[r];
      nums[r] = nums[l];
      nums[l] = temp;
      l++;
      r--;
    }
  };
  rotateBetween(g, 0, n * m - 1);
  rotateBetween(g, 0, steps - 1);
  rotateBetween(g, steps, n * m - 1);

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      grid[i][j] = g[i * m + j];
    }
  }
  return grid;
};

/*
 Brute force
  Time complexity: O(k*n*m)
  Space complexity: O(1) in-place
*/
var shiftGrid = function (grid, k) {
  const n = grid.length;
  const m = grid[0].length;
  while (k--) {
    const last = grid[n - 1][m - 1];
    for (let i = n - 1; i >= 0; --i)
      for (let j = m - 1; j >= 0; --j) {
        if (i == 0 && j == 0) grid[i][j] = last;
        else if (j == 0) grid[i][j] = grid[i - 1][m - 1];
        else grid[i][j] = grid[i][j - 1];
      }
  }
  return grid;
};
