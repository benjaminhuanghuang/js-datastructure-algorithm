/*
120. Triangle

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to 
adjacent numbers on the row below.

For example, given the following triangle
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:
Bonus point if you are able to do this using only O(n) extra space, where n is the total number 
of rows in the triangle.
*/

/*
  [2],                 [2],
  [3,4],              [5,6],
  [6,5,7],          [11,10,13],
  [4,1,8,3]]       [15,11,18,16],

  f[i][j] = minTotal
  f[i][j] = min(f[i-1, j], fin[i-1, j-1]) + triangle[i-1][j-1]

  Time complexity: O(n^2)
  Space complexity: O(n) 
*/
//Use dp[][], Space complexity: O(n^2) 
function minimumTotal(triangle) {
  if (
    triangle == null ||
    triangle.length == 0 ||
    triangle[0] == null ||
    triangle[0].length == 0
  )
    return 0;

  let size = triangle.length;
  let dp = [];
  for (let r = 0; r < size; r++) {
    dp.push(new Array(r + 1).fill(Number.MAX_SAFE_INTEGER));
  }

  for (let r = 0; r < size; r++) {
    for (let c = 0; c <= r; c++) {
      dp[r][c] = triangle[r][c];
      if (r == 0 && c == 0) continue; // the top element
      if (c == 0) // first column, only one path
        dp[r][c] += dp[r - 1][c];
      else if (c == r )// last column, only one path
        dp[r][c] += dp[r - 1][c - 1];
      else 
        dp[r][c] += Math.min(dp[r - 1][c], dp[r - 1][c - 1]);
    }
  }
  return Math.min(...dp[size - 1]);
}

// Use two array instead of a matrix, extra space complexity: O(n) 
function minimumTotal2(triangle) {
  if (
    triangle == null ||
    triangle.length == 0 ||
    triangle[0] == null ||
    triangle[0].length == 0
  )
    return 0;

  let size = triangle.length;
  let dp = [];
  for (let r = 0; r < 2; r++) {
    dp.push(new Array(r + 1).fill(Number.MAX_SAFE_INTEGER));
  }

  for (let r = 0; r < size; r++) {
    for (let c = 0; c <= r; c++) {
      dp[1][c] = triangle[r][c];
      if (r == 0 && c == 0) continue; // the top element
      if (c == 0) // first column, only one path
        dp[1][c] += dp[0][c];
      else if (c == r )// last column, only one path
        dp[1][c] += dp[0][c - 1];
      else 
        dp[1][c] += Math.min(dp[0][c], dp[0][c - 1]);
    }
    dp = [dp[1], dp[0]];
  }
  return Math.min(...dp[0]);
}

// Use original matrix, Space complexity: O(1) 
function minimumTotal3(triangle) {
  if (
    triangle == null ||
    triangle.length == 0 ||
    triangle[0] == null ||
    triangle[0].length == 0
  )
    return 0;

  let size = triangle.length;
  for (let r = 0; r < size; r++) {
    for (let c = 0; c <= r; c++) {
      if (r == 0 && c == 0) continue; // the top element
      if (c == 0) // first column, only one path
        triangle[r][c] += triangle[r-1][c];
      else if (c == r )// last column, only one path
        triangle[r][c] += triangle[r-1][c - 1];
      else 
        triangle[r][c] += Math.min(triangle[r-1][c], triangle[r-1][c - 1]);
    }
  }
  console.log(triangle);
  return Math.min(...triangle[size-1]);
}

module.exports ={ minimumTotal, minimumTotal2, minimumTotal3};
