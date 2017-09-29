var coinChange = function(coins, amount) {
  if (coins == null || coins.length == 0 || amount <= 0) return 0;

  let dp = new Array(amount + 1).fill(0);

  for (let i = 1; i <= amount; i++) dp[i] = Number.MAX_SAFE_INTEGER - 1;

  // The count of coins make amount = 1 + dp[amount-coins[i]]
  for (let i = 0; i < coins.length; i++) {
    for (let sum = coins[i]; sum <= amount; sum++) {
      dp[sum] = Math.min(dp[sum], dp[sum - coins[i]] + 1);
    }
  }
  return dp[amount] == Number.MAX_SAFE_INTEGER - 1 ? -1 : dp[amount];
};
