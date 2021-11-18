/*

322. Coin Change

给你一些不同币值的硬币，问你最少需要多少个硬币才能组成amount，假设每种硬币有无穷多个。

https://leetcode.com/problems/coin-change/
*/

/*
  注意此题不能用 Greedy 方法

  DFS
  https://www.youtube.com/watch?v=H9bfqozjoqs&ab_channel=NeetCode


  Time complexity :  O(amount * coins.length)
  Sapce : O(amount)

*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1); // solution from 0 to amount or .fill(INT.MAX)

  dp[0] = 0;
  for (let a = 1; a < amount + 1; a++) {
    for (c of coins) {
      if (a - c >= 0) {
        // if current amoutn >= current coin, use current coin
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }
  if (dp[amount] != amount + 1) {
    return dp[amount];
  }
  return -1;
};


/*
https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-518-coin-change-2/
*/

var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1); // solution from 0 to amount or .fill(INT.MAX)

  dp[0] = 0;
  for (let a = 1; a < amount + 1; a++) {
    for (c of coins) {
      if (a - c >= 0) {
        // if current amoutn >= current coin, use current coin
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }
  if (dp[amount] != amount + 1) {
    return dp[amount];
  }
  return -1;
};