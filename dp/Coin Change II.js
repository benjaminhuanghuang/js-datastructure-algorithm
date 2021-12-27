/*

518. Coin Change ||

https://leetcode.com/problems/coin-change-2/

combination
给你一些硬币的面值，问使用这些硬币（无限多块）能够组成amount的方法有多少种
*/

/*
https://www.youtube.com/watch?v=Mjy4hd2xgrs&ab_channel=NeetCode


Brute force : O(Coins^Amount)
Memoization : O(Coins * Amount)
*/

/*
Solution:  up to bottom

to case [1, 2, 5], 5 the recursion tree is
                         5
          use 1 /   ues 2|    use 5\ 
           4            3           0
      /    |    \
     3     2     X              
*/
var coinChange_up_bottom = function (coins, amount) {
  const mem = new Map();
  // i is the index of the coins
  // currAmount is the current amount
  const makeChange = (i, currAmount) => {
    if (currAmount == 0) return 1; // find a path
    if (currAmount < 0) return 0;
    if (i == coins.length) return 0; // no more coin
    const memKey = i + " " + currAmount;
    if (mem.has(memKey)) return mem.get(memKey);

    // way = using coins[i] + don't use coins[i]
    const way = makeChange(i, currAmount - coins[i]) + makeChange(i + 1, currAmount);
    mem.set(memKey, way);
    return way;
  };

  return makeChange(0, amount);
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange_up_bottom = function (coins, amount) {
  // i is the index of the coins
  // amount is the current amount
  const dfs = (i, a) => {
    if (a == amount) return 1;
    if (a > amount) return 0;
    if (i == coins.length) return 0;

    const way = dfs(i, a + coins[i]) + dfs(i + 1, a);
  };

  return dfs(0, 0);
};

/*
https://www.youtube.com/watch?v=ZKAILBWl08g&ab_channel=%E6%9D%A5Offer-LaiOffer

*/
var coinChange = function (coins, amount) {
  // dp[i][j]  the number of the combinaitons to make up amount j with the first i type of coins
  // dp[0][0] = 1      0枚硬币拼出0
  // dp[0][1...m] = 0  0枚硬币， 无法拼出 非0的 amounts
  // dp[i][j] = sum(f[i-1][j-k*coins[i-1]])   coins[i-1]被用了k次
  const dp = Array.from(Array(coins), () => Array(amount).fill(1));

  return dp[amount][0];
};

/*
    Let us use dp[i] to denote the number of ways to sum up to amount i.

    dp[i + coin] += dp[i]
    组成amount大小的硬币的组合数等于组成 amount - c大小的组合数 (for c in coins) 之和。
      dp[i] = dp[i-c1] + dp[i-c2] + .....
    Time complexity: O(n*amount)
    Space complexity:  O(amount)
*/
var coinChange = function (coins, amount) {
  // dp[i] to denote the number of ways to sum up to amount i.
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let i = 0; i <= amount - coin; ++i) {
      // coins[i]用几次
      dp[i + coin] += dp[i];
    }
  }
  return dp[amount];
};

var coinChange = function (coins, amount) {
  // dp[i] to denote the number of ways to sum up to amount i.
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let i = coin; i <= amount; ++i) {
      // coins[i]用几次
      dp[i] += dp[i - coin];
    }
  }
  return dp[amount];
};
