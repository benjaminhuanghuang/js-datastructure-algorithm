/*

322. Coin Change

https://leetcode.com/problems/coin-change/
*/

/*
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
        //
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }
  if (dp[amount] != amount + 1) {
    return dp[amount];
  }
  return -1;
};
