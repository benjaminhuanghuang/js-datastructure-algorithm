/*

322. Coin Change

Return the fewest number of coins that you need to make up that amount. 

https://leetcode.com/problems/coin-change/



注意此题不能用 Greedy 方法 如 case coins=[1, 3, 4], amount =6. Greedy的答案是[4, 1, 1], 而最佳答案是[3,3] 
*/

/*
  错误的 Resursion + Memoization
  这个解法的错误在于返回的是一个 coin array， 如果返回的是[], 无法分辨这是一个解（amount == 0）还是无解
*/
var coinChange_RM_Wrong = function (coins, amount) {
  if (amount === 0) return 0;

  const mem = new Map(); // amount -> count of coins

  // return the coins array can make up amount
  const dfs = (coins, amount) => {
    if (amount == 0) return [];

    if (mem.has(amount)) return mem.get(amount);

    let makeUp = [];
    let minMakeUp = [];
    let newAmount;
    for (let coin of coins) {
      newAmount = amount - coin;
      if (newAmount > 0) {
        // it is possible to use this coin to make up amount
        minMakeUp = dfs(coins, amount - coin);
      }
      if (
        newAmount >= 0 &&
        (minMakeUp.length < makeUp.length - 1 || !makeUp.lenght) &&
        (minMakeUp.length || !newAmount)
      ) {
        makeUp = [coin, ...minMakeUp];
      }
    }
    mem.set(amount, makeUp);
    return makeUp;
  };

  dfs(coins, amount);
  if (mem.has(amount)) {
    return mem.get(amount).length;
  }
  return -1;
};

/*
Solution: Up to bottom

to case [1, 2, 5], 11 the recursion tree is
                         11
          use 1 /   ues 2|    use 5\ 
           10            9          6
      /    |    \
     9     8     5              
*/
var coinChange = function (coins, amount) {
  const mem = new Map(); // amount -> count of coins
  const MAX = amount + 1;
  // return the coins can make up amount
  const findFewest = (amount) => {
    if (amount <= 0) return 0;
    if (mem.has(amount)) return mem.get(amount);

    let minMakeUp = MAX;
    for (let coin of coins) {
      if (amount >= coin) {
        minMakeUp = Math.min(minMakeUp, findFewest(amount - coin) + 1);
      }
    }
    mem.set(amount, minMakeUp);
    return minMakeUp;
  };
  
  const ans = findFewest(amount);
  if (ans >= MAX) return -1;
  return ans;
};

/*
  Solution: bottom to up
  
  dp[i] is the min makeup for amount i

  对于 amount 1. the min makeup is  min( dp[0] + 1, MAX)

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
  // dp[i] is the min makup for amount i
  // fill(amount) 表示对于每个amount, 都使用 value 为 1的 coin来 make up
  // fill(amount + 1) 可以判断是否有解
  const dp = new Array(amount + 1).fill(amount + 1); // solution from 0 to amount or .fill(INT.MAX)

  dp[0] = 0;
  for (let a = 1; a < amount + 1; a++) {
    for (coin of coins) {
      if (a - coin >= 0) {
        // if current amoutn >= current coin, use current coin
        dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
      }
    }
  }
  if (dp[amount] != amount + 1) {
    return dp[amount];
  }
  return -1;
};

const n = coinChange_RM([1, 2, 5], 11);
