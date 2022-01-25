/*
70. Climbing Stairs


https://leetcode.com/problems/climbing-stairs/

*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n == 0) return 1; // 不爬
  if (n == 1) return 1; // 只能爬一层
  return climbStairs(n - 1) + climbStairs(n - 2);
};

/*
  Recursion + Memoization
*/
const m = new Map();
m.set(0, 1);
m.set(1, 1);

var climbStairs = function (n) {
  if (m.has(n)) return m.get(n);
  const way = climbStairs(n - 1) + climbStairs(n - 2);
  m.set(n, way);
  return way;
};

/*

  DP
*/
var climbStairs = function (n) {
  if (n < 2) {
    return n;
  }
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

var climbStairs = function (n) {
  if (n < 2) {
    return n;
  }
  let prev_2 = 1;
  let prev_1 = 1;
  let way = 0;
  for (let i = 2; i <= n; i++) {
    way = prev_2 + prev_1;
    prev_2 = prev_1;
    prev_1 = way;
  }
  return way;
};
